export interface Doctor {
  id: string;
  name: string;
  position: string;
  specialization: string[];
  experience: string;
  education: string[];
  image: string;
  bio: string;
  languages: string[];
  awards?: string[];
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Ahmed Al-Rashid",
    position: "Chief Dental Officer & Cosmetic Dentist",
    specialization: [
      "Cosmetic Dentistry",
      "Hollywood Smile",
      "Veneers",
      "Teeth Whitening",
    ],
    experience: "15+ years",
    education: [
      "DDS - American University of Beirut",
      "Cosmetic Dentistry Certificate - UCLA",
      "Advanced Implantology - Nobel Biocare",
    ],
    image:
      "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Dr. Ahmed Al-Rashid is a renowned cosmetic dentist with over 15 years of experience in creating beautiful smiles. He specializes in Hollywood smile makeovers, porcelain veneers, and advanced cosmetic procedures. Dr. Al-Rashid has transformed thousands of smiles and is known for his artistic approach to dentistry.",
    languages: ["English", "Arabic", "French"],
    awards: [
      "Best Cosmetic Dentist - Devi Dental Clinic 2023",
      "Excellence in Dentistry Award",
    ],
  },
  {
    id: "2",
    name: "Dr. Sarah Johnson",
    position: "Oral & Maxillofacial Surgeon",
    specialization: [
      "Oral Surgery",
      "Dental Implants",
      "Wisdom Teeth",
      "Jaw Surgery",
    ],
    experience: "12+ years",
    education: [
      "DDS - Harvard School of Dental Medicine",
      "Oral & Maxillofacial Surgery Residency - Mayo Clinic",
      "Implant Dentistry Fellowship",
    ],
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Dr. Sarah Johnson is a board-certified oral and maxillofacial surgeon specializing in complex dental procedures. She has extensive experience in dental implant surgery, wisdom tooth extraction, and corrective jaw surgery. Her gentle approach ensures patient comfort throughout treatment.",
    languages: ["English", "Arabic", "Spanish"],
    awards: ["Outstanding Surgeon Award", "Patient Choice Award 2023"],
  },
  {
    id: "3",
    name: "Dr. Mohammed Al-Zahra",
    position: "Orthodontist & Invisalign Specialist",
    specialization: ["Orthodontics", "Invisalign", "Braces", "Jaw Alignment"],
    experience: "10+ years",
    education: [
      "DDS - University of Jordan",
      "Orthodontics Residency - King's College London",
      "Invisalign Certified Provider",
    ],
    image:
      "https://images.pexels.com/photos/5407764/pexels-photo-5407764.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Dr. Mohammed Al-Zahra is a certified orthodontist with expertise in traditional braces and Invisalign treatment. He focuses on creating perfectly aligned smiles for patients of all ages using the latest orthodontic techniques and technology.",
    languages: ["Arabic", "English"],
    awards: ["Excellence in Orthodontics", "Top Invisalign Provider"],
  },
  {
    id: "4",
    name: "Dr. Fatima Al-Mansouri",
    position: "Periodontist & Gum Specialist",
    specialization: [
      "Periodontics",
      "Gum Treatment",
      "Dental Implants",
      "Laser Therapy",
    ],
    experience: "8+ years",
    education: [
      "DDS - Emirates University",
      "Periodontics Residency - New York University",
      "Laser Therapy Certification",
    ],
    image:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Dr. Fatima Al-Mansouri is a skilled periodontist specializing in gum health and treatment. She uses advanced laser therapy techniques to treat gum disease and performs precise implant placement procedures with excellent success rates.",
    languages: ["Arabic", "English", "Hindi"],
    awards: ["Periodontal Excellence Award", "Innovation in Dentistry"],
  },
];
