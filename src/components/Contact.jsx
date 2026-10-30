
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData.js';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Send Email using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Email successfully sent
      setStatus('success');

      // Clear Form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {

      console.error('EmailJS Error:', error);

      setStatus('error');
      setErrorMessage(
        'Failed to send message. Please try again later.'
      );

    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative bg-slate-900/50"
    >

      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#0b0f19] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading */}

        <div className="text-center md:text-left mb-16">

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block relative">

            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Get In Touch
            </span>

            <span className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-sky-400 rounded-full mt-2"></span>

          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl font-light text-base md:text-lg">
            Let's discuss internship opportunities, project collaborations, or technical roles.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Side: Contact Cards */}

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            <div className="space-y-6">

              <h3 className="text-2xl font-extrabold text-white">
                Let's Connect!
              </h3>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Feel free to reach out via the form, or connect through phone or email directly. I respond quickly.
              </p>

            </div>

            {/* Contact Cards */}

            <div className="space-y-4 pt-4">

              {/* Email Card */}

              <a
                href={personalInfo.gmailUrl}
                className="glass-card glass-card-hover p-4 rounded-xl flex items-center space-x-4 border border-slate-800"
              >

                <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    Email Me
                  </p>

                  <p className="text-white text-sm md:text-base font-medium">
                    {personalInfo.email}
                  </p>
                </div>

              </a>

              {/* Phone Card */}

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="glass-card glass-card-hover p-4 rounded-xl flex items-center space-x-4 border border-slate-800"
              >

                <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    Call Me
                  </p>

                  <p className="text-white text-sm md:text-base font-medium">
                    {personalInfo.phone}
                  </p>
                </div>

              </a>

              {/* Location Card */}

              <div className="glass-card p-4 rounded-xl flex items-center space-x-4 border border-slate-800">

                <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    Location
                  </p>

                  <p className="text-white text-sm md:text-base font-medium">
                    {personalInfo.location}
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side: Contact Form */}

          <div className="lg:col-span-7">

            <div className="glass-card p-6 md:p-8 rounded-3xl border border-slate-800 h-full flex flex-col justify-center">

              {status === 'success' ? (

                /* Success Message */

                <div className="text-center py-12 space-y-4">

                  <div className="inline-flex p-4 bg-sky-500/10 text-sky-400 rounded-full mb-2">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <h4 className="text-2xl font-bold text-white">
                    Message Sent!
                  </h4>

                  <p className="text-slate-400 max-w-md mx-auto text-sm font-light">
                    Thank you for reaching out. I've received your message and will get back to you shortly.
                  </p>

                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                /* Contact Form */

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Name */}

                    <div className="space-y-2">

                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                      >
                        Your Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 focus:border-sky-500 rounded-xl text-white text-sm focus:outline-none transition-all placeholder:text-slate-600 focus:bg-slate-900 font-light"
                      />

                    </div>

                    {/* Email */}

                    <div className="space-y-2">

                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                      >
                        Email Address
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="johndoe@example.com"
                        className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 focus:border-sky-500 rounded-xl text-white text-sm focus:outline-none transition-all placeholder:text-slate-600 focus:bg-slate-900 font-light"
                      />

                    </div>

                  </div>

                  {/* Message */}

                  <div className="space-y-2">

                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hi Anil, let's talk about..."
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 focus:border-sky-500 rounded-xl text-white text-sm focus:outline-none transition-all placeholder:text-slate-600 resize-none focus:bg-slate-900 font-light"
                    />

                  </div>

                  {/* Error Message */}

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button */}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 border border-sky-400/20 cursor-pointer ${
                      status === 'loading'
                        ? 'bg-slate-800 text-slate-500 pointer-events-none'
                        : 'bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 hover:shadow-lg hover:shadow-sky-500/20 active:scale-98'
                    }`}
                  >

                    <span>
                      {status === 'loading'
                        ? 'Sending Message...'
                        : 'Send Message'}
                    </span>

                    <Send className="w-4 h-4" />

                  </button>

                </form>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

