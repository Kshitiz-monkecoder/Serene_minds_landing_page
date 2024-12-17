// data.js
export const clientAppointments = [
  {
    name: "Asit Kumar",
    date: "12 Oct 2024",
    time: "9:10pm",
    treatment: "Anxiety and panic attacks",
    image: "/man-potrait.jpeg", // Custom image
  },
  {
    name: "John Doe",
    date: "15 Nov 2024",
    time: "10:00am",
    treatment: "Depression and mood disorders",
    // No image provided
  },
  {
    name: "Jane Smith",
    date: "20 Oct 2024",
    time: "2:30pm",
    treatment: "Therapy session for depression",
  },
  {
    name: "Michael Johnson",
    date: "25 Oct 2024",
    time: "1:00pm",
    treatment: "Counseling for anxiety",
  },
  {
    name: "Emily Davis",
    date: "30 Oct 2024",
    time: "11:15am",
    treatment: "Panic attack management",
  },
];

// plansData.js
export const monthlyPlans = [
  {
    plan: "Basic",
    price: "Free",
    features: [
      "Appointment Booking",
      "Calendar",
      "WhatsApp Integration",
      "Secure Payments",
      "Clients' Profiles",
      "Clients' Progress Tracking",
    ],
  },
  {
    plan: "Pro",
    price: "₹1000",
    features: [
      "Basic Plan Features",
      "Journals",
      "Get Clients from the Platform",
      "Ban or Refer Clients",
      "Connect with other Mental Health Professionals",
      "In-App Chat",
      "Community of Mental Health Professionals",
      "Personal Website",
    ],
  },
  {
    plan: "Expert",
    price: "₹2500",
    features: [
      "Pro Plan Features",
      "In-App Voice & Video Calls",
      "Mental Health Assessments",
      "Electronic Health Records (EHR)",
      "AI Assistance",
      "PaaS tokens",
    ],
  },
];

export const yearlyPlans = [
  {
    plan: "Basic",
    price: "Free",
    features: [
      "Appointment Booking",
      "Calendar",
      "WhatsApp Integration",
      "Secure Payments",
      "Clients' Profiles",
      "Clients' Progress Tracking",
    ],
  },
  {
    plan: "Pro",
    price: "₹834",
    features: [
      "Basic Plan Features",
      "Journals",
      "Get Clients from the Platform",
      "Ban or Refer Clients",
      "Connect with other Mental Health Professionals",
      "In-App Chat",
      "Community of Mental Health Professionals",
      "Personal Website",
    ],
  },
  {
    plan: "Expert",
    price: "₹2090",
    features: [
      "Pro Plan Features",
      "In-App Voice & Video Calls",
      "Mental Health Assessments",
      "Electronic Health Records (EHR)",
      "AI Assistance",
      "PaaS tokens",
    ],
  },
];

// data.js
export const appointmentData = {
  upcoming: [
    {
      id: 101,
      name: "J. Abrams",
      age: 23,
      gender: "Male",
      date: "29 Nov 2024",
      time: "04:10 PM",
      duration: "45 mins",
      contact: "+91-7805560586",
      isUpcoming: true,
    },
    {
      id: 102,
      name: "K. Johansson",
      age: 28,
      gender: "Female",
      date: "30 Nov 2024",
      time: "10:00 AM",
      duration: "30 mins",
      contact: "+91-9905560586",
      isUpcoming: true,
    },
    {
      id: 103,
      name: "A. Patel",
      age: 34,
      gender: "Male",
      date: "5 Dec 2024",
      time: "12:00 PM",
      duration: "1 hour",
      contact: "+91-7801234567",
      isUpcoming: true,
    },
    {
      id: 104,
      name: "S. Williams",
      age: 40,
      gender: "Female",
      date: "7 Dec 2024",
      time: "09:30 AM",
      duration: "30 mins",
      contact: "+91-9987654321",
      isUpcoming: true,
    },
    {
      id: 105,
      name: "P. Dinesh",
      age: 22,
      gender: "Male",
      date: "10 Dec 2024",
      time: "03:00 PM",
      duration: "45 mins",
      contact: "+91-7775560889",
      isUpcoming: true,
    },
    {
      id: 106,
      name: "M. Johnson",
      age: 33,
      gender: "Female",
      date: "15 Dec 2024",
      time: "11:15 AM",
      duration: "1 hour",
      contact: "+91-7999912345",
      isUpcoming: true,
    },
  ],
  completed: [
    {
      id: 201,
      name: "L. Smith",
      age: 35,
      gender: "Male",
      date: "22 Nov 2024",
      time: "02:00 PM",
      duration: "1 hour",
      contact: "+91-7792560586",
      isUpcoming: false,
    },
    {
      id: 202,
      name: "E. Williams",
      age: 30,
      gender: "Female",
      date: "19 Nov 2024",
      time: "03:30 PM",
      duration: "30 mins",
      contact: "+91-7882345678",
      isUpcoming: false,
    },
    {
      id: 203,
      name: "A. Black",
      age: 40,
      gender: "Male",
      date: "18 Nov 2024",
      time: "11:00 AM",
      duration: "1 hour",
      contact: "+91-7776543210",
      isUpcoming: false,
    },
    {
      id: 204,
      name: "R. Kumar",
      age: 26,
      gender: "Female",
      date: "17 Nov 2024",
      time: "04:15 PM",
      duration: "45 mins",
      contact: "+91-7997654321",
      isUpcoming: false,
    },
    {
      id: 205,
      name: "N. Sharma",
      age: 50,
      gender: "Male",
      date: "16 Nov 2024",
      time: "01:30 PM",
      duration: "30 mins",
      contact: "+91-7834567890",
      isUpcoming: false,
    },
    {
      id: 206,
      name: "T. Singh",
      age: 29,
      gender: "Female",
      date: "15 Nov 2024",
      time: "10:45 AM",
      duration: "1 hour",
      contact: "+91-7998876543",
      isUpcoming: false,
    },
  ],
  cancelled: [
    {
      id: 301,
      name: "A. Clark",
      age: 40,
      gender: "Female",
      date: "20 Nov 2024",
      time: "11:30 AM",
      duration: "30 mins",
      contact: "+91-7008560586",
      isUpcoming: false,
    },
    {
      id: 302,
      name: "B. Thompson",
      age: 32,
      gender: "Male",
      date: "19 Nov 2024",
      time: "09:00 AM",
      duration: "1 hour",
      contact: "+91-7112345678",
      isUpcoming: false,
    },
    {
      id: 303,
      name: "C. Harris",
      age: 25,
      gender: "Female",
      date: "18 Nov 2024",
      time: "03:15 PM",
      duration: "45 mins",
      contact: "+91-7771234567",
      isUpcoming: false,
    },
    {
      id: 304,
      name: "D. James",
      age: 37,
      gender: "Male",
      date: "17 Nov 2024",
      time: "12:00 PM",
      duration: "30 mins",
      contact: "+91-7887654321",
      isUpcoming: false,
    },
    {
      id: 305,
      name: "F. Williams",
      age: 33,
      gender: "Female",
      date: "16 Nov 2024",
      time: "02:30 PM",
      duration: "1 hour",
      contact: "+91-7896543210",
      isUpcoming: false,
    },
    {
      id: 306,
      name: "G. Walker",
      age: 28,
      gender: "Male",
      date: "15 Nov 2024",
      time: "11:00 AM",
      duration: "30 mins",
      contact: "+91-7987654321",
      isUpcoming: false,
    },
  ],
};

export const professionalQuestions = [
  {
    id: 1,
    question: "What is your area of expertise?",
    options: ["Depression", "Anxiety", "Stress", "Trauma", "Other"],
  },
  {
    id: 2,
    question: "How many years of experience do you have?",
    options: ["1", "2", "3", "4", "5+ years"], // Added default options for the number input
  },
  {
    id: 3,
    question: "What type of practice do you have?",
    options: ["Private Practice", "Group Practice", "Hospital-based", "Other"],
  },
  {
    id: 4,
    question: "How many patients/clients do you typically see per month?",
    options: ["<10", "10-20", "20-30", "30+ clients"], // Default options for this field
  },
  {
    id: 5,
    question: "What is your preferred method for conducting sessions?",
    options: ["In-person", "Online", "Hybrid (In-person + Online)"],
  },
  {
    id: 6,
    question: "How do you currently manage appointment bookings?",
    options: [
      "Manually",
      "Online Booking Platforms",
      "Practice Management Software",
      "Other",
    ],
  },
  {
    id: 7,
    question: "What types of mental health assessments do you typically use?",
    options: [
      "Self-Reported Questionnaires",
      "Structured Clinical Interviews",
      "Behavioral Assessments",
      "Cognitive Assessments",
      "Other",
    ],
  },
  {
    id: 8,
    question: "Which best describes your client base?",
    options: ["Adults", "Children", "Families", "Couples", "Other"],
  },
  {
    id: 9,
    question: "How do you handle emergencies or urgent cases?",
    options: [
      "Refer to Emergency Services",
      "On-call Availability",
      "Crisis Intervention Services",
      "Other",
    ],
  },
  {
    id: 10,
    question: "What are your working hours?",
    options: ["9 AM - 5 PM", "8 AM - 4 PM", "Flexible", "Other"], // Default options for working hours
  },
  {
    id: 11,
    question: "What are your fees for a standard session?",
    options: ["$50", "$100", "$150", "$200"], // Default options for session fees
  },
];



// data.js

export const assessmentQuesData = [
  {
    id: 1,
    question: "How often do you feel down, depressed, or hopeless?",
    options: ["Never", "Rarely", "Sometimes", "Most of the time"],
    inputType: "radio",
  },
  {
    id: 2,
    question: "Do you find it difficult to enjoy activities that you once found enjoyable?",
    options: ["Not at all", "Occasionally", "Frequently", "Almost always"],
    inputType: "radio",
  },
  {
    id: 3,
    question: "How would you rate your level of energy over the past week?",
    options: ["Very high", "Moderate", "Low", "Very low"],
    inputType: "radio",
  },
  {
    id: 4,
    question: "How often do you feel anxious or nervous without any clear reason?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
    inputType: "radio",
  },
  {
    id: 5,
    question: "Have you experienced difficulty sleeping or staying asleep?",
    options: ["No issues", "Occasionally", "Frequently", "Almost every night"],
    inputType: "radio",
  },
  {
    id: 6,
    question: "Do you tend to withdraw from friends, family, or activities?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
    inputType: "radio",
  },
  {
    id: 7,
    question: "How often do you feel overwhelmed by your responsibilities or daily tasks?",
    options: ["Never", "Sometimes", "Often", "Almost always"],
    inputType: "radio",
  },
  {
    id: 8,
    question: "Have you experienced any significant changes in your appetite or weight recently?",
    options: ["No change", "Small change", "Moderate change", "Significant change"],
    inputType: "radio",
  },
  {
    id: 9,
    question: "How often do you feel like your thoughts are racing or difficult to control?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
    inputType: "radio",
  },
  {
    id: 10,
    question: "Do you find it difficult to focus on tasks or make decisions?",
    options: ["Never", "Sometimes", "Frequently", "Almost always"],
    inputType: "radio",
  },
];

export const questions4 = [
  {
    question: "Over the last two weeks, how often have you felt little interest or pleasure in doing things?",
    options: ["Never", "Rarely", "Sometimes", "Often", "All the time"],
    inputType: "radio",
  },
  {
    question: "How often have you felt down, depressed, or hopeless in the past two weeks?",
    options: ["Never", "Rarely", "Sometimes", "Often", "All the time"],
    inputType: "radio",
  },
  {
    question: "Do you have difficulty managing your emotions (e.g., sadness, anger, fear)?",
    options: ["Yes", "Sometimes", "No"],
    inputType: "radio",
  },
  {
    question: "Have you experienced major stressors in the last year (e.g., trauma, loss, big life changes)?",
    options: ["Yes", "No"],
    inputType: "radio",
  },
  {
    question: "Have you ever felt overwhelmed by thoughts of self-harm or suicide?",
    options: ["Yes", "Rarely", "No"],
    disclaimer: "Please seek immediate help if you are experiencing thoughts of self-harm or suicide.",
    inputType: "radio",
  },
];

// You can continue to add the rest of the data here in a similar format as above.
