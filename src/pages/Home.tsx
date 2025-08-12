import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Users,
  Clock,
  Star,
  Phone,
  Calendar,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Home: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const stats = [
    { number: 15, label: t("yearsOfService"), suffix: "+" },
    { number: 10000, label: t("happyPatients"), suffix: "+" },
    { number: 12, label: t("specialists"), suffix: "" },
    { number: 25, label: "Awards Won", suffix: "+" },
  ];

  return (
    <div className="min-h-screen  ">
      {/* Hero Section with Parallax */}

      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 hidden md:block"
        >
          <div
            className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 181, 216, 0.8), rgba(0, 163, 196, 0.9)), url('https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            }}
          />
        </motion.div>

        {/* Mobile Background */}
        <div className="absolute inset-0 z-0 md:hidden bg-gradient-to-br from-aqua-600 to-aqua-700" />

        {/* Floating dental icons - hidden on smaller devices */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-6 h-6 sm:w-8 sm:h-8 text-white/20"
          />
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-6 h-6 sm:w-8 sm:h-8 text-white/20"
          >
            <Star size={28} className="sm:size-[32px]" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("heroTitle")}
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-aqua-100 leading-relaxed max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("heroSubtitle")}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="bg-gold-400 text-dark-900 px-5 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gold-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  {t("bookAppointment")}
                  <Calendar size={18} className="sm:size-[20px]" />
                </Link>
                <a
                  href="tel:+97121234567"
                  className="border-2 border-white text-white px-5 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-dark-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={18} className="sm:size-[20px]" />
                  <span className="hidden sm:inline">Call Now</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Appointment Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-first lg:order-last"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/20 shadow-2xl max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="text-dark-900" size={28} />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Book Your Appointment
                  </h3>
                  <p className="text-aqua-100 text-sm sm:text-base">
                    Get your perfect smile today!
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Free Initial Consultation",
                      "Digital Smile Analysis",
                      "Personalized Treatment Plan",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 text-white text-sm sm:text-base"
                      >
                        <CheckCircle
                          className="text-gold-400 flex-shrink-0"
                          size={18}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-gold-400 to-gold-300 text-dark-900 py-3 rounded-lg sm:rounded-xl font-semibold hover:from-gold-300 hover:to-gold-200 transition-all duration-300 text-sm sm:text-base"
                  >
                    Schedule Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-16 sm:h-20 md:h-24 fill-cream-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0V46.29..." opacity=".25" />
            <path d="M0,0V15.81..." opacity=".5" />
            <path d="M0,0V5.63..." />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-aqua-600 mb-2"
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  {stat.number.toLocaleString()}
                  {stat.suffix}
                </motion.div>
                <div className="text-dark-600 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium">
                About SmileCare
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 leading-tight">
                Excellence in <span className="text-aqua-600">Dental Care</span>
              </h2>
              <p className="text-base sm:text-lg text-dark-600 leading-relaxed">
                With over 15 years of excellence in Dental Care, Devi Dental
                Care SmileCare has been transforming smiles and improving lives.
                Our state-of-the-art facility combines advanced technology with
                compassionate care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Award className="text-gold-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-dark-800 text-sm sm:text-base">
                      Award Winning
                    </h4>
                    <p className="text-xs sm:text-sm text-dark-600">
                      Recognized excellence in dentistry
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-aqua-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-dark-800 text-sm sm:text-base">
                      Expert Team
                    </h4>
                    <p className="text-xs sm:text-sm text-dark-600">
                      Highly qualified specialists
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-gold-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-dark-800 text-sm sm:text-base">
                      Flexible Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-dark-600">
                      Convenient scheduling options
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="text-aqua-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-dark-800 text-sm sm:text-base">
                      5-Star Rated
                    </h4>
                    <p className="text-xs sm:text-sm text-dark-600">
                      Exceptional patient satisfaction
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-aqua-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-aqua-700 transition-colors text-sm sm:text-base"
              >
                {t("learnMore")}
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.pexels.com/photos/6812567/pexels-photo-6812567.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern dental clinic interior"
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aqua-900/20 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-400 rounded-full flex items-center justify-center">
                    <Star className="text-dark-900" size={20} />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-dark-900">
                      4.9/5
                    </div>
                    <div className="text-dark-600 text-sm">Patient Rating</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-aqua-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              Our Services
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900"
            >
              Comprehensive Dental Care
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto"
            >
              From routine check-ups to advanced cosmetic procedures, we offer
              complete dental solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Featured Services */}
            {[
              {
                title: "Hollywood Smile",
                description:
                  "Transform your smile with premium cosmetic dentistry",
                image:
                  "https://images.pexels.com/photos/6812564/pexels-photo-6812564.jpeg?auto=compress&cs=tinysrgb&w=400",
                link: "/services/hollywood-smile-abu-dhabi",
              },
              {
                title: "Dental Implants",
                description: "Permanent solution for missing teeth",
                image:
                  "https://images.pexels.com/photos/6812637/pexels-photo-6812637.jpeg?auto=compress&cs=tinysrgb&w=400",
                link: "/services/dental-implant-abu-dhabi",
              },
              {
                title: "Invisalign",
                description: "Invisible braces for perfect alignment",
                image:
                  "https://images.pexels.com/photos/6812570/pexels-photo-6812570.jpeg?auto=compress&cs=tinysrgb&w=400",
                link: "/services/invisalign-treatment-abu-dhabi",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={service.link}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-dark-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-dark-600 mb-4 text-sm sm:text-base">
                        {service.description}
                      </p>
                      <div className="flex items-center text-aqua-600 font-medium text-sm sm:text-base">
                        Learn More
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-aqua-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-aqua-700 transition-colors text-sm sm:text-base"
            >
              {t("viewAllServices")}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aqua-600 to-aqua-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22 fill-rule=%22nonzero%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Ready for Your Perfect Smile?
            </h2>
            <p className="text-lg sm:text-xl text-aqua-100">
              Book your consultation today and take the first step towards a
              healthier, more beautiful smile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/contact"
                className="bg-gold-400 text-dark-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gold-300 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+97121234567"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-aqua-600 transition-all duration-300"
              >
                <span className="hidden sm:inline">Call +971 2 123 4567</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
