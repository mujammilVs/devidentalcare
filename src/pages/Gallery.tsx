import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Eye, X } from "lucide-react";
// import { useLanguage } from "../contexts/LanguageContext";

import banner from "../assets/dentalimages/teeth-6.jpg";

const Gallery: React.FC = () => {
  // const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/6812567/pexels-photo-6812567.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "clinic",
      title: "Modern Reception Area",
      description: "Welcoming and comfortable reception space",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "equipment",
      title: "Advanced Dental Equipment",
      description: "State-of-the-art dental technology",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/6812564/pexels-photo-6812564.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "results",
      title: "Hollywood Smile Results",
      description: "Beautiful smile transformation",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "team",
      title: "Expert Dental Team",
      description: "Professional and caring staff",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/6812579/pexels-photo-6812579.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "treatment",
      title: "Gentle Treatment Process",
      description: "Comfortable dental procedures",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/6812582/pexels-photo-6812582.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "treatment",
      title: "Precision Dentistry",
      description: "Detailed and careful treatment",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/6812637/pexels-photo-6812637.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "results",
      title: "Dental Implant Success",
      description: "Perfect implant restoration",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "team",
      title: "Consultation Session",
      description: "Personalized patient care",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/6812570/pexels-photo-6812570.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "results",
      title: "Invisalign Treatment",
      description: "Clear aligners for perfect smiles",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/6812581/pexels-photo-6812581.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "equipment",
      title: "Digital X-Ray System",
      description: "Advanced diagnostic imaging",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/6812578/pexels-photo-6812578.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "clinic",
      title: "Treatment Room",
      description: "Clean and modern treatment spaces",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/6812568/pexels-photo-6812568.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "results",
      title: "Orthodontic Results",
      description: "Beautiful straight teeth",
    },
  ];

  const categories = [
    { id: "all", name: "All Images" },
    { id: "clinic", name: "Clinic Interior" },
    { id: "equipment", name: "Equipment" },
    { id: "treatment", name: "Treatments" },
    { id: "results", name: "Results" },
    { id: "team", name: "Our Team" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const lightboxImages = filteredImages.map((img) => ({
    src: img.src,
    alt: img.title,
  }));

  return (
    <div className="min-h-screen pt-32">
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
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Our <span className="text-gold-400">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-aqua-100 leading-relaxed">
              Explore our modern clinic, advanced technology, and beautiful
              smile transformations
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
      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-aqua-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-aqua-100 hover:text-aqua-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-aqua-50">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <Eye className="text-white" size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Image info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-aqua-200 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No results */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Eye size={48} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                No images found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={lightboxImages}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
        render={{
          buttonPrev: lightboxImages.length <= 1 ? () => null : undefined,
          buttonNext: lightboxImages.length <= 1 ? () => null : undefined,
        }}
      />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              By the Numbers
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark-900"
            >
              Our Achievements
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Smile Transformations" },
              { number: "15", label: "Years of Excellence" },
              { number: "10000+", label: "Happy Patients" },
              { number: "25+", label: "Awards Won" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative">
                  <motion.div
                    className="text-5xl font-bold text-aqua-600 mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-dark-600 font-medium text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl text-aqua-100">
              Visit our clinic and see why thousands of patients trust us with
              their smiles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-400 text-dark-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300 transition-all duration-300 shadow-2xl"
              >
                Book Your Visit
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
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl text-aqua-100">
              Visit our clinic and see why thousands of patients trust us with
              their smiles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-400 text-dark-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300 transition-all duration-300 shadow-2xl"
              >
                Book Your Visit
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

export default Gallery;
