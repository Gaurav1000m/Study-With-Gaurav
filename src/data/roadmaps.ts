export interface RoadmapStage {
  stageNumber: number;
  title: string;
  duration: string;
  overview: string;
  coreTopics: string[];
  practiceExercises: string[];
  recommendedProjects: string[];
  milestoneCheck: string;
}

export interface Roadmap {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  prerequisites: string[];
  stages: RoadmapStage[];
  commonMistakes: string[];
  recommendedResourceCategory?: string;
  faqs: { question: string; answer: string }[];
}

export const ROADMAPS: Roadmap[] = [
  {
    slug: "web-development",
    title: "Modern Full-Stack Web Development Roadmap",
    shortTitle: "Web Development",
    subtitle: "A step-by-step curriculum from semantic HTML & modern CSS to React, Next.js, APIs, and production deployment.",
    description: "Web development powers the modern digital economy. This roadmap eliminates the confusion of choosing tools and provides a linear, project-driven progression to become an employable full-stack developer in 2026.",
    difficulty: "Beginner",
    estimatedTime: "6 - 8 Months (10-15 hrs/week)",
    prerequisites: [
      "Basic computer literacy (file systems, command terminal basics)",
      "High school mathematics and logical reasoning",
      "Patience for debugging error messages"
    ],
    stages: [
      {
        stageNumber: 1,
        title: "Web Fundamentals: Semantic HTML5 & Modern CSS3",
        duration: "Weeks 1 - 4",
        overview: "Master the building blocks of the web. Learn to construct accessible, semantic web layouts and style them responsively using Flexbox and CSS Grid.",
        coreTopics: [
          "Semantic HTML (header, nav, main, section, article, footer)",
          "CSS Box Model (margin, border, padding, content box)",
          "Flexbox architecture & 2D CSS Grid layouts",
          "Responsive Design (media queries, fluid typography, mobile-first design)",
          "CSS Custom Properties (Variables) & basic transitions"
        ],
        practiceExercises: [
          "Rebuild a Wikipedia article with pure semantic HTML",
          "Build a responsive pricing grid using CSS Grid",
          "Create a mobile-friendly restaurant landing page"
        ],
        recommendedProjects: [
          "Responsive Personal Portfolio Website hosted on GitHub Pages"
        ],
        milestoneCheck: "You can write responsive, accessible layouts from scratch without using frameworks like Bootstrap."
      },
      {
        stageNumber: 2,
        title: "JavaScript Fundamentals & DOM Manipulation",
        duration: "Weeks 5 - 10",
        overview: "JavaScript brings web pages to life. Master core language mechanics before touching frameworks like React.",
        coreTopics: [
          "Variables (let, const), Data Types & Type Coercion",
          "Functions, Arrow syntax, Scopes & Closures",
          "Array methods (map, filter, reduce, find, some, every)",
          "DOM selection, event listeners & form validation",
          "Asynchronous JavaScript (Promises, async/await, Fetch API)",
          "Browser Storage (localStorage, sessionStorage)"
        ],
        practiceExercises: [
          "Build an interactive calculator with keyboard support",
          "Create a dynamic quiz app that calculates final scores",
          "Fetch and display GitHub user profiles using the GitHub Public API"
        ],
        recommendedProjects: [
          "Weather Dashboard with live API integration and persistent city search history"
        ],
        milestoneCheck: "You can fetch API data, parse JSON, and dynamically update DOM elements without tutorial guidance."
      },
      {
        stageNumber: 3,
        title: "Modern React & Component-Driven Architecture",
        duration: "Weeks 11 - 18",
        overview: "React is the dominant UI library for building scalable web interfaces. Learn declarative state management and hooks.",
        coreTopics: [
          "JSX syntax, Components & Props",
          "State management with useState & complex state with useReducer",
          "Lifecycle & Side Effects with useEffect",
          "Controlled forms & custom hooks",
          "Client-side routing (React Router) & Context API for global state",
          "Tailwind CSS for rapid, scalable utility styling"
        ],
        practiceExercises: [
          "Build a multi-filter e-commerce product catalog",
          "Create a real-time Markdown note-taking app with live preview",
          "Implement a dark/light theme switcher using React Context"
        ],
        recommendedProjects: [
          "Kanban Task Management Board with drag-and-drop state persistence"
        ],
        milestoneCheck: "You understand when components re-render and how to organize component state predictably."
      },
      {
        stageNumber: 4,
        title: "Full-Stack: Next.js, Backend APIs & Databases",
        duration: "Weeks 19 - 28",
        overview: "Bridge frontend and backend by mastering server-rendered web applications with Next.js, relational databases, and secure authentication.",
        coreTopics: [
          "Next.js App Router: Server Components (RSC) vs Client Components",
          "API routes, Server Actions & data mutations",
          "Database modeling with PostgreSQL & ORMs (Prisma / Drizzle)",
          "Authentication patterns (OAuth, session cookies, JWT)",
          "Web security (CORS, CSRF, input sanitization, rate limiting)",
          "CI/CD deployment to Vercel or cloud providers"
        ],
        practiceExercises: [
          "Design a relational database schema for a student course portal",
          "Create secure RESTful CRUD API endpoints with error handling",
          "Build an authenticated user profile system"
        ],
        recommendedProjects: [
          "Full-Stack Student Learning Hub with user authentication, database-backed resource bookmarks, and full search"
        ],
        milestoneCheck: "You can build, deploy, and maintain a full-stack web application with database connectivity in production."
      }
    ],
    commonMistakes: [
      "Jumping into React before understanding vanilla JavaScript closures and array methods",
      "Relying on UI component libraries (Material UI, Shadcn) without knowing basic CSS layouts",
      "Not learning Git and GitHub version control early",
      "Building 10 identical tutorial clones instead of 2 unique original projects"
    ],
    recommendedResourceCategory: "physics-wallah",
    faqs: [
      {
        question: "How much time daily should I commit to this web development roadmap?",
        answer: "Aim for 90 to 120 minutes daily of uninterrupted focus. Consistency over 6 months produces vastly superior results compared to erratic weekend cramming."
      },
      {
        question: "Do I need a high-end laptop to learn web development?",
        answer: "No. Any standard computer capable of running VS Code and a modern web browser (8GB RAM recommended) is sufficient for all stages of this roadmap."
      }
    ]
  },
  {
    slug: "python-programming",
    title: "Python Programming: Zero to Problem Solving Roadmap",
    shortTitle: "Python Programming",
    subtitle: "Master Python from foundational syntax and object-oriented design to data processing, scripting, and web automation.",
    description: "Python is the most accessible and versatile programming language in the world, widely used in data science, artificial intelligence, scripting, and backend web development. This roadmap builds rigorous fundamentals for engineering students and beginners.",
    difficulty: "Beginner",
    estimatedTime: "3 - 5 Months (8-10 hrs/week)",
    prerequisites: [
      "Basic understanding of algebra and mathematical operations",
      "Ability to install software and use a computer terminal"
    ],
    stages: [
      {
        stageNumber: 1,
        title: "Python Syntax, Data Structures & Control Flow",
        duration: "Weeks 1 - 3",
        overview: "Learn core syntax, data representations, and programmatic decision making.",
        coreTopics: [
          "Variables, dynamic typing, integers, floats, booleans, and strings",
          "Conditional branching (if/elif/else) and boolean logic",
          "Loops (for, while, range, enumerate, zip)",
          "Core data structures: Lists, Tuples, Sets, and Dictionaries",
          "List and Dictionary comprehensions"
        ],
        practiceExercises: [
          "Write a number guessing game with limited attempts and hints",
          "Build a text analyzer that counts word frequency in an uploaded file",
          "Implement basic matrix multiplication using nested lists"
        ],
        recommendedProjects: [
          "Console-based Student Grade & Report Card Manager"
        ],
        milestoneCheck: "You can manipulate lists, dictionaries, and nested data structures comfortably without syntax errors."
      },
      {
        stageNumber: 2,
        title: "Functions, Modular Design & File Handling",
        duration: "Weeks 4 - 7",
        overview: "Structure clean, reusable code, manage exceptions gracefully, and read/write persistent data files.",
        coreTopics: [
          "Function parameters (*args, **kwargs), return values, and docstrings",
          "File I/O (reading and writing text, CSV, and JSON files)",
          "Exception handling (try, except, finally, custom exceptions)",
          "Python standard library: math, random, datetime, collections, os, sys",
          "Virtual environments (venv) and package management with pip"
        ],
        practiceExercises: [
          "Build a CSV data processor that cleans missing values and exports summary reports",
          "Create a modular password generator with customizable security policies",
          "Write a log file parser that detects error patterns"
        ],
        recommendedProjects: [
          "Personal Expense Tracker that saves financial records to JSON/CSV files"
        ],
        milestoneCheck: "You can write modular multi-file Python packages with proper exception handling."
      },
      {
        stageNumber: 3,
        title: "Object-Oriented Programming (OOP) & Design",
        duration: "Weeks 8 - 11",
        overview: "Master classes, inheritance, encapsulation, polymorphism, and dunder magic methods.",
        coreTopics: [
          "Classes, instances, __init__, and self convention",
          "Encapsulation, public/private attributes, and property getters/setters",
          "Inheritance, method overriding, and super()",
          "Polymorphism and abstract base classes",
          "Magic dunder methods (__str__, __repr__, __len__, __eq__)"
        ],
        practiceExercises: [
          "Model a Bank Account system with savings and checking account subclasses",
          "Design an inventory management system with perishable goods subclasses",
          "Build a custom deck-of-cards class implementing dunder methods"
        ],
        recommendedProjects: [
          "Library Management System with borrowing rules, overdue fines, and user classes"
        ],
        milestoneCheck: "You can architect clean class hierarchies that follow object-oriented design principles."
      },
      {
        stageNumber: 4,
        title: "Practical Applications: Web Automation, APIs & Data Basics",
        duration: "Weeks 12 - 16",
        overview: "Apply your Python skills to automate everyday tasks, interact with web APIs, and manipulate tabular datasets.",
        coreTopics: [
          "Web scraping with BeautifulSoup & requests",
          "REST API consumption and JSON parsing",
          "Introduction to data manipulation with Pandas and NumPy",
          "Automating repetitive file/directory tasks",
          "Writing unit tests with pytest"
        ],
        practiceExercises: [
          "Build a web scraper that extracts article headlines and saves them to an Excel file",
          "Consume an open weather API and send email alerts on rain forecasts",
          "Clean a real-world messy dataset using Pandas"
        ],
        recommendedProjects: [
          "Automated Study Resource Monitor that checks for updates and alerts you via Telegram"
        ],
        milestoneCheck: "You can write Python automation scripts that interact with real-world web APIs and datasets."
      }
    ],
    commonMistakes: [
      "Not using virtual environments (venv) and polluting the global Python installation",
      "Overusing global variables instead of passing parameters cleanly into functions",
      "Ignoring Python PEP 8 style conventions and naming guidelines"
    ],
    recommendedResourceCategory: "physics-wallah",
    faqs: [
      {
        question: "Is Python fast enough for competitive programming?",
        answer: "Python is supported in most online coding competitions. While C++ is faster for tight time limits, Python's built-in big-integer arithmetic and rich standard library make it great for quick algorithmic prototyping."
      }
    ]
  },
  {
    slug: "dsa-mastery",
    title: "DSA & Problem Solving Roadmap for Placements",
    shortTitle: "DSA Roadmap",
    subtitle: "A step-by-step algorithmic progression from arrays and pointers to graph algorithms and dynamic programming.",
    description: "Campus placements and technical interviews at software companies require deep problem-solving skills in Data Structures and Algorithms. This roadmap organizes DSA topics into a proven pedagogical sequence.",
    difficulty: "Intermediate",
    estimatedTime: "4 - 6 Months (12-15 hrs/week)",
    prerequisites: [
      "Fluency in one programming language (C++, Java, or Python)",
      "Basic knowledge of recursion and mathematical induction"
    ],
    stages: [
      {
        stageNumber: 1,
        title: "Complexity Analysis & Linear Data Structures",
        duration: "Weeks 1 - 4",
        overview: "Master asymptotic Big-O notation, array manipulation, string algorithms, and pointer patterns.",
        coreTopics: [
          "Time & Space complexity: Best, Average, and Worst case",
          "Arrays: Two Pointers, Sliding Window, Prefix Sums, Kadane's Algorithm",
          "Strings: Anagrams, Palindromes, Substring search",
          "Matrix operations & 2D arrays"
        ],
        practiceExercises: [
          "Two Sum & 3Sum problems",
          "Maximum Subarray Sum (Kadane's)",
          "Longest Substring Without Repeating Characters"
        ],
        recommendedProjects: ["Implement custom dynamic array and string class from scratch"],
        milestoneCheck: "You can recognize sliding window and two-pointer patterns instinctively."
      },
      {
        stageNumber: 2,
        title: "Searching, Sorting & Linked Lists",
        duration: "Weeks 5 - 8",
        overview: "Understand logarithmic searching, divide-and-conquer sorting, and pointer-based linked data structures.",
        coreTopics: [
          "Binary Search and Binary Search on Answer Space",
          "Merge Sort and Quick Sort with partition analysis",
          "Singly and Doubly Linked Lists",
          "Fast and Slow Pointer technique (Floyd's Cycle Detection)",
          "Reversing a Linked List (iterative and recursive)"
        ],
        practiceExercises: [
          "Search in Rotated Sorted Array",
          "Detect and remove loop in Linked List",
          "Merge k Sorted Lists"
        ],
        recommendedProjects: ["Build a LRU (Least Recently Used) Cache using Doubly Linked List + Hash Map"],
        milestoneCheck: "You can write bug-free binary search implementations without off-by-one errors."
      },
      {
        stageNumber: 3,
        title: "Stacks, Queues, Trees & BSTs",
        duration: "Weeks 9 - 14",
        overview: "Master LIFO/FIFO patterns, hierarchical tree structures, and binary search trees.",
        coreTopics: [
          "Stack applications: Balanced Parentheses, Next Greater Element (Monotonic Stack)",
          "Queue implementations & Circular Queue",
          "Binary Trees: Inorder, Preorder, Postorder, and Level Order (BFS) traversals",
          "Height, Diameter, and Lowest Common Ancestor (LCA) in Binary Trees",
          "Binary Search Trees: Validation, Search, Insertion, and Deletion"
        ],
        practiceExercises: [
          "Daily Temperatures (Monotonic Stack)",
          "Lowest Common Ancestor in Binary Tree",
          "Validate Binary Search Tree"
        ],
        recommendedProjects: ["Build a File System Directory Explorer using Tree structures"],
        milestoneCheck: "You can write both recursive (DFS) and iterative (BFS) tree traversals with ease."
      },
      {
        stageNumber: 4,
        title: "Graphs & Dynamic Programming (DP)",
        duration: "Weeks 15 - 22",
        overview: "Tackle the most demanding interview topics: graph representations, shortest path algorithms, and optimal substructure memoization.",
        coreTopics: [
          "Graph representations: Adjacency Matrix vs Adjacency List",
          "BFS, DFS, Connected Components, and Cycle Detection",
          "Topological Sort (Kahn's Algorithm)",
          "Shortest Path: Dijkstra's Algorithm and Bellman-Ford",
          "Dynamic Programming: Memoization (Top-Down) vs Tabulation (Bottom-Up)",
          "1D DP, Grid DP, 0/1 Knapsack, and Longest Common Subsequence (LCS)"
        ],
        practiceExercises: [
          "Number of Islands (BFS/DFS Grid)",
          "Course Schedule (Topological Sort / Cycle Detection)",
          "Coin Change & Longest Increasing Subsequence"
        ],
        recommendedProjects: ["Shortest Path Route Finder implementing Dijkstra's algorithm with visual output"],
        milestoneCheck: "You can solve standard LeetCode Medium graph and dynamic programming questions within 30 minutes."
      }
    ],
    commonMistakes: [
      "Memorizing code lines rather than understanding underlying invariants and patterns",
      "Skipping paper dry-runs and jumping straight to coding before planning logic",
      "Neglecting edge cases: empty input, single element, negative numbers, overflow limits"
    ],
    recommendedResourceCategory: "iit-school",
    faqs: [
      {
        question: "How many LeetCode questions should I solve to be placement-ready?",
        answer: "Aim for 150 to 200 well-chosen problems (e.g., LeetCode 150 or Striver's SDE Sheet) covering all fundamental patterns. Solving 150 problems deeply with full understanding beats 500 questions copied from solutions."
      }
    ]
  },
  {
    slug: "jee-engineering-prep",
    title: "JEE Main & Advanced 12-Month Preparation Roadmap",
    shortTitle: "JEE Preparation",
    subtitle: "A structured, subject-wise study strategy for Physics, Chemistry, and Mathematics to maximize score in national engineering entrances.",
    description: "The Joint Entrance Examination (JEE) requires a harmonious balance of deep conceptual understanding, fast problem execution, and emotional stamina. This 12-month roadmap guides aspirants from foundational textbook mastery to advanced multi-concept question solving.",
    difficulty: "Advanced",
    estimatedTime: "12 Months (30-40 hrs/week)",
    prerequisites: [
      "Completion of Class 10 science and mathematics with strong fundamentals",
      "High dedication and willingness to maintain a disciplined daily schedule"
    ],
    stages: [
      {
        stageNumber: 1,
        title: "Foundation Building (Months 1 - 4)",
        duration: "Months 1 - 4",
        overview: "Master high-weightage foundational chapters across Physics, Chemistry, and Mathematics.",
        coreTopics: [
          "Physics: Kinematics, Laws of Motion, Work Power Energy, Vectors & Basic Calculus",
          "Chemistry: Mole Concept, Atomic Structure, Periodic Table, Chemical Bonding",
          "Mathematics: Quadratic Equations, Sets & Relations, Trigonometry, Sequences & Series"
        ],
        practiceExercises: [
          "Solve all NCERT textbook examples and chapter-end exercises",
          "Complete Daily Practice Problem (DPP) sets within 24 hours of theory lectures"
        ],
        recommendedProjects: ["Create formula summary charts and reaction mechanism flashcards"],
        milestoneCheck: "You can solve basic numerical problems in Mechanics and Physical Chemistry without referring to formula sheets."
      },
      {
        stageNumber: 2,
        title: "Intermediate Mastery & Heavy Weightage Topics (Months 5 - 8)",
        duration: "Months 5 - 8",
        overview: "Tackle the conceptual core of Class 11 and early Class 12 syllabi.",
        coreTopics: [
          "Physics: Rotational Motion, Gravitation, Thermodynamics, Electrostatics & Current Electricity",
          "Chemistry: Thermodynamics, Chemical & Ionic Equilibrium, General Organic Chemistry (GOC)",
          "Mathematics: Coordinate Geometry (Straight Lines, Circles, Conics), Differential Calculus (Limits, Continuity, Derivatives)"
        ],
        practiceExercises: [
          "Solve previous 5 years' JEE Main papers topic-wise",
          "Attempt level-2 multi-step numericals under timed conditions"
        ],
        recommendedProjects: ["Maintain an active Error Notebook categorizing every missed question"],
        milestoneCheck: "You can solve JEE Main level questions in under 2.5 minutes per question."
      },
      {
        stageNumber: 3,
        title: "Advanced Syllabus & Integration (Months 9 - 10)",
        duration: "Months 9 - 10",
        overview: "Complete the senior secondary syllabus and integrate multi-chapter concepts.",
        coreTopics: [
          "Physics: Magnetism, Optics, Modern Physics, Semiconductors",
          "Chemistry: Coordination Compounds, Organic Reaction Mechanisms (Aldehydes, Ketones, Amines), Biomolecules",
          "Mathematics: Integral Calculus, Vectors & 3D Geometry, Probability"
        ],
        practiceExercises: [
          "Solve mixed-chapter tests combining Mechanics and Electromagnetism",
          "Target high-scoring Modern Physics and Coordination Chemistry modules"
        ],
        recommendedProjects: ["Complete full syllabus revision notes for all 3 subjects"],
        milestoneCheck: "Full syllabus completion achieved with no unread chapters."
      },
      {
        stageNumber: 4,
        title: "Mock Tests & Final Revision Phase (Months 11 - 12)",
        duration: "Months 11 - 12",
        overview: "Simulate real computer-based testing conditions, optimize exam temperament, and iron out weak spots.",
        coreTopics: [
          "Full-length 3-hour computer-based mock tests twice weekly",
          "Deep 2-hour error analysis per test",
          "Rapid formula and organic reaction revision daily"
        ],
        practiceExercises: [
          "Solve 20+ full-length official NTA test series papers under exact exam shift timings (9am-12pm or 3pm-6pm)"
        ],
        recommendedProjects: ["Final high-yield formula handbook review"],
        milestoneCheck: "Consistent mock test scores within target percentile range."
      }
    ],
    commonMistakes: [
      "Ignoring NCERT Chemistry: Inorganic chemistry questions in JEE Main are 95%+ directly derived from NCERT text",
      "Watching 8 hours of video lectures daily without solving numerical problems independently",
      "Neglecting Mathematics practice due to difficulty: math requires daily 2-hour problem-solving consistency"
    ],
    recommendedResourceCategory: "physics-wallah",
    faqs: [
      {
        question: "Is self-study sufficient to crack JEE Main without expensive coaching?",
        answer: "Yes. With disciplined adherence to NCERT, quality free lectures on platforms cataloged by StudyWithGaurav (like PW and IIT School), and thorough practice of previous years' questions (PYQs), thousands of students clear JEE Main through dedicated self-study."
      }
    ]
  }
];

export function getRoadmapBySlug(slug: string): Roadmap | undefined {
  return ROADMAPS.find((r) => r.slug === slug);
}
