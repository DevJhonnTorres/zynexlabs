export interface Service {
  num: string
  icon: string
  title: string
  items: string[]
}

export interface Project {
  vertical: string
  hash: string
  title: string
  description: string
  tech: string[]
}

export interface StackGroup {
  title: string
  items: { icon: string; name: string }[]
}

export interface NavLink {
  label: string
  href: string
}

export const CALENDLY_URL = 'https://calendly.com/zynexlabs'

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack',    href: '#stack' },
  { label: 'About',    href: '#about' },
]

export const SERVICES: Service[] = [
  {
    num: '01', icon: '🤖', title: 'AI & Automation',
    items: ['AI Agents', 'Enterprise Automation', 'Intelligent Workflows', 'Virtual Assistants', 'NLP / ML Models', 'RPA'],
  },
  {
    num: '02', icon: '💻', title: 'Software Dev',
    items: ['Web Platforms', 'Mobile Apps', 'SaaS Products', 'Dashboards', 'Enterprise Systems', 'APIs & Microservices'],
  },
  {
    num: '03', icon: '⛓️', title: 'Blockchain & Web3',
    items: ['Smart Contracts', 'Digital Wallets', 'Asset Tokenization', 'DApps', 'DeFi Infrastructure', 'NFT Platforms'],
  },
  {
    num: '04', icon: '☁️', title: 'Cloud & DevOps',
    items: ['AWS / GCP', 'Docker / Kubernetes', 'CI/CD Pipelines', 'Cloud Migration', 'Cybersecurity', 'Monitoring'],
  },
  {
    num: '05', icon: '🎨', title: 'UI/UX & Product',
    items: ['Modern Design', 'User Experience', 'Digital Branding', 'Design Systems', 'Prototyping', 'Motion Design'],
  },
]

export const PROJECTS: Project[] = [
  {
    vertical: 'AI · AUTOMATION',
    hash: 'TX: 0x4f2a...8c91',
    title: 'Enterprise AI Platform',
    description: 'Intelligent automation system for customer service and enterprise processes using AI agents, NLP and custom ML models deployed at scale.',
    tech: ['OpenAI', 'n8n', 'Next.js', 'Python', 'LangChain'],
  },
  {
    vertical: 'WEB3 · BLOCKCHAIN',
    hash: 'TX: 0x9b3f...1e72',
    title: 'Web3 Payment Infrastructure',
    description: 'Decentralized blockchain infrastructure for digital payments, asset tokenization and on-chain settlement for fintech companies.',
    tech: ['Solidity', 'Ethers.js', 'Hardhat', 'Node.js'],
  },
  {
    vertical: 'DATA · ANALYTICS',
    hash: 'TX: 0x7c1d...4a83',
    title: 'Intelligent Analytics Dashboard',
    description: 'Real-time data visualization and analytics platform processing millions of events for enterprise decision-making.',
    tech: ['React', 'Python', 'PostgreSQL', 'AWS'],
  },
  {
    vertical: 'SAAS · CLOUD',
    hash: 'TX: 0x2e5b...9f14',
    title: 'Enterprise SaaS Platform',
    description: 'Scalable cloud-native SaaS platform for operational management and process automation with multi-tenant architecture.',
    tech: ['NestJS', 'Docker', 'AWS', 'Next.js'],
  },
]

export const STACK_GROUPS: StackGroup[] = [
  { title: 'FRONTEND',   items: [{ icon: '⚛', name: 'React' }, { icon: '▲', name: 'Next.js' }, { icon: '💨', name: 'Tailwind' }, { icon: '◈', name: 'TypeScript' }] },
  { title: 'BACKEND',    items: [{ icon: '⬡', name: 'Node.js' }, { icon: '🐍', name: 'Python' }, { icon: '🦅', name: 'NestJS' }, { icon: '⚡', name: 'FastAPI' }] },
  { title: 'AI / ML',    items: [{ icon: '✦', name: 'OpenAI' }, { icon: '🔗', name: 'LangChain' }, { icon: '⚙', name: 'n8n' }, { icon: '🧠', name: 'Ollama' }] },
  { title: 'BLOCKCHAIN', items: [{ icon: '◆', name: 'Solidity' }, { icon: 'Ξ', name: 'Ethereum' }, { icon: '🔷', name: 'Hardhat' }, { icon: '🦊', name: 'Ethers.js' }] },
  { title: 'CLOUD',      items: [{ icon: '☁', name: 'AWS' }, { icon: '🐳', name: 'Docker' }, { icon: '☸', name: 'Kubernetes' }, { icon: '🌐', name: 'Cloudflare' }] },
]

export const METHODOLOGY_STEPS = [
  { num: 'PHASE_01', title: 'DISCOVERY',    desc: 'Analysis, strategy and requirements. We map your needs to the right architecture.' },
  { num: 'PHASE_02', title: 'ARCHITECTURE', desc: 'Technical design, scalability planning and system modeling.' },
  { num: 'PHASE_03', title: 'DEVELOPMENT',  desc: 'Agile, iterative construction with continuous testing and delivery.' },
  { num: 'PHASE_04', title: 'DEPLOYMENT',   desc: 'CI/CD pipelines, infrastructure setup and production launch.' },
  { num: 'PHASE_05', title: 'OPTIMIZATION', desc: 'Monitoring, performance tuning and continuous improvement.' },
]
