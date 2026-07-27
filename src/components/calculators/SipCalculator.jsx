import { useState, useMemo } from 'react';

const inputClass =
  'w-full font-mono px-3 py-2 border border-line rounded-sm bg-mist focus:outline-none focus:border-brass';
const labelClass = 'text-sm';
const labelSpanClass = 'block text-ink/60 mb-1.5';

export default function SipCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const i = rate / 100 / 12; // monthly rate
    const n = years * 12; // number of installments

    // Standard SIP future value formula:
    // FV = P × [ ((1 + i)^n - 1) / i ] × (1 + i)
    const futureValue = i === 0 ? monthlyAmount * n : monthlyAmount * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));

    const totalInvested = monthlyAmount * n;
    const totalGrowth = futureValue - totalInvested;

    const timeline = [];
    for (let y = 1; y <= years; y++) {
      const m = y * 12;
      const fv = i === 0 ? monthlyAmount * m : monthlyAmount * (((Math.pow(1 + i, m) - 1) / i) * (1 + i));
      timeline.push({ year: y, balance: Math.round(fv) });
    }

    return {
      futureValue: Math.round(futureValue),
      totalInvested: Math.round(totalInvested),
      totalGrowth: Math.round(totalGrowth),
      timeline,
    };
  }, [monthlyAmount, rate, years]);

  const maxBalance = Math.max(...result.timeline.map((r) => r.balance), 1);

  return (
    <div className="border border-line rounded-sm p-6 sm:p-8 my-6 bg-paper">
      <p className="font-mono text-[11px] tracking-widest uppercase text-brass mb-1">Tool</p>
      <h3 className="font-display text-xl font-semibold mb-6">SIP calculator</h3>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
        <label className={labelClass}>
          <span className={labelSpanClass}>Monthly investment (NPR)</span>
          <input
            type="number"
            value={monthlyAmount}
            onChange={(e) => setMonthlyAmount(Number(e.target.value))}
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          <span className={labelSpanClass}>Expected annual return (%)</span>
          <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className={inputClass} />
        </label>

        <label className={labelClass}>
          <span className={labelSpanClass}>Investment period (years)</span>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className={inputClass}
          />
        </label>
      </div>

      <div className="border-t border-line pt-6 grid sm:grid-cols-3 gap-6">
        <div>
          <p className="text-ink/60 text-sm mb-1">Total invested</p>
          <p className="font-mono text-xl font-medium">NPR {result.totalInvested.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-ink/60 text-sm mb-1">Estimated growth</p>
          <p className="font-mono text-xl font-medium text-pine">NPR {result.totalGrowth.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-ink/60 text-sm mb-1">Maturity value</p>
          <p className="font-mono text-xl font-medium text-brass">NPR {result.futureValue.toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-6 flex items-end gap-1.5 h-32 overflow-x-auto">
        {result.timeline.map((row) => (
          <div key={row.year} className="flex-1 min-w-[16px] flex flex-col items-center justify-end h-full">
            <div
              className="w-full bg-brass/20 rounded-t-sm"
              style={{ height: `${(row.balance / maxBalance) * 100}%` }}
            />
            <span className="font-mono text-[9px] text-ink/40 mt-1.5">Y{row.year}</span>
          </div>
        ))}
      </div>

      <p className="font-mono text-[11px] text-ink/40 mt-6">
        Educational estimate only — actual mutual fund and NEPSE returns vary and are not guaranteed.
      </p>
    </div>
  );
}
