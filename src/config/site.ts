export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  notes?: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  isMockup: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  targetAudience: string;
  offerings: string[];
  technologies: string[];
  serviceValue: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyDeliverables: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const siteConfig = {
  profile: {
    name: 'Hem Joshi',
    role: 'Full-Stack Developer | AI Engineer | AI Automation',
    location: 'Ahmedabad, Gujarat, India',
    email: 'hemjoshiwork@gmail.com',
    github: 'https://github.com/hemjoshiwork',
    linkedin: 'https://www.linkedin.com/in/hem-joshi-85a380398/',
    aboutParagraphs: [
      "I'm Hem Joshi, a software developer and AI engineer based in Ahmedabad, India. I enjoy building applications that connect software engineering with real business needs.",
      "My work spans full-stack web development, backend APIs, database-driven applications, and AI-powered tools. Through projects such as Nexus ERP and my document assistant, I've explored how well-designed software can simplify workflows and make information more accessible.",
      "I'm particularly interested in working with businesses that need practical digital solutions, whether that's a product catalogue website, a custom internal application, or an AI-powered knowledge assistant.",
      "I value clear communication, maintainable code, thoughtful problem-solving, and delivering solutions that serve a genuine purpose.",
    ],
  },
  hero: {
    badge: 'Available for Freelance Projects',
    headline: 'Building Digital Products That Solve Real Business Problems.',
    supportingCopy:
      "I'm Hem Joshi, a full-stack developer and AI engineer helping businesses build modern websites, custom software, and practical AI-powered solutions.",
    capabilities: [
      'Web Development',
      'Full-Stack Applications',
      'AI Automation',
    ],
    techStrip: ['Python', 'FastAPI', 'React', 'Next.js', 'SQL', 'LangChain'],
  },
  projects: [
    {
      id: 'nexus-erp',
      name: 'Nexus ERP',
      subtitle: 'Full-Stack AI-Powered Business Management Application',
      description:
        'A full-stack business management application bringing inventory, supplier management, point-of-sale billing, and sales insights into one system.',
      technologies: [
        'Next.js',
        'React',
        'FastAPI',
        'Python',
        'SQLAlchemy',
        'SQLite',
        'JWT',
        'REST APIs',
      ],
      features: [
        'Inventory management with stock-level monitoring',
        'Supplier management & transactional ledgers',
        'POS billing with automated GST calculations and printable PDF invoices',
        'Authentication and role-based access control (RBAC)',
        'Sales analytics & interactive trend insights',
        'AI-assisted natural-language-to-SQL business query assistant',
        'Sales prediction functionality powered by pandas',
        'Production backend architecture with 15+ REST API endpoints',
      ],
      notes: [
        'Verified source repository available on GitHub.',
        'Preview below is an original illustrative dashboard preview representing the UI architecture.',
      ],
      githubUrl: 'https://github.com/hemjoshiwork/nexus-erp',
      demoUrl: null,
      isMockup: true,
    },
    {
      id: 'ai-document-assistant',
      name: 'AI Document Assistant',
      subtitle: 'RAG-Powered Document Q&A with Grounded Source References',
      description:
        'An AI-powered document assistant that enables users to ask questions about PDFs and receive context-aware answers supported by source-page references.',
      technologies: [
        'Python',
        'LangChain',
        'Groq API',
        'Llama 3.3 70B',
        'ChromaDB',
        'Streamlit',
        'PyPDFLoader',
      ],
      features: [
        'PDF document parsing and multi-page text extraction',
        'Intelligent text chunking and vector embeddings generation',
        'Vector-based semantic retrieval using ChromaDB',
        'Context-aware answer synthesis grounded in extracted text',
        'Transparent source-page & paragraph citation references',
        'High-performance Llama 3.3 70B model integration via Groq',
        'Indexed more than 1,000 document fragments with sub-second retrieval',
        'Observed ~80% lower inference latency in developer testing after migrating to Groq API (measured during internal testing; not a universal performance guarantee)',
      ],
      notes: [
        'Proprietary codebase; architecture and interface demonstrated below.',
        'Architecture and interface demonstrated via interactive visual mockup.',
      ],
      githubUrl: null,
      demoUrl: null,
      isMockup: true,
    },
  ] as Project[],
  services: [
    {
      id: 'business-websites',
      title: 'Business Websites & Product Catalogues',
      shortDescription:
        'Help businesses present products and services professionally and generate qualified customer enquiries.',
      targetAudience:
        'Manufacturers, wholesalers, distributors, retail brands, and small businesses.',
      offerings: [
        'Responsive business websites & modern landing pages',
        'Digital product catalogues with categorized search & filters',
        'Product detail pages highlighting specifications and variants',
        'High-conversion quotation & contact forms',
        'Direct email enquiry integration',
        'Basic on-page SEO & performance optimization',
        'Deployment and custom domain setup assistance',
      ],
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel / Cloudflare'],
      serviceValue: 'Product Catalogue Website',
    },
    {
      id: 'full-stack-apps',
      title: 'Full-Stack Applications',
      shortDescription:
        'Build custom software tailored around specific business workflows, replacing messy spreadsheets with reliable tools.',
      targetAudience:
        'Growing businesses, startups, and operational teams needing custom internal tools.',
      offerings: [
        'Inventory management & stock movement systems',
        'Administrative dashboards & operational consoles',
        'Billing, invoice generation & POS applications',
        'Executive reporting tools & automated data exports',
        'Secure, database-driven web applications',
        'REST API integrations with external services',
        'Internal business tools and workflow systems',
      ],
      technologies: ['React', 'Next.js', 'Python', 'FastAPI', 'SQL', 'PostgreSQL / SQLite'],
      serviceValue: 'Full-Stack Application',
    },
    {
      id: 'ai-automation',
      title: 'AI Chatbots & Automation',
      shortDescription:
        'Leverage modern language models and retrieval systems to automate customer responses, search internal documents, and streamline business processes.',
      targetAudience:
        'Companies looking to automate support, knowledge discovery, and routine data workflows.',
      offerings: [
        'Custom conversational AI chatbots for websites',
        'PDF & business document question-answering assistants',
        'RAG-based knowledge assistants grounded in proprietary files',
        'Semantic search across product catalogues & documentation',
        'API-connected AI workflows & pipeline triggers',
        'Automated document extraction, summarization, and data parsing',
      ],
      technologies: [
        'Python',
        'LangChain',
        'Embeddings',
        'ChromaDB / Vector Stores',
        'Groq / OpenAI / Llama APIs',
      ],
      serviceValue: 'AI Chatbot or Document Assistant',
    },
  ] as Service[],
  process: [
    {
      number: '01',
      title: 'Discovery',
      tagline: 'Understand the business problem',
      description:
        'We examine your current workflow, identify bottlenecks, define target users, and determine the exact technical problem that needs to be solved.',
      keyDeliverables: [
        'Business workflow mapping',
        'Scope definition & key constraints',
        'Technical feasibility review',
      ],
    },
    {
      number: '02',
      title: 'Planning',
      tagline: 'Define requirements, features & milestones',
      description:
        'We draft an architecture plan, decide on the tech stack, organize the core feature set, and agree on clear milestones with realistic timelines.',
      keyDeliverables: [
        'System architecture blueprint',
        'Data schema & API design',
        'Milestone breakdown & schedule',
      ],
    },
    {
      number: '03',
      title: 'Development',
      tagline: 'Implement the interface, backend & integrations',
      description:
        'Code is written with clean architecture, modular components, well-structured APIs, and thorough type safety. Regular progress updates keep you informed.',
      keyDeliverables: [
        'Responsive user interfaces',
        'Robust backend & database models',
        'API & AI pipeline integrations',
      ],
    },
    {
      number: '04',
      title: 'Testing',
      tagline: 'Verify important workflows and fix issues',
      description:
        'Every critical path is validated: form submissions, edge cases, responsive layout rendering, authentication, and data integrity.',
      keyDeliverables: [
        'Cross-device layout verification',
        'Workflow validation & error handling',
        'Performance & latency optimization',
      ],
    },
    {
      number: '05',
      title: 'Delivery',
      tagline: 'Deploy and hand over the agreed solution',
      description:
        'We deploy to production hosting, configure your custom domain and environment secrets, and provide clear walkthrough documentation.',
      keyDeliverables: [
        'Production deployment setup',
        'Walkthrough documentation & codebase transfer',
        'Post-launch handover support',
      ],
    },
  ] as ProcessStep[],
  skillCategories: [
    {
      category: 'Programming',
      description: 'Core languages for systems, scripting, and web logic',
      skills: ['Python', 'Java', 'SQL'],
    },
    {
      category: 'Frontend Development',
      description: 'Modern component-driven web applications and responsive UI',
      skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      category: 'Backend Engineering',
      description: 'Robust server architecture, REST APIs, and authentication',
      skills: [
        'FastAPI',
        'REST APIs',
        'SQLAlchemy',
        'JWT Authentication',
        'Role-Based Access Control (RBAC)',
      ],
    },
    {
      category: 'AI & Machine Learning',
      description: 'Applied LLM pipelines, retrieval systems, and data processing',
      skills: [
        'LangChain',
        'RAG Architecture',
        'Vector Embeddings',
        'Semantic Search',
        'Prompt Engineering',
        'NLP Fundamentals',
        'scikit-learn',
        'pandas',
        'NumPy',
      ],
    },
    {
      category: 'Databases & Storage',
      description: 'Relational data modeling, ACID transactions, and vector indexing',
      skills: ['SQLite', 'MySQL', 'PostgreSQL', 'ChromaDB'],
    },
    {
      category: 'Developer Tools & Platforms',
      description: 'Version control, containerization, cloud deployment, and notebooks',
      skills: [
        'Git',
        'GitHub',
        'Docker',
        'Render',
        'Google Colab',
        'Jupyter Notebook',
        'AWS Analytics Fundamentals',
      ],
    },
  ] as SkillCategory[],
  contact: {
    heading: 'Have a Project in Mind?',
    supportingCopy:
      "Tell me what you're building, what problem you want to solve, or what you'd like to improve. I'll review your requirements and get back to you.",
    serviceOptions: [
      'Business Website',
      'Product Catalogue Website',
      'Full-Stack Application',
      'AI Chatbot or Document Assistant',
      'Workflow Automation',
      'Other',
    ],
    budgetOptions: [
      'Under $250',
      '$250–$500',
      '$500–$1,000',
      '$1,000+',
      'Not Sure Yet',
    ],
  },
};
