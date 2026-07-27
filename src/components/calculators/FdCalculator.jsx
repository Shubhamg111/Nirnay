import { useState, useMemo } from 'react';

const inputClass =
  'w-full font-mono px-3 py-2 border border-line rounded-sm bg-mist focus:outline-none focus:border-brass';
const labelClass = 'text-sm';
const labelSpanClass = 'block text-ink/60 mb-1.5';

const COMPOUNDING_OPTIONS = [
  { label: 'Monthly', value: 12 },
  { label: 'Quarterly', value: 4 },
  { label: 'Half-yearly', value: 2 },
  { label: 'Annually', value: 1 },
];

export default function FdCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(3);
  const [compounding, setCompounding] = useState(4); // quarterly default — common for Nepali bank FDs

  const result = useMemo(() => {
    // Standard compound interest formula: A = P × (1 + r/n)^(n×t)
    const maturity = principal * Math.pow(1 + rate / 100 / compounding, compounding * years);
    const interestEarned = maturity - principal;

    return {
      maturity: Math.round(maturity),
      interestEarned: Math.round(interestEarned),
    };
  }, [principal, rate, years, compounding]);

  return (
    <div className="border border-line rounded-sm p-6 sm:p-8 my-6 bg-paper">
      <p className="font-mono text-[11px] tracking-widest uppercase text-brass mb-1">Tool</p>
      <h3 className="font-display text-xl font-semibold mb-6">Fixed deposit calculator</h3>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-6">
        <label className={labelClass}>
          <span className={labelSpanClass}>Deposit amount (NPR)</span>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          <span className={labelSpanClass}>Annual interest rate (%)</span>
          <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className={inputClass} />
        </label>

        <label className={labelClass}>
          <span className={labelSpanClass}>Tenure (years)</span>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          <span className={labelSpanClass}>Compounding frequency</span>
          <select
            value={compounding}
            onChange={(e) => setCompounding(Number(e.target.value))}
            className={inputClass}
          >
            {COMPOUNDING_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="border-t border-line pt-6 grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-ink/60 text-sm mb-1">Interest earned</p>
          <p className="font-mono text-xl font-medium text-pine">NPR {result.interestEarned.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-ink/60 text-sm mb-1">Maturity value</p>
          <p className="font-mono text-xl font-medium text-brass">NPR {result.maturity.toLocaleString()}</p>
        </div>
      </div>

      <p className="font-mono text-[11px] text-ink/40 mt-6">
        Educational estimate only — actual bank FD rates change over time and vary by bank. Confirm current rates
        before depositing.
      </p>
    </div>
  );
}
