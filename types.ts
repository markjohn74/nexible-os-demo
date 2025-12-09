
export type UserRole = 'VC_Team' | 'Investor_Connector' | 'PortfolioFounder_Connector' | 'AccessFounder' | 'DemoUser';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  company: string;
  avatar: string;
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Partner';
  connections: number; // Mock count of imported LinkedIn contacts
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  description: string;
  verified: boolean;
  priceRange: string;
  standardPrice?: string;
  nexiblePrice?: string;
}

export interface IntroRequest {
  id: string;
  requesterId: string;
  targetName: string;
  targetCompany: string;
  reason: string;
  context: string;
  commissionRate: number; // 0.0, 2.5, or 5.0
  status: 'Pending' | 'Matching' | 'AwaitingResponse' | 'IntroMade' | 'CommercialConverted' | 'Completed' | 'Declined';
  connectorId?: string;
  connectorCommissionRate?: number;
  createdAt: string;
  value?: number; // Realized commercial value
}

export interface Metric {
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

export type DetailViewType = 'network_growth' | 'active_intros' | 'commercial_value' | 'pending_requests' | 'savings' | 'matches_found' | 'venture_status' | null;
