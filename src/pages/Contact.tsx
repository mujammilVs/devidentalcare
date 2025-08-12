import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Check if user came from doctors page
  const fromDoctors = location.state?.fromDoctors;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration - you would need to set up your EmailJS account
      await emailjs.send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        {
          ...formData,
          to_name: "Devi Dental Clinic SmileCare",
        },
        "your_public_key" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        preferredDate: "",
        preferredTime: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  const services = [
    "Hollywood Smile",
    "Dental Implants",
    "Invisalign",
    "Teeth Cleaning",
    "Root Canal",
    "Dental Crown & Bridges",
    "Orthodontic Treatment",
    "Other",
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
    

  <section className="py-20 bg-gradient-to-br from-aqua-600 via-aqua-500 to-aqua-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22 fill-rule=%22nonzero%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Get In <span className="text-gold-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-aqua-100 leading-relaxed">
              World-class dental professionals dedicated to your oral health and
              beautiful smile
            </p>
          </motion.div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-24 fill-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
          </svg>
        </div>
      </section>
      

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Contact Information
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-base sm:text-lg text-dark-600 leading-relaxed">
                  We're here to help you achieve the perfect smile. Contact us
                  today to schedule your consultation or ask any questions about
                  our services.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-aqua-50 to-aqua-100 rounded-3xl p-4 sm:p-6 border border-aqua-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-aqua-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 mb-1 text-sm sm:text-base">
                        {t("phone")}
                      </h3>
                      <p className="text-dark-600 mb-2 text-xs sm:text-sm">
                        Call us anytime
                      </p>
                      <a
                        href="tel:+97121234567"
                        className="text-aqua-600 font-semibold hover:text-aqua-700 transition-colors text-sm sm:text-base"
                      >
                        +971 2 123 4567
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-3xl p-4 sm:p-6 border border-gold-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 mb-1 text-sm sm:text-base">
                        {t("email")}
                      </h3>
                      <p className="text-dark-600 mb-2 text-xs sm:text-sm">
                        Send us an email
                      </p>
                      <a
                        href="mailto:info@abudhabismilecare.ae"
                        className="text-gold-600 font-semibold hover:text-gold-700 transition-colors text-sm sm:text-base break-all"
                      >
                        info@abudhabismilecare.ae
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-3xl p-4 sm:p-6 border border-cream-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 mb-1 text-sm sm:text-base">
                        Address
                      </h3>
                      <p className="text-dark-600 mb-2 text-xs sm:text-sm">
                        Visit our clinic
                      </p>
                      <p className="text-dark-700 font-medium text-sm sm:text-base">
                        Corniche Road, Al Markaziyah
                        <br />
                        Devi Dental Clinic, UAE
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-aqua-50 to-aqua-100 rounded-3xl p-4 sm:p-6 border border-aqua-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-aqua-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 mb-1 text-sm sm:text-base">
                        Opening Hours
                      </h3>
                      <div className="text-dark-600 space-y-1 text-xs sm:text-sm">
                        <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200 order-first lg:order-last"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gold-400 rounded-xl flex items-center justify-center">
                    <MessageSquare className="text-dark-900" size={20} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-900">
                    {fromDoctors
                      ? "Book Appointment with Our Doctors"
                      : "Book Appointment"}
                  </h3>
                </div>
                <p className="text-dark-600 text-sm sm:text-base">
                  {fromDoctors
                    ? "Schedule a consultation with one of our expert doctors. We'll get back to you within 24 hours."
                    : "Fill out the form below and we'll get back to you within 24 hours"}
                </p>
                {fromDoctors && (
                  <div className="mt-4 p-4 bg-aqua-50 rounded-xl border border-aqua-200">
                    <p className="text-aqua-700 text-sm font-medium">
                      💡 Tip: Mention which doctor you'd like to see in the
                      message field below
                    </p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-semibold text-dark-700 mb-2"
                    >
                      {t("name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-semibold text-dark-700 mb-2"
                    >
                      {t("email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-semibold text-dark-700 mb-2"
                    >
                      {t("phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs sm:text-sm font-semibold text-dark-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-xs sm:text-sm font-semibold text-dark-700 mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-xs sm:text-sm font-semibold text-dark-700 mb-2"
                    >
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold text-dark-700 mb-2"
                  >
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your dental concerns or questions..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-aqua-500 to-aqua-600 hover:from-aqua-600 hover:to-aqua-700 shadow-lg hover:shadow-xl"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t("sendMessage")}
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200 text-sm sm:text-base"
                  >
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                    <span>
                      Thank you! Your message has been sent successfully. We'll
                      contact you within 24 hours.
                    </span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200 text-sm sm:text-base"
                  >
                    <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                    <span>
                      Sorry, there was an error sending your message. Please try
                      again or call us directly.
                    </span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-aqua-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              Find Us
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark-900"
            >
              Visit Our Clinic
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-dark-600 max-w-2xl mx-auto"
            >
              Located in the heart of Devi Dental Clinic, our modern clinic is
              easily accessible
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-aqua-100 to-aqua-200 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="text-aqua-600 mx-auto" size={48} />
                <h3 className="text-2xl font-bold text-dark-900">
                  Interactive Map
                </h3>
                <p className="text-dark-600 max-w-md">
                  Our clinic is conveniently located on Corniche Road in Al
                  Markaziyah, Devi Dental Clinic. Easy parking available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-aqua-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-aqua-700 transition-colors"
                  >
                    Get Directions
                  </a>
                  <button className="border border-aqua-600 text-aqua-600 px-6 py-3 rounded-xl font-semibold hover:bg-aqua-50 transition-colors">
                    View in Maps
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22 fill-rule=%22nonzero%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Dental Emergency?
            </h2>
            <p className="text-xl text-red-100">
              We provide emergency Dental Care. Call us immediately for urgent
              dental problems.
            </p>
            <div className="pt-6">
              <motion.a
                href="tel:+971501234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                <Phone size={24} />
                Emergency: +971 50 123 4567
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
