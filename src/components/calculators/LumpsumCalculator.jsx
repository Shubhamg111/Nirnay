import { useState, useMemo } from 'react';

export default function Calculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(5);
  const [monthlyAdd, setMonthlyAdd] = useState(5000);

  const result = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    let balance = principal;
    const timeline = [];

    for (let m = 1; m <= months; m++) {
      balance = balance * (1 + monthlyRate) + monthlyAdd;
      if (m % 12 === 0) timeline.push({ year: m / 12, balance: Math.round(balance) });
    }

    return { finalBalance: Math.round(balance), timeline };
  }, [principal, rate, years, monthlyAdd]);

  const maxBalance = Math.max(...result.timeline.map((r) => r.balance), 1);

  return (
    <div className="border border-line rounded-sm p-6 sm:p-8 my-6 bg-paper">
      <p className="font-mono text-[11px] tracking-widest uppercase text-brass mb-1">Tool</p>
      <h3 className="font-display text-xl font-semibold mb-6">Compound growth calculator</h3>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
        <label className="text-sm">
          <span className="block text-ink/60 mb-1.5">Starting amount (NPR)</span>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full font-mono px-3 py-2 border border-line rounded-sm bg-mist focus:outline-none focus:border-brass"
          />
        </label>

        <label className="text-sm">
          <span className="block text-ink/60 mb-1.5">Monthly addition (NPR)</span>
          <input
            type="number"
            value={monthlyAdd}
            onChange={(e) => setMonthlyAdd(Number(e.target.value))}
            className="w-full font-mono px-3 py-2 border border-line rounded-sm bg-mist focus:outline-none focus:border-brass"
          />
        </label>

        <label className="text-sm">
          <span className="block text-ink/60 mb-1.5">Annual return (%)</span>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full font-mono px-3 py-2 border border-line rounded-sm bg-mist focus:outline-none focus:border-brass"
          />
        </label>

        <label className="text-sm">
          <span className="block text-ink/60 mb-1.5">Years</span>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full font-mono px-3 py-2 border border-line rounded-sm bg-mist focus:outline-none focus:border-brass"
          />
        </label>
      </div>

      <div className="border-t border-line pt-6">
        <p className="text-ink/60 text-sm mb-1">Projected balance after {years} years</p>
        <p className="font-mono text-3xl font-medium text-pine">
          NPR {result.finalBalance.toLocaleString()}
        </p>
      </div>

      {/* Simple bar chart — deliberately plain, data should read as data */}
      <div className="mt-6 flex items-end gap-2 h-32">
        {result.timeline.map((row) => (
          <div key={row.year} className="flex-1 flex flex-col items-center justify-end h-full">
            <div
              className="w-full bg-brass/20 rounded-t-sm"
              style={{ height: `${(row.balance / maxBalance) * 100}%` }}
            />
            <span className="font-mono text-[10px] text-ink/40 mt-1.5">Y{row.year}</span>
          </div>
        ))}
      </div>

      <p className="font-mono text-[11px] text-ink/40 mt-6">
        Educational estimate only — actual returns vary and are not guaranteed.
      </p>
    </div>
  );
}
