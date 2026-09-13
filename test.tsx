
const { useState, useEffect, useMemo, useCallback, useRef, Fragment, StrictMode } = window.React;
const ChartJS = window.Chart;

// Mock motion to just standard divs since Framer Motion isn't via CDN in the prompt
const motion = {
    div: (props) => { const { initial, animate, exit, transition, ...rest } = props; return <div {...rest} /> },
    button: (props) => { const { initial, animate, exit, transition, ...rest } = props; return <button {...rest} /> },
    span: (props) => { const { initial, animate, exit, transition, ...rest } = props; return <span {...rest} /> },
};
const AnimatePresence = ({children}) => <>{children}</>;


const ArrowDownRight = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['arrowDownRight'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const ArrowUpRight = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['arrowUpRight'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Calendar = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['calendar'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const PiggyBank = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['piggyBank'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Scale = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['scale'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Wallet = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['wallet'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Coins = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['coins'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const AlertCircle = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['alertCircle'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const CheckCircle2 = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['checkCircle2'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const ChevronRight = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['chevronRight'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Edit3 = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['edit3'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Layers = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['layers'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const PieChart = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['pieChart'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Plus = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['plus'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Sparkles = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['sparkles'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const TrendingDown = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['trendingDown'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const TrendingUp = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['trendingUp'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const BarChart3 = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['barChart3'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const ArrowDown = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['arrowDown'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const ArrowUp = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['arrowUp'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Download = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['download'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Filter = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['filter'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Search = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['search'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Tag = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['tag'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Trash2 = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['trash2'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const X = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['x'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const History = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['history'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Calculator = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['calculator'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Check = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['check'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const CheckCircle = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['checkCircle'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Clock = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['clock'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const CreditCard = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['creditCard'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Repeat = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['repeat'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Target = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['target'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const TableIcon = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['table'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const ShieldCheck = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['shieldCheck'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Mail = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['mail'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Lock = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['lock'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Settings2 = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['settings2'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Cloud = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['cloud'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Database = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['database'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Flame = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['flame'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Moon = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['moon'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const RefreshCw = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['refreshCw'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const RotateCcw = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['rotateCcw'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Save = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['save'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Server = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['server'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Sun = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['sun'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Upload = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['upload'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const LogOut = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['logOut'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Palette = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['palette'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const FileSpreadsheet = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['fileSpreadsheet'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const LayoutDashboard = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['layoutDashboard'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};

const Settings = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconNode = window.lucide?.icons['settings'];
    if (!iconNode) return null;
    return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;
};


// --- Firebase REST Polyfills ---
const FIREBASE_API_KEY = "dummy-key-since-no-env"; 

let _currentUser = null;
let _authListeners = [];

const auth = {
  get currentUser() { return _currentUser; }
};

const onAuthStateChanged = (authObj, callback) => {
  _authListeners.push(callback);
  setTimeout(() => callback(_currentUser), 500);
  return () => {
    _authListeners = _authListeners.filter(cb => cb !== callback);
  };
};

const notifyAuth = () => {
  _authListeners.forEach(cb => cb(_currentUser));
};

const signInWithEmailAndPassword = async (authObj, email, password) => {
  console.log("Mock REST sign in:", email);
  _currentUser = { uid: "123", email: email };
  notifyAuth();
  return { user: _currentUser };
};

const createUserWithEmailAndPassword = async (authObj, email, password) => {
  console.log("Mock REST sign up:", email);
  _currentUser = { uid: "123", email: email };
  notifyAuth();
  return { user: _currentUser };
};

const signOut = async (authObj) => {
  _currentUser = null;
  notifyAuth();
};

const updatePassword = async () => {};
const EmailAuthProvider = { credential: () => ({}) };
const reauthenticateWithCredential = async () => {};
const setPersistence = async () => {};
const sendPasswordResetEmail = async () => {};
const browserLocalPersistence = 'LOCAL';
const browserSessionPersistence = 'SESSION';




// --- src/types.ts ---
type TransactionType = 'expense' | 'income';
type BudgetGroup = 'Needs' | 'Wants' | 'Savings';

type PaymentMode = 
  | 'Cash'
  | 'Credit Card'
  | 'Bank';

interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  category: string;
  subCategory?: string;
  groupType?: BudgetGroup;
  paymentMode: PaymentMode;
  date: string; // YYYY-MM-DD
  notes: string;
  createdAt: number;
}

interface BudgetCategory {
  id: string;
  name: string;
  groupType: BudgetGroup;
  icon: string;
  color: string;
  monthlyBudget: number;
}

interface SubCategory {
  id: string;
  subCategory: string;
  category: string; // The parent category name
  groupType: BudgetGroup;
}

interface Subscription {
  id: string;
  name: string;
  amount: number;
  billingCycle: 'monthly' | 'yearly';
  category: string;
  nextBillingDate: string; // YYYY-MM-DD
  active: boolean;
}

interface FinancialGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string; // YYYY-MM-DD
  category: string;
  notes?: string;
  isCompleted?: boolean;
  contributions?: { id: string; date: string; amount: number }[];
}

type SyncProvider = 'none' | 'supabase' | 'firebase';

interface SyncConfig {
  provider: SyncProvider;
  url: string;
  apiKey: string;
  autoSync: boolean;
  lastSyncedAt: string | null;
  syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  errorMessage?: string;
}

interface UserSettings {
  currency: string;
  monthlyIncome: number;
  overallMonthlyBudget: number;
  theme: 'light' | 'dark';
  syncConfig: SyncConfig;
}

interface FinanceAppData {
  transactions: Transaction[];
  categories: BudgetCategory[];
  subCategories: SubCategory[];
  subscriptions: Subscription[];
  goals: FinancialGoal[];
  settings: UserSettings;
}


// --- src/utils/formatters.ts ---
/**
 * Formats numbers in Indian numbering system (e.g. ₹58,500 or ₹1,50,000)
 */
function formatINR(amount: number, currency: string = '₹', includeSign: boolean = false): string {
  const isNegative = amount < 0;
  const absVal = Math.abs(amount);

  // Format with en-IN locale
  const formatted = absVal.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  if (isNegative) {
    return `-${currency}${formatted}`;
  }
  if (includeSign && amount > 0) {
    return `+${currency}${formatted}`;
  }
  return `${currency}${formatted}`;
}

function formatINRWithDecimals(amount: number, currency: string = '₹'): string {
  const isNegative = amount < 0;
  const absVal = Math.abs(amount);

  const formatted = absVal.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  if (isNegative) {
    return `-${currency}${formatted}`;
  }
  return `${currency}${formatted}`;
}

function formatDateDDMMYYYY(dateString: string): string {
  if (!dateString) return '';
  const parts = dateString.split('-');
  if (parts.length !== 3) return dateString;
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}


// --- src/data/initialData.ts ---

const DEFAULT_SUBCATEGORIES: SubCategory[] = [
  { id: 'subcat-1', subCategory: 'Education / Children\'s Fees', category: 'Education', groupType: 'Needs' },
  { id: 'subcat-2', subCategory: 'Self Education', category: 'Education', groupType: 'Needs' },
  { id: 'subcat-3', subCategory: 'Stationery', category: 'Education', groupType: 'Needs' },
  { id: 'subcat-4', subCategory: 'Credit Card Bill Payment', category: 'EMI / Loan Repayment', groupType: 'Needs' },
  { id: 'subcat-5', subCategory: 'Personal Loan EMI', category: 'EMI / Loan Repayment', groupType: 'Needs' },
  { id: 'subcat-6', subCategory: 'Entertainment', category: 'Entertainment', groupType: 'Wants' },
  { id: 'subcat-7', subCategory: 'Festivals', category: 'Festivals & Celebrations', groupType: 'Wants' },
  { id: 'subcat-8', subCategory: 'Kids Snacks', category: 'Family & Dependents', groupType: 'Needs' },
  { id: 'subcat-9', subCategory: 'Wife Needs', category: 'Family & Dependents', groupType: 'Needs' },
  { id: 'subcat-10', subCategory: 'Breakfast & Snacks', category: 'Dining & Snacks', groupType: 'Wants' },
  { id: 'subcat-11', subCategory: 'Fruits', category: 'Food & Groceries', groupType: 'Needs' },
  { id: 'subcat-12', subCategory: 'Groceries', category: 'Food & Groceries', groupType: 'Needs' },
  { id: 'subcat-13', subCategory: 'Vegetable', category: 'Food & Groceries', groupType: 'Needs' },
  { id: 'subcat-14', subCategory: 'Doctor', category: 'Health & Medical', groupType: 'Needs' },
  { id: 'subcat-15', subCategory: 'Life & Health Insurance', category: 'Health & Medical', groupType: 'Needs' },
  { id: 'subcat-16', subCategory: 'Medicine', category: 'Health & Medical', groupType: 'Needs' },
  { id: 'subcat-17', subCategory: 'Household', category: 'Miscellaneous', groupType: 'Needs' },
  { id: 'subcat-18', subCategory: 'Others', category: 'Miscellaneous', groupType: 'Needs' },
  { id: 'subcat-19', subCategory: 'Unexpected', category: 'Miscellaneous', groupType: 'Needs' },
  { id: 'subcat-20', subCategory: 'Personal & Lifestyle', category: 'Personal & Lifestyle', groupType: 'Wants' },
  { id: 'subcat-21', subCategory: 'Investments (SIP / Stocks)', category: 'Savings & Investments', groupType: 'Savings' },
  { id: 'subcat-22', subCategory: 'Savings (FD / RD)', category: 'Savings & Investments', groupType: 'Savings' },
  { id: 'subcat-23', subCategory: 'Parking & Toll', category: 'Transportation', groupType: 'Needs' },
  { id: 'subcat-24', subCategory: 'Petrol / Diesel', category: 'Transportation', groupType: 'Needs' },
  { id: 'subcat-25', subCategory: 'Vehicle Insurance', category: 'Transportation', groupType: 'Needs' },
  { id: 'subcat-26', subCategory: 'Vehicle Maintenance', category: 'Transportation', groupType: 'Needs' },
  { id: 'subcat-27', subCategory: 'Internet Bill', category: 'Utilities & Bills', groupType: 'Needs' },
  { id: 'subcat-28', subCategory: 'Mobile Bill', category: 'Utilities & Bills', groupType: 'Needs' },
];

const DEFAULT_CATEGORIES: BudgetCategory[] = [
  { id: 'cat-food', name: 'Food & Groceries', groupType: 'Needs', icon: 'ShoppingCart', color: '#059669', monthlyBudget: 18000 },
  { id: 'cat-edu', name: 'Education', groupType: 'Needs', icon: 'GraduationCap', color: '#0284c7', monthlyBudget: 4700 },
  { id: 'cat-health', name: 'Health & Medical', groupType: 'Needs', icon: 'Activity', color: '#ef4444', monthlyBudget: 3750 },
  { id: 'cat-emi', name: 'EMI / Loan Repayment', groupType: 'Needs', icon: 'Landmark', color: '#f59e0b', monthlyBudget: 2000 },
  { id: 'cat-misc', name: 'Miscellaneous', groupType: 'Needs', icon: 'HelpCircle', color: '#64748b', monthlyBudget: 2000 },
  { id: 'cat-trans', name: 'Transportation', groupType: 'Needs', icon: 'Car', color: '#3b82f6', monthlyBudget: 1600 },
  { id: 'cat-family', name: 'Family & Dependents', groupType: 'Needs', icon: 'Heart', color: '#8b5cf6', monthlyBudget: 1500 },
  { id: 'cat-util', name: 'Utilities & Bills', groupType: 'Needs', icon: 'Zap', color: '#eab308', monthlyBudget: 1500 },
  { id: 'cat-dining', name: 'Dining & Snacks', groupType: 'Wants', icon: 'Utensils', color: '#10b981', monthlyBudget: 1000 },
  { id: 'cat-life', name: 'Personal & Lifestyle', groupType: 'Wants', icon: 'ShoppingBag', color: '#14b8a6', monthlyBudget: 1000 },
  { id: 'cat-ent', name: 'Entertainment', groupType: 'Wants', icon: 'Tv', color: '#ec4899', monthlyBudget: 0 },
  { id: 'cat-fest', name: 'Festivals & Celebrations', groupType: 'Wants', icon: 'Sparkles', color: '#f97316', monthlyBudget: 0 },
  { id: 'cat-sav', name: 'Savings & Investments', groupType: 'Savings', icon: 'TrendingUp', color: '#047857', monthlyBudget: 0 },
  { id: 'cat-income', name: 'Salary / Income', groupType: 'Savings', icon: 'Wallet', color: '#10b981', monthlyBudget: 0 },
];

const DEFAULT_SUBSCRIPTIONS: Subscription[] = [
  {
    id: 'sub-1',
    name: 'Netflix India Premium (4K)',
    amount: 649,
    billingCycle: 'monthly',
    category: 'Entertainment',
    nextBillingDate: '2026-09-24',
    active: true,
  },
  {
    id: 'sub-2',
    name: 'Spotify Premium Duo',
    amount: 149,
    billingCycle: 'monthly',
    category: 'Entertainment',
    nextBillingDate: '2026-09-28',
    active: true,
  },
  {
    id: 'sub-3',
    name: 'JioFiber High-Speed WiFi',
    amount: 999,
    billingCycle: 'monthly',
    category: 'Utilities & Bills',
    nextBillingDate: '2026-10-01',
    active: true,
  },
  {
    id: 'sub-4',
    name: 'Cult.fit Gym & Fitness Elite',
    amount: 1500,
    billingCycle: 'monthly',
    category: 'Health & Medical',
    nextBillingDate: '2026-09-19',
    active: true,
  },
  {
    id: 'sub-5',
    name: 'Amazon Prime India (Annual)',
    amount: 1499,
    billingCycle: 'yearly',
    category: 'Personal & Lifestyle',
    nextBillingDate: '2026-11-15',
    active: true,
  },
];

const DEFAULT_GOALS: FinancialGoal[] = [
  {
    id: 'goal-1',
    title: 'Emergency Rainy Day Reserve (6 Months)',
    targetAmount: 350000,
    currentAmount: 240000,
    targetDate: '2026-12-31',
    category: 'Savings & Investments',
    notes: 'Liquid fixed deposit & liquid mutual funds safety cushion.',
    isCompleted: false,
  },
  {
    id: 'goal-2',
    title: 'Diwali Festive & Gold Savings',
    targetAmount: 75000,
    currentAmount: 50000,
    targetDate: '2026-10-30',
    category: 'Festivals & Celebrations',
    notes: 'Sovereign Gold Bonds / Festive gifts for family.',
    isCompleted: false,
  },
  {
    id: 'goal-3',
    title: 'Laptop / Professional Tech Upgrade',
    targetAmount: 85000,
    currentAmount: 85000,
    targetDate: '2026-09-10',
    category: 'Education',
    notes: 'Goal achieved! Ready for purchase.',
    isCompleted: true,
  },
];

const DEFAULT_SETTINGS: UserSettings = {
  currency: '₹',
  monthlyIncome: 58500,
  overallMonthlyBudget: 37050,
  theme: 'light', // Mint and White default!
  syncConfig: {
    provider: 'none',
    url: '',
    apiKey: '',
    autoSync: false,
    lastSyncedAt: null,
    syncStatus: 'idle',
  },
};

// Generate realistic transactions matching the user's Excel sheet reference:
// Report Month: September 2026 (or dynamic current month)
// Income: ₹58,500
// Spent: ₹46,910
// Budget: ₹37,050
function getInitialTransactions(): Transaction[] {
  const transactions: Transaction[] = [
    {
      id: 'tx-1',
      date: '2026-09-01',
      amount: 10000,
      type: 'expense',
      category: 'Education',
      subCategory: 'Education / Children\'s Fees',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'School dues',
      createdAt: Date.parse('2026-09-01T10:00:00Z')
    },
    {
      id: 'tx-2',
      date: '2026-09-01',
      amount: 1500,
      type: 'expense',
      category: 'Education',
      subCategory: 'Education / Children\'s Fees',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'Tution Fees',
      createdAt: Date.parse('2026-09-01T11:00:00Z')
    },
    {
      id: 'tx-3',
      date: '2026-09-01',
      amount: 1320,
      type: 'expense',
      category: 'Festivals & Celebrations',
      subCategory: 'Festivals',
      groupType: 'Wants',
      paymentMode: 'Credit Card',
      notes: 'Puja-Sundar Kand',
      createdAt: Date.parse('2026-09-01T12:00:00Z')
    },
    {
      id: 'tx-4',
      date: '2026-09-01',
      amount: 20,
      type: 'expense',
      category: 'Festivals & Celebrations',
      subCategory: 'Festivals',
      groupType: 'Wants',
      paymentMode: 'Credit Card',
      notes: 'Change for Aarti',
      createdAt: Date.parse('2026-09-01T13:00:00Z')
    },
    {
      id: 'tx-5',
      date: '2026-09-03',
      amount: 100,
      type: 'expense',
      category: 'Food & Groceries',
      subCategory: 'Groceries',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'Fruits for myself',
      createdAt: Date.parse('2026-09-03T10:00:00Z')
    },
    {
      id: 'tx-6',
      date: '2026-09-03',
      amount: 200,
      type: 'expense',
      category: 'Family & Dependents',
      subCategory: 'Wife Needs',
      groupType: 'Needs',
      paymentMode: 'Credit Card',
      notes: 'Pad',
      createdAt: Date.parse('2026-09-03T11:00:00Z')
    },
    {
      id: 'tx-7',
      date: '2026-09-03',
      amount: 150,
      type: 'expense',
      category: 'Personal & Lifestyle',
      subCategory: 'Personal & Lifestyle',
      groupType: 'Wants',
      paymentMode: 'Bank',
      notes: 'Sleeper',
      createdAt: Date.parse('2026-09-03T12:00:00Z')
    },
    {
      id: 'tx-8',
      date: '2026-09-04',
      amount: 96,
      type: 'expense',
      category: 'Dining & Snacks',
      subCategory: 'Breakfast & Snacks',
      groupType: 'Wants',
      paymentMode: 'Credit Card',
      notes: 'Samosa myslef & Home',
      createdAt: Date.parse('2026-09-04T10:00:00Z')
    },
    {
      id: 'tx-9',
      date: '2026-09-05',
      amount: 10,
      type: 'expense',
      category: 'Transportation',
      subCategory: 'Petrol / Diesel',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'Air Checkup Bike',
      createdAt: Date.parse('2026-09-05T09:00:00Z')
    },
    {
      id: 'tx-10',
      date: '2026-09-05',
      amount: 90,
      type: 'expense',
      category: 'Dining & Snacks',
      subCategory: 'Breakfast & Snacks',
      groupType: 'Wants',
      paymentMode: 'Credit Card',
      notes: 'Penut & Badam Shek',
      createdAt: Date.parse('2026-09-05T10:00:00Z')
    },
    {
      id: 'tx-11',
      date: '2026-09-05',
      amount: 2974,
      type: 'expense',
      category: 'Health & Medical',
      subCategory: 'Medicine',
      groupType: 'Needs',
      paymentMode: 'Credit Card',
      notes: 'Medicine',
      createdAt: Date.parse('2026-09-05T11:00:00Z')
    },
    {
      id: 'tx-12',
      date: '2026-09-05',
      amount: 600,
      type: 'expense',
      category: 'Health & Medical',
      subCategory: 'Medicine',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'fees',
      createdAt: Date.parse('2026-09-05T12:00:00Z')
    },
    {
      id: 'tx-13',
      date: '2026-09-06',
      amount: 5100,
      type: 'expense',
      category: 'Miscellaneous',
      subCategory: 'Others',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'Wood for Back Gate',
      createdAt: Date.parse('2026-09-06T10:00:00Z')
    },
    {
      id: 'tx-14',
      date: '2026-09-06',
      amount: 90,
      type: 'expense',
      category: 'Dining & Snacks',
      subCategory: 'Breakfast & Snacks',
      groupType: 'Wants',
      paymentMode: 'Credit Card',
      notes: 'Litti & Penut',
      createdAt: Date.parse('2026-09-06T11:00:00Z')
    },
    {
      id: 'tx-15',
      date: '2026-09-06',
      amount: 510,
      type: 'expense',
      category: 'Family & Dependents',
      subCategory: 'Wife Needs',
      groupType: 'Needs',
      paymentMode: 'Credit Card',
      notes: 'Wife Needs',
      createdAt: Date.parse('2026-09-06T12:00:00Z')
    },
    {
      id: 'tx-16',
      date: '2026-09-07',
      amount: 1240,
      type: 'expense',
      category: 'Entertainment',
      subCategory: 'Entertainment',
      groupType: 'Wants',
      paymentMode: 'Cash',
      notes: 'Mela with Family',
      createdAt: Date.parse('2026-09-07T10:00:00Z')
    },
    {
      id: 'tx-17',
      date: '2026-09-08',
      amount: 170,
      type: 'expense',
      category: 'Food & Groceries',
      subCategory: 'Groceries',
      groupType: 'Needs',
      paymentMode: 'Cash',
      notes: 'Fruit for my breakfast',
      createdAt: Date.parse('2026-09-08T10:00:00Z')
    },
    {
      id: 'tx-18',
      date: '2026-09-08',
      amount: 20000,
      type: 'expense',
      category: 'Food & Groceries',
      subCategory: 'Groceries',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'Gave to Papa',
      createdAt: Date.parse('2026-09-08T11:00:00Z')
    },
    {
      id: 'tx-19',
      date: '2026-09-08',
      amount: 260,
      type: 'expense',
      category: 'Food & Groceries',
      subCategory: 'Groceries',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'Onion',
      createdAt: Date.parse('2026-09-08T12:00:00Z')
    },
    {
      id: 'tx-20',
      date: '2026-09-08',
      amount: 1500,
      type: 'expense',
      category: 'Miscellaneous',
      subCategory: 'Others',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'Accessories for back door',
      createdAt: Date.parse('2026-09-08T13:00:00Z')
    },
    {
      id: 'tx-21',
      date: '2026-09-09',
      amount: 10,
      type: 'expense',
      category: 'Dining & Snacks',
      subCategory: 'Breakfast & Snacks',
      groupType: 'Wants',
      paymentMode: 'Cash',
      notes: 'Snacks',
      createdAt: Date.parse('2026-09-09T10:00:00Z')
    },
    {
      id: 'tx-22',
      date: '2026-09-09',
      amount: 170,
      type: 'expense',
      category: 'Miscellaneous',
      subCategory: 'Others',
      groupType: 'Needs',
      paymentMode: 'Credit Card',
      notes: 'Good night rifile',
      createdAt: Date.parse('2026-09-09T11:00:00Z')
    },
    {
      id: 'tx-23',
      date: '2026-09-11',
      amount: 250,
      type: 'expense',
      category: 'Food & Groceries',
      subCategory: 'Groceries',
      groupType: 'Needs',
      paymentMode: 'Cash',
      notes: 'For myself',
      createdAt: Date.parse('2026-09-11T10:00:00Z')
    },
    {
      id: 'tx-24',
      date: '2026-09-11',
      amount: 40,
      type: 'expense',
      category: 'Dining & Snacks',
      subCategory: 'Breakfast & Snacks',
      groupType: 'Wants',
      paymentMode: 'Credit Card',
      notes: 'Egg & Chawmin',
      createdAt: Date.parse('2026-09-11T11:00:00Z')
    },
    {
      id: 'tx-25',
      date: '2026-09-11',
      amount: 190,
      type: 'expense',
      category: 'Family & Dependents',
      subCategory: 'Wife Needs',
      groupType: 'Needs',
      paymentMode: 'Bank',
      notes: 'Dipper for Son',
      createdAt: Date.parse('2026-09-11T12:00:00Z')
    },
    {
      id: 'tx-26',
      date: '2026-09-12',
      amount: 190,
      type: 'expense',
      category: 'Food & Groceries',
      subCategory: 'Groceries',
      groupType: 'Needs',
      paymentMode: 'Credit Card',
      notes: 'Vegetable',
      createdAt: Date.parse('2026-09-12T10:00:00Z')
    },
    {
      id: 'tx-27',
      date: '2026-09-12',
      amount: 40,
      type: 'expense',
      category: 'Festivals & Celebrations',
      subCategory: 'Festivals',
      groupType: 'Wants',
      paymentMode: 'Credit Card',
      notes: 'Curd',
      createdAt: Date.parse('2026-09-12T11:00:00Z')
    },
    {
      id: 'tx-28',
      date: '2026-09-12',
      amount: 90,
      type: 'expense',
      category: 'Festivals & Celebrations',
      subCategory: 'Festivals',
      groupType: 'Wants',
      paymentMode: 'Cash',
      notes: 'Dali',
      createdAt: Date.parse('2026-09-12T12:00:00Z')
    },
    // Adding standard Income entry to match 58500
    {
      id: 'tx-inc-1',
      date: '2026-09-01',
      amount: 58500,
      type: 'income',
      category: 'Salary / Income',
      subCategory: 'Others',
      groupType: 'Savings',
      paymentMode: 'Bank',
      notes: 'Monthly Professional Salary Credit',
      createdAt: Date.parse('2026-09-01T09:00:00Z')
    }
  ];
  return transactions;
}


// --- src/components/Logo.tsx ---

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "text-xl" }) => {
  return (
    <div className={`flex items-center font-black tracking-tighter select-none ${className}`}>
      <span className="text-slate-700 dark:text-slate-200">e</span>
      <span className="text-red-600">X</span>
      <span className="text-slate-700 dark:text-slate-200">pense.</span>
      <span className="text-slate-700 dark:text-slate-200">iQ</span>
    </div>
  );
};


// --- src/components/QuickBalanceCards.tsx ---

interface QuickBalanceCardsProps {
  transactions: Transaction[];
  monthlyBudget: number;
  currency: string;
  theme: 'light' | 'dark';
  onOpenAddModal: () => void;
}

const QuickBalanceCards: React.FC<QuickBalanceCardsProps> = ({
  transactions,
  monthlyBudget,
  currency,
  theme,
  onOpenAddModal,
}) => {
  const isLight = theme === 'light';
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;
  const currentMonthPrefix = `${year}-${month}`;

  // Filter for today
  const todayTransactions = transactions.filter((t) => t.date === todayStr);
  const todaySpend = todayTransactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  // Filter for this month
  const monthTransactions = transactions.filter((t) => t.date.startsWith(currentMonthPrefix));
  const monthSpend = monthTransactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const monthIncome = monthTransactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const netSavings = monthIncome - monthSpend;
  const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
  const daysRemaining = daysInMonth - now.getDate();

  return (
    <section id="quick-balance-section" className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
      {/* 1. Today's Spend Card */}
      <div
        id="card-today-spend"
        className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
          isLight
            ? 'bg-white border-primary-100/90 shadow-xs hover:shadow-sm'
            : 'bg-[#0a0a0a] border-[#111111]'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Today's Outflow
          </span>
          <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center">
            <ArrowDownRight className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
            {formatINR(todaySpend, currency)}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-primary-500" />
            <span>{todayTransactions.filter(t => t.type === 'expense').length} items logged today</span>
          </div>
        </div>
      </div>

      {/* 2. Month's Total Spend */}
      <div
        id="card-month-spend"
        className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
          isLight
            ? 'bg-white border-primary-100/90 shadow-xs hover:shadow-sm'
            : 'bg-[#0a0a0a] border-[#111111]'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Month Expenses
          </span>
          <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-500 flex items-center justify-center">
            <Wallet className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-rose-600 dark:text-rose-400">
            {formatINR(monthSpend, currency)}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-between">
            <span>Budget: {formatINR(monthlyBudget, currency)}</span>
            <span className={monthSpend > monthlyBudget ? 'text-rose-500 font-bold' : 'text-primary-600 font-bold'}>
              {monthSpend > monthlyBudget ? 'Over Limit' : 'Within Cap'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Net Savings / Cash Left */}
      <div
        id="card-month-savings"
        className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
          isLight
            ? 'bg-white border-primary-100/90 shadow-xs hover:shadow-sm'
            : 'bg-[#0a0a0a] border-[#111111]'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Net Month Cash Left
          </span>
          <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-600 flex items-center justify-center">
            <PiggyBank className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className={`text-xl sm:text-2xl font-bold tracking-tight ${netSavings >= 0 ? 'text-primary-600 dark:text-primary-400' : 'text-rose-500'}`}>
            {netSavings >= 0 ? '+' : ''}{formatINR(netSavings, currency)}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3 text-primary-500" />
            <span>Income: {formatINR(monthIncome, currency)}</span>
          </div>
        </div>
      </div>

      {/* 4. Leftover / Budget Balance */}
      <div
        id="card-remaining-budget"
        className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
          isLight
            ? 'bg-white border-primary-100/90 shadow-xs hover:shadow-sm'
            : 'bg-[#0a0a0a] border-[#111111]'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Budget Leftover
          </span>
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center">
            <Scale className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-teal-700' : 'text-teal-400'}`}>
            {formatINR(monthIncome - monthlyBudget, currency)}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-between">
            <span>{daysRemaining} days remaining</span>
            <button
              onClick={onOpenAddModal}
              className="text-primary-600 dark:text-primary-400 font-semibold hover:underline cursor-pointer"
            >
              + Quick Log
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- src/components/OverviewTab.tsx ---

interface OverviewTabProps {
  transactions: Transaction[];
  categories: BudgetCategory[];
  overallMonthlyBudget: number;
  monthlyIncome: number;
  currency: string;
  theme: 'light' | 'dark';
}

const OverviewTab: React.FC<OverviewTabProps> = ({
  transactions,
  categories,
  overallMonthlyBudget,
  monthlyIncome,
  currency,
  theme,
}) => {
  const isLight = theme === 'light';

  const now = new Date();
  const currentMonthPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

  const thisMonthTransactions = transactions.filter((t) => t.date.startsWith(currentMonthPrefix));
  
  const categorySpendMap: { [catName: string]: number } = {};
  thisMonthTransactions
    .filter((t) => t.type === 'expense')
    .forEach((t) => {
      categorySpendMap[t.category] = (categorySpendMap[t.category] || 0) + t.amount;
    });

  const totalSpent = thisMonthTransactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const actualIncome = thisMonthTransactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0) || monthlyIncome;

  const needsCategories = categories.filter((c) => c.groupType === 'Needs');
  const wantsCategories = categories.filter((c) => c.groupType === 'Wants');

  const needsBudget = needsCategories.reduce((acc, c) => acc + (c.monthlyBudget || 0), 0);
  const wantsBudget = wantsCategories.reduce((acc, c) => acc + (c.monthlyBudget || 0), 0);
  const totalBudget = needsBudget + wantsBudget;

  const cashLeft = actualIncome - totalSpent;
  const leftover = actualIncome - totalBudget;

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-primary-600 dark:text-primary-400">
          Financial Overview
        </h2>
        <p className="text-xs sm:text-sm mt-1 opacity-70">
          High-level snapshot of your monthly inflows, outflows, and leftover cash.
        </p>
      </div>

      <section
        id="excel-kpi-blocks"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
      >
        <div
          className={`p-4 rounded-xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100 shadow-xs hover:border-primary-300'
              : 'bg-[#0a0a0a] border-[#222222]/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>INCOME</span>
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              ₹
            </span>
          </div>
          <div className={`text-xl sm:text-2xl font-extrabold tracking-tight ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
            {formatINR(actualIncome, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            Net Monthly Inflow
          </span>
        </div>

        <div
          className={`p-4 rounded-xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100 shadow-xs hover:border-primary-300'
              : 'bg-[#0a0a0a] border-[#222222]/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>TOTAL BUDGET</span>
            <Scale className="w-4 h-4 text-primary-600" />
          </div>
          <div className={`text-xl sm:text-2xl font-extrabold tracking-tight ${isLight ? 'text-primary-700' : 'text-primary-400'}`}>
            {formatINR(totalBudget, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            Needs ({formatINR(needsBudget, currency)}) + Wants
          </span>
        </div>

        <div
          className={`p-4 rounded-xl border transition-all ${
            isLight
              ? 'bg-white border-rose-100 shadow-xs hover:border-rose-300'
              : 'bg-[#0a0a0a] border-[#222222]/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>TOTAL SPENT</span>
            <ArrowDownRight className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-rose-600 dark:text-rose-400">
            {formatINR(totalSpent, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            {((totalSpent / actualIncome) * 100).toFixed(1)}% of income
          </span>
        </div>

        <div
          className={`p-4 rounded-xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100 shadow-xs hover:border-primary-300'
              : 'bg-[#0a0a0a] border-[#222222]/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>CASH LEFT</span>
            <Wallet className="w-4 h-4 text-primary-600" />
          </div>
          <div className={`text-xl sm:text-2xl font-extrabold tracking-tight ${cashLeft >= 0 ? 'text-primary-600 dark:text-primary-400' : 'text-rose-500'}`}>
            {formatINR(cashLeft, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            Income − Total Spent
          </span>
        </div>

        <div
          className={`p-4 rounded-xl border col-span-2 sm:col-span-1 transition-all ${
            isLight
              ? 'bg-primary-50/50 border-primary-200 shadow-xs'
              : 'bg-[#111111] border-primary-900/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-primary-800' : 'text-primary-300'}>LEFTOVER</span>
            <Coins className="w-4 h-4 text-primary-500" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary-600 dark:text-primary-400">
            {formatINR(leftover, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            Income − Total Budget
          </span>
        </div>
      </section>

      {/* High-Level Trends & Analytics */}
      <AnalyticsTab 
        transactions={transactions}
        categories={categories}
        currency={currency}
        theme={theme}
      />
    </div>
  );
};


// --- src/components/MonthlyBudgetingTab.tsx ---

interface MonthlyBudgetingTabProps {
  transactions: Transaction[];
  categories: BudgetCategory[];
  overallMonthlyBudget: number;
  monthlyIncome: number;
  currency: string;
  theme: 'light' | 'dark';
  onOpenAddModal: () => void;
  onUpdateCategoryBudget: (categoryId: string, newBudget: number) => void;
  onSwitchTab: (tabId: string) => void;
  onDeleteTransaction: (id: string) => void;
}

const MonthlyBudgetingTab: React.FC<MonthlyBudgetingTabProps> = ({
  transactions,
  categories,
  overallMonthlyBudget,
  monthlyIncome,
  currency,
  theme,
  onOpenAddModal,
  onUpdateCategoryBudget,
  onSwitchTab,
  onDeleteTransaction,
}) => {
  const isLight = theme === 'light';
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [tempBudget, setTempBudget] = useState<string>('');
  const [filterType, setFilterType] = useState<'All' | BudgetGroup>('All');

  const now = new Date();
  const currentMonthPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const reportMonthName = now.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  // Calculate actual spends this month
  const thisMonthTransactions = transactions.filter((t) => t.date.startsWith(currentMonthPrefix));
  
  // Spend per category
  const categorySpendMap: { [catName: string]: number } = {};
  thisMonthTransactions
    .filter((t) => t.type === 'expense')
    .forEach((t) => {
      categorySpendMap[t.category] = (categorySpendMap[t.category] || 0) + t.amount;
    });

  // Calculate total spent
  const totalSpent = thisMonthTransactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  // Calculate actual income this month
  const actualIncome = thisMonthTransactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0) || monthlyIncome;

  // Calculate category budgets
  const needsCategories = categories.filter((c) => c.groupType === 'Needs');
  const wantsCategories = categories.filter((c) => c.groupType === 'Wants');
  const savingsCategories = categories.filter((c) => c.groupType === 'Savings');

  const needsBudget = needsCategories.reduce((acc, c) => acc + (c.monthlyBudget || 0), 0);
  const wantsBudget = wantsCategories.reduce((acc, c) => acc + (c.monthlyBudget || 0), 0);
  const savingsBudget = savingsCategories.reduce((acc, c) => acc + (c.monthlyBudget || 0), 0);

  const totalBudget = needsBudget + wantsBudget; // Total Budget (N+W)

  // Group actual spends
  const needsSpent = needsCategories.reduce((acc, c) => acc + (categorySpendMap[c.name] || 0), 0);
  const wantsSpent = wantsCategories.reduce((acc, c) => acc + (categorySpendMap[c.name] || 0), 0);
  const savingsSpent = savingsCategories.reduce((acc, c) => acc + (categorySpendMap[c.name] || 0), 0);

  // Exact Excel Calculations:
  // CASH LEFT = INCOME - TOTAL SPENT
  const cashLeft = actualIncome - totalSpent;
  // LEFTOVER = INCOME - TOTAL BUDGET
  const leftover = actualIncome - totalBudget;

  // 50/30/20 Ideal targets:
  // Needs Ideal: 60% or 50% (Excel sheet had 60% = ₹35,100 of ₹58,500)
  const needsIdeal = Math.round(actualIncome * 0.6);
  const wantsIdeal = Math.round(actualIncome * 0.2);
  const savingsIdeal = Math.round(actualIncome * 0.2);

  const needsSpentPercent = actualIncome > 0 ? (needsSpent / actualIncome) * 100 : 0;
  const wantsSpentPercent = actualIncome > 0 ? (wantsSpent / actualIncome) * 100 : 0;
  const savingsSpentPercent = actualIncome > 0 ? (savingsSpent / actualIncome) * 100 : 0;

  const totalRemaining = totalBudget - totalSpent;

  const handleSaveBudget = (catId: string) => {
    const val = parseFloat(tempBudget);
    if (!isNaN(val) && val >= 0) {
      onUpdateCategoryBudget(catId, val);
    }
    setEditingCategory(null);
  };

  const filteredCategories = categories.filter((cat) => {
    if (filterType === 'All') return true;
    return cat.groupType === filterType;
  });

  return (
    <div id="monthly-budget-dashboard" className="space-y-6 animate-in fade-in duration-300">
      {/* Top Header Title & Month indicator from Excel */}
      <div
        className={`p-5 sm:p-6 rounded-2xl border transition-all ${
          isLight
            ? 'bg-primary-50 border-primary-200 text-slate-900 shadow-sm'
            : 'bg-[#0a0a0a] text-primary-100 border-[#222222]'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-300 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase opacity-90">
                Personal Budget System
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              MONTHLY BUDGET DASHBOARD
            </h2>
            <p className="text-xs sm:text-sm text-primary-800 dark:text-primary-100/80 mt-0.5">
              Report Month: <span className="font-bold text-primary-700">{reportMonthName}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAddModal}
              className="px-4 py-2 bg-white text-primary-800 hover:bg-primary-50 text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Plus className="w-4 h-4 text-primary-600" />
              Log Transaction
            </button>
          </div>
        </div>
      </div>

      {/* Primary KPI Metrics: The 5 Blocks From the Excel Sheet */}
      <section
        id="excel-kpi-blocks"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
      >
        {/* 1. INCOME */}
        <div
          className={`p-4 rounded-xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100 shadow-xs hover:border-primary-300'
              : 'bg-[#0a0a0a] border-[#222222]/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-slate-500' : 'text-slate-500 dark:text-slate-400'}>INCOME</span>
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              ₹
            </span>
          </div>
          <div className={`text-xl sm:text-2xl font-extrabold tracking-tight ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
            {formatINR(actualIncome, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            Net Monthly Inflow
          </span>
        </div>

        {/* 2. TOTAL BUDGET (N+W) */}
        <div
          className={`p-4 rounded-xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100 shadow-xs hover:border-primary-300'
              : 'bg-[#0a0a0a] border-[#222222]/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-slate-500' : 'text-slate-500 dark:text-slate-400'}>TOTAL BUDGET (N+W)</span>
            <Scale className="w-4 h-4 text-primary-600" />
          </div>
          <div className={`text-xl sm:text-2xl font-extrabold tracking-tight ${isLight ? 'text-primary-700' : 'text-primary-400'}`}>
            {formatINR(totalBudget, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            Needs ({formatINR(needsBudget, currency)}) + Wants ({formatINR(wantsBudget, currency)})
          </span>
        </div>

        {/* 3. TOTAL SPENT */}
        <div
          className={`p-4 rounded-xl border transition-all ${
            isLight
              ? 'bg-white border-rose-100 shadow-xs hover:border-rose-300'
              : 'bg-[#0a0a0a] border-[#222222]/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-slate-500' : 'text-slate-500 dark:text-slate-400'}>TOTAL SPENT</span>
            <ArrowDownRight className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-rose-600 dark:text-rose-400">
            {formatINR(totalSpent, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            {((totalSpent / actualIncome) * 100).toFixed(1)}% of total income
          </span>
        </div>

        {/* 4. CASH LEFT */}
        <div
          className={`p-4 rounded-xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100 shadow-xs hover:border-primary-300'
              : 'bg-[#0a0a0a] border-[#222222]/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-slate-500' : 'text-slate-500 dark:text-slate-400'}>CASH LEFT</span>
            <Wallet className="w-4 h-4 text-primary-600" />
          </div>
          <div className={`text-xl sm:text-2xl font-extrabold tracking-tight ${cashLeft >= 0 ? 'text-primary-600 dark:text-primary-400' : 'text-rose-500'}`}>
            {formatINR(cashLeft, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            Income − Total Spent
          </span>
        </div>

        {/* 5. LEFTOVER */}
        <div
          className={`p-4 rounded-xl border col-span-2 sm:col-span-1 transition-all ${
            isLight
              ? 'bg-primary-50/50 border-primary-200 shadow-xs'
              : 'bg-[#111111] border-primary-900/60'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className={isLight ? 'text-primary-800' : 'text-primary-300'}>LEFTOVER</span>
            <Coins className="w-4 h-4 text-primary-500" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary-600 dark:text-primary-400">
            {formatINR(leftover, currency)}
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            Income − Total Budget
          </span>
        </div>
      </section>

      {/* 50 / 30 / 20 BREAKDOWN TABLE (Directly from Excel) */}
      <section
        id="breakdown-50-30-20"
        className={`rounded-2xl border p-5 sm:p-6 transition-all ${
          isLight
            ? 'bg-white border-primary-100/80 shadow-xs'
            : 'bg-black border-[#222222]/50'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <PieChart className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              50 / 30 / 20 BREAKDOWN
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Target budgeting model dividing monthly earnings into Needs, Savings, and Wants
            </p>
          </div>
          <button
            onClick={() => onSwitchTab('overview')}
            className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            Detailed Analytics <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Breakdown Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr
                className={`border-b text-xs font-semibold uppercase tracking-wider ${
                  isLight
                    ? 'border-slate-200 text-slate-500 bg-slate-50/80'
                    : 'border-[#111111] text-slate-500 dark:text-slate-400 bg-[#111111]'
                }`}
              >
                <th className="py-2.5 px-3 rounded-l-lg">Group</th>
                <th className="py-2.5 px-3">Ideal (₹)</th>
                <th className="py-2.5 px-3">Allocated (₹)</th>
                <th className="py-2.5 px-3">Allocated %</th>
                <th className="py-2.5 px-3">Spent (₹)</th>
                <th className="py-2.5 px-3 rounded-r-lg">% of Income Spent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-[#222222]/60 font-medium">
              {/* BASIC NEEDS */}
              <tr className={isLight ? 'hover:bg-slate-50/60' : 'hover:bg-[#111111]'}>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                    <span className="font-bold text-slate-900 dark:text-slate-100">BASIC NEEDS</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-semibold">
                  {formatINR(needsIdeal, currency)}
                </td>
                <td className="py-3 px-3 text-slate-900 dark:text-slate-100 font-bold">
                  {formatINR(needsBudget, currency)}
                </td>
                <td className="py-3 px-3 text-slate-500 font-semibold">
                  {actualIncome > 0 ? ((needsBudget / actualIncome) * 100).toFixed(1) : '0.0'}%
                </td>
                <td className="py-3 px-3 text-rose-600 dark:text-rose-400 font-bold">
                  {formatINR(needsSpent, currency)}
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-sky-500 rounded-full"
                        style={{ width: `${Math.min(100, needsSpentPercent)}%` }}
                      />
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {needsSpentPercent.toFixed(1)}%
                    </span>
                  </div>
                </td>
              </tr>

              {/* SAVINGS & INVESTMENT */}
              <tr className={isLight ? 'hover:bg-slate-50/60' : 'hover:bg-[#111111]'}>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                    <span className="font-bold text-slate-900 dark:text-slate-100">SAVINGS & INVESTMENT</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-semibold">
                  {formatINR(savingsIdeal, currency)}
                </td>
                <td className="py-3 px-3 text-slate-900 dark:text-slate-100 font-bold">
                  {formatINR(savingsBudget, currency)}
                </td>
                <td className="py-3 px-3 text-slate-500 font-semibold">
                  {actualIncome > 0 ? ((savingsBudget / actualIncome) * 100).toFixed(1) : '0.0'}%
                </td>
                <td className="py-3 px-3 text-primary-600 dark:text-primary-400 font-bold">
                  {formatINR(savingsSpent, currency)}
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-primary-500 rounded-full"
                        style={{ width: `${Math.min(100, savingsSpentPercent)}%` }}
                      />
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {savingsSpentPercent.toFixed(1)}%
                    </span>
                  </div>
                </td>
              </tr>

              {/* WANTS & DESIRE */}
              <tr className={isLight ? 'hover:bg-slate-50/60' : 'hover:bg-[#111111]'}>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                    <span className="font-bold text-slate-900 dark:text-slate-100">WANTS & DESIRE</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-semibold">
                  {formatINR(wantsIdeal, currency)}
                </td>
                <td className="py-3 px-3 text-slate-900 dark:text-slate-100 font-bold">
                  {formatINR(wantsBudget, currency)}
                </td>
                <td className="py-3 px-3 text-slate-500 font-semibold">
                  {actualIncome > 0 ? ((wantsBudget / actualIncome) * 100).toFixed(1) : '0.0'}%
                </td>
                <td className="py-3 px-3 text-primary-600 dark:text-primary-400 font-bold">
                  {formatINR(wantsSpent, currency)}
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-primary-500 rounded-full"
                        style={{ width: `${Math.min(100, wantsSpentPercent)}%` }}
                      />
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {wantsSpentPercent.toFixed(1)}%
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CATEGORY BUDGET vs ACTUAL (Directly from Excel Table) */}
      <section
        id="category-budget-vs-actual"
        className={`rounded-2xl border p-5 sm:p-6 transition-all ${
          isLight
            ? 'bg-white border-primary-100/80 shadow-xs'
            : 'bg-black border-[#222222]/50'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Scale className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              CATEGORY BUDGET vs ACTUAL
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Detailed tracking of allocations, actual expense drawdowns, and net variance
            </p>
          </div>

          {/* Group Filter Chips */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            {(['All', 'Needs', 'Wants', 'Savings'] as const).map((grp) => (
              <button
                key={grp}
                onClick={() => setFilterType(grp)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterType === grp
                    ? 'bg-primary-600 text-white shadow-xs'
                    : isLight
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    : 'bg-[#111111] text-slate-500 dark:text-slate-400 hover:text-slate-200'
                }`}
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        {/* Category Budget Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr
                className={`border-b text-xs font-semibold uppercase tracking-wider ${
                  isLight
                    ? 'border-slate-200 text-slate-500 bg-slate-50/80'
                    : 'border-[#111111] text-slate-500 dark:text-slate-400 bg-[#111111]'
                }`}
              >
                <th className="py-2.5 px-3 rounded-l-lg">Category</th>
                <th className="py-2.5 px-3">Type</th>
                <th className="py-2.5 px-3 text-right">Budget (₹)</th>
                <th className="py-2.5 px-3 text-right">Actual (₹)</th>
                <th className="py-2.5 px-3 text-right rounded-r-lg">Remaining (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-[#222222]/60">
              {filteredCategories.map((cat) => {
                const actual = categorySpendMap[cat.name] || 0;
                const remaining = cat.monthlyBudget - actual;
                const isOver = remaining < 0;

                return (
                  <tr
                    key={cat.id}
                    className={`transition-colors ${
                      isLight ? 'hover:bg-slate-50/70' : 'hover:bg-[#111111]'
                    }`}
                  >
                    {/* Category Name & Color */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span onClick={() => { setEditingCategory(cat.id); setTempBudget(cat.monthlyBudget.toString()); }} className="font-semibold text-slate-900 dark:text-slate-100 cursor-pointer hover:text-primary-600 transition-colors">
                          {cat.name}
                        </span>
                      </div>
                    </td>

                    {/* Type Badge */}
                    <td className="py-3 px-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold ${
                          cat.groupType === 'Needs'
                            ? isLight
                              ? 'bg-sky-50 text-sky-700 border border-sky-200'
                              : 'bg-sky-950/50 text-sky-300 border border-sky-800/40'
                            : cat.groupType === 'Wants'
                            ? isLight
                              ? 'bg-primary-50 text-primary-700 border border-primary-200'
                              : 'bg-primary-950/50 text-primary-300 border border-primary-800/40'
                            : isLight
                            ? 'bg-primary-50 text-primary-700 border border-primary-200'
                            : 'bg-[#0a0a0a]/50 text-primary-300 border border-primary-800/40'
                        }`}
                      >
                        {cat.groupType}
                      </span>
                    </td>

                    {/* Budget (₹) with edit capability */}
                    <td className="py-3 px-3 text-right">
                      {editingCategory === cat.id ? (
                        <div className="inline-flex items-center gap-1">
                          <input
                            type="number"
                            className={`w-20 rounded px-1.5 py-0.5 text-xs font-mono text-right border ${
                              isLight
                                ? 'bg-white border-primary-500 text-slate-900'
                                : 'bg-slate-900 border-primary-500 text-slate-100'
                            }`}
                            value={tempBudget}
                            onChange={(e) => setTempBudget(e.target.value)}
                            autoFocus
                          />
                          <button
                            onClick={() => handleSaveBudget(cat.id)}
                            className="px-1.5 py-0.5 bg-primary-600 text-white rounded text-[11px]"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => setEditingCategory(null)}
                            className="px-1 text-slate-500 dark:text-slate-400 text-[11px]"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 group justify-end">
                          <span onClick={() => { setEditingCategory(cat.id); setTempBudget(cat.monthlyBudget.toString()); }} className="font-semibold text-slate-900 dark:text-slate-100 cursor-pointer hover:text-primary-600 transition-colors">
                            {formatINR(cat.monthlyBudget, currency)}
                          </span>
                          <button
                            onClick={() => {
                              setEditingCategory(cat.id);
                              setTempBudget(cat.monthlyBudget.toString());
                            }}
                            className="opacity-50 hover:opacity-100 p-0.5 text-slate-500 dark:text-slate-400 hover:text-primary-600 transition-opacity cursor-pointer"
                            title="Edit allocation"
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </td>

                    {/* Actual (₹) */}
                    <td className="py-3 px-3 text-right font-bold text-slate-900 dark:text-slate-100">
                      {formatINR(actual, currency)}
                    </td>

                    {/* Remaining (₹) */}
                    <td className="py-3 px-3 text-right font-bold">
                      <span
                        className={
                          remaining < 0
                            ? 'text-rose-600 dark:text-rose-400'
                            : remaining > 0
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-slate-500 dark:text-slate-400'
                        }
                      >
                        {formatINR(remaining, currency)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* Table TOTAL Row matching the Excel sheet */}
            <tfoot>
              <tr
                className={`border-t-2 font-extrabold text-xs sm:text-sm ${
                  isLight
                    ? 'border-primary-200 bg-primary-50/50 text-slate-900'
                    : 'border-primary-800 bg-[#111111] text-slate-100'
                }`}
              >
                <td className="py-3.5 px-3" colSpan={2}>
                  TOTAL
                </td>
                <td className="py-3.5 px-3 text-right text-primary-700 dark:text-primary-300">
                  {formatINR(totalBudget, currency)}
                </td>
                <td className="py-3.5 px-3 text-right text-rose-600 dark:text-rose-400">
                  {formatINR(totalSpent, currency)}
                </td>
                <td
                  className={`py-3.5 px-3 text-right ${
                    totalRemaining < 0 ? 'text-rose-600 dark:text-rose-400' : 'text-primary-600 dark:text-primary-400'
                  }`}
                >
                  {formatINR(totalRemaining, currency)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Recent Activity Mini-Feed */}
      <section
        className={`rounded-2xl border p-5 sm:p-6 transition-all ${
          isLight
            ? 'bg-white border-primary-100/80 shadow-xs'
            : 'bg-black border-[#222222]/50'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary-600" />
            Recent Activity in {reportMonthName}
          </h3>
          <button
            onClick={() => onSwitchTab('daily')}
            className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            Full Ledger ({transactions.length}) <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {thisMonthTransactions.slice(0, 6).map((tx) => (
            <div
              key={tx.id}
              className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                isLight
                  ? 'bg-slate-50/80 border-slate-200/80 hover:border-primary-200'
                  : 'bg-[#0a0a0a] border-[#111111] hover:border-primary-800/60'
              }`}
            >
              <div className="min-w-0 pr-2">
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                  {tx.notes || tx.category}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <span>{tx.category}</span>
                  <span>•</span>
                  <span>{formatDateDDMMYYYY(tx.date)}</span>
                </div>
              </div>
              <div
                className={`text-sm font-extrabold shrink-0 ${
                  tx.type === 'income' ? 'text-primary-600 dark:text-primary-400' : 'text-slate-900 dark:text-slate-100'
                }`}
              >
                {tx.type === 'income' ? '+' : '-'}{formatINR(tx.amount, currency)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


// --- src/components/AnalyticsTab.tsx ---

// Register Chart.js components

interface AnalyticsTabProps {
  transactions: Transaction[];
  categories: BudgetCategory[];
  currency: string;
  theme: 'light' | 'dark';
}

const AnalyticsTab: React.FC<AnalyticsTabProps> = ({
  transactions,
  categories,
  currency,
  theme,
}) => {
  const isLight = theme === 'light';
  const donutCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const trendCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const rule503020CanvasRef = useRef<HTMLCanvasElement | null>(null);

  const donutChartInstanceRef = useRef<ChartJS | null>(null);
  const trendChartInstanceRef = useRef<ChartJS | null>(null);
  const rule503020ChartInstanceRef = useRef<ChartJS | null>(null);

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentMonthStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;

  // Transactions this month
  const thisMonthExpenses = transactions.filter(
    (t) => t.type === 'expense' && t.date.startsWith(currentMonthStr)
  );
  const thisMonthIncome = transactions.filter(
    (t) => t.type === 'income' && t.date.startsWith(currentMonthStr)
  );

  const totalSpent = thisMonthExpenses.reduce((acc, t) => acc + t.amount, 0);
  const totalIncome = thisMonthIncome.reduce((acc, t) => acc + t.amount, 0) || 58500;

  // Group spends
  const needsSpent = thisMonthExpenses
    .filter((t) => {
      const cat = categories.find((c) => c.name === t.category);
      return (t.groupType || cat?.groupType) === 'Needs';
    })
    .reduce((acc, t) => acc + t.amount, 0);

  const wantsSpent = thisMonthExpenses
    .filter((t) => {
      const cat = categories.find((c) => c.name === t.category);
      return (t.groupType || cat?.groupType) === 'Wants';
    })
    .reduce((acc, t) => acc + t.amount, 0);

  const savingsSpent = thisMonthExpenses
    .filter((t) => {
      const cat = categories.find((c) => c.name === t.category);
      return (t.groupType || cat?.groupType) === 'Savings';
    })
    .reduce((acc, t) => acc + t.amount, 0);

  // Spend by Category
  const categorySpendMap: { [cat: string]: number } = {};
  thisMonthExpenses.forEach((t) => {
    categorySpendMap[t.category] = (categorySpendMap[t.category] || 0) + t.amount;
  });

  const sortedCategories = Object.entries(categorySpendMap)
    .sort((a, b) => b[1] - a[1]);

  // 1. Initialize 50/30/20 Donut Chart
  useEffect(() => {
    if (!rule503020CanvasRef.current) return;
    if (rule503020ChartInstanceRef.current) {
      rule503020ChartInstanceRef.current.destroy();
    }
    const existingChart = ChartJS.getChart(rule503020CanvasRef.current);
    if (existingChart) existingChart.destroy();

    const ctx = rule503020CanvasRef.current.getContext('2d');
    if (!ctx) return;

    const dataValues = [needsSpent, wantsSpent, savingsSpent];
    // If all zero, default placeholder
    const chartValues = dataValues.some(v => v > 0) ? dataValues : [1, 1, 1];

    rule503020ChartInstanceRef.current = new ChartJS(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Basic Needs', 'Wants & Desires', 'Savings & Investments'],
        datasets: [
          {
            data: chartValues,
            backgroundColor: ['#0284c7', '#f59e0b', '#10b981'],
            borderColor: isLight ? '#ffffff' : '#0f1f18',
            borderWidth: 3,
            hoverOffset: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const val = context.raw as number;
                const percent = totalIncome > 0 ? ((val / totalIncome) * 100).toFixed(1) : '0';
                return ` ${context.label}: ${formatINR(val, currency)} (${percent}% of income)`;
              },
            },
          },
        },
      },
    });

    return () => {
      rule503020ChartInstanceRef.current?.destroy();
    };
  }, [needsSpent, wantsSpent, savingsSpent, totalIncome, isLight, currency]);

  // 2. Initialize Category Donut Chart
  useEffect(() => {
    if (!donutCanvasRef.current) return;
    if (donutChartInstanceRef.current) {
      donutChartInstanceRef.current.destroy();
    }
    const existingDonut = ChartJS.getChart(donutCanvasRef.current);
    if (existingDonut) existingDonut.destroy();

    const ctx = donutCanvasRef.current.getContext('2d');
    if (!ctx) return;

    const labels = sortedCategories.map((c) => c[0]);
    const dataValues = sortedCategories.map((c) => c[1]);
    const palette = [
      '#059669', '#10b981', '#14b8a6', '#0284c7', '#3b82f6',
      '#8b5cf6', '#ec4899', '#f97316', '#f59e0b', '#eab308', '#64748b'
    ];

    donutChartInstanceRef.current = new ChartJS(ctx, {
      type: 'doughnut',
      data: {
        labels: labels.length > 0 ? labels : ['No expenses'],
        datasets: [
          {
            data: dataValues.length > 0 ? dataValues : [1],
            backgroundColor: labels.length > 0 ? palette.slice(0, labels.length) : ['#334155'],
            borderColor: isLight ? '#ffffff' : '#0f1f18',
            borderWidth: 2,
            hoverOffset: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const val = context.raw as number;
                const percent = totalSpent > 0 ? ((val / totalSpent) * 100).toFixed(1) : '0';
                return ` ${context.label}: ${formatINR(val, currency)} (${percent}%)`;
              },
            },
          },
        },
      },
    });

    return () => {
      donutChartInstanceRef.current?.destroy();
    };
  }, [sortedCategories, totalSpent, isLight, currency]);

  // 3. Initialize 12-Month Expense vs Income Line Chart
  useEffect(() => {
    if (!trendCanvasRef.current) return;
    if (trendChartInstanceRef.current) {
      trendChartInstanceRef.current.destroy();
    }
    const existingTrend = ChartJS.getChart(trendCanvasRef.current);
    if (existingTrend) existingTrend.destroy();

    const ctx = trendCanvasRef.current.getContext('2d');
    if (!ctx) return;

    // Build last 12 months
    const monthLabels: string[] = [];
    const monthlyIncomeData: number[] = [];
    const monthlyExpenseData: number[] = [];

    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const mStr = String(d.getMonth() + 1).padStart(2, '0');
      const yStr = d.getFullYear();
      const prefix = `${yStr}-${mStr}`;

      const shortMonth = d.toLocaleString('en-US', { month: 'short' });
      monthLabels.push(`${shortMonth} ${yStr === currentYear ? '' : `'${String(yStr).slice(2)}`}`.trim());

      const exp = transactions
        .filter((t) => t.type === 'expense' && t.date.startsWith(prefix))
        .reduce((sum, t) => sum + t.amount, 0);

      const inc = transactions
        .filter((t) => t.type === 'income' && t.date.startsWith(prefix))
        .reduce((sum, t) => sum + t.amount, 0);

      monthlyExpenseData.push(exp);
      monthlyIncomeData.push(inc > 0 ? inc : 58500);
    }

    const textColor = isLight ? '#475569' : '#94a3b8';
    const gridColor = isLight ? '#e2e8f0' : '#172f24';

    trendChartInstanceRef.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: monthLabels,
        datasets: [
          {
            label: 'Monthly Income (₹)',
            data: monthlyIncomeData,
            borderColor: '#10b981', // Mint primary
            backgroundColor: isLight ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.15)',
            borderWidth: 2.5,
            tension: 0.35,
            fill: true,
            pointBackgroundColor: '#10b981',
            pointRadius: 3,
            pointHoverRadius: 6,
          },
          {
            label: 'Monthly Expenses (₹)',
            data: monthlyExpenseData,
            borderColor: '#f43f5e', // Rose
            backgroundColor: isLight ? 'rgba(244, 63, 94, 0.05)' : 'rgba(244, 63, 94, 0.12)',
            borderWidth: 2,
            tension: 0.35,
            fill: true,
            pointBackgroundColor: '#f43f5e',
            pointRadius: 3,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: textColor,
              font: { size: 11 },
            },
          },
          y: {
            grid: {
              color: gridColor,
            },
            ticks: {
              color: textColor,
              font: { size: 11 },
              callback: (val) => `${currency}${(Number(val) / 1000).toFixed(0)}k`,
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: isLight ? '#0f172a' : '#f1f5f9',
              font: { size: 12, weight: 'bold' },
              usePointStyle: true,
              pointStyle: 'circle',
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.dataset.label}: ${formatINR(Number(context.raw), currency)}`,
            },
          },
        },
      },
    });

    return () => {
      trendChartInstanceRef.current?.destroy();
    };
  }, [transactions, isLight, currency]);

  return (
    <div id="analytics-tab-container" className="space-y-6 animate-in fade-in duration-300">
      {/* 50 / 30 / 20 Rule Analysis Section */}
      <section
        className={`p-5 sm:p-6 rounded-2xl border transition-all ${
          isLight
            ? 'bg-white border-primary-100/90 shadow-xs'
            : 'bg-black border-[#222222]/50'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Scale className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              50 / 30 / 20 Budget Health Evaluation
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Assesses whether your spending aligns with the golden rule of personal wealth
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-100 dark:bg-[#0a0a0a] text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-800 self-start sm:self-auto">
            Report Month: {now.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Donut graphic */}
          <div className="relative h-56 flex items-center justify-center">
            <canvas ref={rule503020CanvasRef} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Total Spent</span>
              <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                {formatINR(totalSpent, currency)}
              </span>
            </div>
          </div>

          {/* Detailed Group Breakdown Cards */}
          <div className="md:col-span-2 space-y-3.5">
            {/* Needs */}
            <div
              className={`p-3.5 rounded-xl border transition-all ${
                isLight ? 'bg-sky-50/50 border-sky-200/80' : 'bg-[#0a0a0a] border-sky-900/50'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="text-sky-700 dark:text-sky-300 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  BASIC NEEDS (Target: 50% - 60%)
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-extrabold">
                  {formatINR(needsSpent, currency)} ({((needsSpent / totalIncome) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-sky-500 rounded-full"
                  style={{ width: `${Math.min(100, (needsSpent / totalIncome) * 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                <span>Groceries, Education, EMI, Health, Utilities</span>
                <span className={needsSpent > totalIncome * 0.6 ? 'text-primary-600 font-bold' : 'text-primary-600 font-bold'}>
                  {needsSpent > totalIncome * 0.6 ? 'Elevated Needs Drawdown' : 'Within Target Range'}
                </span>
              </div>
            </div>

            {/* Wants */}
            <div
              className={`p-3.5 rounded-xl border transition-all ${
                isLight ? 'bg-primary-50/50 border-primary-200/80' : 'bg-[#111111] border-primary-900/50'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="text-primary-700 dark:text-primary-300 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                  WANTS & DESIRES (Target: 20% - 30%)
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-extrabold">
                  {formatINR(wantsSpent, currency)} ({((wantsSpent / totalIncome) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${Math.min(100, (wantsSpent / totalIncome) * 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                <span>Dining, Entertainment, Lifestyle, Festivals</span>
                <span className="text-primary-600 font-bold">
                  Extremely Disciplined (5.4% spent)
                </span>
              </div>
            </div>

            {/* Savings */}
            <div
              className={`p-3.5 rounded-xl border transition-all ${
                isLight ? 'bg-primary-50/50 border-primary-200/80' : 'bg-[#111111] border-[#222222]/50'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="text-primary-700 dark:text-primary-300 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                  SAVINGS & INVESTMENTS (Target: 20%)
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-extrabold">
                  {formatINR(savingsSpent, currency)} ({((savingsSpent / totalIncome) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${Math.min(100, (savingsSpent / totalIncome) * 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                <span>Liquid Reserves, Mutual Funds, Fixed Deposits</span>
                <span className="text-slate-500 dark:text-slate-400">
                  Remaining Net Cash: {formatINR(totalIncome - totalSpent, currency)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12-Month Expense vs Income Trend Line Chart */}
      <section
        className={`p-5 sm:p-6 rounded-2xl border transition-all ${
          isLight
            ? 'bg-white border-primary-100/90 shadow-xs'
            : 'bg-black border-[#222222]/50'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary-600" />
              12-Month Cashflow Trajectory (Income vs Expenses)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Longitudinal tracking of monthly earnings and burn curves in Indian Rupee (₹)
            </p>
          </div>
        </div>
        <div className="h-72 sm:h-80 w-full">
          <canvas ref={trendCanvasRef} />
        </div>
      </section>

      {/* Category Breakdown & Top Spenders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Donut Chart */}
        <section
          className={`p-5 sm:p-6 rounded-2xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100/90 shadow-xs'
              : 'bg-black border-[#222222]/50'
          }`}
        >
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
            <PieChart className="w-4 h-4 text-primary-600" />
            Category Share
          </h3>
          <div className="relative h-60 flex items-center justify-center">
            <canvas ref={donutCanvasRef} />
          </div>
        </section>

        {/* Top Expenses Ranking */}
        <section
          className={`lg:col-span-2 p-5 sm:p-6 rounded-2xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100/90 shadow-xs'
              : 'bg-black border-[#222222]/50'
          }`}
        >
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
            <BarChart3 className="w-4 h-4 text-primary-600" />
            Highest Category Outflows
          </h3>
          <div className="space-y-3">
            {sortedCategories.slice(0, 6).map(([catName, amt], idx) => {
              const catObj = categories.find((c) => c.name === catName);
              const percent = totalSpent > 0 ? (amt / totalSpent) * 100 : 0;

              return (
                <div key={catName} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-primary-100 dark:bg-[#0a0a0a] text-primary-700 dark:text-primary-300 flex items-center justify-center text-[10px] font-bold">
                        #{idx + 1}
                      </span>
                      {catName}
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
                        ({catObj?.groupType || 'Needs'})
                      </span>
                    </span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {formatINR(amt, currency)} <span className="text-slate-500 dark:text-slate-400 text-[11px]">({percent.toFixed(1)}%)</span>
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-primary-600 rounded-full"
                      style={{ width: `${Math.min(100, percent)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};


// --- src/components/DailyEntryTab.tsx ---

interface DailyEntryTabProps {
  transactions: Transaction[];
  categories: BudgetCategory[];
  currency: string;
  theme: 'light' | 'dark';
  onOpenAddModal: () => void;
  onDeleteTransaction: (id: string) => void;
}

const DailyEntryTab: React.FC<DailyEntryTabProps> = ({
  transactions,
  categories,
  currency,
  theme,
  onOpenAddModal,
  onDeleteTransaction,
}) => {
  const isLight = theme === 'light';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | TransactionType>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGroup, setSelectedGroup] = useState<'all' | BudgetGroup>('all');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<string>('all');

  const now = new Date();
  const currentMonthValue = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonthValue);

  const currentYearMonths = useMemo(() => {
    const months = [];
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 12; i++) {
      const d = new Date(currentYear, i, 1);
      const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      const label = d.toLocaleString('en-US', { month: 'short', year: 'numeric' });
      months.push({ value, label });
    }
    return months;
  }, []);

  const [sortField, setSortField] = useState<'date' | 'amount'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);
  const pageSize = 15;

  // Filter logic
  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      // Type
      if (selectedType !== 'all' && tx.type !== selectedType) return false;

      // Group
      if (selectedGroup !== 'all') {
        const cat = categories.find((c) => c.name === tx.category);
        const group = tx.groupType || cat?.groupType;
        if (group !== selectedGroup) return false;
      }

      // Category
      if (selectedCategory !== 'all' && tx.category !== selectedCategory) return false;

      // Payment Mode
      if (selectedPaymentMode !== 'all' && tx.paymentMode !== selectedPaymentMode) return false;

      // Month
      if (selectedMonth !== 'all' && !tx.date.startsWith(selectedMonth)) return false;

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchNotes = (tx.notes || '').toLowerCase().includes(query);
        const matchCat = tx.category.toLowerCase().includes(query);
        const matchMode = tx.paymentMode.toLowerCase().includes(query);
        const matchDate = tx.date.includes(query);
        if (!matchNotes && !matchCat && !matchMode && !matchDate) return false;
      }

      return true;
    });
  }, [transactions, selectedType, selectedGroup, selectedCategory, selectedPaymentMode, selectedMonth, searchQuery, categories]);

  // Sort logic
  const sortedTransactions = useMemo(() => {
    return [...filteredTransactions].sort((a, b) => {
      if (sortField === 'date') {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
      } else {
        return sortOrder === 'desc' ? b.amount - a.amount : a.amount - b.amount;
      }
    });
  }, [filteredTransactions, sortField, sortOrder]);

  const totalPages = Math.ceil(sortedTransactions.length / pageSize) || 1;
  const paginatedTransactions = sortedTransactions.slice((page - 1) * pageSize, page * pageSize);

  const totalFilteredIncome = filteredTransactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalFilteredExpense = filteredTransactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const handleExport = () => {
    exportTransactionsToCSV(filteredTransactions);
  };

  return (
    <div id="transaction-ledger-container" className="space-y-6 animate-in fade-in duration-300">
      {/* Search and Filters Bar */}
      <div
        className={`p-4 sm:p-5 rounded-2xl border transition-all ${
          isLight
            ? 'bg-white border-primary-100/90 shadow-xs'
            : 'bg-black border-[#222222]/50'
        }`}
      >
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by notes, merchant, category, or date..."
              className={`w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm border transition-colors ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 dark:text-slate-400 focus:bg-white focus:border-primary-500'
                  : 'bg-slate-900 border-[#111111] text-slate-100 placeholder:text-slate-500 focus:border-primary-500'
              }`}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              id="btn-export-csv"
              onClick={handleExport}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors cursor-pointer ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  : 'bg-[#0a0a0a] hover:bg-[#1a1a1a] border-[#222222] text-slate-300'
              }`}
              title="Download CSV report of current filtered results"
            >
              <Download className="w-3.5 h-3.5 text-primary-600" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onOpenAddModal}
              className="px-3.5 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Entry</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mt-3.5 pt-3.5 border-t border-slate-100 dark:border-[#111111]/60 text-xs">
          {/* Month Filter */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Month</label>
            <select
              className={`w-full px-2.5 py-1.5 rounded-lg border text-xs ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900 border-[#222222] text-slate-200'
              }`}
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">All Time</option>
              {currentYearMonths.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Type</label>
            <select
              className={`w-full px-2.5 py-1.5 rounded-lg border text-xs ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900 border-[#222222] text-slate-200'
              }`}
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value as any);
                setPage(1);
              }}
            >
              <option value="all">All Types</option>
              <option value="expense">Expenses Only</option>
              <option value="income">Inflow / Income Only</option>
            </select>
          </div>

          {/* Group Filter (Needs / Wants / Savings) */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Group</label>
            <select
              className={`w-full px-2.5 py-1.5 rounded-lg border text-xs ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900 border-[#222222] text-slate-200'
              }`}
              value={selectedGroup}
              onChange={(e) => {
                setSelectedGroup(e.target.value as any);
                setPage(1);
              }}
            >
              <option value="all">All Groups</option>
              <option value="Needs">Basic Needs (50-60%)</option>
              <option value="Wants">Wants & Desires (20%)</option>
              <option value="Savings">Savings & Investments (20%)</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Category</label>
            <select
              className={`w-full px-2.5 py-1.5 rounded-lg border text-xs ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900 border-[#222222] text-slate-200'
              }`}
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} ({c.groupType})
                </option>
              ))}
            </select>
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Payment Mode</label>
            <select
              className={`w-full px-2.5 py-1.5 rounded-lg border text-xs ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900 border-[#222222] text-slate-200'
              }`}
              value={selectedPaymentMode}
              onChange={(e) => {
                setSelectedPaymentMode(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">All Modes</option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank">Bank</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Stats for Current Filter */}
      <div className="flex items-center justify-between text-xs px-1 text-slate-500 dark:text-slate-400">
        <div>
          Found <span className="font-bold text-slate-900 dark:text-slate-100">{filteredTransactions.length}</span> entries
        </div>
        <div className="flex items-center gap-4">
          <span>
            Total Outflow: <span className="font-bold text-rose-600 dark:text-rose-400">{formatINR(totalFilteredExpense, currency)}</span>
          </span>
          <span>
            Total Inflow: <span className="font-bold text-primary-600 dark:text-primary-400">{formatINR(totalFilteredIncome, currency)}</span>
          </span>
        </div>
      </div>

      {/* Transactions Table */}
      <div
        className={`rounded-2xl border overflow-hidden transition-all ${
          isLight
            ? 'bg-white border-primary-100/90 shadow-xs'
            : 'bg-black border-[#222222]/50'
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr
                className={`border-b text-xs font-semibold uppercase tracking-wider ${
                  isLight
                    ? 'border-slate-200 text-slate-500 bg-slate-50/80'
                    : 'border-[#111111] text-slate-500 dark:text-slate-400 bg-[#111111]'
                }`}
              >
                <th
                  onClick={() => {
                    if (sortField === 'date') {
                      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                    } else {
                      setSortField('date');
                      setSortOrder('desc');
                    }
                  }}
                  className="py-3 px-4 cursor-pointer hover:text-primary-600"
                >
                  <div className="flex items-center gap-1">
                    <span>Date</span>
                    {sortField === 'date' && (
                      <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="py-3 px-4">Subcategory</th>
                <th className="py-3 px-4">Category & Group</th>
                <th className="py-3 px-4">Notes / Merchant</th>
                <th className="py-3 px-4">Mode</th>
                <th
                  onClick={() => {
                    if (sortField === 'amount') {
                      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                    } else {
                      setSortField('amount');
                      setSortOrder('desc');
                    }
                  }}
                  className="py-3 px-4 text-right cursor-pointer hover:text-primary-600"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Amount (₹)</span>
                    {sortField === 'amount' && (
                      <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-[#222222]/60">
              {paginatedTransactions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-500 dark:text-slate-400 text-xs">
                    No transactions match your current filters.
                  </td>
                </tr>
              ) : (
                paginatedTransactions.map((tx) => {
                  const catObj = categories.find((c) => c.name === tx.category);
                  const group = tx.groupType || catObj?.groupType || 'Needs';
                  const isExpense = tx.type === 'expense';

                  return (
                    <tr
                      key={tx.id}
                      className={`transition-colors ${
                        isLight ? 'hover:bg-slate-50/70' : 'hover:bg-[#111111]'
                      }`}
                    >
                      {/* Date */}
                      <td className="py-3 px-4 font-mono text-xs text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {formatDateDDMMYYYY(tx.date)}
                      </td>
                      {/* Subcategory */}
                      <td className="py-3 px-4 text-xs font-medium text-slate-800 dark:text-slate-200">
                        {tx.subCategory || '—'}
                      </td>
                      {/* Category & Group Badge */}
                      {/* Category & Group Badge */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: catObj?.color || '#10b981' }}
                          />
                          <span className="font-semibold text-slate-900 dark:text-slate-100">
                            {tx.category}
                          </span>
                          <span
                            className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                              group === 'Needs'
                                ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
                                : group === 'Wants'
                                ? 'bg-primary-100 text-primary-800 dark:bg-primary-950 dark:text-primary-300'
                                : 'bg-primary-100 text-primary-800 dark:bg-[#0a0a0a] dark:text-primary-300'
                            }`}
                          >
                            {group}
                          </span>
                        </div>
                      </td>

                      {/* Notes / Merchant */}
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300 text-xs">
                        {tx.notes || '—'}
                      </td>

                      {/* Payment Mode */}
                      <td className="py-3 px-4 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                          {tx.paymentMode}
                        </span>
                      </td>

                      {/* Amount */}
                      <td
                        className={`py-3 px-4 text-right font-extrabold whitespace-nowrap ${
                          isExpense ? 'text-slate-900 dark:text-slate-100' : 'text-primary-600 dark:text-primary-400'
                        }`}
                      >
                        {isExpense ? '-' : '+'}{formatINR(tx.amount, currency)}
                      </td>

                      {/* Delete */}
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => onDeleteTransaction(tx.id)}
                          className="p-1 text-slate-500 dark:text-slate-400 hover:text-rose-500 transition-colors"
                          title="Delete transaction"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div
            className={`p-3 border-t flex items-center justify-between text-xs ${
              isLight ? 'border-slate-200 bg-slate-50/60' : 'border-[#111111] bg-[#111111]'
            }`}
          >
            <span className="text-slate-500">
              Page {page} of {totalPages}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-2.5 py-1 rounded border disabled:opacity-40 cursor-pointer"
              >
                Previous
              </button>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-2.5 py-1 rounded border disabled:opacity-40 cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};


// --- src/components/YearlyReviewTab.tsx ---


interface YearlyReviewTabProps {
  transactions: Transaction[];
  categories: BudgetCategory[];
  subscriptions: Subscription[];
  goals: FinancialGoal[];
  currency: string;
  theme: 'light' | 'dark';
  onUpdateSubscription: (sub: Subscription) => void;
  onDeleteSubscription: (id: string) => void;
  onAddSubscription: (sub: Omit<Subscription, 'id'>) => void;
  onUpdateGoal: (goal: FinancialGoal) => void;
  onDeleteGoal: (id: string) => void;
  onAddGoal: (goal: Omit<FinancialGoal, 'id'>) => void;
}

const YearlyReviewTab: React.FC<YearlyReviewTabProps> = ({
  transactions,
  categories,
  subscriptions,
  goals,
  currency,
  theme,
  onUpdateSubscription,
  onDeleteSubscription,
  onAddSubscription,
  onUpdateGoal,
  onDeleteGoal,
  onAddGoal,
}) => {
  const isLight = theme === 'light';

  // Modal states
  const [isAddSubModalOpen, setIsAddSubModalOpen] = useState(false);
  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState(false);
  const [isGoalCalculatorOpen, setIsGoalCalculatorOpen] = useState(false);
  const [expandedHistoryId, setExpandedHistoryId] = useState<string | null>(null);
  const [contributeGoalId, setContributeGoalId] = useState<string | null>(null);
  const [contributeAmount, setContributeAmount] = useState<string>('1000');

  // New Sub form state
  const [subName, setSubName] = useState('');
  const [subAmount, setSubAmount] = useState('');
  const [subCycle, setSubCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [subCategory, setSubCategory] = useState('Entertainment');
  const [subDate, setSubDate] = useState(new Date().toISOString().slice(0, 10));

  // New Goal form state
  const [goalTitle, setGoalTitle] = useState('');
  const [goalTarget, setGoalTarget] = useState('');
  const [goalCurrent, setGoalCurrent] = useState('0');
  const [goalDate, setGoalDate] = useState('2026-12-31');
  const [goalCategory, setGoalCategory] = useState('Savings & Investments');
  const [goalNotes, setGoalNotes] = useState('');

  // -------------------------------------------------------------
  // CALCULATIONS: Annual Budget & Savings Tracker (from Mockup)
  // -------------------------------------------------------------
  const now = new Date();
  const currentYear = now.getFullYear();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const totalMonthlyBudget = categories
    .filter(c => c.groupType !== 'Income' && c.groupType !== 'Savings')
    .reduce((acc, cat) => acc + cat.monthlyBudget, 0);

  const savingPlanBudget = categories
    .filter(c => c.groupType === 'Savings')
    .reduce((acc, cat) => acc + cat.monthlyBudget, 0);

  const yearlyStats = months.map((monthName, index) => {
    const monthIndex = index + 1;
    const monthPrefix = `${currentYear}-${String(monthIndex).padStart(2, '0')}`;
    const txsInMonth = transactions.filter(t => t.date.startsWith(monthPrefix));
    
    const income = txsInMonth.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const spent = txsInMonth.filter(t => t.type === 'expense' && t.groupType !== 'Savings').reduce((acc, t) => acc + t.amount, 0);
    const actualSaving = txsInMonth.filter(t => t.type === 'expense' && t.groupType === 'Savings').reduce((acc, t) => acc + t.amount, 0);
    
    const hasData = income > 0 || spent > 0 || actualSaving > 0;
    
    const budget = hasData ? totalMonthlyBudget : 0; 
    const budgetSaving = hasData ? savingPlanBudget : 0;
    
    const overspent = hasData ? Math.max(0, spent - budget) : 0;
    const leftOver = hasData ? Math.max(0, income - spent - actualSaving) : 0;
    const budgetUsed = (hasData && budget > 0) ? (spent / budget) * 100 : 0;
    const savingRate = (hasData && income > 0) ? (actualSaving / income) * 100 : 0;
    
    let status = 'No data';
    if (hasData) {
       if (spent > income && income > 0) status = 'Budget > Income';
       else if (spent > budget) status = 'Over Budget';
       else status = 'Watch';
    }
    
    return { monthName, hasData, income, budget, spent, budgetSaving, actualSaving, overspent, leftOver, budgetUsed, savingRate, status };
  });

  const totalAnnualIncome = yearlyStats.reduce((acc, m) => acc + m.income, 0);
  const totalAnnualBudget = yearlyStats.reduce((acc, m) => acc + m.budget, 0);
  const totalAnnualSpent = yearlyStats.reduce((acc, m) => acc + m.spent, 0);
  const totalAnnualSavingPlan = yearlyStats.reduce((acc, m) => acc + m.budgetSaving, 0);
  const totalAnnualActualSaving = yearlyStats.reduce((acc, m) => acc + m.actualSaving, 0);
  const totalAnnualOverspent = yearlyStats.reduce((acc, m) => acc + m.overspent, 0);
  const totalAnnualLeftOver = yearlyStats.reduce((acc, m) => acc + m.leftOver, 0);

  // Existing Active Subscriptions calculation
  const activeSubs = subscriptions.filter((s) => s.active);
  const monthlySubCost = activeSubs.reduce((acc, sub) => {
    return acc + (sub.billingCycle === 'monthly' ? sub.amount : sub.amount / 12);
  }, 0);

  const handleContribute = (goal: FinancialGoal) => {
    const amt = parseFloat(contributeAmount);
    if (isNaN(amt) || amt <= 0) return;
    const newCurrent = goal.currentAmount + amt;
    const isNowCompleted = newCurrent >= goal.targetAmount;

    if (isNowCompleted && !goal.isCompleted) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399', '#f59e0b'],
      });
    }

    const newContribution = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      amount: amt
    };

    onUpdateGoal({
      ...goal,
      currentAmount: newCurrent,
      isCompleted: isNowCompleted,
      contributions: [...(goal.contributions || []), newContribution]
    });
    setContributeGoalId(null);
    setContributeAmount('1000');
    // Open history automatically to show the user their save
    setExpandedHistoryId(goal.id);
  };

  const handleCreateSub = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(subAmount);
    if (!subName.trim() || isNaN(amt) || amt <= 0) return;

    onAddSubscription({
      name: subName.trim(),
      amount: amt,
      billingCycle: subCycle,
      category: subCategory,
      nextBillingDate: subDate,
      active: true,
    });

    setSubName('');
    setSubAmount('');
    setIsAddSubModalOpen(false);
  };

  const handleCreateGoal = (e: React.FormEvent) => {
    e.preventDefault();
    const target = parseFloat(goalTarget);
    const curr = parseFloat(goalCurrent) || 0;
    if (!goalTitle.trim() || isNaN(target) || target <= 0) return;

    const initialContributions = curr > 0 ? [{
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      amount: curr
    }] : [];

    onAddGoal({
      title: goalTitle.trim(),
      targetAmount: target,
      currentAmount: curr,
      targetDate: goalDate,
      category: goalCategory,
      notes: goalNotes.trim(),
      isCompleted: curr >= target,
      contributions: initialContributions,
    });

    setGoalTitle('');
    setGoalTarget('');
    setGoalCurrent('0');
    setGoalNotes('');
    setIsAddGoalModalOpen(false);
  };

  return (
    <div id="yearly-planning-container" className="space-y-6 animate-in fade-in duration-300">
      
      {/* -------------------------------------------------------------
          ANNUAL BUDGET & SAVINGS TRACKER (User Requested Table)
          ------------------------------------------------------------- */}
      <section className={`overflow-hidden rounded-2xl border transition-all ${isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-[#0a0a0a] border-[#222222]'}`}>
        <div className={`px-4 py-3 border-b flex items-center gap-2 ${isLight ? 'bg-primary-700 text-white' : 'bg-primary-950 text-primary-100 border-[#222222]'}`}>
          <TableIcon className="w-5 h-5" />
          <h2 className="text-lg font-bold tracking-tight uppercase">ANNUAL BUDGET & SAVINGS TRACKER — {currentYear}</h2>
        </div>
        
        {/* Annual Summary Header Row */}
        <div className={`grid grid-cols-2 md:grid-cols-7 gap-2 p-4 border-b ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#111111] border-[#222222]'}`}>
          <div className="text-center">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Annual Income</div>
            <div className="text-sm font-bold text-primary-600 dark:text-primary-400">{formatINR(totalAnnualIncome, currency)}</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Budget (N+W)</div>
            <div className="text-sm font-bold text-primary-600 dark:text-primary-400">{formatINR(totalAnnualBudget, currency)}</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Actual Spent</div>
            <div className="text-sm font-bold text-primary-600 dark:text-primary-400">{formatINR(totalAnnualSpent, currency)}</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Saving Plan</div>
            <div className="text-sm font-bold text-primary-600 dark:text-primary-400">{formatINR(totalAnnualSavingPlan, currency)}</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Actual Saving</div>
            <div className="text-sm font-bold text-primary-600 dark:text-primary-400">{formatINR(totalAnnualActualSaving, currency)}</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Overspent</div>
            <div className="text-sm font-bold text-primary-600 dark:text-primary-400">{formatINR(totalAnnualOverspent, currency)}</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Left Over</div>
            <div className="text-sm font-bold text-primary-600 dark:text-primary-400">{formatINR(totalAnnualLeftOver, currency)}</div>
          </div>
        </div>

        {/* Month-by-Month Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className={`${isLight ? 'bg-primary-700 text-white' : 'bg-primary-950 text-primary-100'} font-bold`}>
              <tr>
                <th className="py-2 px-3">Month</th>
                <th className="py-2 px-3 text-right">Income</th>
                <th className="py-2 px-3 text-right">Budget (N+W)</th>
                <th className="py-2 px-3 text-right">Actual Spent</th>
                <th className="py-2 px-3 text-right">Budget Saving</th>
                <th className="py-2 px-3 text-right">Actual Saving</th>
                <th className="py-2 px-3 text-right">Overspent</th>
                <th className="py-2 px-3 text-right">Left Over</th>
                <th className="py-2 px-3 text-right">Budget Used</th>
                <th className="py-2 px-3 text-right">Saving Rate</th>
                <th className="py-2 px-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {yearlyStats.map((stat) => (
                <tr key={stat.monthName} className={`border-b ${isLight ? 'border-slate-100 hover:bg-slate-50' : 'border-[#222222] hover:bg-[#111111]'}`}>
                  <td className="py-2 px-3 font-bold text-slate-800 dark:text-slate-200">{stat.monthName}</td>
                  {stat.hasData ? (
                    <>
                      <td className="py-2 px-3 text-right text-slate-700 dark:text-slate-300">{formatINR(stat.income, currency)}</td>
                      <td className={`py-2 px-3 text-right ${stat.overspent > 0 ? 'text-rose-600 dark:text-rose-400 font-semibold' : 'text-slate-700 dark:text-slate-300'}`}>
                        {formatINR(stat.budget, currency)}
                      </td>
                      <td className="py-2 px-3 text-right text-slate-700 dark:text-slate-300">{formatINR(stat.spent, currency)}</td>
                      <td className="py-2 px-3 text-right text-slate-700 dark:text-slate-300">{formatINR(stat.budgetSaving, currency)}</td>
                      <td className="py-2 px-3 text-right text-slate-700 dark:text-slate-300">{formatINR(stat.actualSaving, currency)}</td>
                      <td className={`py-2 px-3 text-right ${stat.overspent > 0 ? 'text-rose-600 dark:text-rose-400 font-bold bg-rose-50/50 dark:bg-rose-950/20' : 'text-slate-700 dark:text-slate-300'}`}>
                        {formatINR(stat.overspent, currency)}
                      </td>
                      <td className="py-2 px-3 text-right text-slate-700 dark:text-slate-300">{formatINR(stat.leftOver, currency)}</td>
                      <td className={`py-2 px-3 text-right ${stat.budgetUsed > 100 ? 'bg-blue-100/50 dark:bg-blue-900/20' : ''}`}>
                        {stat.budgetUsed.toFixed(1)}%
                      </td>
                      <td className="py-2 px-3 text-right text-slate-700 dark:text-slate-300">{stat.savingRate.toFixed(1)}%</td>
                      <td className="py-1 px-3 text-center">
                        {stat.status === 'Over Budget' || stat.status === 'Budget > Income' ? (
                           <span className="inline-block px-2 py-0.5 bg-rose-600 text-white rounded text-[10px] font-bold shadow-xs">
                             {stat.status}
                           </span>
                        ) : (
                           <span className="inline-block text-amber-600 dark:text-amber-500 font-bold">
                             {stat.status}
                           </span>
                        )}
                      </td>
                    </>
                  ) : (
                    <td colSpan={10} className="py-2 px-3 text-right text-slate-400 dark:text-slate-500 italic">
                      No data
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Two Column: Recurring Commitments & Financial Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recurring Commitments & Subscriptions */}
        <section
          className={`p-5 sm:p-6 rounded-2xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100/90 shadow-xs'
              : 'bg-black border-[#222222]/50'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Repeat className="w-4 h-4 text-primary-600" />
                Active Recurring Subscriptions
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Monthly commitment: {formatINR(monthlySubCost, currency)}
              </p>
            </div>
            <button
              onClick={() => setIsAddSubModalOpen(true)}
              className="px-3 py-1.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add
            </button>
          </div>

          <div className="space-y-3">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isLight
                    ? 'bg-slate-50/80 border-slate-200/80 hover:border-primary-200'
                    : 'bg-[#0a0a0a] border-[#111111] hover:border-primary-800/60'
                } ${!sub.active ? 'opacity-50' : ''}`}
              >
                <div className="min-w-0 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                      {sub.name}
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 capitalize">
                      {sub.billingCycle}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Next debit: {formatDateDDMMYYYY(sub.nextBillingDate)}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-extrabold text-slate-900 dark:text-slate-100">
                    {formatINR(sub.amount, currency)}
                  </span>
                  <button
                    onClick={() => onDeleteSubscription(sub.id)}
                    className="p-1 text-slate-500 dark:text-slate-400 hover:text-rose-500 transition-colors"
                    title="Delete Subscription"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Milestones & Goals */}
        <section
          className={`p-5 sm:p-6 rounded-2xl border transition-all ${
            isLight
              ? 'bg-white border-primary-100/90 shadow-xs'
              : 'bg-black border-[#222222]/50'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-primary-600" />
                Target Savings Milestones
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Track long-term capital preservation and milestones
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsGoalCalculatorOpen(true)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                Calculator
              </button>
              <button
                onClick={() => setIsAddGoalModalOpen(true)}
                className="px-3 py-1.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                New Goal
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {goals.map((goal) => {
              const percent = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
              const isDone = goal.isCompleted || goal.currentAmount >= goal.targetAmount;

              return (
                <div
                  key={goal.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isLight
                      ? 'bg-slate-50/80 border-slate-200/80'
                      : 'bg-[#0a0a0a] border-[#111111]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                          {goal.title}
                        </span>
                        {isDone && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary-100 text-primary-800 dark:bg-[#0a0a0a] dark:text-primary-300">
                            Achieved 🎉
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                        Target Date: {formatDateDDMMYYYY(goal.targetDate)}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-extrabold text-slate-900 dark:text-slate-100">
                        {formatINR(goal.currentAmount, currency)}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                        of {formatINR(goal.targetAmount, currency)}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-2">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isDone ? 'bg-primary-500' : 'bg-primary-600'
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      {percent}% funded
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setExpandedHistoryId(expandedHistoryId === goal.id ? null : goal.id)}
                        className="text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <History className="w-3 h-3" />
                        History
                      </button>
                      <button
                        onClick={() => {
                          setContributeGoalId(goal.id);
                          setContributeAmount('1000');
                          setExpandedHistoryId(null);
                        }}
                        className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline cursor-pointer flex items-center gap-1"
                      >
                        + Add Funds
                      </button>
                      <button
                        onClick={() => onDeleteGoal(goal.id)}
                        className="text-slate-400 dark:text-slate-500 hover:text-rose-500 p-0.5 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Contribution mini-box */}
                  {contributeGoalId === goal.id && (
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">{currency}</span>
                        <input
                          type="number"
                          className={`w-24 px-2 py-1 text-xs rounded border ${
                            isLight
                              ? 'bg-white border-slate-300 text-slate-900'
                              : 'bg-slate-900 border-slate-700 text-slate-100'
                          }`}
                          value={contributeAmount}
                          onChange={(e) => setContributeAmount(e.target.value)}
                        />
                      </div>

                      <div className="flex items-center gap-1">
                        {[500, 1000, 2000, 5000].map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setContributeAmount(preset.toString())}
                            className={`px-2 py-0.5 text-[10px] font-semibold rounded border cursor-pointer ${
                              isLight
                                ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-primary-50 hover:border-primary-300'
                                : 'bg-[#111111] border-[#222222] text-slate-300 hover:bg-[#111111]/40'
                            }`}
                          >
                            +{preset}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => handleContribute(goal)}
                        className="px-3 py-1 bg-primary-600 text-white rounded text-xs font-bold cursor-pointer"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setContributeGoalId(null)}
                        className="px-2 py-1 text-slate-500 dark:text-slate-400 text-xs cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                  
                  {expandedHistoryId === goal.id && (
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-[#222222] space-y-2 animate-in slide-in-from-top-2 duration-200">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Contribution Log
                      </div>
                      {(!goal.contributions || goal.contributions.length === 0) ? (
                        <div className="text-xs text-slate-400 italic py-2">
                          No contributions logged yet. Add funds to start tracking history!
                        </div>
                      ) : (
                        <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                          {[...goal.contributions].reverse().map((contribution) => (
                            <div key={contribution.id} className="flex justify-between items-center text-xs py-1">
                              <span className="text-slate-500 dark:text-slate-400 font-medium">
                                {new Date(contribution.date).toLocaleDateString(undefined, {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                                +{formatINR(contribution.amount, currency)}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Add Subscription Modal */}
      {isAddSubModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className={`w-full max-w-md p-6 rounded-2xl border shadow-xl ${isLight ? 'bg-white border-slate-200' : 'bg-[#0a0a0a] border-[#222222]'}`}>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
              Add Recurring Subscription
            </h3>
            <form onSubmit={handleCreateSub} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Service Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Netflix, Spotify, JioFiber"
                  className={`w-full px-3 py-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'}`}
                  value={subName}
                  onChange={(e) => setSubName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Amount ({currency})</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 649"
                    className={`w-full px-3 py-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'}`}
                    value={subAmount}
                    onChange={(e) => setSubAmount(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Cycle</label>
                  <select
                    className={`w-full px-3 py-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'}`}
                    value={subCycle}
                    onChange={(e) => setSubCycle(e.target.value as 'monthly' | 'yearly')}
                  >
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Next Debit Date</label>
                <input
                  type="date"
                  required
                  className={`w-full px-3 py-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'}`}
                  value={subDate}
                  onChange={(e) => setSubDate(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddSubModalOpen(false)}
                  className="px-4 py-2 text-slate-500 hover:text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl"
                >
                  Add Subscription
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <GoalCalculatorModal
        isOpen={isGoalCalculatorOpen}
        onClose={() => setIsGoalCalculatorOpen(false)}
        currency={currency}
        theme={theme}
      />

      {/* Add Goal Modal */}
      {isAddGoalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className={`w-full max-w-md p-6 rounded-2xl border shadow-xl ${isLight ? 'bg-white border-slate-200' : 'bg-[#0a0a0a] border-[#222222]'}`}>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
              Add Financial Goal
            </h3>
            <form onSubmit={handleCreateGoal} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Goal Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Emergency Fund, Diwali Savings, Tech Upgrade"
                  className={`w-full px-3 py-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'}`}
                  value={goalTitle}
                  onChange={(e) => setGoalTitle(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Target Amount ({currency})</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 100000"
                    className={`w-full px-3 py-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'}`}
                    value={goalTarget}
                    onChange={(e) => setGoalTarget(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Current Saved ({currency})</label>
                  <input
                    type="number"
                    placeholder="e.g. 25000"
                    className={`w-full px-3 py-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'}`}
                    value={goalCurrent}
                    onChange={(e) => setGoalCurrent(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Target Date</label>
                <input
                  type="date"
                  required
                  className={`w-full px-3 py-2 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'}`}
                  value={goalDate}
                  onChange={(e) => setGoalDate(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddGoalModalOpen(false)}
                  className="px-4 py-2 text-slate-500 hover:text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl"
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


// --- src/components/LoginScreen.tsx ---

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isResetting, setIsResetting] = useState(false);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto-map special username to the email specified by user
  const resolveEmail = (input: string) => {
    if (input.trim() === 'Sjhaacm') {
      return 'subhash.kunvar30@gmail.com';
    }
    return input.trim();
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMsg('');

    const email = resolveEmail(usernameOrEmail);

    try {
      // Set persistence based on "Remember Me" checkbox
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      
      // First try logging in
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (err: any) {
      // If user doesn't exist, create it (auto-provisioning for specific user setup)
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          onLogin();
        } catch (createErr: any) {
          setError('Invalid credentials or account could not be created.');
        }
      } else {
        setError(err.message || 'Authentication failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!usernameOrEmail) {
      setError('Please enter your User ID or email first.');
      return;
    }
    setLoading(true);
    setError('');
    setMsg('');

    const email = resolveEmail(usernameOrEmail);

    try {
      await sendPasswordResetEmail(auth, email);
      setMsg(`Password reset link sent to ${email}`);
      setIsResetting(false);
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8faf9] dark:bg-[#000000] p-4 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-[#0a0a0a] p-8 rounded-3xl shadow-xl border border-primary-100 dark:border-[#222222] animate-in fade-in zoom-in-95 duration-500">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/30 mb-4">
            <Wallet className="w-8 h-8" />
          </div>
          <div className="flex justify-center"><Logo className="text-3xl" /></div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-primary-500" />
            Secure Authentication
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {error && (
            <div className="p-3 text-xs font-semibold bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl border border-rose-200 dark:border-rose-900/50">
              {error}
            </div>
          )}
          {msg && (
            <div className="p-3 text-xs font-semibold bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 rounded-xl border border-primary-200 dark:border-primary-900/50">
              {msg}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">User ID</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-[#222222] focus:bg-white dark:focus:bg-black focus:border-primary-500 outline-none transition-colors text-sm font-medium"
                placeholder="User ID"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
              />
            </div>
          </div>

          {!isResetting && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-[#222222] focus:bg-white dark:focus:bg-black focus:border-primary-500 outline-none transition-colors text-sm font-medium"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center pt-1">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-primary-600 border-slate-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-slate-900 dark:border-slate-700 dark:bg-slate-800"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
                  Remember me
                </label>
              </div>
            </>
          )}

          <div className="pt-2">
            {!isResetting ? (
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-white font-bold rounded-xl shadow-md shadow-primary-600/20 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {loading ? 'Authenticating...' : 'Sign In'}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleResetPassword}
                disabled={loading}
                className="w-full py-3 bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-white font-bold rounded-xl shadow-md shadow-primary-600/20 transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Reset Link to Gmail'}
              </button>
            )}
          </div>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => {
                setIsResetting(!isResetting);
                setError('');
                setMsg('');
              }}
              className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
            >
              {isResetting ? 'Back to Login' : 'Forgot Password?'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// --- src/components/AddTransactionDrawer.tsx ---

interface AddTransactionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: BudgetCategory[];
  subCategories: SubCategory[];
  currency: string;
  theme: 'light' | 'dark';
  onAddTransaction: (transaction: Omit<Transaction, 'id'>) => void;
}

const AddTransactionDrawer: React.FC<AddTransactionDrawerProps> = ({
  isOpen,
  onClose,
  categories,
  subCategories,
  currency,
  theme,
  onAddTransaction,
}) => {
  const isLight = theme === 'light';

  const [type, setType] = useState<TransactionType>('expense');
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>(categories[0]?.name || 'Food & Groceries');
  const [subCategory, setSubCategory] = useState<string>('');
  const [paymentMode, setPaymentMode] = useState<PaymentMode>('Bank');
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return;

    const matchedCat = categories.find((c) => c.name === category);

    onAddTransaction({
      amount: numAmount,
      type,
      category,
      subCategory: subCategory || undefined,
      groupType: matchedCat?.groupType || 'Needs',
      paymentMode,
      date,
      notes: notes.trim(),
    });

    // Reset and close
    setAmount('');
    setNotes('');
    setSubCategory('');
    onClose();
  };

  const handleAddQuickAmount = (val: number) => {
    const current = parseFloat(amount) || 0;
    setAmount((current + val).toString());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className={`w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl border p-5 sm:p-6 shadow-2xl transition-all max-h-[92vh] overflow-y-auto ${
          isLight
            ? 'bg-white border-primary-100 text-slate-900'
            : 'bg-black border-[#222222]/60 text-slate-100'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-[#111111]">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold flex items-center gap-2">
              <Plus className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              Log Financial Entry
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Quickly record your expense or income inflow in Indian Rupee ({currency})
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {/* Income vs Expense Toggle */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setType('expense')}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                type === 'expense'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Expense Outflow
            </button>
            <button
              type="button"
              onClick={() => setType('income')}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                type === 'income'
                  ? 'bg-primary-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Income / Inflow
            </button>
          </div>

          {/* Amount Input with Currency Symbol */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              Amount ({currency})
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg font-bold text-primary-600 dark:text-primary-400">
                {currency}
              </span>
              <input
                type="number"
                step="any"
                required
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                autoFocus
                className={`w-full pl-10 pr-4 py-2.5 text-xl font-mono font-bold rounded-xl border transition-all ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-primary-500'
                    : 'bg-slate-900 border-slate-800 text-slate-100 focus:border-primary-500'
                }`}
              />
            </div>

            {/* Quick Amount Chips */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {quickAmounts.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleAddQuickAmount(q)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-primary-50 hover:border-primary-300'
                      : 'bg-[#111111] border-[#222222]/80 text-slate-300 hover:bg-[#111111]/40'
                  }`}
                >
                  +{currency}{q.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-40 overflow-y-auto p-1">
              {categories.map((cat) => {
                const isSelected = category === cat.name;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setCategory(cat.name);
                      setSubCategory(''); // Reset subcategory when category changes
                    }}
                    className={`p-2 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'border-primary-500 bg-primary-500/10 text-primary-700 dark:text-primary-300 ring-2 ring-primary-500/20'
                        : isLight
                        ? 'border-slate-200 bg-slate-50/60 hover:bg-slate-100 text-slate-800'
                        : 'border-[#111111] bg-[#0a0a0a] hover:bg-[#1a1a1a] text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span className="text-[10px] opacity-70 font-semibold">
                        {cat.groupType}
                      </span>
                    </div>
                    <span className="text-xs font-bold mt-1 truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subcategory Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 mt-4">
              Subcategory (Optional)
            </label>
            <select
              className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-900'
                  : 'bg-slate-900 border-slate-800 text-slate-100'
              }`}
              value={subCategory}
              onChange={(e) => {
                const val = e.target.value;
                setSubCategory(val);
                if (val) {
                  const match = subCategories.find(s => s.subCategory === val);
                  if (match) {
                    if (match.groupType === 'Income' || match.groupType === 'Savings') {
                       // Do nothing or handle income differently
                    } else {
                       setType('expense');
                    }
                  }
                }
              }}
            >
              <option value="">Select Subcategory...</option>
              {subCategories
                .filter(sub => sub.category === category)
                .map(sub => (
                <option key={sub.subCategory} value={sub.subCategory}>
                  {sub.subCategory}
                </option>
              ))}
            </select>
          </div>

          

          {/* Payment Mode & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                Payment Mode
              </label>
              <select
                className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-900'
                    : 'bg-slate-900 border-slate-800 text-slate-100'
                }`}
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value as PaymentMode)}
              >
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Bank">Bank</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                Date
              </label>
              <input
                type="date"
                required
                className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-900'
                    : 'bg-slate-900 border-slate-800 text-slate-100'
                }`}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          {/* Notes / Description */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              Notes / Payee / Merchant (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Swiggy order, School fees, Petrol, Electricity"
              className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-900'
                  : 'bg-slate-900 border-slate-800 text-slate-100'
              }`}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-primary-700/20 transition-all cursor-pointer"
            >
              Save Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// --- src/components/BudgetCalculatorModal.tsx ---

interface BudgetCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  subCategories: SubCategory[];
  currency: string;
  theme: 'light' | 'dark';
  onOpenManageCategories?: () => void;
}

const BudgetCalculatorModal: React.FC<BudgetCalculatorModalProps> = ({
  isOpen,
  onClose,
  subCategories,
  currency,
  theme,
  onOpenManageCategories,
}) => {
  const isLight = theme === 'light';
  const [budgets, setBudgets] = useState<Record<string, number>>({});

  if (!isOpen) return null;

  const handleBudgetChange = (subCategory: string, value: string) => {
    const num = parseFloat(value);
    setBudgets((prev) => ({
      ...prev,
      [subCategory]: isNaN(num) ? 0 : num,
    }));
  };

  const totalBudget = Object.values(budgets).reduce((acc: number, curr: number) => acc + curr, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-6xl max-h-[80vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-colors ${
          isLight ? 'bg-white' : 'bg-[#0a0a0a] border border-[#222222]'
        }`}
      >
        <div
          className={`flex items-center justify-between p-4 md:p-6 border-b ${
            isLight ? 'border-slate-100 bg-slate-50/50' : 'border-[#222222] bg-[#111111]/50'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-100">
                Budget Calculator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Plan and calculate your budget by subcategory
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#222222] text-slate-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-[#222222]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr
                  className={`border-b text-xs font-semibold uppercase tracking-wider ${
                    isLight
                      ? 'border-slate-200 text-slate-500 bg-slate-50'
                      : 'border-[#222222] text-slate-400 bg-[#111111]'
                  }`}
                >
                  <th className="py-3 px-4">Subcategory</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Budget Type</th>
                  <th className="py-3 px-4 text-right">Budget ({currency})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#222222]/60">
                {subCategories.map((sub, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      isLight ? 'hover:bg-slate-50/70' : 'hover:bg-[#111111]'
                    }`}
                  >
                    <td className="py-2.5 px-4 font-medium text-slate-800 dark:text-slate-200">
                      {sub.subCategory}
                    </td>
                    <td className="py-2.5 px-4 text-slate-600 dark:text-slate-400">
                      {sub.category}
                    </td>
                    <td className="py-2.5 px-4">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          sub.groupType === 'Needs'
                            ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
                            : sub.groupType === 'Wants'
                            ? 'bg-primary-100 text-primary-800 dark:bg-primary-950 dark:text-primary-300'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        }`}
                      >
                        {sub.groupType}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <input
                        type="number"
                        min="0"
                        step="any"
                        placeholder="0"
                        value={budgets[sub.subCategory] || ''}
                        onChange={(e) => handleBudgetChange(sub.subCategory, e.target.value)}
                        className={`w-32 px-3 py-1.5 text-right font-mono font-bold rounded-lg border focus:ring-2 focus:ring-primary-500 outline-none transition-colors ${
                          isLight
                            ? 'bg-white border-slate-200 text-slate-900'
                            : 'bg-[#1a1a1a] border-[#333333] text-slate-100'
                        }`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className={`p-4 md:p-6 border-t flex items-center justify-between ${
            isLight ? 'border-slate-100 bg-slate-50/50' : 'border-[#222222] bg-[#111111]/50'
          }`}
        >
          <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
            Total Calculated Budget
          </span>
          <span className="text-xl md:text-2xl font-extrabold text-primary-600 dark:text-primary-400 tracking-tight">
            {formatINR(totalBudget as number, currency)}
          </span>
        </div>
      </div>
    </div>
  );
};


// --- src/components/ManageCategoriesModal.tsx ---

interface ManageCategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: BudgetCategory[];
  subCategories: SubCategory[];
  theme: 'light' | 'dark';
  onUpdateCategories: (categories: BudgetCategory[]) => void;
  onUpdateSubCategories: (subCategories: SubCategory[]) => void;
}

const ManageCategoriesModal: React.FC<ManageCategoriesModalProps> = ({
  isOpen,
  onClose,
  categories,
  subCategories,
  theme,
  onUpdateCategories,
  onUpdateSubCategories,
}) => {
  const isLight = theme === 'light';
  
  const [activeTab, setActiveTab] = useState<'categories' | 'subcategories'>('categories');
  
  const [newCatName, setNewCatName] = useState('');
  const [newCatGroup, setNewCatGroup] = useState<'Needs' | 'Wants' | 'Savings'>('Needs');

  const [newSubCatName, setNewSubCatName] = useState('');
  const [newSubCatParent, setNewSubCatParent] = useState(categories[0]?.name || '');

  if (!isOpen) return null;

  const handleAddCategory = () => {
    if (!newCatName.trim()) return;
    const newCat: BudgetCategory = {
      id: `cat-${Date.now()}`,
      name: newCatName.trim(),
      groupType: newCatGroup,
      icon: 'Tag', // default
      color: '#10b981', // default
      monthlyBudget: 0,
    };
    onUpdateCategories([...categories, newCat]);
    setNewCatName('');
  };

  const handleDeleteCategory = (id: string) => {
    onUpdateCategories(categories.filter(c => c.id !== id));
  };

  const handleAddSubCategory = () => {
    if (!newSubCatName.trim() || !newSubCatParent) return;
    const parentCat = categories.find(c => c.name === newSubCatParent);
    const newSub: SubCategory = {
      id: `subcat-${Date.now()}`,
      subCategory: newSubCatName.trim(),
      category: newSubCatParent,
      groupType: parentCat?.groupType || 'Needs',
    };
    onUpdateSubCategories([...subCategories, newSub]);
    setNewSubCatName('');
  };

  const handleDeleteSubCategory = (id: string) => {
    onUpdateSubCategories(subCategories.filter(s => s.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-colors ${
          isLight ? 'bg-white' : 'bg-[#0a0a0a] border border-[#222222]'
        }`}
      >
        <div
          className={`flex items-center justify-between p-4 md:p-6 border-b ${
            isLight ? 'border-slate-100 bg-slate-50/50' : 'border-[#222222] bg-[#111111]/50'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#222222] flex items-center justify-center text-slate-600 dark:text-slate-400">
              <Settings2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-100">
                Manage Categories
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Add or remove categories and subcategories
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#222222] text-slate-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className={`flex border-b ${isLight ? 'border-slate-200' : 'border-[#222222]'}`}>
          <button
            onClick={() => setActiveTab('categories')}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              activeTab === 'categories'
                ? 'text-primary-600 border-b-2 border-primary-600 dark:text-primary-400 dark:border-primary-400'
                : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-[#1a1a1a]'
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab('subcategories')}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              activeTab === 'subcategories'
                ? 'text-primary-600 border-b-2 border-primary-600 dark:text-primary-400 dark:border-primary-400'
                : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-[#1a1a1a]'
            }`}
          >
            Subcategories
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {activeTab === 'categories' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="New Category Name"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-[#1a1a1a] border-[#333333] text-white'
                  }`}
                />
                <select
                  value={newCatGroup}
                  onChange={(e) => setNewCatGroup(e.target.value as any)}
                  className={`px-3 py-2 text-sm rounded-lg border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-[#1a1a1a] border-[#333333] text-white'
                  }`}
                >
                  <option value="Needs">Needs</option>
                  <option value="Wants">Wants</option>
                  <option value="Savings">Savings</option>
                </select>
                <button
                  onClick={handleAddCategory}
                  className="px-3 py-2 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat.id} className={`flex items-center justify-between p-3 rounded-lg border ${isLight ? 'border-slate-200 bg-slate-50' : 'border-[#333333] bg-[#1a1a1a]'}`}>
                    <div>
                      <div className="font-semibold text-sm text-slate-800 dark:text-slate-200">{cat.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{cat.groupType}</div>
                    </div>
                    <button onClick={() => handleDeleteCategory(cat.id)} className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'subcategories' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="New Subcategory Name"
                  value={newSubCatName}
                  onChange={(e) => setNewSubCatName(e.target.value)}
                  className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-[#1a1a1a] border-[#333333] text-white'
                  }`}
                />
                <select
                  value={newSubCatParent}
                  onChange={(e) => setNewSubCatParent(e.target.value)}
                  className={`px-3 py-2 text-sm rounded-lg border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-[#1a1a1a] border-[#333333] text-white'
                  }`}
                >
                  {categories.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
                <button
                  onClick={handleAddSubCategory}
                  className="px-3 py-2 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                {subCategories.map((sub) => (
                  <div key={sub.id} className={`flex items-center justify-between p-3 rounded-lg border ${isLight ? 'border-slate-200 bg-slate-50' : 'border-[#333333] bg-[#1a1a1a]'}`}>
                    <div>
                      <div className="font-semibold text-sm text-slate-800 dark:text-slate-200">{sub.subCategory}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Parent: {sub.category} ({sub.groupType})</div>
                    </div>
                    <button onClick={() => handleDeleteSubCategory(sub.id)} className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// --- src/components/SettingsModal.tsx ---

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: UserSettings;
  onSaveSettings: (newSettings: UserSettings) => void;
  currentAppData: FinanceAppData;
  onRestoreData: (restored: FinanceAppData) => void;
  onResetToDemo: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
  currentAppData,
  onRestoreData,
  onResetToDemo,
  theme,
  onToggleTheme,
}) => {
  const isLight = theme === 'light';

  const [provider, setProvider] = useState<SyncProvider>(settings.syncConfig.provider);
  const [url, setUrl] = useState(settings.syncConfig.url);
  const [apiKey, setApiKey] = useState(settings.syncConfig.apiKey);
  const [autoSync, setAutoSync] = useState(settings.syncConfig.autoSync);

  const [currency, setCurrency] = useState(settings.currency || '₹');
  const [overallMonthlyBudget, setOverallMonthlyBudget] = useState(settings.overallMonthlyBudget.toString());
  const [monthlyIncome, setMonthlyIncome] = useState((settings.monthlyIncome || 58500).toString());

  // Connection testing state
  const [testingStatus, setTestingStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');
  const [testFeedback, setTestFeedback] = useState<string>('');
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleTestConnection = async () => {
    setTestingStatus('testing');
    setTestFeedback('');

    const testConfig: SyncConfig = {
      provider,
      url,
      apiKey,
      autoSync,
      lastSyncedAt: settings.syncConfig.lastSyncedAt,
      syncStatus: 'syncing',
    };

    const res = await testSyncConnection(testConfig);
    if (res.success) {
      setTestingStatus('success');
      setTestFeedback(res.message);
    } else {
      setTestingStatus('failed');
      setTestFeedback(res.message);
    }
  };

  const handleManualPush = async () => {
    setIsSyncing(true);
    const updatedSettings: UserSettings = {
      ...settings,
      currency,
      overallMonthlyBudget: parseFloat(overallMonthlyBudget) || 37050,
      monthlyIncome: parseFloat(monthlyIncome) || 58500,
      theme,
      syncConfig: {
        provider,
        url,
        apiKey,
        autoSync,
        lastSyncedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        syncStatus: 'synced',
      },
    };

    const res = await pushDataToCloud({
      ...currentAppData,
      settings: updatedSettings,
    });

    setIsSyncing(false);
    if (res.success) {
      onSaveSettings(updatedSettings);
      setTestFeedback(res.message);
      setTestingStatus('success');
    } else {
      setTestFeedback(res.message);
      setTestingStatus('failed');
    }
  };

  const handleManualPull = async () => {
    setIsSyncing(true);
    const remoteData = await pullDataFromCloud({
      provider,
      url,
      apiKey,
      autoSync,
      lastSyncedAt: null,
      syncStatus: 'syncing',
    });
    setIsSyncing(false);

    if (remoteData) {
      onRestoreData(remoteData);
      setTestFeedback('Successfully pulled latest financial records from cloud!');
      setTestingStatus('success');
    } else {
      setTestFeedback('Failed to retrieve cloud data. Verify endpoint or table contents.');
      setTestingStatus('failed');
    }
  };

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();
    const budgetNum = parseFloat(overallMonthlyBudget);
    const incomeNum = parseFloat(monthlyIncome);

    const updated: UserSettings = {
      currency,
      overallMonthlyBudget: !isNaN(budgetNum) && budgetNum > 0 ? budgetNum : 37050,
      monthlyIncome: !isNaN(incomeNum) && incomeNum > 0 ? incomeNum : 58500,
      theme,
      syncConfig: {
        provider,
        url: url.trim(),
        apiKey: apiKey.trim(),
        autoSync,
        lastSyncedAt: settings.syncConfig.lastSyncedAt,
        syncStatus: provider === 'none' ? 'idle' : 'synced',
      },
    };

    onSaveSettings(updated);
    onClose();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text) as FinanceAppData;
        if (parsed.transactions && parsed.categories) {
          onRestoreData(parsed);
          setTestFeedback('Successfully imported JSON backup data!');
          setTestingStatus('success');
        } else {
          setTestFeedback('Invalid JSON schema. Missing transactions or categories.');
          setTestingStatus('failed');
        }
      } catch (err) {
        setTestFeedback('Failed to parse the selected file.');
        setTestingStatus('failed');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div
        className={`w-full max-w-2xl rounded-2xl border p-5 sm:p-6 shadow-2xl transition-all my-8 max-h-[90vh] overflow-y-auto ${
          isLight
            ? 'bg-white border-primary-100 text-slate-900'
            : 'bg-black border-[#222222]/60 text-slate-100'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-[#111111]">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold flex items-center gap-2">
              Preferences & Synchronization
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Personalize theme, currency, monthly baseline, and configure cloud synchronization
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSaveAll} className="space-y-6">
          {/* Visual Appearance & Theme Toggle */}
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0a0a0a] border-[#111111]'
            }`}
          >
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Color Theme
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!isLight) onToggleTheme();
                }}
                className={`p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                  isLight
                    ? 'border-primary-500 bg-primary-50/50 text-primary-900 ring-2 ring-primary-500/20'
                    : 'border-slate-800 bg-slate-900/50 text-slate-500 dark:text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                  <Sun className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold">Light</div>
                  <div className="text-[10px] text-slate-500">Light, clean, primary accents</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (isLight) onToggleTheme();
                }}
                className={`p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                  !isLight
                    ? 'border-primary-500 bg-[#1a1a1a] text-primary-300 ring-2 ring-primary-500/20'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-primary-400 font-bold border border-[#222222]">
                  <Moon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold">Dark Mode</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Deep obsidian & primary</div>
                </div>
              </button>
            </div>
          </div>

          {/* Financial Profile Defaults */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                Currency Symbol
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className={`w-full px-3 py-2 rounded-xl border text-xs font-bold ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-800 text-slate-100'
                }`}
              >
                <option value="₹">₹ - Indian Rupee (INR)</option>
                <option value="$">$ - US Dollar (USD)</option>
                <option value="€">€ - Euro (EUR)</option>
                <option value="£">£ - British Pound (GBP)</option>
                <option value="¥">¥ - Japanese Yen (JPY)</option>
                <option value="AED ">AED - UAE Dirham</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                Monthly Inflow ({currency})
              </label>
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className={`w-full px-3 py-2 rounded-xl border text-xs font-bold ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-800 text-slate-100'
                }`}
                placeholder="58500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                Total Budget N+W ({currency})
              </label>
              <input
                type="number"
                value={overallMonthlyBudget}
                onChange={(e) => setOverallMonthlyBudget(e.target.value)}
                className={`w-full px-3 py-2 rounded-xl border text-xs font-bold ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-800 text-slate-100'
                }`}
                placeholder="37050"
              />
            </div>
          </div>

          {/* Sync Mode & Provider */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Sync Mode & Multi-Device Provider
            </label>

            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setProvider('none');
                  setTestingStatus('idle');
                }}
                className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  provider === 'none'
                    ? 'border-primary-500 bg-primary-500/10 text-primary-800 dark:text-primary-300 ring-1 ring-primary-500'
                    : isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-600'
                    : 'bg-slate-950 border-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                <Server className="w-4 h-4 mb-2 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="text-xs font-bold">Local Only</div>
                  <div className="text-[10px] text-slate-500">Browser localStorage</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setProvider('supabase');
                  setTestingStatus('idle');
                }}
                className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  provider === 'supabase'
                    ? 'border-primary-500 bg-primary-500/10 text-primary-800 dark:text-primary-300 ring-1 ring-primary-500'
                    : isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-600'
                    : 'bg-slate-950 border-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                <Database className="w-4 h-4 mb-2 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="text-xs font-bold">Supabase</div>
                  <div className="text-[10px] text-slate-500">Free PostgreSQL REST</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setProvider('firebase');
                  setTestingStatus('idle');
                }}
                className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  provider === 'firebase'
                    ? 'border-primary-500 bg-primary-500/10 text-primary-800 dark:text-primary-300 ring-1 ring-primary-500'
                    : isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-600'
                    : 'bg-slate-950 border-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                <Flame className="w-4 h-4 mb-2 text-primary-500" />
                <div>
                  <div className="text-xs font-bold">Firebase</div>
                  <div className="text-[10px] text-slate-500">Realtime DB REST</div>
                </div>
              </button>
            </div>
          </div>

          {/* Provider Credentials Form (if Supabase or Firebase selected) */}
          {provider !== 'none' && (
            <div className={`p-4 rounded-xl border space-y-3 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold flex items-center gap-1.5">
                  <Cloud className="w-4 h-4 text-primary-600" />
                  {provider === 'supabase' ? 'Supabase Project Details' : 'Firebase Database Details'}
                </span>
                <span className="text-[11px] text-slate-500">Free Tier Friendly</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  Project URL
                </label>
                <input
                  type="url"
                  placeholder={
                    provider === 'supabase'
                      ? 'https://your-project.supabase.co'
                      : 'https://your-app-default-rtdb.firebaseio.com'
                  }
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-mono border ${
                    isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-800 text-slate-100'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  API Key / Anon Key
                </label>
                <input
                  type="password"
                  placeholder="Paste your anon public key or secret"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className={`w-full rounded-xl px-3 py-2 text-xs font-mono border ${
                    isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-800 text-slate-100'
                  }`}
                />
              </div>

              {/* Action Buttons for Cloud */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  disabled={testingStatus === 'testing'}
                  onClick={handleTestConnection}
                  className="px-3 py-1.5 rounded-lg border text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
                >
                  {testingStatus === 'testing' ? 'Testing...' : 'Test Connection'}
                </button>
                <button
                  type="button"
                  disabled={isSyncing}
                  onClick={handleManualPush}
                  className="px-3 py-1.5 bg-primary-600 hover:bg-primary-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Upload Data Now
                </button>
                <button
                  type="button"
                  disabled={isSyncing}
                  onClick={handleManualPull}
                  className="px-3 py-1.5 rounded-lg border text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Download from Cloud
                </button>
              </div>

              {testFeedback && (
                <div
                  className={`p-2.5 rounded-lg text-xs font-medium ${
                    testingStatus === 'success'
                      ? 'bg-primary-500/10 text-primary-700 dark:text-primary-400 border border-primary-500/20'
                      : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                  }`}
                >
                  {testFeedback}
                </div>
              )}
            </div>
          )}

          {/* Backup & Maintenance Section */}
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0a0a0a] border-[#111111]'
            }`}
          >
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Backup & Reference Reset
            </span>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => exportDataToJSON(currentAppData)}
                className="px-3 py-1.5 bg-white dark:bg-slate-900 border rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-slate-50"
              >
                <Download className="w-3.5 h-3.5 text-primary-600" />
                Export Backup (JSON)
              </button>

              <label className="px-3 py-1.5 bg-white dark:bg-slate-900 border rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-slate-50">
                <Upload className="w-3.5 h-3.5 text-primary-600" />
                Restore JSON
                <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
              </label>

              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Reset all categories and transactions to the Excel Sheet reference in Indian Rupee (₹)?')) {
                    onResetToDemo();
                    onClose();
                  }
                }}
                className="px-3 py-1.5 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-rose-100"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset to Excel Template
              </button>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-[#111111]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-primary-700/20 transition-all cursor-pointer"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// --- src/components/UserProfileMenu.tsx ---

const mix = (c1: string, c2: string, weight: number) => {
  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0,0,0];
  };
  const rgb1 = hexToRgb(c1);
  const rgb2 = hexToRgb(c2);
  const w = weight / 100;
  const r = Math.round(rgb1[0] * w + rgb2[0] * (1 - w));
  const g = Math.round(rgb1[1] * w + rgb2[1] * (1 - w));
  const b = Math.round(rgb1[2] * w + rgb2[2] * (1 - w));
  return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).padStart(6, '0')}`;
};

const generatePalette = (baseHex: string) => {
  return {
    50: mix(baseHex, '#ffffff', 10),
    100: mix(baseHex, '#ffffff', 20),
    200: mix(baseHex, '#ffffff', 40),
    300: mix(baseHex, '#ffffff', 60),
    400: mix(baseHex, '#ffffff', 80),
    500: baseHex,
    600: mix(baseHex, '#000000', 80),
    700: mix(baseHex, '#000000', 60),
    800: mix(baseHex, '#000000', 40),
    900: mix(baseHex, '#000000', 20),
    950: mix(baseHex, '#000000', 10),
  };
};

const BASE_COLORS = [
  '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9',
  '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#64748b', '#6b7280', '#71717a',
  '#737373', '#78716c', '#dc143c', '#ff7f50', '#ff6347', '#ffd700', '#808000', '#008080', '#000080', '#800000',
  '#ff69b4', '#6a5acd', '#4169e1', '#2e8b57', '#d2691e',
];

interface UserProfileMenuProps {
  onOpenBudgetCalculator: () => void;
  onOpenManageCategories: () => void;
}

const UserProfileMenu: React.FC<UserProfileMenuProps> = ({ onOpenBudgetCalculator, onOpenManageCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'color' | 'password'>('main');
  const [activeColorId, setActiveColorId] = useState('#f59e0b');
  const menuRef = useRef<HTMLDivElement>(null);

  // Password reset state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const currentUser = auth.currentUser;
  
  const firstLetter = currentUser?.email ? currentUser.email.charAt(0).toUpperCase() : 'U';

  useEffect(() => {
    const savedColor = localStorage.getItem('theme-color-id');
    if (savedColor) {
      // Migrate old named colors to hex or use the saved hex
      if (savedColor === 'amber') applyColor('#f59e0b');
      else if (savedColor === 'green') applyColor('#22c55e');
      else if (savedColor === 'purple') applyColor('#a855f7');
      else if (savedColor === 'light-blue') applyColor('#0ea5e9');
      else if (savedColor === 'light-yellow') applyColor('#eab308');
      else if (savedColor === 'light-pink') applyColor('#ec4899');
      else if (savedColor === 'beige') applyColor('#78716c');
      else if (savedColor === 'almond') applyColor('#f97316');
      else applyColor(savedColor);
    } else {
      applyColor('#f59e0b');
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setTimeout(() => setActiveMenu('main'), 200);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const applyColor = (colorHex: string) => {
    const values = generatePalette(colorHex);
    const root = document.documentElement;
    Object.entries(values).forEach(([weight, hex]) => {
      root.style.setProperty(`--primary-${weight}`, hex);
    });
    setActiveColorId(colorHex);
    localStorage.setItem('theme-color-id', colorHex);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }
    if (!currentUser || !currentUser.email) return;

    setIsChangingPassword(true);
    setPasswordError('');
    setPasswordSuccess('');

    try {
      const credential = EmailAuthProvider.credential(currentUser.email, oldPassword);
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, newPassword);
      setPasswordSuccess('Password successfully updated!');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setActiveMenu('main');
        setPasswordSuccess('');
      }, 2000);
    } catch (err: any) {
      setPasswordError(err.message || 'Failed to update password');
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 flex items-center justify-center font-bold shadow-sm cursor-pointer hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors"
      >
        {firstLetter}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl border border-slate-200 dark:border-[#222222] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          
          {activeMenu === 'main' && (
            <div className="py-2">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-[#222222]">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {currentUser?.email}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">User Profile</p>
              </div>
              
              <div className="py-1">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBudgetCalculator();
                  }}
                  className="w-full flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#222222] transition-colors"
                >
                  <Calculator className="w-4 h-4 mr-3 text-slate-400" />
                  Budgeting
                </button>
                <button
                  onClick={() => setActiveMenu('password')}
                  className="w-full flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#222222] transition-colors"
                >
                  <Lock className="w-4 h-4 mr-3 text-slate-400" />
                  Change Password
                </button>
                <button
                  onClick={() => setActiveMenu('color')}
                  className="w-full flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#222222] transition-colors"
                >
                  <Palette className="w-4 h-4 mr-3 text-slate-400" />
                  Change Theme Color
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenManageCategories();
                  }}
                  className="w-full flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#222222] transition-colors"
                >
                  <Settings2 className="w-4 h-4 mr-3 text-slate-400" />
                  Manage Categories
                </button>
              </div>
              
              <div className="border-t border-slate-100 dark:border-[#222222] py-1">
                <button
                  onClick={() => signOut(auth)}
                  className="w-full flex items-center px-4 py-2 text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            </div>
          )}

          {activeMenu === 'color' && (
            <div className="py-2">
              <div className="px-4 py-2 flex items-center border-b border-slate-100 dark:border-[#222222]">
                <button onClick={() => setActiveMenu('main')} className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 mr-2">
                  ← Back
                </button>
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Theme Colors</span>
              </div>
              <div className="max-h-64 overflow-y-auto p-4">
                <div className="grid grid-cols-6 gap-3">
                  {BASE_COLORS.map(colorHex => (
                    <button
                      key={colorHex}
                      onClick={() => applyColor(colorHex)}
                      className={`w-6 h-6 rounded-full shadow-sm border transition-transform hover:scale-125 flex items-center justify-center cursor-pointer ${
                        activeColorId === colorHex ? 'border-slate-900 dark:border-white ring-2 ring-slate-900/20 dark:ring-white/20 scale-125' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: colorHex }}
                      title={colorHex}
                    >
                      {activeColorId === colorHex && <Check className="w-3 h-3 text-white mix-blend-difference" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'password' && (
            <div className="py-2">
              <div className="px-4 py-2 flex items-center border-b border-slate-100 dark:border-[#222222]">
                <button onClick={() => setActiveMenu('main')} className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 mr-2">
                  ← Back
                </button>
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Change Password</span>
              </div>
              <form onSubmit={handleChangePassword} className="px-4 py-3 space-y-3">
                {passwordError && <div className="text-[10px] text-rose-500 bg-rose-50 dark:bg-rose-950/20 p-1.5 rounded">{passwordError}</div>}
                {passwordSuccess && <div className="text-[10px] text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 p-1.5 rounded">{passwordSuccess}</div>}
                
                <div>
                  <input
                    type="password"
                    placeholder="Old Password"
                    required
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm rounded-lg border bg-slate-50 dark:bg-[#222222] border-slate-200 dark:border-[#333333] focus:border-primary-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm rounded-lg border bg-slate-50 dark:bg-[#222222] border-slate-200 dark:border-[#333333] focus:border-primary-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm New"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm rounded-lg border bg-slate-50 dark:bg-[#222222] border-slate-200 dark:border-[#333333] focus:border-primary-500 outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isChangingPassword}
                  className="w-full py-1.5 bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isChangingPassword ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};


// --- src/components/Header.tsx ---

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenAddModal: () => void;
  onOpenSettings: () => void;
  onOpenBudgetCalculator: () => void;
  onOpenManageCategories: () => void;
  syncConfig: SyncConfig;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenAddModal,
  onOpenSettings,
  onOpenBudgetCalculator,
  onOpenManageCategories,
  syncConfig,
  theme,
  onToggleTheme,
}) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'daily', label: 'Daily Entry', icon: FileSpreadsheet },
    { id: 'monthly', label: 'Monthly Budgeting', icon: BarChart3 },
    { id: 'yearly', label: 'Yearly Review', icon: Calendar },
  ];

  const isLight = theme === 'light';

  return (
    <header
      id="main-app-header"
      className={`sticky top-0 z-40 transition-colors backdrop-blur-md border-b ${
        isLight
          ? 'bg-white/95 border-primary-100/80 text-slate-900 shadow-xs'
          : 'bg-black/90 border-[#111111] text-slate-100 shadow-lg shadow-black/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo & Sync Pill */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-md shadow-primary-600/30 font-bold transition-transform hover:scale-105">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Logo className="text-xl sm:text-2xl" />
                </div>
              </div>
            </div>

            {/* Sync Status Badge */}
            <button
              id="badge-sync-status"
              onClick={onOpenSettings}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors cursor-pointer ${
                syncConfig.provider === 'none'
                  ? isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-600 hover:border-primary-300'
                    : 'bg-[#0a0a0a] border-[#222222]/60 text-slate-500 dark:text-slate-400 hover:border-primary-700'
                  : 'bg-primary-500/10 border-primary-500/30 text-primary-600 dark:text-primary-400 hover:bg-primary-500/20'
              }`}
              title="Click to configure cloud synchronization"
            >
              {syncConfig.provider === 'none' ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Local Storage Mode</span>
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                  <span className="capitalize">{syncConfig.provider} Synced</span>
                </>
              )}
            </button>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav
            className={`hidden lg:flex items-center space-x-1 p-1 rounded-xl border ${
              isLight
                ? 'bg-slate-100/90 border-slate-200'
                : 'bg-[#0a0a0a] border-[#111111]'
            }`}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => onSelectTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-xs'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons (Theme Toggle, Add Transaction, Settings) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Dark / Normal Light Mode Toggle */}
            <button
              id="btn-theme-toggle"
              onClick={onToggleTheme}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                isLight
                  ? 'bg-primary-50/80 hover:bg-primary-100/80 border-primary-200 text-primary-800'
                  : 'bg-[#0a0a0a] hover:bg-[#1a1a1a] border-[#222222]/60 text-primary-300'
              }`}
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Normal (Light) Mode'}
            >
              {isLight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-primary-700" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-primary-400" />
                  <span className="hidden sm:inline">Normal</span>
                </>
              )}
            </button>

            <button
              id="btn-header-add-transaction"
              onClick={onOpenAddModal}
              className="py-1.5 sm:py-2 px-3 sm:px-4 bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs sm:shadow-md shadow-primary-700/20 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Transaction</span>
              <span className="sm:hidden">Add</span>
            </button>

            <button
              id="btn-header-settings"
              onClick={onOpenSettings}
              className={`p-2 sm:p-2.5 rounded-xl border transition-colors cursor-pointer ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                  : 'bg-[#0a0a0a] hover:bg-[#1a1a1a] border-[#111111] text-slate-300'
              }`}
              title="Open Settings & Cloud Sync"
            >
              <Settings className="w-4 h-4" />
            </button>
            <UserProfileMenu 
              onOpenBudgetCalculator={onOpenBudgetCalculator} 
              onOpenManageCategories={onOpenManageCategories}
            />
          </div>
        </div>

        {/* Mobile / Tablet Tab Navigation Bar */}
        <div
          className={`flex lg:hidden items-center justify-between border-t py-2 overflow-x-auto gap-1 ${
            isLight ? 'border-slate-200/80' : 'border-[#111111]'
          }`}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-xs'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};


// --- src/App.tsx ---

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [data, setData] = useState<FinanceAppData>(() => loadLocalData());
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isManageCategoriesOpen, setIsManageCategoriesOpen] = useState<boolean>(false);
  const [isBudgetCalculatorOpen, setIsBudgetCalculatorOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => data.settings.theme || 'light');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Keep DOM root class in sync with theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    setData((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        theme: nextTheme,
      },
    }));
  };

  // Automatically save to localStorage whenever data changes
  useEffect(() => {
    saveLocalData(data);

    // If autoSync is enabled and remote provider is configured, push update in background
    if (
      data.settings.syncConfig.autoSync &&
      data.settings.syncConfig.provider !== 'none' &&
      data.settings.syncConfig.url &&
      data.settings.syncConfig.apiKey
    ) {
      pushDataToCloud(data).catch((err) => {
        console.warn('Background auto-sync failed:', err);
      });
    }
  }, [data]);

  // Transaction handlers
  const handleAddTransaction = (newTx: Omit<Transaction, 'id' | 'createdAt'>) => {
    const tx: Transaction = {
      ...newTx,
      id: `tx-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      createdAt: Date.now(),
    };

    setData((prev) => ({
      ...prev,
      transactions: [tx, ...prev.transactions],
    }));
  };

  const handleDeleteTransaction = (id: string) => {
    setData((prev) => ({
      ...prev,
      transactions: prev.transactions.filter((t) => t.id !== id),
    }));
  };

  // Category Budget handlers
  const handleUpdateCategoryBudget = (categoryId: string, newBudget: number) => {
    setData((prev) => ({
      ...prev,
      categories: prev.categories.map((c) =>
        c.id === categoryId ? { ...c, monthlyBudget: newBudget } : c
      ),
    }));
  };

  // Subscriptions handlers
  const handleAddSubscription = (newSub: Omit<Subscription, 'id'>) => {
    const sub: Subscription = {
      ...newSub,
      id: `sub-${Date.now()}`,
    };
    setData((prev) => ({
      ...prev,
      subscriptions: [...prev.subscriptions, sub],
    }));
  };

  const handleUpdateSubscription = (updatedSub: Subscription) => {
    setData((prev) => ({
      ...prev,
      subscriptions: prev.subscriptions.map((s) => (s.id === updatedSub.id ? updatedSub : s)),
    }));
  };

  const handleDeleteSubscription = (id: string) => {
    setData((prev) => ({
      ...prev,
      subscriptions: prev.subscriptions.filter((s) => s.id !== id),
    }));
  };

  // Financial Goals handlers
  const handleAddGoal = (newGoal: Omit<FinancialGoal, 'id'>) => {
    const goal: FinancialGoal = {
      ...newGoal,
      id: `goal-${Date.now()}`,
    };
    setData((prev) => ({
      ...prev,
      goals: [...prev.goals, goal],
    }));
  };

  const handleUpdateGoal = (updatedGoal: FinancialGoal) => {
    setData((prev) => ({
      ...prev,
      goals: prev.goals.map((g) => (g.id === updatedGoal.id ? updatedGoal : g)),
    }));
  };

  const handleDeleteGoal = (id: string) => {
    setData((prev) => ({
      ...prev,
      goals: prev.goals.filter((g) => g.id !== id),
    }));
  };

  // Settings & Restore
  const handleSaveSettings = (newSettings: UserSettings) => {
    setData((prev) => ({
      ...prev,
      settings: newSettings,
    }));
    if (newSettings.theme) {
      setTheme(newSettings.theme);
    }
  };

  const handleRestoreData = (restored: FinanceAppData) => {
    setData(restored);
    if (restored.settings?.theme) {
      setTheme(restored.settings.theme);
    }
  };

  const handleResetToDemo = () => {
    const freshData: FinanceAppData = {
      transactions: getInitialTransactions(),
      categories: DEFAULT_CATEGORIES,
      subCategories: DEFAULT_SUBCATEGORIES,
      subscriptions: DEFAULT_SUBSCRIPTIONS,
      goals: DEFAULT_GOALS,
      settings: {
        ...DEFAULT_SETTINGS,
        theme,
      },
    };
    setData(freshData);
  };

  const currency = data.settings.currency || '₹';
  const isLight = theme === 'light';

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8faf9] dark:bg-[#000000]">
        <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginScreen onLogin={() => {}} />;
  }

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors selection:bg-primary-500 selection:text-white ${
        isLight ? 'bg-[#f8faf9] text-slate-900' : 'bg-black text-slate-100'
      }`}
    >
      {/* Top Header & Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenAddModal={() => setIsAddDrawerOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenBudgetCalculator={() => setIsBudgetCalculatorOpen(true)}
        onOpenManageCategories={() => setIsManageCategoriesOpen(true)}
        syncConfig={data.settings.syncConfig}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12">
        {/* Quick Balance Cards */}
        

        {/* Tab Views */}
        {activeTab === 'overview' && (
          <OverviewTab
            transactions={data.transactions}
            categories={data.categories}
            overallMonthlyBudget={data.settings.overallMonthlyBudget}
            monthlyIncome={data.settings.monthlyIncome || 58500}
            currency={currency}
            theme={theme}
            onOpenAddModal={() => setIsAddDrawerOpen(true)}
          />
        )}

        {activeTab === 'monthly' && (
          <MonthlyBudgetingTab
            transactions={data.transactions}
            categories={data.categories}
            overallMonthlyBudget={data.settings.overallMonthlyBudget}
            monthlyIncome={data.settings.monthlyIncome || 58500}
            currency={currency}
            theme={theme}
            onOpenAddModal={() => setIsAddDrawerOpen(true)}
            onUpdateCategoryBudget={handleUpdateCategoryBudget}
            onSwitchTab={setActiveTab}
            onDeleteTransaction={handleDeleteTransaction}
          />
        )}

        {activeTab === 'yearly' && (
          <YearlyReviewTab
            transactions={data.transactions}
            subscriptions={data.subscriptions}
            goals={data.goals}
            currency={currency}
            categories={data.categories}
            theme={theme}
            onUpdateSubscription={handleUpdateSubscription}
            onDeleteSubscription={handleDeleteSubscription}
            onAddSubscription={handleAddSubscription}
            onUpdateGoal={handleUpdateGoal}
            onDeleteGoal={handleDeleteGoal}
            onAddGoal={handleAddGoal}
          />
        )}

        {activeTab === 'daily' && (
          <DailyEntryTab
            transactions={data.transactions}
            categories={data.categories}
            currency={currency}
            theme={theme}
            onOpenAddModal={() => setIsAddDrawerOpen(true)}
            onDeleteTransaction={handleDeleteTransaction}
          />
        )}
      </main>

      {/* Floating Fast "+ Add Transaction" Button on Mobile */}
      <div className="fixed bottom-5 right-5 z-30 md:hidden">
        <button
          id="btn-mobile-floating-add"
          onClick={() => setIsAddDrawerOpen(true)}
          className="w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-white shadow-xl shadow-black/40 flex items-center justify-center cursor-pointer transition-transform active:scale-95"
          aria-label="Add Transaction"
        >
          <Plus className="w-7 h-7" />
        </button>
      </div>

      {/* Add Transaction Drawer / Modal */}
      <ManageCategoriesModal
        isOpen={isManageCategoriesOpen}
        onClose={() => setIsManageCategoriesOpen(false)}
        categories={data.categories}
        subCategories={data.subCategories || []}
        theme={theme}
        onUpdateCategories={(newCategories) => setData({ ...data, categories: newCategories })}
        onUpdateSubCategories={(newSubCategories) => setData({ ...data, subCategories: newSubCategories })}
      />

      <BudgetCalculatorModal
        isOpen={isBudgetCalculatorOpen}
        onClose={() => setIsBudgetCalculatorOpen(false)}
        subCategories={data.subCategories || []}
        currency={currency}
        categories={data.categories}
        theme={theme}
        onOpenManageCategories={() => setIsManageCategoriesOpen(true)}
      />

      <AddTransactionDrawer
        isOpen={isAddDrawerOpen}
        onClose={() => setIsAddDrawerOpen(false)}
        onAddTransaction={handleAddTransaction}
        categories={data.categories}
        subCategories={data.subCategories || []}
        currency={currency}
        theme={theme}
      />

      {/* Settings & Sync Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={data.settings}
        onSaveSettings={handleSaveSettings}
        currentAppData={data}
        onRestoreData={handleRestoreData}
        onResetToDemo={handleResetToDemo}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
    </div>
  );
}


// Render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
