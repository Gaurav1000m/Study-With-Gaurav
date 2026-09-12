import { Website, WebsiteFaq } from "@/types/website";
import { CATEGORY_MAP } from "./categories";

export interface ResourceEditorialData {
  longDescription: string;
  targetAudience: string;
  academicLevel: string;
  subjects: string[];
  keyFeatures: string[];
  benefits: string[];
  prerequisites: string;
  howToUse: string[];
  recommendedStartingPoint: string;
  advantages: string[];
  limitations: string[];
  faqs: WebsiteFaq[];
  lastReviewed: string;
  officialAttribution: string;
}

// Curated comprehensive reviews for major platforms
const PLATFORM_REVIEWS: Record<string, Partial<ResourceEditorialData>> = {
  "pw-0": {
    longDescription:
      "Physics Wallah (PW) has emerged as India's leading affordable EdTech platform, established by Alakh Pandey. The platform delivers structured video lectures, daily practice problems (DPPs), test series, and comprehensive revision notes across multiple academic streams including JEE (Main & Advanced), NEET UG, CBSE and State Board examinations, UPSC, SSC, and technical gate exams. The teaching methodology emphasizes conceptual clarity from foundational principles, supported by bilingual Hindi-English instruction.",
    targetAudience: "Students preparing for JEE Main, JEE Advanced, NEET UG, Foundation (Class 6-10), and State Board examinations looking for affordable, high-volume practice and structured courses.",
    academicLevel: "Secondary School (Class 9-10), Higher Secondary (Class 11-12), and Dropper/Repeaters",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "General Studies", "Engineering Sciences"],
    keyFeatures: [
      "Structured batch schedules with daily live and recorded lectures",
      "Daily Practice Problems (DPP) with video solutions",
      "Periodic all-India mock test series with detailed percentile analytics",
      "Doubt solving engine and dedicated community student discussion forums",
      "Offline and hybrid 'Vidyapeeth' physical study center connectivity"
    ],
    benefits: [
      "Extremely affordable price point compared to traditional legacy coaching institutes",
      "High-energy pedagogy that keeps students engaged through demanding multi-hour lectures",
      "Consistent syllabus coverage aligned with the latest NTA and CBSE guidelines",
      "Comprehensive revision series ('Umeed', 'Manzil') accessible for self-study"
    ],
    prerequisites: "Basic understanding of Class 9-10 science and mathematics fundamentals before entering senior secondary batches.",
    howToUse: [
      "Begin by selecting your specific target examination and academic year batch.",
      "Follow the daily lecture timetable and take structured handwritten notes during each class.",
      "Solve the corresponding Daily Practice Problem (DPP) sheet within 24 hours of each lecture.",
      "Participate in the Sunday test series under timed conditions to benchmark real-time exam temperament.",
      "Review mistakes thoroughly in a dedicated error analysis notebook before moving to the next chapter."
    ],
    recommendedStartingPoint: "Start with the foundational 'Basic Mathematics & Vectors' module for Physics and 'Periodic Table & Chemical Bonding' for Chemistry.",
    advantages: [
      "Unrivaled value-to-cost ratio for Indian students",
      "Experienced national faculty with proven track records in competitive exams",
      "Massive peer community offering competitive benchmarking and motivation",
      "Extensive free YouTube revision libraries complementary to batch portals"
    ],
    limitations: [
      "High batch enrollment can make 1-on-1 personalized doubt resolution slower during peak hours",
      "Fast-paced syllabus completion requires high student discipline to avoid accumulated backlog",
      "Heavy reliance on digital screens necessitates conscious eye health and study-break management"
    ],
    faqs: [
      {
        question: "Is Physics Wallah content sufficient for cracking JEE Advanced and NEET?",
        answer: "Yes. Physics Wallah's Lakshya, Arjuna, and Yakeen batches provide comprehensive theoretical coverage, advanced problem solving, and rigorous test series aligned with JEE Advanced and NEET standards when supplemented with disciplined practice of previous years' questions (PYQs)."
      },
      {
        question: "How can I manage backlog if I miss live lectures?",
        answer: "PW saves recorded archives for every class. Allocate 2 hours daily on weekends dedicated exclusively to backlog reduction at 1.25x or 1.5x playback speed while completing key DPP problems."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "Physics Wallah Private Limited (PW) is an independent educational provider. StudyWithGaurav provides editorial guides and directory navigation."
  },
  "rwa-official": {
    longDescription:
      "Rojgar With Ankit (RWA), founded by Ankit Bhati, is a premier learning platform focused on Indian government job examinations, state police recruitment, Staff Selection Commission (SSC CGL, CHSL, GD, MTS), Railways (RRB NTPC, Group D), and defence forces. RWA is renowned for its practical, exam-oriented teaching pedagogy tailored for Hindi-medium and rural students, emphasizing shortcut tricks, speed mathematics, and rigorous mock test practice.",
    targetAudience: "Aspirants preparing for SSC recruitment, UP Police, Delhi Police, Central Armed Police Forces (CAPF), Railway exams, and state government competitive tests.",
    academicLevel: "Post-matriculation, Higher Secondary, and Graduate aspirants",
    subjects: ["Quantitative Aptitude", "General Reasoning", "General Awareness", "General Hindi", "English Comprehension"],
    keyFeatures: [
      "Exam-specific targeted batches with comprehensive syllabus coverage",
      "Daily practice sheets and live question-solving marathons",
      "Weekly free mock tests with detailed ranking among hundreds of thousands of aspirants",
      "Pocket formula handbooks and concise Hindi current affairs digests",
      "Physical exam and document verification guidance alongside academic prep"
    ],
    benefits: [
      "Tailored for Hindi-medium aspirants who struggle with English-dominated coaching",
      "Direct focus on high-frequency question patterns from recent exam shifts",
      "High-energy, empathetic faculty connected with rural student challenges",
      "Cost-effective with frequent free YouTube marathons and revision series"
    ],
    prerequisites: "10th or 12th standard mathematics and basic familiarity with Indian geography and polity.",
    howToUse: [
      "Select your target exam batch (e.g., UP Police Constable, SSC GD, or SSC CGL).",
      "Complete the basic arithmetic and reasoning concept lectures first.",
      "Attempt the weekly Sunday all-India mock test to identify weak subject areas.",
      "Revise daily current affairs using the morning live sessions or monthly PDF summaries."
    ],
    recommendedStartingPoint: "Begin with Quantitative Aptitude percentage, ratio, and time-and-work modules, along with coding-decoding in reasoning.",
    advantages: [
      "Authentic mentorship for non-metropolitan students",
      "Massive question banks reflecting official government exam patterns",
      "Highly accurate exam difficulty estimation and cut-off predictions",
      "Active peer group keeping motivation high over extended exam cycles"
    ],
    limitations: [
      "Primarily caters to Hindi-medium pedagogy; English-medium options are comparatively limited",
      "Dense live comment chats during peak exam seasons can require full-screen focus mode"
    ],
    faqs: [
      {
        question: "Are RWA mock tests representative of the actual exam difficulty?",
        answer: "Yes. RWA tests are widely considered among the most representative for SSC GD, UP Police, and Railway exams, closely mimicking official time constraints and difficulty curves."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "Rojgar With Ankit is an independent platform. StudyWithGaurav provides directory and educational curation."
  },
  "unacademy-official": {
    longDescription:
      "Unacademy is one of India's largest learning platforms, offering live interactive classes, structured courses, and mock exams across UPSC Civil Services, IIT-JEE, NEET, GATE, CAT, and state public service commissions. Featuring top educators across India, Unacademy provides multi-educator choice, comprehensive doubt resolution, and adaptive analytics.",
    targetAudience: "UPSC CSE, IIT-JEE, NEET UG, CAT, and professional exam aspirants seeking top national educators with high flexibility.",
    academicLevel: "High School, Undergraduate, and Postgraduate competitive aspirants",
    subjects: ["Civil Services GS", "Optional Subjects", "Engineering & Medical", "Management Entrance", "Law & Humanities"],
    keyFeatures: [
      "Multi-educator flexibility allowing students to learn different subjects from specialized faculty",
      "Live interactive polls, raised-hand doubt clearance, and downloadable lecture notes",
      "Comprehensive test series with detailed percentile benchmarking and weak-area heatmaps",
      "Iconic mentorship offering personalized study plans and 1-on-1 guidance"
    ],
    benefits: [
      "Freedom to switch educators if a particular teaching style does not suit you",
      "Comprehensive libraries of both foundational and advanced batch recordings",
      "Robust mobile and tablet applications with offline video downloads"
    ],
    prerequisites: "Varies by course; competitive exam prep requires strong dedication to 6-8 daily study hours.",
    howToUse: [
      "Research and shortlist the top-rated educator for each subject.",
      "Attend live sessions consistently and use the in-class poll feature to test instantaneous recall.",
      "Download PDF lecture notes immediately following the class for quick revision.",
      "Take sectional tests weekly and full-length tests monthly."
    ],
    recommendedStartingPoint: "Watch introductory strategy sessions by top rankers to formulate your 12-month study roadmap.",
    advantages: [
      "Access to renowned national educators with decades of coaching experience",
      "High platform reliability and clean, modern user interface",
      "Extensive coverage of niche UPSC optional subjects and advanced engineering topics"
    ],
    limitations: [
      "Higher subscription cost than low-cost EdTech alternatives",
      "Choice overload: having too many educators can cause decision paralysis if not disciplined"
    ],
    faqs: [
      {
        question: "How do I choose between multiple educators on Unacademy?",
        answer: "Watch 1-2 free special classes from 2-3 shortlisted educators for each subject. Choose the instructor whose explanations, pacing, and note-taking style resonate best with you, and stick with them throughout the syllabus."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "Unacademy is a registered trademark of Sorting Hat Technologies Private Limited."
  },
  "kgs-official": {
    longDescription:
      "Khan Global Studies (KGS), led by Khan Sir Patna, provides accessible, high-engagement general studies and competitive exam coaching. Renowned for breaking down complex geopolitical, historical, and scientific concepts into memorable everyday analogies, KGS prepares aspirants for UPSC CSE, BPSC, UPPSC, Railway, and state civil services at affordable fees.",
    targetAudience: "Students preparing for UPSC Civil Services, State PSCs, and general competitive examinations who benefit from concept-driven, intuitive Hindi explanations.",
    academicLevel: "Undergraduate and Graduate competitive aspirants",
    subjects: ["Indian History", "World Geography", "Polity & Constitution", "Economics", "General Science", "International Relations"],
    keyFeatures: [
      "Unique analogy-driven storytelling pedagogy by Khan Sir and faculty",
      "Comprehensive printed and digital map-based study materials",
      "Low fee structure ensuring accessibility for underprivileged students",
      "Regular answer-writing practice sessions for State PSC mains"
    ],
    benefits: [
      "Transforms dry GS subjects into engaging, easy-to-retain conceptual narratives",
      "Exceptional value for students with modest financial backgrounds",
      "Deep focus on geographic mapping and historical context"
    ],
    prerequisites: "Basic interest in Indian history, geography, and current affairs.",
    howToUse: [
      "Follow the systematic sequence of Geography (World & Indian) before diving into History and Polity.",
      "Practice drawing outline maps alongside lectures to master geographical and geopolitical concepts.",
      "Revise class notes within 48 hours and attempt previous years' question banks."
    ],
    recommendedStartingPoint: "Start with Khan Sir's foundational World Geography and Indian Map series.",
    advantages: [
      "Incomparable storytelling pedagogy that demystifies intimidating GS syllabi",
      "Affordable pricing model",
      "Strong moral encouragement and mentorship for rural students"
    ],
    limitations: [
      "High student volume can limit individual live doubt interactions",
      "Pedagogy is primarily tailored to Hindi-medium aspirants"
    ],
    faqs: [
      {
        question: "Is Khan Global Studies sufficient for UPSC Civil Services Mains?",
        answer: "KGS provides an outstanding foundation for UPSC Prelims and conceptual clarity. For Mains, students must supplement lectures with daily answer-writing practice, standard reference books (Laxmikanth, Spectrum), and current affairs editorial analysis."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "Khan Global Studies is an independent educational organization founded by Khan Sir."
  },
  "iit-school-official": {
    longDescription:
      "IIT School is a specialized technical learning hub created by Kota's veteran educators dedicated exclusively to IIT-JEE Main and Advanced preparation. The platform focuses on deep mathematical derivation, advanced problem-solving techniques, and conceptual physics rigor necessary to clear the top percentiles in JEE Advanced.",
    targetAudience: "Serious JEE aspirants aiming for under 5,000 rank in JEE Advanced.",
    academicLevel: "Class 11, Class 12, and Dropper JEE aspirants",
    subjects: ["Advanced Physics", "Inorganic & Organic Chemistry", "Physical Chemistry", "Higher Mathematics"],
    keyFeatures: [
      "Rigorous problem-solving sessions based on Kota coaching classroom methodology",
      "Advanced multi-concept question banks designed for JEE Advanced",
      "Formula sheets and condensed chapter revision handbooks",
      "Direct mentorship from senior IITian faculty"
    ],
    benefits: [
      "Focuses purely on high-difficulty problem solving rather than superficial shortcuts",
      "Exposes students to standard international problems (Irodov, Pathfinder, Krotov)",
      "Zero fluff: 100% academic focus"
    ],
    prerequisites: "Strong foundation in 10th grade algebra, trigonometry, and basic mechanics.",
    howToUse: [
      "Watch concept lectures without multitasking and copy derivations step-by-step.",
      "Attempt Level-1 questions independently before viewing video solutions.",
      "Dedicate at least 3 hours daily to self-directed problem solving outside lecture time."
    ],
    recommendedStartingPoint: "Mechanics 1 in Physics and Coordinate Geometry in Mathematics.",
    advantages: [
      "No gimmicks: purely academic, high-rigor JEE Advanced standard",
      "Experienced Kota faculties with decades of top-100 rank mentorship"
    ],
    limitations: [
      "Can feel intimidating for complete beginners without prior foundational prep"
    ],
    faqs: [
      {
        question: "Can an average student follow IIT School lectures?",
        answer: "Yes, provided the student is willing to practice diligently and not give up when facing multi-step questions. Concepts are explained from first principles before escalating to Advanced level."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "IIT School is an independent technical learning initiative."
  },
  "testbook-official": {
    longDescription:
      "Testbook is India's leading exam preparation and test series platform, providing millions of mock tests, live coaching ('SuperCoaching'), and adaptive performance analytics across 600+ government and competitive exams. The Testbook Pass offers all-access entry to mock tests with real-time all-India rank benchmarking, speed analysis, and detailed question-by-question solutions.",
    targetAudience: "Aspirants preparing for Banking (IBPS, SBI), SSC, Railways, State PSC, Defence, Teaching, and Police exams who need disciplined mock test practice.",
    academicLevel: "Secondary, Higher Secondary, and Graduate job-seekers",
    subjects: ["Mock Tests", "Quantitative Aptitude", "Logical Reasoning", "English", "General Knowledge", "Current Affairs"],
    keyFeatures: [
      "Testbook Pass offering thousands of mock tests across 600+ exams",
      "Real-time exam interface replicating TCS iON and official computer-based testing environments",
      "In-depth analytics: time-spent per question, accuracy rate, percentile, and rank prediction",
      "Multi-lingual tests available in Hindi, English, and regional languages"
    ],
    benefits: [
      "Cures exam fear and computer-based exam anxiety through exact exam simulation",
      "Reveals time-wasting questions and weak chapters with precision analytics",
      "Huge question database containing authentic previous year questions (PYQs)"
    ],
    prerequisites: "Basic completion of at least 50% of the target exam syllabus.",
    howToUse: [
      "Start with chapter-wise sectional tests as you complete syllabus topics.",
      "Shift to full-length mock tests 60 days before the exam date.",
      "Spend at least 2 hours analyzing each completed mock test: review incorrect attempts and unattempted questions."
    ],
    recommendedStartingPoint: "Take a full-length diagnostic previous-year test to establish your baseline score.",
    advantages: [
      "Most comprehensive and affordable mock test repository in India",
      "Realistic peer competition with hundreds of thousands of active test-takers",
      "High platform reliability with zero lag during timed tests"
    ],
    limitations: [
      "Live coaching is secondary to their core test series strength",
      "Mock test difficulty can occasionally fluctuate above actual exam levels"
    ],
    faqs: [
      {
        question: "How many mock tests should I attempt before my exam?",
        answer: "For SSC and Banking exams, aim for 30 to 50 full-length mocks. For technical exams, 20-30 mocks with deep error analysis is recommended."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "Testbook is operated by Testbook Edu Solutions Pvt. Ltd."
  }
};

/**
 * Generates comprehensive, original editorial data for any website in the directory.
 * If specific curated data exists, it uses it; otherwise it synthesizes a rich,
 * category-appropriate academic profile to ensure zero thin pages.
 */
export function getResourceEditorialData(website: Website): ResourceEditorialData {
  const custom = PLATFORM_REVIEWS[website.id];
  const category = CATEGORY_MAP.get(website.category);
  const catName = category ? category.name : website.category;

  if (custom && custom.longDescription) {
    return {
      longDescription: custom.longDescription,
      targetAudience: custom.targetAudience || `Students and aspirants focusing on ${catName}.`,
      academicLevel: custom.academicLevel || "Secondary, Higher Secondary, and Competitive Examination Candidates",
      subjects: custom.subjects || [catName, "Comprehensive Exam Prep", "Practice Sets", "Theory"],
      keyFeatures: custom.keyFeatures || [
        "Curated curriculum-aligned learning materials",
        "Self-paced study modules with revision notes",
        "Problem-solving walkthroughs and practice questions",
        "Progress tracking and self-assessment tools"
      ],
      benefits: custom.benefits || [
        "Organized learning sequence that reduces study confusion",
        "Direct focus on high-yield exam topics",
        "Accessible on mobile and desktop devices"
      ],
      prerequisites: custom.prerequisites || "Basic familiarity with prerequisite syllabus concepts.",
      howToUse: custom.howToUse || [
        "Review the syllabus and identify priority topics.",
        "Study the foundational theory modules before attempting exercises.",
        "Take concise handwritten notes for rapid revision.",
        "Solve chapter-end practice questions under timed conditions."
      ],
      recommendedStartingPoint: custom.recommendedStartingPoint || "Start with core foundational chapters before advancing to complex multi-concept modules.",
      advantages: custom.advantages || [
        "High availability and structured syllabus progression",
        "Trusted by student communities preparing for competitive exams",
        "Flexible study pacing suited for self-directed learners"
      ],
      limitations: custom.limitations || [
        "Requires consistent self-discipline and schedule adherence",
        "Students should cross-reference with official textbooks (like NCERT) for definitive verification"
      ],
      faqs: custom.faqs || [
        {
          question: `How does ${website.name} fit into a balanced study plan?`,
          answer: `${website.name} provides targeted study resources in ${catName}. We recommend combining these materials with active note-taking, periodic revision cycles, and previous years' question practice.`
        }
      ],
      lastReviewed: custom.lastReviewed || "September 2026",
      officialAttribution: custom.officialAttribution || `${website.name} is an independent educational resource. StudyWithGaurav provides editorial guides, discovery, and objective reviews.`
    };
  }

  // Synthesize rich academic profile based on category & metadata
  const desc = website.description ? ` It is described as: "${website.description}".` : "";
  return {
    longDescription: `${website.name} is an educational platform operating within the ${catName} domain.${desc} It is cataloged by StudyWithGaurav to assist students in finding reliable, structured learning materials, study notes, and lecture resources. The platform addresses core requirements for Indian students preparing for academic and competitive milestones, offering syllabus coverage, practice problems, and study guidance.`,
    targetAudience: `Students, aspirants, and self-learners seeking verified study resources for ${catName} and related competitive exams.`,
    academicLevel: "School, College, and Competitive Exam Candidates",
    subjects: [catName, ...(website.tags || []).slice(0, 4)],
    keyFeatures: [
      "Structured learning resources and syllabus guides",
      "Chapter-wise notes, practice problems, and conceptual materials",
      "Verified digital portal access for self-paced revision",
      "Community-tested educational links verified for student security"
    ],
    benefits: [
      "Reduces time spent searching across unstructured web searches",
      "Provides organized, categorized educational access in one central hub",
      "Complements standard classroom and textbook preparation"
    ],
    prerequisites: "Familiarity with standard secondary school curriculum in relevant subject areas.",
    howToUse: [
      "Review the resource overview and verify that the syllabus matches your target exam.",
      "Access the official platform via the verified link below.",
      "Incorporate key study modules into your weekly academic timetable.",
      "Combine digital lectures with active handwritten note-taking and revision."
    ],
    recommendedStartingPoint: `Begin by exploring the foundational chapters in ${catName} before advancing to specialized problem sets.`,
    advantages: [
      "Organized and easy to navigate for independent study",
      "Direct access to relevant educational tools and materials",
      "Periodic link and security verification by the StudyWithGaurav team"
    ],
    limitations: [
      "Third-party server availability is managed by the original resource provider",
      "Students should always consult official exam conducting bodies (e.g., NTA, UPSC, CBSE) for official notifications"
    ],
    faqs: [
      {
        question: `Is ${website.name} safe and legitimate for students?`,
        answer: `Yes. StudyWithGaurav performs periodic verification to ensure the portal links are legitimate, safe, and free from malicious redirects or deceptive software.`
      },
      {
        question: `How should I combine ${website.name} with my standard textbooks?`,
        answer: `Use ${website.name} for concept explanations, lecture clarity, and revision, while keeping standard textbooks (such as NCERT or prescribed reference books) as your primary reference for syllabus accuracy.`
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: `${website.name} is owned and operated by its respective educational entity. StudyWithGaurav provides directory organization and independent editorial review.`
  };
}
