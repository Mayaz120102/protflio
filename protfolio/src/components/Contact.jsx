import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import MagneticButton from "./MagneticButton";

const fieldClass =
  "w-full pl-11 pr-4 py-3 bg-ink border border-white/10 rounded-lg text-white placeholder-muted focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // idle | sending | sent
  const [sendState, setSendState] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendState("sending");

    const mailtoLink = `mailto:abrarmayaz2002@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setSendState("sent");
    }, 700);

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSendState("idle");
    }, 3000);
  };

  const socials = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abrar-mayaz-53b7b2282/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Mayaz120102",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourprofile",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Ambient glow, consistent with Hero/About */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="font-mono text-sm text-mint tracking-wide mb-3">
            {"// contact"}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Have a project in mind, or just want to say hello? I'd love to
            hear from you.
          </p>
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-mint/10 border border-mint/30 rounded-full text-mint text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
            </span>
            Available for freelance work
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="bg-linear-to-br from-surface-2/60 to-surface/60 p-8 rounded-2xl border border-white/10">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-mist/80 mb-2 text-sm">
                    Your Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                      size={18}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-mist/80 mb-2 text-sm">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                      size={18}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="xyz@example.com"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-mist/80 mb-2 text-sm">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-3.5 top-3.5 text-muted"
                      size={18}
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'd like to discuss..."
                      required
                      rows="5"
                      className={`${fieldClass} resize-none`}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <MagneticButton
                  type="submit"
                  disabled={sendState !== "idle"}
                  strength={0.15}
                  className="w-full bg-mint text-ink px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-mint/40 transition-shadow flex items-center justify-center gap-2 disabled:opacity-80"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {sendState === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <Send size={18} />
                        Send Message
                      </motion.span>
                    )}
                    {sendState === "sending" && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <motion.span
                          animate={{ x: [0, 16, 0], opacity: [1, 0, 1] }}
                          transition={{ duration: 0.7, repeat: Infinity }}
                        >
                          <Send size={18} />
                        </motion.span>
                        Sending...
                      </motion.span>
                    )}
                    {sendState === "sent" && (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 size={18} />
                        Message Sent!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </MagneticButton>
              </form>
            </SpotlightCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <SpotlightCard
              spotColor="167, 139, 250"
              className="bg-linear-to-br from-surface-2/60 to-surface/60 p-8 rounded-2xl border border-white/10"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-mint" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:abrarmayaz2002@gmail.com"
                      className="text-muted hover:text-mint transition-colors"
                    >
                      abrarmayaz2002@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-mint" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+8801400384709"
                      className="text-muted hover:text-mint transition-colors"
                    >
                      01400384709
                    </a>
                  </div>
                </motion.div>
              </div>
            </SpotlightCard>

            {/* Social Links */}
            <SpotlightCard
              spotColor="167, 139, 250"
              className="bg-linear-to-br from-surface-2/60 to-surface/60 p-8 rounded-2xl border border-white/10"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Find me on
              </h3>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, rotate: -6, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-12 h-12 bg-ink/60 rounded-lg flex items-center justify-center border border-white/10 hover:border-mint/50 hover:bg-mint/10 transition-colors"
                  >
                    <Icon className="text-white" size={22} />
                  </motion.a>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;