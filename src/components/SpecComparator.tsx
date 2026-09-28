import React, { useState } from 'react';
import { SlidersHorizontal, CheckCircle, ArrowUpRight } from 'lucide-react';

interface SpecComparatorProps {
  onQuote: (model: string) => void;
}

export const SpecComparator: React.FC<SpecComparatorProps> = ({ onQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'electric' | 'manual'>('all');

  const models = [
    {
      id: 'mh-150',
      type: 'electric',
      name: 'MH-150',
      fullName: 'MH-150-1/2/3/4',
      capacity: '1 500 N (150 kg)',
      lines: '1 to 4 lines',
      brake: 'Single or dual electromagnetic disc brake',
      drum: 'Compact grooved steel / pilewind',
      drive: 'Compact 3-phase electric gearmotor',
      standard: 'EN 17206 / 2006/42/EC',
      bestFor: 'Acoustic baffles, museum displays, tight fly spaces',
    },
    {
      id: 'mh-250',
      type: 'electric',
      name: 'MH-250',
      fullName: 'MH-250-3/4/5/6',
      capacity: '2 500 N (250 kg)',
      lines: '3, 4, 5, or 6 lines',
      brake: 'Dual redundant holding brakes',
      drum: 'Precision helical-grooved drum',
      drive: 'Low-noise theatrical gearmotor',
      standard: 'EN 17206 / 2006/42/EC',
      bestFor: 'Regional theatres, schools, scenery bars',
    },
    {
      id: 'mh-500',
      type: 'electric',
      name: 'MH-500',
      fullName: 'MH-500-3/4/5/6',
      capacity: '5 000 N (500 kg)',
      lines: '3, 4, 5, or 6 lines',
      brake: 'Dual redundant spring-applied brakes with microswitches',
      drum: 'Precision CNC turned helical grooves',
      drive: 'Heavy-duty 3-phase gearmotor with thermal overload',
      standard: 'EN 17206 / DIN 56950-1',
      bestFor: 'Major theatres, heavy lighting trusses, main stage scenery',
    },
    {
      id: 'mh-1000',
      type: 'electric',
      name: 'MH-1000',
      fullName: 'MH-1000 Heavy Hoist',
      capacity: '10 000 N (1 000 kg)',
      lines: 'Multi-line high-tensile wire system',
      brake: 'Dual redundant heavy-duty brakes with manual release',
      drum: 'Hardened steel grooved drum',
      drive: 'High-torque industrial stage gearmotor',
      standard: 'EN 17206 / 2006/42/EC',
      bestFor: 'Main curtain mechanisms, heavy bridges, architectural shells',
    },
    {
      id: 'mhm-w500',
      type: 'manual',
      name: 'MHM_W500',
      fullName: 'MHM_W500-3/4/5/6',
      capacity: '5 000 N (500 kg)',
      lines: '3, 4, 5, or 6 lines',
      brake: 'Dual automatic friction pressure load brake (silent)',
      drum: 'Precision grooved steel drum',
      drive: 'Ergonomic manual hand crank (removable)',
      standard: 'EN 17206 compliant design',
      bestFor: 'Auditoriums without 3-phase power, backup scenery bars',
    },
  ];

  const filtered = models.filter((m) => {
    if (selectedCategory === 'all') return true;
    return m.type === selectedCategory;
  });

  return (
    <section className="bg-neutral-950 border border-neutral-800 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Technical Specification Matrix</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">
            Stage Lifting Winches Comparison
          </h3>
        </div>

        {/* Filter Segmented Buttons */}
        <div className="flex items-center bg-neutral-900 border border-neutral-800 p-1 self-start sm:self-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
              selectedCategory === 'all'
                ? 'bg-neutral-800 text-white font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Models ({models.length})
          </button>
          <button
            onClick={() => setSelectedCategory('electric')}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
              selectedCategory === 'electric'
                ? 'bg-neutral-800 text-white font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Electric (4)
          </button>
          <button
            onClick={() => setSelectedCategory('manual')}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
              selectedCategory === 'manual'
                ? 'bg-neutral-800 text-white font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Manual (1)
          </button>
        </div>
      </div>

      {/* Table with horizontal scroll on small viewports */}
      <div className="overflow-x-auto border border-neutral-800">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 font-mono uppercase">
              <th className="p-3.5 whitespace-nowrap">Model Code</th>
              <th className="p-3.5 whitespace-nowrap">Capacity (ELL)</th>
              <th className="p-3.5 whitespace-nowrap">Wire Lines</th>
              <th className="p-3.5 whitespace-nowrap">Brake Architecture</th>
              <th className="p-3.5 whitespace-nowrap">Drum Grooving</th>
              <th className="p-3.5 whitespace-nowrap">Drive System</th>
              <th className="p-3.5 whitespace-nowrap">Safety Standard</th>
              <th className="p-3.5 whitespace-nowrap text-right">Inquiry</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/80">
            {filtered.map((item, idx) => (
              <tr
                key={item.id}
                className={idx % 2 === 0 ? 'bg-neutral-950 hover:bg-neutral-900/50' : 'bg-neutral-900/30 hover:bg-neutral-900/50'}
              >
                <td className="p-3.5 font-mono font-bold text-white whitespace-nowrap">
                  <span className="text-amber-400">{item.name}</span>
                  <span className="text-[11px] block text-neutral-500 font-normal">{item.fullName}</span>
                </td>
                <td className="p-3.5 font-mono font-semibold text-neutral-200 tabular-nums whitespace-nowrap">
                  {item.capacity}
                </td>
                <td className="p-3.5 text-neutral-300 whitespace-nowrap">
                  {item.lines}
                </td>
                <td className="p-3.5 text-neutral-300 max-w-xs">
                  {item.brake}
                </td>
                <td className="p-3.5 text-neutral-300 max-w-xs">
                  {item.drum}
                </td>
                <td className="p-3.5 text-neutral-300 max-w-xs">
                  {item.drive}
                </td>
                <td className="p-3.5 font-mono text-neutral-400 whitespace-nowrap">
                  {item.standard}
                </td>
                <td className="p-3.5 text-right whitespace-nowrap">
                  <button
                    onClick={() => onQuote(item.fullName)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
                  >
                    <span>Quote</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <span>* All capacities verified in accordance with EN 17206 upper machinery guidelines.</span>
        <span>Made in Latvia (EU)</span>
      </div>
    </section>
  );
};
