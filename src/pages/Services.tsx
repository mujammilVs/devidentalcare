import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight, Star } from "lucide-react";
import { services } from "../data/services";
import { useLanguage } from "../contexts/LanguageContext";

import banner from "../assets/dentalimages/equipment.jpg";

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "cosmetic", name: "Cosmetic Dentistry" },
    { id: "general", name: "General Dentistry" },
    { id: "surgical", name: "Oral Surgery" },
    { id: "orthodontics", name: "Orthodontics" },
  ];

  const getCategoryFromService = (service: (typeof services)[0]) => {
    const title = service.title.toLowerCase();
    if (
      title.includes("hollywood") ||
      title.includes("smile") ||
      title.includes("whitening")
    )
      return "cosmetic";
    if (
      title.includes("braces") ||
      title.includes("orthodontic") ||
      title.includes("invisalign")
    )
      return "orthodontics";
    if (
      title.includes("surgery") ||
      title.includes("extraction") ||
      title.includes("implant")
    )
      return "surgical";
    return "general";
  };

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      getCategoryFromService(service) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Our <span className="text-gold-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-aqua-100 leading-relaxed">
              Comprehensive Dental Care solutions tailored to your unique needs
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

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto">
              <Filter className="text-gray-500 flex-shrink-0" size={20} />
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                      selectedCategory === category.id
                        ? "bg-aqua-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-aqua-100 hover:text-aqua-600"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-gray-600 text-sm sm:text-base">
            Showing {filteredServices.length} of {services.length} services
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-aqua-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${searchTerm}-${selectedCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Service Card */}
                    <div className="relative">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Price badge if available */}
                      {service.price && (
                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gold-400 text-dark-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                          {service.price}
                        </div>
                      )}
                    </div>

                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-dark-900 mb-3 group-hover:text-aqua-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-dark-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {service.shortDescription}
                      </p>

                      {/* Benefits preview */}
                      <div className="space-y-2 mb-4 sm:mb-6">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-dark-600"
                          >
                            <Star
                              className="text-gold-400 flex-shrink-0"
                              size={16}
                            />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-aqua-600 font-semibold hover:text-aqua-700 transition-colors group/link text-sm sm:text-base"
                      >
                        {t("viewDetails")}
                        <ArrowRight
                          size={16}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>

                    {/* Hover effect card flip preview */}
                    <div className="absolute inset-0 bg-aqua-600 rounded-3xl opacity-0 group-hover:opacity-95 transition-all duration-300 transform scale-95 group-hover:scale-100 pointer-events-none hidden sm:block">
                      <div className="p-4 sm:p-6 h-full flex flex-col justify-center text-white text-center">
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
                          {service.title}
                        </h4>
                        <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                          Click to learn more about this treatment and see
                          detailed information
                        </p>
                        <div className="text-gold-400 font-semibold text-sm sm:text-base">
                          View Full Details →
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                No services found
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-aqua-600 to-aqua-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22 fill-rule=%22nonzero%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-lg sm:text-xl text-aqua-100">
              Our dental experts are here to help you find the perfect treatment
              for your needs
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
            className="max-w-3xl mx-auto space-y-6 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-lg sm:text-xl text-aqua-100">
              Our dental experts are here to help you find the perfect treatment
              for your needs
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

export default Services;
