import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = ({ scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement("a");
    link.href = "/Abrar_Mayaz_CV.pdf"; // Put your CV in public folder
    link.download = "Abrar_Mayaz_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-cyan-400 rounded transform rotate-45 transition-transform group-hover:rotate-90 duration-300"></div>
            <span className="text-lg md:text-xl font-bold text-white">
              Abrar Mayaz
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors hover:text-cyan-400 ${
                  activeSection === item.id ? "text-cyan-400" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDownloadCV}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white transition-transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-slate-900/98 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left py-2 text-white hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleDownloadCV}
            className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
