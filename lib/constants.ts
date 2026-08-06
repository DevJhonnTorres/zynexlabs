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
    vertical: 'WEB3 · DEFI',
    hash: '#9b3f7d',
    title: 'Escrow & Dispute Resolution Protocol',
    subtitle: 'On-chain escrow with arbitration — live on Base Sepolia',
    description: 'A decentralized escrow protocol for peer-to-peer transactions: EscrowFactory spawns one EscrowInstance per order (states: created, active, completed, expired, dispute, resolved), with feeBps + treasury mechanics and a DisputeModule for arbitration. Built with Solidity + Foundry and OpenZeppelin (SafeERC20, ReentrancyGuard), settling in USDT.',
    challenge: 'Buyers and sellers in P2P markets don\'t trust each other: fraud, non-delivery, and disputes with no neutral arbiter. Banks are slow and expensive; plain crypto transfers have no protection.',
    outcome: 'Deployed and verifiable on Base Sepolia (chain 84532). Contracts are public and auditable: EscrowFactory 0x5F737b9455eC9b823A949DDFCB86f0E934025279 · DisputeModule 0x7E29A04508aaC9Affdcd8F7Ed3e15cd66e1eD408 · MockUSDT 0x1725cd2965e4D57DB3C60DcB3F7CDD97D86B62A0. Tested with Foundry, code open in our GitHub.',
    tech: ['Solidity', 'Foundry', 'OpenZeppelin', 'Base', 'USDT', 'Ethereum'],
    year: '2026',
    status: 'LIVE',
  },
  {
    vertical: 'WEB3 · INFRA',
    hash: '#2e5b8a',
    title: 'ETH Cali Wallet',
    subtitle: 'Non-custodial wallet for the ETH Cali community',
    description: 'A secure, easy-to-use Ethereum wallet built with Next.js and Privy: login by email or passkey, automatic embedded wallet creation, native gas sponsorship, and ZKPassport personhood verification (prove you are human without revealing who you are). Supports Base, Ethereum, Optimism, and Unichain.',
    challenge: 'Web3 onboarding is hard for real communities: seed phrases, gas fees, and bots flooding airdrops and governance. LATAM communities need simple, human-verifiable access.',
    outcome: 'Deployed and used by the ETH Cali community (ethcali.org). Code is public: login by email/passkey, embedded wallets, gas sponsorship, ZKPassport human verification across four networks.',
    tech: ['Next.js', 'TypeScript', 'Privy', 'ZKPassport', 'Base', 'Ethereum', 'Optimism'],
    year: '2025',
    status: 'LIVE',
  },
  {
    vertical: 'WEB3 · NFT',
    hash: '#7c1d4e',
    title: 'Hackmoney — NFT Real-Estate Auctions',
    subtitle: 'Decentralized auctions for real-estate NFTs with USDC settlement',
    description: 'A decentralized auction platform for real-estate NFTs: live bidding, marketplace, admin dashboard, and USDC settlement through Circle Programmable Wallets (email-OTP wallet creation). On-chain auction management with AuctionFactory and AuctionManager contracts.',
    challenge: 'Real-estate markets are opaque and intermediary-heavy. Tokenizing properties and settling in stablecoins removes friction — but needs secure auction and payment rails.',
    outcome: 'Full platform built: NFT auctions, Circle wallet integration, real-time bidding, marketplace and admin dashboard. Smart contracts and ABIs in the repository.',
    tech: ['Next.js', 'Solidity', 'Circle API', 'USDC', 'TypeScript', 'Tailwind CSS'],
    year: '2026',
    status: 'LIVE',
  },
  {
    vertical: 'WEB3 · PUBLIC SECTOR',
    hash: '#4f2a9c',
    title: 'CaliCoins — City Event Payments',
    subtitle: 'Crypto payments for municipal events — Cali Mayor\'s Office',
    description: 'A Web3 payment application enabling crypto payments and rewards at city events: QR-based transfers via MetaMask, smart-contract-backed transactions, and digital wallet integration. Developed in collaboration with the Alcaldía de Santiago de Cali.',
    challenge: 'A municipal government wanted to bring decentralized payments to public events — requiring simple UX for organizers and attendees plus secure on-chain transactions.',
    outcome: 'Delivered in collaboration with the Santiago de Cali Mayor\'s Office: an intuitive platform for organizers and attendees with optimized crypto payments and rewards.',
    tech: ['Web3', 'MetaMask', 'Smart Contracts', 'QR Payments', 'JavaScript'],
    year: '2024',
    status: 'DELIVERED',
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
