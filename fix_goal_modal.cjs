const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const goalCalculatorCode = `
// --- src/components/GoalCalculatorModal.tsx ---
interface GoalCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: string;
}

const GoalCalculatorModal: React.FC<GoalCalculatorModalProps> = ({
  isOpen,
  onClose,
  currency,
}) => {
  const [targetAmount, setTargetAmount] = useState<string>('');
  const [months, setMonths] = useState<string>('12');
  const [expectedReturn, setExpectedReturn] = useState<string>('6'); // 6% annual return
  
  if (!isOpen) return null;

  const target = parseFloat(targetAmount) || 0;
  const m = parseInt(months) || 1;
  const r = (parseFloat(expectedReturn) || 0) / 100 / 12; // monthly rate
  
  // Future Value of a Series formula (PMT)
  // target = PMT * (((1 + r)^m - 1) / r)
  // PMT = target * r / (((1 + r)^m - 1))
  
  let monthlyContribution = 0;
  if (r === 0) {
    monthlyContribution = target / m;
  } else {
    monthlyContribution = (target * r) / (Math.pow(1 + r, m) - 1);
  }

  const isLight = document.documentElement.classList.contains('dark') === false; // Fallback, though we don't have theme passed, we can approximate or just use generic classes

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transition-colors bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#222222]">
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-[#222222] bg-slate-50 dark:bg-[#111111]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
              <Calculator className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100">Savings Goal Calculator</h3>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Target Amount ({currency})</label>
            <input
              type="number"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              placeholder="e.g. 500000"
              className="w-full px-3 py-2 border rounded-xl bg-white dark:bg-[#111111] border-slate-200 dark:border-[#333] text-slate-900 dark:text-slate-100"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Timeframe (Months)</label>
              <input
                type="number"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                placeholder="e.g. 12"
                className="w-full px-3 py-2 border rounded-xl bg-white dark:bg-[#111111] border-slate-200 dark:border-[#333] text-slate-900 dark:text-slate-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Annual Return (%)</label>
              <input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(e.target.value)}
                placeholder="e.g. 6"
                className="w-full px-3 py-2 border rounded-xl bg-white dark:bg-[#111111] border-slate-200 dark:border-[#333] text-slate-900 dark:text-slate-100"
              />
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-100 dark:border-[#222222]">
            <div className="flex flex-col items-center justify-center p-4 bg-primary-50 dark:bg-primary-950/20 rounded-xl border border-primary-100 dark:border-primary-900/30">
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">Monthly Savings Required</span>
              <span className="text-3xl font-bold text-primary-700 dark:text-primary-300">
                {target > 0 ? formatINR(monthlyContribution, currency) : \`\${currency}0\`}
              </span>
              <span className="text-xs text-slate-500 mt-2 text-center">
                Invested consistently at {expectedReturn}% annual return.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

// Insert it right before YearlyReviewTab
html = html.replace('// --- src/components/YearlyReviewTab.tsx ---', goalCalculatorCode + '\n\n// --- src/components/YearlyReviewTab.tsx ---');

fs.writeFileSync('index.html', html);
console.log('Injected GoalCalculatorModal!');
