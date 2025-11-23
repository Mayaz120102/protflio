import  { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Method 1: Using mailto (Opens email client)
    const mailtoLink = `mailto:abrarmayaz2002@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;

    setStatus('Opening your email client...');
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
    }, 2000);

    // Note: For production, use EmailJS, Formspree, or a backend API
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind, or just want to say hello? I'd love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start ">
          {/* Contact Form */}
          <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="xyz@example.com"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'd like to discuss..."
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50"
              >
                Send Message
              </button>

              {/* Status Message */}
              {status && (
                <p className="text-center text-cyan-400 text-sm">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:johndoe@email.com"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      abrarmayaz2002@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+12345678901"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      01400384709
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Find me on
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/abrar-mayaz-53b7b2282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href="https://github.com/Mayaz120102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
                >
                  <Github className="text-white" size={24} />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
                >
                  <Twitter className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 John Doe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Contact;