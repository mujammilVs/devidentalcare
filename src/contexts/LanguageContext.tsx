import React, { createContext, useContext } from "react";

interface LanguageContextType {
  language: "en";
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  // Navigation
  home: "Home",
  about: "About Us",
  services: "Our Services",
  doctors: "Meet Our Doctors",
  gallery: "Gallery",
  contact: "Contact Us",

  // Hero Section
  heroTitle: "Your Smile, Our Priority",
  heroSubtitle:
    "Experience world-class Dental Care in the heart of Devi Dental Clinic",
  bookAppointment: "Book Appointment",

  // About Section
  aboutTitle: "About SmileCare",
  aboutDescription:
    "With over 15 years of excellence in Dental Care, Devi Dental Clinic SmileCare has been transforming smiles and improving lives. Our state-of-the-art facility combines advanced technology with compassionate care.",
  yearsOfService: "Years of Service",
  happyPatients: "Happy Patients",
  specialists: "Specialists",

  // Services
  servicesTitle: "Our Services",
  servicesSubtitle: "Comprehensive Dental Care for all your needs",
  viewAllServices: "View All Services",

  // Contact
  contactTitle: "Get in Touch",
  contactSubtitle: "Schedule your appointment today",
  name: "Name",
  email: "Email",
  phone: "Phone",
  message: "Message",
  sendMessage: "Send Message",

  // Common
  learnMore: "Learn More",
  readMore: "Read More",
  viewDetails: "View Details",
  whyChooseUs: "Why Choose Us",
  faq: "Frequently Asked Questions",
  benefits: "Benefits",
  whenNeeded: "When is it needed?",
  procedure: "Procedure Steps",
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: "en", t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
