import React from 'react';
import { CommissionTier } from '../types';

const tiers: CommissionTier[] = [
  { min: 30, max: 39, rate: 1 },
  { min: 40, max: 45, rate: 2 },
  { min: 46, max: 54, rate: 2.5 },
  { min: 55, max: null, rate: 3 },
];

const TierLadder: React.FC<{ currentCalls: number }> = ({ currentCalls }) => {
  return (
    <div className="bg-white text-black p-0 rounded-sm overflow-hidden shadow-2xl relative">
      {/* Gritty Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>

      <div className="bg-black text-white p-6 border-b-8 border-gold-500">
        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter sports-font">
          Show Up. Show Out.
        </h2>
        <p className="text-gold-500 font-bold uppercase tracking-widest mt-2">
          Official Commission League Standings
        </p>
      </div>
      
      <div className="p-6 md:p-8 space-y-2">
        <div className="grid grid-cols-12 gap-2 mb-4 text-xs font-bold uppercase text-slate-500 tracking-wider">
            <div className="col-span-8">Call Volume Tier</div>
            <div className="col-span-4 text-right">Commission</div>
        </div>

        {tiers.map((tier, idx) => {
            const isUnlocked = currentCalls >= tier.min;
            const label = tier.max ? `${tier.min}–${tier.max}` : `${tier.min}+`;
            
            return (
              <div 
                key={idx} 
                className={`relative p-4 flex justify-between items-center transition-all duration-200 transform ${
                  isUnlocked 
                    ? 'bg-black text-white scale-105 shadow-xl border-l-8 border-gold-500 z-10' 
                    : 'bg-slate-100 text-slate-400 border-l-8 border-slate-300'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-3xl font-black sports-font italic">{label}</span>
                  <span className="text-xs uppercase font-bold">{isUnlocked ? 'QUALIFIED LEAGUE' : 'LOCKED'}</span>
                </div>
                
                <div className="text-right">
                    <span className={`text-4xl font-black sports-font ${isUnlocked ? 'text-gold-500' : 'text-slate-300'}`}>
                      {tier.rate}%
                    </span>
                </div>

                {isUnlocked && (
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-gold-500"></div>
                )}
              </div>
            );
        })}
      </div>

      <div className="bg-slate-900 p-4 text-center">
          <div className="inline-block bg-urgent-red text-white font-black uppercase text-xl px-6 py-2 transform -skew-x-12 hover:skew-x-0 transition-transform cursor-default">
            MAINTAIN 5 BCPH. JOIN THE LEAGUE.
          </div>
          <p className="text-slate-500 text-xs mt-3 uppercase font-bold">
              Lower Billable Tiers = More Money
          </p>
      </div>
    </div>
  );
};

export default TierLadder;