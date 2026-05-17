import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, role } = req.body;

    // Validate input
    if (!name || !email || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save to Supabase
    const { data, error: dbError } = await supabase
      .from('submissions')
      .insert([{ name, email, role }]);

    if (dbError) {
      console.error('Supabase error:', dbError);
      return res.status(500).json({ error: 'Failed to save submission' });
    }

    // Send email via Resend
    const emailError = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kinderkindconnect@proton.me',
      subject: `New KinderKindConnect Submission: ${role === 'parent' ? 'Parent' : 'Tutor'}`,
      html: `
        <h2>New Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role === 'parent' ? 'Parent of a neurodiverse child' : role === 'tutor' ? 'Tutor / Educator' : 'Other'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    if (emailError) {
      console.error('Email error:', emailError);
      // Still return success since data was saved
    }

    return res.status(200).json({ success: true, message: 'Submission received' });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
