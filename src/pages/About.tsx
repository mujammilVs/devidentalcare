import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Shield,
  Heart,
  Target,
  CheckCircle,
  Sparkles,
} from "lucide-react";
// import { useLanguage } from "../contexts/LanguageContext";
import banner from "../assets/dentalimages/teeth-5.jpg";
import about1 from "../assets/about-1.png";
import about2 from "../assets/about-2.png";
import about3 from "../assets/about-3.png";
import about4 from "../assets/about-4.png";

const About: React.FC = () => {
  // const { t } = useLanguage();

  const stats = [
    { number: "15", label: "Years Experience", suffix: "+" },
    { number: "10000", label: "Happy Patients", suffix: "+" },
    { number: "12", label: "Expert Doctors", suffix: "" },
    { number: "25", label: "Awards Won", suffix: "+" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, understanding, and personalized attention.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety is our priority with strict sterilization and safety protocols.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for perfection in every treatment and patient interaction.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Using cutting-edge technology and latest dental treatment methods.",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Founded",
      description:
        "Devi Dental Clinic SmileCare was established with a vision to provide world-class Dental Care.",
    },
    {
      year: "2015",
      title: "Expansion",
      description:
        "Opened our state-of-the-art facility with advanced dental technology.",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Introduced digital dentistry and 3D imaging technology.",
    },
    {
      year: "2024",
      title: "Recognition",
      description:
        'Awarded "Best Dental Clinic in Devi Dental Clinic" for exceptional patient care.',
    },
  ];

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-br from-aqua-600 via-aqua-500 to-aqua-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0  opacity-20"
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              About <span className="text-gold-400">Devi Dental Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-aqua-100 leading-relaxed">
              Transforming smiles and changing lives with exceptional dental
              care in Devi Dental Clinic
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

      {/* Stats Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative">
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-aqua-600 mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                    {stat.suffix}
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-dark-600 font-medium text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Story Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Our Story
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-900 leading-tight mb-6">
                  Excellence in{" "}
                  <span className="text-aqua-600">Dental Care</span> Since 2009
                </h2>
                <p className="text-lg text-dark-600 leading-relaxed mb-8">
                  Devi Dental Clinic SmileCare was founded with a simple yet
                  ambitious vision: to provide world-class Dental Care that
                  combines advanced technology with compassionate treatment.
                  Over the years, we have grown to become one of Devi Dental
                  Care's most trusted dental clinics.
                </p>
                <p className="text-lg text-dark-600 leading-relaxed">
                  Our team of highly qualified specialists is dedicated to
                  ensuring that every patient receives personalized care
                  tailored to their unique needs. From routine check-ups to
                  complex procedures, we approach every case with precision,
                  care, and attention to detail.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-aqua-500" size={24} />
                    <span className="font-semibold text-dark-800">
                      State-of-the-art technology
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-aqua-500" size={24} />
                    <span className="font-semibold text-dark-800">
                      Experienced specialists
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-aqua-500" size={24} />
                    <span className="font-semibold text-dark-800">
                      Personalized treatment plans
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-aqua-500" size={24} />
                    <span className="font-semibold text-dark-800">
                      Comfortable environment
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-aqua-500" size={24} />
                    <span className="font-semibold text-dark-800">
                      Flexible scheduling
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-aqua-500" size={24} />
                    <span className="font-semibold text-dark-800">
                      Insurance accepted
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Image collage */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-3xl group">
                      <img
                        src="https://images.pexels.com/photos/6812567/pexels-photo-6812567.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Modern clinic"
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-3xl group">
                      <img
                        src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Happy patient"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="relative overflow-hidden rounded-3xl group">
                      <img
                        src="https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Dental equipment"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-3xl group">
                      <img
                        src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Staff team"
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating awards badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -top-6 -right-6 bg-gold-400 rounded-2xl p-4 shadow-2xl"
                >
                  <div className="text-center">
                    <Award className="text-dark-900 mx-auto mb-2" size={32} />
                    <div className="text-dark-900 font-bold text-sm">
                      Best Clinic
                    </div>
                    <div className="text-dark-700 text-xs">2024</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* about us */}
     <section className="p-10 sm:p-16 lg:p-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
    {[about1, about2, about3, about4].map((img, idx) => (
      <div key={idx} className="text-center">
        <div className="p-6 border w-[120px] sm:w-[140px] md:w-[150px] mx-auto rounded-lg bg-white shadow-sm">
          <img src={img} alt={`About item ${idx + 1}`} className="w-full h-auto" />
        </div>
        <h2 className="text-lg sm:text-xl mt-4 font-semibold text-gray-800">
          Quick Examination
        </h2>
      </div>
    ))}
  </div>
</section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              Our Values
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark-900"
            >
              What Drives Us Forward
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-dark-600 max-w-2xl mx-auto"
            >
              Our core values guide everything we do, ensuring exceptional care
              and service
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-aqua-100 to-aqua-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-aqua-500 group-hover:to-aqua-600 transition-all duration-300">
                    <value.icon
                      className="text-aqua-600 group-hover:text-white transition-colors duration-300"
                      size={32}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-20 bg-gradient-to-br from-cream-50 to-aqua-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              Our Journey
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark-900"
            >
              Milestones of Excellence
            </motion.h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-aqua-200 to-aqua-400 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-16 gap-8`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-center`}
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                      <div className="text-4xl font-bold text-aqua-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-semibold text-dark-900 mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-dark-600 leading-relaxed">
                        {milestone.description}
                      </p>

                      <div
                        className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                          index % 2 === 0 ? "-right-4" : "-left-4"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 bg-aqua-500 rounded-full flex items-center justify-center transform ${
                            index % 2 === 0 ? "rotate-45" : "-rotate-45"
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-6 h-6 bg-aqua-500 rounded-full border-4 border-white shadow-lg z-10" />

                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>  */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-aqua-600 to-aqua-700 relative overflow-hidden">
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
              Experience the SmileCare Difference
            </h2>
            <p className="text-xl text-aqua-100">
              Join thousands of satisfied patients who trust us with their Devi
              Dental Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-400 text-dark-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300 transition-all duration-300 shadow-2xl"
              >
                Schedule Consultation
              </motion.a>
              <motion.a
                href="tel:+97121234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-aqua-600 transition-all duration-300"
              >
                Call Us Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="py-28 bg-gradient-to-br from-aqua-600 via-aqua-500 to-aqua-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0  opacity-20"
            style={{
              backgroundImage: `url(${""})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-6 text-center"
              >
                <div className="container mx-auto px-4 text-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-6"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      Experience the SmileCare Difference
                    </h2>
                    <p className="text-xl text-aqua-100">
                      Join thousands of satisfied patients who trust us with
                      their Devi Dental Care
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gold-400 text-dark-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300 transition-all duration-300 shadow-2xl"
                      >
                        Schedule Consultation
                      </motion.a>
                      <motion.a
                        href="tel:+97121234567"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-aqua-600 transition-all duration-300"
                      >
                        Call Us Today
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Curved divider */}
        <div className="absolute top-0 right-0 w-full">
          <svg
            className="w-full h-24 fill-white rotate-180"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default About;
