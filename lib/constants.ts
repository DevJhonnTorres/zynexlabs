export interface Service {
  num: string
  icon: string
  slug: string
  title: string
  tagline: string
  description: string
  items: string[]
  tech: string[]
}

export interface Project {
  vertical: string
  hash: string
  title: string
  subtitle: string
  description: string
  challenge: string
  outcome: string
  tech: string[]
  year: string
  status: string
}

export interface StackGroup {
  title: string
  items: string[]
}

export interface NavLink {
  label: string
  href: string
}

export const CALENDLY_URL = 'https://calendly.com/zynexlabs'

export const COMPANY = {
  name: 'Zynex Labs S.A.S.',
  founded: 2024,
  location: 'Colombia',
  email: 'contact@zynexlabs.com',
  mission: 'To build advanced digital infrastructure that empowers the next generation of companies in Latin America and beyond — connecting local talent with global technology standards.',
  vision: 'We believe the companies that will define the next decade are being built today. We exist to be the engineering infrastructure layer underneath them: reliable, technically excellent, and built for scale.',
  legal: [
    'CIIU 6201 — Custom software development and consulting activities',
    'CIIU 6202 — IT consulting and information management activities',
    'CIIU 6209 — Other IT activities and support services',
    'CIIU 6311 — Data processing, hosting, and related activities',
  ],
  values: [
    {
      title: 'Technical Excellence',
      description: 'We do not ship code we are not proud of. Every system we deliver is built to the standard we would want for our own infrastructure — documented, tested, and maintainable.',
    },
    {
      title: 'Honest Communication',
      description: 'We tell clients what they need to hear, not what they want to hear. If a proposed approach has risks, we say so. If a timeline is unrealistic, we say so before it becomes a problem.',
    },
    {
      title: 'Long-Term Thinking',
      description: 'We optimize for systems that last, not for demos that impress. Good architecture decisions made early prevent expensive rewrites later. We design for five years, not five months.',
    },
    {
      title: 'Continuous Learning',
      description: 'The technology landscape changes faster than any individual can track. We invest systematically in staying current across AI, distributed systems, cryptography, and infrastructure — because our clients depend on it.',
    },
  ],
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

export const SERVICES: Service[] = [
  {
    num: 'SRV_01',
    icon: 'AI',
    slug: 'ai-automation',
    title: 'AI & Automation',
    tagline: 'Intelligent systems that learn, adapt, and operate at scale.',
    description: 'We design and deploy artificial intelligence solutions that automate complex business processes, extract valuable insights from large data sets, and create intelligent user experiences. From supervised learning models to fully autonomous multi-agent pipelines, we build AI infrastructure calibrated to your specific operational context — not generic off-the-shelf tools. Our work spans the full lifecycle: data strategy, model selection, fine-tuning, deployment, and ongoing monitoring in production.',
    items: [
      'Machine Learning and Deep Learning Model Development',
      'Natural Language Processing and Conversational AI',
      'Computer Vision and Image Recognition Systems',
      'Intelligent Process Automation (IPA) and RPA',
      'Predictive Analytics and Demand Forecasting',
      'Large Language Model Integration and Fine-Tuning',
      'Multi-Agent Autonomous Pipeline Architecture',
      'Data Pipeline Engineering and Feature Stores',
    ],
    tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face', 'n8n', 'Apache Kafka'],
  },
  {
    num: 'SRV_02',
    icon: 'SW',
    slug: 'software-development',
    title: 'Software Development',
    tagline: 'Custom software engineered for performance, reliability, and growth.',
    description: 'We architect and build full-stack software products from the ground up — from REST and GraphQL APIs to complex enterprise applications with multi-tenant architecture and real-time data requirements. We specialize in systems that handle scale, require high availability, and demand clean, maintainable code that internal teams can own confidently after handoff. Every engagement starts with architecture, not code — because the decisions made before the first line is written determine the quality of the last.',
    items: [
      'Full-Stack Web Application Development',
      'RESTful API and GraphQL API Design and Implementation',
      'Microservices Architecture and Service Mesh',
      'SaaS Platform Engineering with Multi-Tenant Architecture',
      'Real-Time Systems with WebSockets and Event Streaming',
      'Mobile Application Development (iOS and Android)',
      'Enterprise System Integration and Legacy Modernization',
      'Developer SDKs and Technical Documentation',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    num: 'SRV_03',
    icon: 'BC',
    slug: 'blockchain-web3',
    title: 'Blockchain & Web3',
    tagline: 'Decentralized infrastructure for the next financial internet.',
    description: 'We build robust Web3 infrastructure — smart contracts, DeFi protocols, token ecosystems, and decentralized applications — with the same engineering rigor we apply to traditional software. Our team has deployed contracts on Ethereum mainnet, Polygon, Arbitrum, Base, and Optimism, with experience in protocol security, gas optimization, and upgrade patterns. We approach blockchain development with the understanding that smart contract bugs are permanent and expensive: formal verification, comprehensive auditing, and staged deployment are not optional.',
    items: [
      'Smart Contract Development in Solidity and Vyper',
      'Smart Contract Security Auditing and Formal Verification',
      'DeFi Protocol Design and Implementation',
      'ERC-20, ERC-721, and ERC-1155 Token Deployment',
      'Decentralized Application (dApp) Frontend Development',
      'Layer 2 Integration and Cross-Chain Bridge Architecture',
      'DAO Governance System Design and Deployment',
      'Non-Custodial Wallet Infrastructure and Key Management',
    ],
    tech: ['Solidity', 'Hardhat', 'Foundry', 'Ethereum', 'Polygon', 'wagmi', 'viem', 'The Graph'],
  },
  {
    num: 'SRV_04',
    icon: 'CD',
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    tagline: 'Scalable, resilient infrastructure that runs 24/7 without compromise.',
    description: 'We design and operate cloud infrastructure that is secure, cost-efficient, and architected for growth. Whether you are migrating a legacy system to the cloud, scaling an existing service to handle 10x traffic, or building a new platform from scratch, we apply infrastructure-as-code principles, automated testing, and production monitoring from day one. We treat infrastructure with the same discipline as application code: versioned, reviewed, tested, and deployed through automated pipelines.',
    items: [
      'Cloud Architecture Design on AWS, GCP, and Azure',
      'Infrastructure as Code with Terraform and Pulumi',
      'CI/CD Pipeline Design and Implementation',
      'Container Orchestration with Kubernetes and Docker',
      'Site Reliability Engineering and Production On-Call',
      'Security Hardening, IAM Design, and Compliance Readiness',
      'Observability Stack: Metrics, Logging, Distributed Tracing',
      'Cost Optimization and Cloud FinOps',
    ],
    tech: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana'],
  },
  {
    num: 'SRV_05',
    icon: 'UX',
    slug: 'ui-ux-product',
    title: 'UI/UX & Product Design',
    tagline: 'Products people use because they want to, not because they have to.',
    description: 'We design digital products with a focus on usability, clarity, and conversion — the outcome of a well-designed product is not aesthetic approval, it is users completing their goals faster and with fewer errors. We work across the full product design lifecycle, from early discovery and user research through high-fidelity prototyping and design system governance. Our designers work closely with our engineers to ensure that what gets built matches what was designed, down to the interaction detail.',
    items: [
      'User Research, Interviews, and Usability Testing',
      'Information Architecture and User Flow Mapping',
      'Wireframing and Low-Fidelity Prototyping',
      'High-Fidelity UI Design and Interactive Prototyping',
      'Design System Creation, Documentation, and Governance',
      'Accessibility Design Compliance (WCAG 2.1 AA)',
      'Motion Design and Micro-Interaction Specification',
      'Design-to-Code Handoff with Storybook Integration',
    ],
    tech: ['Figma', 'Framer', 'Storybook', 'Tailwind CSS', 'Radix UI', 'Adobe XD', 'Lottie', 'Zeplin'],
  },
]

export const PROJECTS: Project[] = [
  {
    vertical: 'FINTECH · AI',
    hash: '#4f2a9c',
    title: 'Enterprise AI Analytics Platform',
    subtitle: 'Real-time intelligence for financial decision-making',
    description: 'A comprehensive analytics platform serving enterprise clients in the financial sector. The system ingests data from twelve different source systems simultaneously, applies machine learning models for anomaly detection and multi-horizon forecasting, and delivers actionable intelligence through a role-based dashboard with real-time alerting.',
    challenge: 'The client operated a fragmented reporting infrastructure across twelve data sources with no unified layer. Compliance reports took 48 hours to generate manually, and market signals were being identified after the window to act had closed. The existing team had no machine learning expertise in-house.',
    outcome: 'Time-to-insight reduced from 48 hours to under 4 minutes for standard reports. Anomaly detection operates continuously with a 94% precision rate at production thresholds. The platform serves over 200 enterprise users across three markets and has passed two independent compliance audits since deployment.',
    tech: ['Python', 'TensorFlow', 'Next.js', 'PostgreSQL', 'Redis', 'AWS', 'Apache Kafka'],
    year: '2024',
    status: 'PRODUCTION',
  },
  {
    vertical: 'WEB3 · DEFI',
    hash: '#9b3f7d',
    title: 'Cross-Chain Payment Protocol',
    subtitle: 'Borderless value transfer infrastructure for Latin American SMEs',
    description: 'A decentralized payment protocol enabling seamless, low-cost transfers across Ethereum, Polygon, and Arbitrum. The protocol includes audited escrow contracts, a non-custodial bridge mechanism, a user-facing wallet interface, and an SDK for third-party integration. Designed specifically for Latin American SMEs processing international payments.',
    challenge: 'Latin American SMEs were losing 6–9% of transaction value to banking intermediaries on international payments, with settlement taking 3–5 business days. Existing crypto payment solutions required technical knowledge the target user base did not have, and currency volatility made stablecoin-only solutions impractical.',
    outcome: 'Protocol processed over $2.1M in transaction volume during the six-month pilot. Average transaction cost reduced by 94% relative to SWIFT wire transfers. Settlement time dropped to under 30 seconds on all supported networks. Smart contracts passed an independent security audit with zero critical findings.',
    tech: ['Solidity', 'Hardhat', 'Foundry', 'Ethereum', 'Polygon', 'wagmi', 'Next.js', 'The Graph'],
    year: '2024',
    status: 'PRODUCTION',
  },
  {
    vertical: 'SAAS · ANALYTICS',
    hash: '#7c1d4e',
    title: 'Distributed Systems Observability Platform',
    subtitle: 'Unified visibility for teams running critical infrastructure',
    description: 'A SaaS observability platform that aggregates metrics, logs, and distributed traces from heterogeneous infrastructure into a single, coherent interface. The system applies ML-based pattern recognition to distinguish genuine anomalies from noise, surface actionable alerts, and recommend probable root causes during incidents.',
    challenge: 'The client operated infrastructure across five cloud providers with no unified observability layer. Incidents were consistently discovered by end users before the engineering team — creating reputational damage and reactive firefighting that consumed 40% of engineering capacity. Existing monitoring tools generated thousands of alerts per day with no prioritization.',
    outcome: 'Mean time to detect reduced from 4 hours to 8 minutes. Alert volume reduced by 78% through intelligent de-duplication and pattern-based suppression. The platform achieved 99.97% uptime in the first six months of operation. On-call escalations declined by 60%.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prometheus', 'OpenTelemetry', 'AWS', 'Grafana'],
    year: '2024',
    status: 'PRODUCTION',
  },
  {
    vertical: 'ENTERPRISE · AUTOMATION',
    hash: '#2e5b8a',
    title: 'Regulatory Compliance Automation Engine',
    subtitle: 'Machine-speed regulatory intelligence for financial institutions',
    description: 'An enterprise automation platform that continuously monitors regulatory requirements across multiple jurisdictions, maps changes to internal controls and processes, and generates compliance documentation without manual intervention. Integrates bidirectionally with existing ERP and document management infrastructure via a standardized API layer.',
    challenge: 'The client\'s compliance team spent over 60% of their time on manual data collection, cross-referencing regulatory text, and generating audit reports. The process was error-prone, created significant audit risk, and prevented the team from performing the higher-value strategic analysis they were hired for.',
    outcome: 'Compliance reporting time reduced from 3 weeks to 4 hours per reporting cycle. Document error rate dropped from an estimated 8% to near zero. The platform now monitors 47 regulatory sources across three jurisdictions in real time. The compliance team was redeployed entirely to strategic risk analysis and client advisory work.',
    tech: ['Python', 'Next.js', 'PostgreSQL', 'AWS Lambda', 'OpenAI API', 'Docker', 'Elasticsearch'],
    year: '2024',
    status: 'PRODUCTION',
  },
]

export const STACK_GROUPS: StackGroup[] = [
  {
    title: 'FRONTEND',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Storybook'],
  },
  {
    title: 'BACKEND',
    items: ['Node.js', 'Python', 'NestJS', 'FastAPI', 'GraphQL', 'gRPC', 'Prisma'],
  },
  {
    title: 'AI & ML',
    items: ['OpenAI API', 'LangChain', 'PyTorch', 'TensorFlow', 'Hugging Face', 'n8n', 'Scikit-learn'],
  },
  {
    title: 'BLOCKCHAIN',
    items: ['Solidity', 'Hardhat', 'Foundry', 'Ethereum', 'Polygon', 'wagmi', 'viem', 'The Graph'],
  },
  {
    title: 'CLOUD & INFRA',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Cloudflare'],
  },
]

export const METHODOLOGY_STEPS = [
  {
    num: 'PHASE_01',
    title: 'Discovery',
    desc: 'We begin every engagement with a structured discovery process. We map your business objectives, technical constraints, existing infrastructure, and success metrics before writing a single line of code. Most problems are scoped wrong initially — discovery is where we correct that.',
  },
  {
    num: 'PHASE_02',
    title: 'Architecture',
    desc: 'Our architects design the system to meet your current needs and anticipate the scale you are building toward. Every component, integration point, data flow, and failure mode is documented before development begins. Architecture decisions made in writing are easier to change than those made in code.',
  },
  {
    num: 'PHASE_03',
    title: 'Development',
    desc: 'We build in focused two-week cycles with continuous integration and automated test coverage from the first sprint. Every two weeks you see working software in a staging environment — not status reports. Feedback is collected continuously and incorporated in the next cycle.',
  },
  {
    num: 'PHASE_04',
    title: 'Quality & Security',
    desc: 'Automated testing, peer code review, security scanning, and performance benchmarking are applied at every stage of development — not as a release gate. For smart contract work, formal verification and third-party auditing are included as a required deliverable.',
  },
  {
    num: 'PHASE_05',
    title: 'Deployment & Operations',
    desc: 'We deploy to production using zero-downtime strategies, configure monitoring and alerting with defined SLOs, and document operational runbooks before handoff. We offer structured post-deployment support engagements to ensure systems remain healthy and teams can operate them independently.',
  },
]

export const FAQ = [
  {
    question: 'What is a typical project timeline?',
    answer: 'Focused engagements — technical audits, specific feature builds, MVPs — typically run 3 to 8 weeks. Medium-complexity platforms take 2 to 5 months. Enterprise-grade infrastructure or long-term partnerships are scoped individually. We always define timeline in the architecture phase, not before.',
  },
  {
    question: 'How do you handle intellectual property?',
    answer: 'All work produced under an engagement belongs entirely to the client. We sign standard NDA and IP assignment agreements at the start of every project. We do not retain any rights to client code, designs, data, or business logic.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes. We are headquartered in Colombia and work with clients across Latin America, North America, and Europe. All engagements can be conducted in Spanish or English. Remote-first operations are our default — we have built the processes to work effectively across time zones.',
  },
  {
    question: 'Can you integrate with our existing engineering team?',
    answer: 'Yes. We have experience operating as a specialized extension of internal teams rather than a replacement for them. We follow your code standards, participate in your sprint ceremonies, and document work so internal engineers can take full ownership after the engagement.',
  },
  {
    question: 'What is your minimum engagement size?',
    answer: 'We work on projects from focused two-week technical audits to multi-year infrastructure partnerships. There is no hard minimum — the right scope depends on your objectives. We will tell you honestly in the discovery call if your project is better suited to a smaller or larger engagement structure.',
  },
  {
    question: 'Do you offer ongoing support after delivery?',
    answer: 'Yes. We offer structured maintenance, monitoring, and continuous improvement agreements post-delivery. For production systems, we recommend a defined support engagement rather than ad-hoc arrangements — predictable capacity means faster response when something needs attention.',
  },
  {
    question: 'What makes Zynex Labs different from a traditional agency?',
    answer: 'We are engineers first. Every solution is built by our senior technical team — we do not subcontract delivery or offshore to junior resources. We specialize in technically demanding problems at the intersection of AI, Web3, and cloud infrastructure. We do not pursue every type of work; we pursue the work we do exceptionally well.',
  },
]
