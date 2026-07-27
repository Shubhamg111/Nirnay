import { useState, useMemo } from 'react';

const inputClass =
  'w-full font-mono px-3 py-2 border border-line rounded-sm bg-mist focus:outline-none focus:border-brass';
const labelClass = 'text-sm';
const labelSpanClass = 'block text-ink/60 mb-1.5';

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(2000000);
  const [rate, setRate] = useState(10.5);
  const [years, setYears] = useState(15);

  const result = useMemo(() => {
    const r = rate / 100 / 12; // monthly interest rate
    const n = years * 12; // number of monthly installments

    // Standard EMI formula: EMI = [P × r × (1+r)^n] / [(1+r)^n - 1]
    const emi =
      r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [principal, rate, years]);

  const principalShare = Math.round((principal / result.totalPayment) * 100);
  const interestShare = 100 - principalShare;

  return (
    <div className="border border-line rounded-sm p-6 sm:p-8 my-6 bg-paper">
      <p className="font-mono text-[11px] tracking-widest uppercase text-brass mb-1">Tool</p>
      <h3 className="font-display text-xl font-semibold mb-6">EMI / loan calculator</h3>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
        <label className={labelClass}>
          <span className={labelSpanClass}>Loan amount (NPR)</span>
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
          <span className={labelSpanClass}>Loan tenure (years)</span>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className={inputClass}
          />
        </label>
      </div>

      <div className="border-t border-line pt-6">
        <p className="text-ink/60 text-sm mb-1">Monthly EMI</p>
        <p className="font-mono text-3xl font-medium text-pine">NPR {result.emi.toLocaleString()}</p>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-ink/60 text-sm mb-1">Total interest payable</p>
          <p className="font-mono text-lg font-medium text-crimson">NPR {result.totalInterest.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-ink/60 text-sm mb-1">Total payment (principal + interest)</p>
          <p className="font-mono text-lg font-medium">NPR {result.totalPayment.toLocaleString()}</p>
        </div>
      </div>

      {/* Principal vs interest breakdown bar */}
      <div className="mt-6">
        <div className="w-full h-4 rounded-full overflow-hidden flex border border-line">
          <div className="bg-pine/40 h-full" style={{ width: `${principalShare}%` }} />
          <div className="bg-crimson/40 h-full" style={{ width: `${interestShare}%` }} />
        </div>
        <div className="flex justify-between font-mono text-[11px] text-ink/50 mt-2">
          <span>Principal {principalShare}%</span>
          <span>Interest {interestShare}%</span>
        </div>
      </div>

      <p className="font-mono text-[11px] text-ink/40 mt-6">
        Educational estimate only — actual bank rates, processing fees, and terms vary. Confirm with your lender.
      </p>
    </div>
  );
}
