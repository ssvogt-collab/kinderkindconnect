import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, role } = req.body;

  try {
    // Save submission to Supabase
    const { error: dbError } = await supabase
      .from('contacts')
      .insert({ name, email, role });

    if (dbError) {
      console.error('Supabase error:', dbError);
      return res.status(500).json({ error: 'Failed to save submission' });
    }

    // Send email via Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kinderkindconnect@proton.me',
      subject: `New KinderKindConnect Submission: ${
        role === 'parent' ? 'Parent' : 'Tutor'
      }`,
      html: `
        <h2>New Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${
          role === 'parent'
            ? 'Parent of a neurodiverse child'
            : role === 'tutor'
            ? 'Tutor / Educator'
            : 'Other'
        }</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
}
