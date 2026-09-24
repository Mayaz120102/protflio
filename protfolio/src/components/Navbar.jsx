import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Download, Eye } from "lucide-react";
import MagneticButton from "./MagneticButton";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu or modal is active
  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isCVOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isCVOpen]);

  // Press ESC to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsCVOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleViewCV = () => {
    setIsMenuOpen(false);
    setIsCVOpen(true);
  };

  const handleCloseCV = () => {
    setIsCVOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Abrar_Mayaz_s_CV.pdf";
    link.download = "Abrar_Mayaz_s_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-linear-to-r from-mint via-violet to-mint origin-left z-[60]"
        style={{ scaleX: progress }}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 rounded-2xl ${
          scrolled
            ? "bg-surface/80 backdrop-blur-md shadow-lg shadow-black/30 border border-white/10"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <MagneticButton
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2 group"
              strength={0.25}
            >
              <div className="w-8 h-8 bg-mint rounded transform rotate-45 transition-transform group-hover:rotate-90 duration-300" />
              <span className="font-display text-lg md:text-xl font-bold text-white">
                Abrar Mayaz
              </span>
            </MagneticButton>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                >
                  <span
                    className={
                      activeSection === item.id
                        ? "relative z-10 text-ink"
                        : "relative z-10 text-white hover:text-mint"
                    }
                  >
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-mint rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}

              {/* View CV Button */}
              <MagneticButton
                onClick={handleViewCV}
                strength={0.2}
                className="ml-2 bg-mint text-ink px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-mint/30 transition-shadow flex items-center gap-2"
              >
                <Eye size={16} />
                View CV
              </MagneticButton>

              {/* Download CV Button */}
              <MagneticButton
                onClick={handleDownloadCV}
                strength={0.2}
                className="ml-1 bg-violet text-ink px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-violet/40 transition-shadow flex items-center gap-2"
              >
                <Download size={16} />
                Download
              </MagneticButton>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white transition-transform hover:scale-110"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-md lg:hidden flex flex-col items-center justify-center gap-2"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
                onClick={() => handleNavClick(item.id)}
                className={`font-display text-3xl font-semibold py-3 transition-colors ${
                  activeSection === item.id ? "text-mint" : "text-white"
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            <div className="flex flex-col gap-3 mt-6 w-[220px]">
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navItems.length, duration: 0.35 }}
                onClick={handleViewCV}
                className="bg-mint text-ink px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                View CV
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 * (navItems.length + 1),
                  duration: 0.35,
                }}
                onClick={handleDownloadCV}
                className="bg-violet text-ink px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CV Modal Viewer */}
      <AnimatePresence>
        {isCVOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseCV}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl h-[85vh] bg-surface border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-surface">
                <h2 className="text-white font-display font-semibold text-base sm:text-lg">
                  Abrar Mayaz — CV Preview
                </h2>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadCV}
                    className="flex items-center gap-2 bg-violet text-ink px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm hover:shadow-lg transition-all"
                  >
                    <Download size={15} />
                    Download
                  </button>

                  <button
                    onClick={handleCloseCV}
                    aria-label="Close modal"
                    className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* PDF Container */}
              <div className="flex-1 w-full bg-neutral-900 overflow-hidden">
                <iframe
                  src="/Abrar_Mayaz_s_CV.pdf"
                  title="Abrar Mayaz CV"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;