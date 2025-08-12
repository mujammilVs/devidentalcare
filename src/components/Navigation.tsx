import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Bluetooth as Tooth } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../assets/dental-logo-removebg.png";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("services"), path: "/services" },
    { name: t("doctors"), path: "/doctors" },
    { name: t("gallery"), path: "/gallery" },
    { name: t("contact"), path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-aqua-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>04023093359</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin size={16} />
              <span>
                bus stop, Shapur Nagar Main Rd, opposite to shapur, Phase 1, IDA
                Jeedimetla, Chinthal, Jeedimetla, Hyderabad, Telangana 500055
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg top-0" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20 ">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1">
              <div className="relative">
                <img src={logo} alt="" width={60} />
              </div>
              <div>
                <div
                  className={`text-lg sm:text-xl font-bold font-serif  ${
                    scrolled ? "text-[#2a2d45ee]" : "text-[#2a2d45ee]"
                  }`}
                  style={{
                    fontFamily: "'Playfair Display', serif", // Elegant serif font
                    textShadow: scrolled
                      ? "1px 1px 3px rgba(0,0,0,0.15)"
                      : "1px 1px 8px rgba(255,255,255,0.4)",
                    letterSpacing: "0.15em",
                  }}
                >
                  DEVI
                </div>
                <div
                  className={`text-xs sm:text-sm ${
                    scrolled ? "text-green-700" : "text-green-700"
                  }`}
                  style={{
                    fontFamily: "'Playfair Display', serif", // Elegant serif font
                    textShadow: scrolled
                      ? "1px 1px 3px rgba(0,0,0,0.15)"
                      : "1px 1px 8px rgba(255,255,255,0.4)",
                    letterSpacing: "0.15em",
                  }}
                >
                  DENTAL CLINIC
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm xl:text-base font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? scrolled
                        ? "text-aqua-600"
                        : "text-gold-400"
                      : scrolled
                      ? "text-dark-700 hover:text-aqua-600"
                      : "text-[#2a2d45ee] hover:text-gold-400"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        scrolled ? "bg-aqua-600" : "bg-gold-400"
                      }`}
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-aqua-500 to-aqua-600 text-white px-4 xl:px-6 py-2 rounded-full font-medium hover:from-aqua-600 hover:to-aqua-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm xl:text-base"
              >
                <span className="hidden xl:inline">{t("bookAppointment")}</span>
                <span className="xl:hidden">Book Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X
                  className={scrolled ? "text-dark-900" : "text-white"}
                  size={24}
                />
              ) : (
                <Menu
                  className={scrolled ? "text-dark-900" : "text-white"}
                  size={24}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 sm:px-6 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-3 text-base text-dark-700 hover:text-aqua-600 font-medium transition-colors ${
                      location.pathname === item.path ? "text-aqua-600" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="inline-block mt-4 bg-gradient-to-r from-aqua-500 to-aqua-600 text-white px-6 py-3 rounded-full font-medium text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {t("bookAppointment")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;
