import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  GraduationCap,
  Languages,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";
import { doctors } from "../data/doctors";
import { useLanguage } from "../contexts/LanguageContext";
import DoctorAppointmentModal from "../components/DoctorAppointmentModal";

const Doctors: React.FC = () => {
  const { t } = useLanguage();
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<
    (typeof doctors)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookAppointment = (doctor: (typeof doctors)[0]) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

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
              Meet Our <span className="text-gold-400">Doctors</span>
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

      {/* Doctors Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group perspective-1000"
                onMouseEnter={() => setFlippedCard(doctor.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className={`relative w-full h-[500px] transform-style-preserve-3d transition-transform duration-700 ${
                    flippedCard === doctor.id ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-gradient-to-br from-cream-50 to-white rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 h-full">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />

                        {/* Experience badge */}
                        <div className="absolute top-4 right-4 bg-gold-400 text-dark-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {doctor.experience}
                        </div>

                        {/* Awards if any */}
                        {doctor.awards && doctor.awards.length > 0 && (
                          <div className="absolute top-4 left-4 bg-aqua-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                            <Award size={14} />
                            Award Winner
                          </div>
                        )}
                      </div>

                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-dark-900 mb-1">
                            {doctor.name}
                          </h3>
                          <p className="text-aqua-600 font-medium">
                            {doctor.position}
                          </p>
                        </div>

                        {/* Specializations */}
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialization
                            .slice(0, 3)
                            .map((spec, idx) => (
                              <span
                                key={idx}
                                className="bg-aqua-100 text-aqua-700 px-3 py-1 rounded-full text-sm"
                              >
                                {spec}
                              </span>
                            ))}
                        </div>

                        {/* Languages */}
                        <div className="flex items-center gap-2 text-dark-600">
                          <Languages size={16} />
                          <span className="text-sm">
                            {doctor.languages.join(", ")}
                          </span>
                        </div>

                        {/* Hover instruction */}
                        <div className="text-center pt-4 border-t border-gray-100">
                          <p className="text-aqua-600 text-sm font-medium">
                            Hover to see full profile →
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-gradient-to-br from-aqua-600 to-aqua-700 rounded-3xl text-white h-full p-6 flex flex-col justify-between shadow-2xl">
                      <div className="space-y-4">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-1">
                            {doctor.name}
                          </h3>
                          <p className="text-aqua-200">{doctor.position}</p>
                        </div>

                        {/* Bio */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gold-400 flex items-center gap-2">
                            <Star size={16} />
                            Biography
                          </h4>
                          <p className="text-aqua-100 text-sm leading-relaxed">
                            {doctor.bio}
                          </p>
                        </div>

                        {/* Education */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gold-400 flex items-center gap-2">
                            <GraduationCap size={16} />
                            Education
                          </h4>
                          <div className="space-y-1">
                            {doctor.education.slice(0, 2).map((edu, idx) => (
                              <p key={idx} className="text-aqua-100 text-sm">
                                • {edu}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Awards */}
                        {doctor.awards && doctor.awards.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gold-400 flex items-center gap-2">
                              <Award size={16} />
                              Awards
                            </h4>
                            {doctor.awards.slice(0, 2).map((award, idx) => (
                              <p key={idx} className="text-aqua-100 text-sm">
                                • {award}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Contact Actions */}
                      <div className="space-y-3 pt-4 border-t border-aqua-500">
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => handleBookAppointment(doctor)}
                            className="bg-gold-400 text-dark-900 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gold-300 transition-colors flex items-center justify-center gap-2"
                          >
                            <Calendar size={14} />
                            Book Now
                          </button>
                          <a
                            href="tel:+97121234567"
                            className="border border-aqua-400 text-aqua-100 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-aqua-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Phone size={14} />
                            Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-aqua-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark-900"
            >
              Excellence You Can Trust
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Years Combined Experience" },
              { number: "15+", label: "Professional Certifications" },
              { number: "8", label: "Languages Spoken" },
              { number: "99%", label: "Patient Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-aqua-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
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
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Meet Your New Dentist?
            </h2>
            <p className="text-xl text-aqua-100">
              Schedule a consultation with one of our expert doctors and
              experience personalized Dental Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                state={{ fromDoctors: true }}
                className="bg-gold-400 text-dark-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300 transition-all duration-300 shadow-2xl"
              >
                Book Consultation
              </motion.a>
              <motion.a
                href="tel:+97121234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-aqua-600 transition-all duration-300"
              >
                Call +971 2 123 4567
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctor Appointment Modal */}
      {selectedDoctor && (
        <DoctorAppointmentModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedDoctor(null);
          }}
          doctor={selectedDoctor}
        />
      )}
    </div>
  );
};

export default Doctors;
