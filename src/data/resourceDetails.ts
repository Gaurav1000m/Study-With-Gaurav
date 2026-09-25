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
  },
  "official-next-toppers": {
    longDescription:
      "Next Toppers is a focused academic platform catering to students in Classes 9, 10, 11, and 12 across CBSE and state secondary boards. Established to offer high-quality foundational teaching, the platform focuses on simplifying Science, Mathematics, Social Studies, and English through structured video lectures, chapter mind maps, and NCERT exemplar solutions.",
    targetAudience: "Secondary and Higher Secondary school students preparing for CBSE and state board examinations who need conceptual clarity and board-specific answer writing guidance.",
    academicLevel: "Secondary School (Class 9-10) and Senior Secondary (Class 11-12)",
    subjects: ["Mathematics", "Science", "Social Science", "Physics", "Chemistry", "Biology"],
    keyFeatures: [
      "NCERT-focused chapter breakdowns with line-by-line concept analysis",
      "Chapter mind maps and condensed handwritten revision notes",
      "Board exam presentation and structured answer-writing masterclasses",
      "Previous 10 years board question (PYQ) video solutions"
    ],
    benefits: [
      "Helps school students bridge the gap between textbook reading and board exam writing",
      "Clear explanation of grading criteria, mark distribution, and step-marking in board exams",
      "Free access to high-yield revision lectures during exam preparation seasons"
    ],
    prerequisites: "Prescribed NCERT textbooks for the student's respective class grade.",
    howToUse: [
      "Read the NCERT chapter thoroughly before watching the chapter lecture.",
      "Follow the lecture to understand key derivations, theorems, and chemical equations.",
      "Practice writing complete step-by-step answers for previous years' board questions.",
      "Review chapter mind maps 48 hours before weekly school tests."
    ],
    recommendedStartingPoint: "Begin with fundamental chapters: Real Numbers & Polynomials in Mathematics, Chemical Reactions in Science.",
    advantages: [
      "Dedicated focus on school curriculum and board examination criteria",
      "Accessible pedagogy suited for school students of diverse learning speeds"
    ],
    limitations: [
      "Primarily focused on board syllabus; does not emphasize advanced competitive problem solving (JEE Adv / NEET deep rankers)"
    ],
    faqs: [
      {
        question: "Are Next Toppers lectures sufficient for scoring 95%+ in Class 10 Boards?",
        answer: "Yes, when combined with thorough study of NCERT textbooks, NCERT Exemplar problems, and rigorous timed practice of official CBSE sample papers."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "Next Toppers is an independent educational platform."
  },
  "official-apna-college": {
    longDescription:
      "Apna College, founded by educators Aman Dhattarwal and Shraddha Khapra, is a computer science and placement preparation platform. It provides structured video courses in programming languages (C++, Java, Python), Data Structures and Algorithms (DSA), Full-Stack Web Development, and campus placement strategies. The pedagogy emphasizes building problem-solving intuition from scratch.",
    targetAudience: "Engineering students, BCA/MCA graduates, and aspiring software engineers looking for structured programming fundamentals and campus placement readiness.",
    academicLevel: "Undergraduate Computer Science & Self-Taught Programmers",
    subjects: ["Data Structures & Algorithms", "C++ Programming", "Java", "Web Development", "Database Management", "System Design Basics"],
    keyFeatures: [
      "Zero-to-hero language tracks in C++, Java, and Python",
      "Comprehensive DSA placement sheet covering high-frequency interview patterns",
      "Full-stack MERN development project tutorials with modern responsive code",
      "Campus interview preparation and resume evaluation guidance"
    ],
    benefits: [
      "Clear, beginner-friendly explanations of complex algorithmic topics",
      "Practical project builds that students can include in engineering portfolios",
      "Massive student community offering peer support and code review"
    ],
    prerequisites: "Basic logical reasoning; no prior programming experience required for beginner series.",
    howToUse: [
      "Choose one primary programming language (either C++ or Java) and complete the syntax fundamentals.",
      "Begin solving linear data structure problems (Arrays, Strings, Linked Lists) daily.",
      "Spend at least 60 minutes coding in an IDE independently rather than merely watching tutorial videos.",
      "Build at least two full-stack projects to demonstrate practical understanding of databases and APIs."
    ],
    recommendedStartingPoint: "The C++ or Java Foundation Course followed by the curated DSA Placement Playlist.",
    advantages: [
      "High visual production quality and intuitive dry-run diagrammatic explanations",
      "Tailored specifically for Indian campus placement coding rounds and interview formats"
    ],
    limitations: [
      "Requires consistent independent problem-solving practice on platforms like LeetCode or HackerRank to internalize patterns"
    ],
    faqs: [
      {
        question: "Should I learn DSA in C++ or Java from Apna College?",
        answer: "Both languages are equally powerful for placement interviews. C++ with STL is popular for competitive programming speed, while Java has extensive industry use in enterprise software and Android. Pick whichever syntax feels more natural."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "Apna College is an independent educational technology company."
  },
  "official-study-iq": {
    longDescription:
      "StudyIQ Education is India's leading current affairs, UPSC Civil Services, and State Public Service Commission (State PSC) coaching portal. Featuring deep-dive daily current affairs analyses ('Burning Issues'), UPSC foundation courses, and general studies series, StudyIQ breaks down geopolitical developments, constitutional law, economics, and national policy for serious aspirants.",
    targetAudience: "UPSC CSE, State PSC, RBI Grade B, and Defence service aspirants needing analytical current affairs coverage and structured GS preparation.",
    academicLevel: "Graduate and Post-Graduate competitive aspirants",
    subjects: ["Current Affairs & Editorial Analysis", "Indian Polity & Governance", "International Relations", "Economy & Budget", "History & Culture"],
    keyFeatures: [
      "Daily in-depth current affairs video breakdowns with downloadable PDF summaries",
      "UPSC GS Foundation Batches (Prelims + Mains) with dedicated mentorship",
      "State-specific PSC modules (UPPSC, BPSC, MPPSC, RAS, JPSC)",
      "Mains answer writing evaluation and model answer sheets"
    ],
    benefits: [
      "Saves hours of unguided newspaper reading by highlighting syllabus-relevant news",
      "Connects daily current events directly with static syllabus topics (Polity, Economy)",
      "High-output editorial commentary from experienced subject matter specialists"
    ],
    prerequisites: "Graduation degree or final year of college for UPSC eligibility; daily newspaper reading habit.",
    howToUse: [
      "Watch the daily morning Current Issues video and note down major constitutional articles and international treaties mentioned.",
      "Integrate monthly current affairs compilations into static subject revisions.",
      "Write at least 2 analytical answers every week based on editorial topics covered."
    ],
    recommendedStartingPoint: "Daily Editorial & Burning Issues analysis, alongside static Indian Polity modules.",
    advantages: [
      "Unmatched consistency in daily news analysis aligned with UPSC trends",
      "Bilingual instruction making complex policy and economic terms understandable"
    ],
    limitations: [
      "High volume of daily content requires students to be selective and syllabus-focused to avoid information overload"
    ],
    faqs: [
      {
        question: "Is StudyIQ current affairs enough for UPSC Prelims?",
        answer: "StudyIQ provides comprehensive coverage of issues. However, students must also read a national daily (The Hindu or The Indian Express) directly to develop their own critical vocabulary and analytical voice."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "StudyIQ is owned and operated by Study IQ Education Private Limited."
  },
  "official-career-will": {
    longDescription:
      "Careerwill App, spearheaded by Rakesh Yadav Sir, Jaideep Sir, and renowned educators, is a trusted platform for Staff Selection Commission (SSC CGL, CHSL, CPO), Banking, Railway (RRB NTPC, Group D), and Teaching examinations. Known for shortcut mathematics methods and clear conceptual reasoning, Careerwill offers structured, exam-calibrated batch schedules.",
    targetAudience: "Aspirants preparing for SSC recruitment, Banking exams, and Central/State government positions seeking math shortcut methods and dedicated practice.",
    academicLevel: "Post-matriculation, Higher Secondary, and Graduate aspirants",
    subjects: ["Quantitative Mathematics", "English Comprehension", "Reasoning Aptitude", "General Studies", "Pedagogy"],
    keyFeatures: [
      "Arithmetic and Advanced Mathematics masterclasses by Rakesh Yadav Sir",
      "Comprehensive English grammar and vocabulary rules by Jaideep Sir",
      "Live interactive classes with PDF class notes and practice exercises",
      "Previous years' chapter-wise solved question sets"
    ],
    benefits: [
      "Proven mathematical shortcut techniques that significantly reduce calculation time",
      "Affordable fee structure suited for aspirants across Tier-2, Tier-3 cities, and rural areas",
      "Thorough coverage of both tier-1 screening and tier-2 merit exam syllabus"
    ],
    prerequisites: "Basic arithmetic fundamentals up to Class 10 level.",
    howToUse: [
      "Focus on concept chapters in mathematics (Percentages, Ratio, Algebra, Geometry) systematically.",
      "Maintain a formula notebook containing key derivation shortcuts and problem patterns.",
      "Practice at least 50 questions daily from standard previous year sets."
    ],
    recommendedStartingPoint: "Percentages and Ratio modules in Arithmetic; Tenses and Subject-Verb Agreement in English.",
    advantages: [
      "Pioneering faculty with track records of training top rankers in SSC exams",
      "Extensive repository of practice questions"
    ],
    limitations: [
      "App-heavy platform; students should ensure steady internet connectivity for live lecture streaming"
    ],
    faqs: [
      {
        question: "How should I improve calculation speed for SSC CGL Math?",
        answer: "Memorize tables up to 30, squares up to 50, and cubes up to 30. Practice mental arithmetic for 15 minutes daily before starting practice sets."
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: "Careerwill is operated by Careerwill App."
  }
};

// Aliases and ID normalizations to ensure robust review matching
PLATFORM_REVIEWS["rwa-1"] = PLATFORM_REVIEWS["rwa-official"];
PLATFORM_REVIEWS["official-unacademy"] = PLATFORM_REVIEWS["unacademy-official"];
PLATFORM_REVIEWS["official-kgs"] = PLATFORM_REVIEWS["kgs-official"];
PLATFORM_REVIEWS["iit-school-1"] = PLATFORM_REVIEWS["iit-school-official"];
PLATFORM_REVIEWS["official-test-book"] = PLATFORM_REVIEWS["testbook-official"];

/**
 * Checks whether a resource represents a primary, high-value educational listing.
 * Primary resources are indexed in sitemaps and search engines; secondary numbered
 * batch links remain accessible in directory navigation with noindex to prevent doorway bloat.
 */
export function isPrimaryResource(website: Website): boolean {
  if (website.id in PLATFORM_REVIEWS) return true;
  if (website.isOfficial) return true;
  if (website.featured) return true;
  if (website.id.startsWith("official-")) return true;
  // If it's the primary/first resource of its subcategory or brand
  if (website.id.endsWith("-0") || website.id.endsWith("-1")) return true;
  return false;
}

/**
 * Generates original editorial review data for any website in the directory.
 * If specific curated data exists, it uses it; otherwise it provides a factual,
 * category-appropriate academic profile without unsubstantiated claims.
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

  // Factual editorial profile based on category & metadata without exaggerated claims
  const desc = website.description ? ` Information: "${website.description}".` : "";
  return {
    longDescription: `${website.name} is an educational platform listed under the ${catName} section on Study with Gaurav.${desc} It offers syllabus materials, online lectures, or study notes for students preparing for academic and competitive milestones in India. Study with Gaurav indexes this resource to help students navigate educational options and discover relevant study tools in one place.`,
    targetAudience: `Students, aspirants, and self-learners seeking learning resources for ${catName} and related competitive exams.`,
    academicLevel: "School, College, and Competitive Exam Candidates",
    subjects: [catName, ...(website.tags || []).slice(0, 4)],
    keyFeatures: [
      "Structured learning resources and syllabus guides",
      "Chapter-wise notes, practice problems, or lecture links",
      "Self-paced learning access on desktop and mobile browsers",
      "Direct external navigation to the educational provider"
    ],
    benefits: [
      "Reduces time spent searching across unorganized web queries",
      "Provides organized, categorized educational access in one central hub",
      "Complements standard classroom, coaching, and textbook preparation"
    ],
    prerequisites: "Familiarity with standard secondary school curriculum in relevant subject areas.",
    howToUse: [
      "Review the resource overview and verify that the syllabus matches your target exam and class year.",
      "Access the official platform via the external resource link.",
      "Incorporate key study modules into your weekly academic timetable.",
      "Combine digital lectures with active handwritten note-taking and revision."
    ],
    recommendedStartingPoint: `Begin by exploring foundational chapters in ${catName} before advancing to specialized problem sets.`,
    advantages: [
      "Organized and easy to navigate for independent study",
      "Direct access to relevant educational tools and materials",
      "Cataloged within Study with Gaurav's structured subject directory"
    ],
    limitations: [
      "Third-party server availability, fees, and content updates are managed entirely by the original resource provider",
      "Students should always consult official exam conducting bodies (e.g., NTA, UPSC, CBSE) for official notifications"
    ],
    faqs: [
      {
        question: `What should I verify before studying with ${website.name}?`,
        answer: `Verify that the courses or lecture series match your current examination syllabus and edition. Cross-reference syllabus topics with official exam notifications.`
      },
      {
        question: `How should I combine ${website.name} with standard textbooks?`,
        answer: `Use ${website.name} for concept explanations, lecture clarity, and revision, while keeping standard textbooks (such as NCERT or prescribed reference books) as your primary reference for syllabus accuracy.`
      }
    ],
    lastReviewed: "September 2026",
    officialAttribution: `${website.name} is owned and operated by its respective educational entity. Study with Gaurav provides directory organization and independent editorial review.`
  };
}
