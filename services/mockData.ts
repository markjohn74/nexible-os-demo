
import { User, Vendor, IntroRequest } from '../types';

export const USERS: User[] = [
  // VC Team
  {
    id: 'u_charlie',
    name: 'Charlie Ill',
    role: 'VC_Team',
    company: 'Investible (CIO)',
    avatar: 'https://ui-avatars.com/api/?name=Charlie+Ill&background=0f172a&color=f59e0b&bold=true',
    points: 12000,
    tier: 'Partner',
    connections: 18000
  },
  {
    id: 'u_jayden',
    name: 'Jayden Basha',
    role: 'VC_Team',
    company: 'Investible (Principal)',
    avatar: 'https://ui-avatars.com/api/?name=Jayden+Basha&background=0f172a&color=f59e0b&bold=true',
    points: 8000,
    tier: 'Partner',
    connections: 8000
  },
  {
    id: 'u_trevor',
    name: 'Trevor Folsom',
    role: 'VC_Team',
    company: 'Investible (Co-Founder)',
    avatar: 'https://ui-avatars.com/api/?name=Trevor+Folsom&background=0f172a&color=f59e0b&bold=true',
    points: 15000,
    tier: 'Partner',
    connections: 25000
  },
  {
    id: 'u_creel',
    name: 'Creel Price',
    role: 'VC_Team',
    company: 'Investible (Co-Founder)',
    avatar: 'https://ui-avatars.com/api/?name=Creel+Price&background=0f172a&color=f59e0b&bold=true',
    points: 14500,
    tier: 'Partner',
    connections: 22000
  },
  {
    id: 'u_tim',
    name: 'Tim Coates',
    role: 'VC_Team', // Updated to VC_Team
    company: 'Investible (Head of IR)',
    avatar: 'https://ui-avatars.com/api/?name=Tim+Coates&background=0f172a&color=f59e0b&bold=true', // Updated background to match VC style
    points: 9500,
    tier: 'Partner', // Updated to Partner
    connections: 11000
  },
  // Investor Connectors
  {
    id: 'u_mehdi',
    name: 'Mehdi Querim',
    role: 'Investor_Connector',
    company: 'Club Invest Member',
    avatar: 'https://ui-avatars.com/api/?name=Mehdi+Querim&background=1e293b&color=cbd5e1&bold=true',
    points: 3500, // Updated for Rewards Demo
    tier: 'Gold',
    connections: 5200
  },
  {
    id: 'u_jason',
    name: 'Jason Stirling',
    role: 'Investor_Connector',
    company: 'Venture Partner',
    avatar: 'https://ui-avatars.com/api/?name=Jason+Stirling&background=1e293b&color=cbd5e1&bold=true',
    points: 4200, // Updated for Rewards Demo
    tier: 'Gold', // Updated for Rewards Demo
    connections: 4800
  },
  // Portfolio Founder
  {
    id: 'u_mark',
    name: 'Mark John',
    role: 'PortfolioFounder_Connector',
    company: 'ConnectCo',
    avatar: 'https://ui-avatars.com/api/?name=Mark+John&background=1e293b&color=cbd5e1&bold=true',
    points: 450,
    tier: 'Bronze',
    connections: 3200
  },
  // Access Founders
  {
    id: 'u_sarah',
    name: 'Sarah Riley',
    role: 'AccessFounder',
    company: 'Stealth AI',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Riley&background=334155&color=94a3b8&bold=true',
    points: 0,
    tier: 'Bronze',
    connections: 450
  },
  {
    id: 'u_niki',
    name: 'Niki Sevak (Mock)',
    role: 'AccessFounder',
    company: 'HealthTech Inc',
    avatar: 'https://ui-avatars.com/api/?name=Niki+Sevak&background=334155&color=94a3b8&bold=true',
    points: 50,
    tier: 'Bronze',
    connections: 600
  }
];

export const VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'Standard Ledger',
    category: 'Accounting, Finance & Tax',
    rating: 5.0,
    description: 'Fractional CFO services and R&D tax incentive preparation for high-growth startups.',
    verified: true,
    priceRange: '$$',
    standardPrice: '$5,000/mo',
    nexiblePrice: '$3,750/mo'
  },
  {
    id: 'v2',
    name: 'LegalVisionary',
    category: 'Legal Services',
    rating: 4.8,
    description: 'Comprehensive legal packages for capital raising (SAFE/Notes) and IP protection.',
    verified: true,
    priceRange: '$$$',
    standardPrice: '$4,500',
    nexiblePrice: '$3,150'
  },
  {
    id: 'v3',
    name: 'TalentScale',
    category: 'People, HR & Talent',
    rating: 4.9,
    description: 'Technical recruitment specialists. Fixed-fee placement for engineering roles.',
    verified: true,
    priceRange: '$$$',
    standardPrice: '20% Fee',
    nexiblePrice: '15% Fee'
  },
  {
    id: 'v4',
    name: 'CodeArchitects',
    category: 'Technology & Engineering',
    rating: 4.7,
    description: 'Fractional CTO advisory and architectural reviews for scaling SaaS platforms.',
    verified: true,
    priceRange: '$$',
    standardPrice: '$250/hr',
    nexiblePrice: '$180/hr'
  },
  {
    id: 'v5',
    name: 'GrowthRocket',
    category: 'Marketing, Brand & Growth',
    rating: 4.5,
    description: 'Full-stack growth agency. Brand strategy, paid acquisition, and SEO packages.',
    verified: true,
    priceRange: '$$',
    standardPrice: '$10,000/mo',
    nexiblePrice: '$8,000/mo'
  },
  {
    id: 'v6',
    name: 'CloseLoop Sales',
    category: 'Sales & Customer Success',
    rating: 4.8,
    description: 'B2B sales playbook design and CRM implementation services.',
    verified: true,
    priceRange: '$$',
    standardPrice: '$5,500',
    nexiblePrice: '$4,000'
  },
  {
    id: 'v7',
    name: 'SecureOps',
    category: 'Operations & Compliance',
    rating: 5.0,
    description: 'SOC2 and ISO27001 readiness audits and automation platform implementation.',
    verified: true,
    priceRange: '$$$',
    standardPrice: '$15,000',
    nexiblePrice: '$11,000'
  },
  {
    id: 'v8',
    name: 'PitchPerfect',
    category: 'Fundraising & Corp Dev',
    rating: 4.9,
    description: 'Investor pitch deck narrative design and financial modeling support.',
    verified: true,
    priceRange: '$$',
    standardPrice: '$3,000',
    nexiblePrice: '$2,200'
  },
  {
    id: 'v9',
    name: 'WorkSpace Finders',
    category: 'Real Estate & Facilities',
    rating: 4.6,
    description: 'Commercial tenant representation. Finding the perfect HQ for your team.',
    verified: true,
    priceRange: '$$',
    standardPrice: '3% Fee',
    nexiblePrice: '2% Fee'
  },
  {
    id: 'v10',
    name: 'OfficeFlow IT',
    category: 'Admin & Operational Support',
    rating: 4.7,
    description: 'Managed IT support, device procurement, and onboarding automation.',
    verified: true,
    priceRange: '$',
    standardPrice: '$150/user',
    nexiblePrice: '$110/user'
  },
  {
    id: 'v11',
    name: 'FinRegulate',
    category: 'Industry-Specific Experts',
    rating: 5.0,
    description: 'Specialized AML/KYC advisory for Fintech and Web3 portfolio companies.',
    verified: true,
    priceRange: '$$$',
    standardPrice: '$300/hr',
    nexiblePrice: '$225/hr'
  }
];

// MOCK REQUESTS - Enforced 50/50 Split between Mark John (0%) and Sarah Riley (5%)
export const MOCK_REQUESTS: IntroRequest[] = [
  // --- MARK JOHN (Portfolio Founder) Requests - 0% Commission ---
  {
    id: 'r_mark_1',
    requesterId: 'u_mark',
    targetName: 'Mike Cannon-Brookes',
    targetCompany: 'Atlassian',
    reason: 'Strategic Investment / Partnership',
    context: 'We have a plugin ready for Jira that saves 20% dev time.',
    commissionRate: 0.0, 
    status: 'CommercialConverted',
    connectorId: 'u_trevor',
    connectorCommissionRate: 0.0,
    createdAt: '2023-10-12',
    value: 50000
  },
  {
    id: 'r_mark_2',
    requesterId: 'u_mark',
    targetName: 'Country Manager',
    targetCompany: 'Amazon Australia',
    reason: 'Logistics Integration Partnership',
    context: 'Seeking to integrate our last-mile delivery API directly into Amazon shipping options.',
    commissionRate: 0.0,
    status: 'IntroMade',
    connectorId: 'u_charlie',
    connectorCommissionRate: 0.0,
    createdAt: '2023-11-05'
  },
  {
    id: 'r_mark_3',
    requesterId: 'u_mark',
    targetName: 'CEO',
    targetCompany: 'Australian Dairy Corp',
    reason: 'Supply Chain Automation Pilot',
    context: 'Robotics deployment for automated milking stations. Ready for field trials.',
    commissionRate: 0.0,
    status: 'CommercialConverted',
    connectorId: 'u_tim',
    connectorCommissionRate: 0.0,
    createdAt: '2023-10-15',
    value: 450000
  },
  {
    id: 'r_mark_4',
    requesterId: 'u_mark',
    targetName: 'Dr. Alan Finkel',
    targetCompany: 'Senior AI Advisor',
    reason: 'Advisory Board Invitation',
    context: 'We are forming an ethics committee for our generative models and need his guidance.',
    commissionRate: 0.0,
    status: 'IntroMade',
    connectorId: 'u_jayden',
    connectorCommissionRate: 0.0,
    createdAt: '2023-11-08'
  },

  // --- SARAH RILEY (Access Founder) Requests - 5% Commission ---
  {
    id: 'r_sarah_1',
    requesterId: 'u_sarah',
    targetName: 'CEO, Data Centre Corp',
    targetCompany: 'Equinix',
    reason: 'Strategic Infrastructure Partnership',
    context: 'We need high-density rack space for our new AI compute cluster. Looking for partnership rates.',
    commissionRate: 5.0,
    status: 'IntroMade',
    connectorId: 'u_mehdi',
    connectorCommissionRate: 2.0,
    createdAt: '2023-11-02'
  },
  {
    id: 'r_sarah_2',
    requesterId: 'u_sarah',
    targetName: 'Head of Marketing',
    targetCompany: 'McDonalds Australia',
    reason: 'Enterprise Pilot for HealthTech Screen',
    context: 'Rolling out new health-safety screens in retail. Perfect fit for their new store format.',
    commissionRate: 5.0,
    status: 'CommercialConverted',
    connectorId: 'u_jason',
    connectorCommissionRate: 1.0,
    createdAt: '2023-10-28',
    value: 120000 
  },
  {
    id: 'r_sarah_3',
    requesterId: 'u_sarah',
    targetName: 'Robyn Denholm',
    targetCompany: 'Tesla / Tech Council',
    reason: 'Policy Advice',
    context: 'Need guidance on new AI regulations impacting our sector.',
    commissionRate: 5.0,
    status: 'IntroMade',
    connectorId: 'u_creel',
    connectorCommissionRate: 0.0,
    createdAt: '2023-10-20'
  },
  {
    id: 'r_sarah_4',
    requesterId: 'u_sarah',
    targetName: 'Melanie Perkins',
    targetCompany: 'Canva',
    reason: 'Design API Integration',
    context: 'We want to build a native app for the Canva ecosystem.',
    commissionRate: 5.0,
    status: 'AwaitingResponse',
    connectorId: 'u_charlie',
    connectorCommissionRate: 0.0,
    createdAt: '2023-11-15'
  },

  // --- HISTORICAL DATA FOR MEHDI (Target $55k Comm @ 2.0%) ---
  {
    id: 'r_hist_mehdi_1',
    requesterId: 'u_niki',
    targetName: 'VP Engineering',
    targetCompany: 'GreenEnergy Solutions',
    reason: 'Series B Lead',
    context: 'Introduction for Series B funding round participation.',
    commissionRate: 5.0,
    status: 'CommercialConverted',
    connectorId: 'u_mehdi',
    connectorCommissionRate: 2.0,
    createdAt: '2023-08-15',
    value: 2000000 // 2% = $40,000
  },
  {
    id: 'r_hist_mehdi_2',
    requesterId: 'u_niki',
    targetName: 'Head of Lending',
    targetCompany: 'NAB Ventures',
    reason: 'Debt Facility',
    context: 'Securing debt facility for fintech rollout.',
    commissionRate: 5.0,
    status: 'CommercialConverted',
    connectorId: 'u_mehdi',
    connectorCommissionRate: 2.0,
    createdAt: '2023-09-10',
    value: 750000 // 2% = $15,000. Total Mehdi = $55,000
  },

  // --- HISTORICAL DATA FOR JASON (Target $62.5k Comm @ 1.0%) ---
  {
    id: 'r_hist_jason_1',
    requesterId: 'u_sarah',
    targetName: 'Director of Procurement',
    targetCompany: 'Woolworths Group',
    reason: 'Enterprise Contract',
    context: 'National rollout of supply chain tracking software.',
    commissionRate: 5.0,
    status: 'CommercialConverted',
    connectorId: 'u_jason',
    connectorCommissionRate: 1.0,
    createdAt: '2023-07-22',
    value: 4000000 // 1% = $40,000
  },
  {
    id: 'r_hist_jason_2',
    requesterId: 'u_niki',
    targetName: 'CTO',
    targetCompany: 'TechStack Corp',
    reason: 'Acquisition Discussion',
    context: 'Early discussions regarding IP acquisition.',
    commissionRate: 5.0,
    status: 'CommercialConverted',
    connectorId: 'u_jason',
    connectorCommissionRate: 1.0,
    createdAt: '2023-09-05',
    value: 2250000 // 1% = $22,500. Total Jason = $62,500
  }
];

// Pool of connectors prioritizing the requested specific people
export const CONNECTORS_POOL = [
  { id: 'u_trevor', name: 'Trevor Folsom', company: 'Investible', matchScore: 99, role: 'VC_Team', avatar: 'https://ui-avatars.com/api/?name=Trevor+Folsom&background=0f172a&color=f59e0b&bold=true', commissionRate: 0.0 },
  { id: 'u_creel', name: 'Creel Price', company: 'Investible', matchScore: 97, role: 'VC_Team', avatar: 'https://ui-avatars.com/api/?name=Creel+Price&background=0f172a&color=f59e0b&bold=true', commissionRate: 0.0 },
  { id: 'u_charlie', name: 'Charlie Ill', company: 'Investible', matchScore: 95, role: 'VC_Team', avatar: 'https://ui-avatars.com/api/?name=Charlie+Ill&background=0f172a&color=f59e0b&bold=true', commissionRate: 0.0 },
  { id: 'u_jayden', name: 'Jayden Basha', company: 'Investible', matchScore: 89, role: 'VC_Team', avatar: 'https://ui-avatars.com/api/?name=Jayden+Basha&background=0f172a&color=f59e0b&bold=true', commissionRate: 0.0 },
  { id: 'u_tim', name: 'Tim Coates', company: 'Investible', matchScore: 88, role: 'VC_Team', avatar: 'https://ui-avatars.com/api/?name=Tim+Coates&background=0f172a&color=f59e0b&bold=true', commissionRate: 0.0 }, // Updated to VC_Team and 0.0
  { id: 'u_mehdi', name: 'Mehdi Querim', company: 'Club Invest', matchScore: 85, role: 'Investor_Connector', avatar: 'https://ui-avatars.com/api/?name=Mehdi+Querim&background=1e293b&color=cbd5e1&bold=true', commissionRate: 2.0 },
  { id: 'u_jason', name: 'Jason Stirling', company: 'Partner', matchScore: 82, role: 'Investor_Connector', avatar: 'https://ui-avatars.com/api/?name=Jason+Stirling&background=1e293b&color=cbd5e1&bold=true', commissionRate: 1.0 },
  { id: 'u_mark', name: 'Mark John', company: 'ConnectCo', matchScore: 75, role: 'PortfolioFounder_Connector', avatar: 'https://ui-avatars.com/api/?name=Mark+John&background=1e293b&color=cbd5e1&bold=true', commissionRate: 0.0 },
];
