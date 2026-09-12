import { CategoryId } from "@/types/website";

export interface CategoryGuide {
  curriculumOverview: string;
  recommendedStudyProtocol: string[];
  evaluationStandards: string[];
  commonPitfalls: string[];
  faqs: { question: string; answer: string }[];
}

// Curated specialized guides for primary academic categories
const SPECIALIZED_GUIDES: Partial<Record<CategoryId, CategoryGuide>> = {
  "physics-wallah": {
    curriculumOverview: "Physics Wallah resources cover foundational to advanced curricula across Class 9-12 CBSE/State boards, JEE Main & Advanced, NEET-UG, and national entrance tests. The pedagogy focuses on simplifying core concepts in Physics, Chemistry, Mathematics, and Biology through systematic video lectures and chapter-wise Daily Practice Problems (DPPs).",
    recommendedStudyProtocol: [
      "Attend the concept lecture actively and write your own concise formula notes instead of only relying on downloaded PDFs.",
      "Solve the corresponding DPP or exercise sheet within 24 hours of watching the lecture to solidify neural pathways.",
      "Identify 2-3 doubts or missed problems from each exercise set and revisit the specific lecture timestamp before moving to the next chapter.",
      "Take chapter-wise timed mock quizzes every alternate weekend to monitor retention and question-solving speed."
    ],
    evaluationStandards: [
      "Clarity of conceptual derivation rather than mere rote memorization.",
      "Availability of structured problem-solving practice sets (DPPs).",
      "Regularity of academic scheduling and syllabus completion timelines.",
      "Affordable access for students from diverse economic backgrounds."
    ],
    commonPitfalls: [
      "Watching video lectures passively like entertainment without pen and paper active note-taking.",
      "Hoarding multiple batches or batches from parallel educators without completing one core syllabus.",
      "Neglecting previous years' questions (PYQs) until the final month before examination."
    ],
    faqs: [
      {
        question: "How can I balance school studies with Physics Wallah competitive batches?",
        answer: "Synchronize your school syllabus with your PW batch schedule whenever possible. Dedicate 2 hours after school exclusively to self-study and solving DPPs, and reserve weekends for chapter revisions and backlogs."
      },
      {
        question: "Are PW notes sufficient for JEE Advanced and NEET?",
        answer: "PW lecture notes provide a strong conceptual foundation, but scoring high percentiles in JEE Advanced or NEET requires extensive supplementary problem-solving from standard reference books and 10+ years of previous years' papers."
      },
      {
        question: "What is the best way to clear backlogs?",
        answer: "Never pause ongoing live classes to clear backlogs. Keep current classes steady and allocate an additional 60-90 minutes daily, plus extra weekend blocks, to methodically work through one backlog chapter at a time."
      }
    ]
  },
  "rojgar-with-ankit": {
    curriculumOverview: "Rojgar With Ankit (RWA) specializes in preparation for state and central government competitive examinations including SSC (CGL, CHSL, GD, MTS), State Police recruitment, UPSSSC, Teaching (TET/CTET), and Railway recruitment. The focus is on exam-oriented aptitude, reasoning, general awareness, and language comprehension.",
    recommendedStudyProtocol: [
      "Build foundational clarity in Quantitative Aptitude and Reasoning by learning standard calculation shortcuts and arithmetic principles.",
      "Read current affairs and static GK systematically every morning; maintain a dedicated 1-page summary per topic.",
      "Practice daily timed speed-drills to improve questions-per-minute accuracy.",
      "Participate in full-length Sunday mock exams under strictly simulated test conditions."
    ],
    evaluationStandards: [
      "Alignment with recent exam trends and revised government exam patterns.",
      "Precision and time-saving tricks in mathematical problem-solving.",
      "Quality and accuracy of bilingual (Hindi and English) study materials.",
      "Focus on previous years' exam pattern trends."
    ],
    commonPitfalls: [
      "Spending too many hours watching current affairs videos instead of concise monthly compilations.",
      "Ignoring negative marking penalties in speed tests.",
      "Failing to analyze wrong answers after completing mock tests."
    ],
    faqs: [
      {
        question: "How many months of preparation are needed for SSC and state examinations?",
        answer: "A disciplined 6 to 9 month timeframe with 4-6 hours of daily focused study is generally recommended to cover the syllabus, practice PYQs, and attain mock test speed."
      },
      {
        question: "How should I memorize static GK for government exams?",
        answer: "Use thematic grouping (such as national parks by state, classical dances, constitutional amendments) and revise flashcards using active recall rather than continuous reading."
      }
    ]
  },
  "english-speaking": {
    curriculumOverview: "English speaking and communication resources focus on conversational fluency, vocabulary acquisition, phonetics, and grammatical accuracy for academic presentations, competitive interview rounds, and professional communication.",
    recommendedStudyProtocol: [
      "Practice active shadowing: listen to an English podcast or speech and repeat the phrases aloud matching rhythm and intonation.",
      "Engage in daily spoken English practice for at least 15-20 minutes, even if self-narrating your daily tasks.",
      "Learn vocabulary in context (phrasal verbs and collocations) rather than isolated dictionary word lists.",
      "Record your own speech once a week to track pronunciation, fillers (like 'um' and 'uh'), and sentence structure improvements."
    ],
    evaluationStandards: [
      "Emphasis on practical, conversational application over dry grammatical rules.",
      "Clear phonetic modeling and neutral pronunciation guidance.",
      "Interactive listening and speaking exercises.",
      "Practical usage in professional and academic contexts."
    ],
    commonPitfalls: [
      "Translating word-for-word from your native tongue in your head before speaking.",
      "Fear of grammatical mistakes preventing actual spoken practice.",
      "Focusing exclusively on reading and writing while neglecting verbal output."
    ],
    faqs: [
      {
        question: "How long does it take to become fluent in spoken English?",
        answer: "With daily immersion and active speaking practice of 30-45 minutes, most learners notice significant improvements in conversational confidence within 3 to 6 months."
      },
      {
        question: "Do I need to master complex grammar before speaking English?",
        answer: "No. Basic subject-verb agreement and foundational tenses are sufficient to start communicating effectively. Fluency develops through active conversational usage, not theoretical grammar mastery."
      }
    ]
  }
};

// Automated dynamic generator for any category ensuring rich educational content
export function getCategoryGuide(categoryName: string, categoryId: CategoryId): CategoryGuide {
  if (SPECIALIZED_GUIDES[categoryId]) {
    return SPECIALIZED_GUIDES[categoryId]!;
  }

  return {
    curriculumOverview: `This curriculum covers essential syllabus modules, conceptual frameworks, and analytical problem-solving required to master ${categoryName}. The learning materials organized under this subject are evaluated for clarity, pedagogical rigor, and relevance to competitive and academic syllabi.`,
    recommendedStudyProtocol: [
      `Establish conceptual fundamentals by methodically studying core theory before attempting advanced problems in ${categoryName}.`,
      "Maintain a dedicated notebook for definitions, formulas, code snippets, or key analytical diagrams.",
      "Practice active recall: close your study materials and summarize what you learned from memory at the end of each session.",
      "Review mistakes systematically in a dedicated error log to prevent repeating erroneous problem-solving steps."
    ],
    evaluationStandards: [
      "Pedagogical clarity and structured progression from beginner to advanced topics.",
      "Absence of misleading paywalls, deceptive click-throughs, or broken resources.",
      "Alignment with modern academic and competitive examination expectations.",
      "Practical usefulness and active utility for self-directed students."
    ],
    commonPitfalls: [
      "Passive consumption of study materials without testing active retention through exercises.",
      "Switching between too many parallel resources rather than completing one comprehensive sequence.",
      "Postponing revision until shortly before test dates."
    ],
    faqs: [
      {
        question: `How should I begin studying ${categoryName} if I am a beginner?`,
        answer: `Begin with foundational introductory modules that clarify basic terminology and core principles. Avoid jumping directly to advanced problem sets until foundational mechanics are intuitive.`
      },
      {
        question: `How frequently should I revise topics in ${categoryName}?`,
        answer: `Use spaced repetition: review newly studied material after 24 hours, then again after 7 days, and once more at the 30-day mark. This cements concepts into long-term memory.`
      },
      {
        question: `How are resources in ${categoryName} vetted on StudyWithGaurav?`,
        answer: `Each educational platform listed under ${categoryName} is screened for academic integrity, instructional quality, student safety, and absence of deceptive pop-ups or spam.`
      }
    ]
  };
}
