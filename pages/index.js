import React, { useState } from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';

export default function KinderKindConnectLanding() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('parent');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled details
    const subject = `KinderKindConnect Interest: ${role === 'parent' ? 'Parent' : 'Tutor'}`;
    const body = `Hi Steve,\n\nI'm interested in KinderKindConnect.\n\nName: ${name}\nEmail: ${email}\nI am a: ${role}\n\nLooking forward to hearing from you!`;
    
    // For now, just show success message
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:kinderkindconnect@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-orange-600" />
          <h1 className="text-2xl font-bold text-gray-900">KinderKindConnect</h1>
        </div>
        <p className="text-sm text-gray-600 hidden sm:block">Where Learning Meets Personality</p>
      </nav>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Neurodiverse kids aren't broken.
              <span className="block text-orange-600 mt-2">The system is.</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              KinderKindConnect matches your child with tutors who understand <em>how</em> they learn—not how they should fit into a mold.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700"><strong>Personality-based matching</strong> — find the right personality fit, not just qualifications</p>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700"><strong>For homeschoolers & families</strong> — simple, direct, no bureaucracy</p>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700"><strong>We celebrate neurodiversity</strong> — as a strength, not something to fix</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h3>
                <p className="text-gray-600 mb-6">We're piloting with families and tutors. Join us.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="E.g., Sarah"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    >
                      <option value="parent">Parent of a neurodiverse child</option>
                      <option value="tutor">Tutor / Educator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-4 text-center">We'll reach out within 24 hours. No spam.</p>
              </>
            ) : (
              <div className="text-center py-8">
                <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks!</h3>
                <p className="text-gray-700">We'll be in touch shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-orange-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-600">
          <p>Built by a parent. For families. For change.</p>
        </div>
      </div>
    </div>
  );
}
