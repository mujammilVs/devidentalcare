import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../assets/dental-logo-removebg.png";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative ">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[white] rounded-full flex items-center justify-center">
                  <img src={logo} alt="" width={40} />
                </div>
              </div>
              <div>
                <div
                  className="text-lg sm:text-xl font-bold font-serif "
                  style={{
                    fontFamily: "'Playfair Display', serif", // Elegant serif font
                    textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
                    letterSpacing: "0.15em",
                  }}
                >
                  DEVI
                </div>
                <div
                  className="text-xs sm:text-sm text-white"
                  style={{
                    fontFamily: "'Playfair Display', serif", // Elegant serif font
                    textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
                    letterSpacing: "0.15em",
                  }}
                >
                  DENTAL CLINIC
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Your premier dental clinic in Devi Dental Clinic, providing
              world-class Dental Care with a focus on excellence, comfort, and
              innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-aqua-600 rounded-full flex items-center justify-center hover:bg-aqua-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-aqua-600 rounded-full flex items-center justify-center hover:bg-aqua-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-aqua-600 rounded-full flex items-center justify-center hover:bg-aqua-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  {t("doctors")}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  {t("gallery")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-gold-400">
              Popular Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/hollywood-smile-abu-dhabi"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  Hollywood Smile
                </Link>
              </li>
              <li>
                <Link
                  to="/services/dental-implant-abu-dhabi"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  to="/services/invisalign-treatment-abu-dhabi"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  Invisalign
                </Link>
              </li>
              <li>
                <Link
                  to="/services/teeth-cleaning-abu-dhabi"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  Teeth Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/root-canal-treatment-abu-dhabi"
                  className="text-gray-300 hover:text-aqua-400 transition-colors text-sm sm:text-base"
                >
                  Root Canal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-gold-400">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-aqua-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300 text-sm sm:text-base">
                  bus stop, Shapur Nagar Main Rd, opposite to shapur, Phase 1,
                  IDA Jeedimetla, Chinthal, Jeedimetla,
                  <br />
                  Hyderabad, Telangana 500055
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-aqua-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">
                  04023093359
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-aqua-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">
                  info@abudhabismilecare.ae
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-aqua-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-300 text-sm sm:text-base">
                  <div>Mon - Fri: 8:00 AM - 8:00 PM</div>
                  <div>Sat: 9:00 AM - 6:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} Devi Dental Clinic. All rights
              reserved.
            </p>

            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-aqua-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-aqua-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-aqua-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
