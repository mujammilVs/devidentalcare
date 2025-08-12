export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
  benefits: string[];
  whenNeeded: string[];
  procedureSteps: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  price?: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Full Mouth Examination",
    slug: "full-mouth-examination",
    shortDescription:
      "Comprehensive dental health assessment and diagnostic evaluation",
    fullDescription:
      "Our comprehensive full mouth examination is a thorough assessment of your oral health, including teeth, gums, jaw, and surrounding tissues. Using advanced diagnostic tools and techniques, our experienced dentists evaluate every aspect of your dental health to create a personalized treatment plan.",
    image:
      "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Early detection of dental problems",
      "Comprehensive oral health assessment",
      "Personalized treatment planning",
      "Prevention of future complications",
      "Digital X-ray examination",
      "Professional oral hygiene advice",
    ],
    whenNeeded: [
      "Every 6 months for routine check-ups",
      "When experiencing dental pain or discomfort",
      "Before starting any dental treatment",
      "For new patients",
      "When noticing changes in oral health",
    ],
    procedureSteps: [
      "Medical and dental history review",
      "Visual examination of teeth and gums",
      "Digital X-ray imaging if required",
      "Bite and jaw alignment assessment",
      "Oral cancer screening",
      "Treatment plan discussion and recommendations",
    ],
    faqs: [
      {
        question: "How long does a full mouth examination take?",
        answer:
          "A comprehensive examination typically takes 45-60 minutes, depending on your oral health condition and any additional diagnostic procedures needed.",
      },
      {
        question: "Is the examination painful?",
        answer:
          "No, the examination is completely painless. Our dentists use gentle techniques to ensure your comfort throughout the process.",
      },
      {
        question: "How often should I have a full mouth examination?",
        answer:
          "We recommend a comprehensive examination every 6 months for optimal oral health maintenance.",
      },
    ],
  },
  {
    id: "2",
    title: "Hollywood Smile in Devi Dental Clinic",
    slug: "hollywood-smile-abu-dhabi",
    shortDescription:
      "Transform your smile with premium cosmetic dentistry for a celebrity-worthy appearance",
    fullDescription:
      "Achieve the perfect Hollywood smile with our advanced cosmetic dentistry treatments. Our Hollywood smile makeover combines multiple aesthetic procedures including veneers, whitening, and contouring to create a stunning, natural-looking smile that boosts your confidence.",
    image:
      "https://images.pexels.com/photos/6812564/pexels-photo-6812564.jpeg?auto=compress&cs=tinysrgb&w=800",
    beforeAfter: {
      before:
        "https://images.pexels.com/photos/5069318/pexels-photo-5069318.jpeg?auto=compress&cs=tinysrgb&w=400",
      after:
        "https://images.pexels.com/photos/6812565/pexels-photo-6812565.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    benefits: [
      "Celebrity-worthy smile transformation",
      "Boost in self-confidence and self-esteem",
      "Natural-looking, premium materials",
      "Long-lasting aesthetic results",
      "Improved facial harmony",
      "Enhanced professional appearance",
    ],
    whenNeeded: [
      "Discolored or stained teeth",
      "Gaps between teeth",
      "Misaligned or uneven teeth",
      "Chipped or damaged teeth",
      "Desire for a complete smile makeover",
      "Special occasions or career requirements",
    ],
    procedureSteps: [
      "Initial consultation and smile analysis",
      "Digital smile design and planning",
      "Preparation and impressions",
      "Temporary restoration placement",
      "Final restoration fabrication",
      "Bonding and final adjustments",
      "Follow-up and maintenance guidance",
    ],
    faqs: [
      {
        question: "How long does a Hollywood smile treatment take?",
        answer:
          "The complete Hollywood smile transformation typically takes 2-3 weeks, involving multiple appointments for preparation, fabrication, and placement.",
      },
      {
        question: "Will my Hollywood smile look natural?",
        answer:
          "Yes, our experienced cosmetic dentists ensure your Hollywood smile looks completely natural while enhancing your facial features and overall appearance.",
      },
      {
        question: "How long do Hollywood smile results last?",
        answer:
          "With proper care and maintenance, your Hollywood smile can last 10-15 years or longer, making it an excellent long-term investment.",
      },
    ],
    price: "Starting from INR 8,000",
  },
  {
    id: "3",
    title: "Gum Treatment",
    slug: "gum-treatment",
    shortDescription:
      "Professional periodontal therapy to restore healthy gums and prevent tooth loss",
    fullDescription:
      "Our comprehensive gum treatment addresses various stages of gum disease, from gingivitis to advanced periodontitis. Using the latest techniques and technology, we restore your gum health, prevent tooth loss, and improve your overall oral health.",
    image:
      "https://images.pexels.com/photos/6812579/pexels-photo-6812579.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Prevention of tooth loss",
      "Elimination of gum infection",
      "Improved oral hygiene",
      "Fresh breath restoration",
      "Enhanced aesthetic appearance",
      "Better overall health",
    ],
    whenNeeded: [
      "Bleeding gums during brushing",
      "Swollen or tender gums",
      "Persistent bad breath",
      "Receding gums",
      "Loose teeth",
      "Pus between teeth and gums",
    ],
    procedureSteps: [
      "Comprehensive periodontal examination",
      "Deep cleaning (scaling and root planing)",
      "Antimicrobial therapy if needed",
      "Surgical intervention for advanced cases",
      "Maintenance and follow-up care",
      "Oral hygiene instruction",
    ],
    faqs: [
      {
        question: "Is gum treatment painful?",
        answer:
          "We use local anesthesia and modern techniques to minimize discomfort. Most patients experience only mild sensitivity during recovery.",
      },
      {
        question: "How long does gum treatment take to heal?",
        answer:
          "Initial healing typically takes 1-2 weeks, while complete healing may take several months depending on the severity of the condition.",
      },
      {
        question: "Can gum disease be completely cured?",
        answer:
          "Early-stage gum disease (gingivitis) can be completely reversed, while advanced periodontitis can be managed and controlled with proper treatment.",
      },
    ],
  },
  {
    id: "4",
    title: "Intra Oral X-Ray",
    slug: "intra-oral-x-ray",
    shortDescription:
      "Digital radiographic imaging for precise dental diagnosis and treatment planning",
    fullDescription:
      "Our state-of-the-art digital intra-oral X-ray systems provide detailed images of your teeth, roots, and surrounding bone structure. These high-resolution images help us diagnose problems early and plan the most effective treatments with minimal radiation exposure.",
    image:
      "https://images.pexels.com/photos/6812639/pexels-photo-6812639.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Early problem detection",
      "Minimal radiation exposure",
      "Instant digital results",
      "Enhanced diagnostic accuracy",
      "Better treatment planning",
      "Environmental friendly (no chemicals)",
    ],
    whenNeeded: [
      "Routine dental check-ups",
      "Suspected cavities or infections",
      "Root canal treatment planning",
      "Implant placement planning",
      "Orthodontic evaluation",
      "Wisdom tooth assessment",
    ],
    procedureSteps: [
      "Positioning of X-ray sensor",
      "Brief radiation exposure",
      "Digital image capture",
      "Immediate image review",
      "Analysis and diagnosis",
      "Treatment planning discussion",
    ],
    faqs: [
      {
        question: "Are dental X-rays safe?",
        answer:
          "Yes, modern digital X-rays use very low levels of radiation and are completely safe. The exposure is less than what you receive from natural background radiation.",
      },
      {
        question: "How often do I need X-rays?",
        answer:
          "The frequency depends on your oral health condition. Generally, routine X-rays are taken every 1-2 years, while specific diagnostic X-rays are taken as needed.",
      },
      {
        question: "Can pregnant women have X-rays?",
        answer:
          "We generally avoid X-rays during pregnancy unless absolutely necessary. If required, we use additional protective measures to ensure safety.",
      },
    ],
  },
  {
    id: "5",
    title: "Root Canal Treatment in Devi Dental Clinic",
    slug: "root-canal-treatment-abu-dhabi",
    shortDescription:
      "Advanced endodontic therapy to save infected teeth and eliminate pain",
    fullDescription:
      "Our root canal treatment uses the latest endodontic techniques to save severely infected or damaged teeth. With advanced rotary systems and microscopic precision, we can eliminate infection, relieve pain, and preserve your natural tooth structure.",
    image:
      "https://images.pexels.com/photos/6812581/pexels-photo-6812581.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Saves natural tooth structure",
      "Eliminates severe tooth pain",
      "Prevents spread of infection",
      "Cost-effective tooth preservation",
      "Maintains proper chewing function",
      "Avoids need for tooth extraction",
    ],
    whenNeeded: [
      "Severe tooth pain",
      "Sensitivity to hot/cold",
      "Swollen gums around tooth",
      "Deep cavity reaching nerve",
      "Cracked or traumatized tooth",
      "Darkening of tooth color",
    ],
    procedureSteps: [
      "Local anesthesia administration",
      "Access opening creation",
      "Infected tissue removal",
      "Root canal cleaning and shaping",
      "Disinfection and medication",
      "Root canal filling and sealing",
      "Crown placement for protection",
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "With modern anesthesia and techniques, root canal treatment is no more uncomfortable than having a large filling. Most patients experience immediate pain relief.",
      },
      {
        question: "How long does root canal treatment take?",
        answer:
          "Most root canals can be completed in 1-2 appointments, each lasting 90-120 minutes depending on the complexity of the case.",
      },
      {
        question: "What happens after root canal treatment?",
        answer:
          "After root canal treatment, the tooth will need a crown for protection. With proper care, a root canal-treated tooth can last a lifetime.",
      },
    ],
    price: "Starting from INR 1,200",
  },
  {
    id: "6",
    title: "Tooth Extraction in Devi Dental Clinic",
    slug: "tooth-extraction-abu-dhabi",
    shortDescription:
      "Gentle and painless tooth removal with advanced surgical techniques",
    fullDescription:
      "When tooth preservation is not possible, our skilled oral surgeons perform gentle extractions using advanced techniques. We prioritize patient comfort and provide comprehensive aftercare to ensure optimal healing and recovery.",
    image:
      "https://images.pexels.com/photos/6812633/pexels-photo-6812633.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Pain relief from problematic teeth",
      "Prevention of infection spread",
      "Improved oral health",
      "Space creation for orthodontics",
      "Minimal discomfort procedure",
      "Fast healing with proper care",
    ],
    whenNeeded: [
      "Severely damaged or decayed teeth",
      "Impacted wisdom teeth",
      "Overcrowded teeth",
      "Gum disease affecting tooth support",
      "Preparation for orthodontic treatment",
      "Fractured tooth beyond repair",
    ],
    procedureSteps: [
      "Pre-extraction examination",
      "Local anesthesia administration",
      "Gentle tooth loosening",
      "Careful tooth removal",
      "Socket cleaning and inspection",
      "Bleeding control and suturing",
      "Post-operative instructions",
    ],
    faqs: [
      {
        question: "How long does tooth extraction take?",
        answer:
          "Simple extractions typically take 10-30 minutes, while complex surgical extractions may take 45-90 minutes.",
      },
      {
        question: "What should I expect after tooth extraction?",
        answer:
          "Some swelling and discomfort is normal. Most patients return to normal activities within 24-48 hours with proper aftercare.",
      },
      {
        question: "When can I eat after tooth extraction?",
        answer:
          "You can eat soft foods immediately after the numbness wears off. Avoid hot foods and drinks for the first 24 hours.",
      },
    ],
    price: "Starting from INR 300",
  },
  {
    id: "7",
    title: "Teeth Cleaning in Devi Dental Clinic (Scaling & Polishing)",
    slug: "teeth-cleaning-abu-dhabi",
    shortDescription:
      "Professional deep cleaning to remove plaque, tartar, and stains for optimal oral health",
    fullDescription:
      "Our professional teeth cleaning service combines scaling and polishing to remove harmful plaque and tartar buildup. Using ultrasonic technology and expert techniques, we restore your teeth's natural brightness and promote long-term oral health.",
    image:
      "https://images.pexels.com/photos/6812584/pexels-photo-6812584.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Removal of plaque and tartar",
      "Prevention of gum disease",
      "Fresher breath",
      "Brighter, cleaner teeth",
      "Improved oral hygiene",
      "Early problem detection",
    ],
    whenNeeded: [
      "Every 6 months for maintenance",
      "Visible plaque or tartar buildup",
      "Bad breath concerns",
      "Gum bleeding or sensitivity",
      "Before other dental procedures",
      "Stained or discolored teeth",
    ],
    procedureSteps: [
      "Oral examination and assessment",
      "Ultrasonic scaling for tartar removal",
      "Manual scaling for stubborn deposits",
      "Teeth polishing with special paste",
      "Fluoride treatment application",
      "Oral hygiene instruction",
    ],
    faqs: [
      {
        question: "How often should I get professional cleaning?",
        answer:
          "Most patients should have professional cleaning every 6 months, though some may need more frequent visits based on their oral health condition.",
      },
      {
        question: "Is teeth cleaning painful?",
        answer:
          "Professional cleaning is generally comfortable. Some patients with sensitive teeth may experience mild discomfort, which can be managed with topical anesthetic.",
      },
      {
        question: "Will my teeth be whiter after cleaning?",
        answer:
          "Professional cleaning removes surface stains and will restore your teeth's natural color, though it's not a whitening treatment.",
      },
    ],
    price: "Starting from INR 250",
  },
  {
    id: "8",
    title: "Dental Crown and Bridges in Devi Dental Clinic",
    slug: "dental-crown-bridges-abu-dhabi",
    shortDescription:
      "Restore damaged teeth and replace missing teeth with premium crowns and bridges",
    fullDescription:
      "Our custom-made dental crowns and bridges restore the function and appearance of damaged or missing teeth. Using high-quality materials and advanced techniques, we create durable, natural-looking restorations that blend seamlessly with your existing teeth.",
    image:
      "https://images.pexels.com/photos/6812567/pexels-photo-6812567.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Restored tooth function",
      "Natural appearance",
      "Long-lasting durability",
      "Improved chewing ability",
      "Enhanced facial support",
      "Protection of weakened teeth",
    ],
    whenNeeded: [
      "Large cavities or damage",
      "After root canal treatment",
      "Missing one or more teeth",
      "Cracked or broken teeth",
      "Severe tooth discoloration",
      "Aesthetic improvement needs",
    ],
    procedureSteps: [
      "Initial consultation and planning",
      "Tooth preparation and shaping",
      "Impression taking",
      "Temporary restoration placement",
      "Final restoration fabrication",
      "Permanent cementation",
      "Follow-up and adjustments",
    ],
    faqs: [
      {
        question: "How long do dental crowns last?",
        answer:
          "With proper care, dental crowns typically last 10-15 years or longer. Good oral hygiene and regular check-ups help extend their lifespan.",
      },
      {
        question: "Are there different types of crown materials?",
        answer:
          "Yes, we offer porcelain, ceramic, and zirconia crowns. We'll recommend the best material based on your specific needs and aesthetic preferences.",
      },
      {
        question: "How long does the crown/bridge process take?",
        answer:
          "The complete process typically takes 2-3 weeks, involving 2-3 appointments for preparation, impressions, and final placement.",
      },
    ],
    price: "Starting from INR 1,800",
  },
  {
    id: "9",
    title: "Dentures",
    slug: "dentures",
    shortDescription:
      "Complete and partial dentures for natural-looking tooth replacement",
    fullDescription:
      "Our custom-fitted dentures provide a comfortable, functional solution for missing teeth. Whether you need complete or partial dentures, we create natural-looking prosthetics that restore your smile and improve your quality of life.",
    image:
      "https://images.pexels.com/photos/6812578/pexels-photo-6812578.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Restored chewing function",
      "Improved speech clarity",
      "Enhanced facial support",
      "Natural appearance",
      "Boost in self-confidence",
      "Cost-effective tooth replacement",
    ],
    whenNeeded: [
      "Multiple missing teeth",
      "Complete tooth loss",
      "Failed dental work",
      "Extensive gum disease",
      "Facial collapse from tooth loss",
      "Budget-friendly restoration option",
    ],
    procedureSteps: [
      "Initial consultation and examination",
      "Impressions and measurements",
      "Bite registration",
      "Try-in appointment",
      "Final adjustments",
      "Denture delivery and fitting",
      "Follow-up care and adjustments",
    ],
    faqs: [
      {
        question: "How long does it take to get used to dentures?",
        answer:
          "Most patients adjust to new dentures within 2-4 weeks. Initially, you may experience some discomfort and difficulty eating or speaking.",
      },
      {
        question: "Can I sleep with my dentures?",
        answer:
          "It's recommended to remove dentures at night to give your gums time to rest and to maintain good oral hygiene.",
      },
      {
        question: "How long do dentures last?",
        answer:
          "With proper care, dentures typically last 5-8 years before needing replacement or significant adjustments.",
      },
    ],
    price: "Starting from INR 2,500",
  },
  {
    id: "10",
    title: "Dental Filling in Devi Dental Clinic",
    slug: "dental-filling-abu-dhabi",
    shortDescription:
      "Tooth-colored composite fillings to restore cavities and maintain natural aesthetics",
    fullDescription:
      "Our advanced composite filling materials match your natural tooth color perfectly while providing excellent durability. We restore cavities and damaged teeth with minimal tooth preparation, preserving as much healthy tooth structure as possible.",
    image:
      "https://images.pexels.com/photos/6812582/pexels-photo-6812582.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Natural tooth color matching",
      "Mercury-free materials",
      "Minimal tooth preparation",
      "Strong and durable",
      "Immediate function",
      "Maintains tooth structure",
    ],
    whenNeeded: [
      "Cavities and tooth decay",
      "Chipped or cracked teeth",
      "Worn tooth surfaces",
      "Replacement of old fillings",
      "Small cosmetic improvements",
      "Preventive treatment",
    ],
    procedureSteps: [
      "Local anesthesia if needed",
      "Decay removal and cleaning",
      "Tooth preparation",
      "Composite material placement",
      "Shaping and contouring",
      "Curing with special light",
      "Final polishing and adjustment",
    ],
    faqs: [
      {
        question: "How long do composite fillings last?",
        answer:
          "Composite fillings typically last 7-10 years with proper care and regular dental check-ups.",
      },
      {
        question: "Are white fillings better than silver fillings?",
        answer:
          "White composite fillings offer better aesthetics and are mercury-free, making them a preferred choice for most patients.",
      },
      {
        question: "Can I eat immediately after getting a filling?",
        answer:
          "You can eat immediately after composite fillings as they harden instantly under the curing light.",
      },
    ],
    price: "Starting from INR 200",
  },
  {
    id: "11",
    title: "Dental MouthGuards",
    slug: "dental-mouthguards",
    shortDescription:
      "Custom-fitted mouthguards for sports protection and teeth grinding prevention",
    fullDescription:
      "Our custom-made mouthguards provide superior protection for athletes and those who grind their teeth. Designed for comfort and effectiveness, our mouthguards are tailored to your specific needs and bite pattern.",
    image:
      "https://images.pexels.com/photos/6812640/pexels-photo-6812640.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Superior protection against injury",
      "Custom fit for comfort",
      "Prevents teeth grinding damage",
      "Reduces jaw strain",
      "Durable and long-lasting",
      "Available in various colors",
    ],
    whenNeeded: [
      "Sports participation",
      "Teeth grinding (bruxism)",
      "TMJ disorders",
      "Sleep apnea treatment",
      "Protecting dental work",
      "Jaw clenching habits",
    ],
    procedureSteps: [
      "Consultation and assessment",
      "Dental impressions",
      "Custom fabrication",
      "Fitting appointment",
      "Comfort adjustments",
      "Care instructions",
      "Follow-up evaluation",
    ],
    faqs: [
      {
        question: "How long do custom mouthguards last?",
        answer:
          "Custom mouthguards typically last 2-3 years with proper care, though sports guards may need replacement sooner due to wear.",
      },
      {
        question: "Are custom mouthguards better than store-bought ones?",
        answer:
          "Yes, custom mouthguards provide superior fit, comfort, and protection compared to over-the-counter options.",
      },
      {
        question: "How do I clean my mouthguard?",
        answer:
          "Clean your mouthguard with cool water and mild soap after each use. Store it in a ventilated container when not in use.",
      },
    ],
    price: "Starting from INR 600",
  },
  {
    id: "12",
    title: "Dental Implant in Devi Dental Clinic",
    slug: "dental-implant-abu-dhabi",
    shortDescription:
      "Permanent tooth replacement with titanium implants for optimal function and aesthetics",
    fullDescription:
      "Our dental implant treatment provides the most advanced solution for missing teeth. Using premium titanium implants and guided surgery techniques, we restore your smile with permanent, natural-looking teeth that function like your original teeth.",
    image:
      "https://images.pexels.com/photos/6812637/pexels-photo-6812637.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Permanent tooth replacement",
      "Natural function and appearance",
      "Preserves jawbone structure",
      "No impact on adjacent teeth",
      "High success rate",
      "Long-lasting solution",
    ],
    whenNeeded: [
      "Single missing tooth",
      "Multiple missing teeth",
      "Complete tooth loss",
      "Failed root canal treatment",
      "Broken tooth beyond repair",
      "Alternative to dentures",
    ],
    procedureSteps: [
      "Comprehensive evaluation and planning",
      "Bone assessment and preparation",
      "Implant placement surgery",
      "Healing and integration period",
      "Abutment placement",
      "Crown fabrication and placement",
      "Long-term maintenance plan",
    ],
    faqs: [
      {
        question: "How long do dental implants last?",
        answer:
          "With proper care and maintenance, dental implants can last 25 years or a lifetime. They have a 95%+ success rate.",
      },
      {
        question: "Am I a candidate for dental implants?",
        answer:
          "Most healthy adults with adequate bone density are candidates. We'll evaluate your specific situation during consultation.",
      },
      {
        question: "How long is the implant process?",
        answer:
          "The complete process typically takes 3-6 months, allowing time for proper healing and integration between stages.",
      },
    ],
    price: "Starting from INR 4,500",
  },
  {
    id: "13",
    title: "Wisdom Tooth Extraction in Devi Dental Clinic",
    slug: "wisdom-tooth-extraction-abu-dhabi",
    shortDescription:
      "Safe and comfortable removal of impacted or problematic wisdom teeth",
    fullDescription:
      "Our oral surgery specialists provide expert wisdom tooth extraction using advanced surgical techniques. We ensure patient comfort throughout the procedure and provide comprehensive aftercare for optimal healing.",
    image:
      "https://images.pexels.com/photos/6812641/pexels-photo-6812641.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Relief from pain and discomfort",
      "Prevention of crowding",
      "Elimination of infection risk",
      "Improved oral hygiene",
      "Protection of adjacent teeth",
      "Advanced surgical techniques",
    ],
    whenNeeded: [
      "Impacted wisdom teeth",
      "Insufficient space for eruption",
      "Recurrent infections",
      "Pain and discomfort",
      "Difficulty cleaning",
      "Preventive extraction",
    ],
    procedureSteps: [
      "Pre-surgical consultation",
      "Anesthesia administration",
      "Surgical access creation",
      "Tooth sectioning if needed",
      "Careful tooth removal",
      "Socket cleaning and suturing",
      "Post-operative care instructions",
    ],
    faqs: [
      {
        question: "When should wisdom teeth be removed?",
        answer:
          "Wisdom teeth should be removed if they're impacted, causing pain, infections, or crowding other teeth. Early removal is often easier.",
      },
      {
        question: "How long is recovery after wisdom tooth extraction?",
        answer:
          "Initial healing takes 3-7 days, with complete healing in 1-2 weeks. Following post-operative instructions ensures smooth recovery.",
      },
      {
        question: "What can I eat after wisdom tooth extraction?",
        answer:
          "Stick to soft foods like yogurt, smoothies, and soup for the first few days. Gradually return to normal diet as healing progresses.",
      },
    ],
    price: "Starting from INR 800",
  },
  {
    id: "14",
    title: "Oral and Maxillofacial Surgery in Devi Dental Clinic",
    slug: "oral-maxillofacial-surgery-abu-dhabi",
    shortDescription:
      "Advanced surgical procedures for complex dental and facial conditions",
    fullDescription:
      "Our oral and maxillofacial surgeons specialize in complex surgical procedures involving the mouth, jaws, and facial structures. From corrective jaw surgery to facial trauma repair, we provide comprehensive surgical care with excellent outcomes.",
    image:
      "https://images.pexels.com/photos/6812642/pexels-photo-6812642.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Expert surgical care",
      "Advanced treatment options",
      "Improved function and aesthetics",
      "Pain relief and healing",
      "Comprehensive approach",
      "Latest surgical techniques",
    ],
    whenNeeded: [
      "Complex tooth extractions",
      "Jaw alignment problems",
      "Facial trauma",
      "Oral pathology",
      "TMJ disorders",
      "Reconstructive needs",
    ],
    procedureSteps: [
      "Comprehensive evaluation",
      "Treatment planning",
      "Pre-surgical preparation",
      "Surgical procedure",
      "Post-operative monitoring",
      "Recovery and rehabilitation",
      "Long-term follow-up",
    ],
    faqs: [
      {
        question: "What conditions require oral surgery?",
        answer:
          "Conditions include impacted teeth, jaw misalignment, facial trauma, oral pathology, and complex dental problems requiring surgical intervention.",
      },
      {
        question: "How long is recovery from oral surgery?",
        answer:
          "Recovery time varies by procedure complexity, ranging from a few days for simple procedures to several weeks for major surgeries.",
      },
      {
        question: "Is oral surgery performed under anesthesia?",
        answer:
          "Yes, we use appropriate anesthesia ranging from local anesthetic to general anesthesia based on the procedure and patient needs.",
      },
    ],
    price: "Consultation required for pricing",
  },
  {
    id: "15",
    title: "Braces in Devi Dental Clinic",
    slug: "braces-abu-dhabi",
    shortDescription:
      "Traditional and modern orthodontic braces for perfectly aligned teeth",
    fullDescription:
      "Our orthodontic treatment with braces corrects misaligned teeth and bite problems. We offer various types of braces including traditional metal, ceramic, and lingual braces to suit different preferences and lifestyles.",
    image:
      "https://images.pexels.com/photos/6812568/pexels-photo-6812568.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Improved teeth alignment",
      "Better bite function",
      "Enhanced facial aesthetics",
      "Easier oral hygiene",
      "Increased self-confidence",
      "Various brace options available",
    ],
    whenNeeded: [
      "Crooked or misaligned teeth",
      "Bite problems (overbite, underbite)",
      "Crowded teeth",
      "Gaps between teeth",
      "Jaw alignment issues",
      "Early intervention for children",
    ],
    procedureSteps: [
      "Initial orthodontic consultation",
      "Comprehensive records and planning",
      "Brace placement appointment",
      "Regular adjustment visits",
      "Progress monitoring",
      "Brace removal",
      "Retainer fitting and instructions",
    ],
    faqs: [
      {
        question: "How long do I need to wear braces?",
        answer:
          "Treatment time typically ranges from 18-36 months, depending on the complexity of your case and individual response to treatment.",
      },
      {
        question: "Do braces hurt?",
        answer:
          "You may experience some discomfort after initial placement and adjustments, but this is temporary and manageable with over-the-counter pain relievers.",
      },
      {
        question: "What can I eat with braces?",
        answer:
          "Avoid hard, sticky, and chewy foods. Stick to softer foods and cut food into smaller pieces to protect your braces.",
      },
    ],
    price: "Starting from INR 8,000",
  },
  {
    id: "16",
    title: "Orthodontic Treatment in Devi Dental Clinic",
    slug: "orthodontic-treatment-abu-dhabi",
    shortDescription: "Comprehensive orthodontic care for patients of all ages",
    fullDescription:
      "Our comprehensive orthodontic treatment addresses various dental alignment and bite issues using the most advanced techniques and appliances. From children to adults, we provide personalized orthodontic care to achieve optimal results.",
    image:
      "https://images.pexels.com/photos/6812569/pexels-photo-6812569.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Personalized treatment plans",
      "Advanced orthodontic techniques",
      "Suitable for all ages",
      "Multiple treatment options",
      "Experienced orthodontists",
      "Long-term stability",
    ],
    whenNeeded: [
      "Misaligned teeth and jaws",
      "Bite correction needs",
      "Aesthetic improvement desires",
      "Functional problems",
      "Speech difficulties",
      "Preventive treatment",
    ],
    procedureSteps: [
      "Comprehensive orthodontic evaluation",
      "Treatment plan development",
      "Appliance selection and fitting",
      "Regular monitoring appointments",
      "Progress assessments",
      "Treatment completion",
      "Retention phase management",
    ],
    faqs: [
      {
        question: "What age is best to start orthodontic treatment?",
        answer:
          "While treatment can begin at any age, early evaluation around age 7 allows for optimal timing and intervention if needed.",
      },
      {
        question: "Are there different types of orthodontic treatments?",
        answer:
          "Yes, we offer traditional braces, clear braces, lingual braces, and clear aligners to suit different needs and preferences.",
      },
      {
        question: "How often do I need orthodontic appointments?",
        answer:
          "Regular appointments are typically scheduled every 6-8 weeks to monitor progress and make necessary adjustments.",
      },
    ],
    price: "Starting from INR 6,000",
  },
  {
    id: "17",
    title: "Invisalign Treatment Devi Dental Clinic",
    slug: "invisalign-treatment-abu-dhabi",
    shortDescription:
      "Clear, removable aligners for discreet teeth straightening",
    fullDescription:
      "Invisalign treatment offers a virtually invisible way to straighten your teeth using custom-made clear aligners. Our certified Invisalign providers create personalized treatment plans for comfortable, convenient orthodontic correction.",
    image:
      "https://images.pexels.com/photos/6812570/pexels-photo-6812570.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: [
      "Nearly invisible appearance",
      "Removable for eating and cleaning",
      "Comfortable and smooth",
      "Predictable results",
      "Fewer office visits",
      "Digital treatment planning",
    ],
    whenNeeded: [
      "Desire for discreet treatment",
      "Professional appearance requirements",
      "Active lifestyle considerations",
      "Mild to moderate misalignment",
      "Adult orthodontic needs",
      "Alternative to traditional braces",
    ],
    procedureSteps: [
      "Initial consultation and evaluation",
      "Digital scanning and impressions",
      "Treatment planning with 3D modeling",
      "Custom aligner fabrication",
      "Aligner delivery and fitting",
      "Regular progress check-ups",
      "Treatment completion and retention",
    ],
    faqs: [
      {
        question: "How long does Invisalign treatment take?",
        answer:
          "Treatment typically takes 12-18 months, though some cases may be completed in as little as 6 months or require up to 24 months.",
      },
      {
        question: "How often do I change my aligners?",
        answer:
          "Aligners are typically changed every 1-2 weeks as directed by your orthodontist, gradually moving your teeth into position.",
      },
      {
        question: "Can I eat and drink with Invisalign?",
        answer:
          "You should remove aligners when eating or drinking anything other than water. This prevents staining and damage to the aligners.",
      },
    ],
    price: "Starting from INR 12,000",
  },
];
