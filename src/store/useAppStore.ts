import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
}

interface Associate {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  membershipDate: string;
  status: 'active' | 'inactive' | 'pending';
  membershipType: 'basic' | 'premium' | 'vip';
  monthlyContribution: number; // Aporte mensual
  totalContributed: number; // Total aportado
  currentBalance: number; // Balance actual
}

interface Loan {
  id: string;
  associateId: string;
  associateName: string;
  amount: number;
  interestRate: number;
  term: number; // en meses
  startDate: string;
  endDate: string;
  status: 'pending' | 'active' | 'paid' | 'defaulted';
  monthlyPayment: number;
  remainingBalance: number;
  totalInterest: number;
}

interface Contribution {
  id: string;
  associateId: string;
  amount: number;
  date: string;
  month: string; // YYYY-MM
  status: 'completed' | 'pending' | 'overdue';
}

interface Dividend {
  id: string;
  associateId: string;
  amount: number;
  date: string;
  source: 'loan_interest' | 'investment_return';
  description: string;
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  theme: 'light' | 'dark';
  notifications: string[];
  associates: Associate[];
  loans: Loan[];
  contributions: Contribution[];
  dividends: Dividend[];
  currentView: 'welcome' | 'admin' | 'associates';
  
  // Actions
  setUser: (user: User | null) => void;
  setAuthenticated: (status: boolean) => void;
  setLoading: (loading: boolean) => void;
  toggleTheme: () => void;
  addNotification: (message: string) => void;
  removeNotification: (index: number) => void;
  clearNotifications: () => void;
  setCurrentView: (view: 'welcome' | 'admin' | 'associates') => void;
  
  // Associate actions
  addAssociate: (associate: Omit<Associate, 'id' | 'totalContributed' | 'currentBalance'>) => void;
  updateAssociate: (id: string, updates: Partial<Associate>) => void;
  deleteAssociate: (id: string) => void;
  getAssociate: (id: string) => Associate | undefined;
  
  // Loan actions
  addLoan: (loan: Omit<Loan, 'id' | 'remainingBalance' | 'totalInterest'>) => void;
  updateLoan: (id: string, updates: Partial<Loan>) => void;
  deleteLoan: (id: string) => void;
  getLoan: (id: string) => Loan | undefined;
  
  // Contribution actions
  addContribution: (contribution: Omit<Contribution, 'id'>) => void;
  updateContribution: (id: string, updates: Partial<Contribution>) => void;
  deleteContribution: (id: string) => void;
  
  // Dividend actions
  addDividend: (dividend: Omit<Dividend, 'id'>) => void;
  
  // Calculated values
  getTotalFundBalance: () => number;
  getMonthlyContributions: (month: string) => number;
  getActiveLoans: () => Loan[];
  getTotalInterestEarned: () => number;
}

// Datos de ejemplo para asociados con aportes mensuales
const sampleAssociates: Associate[] = [
  {
    id: '1',
    name: 'María González',
    email: 'maria.gonzalez@email.com',
    phone: '+34 600 123 456',
    address: 'Calle Mayor 123, Madrid',
    membershipDate: '2024-01-15',
    status: 'active',
    membershipType: 'premium',
    monthlyContribution: 500,
    totalContributed: 2500,
    currentBalance: 2500
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@email.com',
    phone: '+34 600 234 567',
    address: 'Avenida de la Paz 45, Barcelona',
    membershipDate: '2024-02-20',
    status: 'active',
    membershipType: 'vip',
    monthlyContribution: 750,
    totalContributed: 3000,
    currentBalance: 3000
  },
  {
    id: '3',
    name: 'Ana Martínez',
    email: 'ana.martinez@email.com',
    phone: '+34 600 345 678',
    address: 'Plaza España 7, Valencia',
    membershipDate: '2024-03-10',
    status: 'pending',
    membershipType: 'basic',
    monthlyContribution: 300,
    totalContributed: 300,
    currentBalance: 300
  },
  {
    id: '4',
    name: 'Luis Fernández',
    email: 'luis.fernandez@email.com',
    phone: '+34 600 456 789',
    address: 'Calle Real 89, Sevilla',
    membershipDate: '2024-01-30',
    status: 'inactive',
    membershipType: 'basic',
    monthlyContribution: 400,
    totalContributed: 1600,
    currentBalance: 1600
  }
];

// Datos de ejemplo para préstamos
const sampleLoans: Loan[] = [
  {
    id: '1',
    associateId: '1',
    associateName: 'María González',
    amount: 2000,
    interestRate: 8.5,
    term: 12,
    startDate: '2024-02-01',
    endDate: '2025-01-31',
    status: 'active',
    monthlyPayment: 175.50,
    remainingBalance: 1400,
    totalInterest: 106
  },
  {
    id: '2',
    associateId: '2',
    associateName: 'Carlos Rodríguez',
    amount: 1500,
    interestRate: 7.0,
    term: 6,
    startDate: '2024-03-01',
    endDate: '2024-08-31',
    status: 'active',
    monthlyPayment: 260.25,
    remainingBalance: 780,
    totalInterest: 61.50
  }
];

// Datos de ejemplo para aportes
const sampleContributions: Contribution[] = [
  {
    id: '1',
    associateId: '1',
    amount: 500,
    date: '2024-01-15',
    month: '2024-01',
    status: 'completed'
  },
  {
    id: '2',
    associateId: '1',
    amount: 500,
    date: '2024-02-15',
    month: '2024-02',
    status: 'completed'
  },
  {
    id: '3',
    associateId: '1',
    amount: 500,
    date: '2024-03-15',
    month: '2024-03',
    status: 'completed'
  },
  {
    id: '4',
    associateId: '1',
    amount: 500,
    date: '2024-04-15',
    month: '2024-04',
    status: 'completed'
  },
  {
    id: '5',
    associateId: '1',
    amount: 500,
    date: '2024-05-15',
    month: '2024-05',
    status: 'completed'
  }
];

export const useAppStore = create<AppState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  theme: 'light',
  notifications: [],
  associates: sampleAssociates,
  loans: sampleLoans,
  contributions: sampleContributions,
  dividends: [],
  currentView: 'welcome',
  
  setUser: (user) => set({ user }),
  setAuthenticated: (status) => set({ isAuthenticated: status }),
  setLoading: (loading) => set({ isLoading: loading }),
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
  addNotification: (message) => set((state) => ({
    notifications: [...state.notifications, message]
  })),
  removeNotification: (index) => set((state) => ({
    notifications: state.notifications.filter((_, i) => i !== index)
  })),
  clearNotifications: () => set({ notifications: [] }),
  setCurrentView: (view) => set({ currentView: view }),
  
  // Associate actions
  addAssociate: (associate) => set((state) => ({
    associates: [...state.associates, { 
      ...associate, 
      id: Date.now().toString(),
      totalContributed: 0,
      currentBalance: 0
    }]
  })),
  updateAssociate: (id, updates) => set((state) => ({
    associates: state.associates.map(associate => 
      associate.id === id ? { ...associate, ...updates } : associate
    )
  })),
  deleteAssociate: (id) => set((state) => ({
    associates: state.associates.filter(associate => associate.id !== id)
  })),
  getAssociate: (id) => get().associates.find(associate => associate.id === id),
  
  // Loan actions
  addLoan: (loan) => set((state) => ({
    loans: [...state.loans, { 
      ...loan, 
      id: Date.now().toString(),
      remainingBalance: loan.amount,
      totalInterest: (loan.amount * loan.interestRate / 100) * (loan.term / 12)
    }]
  })),
  updateLoan: (id, updates) => set((state) => ({
    loans: state.loans.map(loan => 
      loan.id === id ? { ...loan, ...updates } : loan
    )
  })),
  deleteLoan: (id) => set((state) => ({
    loans: state.loans.filter(loan => loan.id !== id)
  })),
  getLoan: (id) => get().loans.find(loan => loan.id === id),
  
  // Contribution actions
  addContribution: (contribution) => set((state) => ({
    contributions: [...state.contributions, { ...contribution, id: Date.now().toString() }]
  })),
  updateContribution: (id, updates) => set((state) => ({
    contributions: state.contributions.map(contribution => 
      contribution.id === id ? { ...contribution, ...updates } : contribution
    )
  })),
  deleteContribution: (id) => set((state) => ({
    contributions: state.contributions.filter(contribution => contribution.id !== id)
  })),
  
  // Dividend actions
  addDividend: (dividend) => set((state) => ({
    dividends: [...state.dividends, { ...dividend, id: Date.now().toString() }]
  })),
  
  // Calculated values
  getTotalFundBalance: () => {
    const state = get();
    const totalContributions = state.associates.reduce((sum, associate) => sum + associate.totalContributed, 0);
    const totalLoans = state.loans.reduce((sum, loan) => sum + loan.remainingBalance, 0);
    return totalContributions - totalLoans;
  },
  
  getMonthlyContributions: (month) => {
    const state = get();
    return state.contributions
      .filter(contribution => contribution.month === month && contribution.status === 'completed')
      .reduce((sum, contribution) => sum + contribution.amount, 0);
  },
  
  getActiveLoans: () => {
    const state = get();
    return state.loans.filter(loan => loan.status === 'active');
  },
  
  getTotalInterestEarned: () => {
    const state = get();
    return state.loans
      .filter(loan => loan.status === 'paid')
      .reduce((sum, loan) => sum + loan.totalInterest, 0);
  }
}));
