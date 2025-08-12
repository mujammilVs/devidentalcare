import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Shield, 
  Award,
  Phone,
  Calendar,
  ChevronDown,
  ChevronUp,
  Heart,
  Users,
  Target
} from 'lucide-react';
import { services } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const whyChooseUsFeatures = [
    {
      icon: Award,
      title: 'Expert Specialists',
      description: 'Highly qualified and experienced dental professionals'
    },
    {
      icon: Shield,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment for precise treatments'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Customized treatment plans for each patient'
    },
    {
      icon: Users,
      title: 'Proven Results',
      description: 'Thousands of successful treatments and happy patients'
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-aqua-600 via-aqua-500 to-aqua-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aqua-600/90 to-aqua-700/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-aqua-100 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-aqua-100 leading-relaxed">
                {service.fullDescription}
              </p>
              {service.price && (
                <div className="inline-block bg-gold-400 text-dark-900 px-6 py-3 rounded-full font-bold text-xl">
                  {service.price}
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-gold-400 text-dark-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  {t('bookAppointment')}
                  <Calendar size={20} />
                </Link>
                <a
                  href="tel:+97121234567"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent" />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Clock className="text-aqua-600" size={24} />
                  <div>
                    <div className="font-bold text-dark-900">Quick</div>
                    <div className="text-sm text-dark-600">Treatment</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-24 fill-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {t('benefits')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                  Why Choose This Treatment?
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="text-aqua-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-dark-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* When Needed */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block bg-gold-100 text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {t('whenNeeded')}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                  When Do You Need This?
                </h3>
                <div className="space-y-4">
                  {service.whenNeeded.map((condition, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Target className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-dark-700 font-medium">{condition}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      {service.beforeAfter && (
        <section className="py-20 bg-gradient-to-br from-cream-50 to-aqua-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium">
                Results
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
                See the Transformation
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={service.beforeAfter.before}
                    alt="Before treatment"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold text-dark-900">Before</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={service.beforeAfter.after}
                    alt="After treatment"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-aqua-600 px-4 py-2 rounded-full">
                    <span className="font-semibold text-white">After</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Procedure Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium">
              {t('procedure')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
              How It Works
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Our step-by-step approach ensures the best results with maximum comfort
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {service.procedureSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } items-center`}
              >
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-aqua-500 to-aqua-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Step content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-dark-900 mb-2">
                      Step {index + 1}
                    </h3>
                    <p className="text-dark-600 leading-relaxed">{step}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-aqua-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium">
              {t('whyChooseUs')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
              Why Choose SmileCare?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <feature.icon className="text-aqua-600 group-hover:text-aqua-700 transition-colors duration-300" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">{feature.title}</h3>
                <p className="text-dark-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block bg-aqua-100 text-aqua-600 px-4 py-2 rounded-full text-sm font-medium">
              {t('faq')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-dark-900 pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="text-aqua-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={24} />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-dark-600 leading-relaxed bg-gray-50">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aqua-600 to-aqua-700 relative overflow-hidden">
        <div className="absolute inset-0">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22 fill-rule=%22nonzero%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-aqua-100">
              Book your consultation today and take the first step towards your perfect smile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/contact"
                className="bg-gold-400 text-dark-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+97121234567"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-aqua-600 transition-all duration-300"
              >
                Call +971 2 123 4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;