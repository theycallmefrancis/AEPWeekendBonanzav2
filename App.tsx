import React, { useState } from 'react';
import Header from './components/Header';
import BonusCalculator from './components/BonusCalculator';
import TierLadder from './components/TierLadder';
import DiceArena from './components/DiceArena';
import HypeCoach from './components/HypeCoach';
import { Copy } from 'lucide-react';

const App: React.FC = () => {
  const [currentProjectedCalls, setCurrentProjectedCalls] = useState(40);

  const handleCalculatorUpdate = (data: { eligibleForRoll: boolean; estimatedBonus: number; projectedCalls: number }) => {
    setCurrentProjectedCalls(data.projectedCalls);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-gold-500 selection:text-black font-sans">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* SECTION 2: THE GRIND (Sports/Hype Theme) */}
        <section>
             <div className="flex items-center space-x-4 mb-8">
                 <div className="h-2 w-12 bg-urgent-red transform -skew-x-12"></div>
                 <h2 className="text-4xl font-black italic uppercase text-white">The Stats League</h2>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <BonusCalculator onUpdate={handleCalculatorUpdate} />
                <TierLadder currentCalls={currentProjectedCalls} />
             </div>
        </section>

        {/* SECTION 3: THE PAYOFF (Vegas Theme) */}
        <section>
             <div className="flex justify-center mb-8">
                 <h2 className="text-4xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue neon-text">
                    Big Money Time
                 </h2>
             </div>
             <div className="max-w-4xl mx-auto">
                <DiceArena />
             </div>
        </section>

        {/* HYPE SECTION & COPY PASTE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
             <HypeCoach />
             
             <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                 <h3 className="text-white font-bold mb-4 flex items-center">
                     <Copy className="w-5 h-5 mr-2 text-gold-400" />
                     Slack / Teams Blurb
                 </h3>
                 <div className="bg-black p-4 rounded text-sm text-slate-300 font-mono whitespace-pre-line h-64 overflow-y-auto custom-scrollbar">
{`🚨 6-7 WEEKEND ALERT: The Money Train is Leaving the Station! 🚨

TEAM! We are 48 hours away from the BIGGEST PAYOUT of AEP. This isn't just work—this is a BONANZA.

🗓️ WHEN: Saturday Dec 6 & Sunday Dec 7
⏰ TIME: 8 AM – 7 PM (Let’s maximize those hours!)

💰 THE GUARANTEED CASH (Your Base)
💸 Double Commission ALL Weekend.
💸 $50 Bonus for 5 Hours.
💸 $100 Bonus for 8 Hours.
📉 Lower Tiers: Hit 30 calls? You're in the money (1%). Hit 55+? You're at 3%!

🎲 THE GAMBLE: THE 6–7 DICE ROLL POT
This is where it gets crazy. If you work BOTH days + hit your bonuses, you unlock the MULTIPLIER ROLL.

We roll the dice. 🎲
Roll a 6? We add 6x the Total Weekend Bonus to the pot.
Roll a 7? We add 7x the Total Weekend Bonus to the pot.

🤝 HOW TO SHARE THE POT
Show up both days + Hit 30 calls + Qualify = YOU GET A CUT. 🍰

PHONES = PAYCHECKS. 📞💥 Don't watch the train go by.`}
                 </div>
                 <p className="text-xs text-slate-500 mt-2 text-center">Copy and paste this into your team channels!</p>
             </div>
        </section>

      </main>

      <footer className="bg-black text-center py-12 border-t border-slate-900 mt-12">
            <p className="brand-font text-3xl text-white mb-2 tracking-widest">SCRIPTED TEAM</p>
            <p className="text-slate-500">LET'S SHOW UP, SHOW OUT, AND CASH OUT!</p>
      </footer>
    </div>
  );
};

export default App;