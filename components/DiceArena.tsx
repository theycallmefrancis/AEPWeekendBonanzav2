import React, { useState } from 'react';
import { Dices, Check, Flame } from 'lucide-react';

const DiceArena: React.FC = () => {
  const [rolling, setRolling] = useState(false);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [result, setResult] = useState<string | null>(null);

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);
    setResult(null);

    let rolls = 0;
    const interval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
      rolls++;
      if (rolls > 20) {
        clearInterval(interval);
        finishRoll();
      }
    }, 80);
  };

  const finishRoll = () => {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    setDice1(d1);
    setDice2(d2);
    setRolling(false);
    
    const sum = d1 + d2;
    if (sum === 6) {
      setResult("JACKPOT! 6X MULTIPLIER!");
    } else if (sum === 7) {
      setResult("JACKPOT! 7X MULTIPLIER!");
    } else {
      setResult("NO MULTIPLIER (Try Again)");
    }
  };

  const Die = ({ value }: { value: number }) => (
    <div className={`w-24 h-24 bg-black border-2 border-neon-pink rounded-xl flex items-center justify-center shadow-[0_0_15px_#ff00ff] text-white text-5xl font-black ${rolling ? 'animate-spin' : ''}`}>
      {value}
    </div>
  );

  return (
    <div className="bg-black rounded-3xl border-4 border-slate-800 overflow-hidden relative shadow-2xl">
        {/* Felt Texture Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

        <div className="relative z-10 p-8 text-center border-b border-slate-800">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue neon-text animate-pulse">
                VEGAS NIGHT
            </h2>
            <h3 className="text-xl text-white font-bold tracking-[0.5em] uppercase mt-2">
                Roll For The Pot
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            {/* Left Side: Guaranteed Wins */}
            <div className="p-8 bg-slate-900/50 border-r border-slate-800">
                <h4 className="text-gold-500 font-black text-2xl uppercase mb-6 flex items-center">
                    <Check className="w-6 h-6 mr-2" /> Guaranteed Cash
                </h4>
                <ul className="space-y-4">
                    <li className="flex items-center text-white text-lg font-bold">
                        <span className="w-8 h-8 rounded-full bg-green-900/50 text-green-400 flex items-center justify-center mr-3 border border-green-500">✓</span>
                        Double Commission
                    </li>
                    <li className="flex items-center text-white text-lg font-bold">
                        <span className="w-8 h-8 rounded-full bg-green-900/50 text-green-400 flex items-center justify-center mr-3 border border-green-500">✓</span>
                        $100 for 8 Hours
                    </li>
                    <li className="flex items-center text-white text-lg font-bold">
                        <span className="w-8 h-8 rounded-full bg-green-900/50 text-green-400 flex items-center justify-center mr-3 border border-green-500">✓</span>
                        Lower Tiers (Start at 30!)
                    </li>
                </ul>
            </div>

            {/* Right Side: The Gamble */}
            <div className="p-8 bg-black/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink blur-[100px] opacity-20"></div>
                
                <h4 className="text-neon-pink font-black text-2xl uppercase mb-6 flex items-center">
                    <Flame className="w-6 h-6 mr-2" /> The 6-7 Gamble
                </h4>
                
                <div className="space-y-3 mb-8">
                     <p className="flex justify-between items-center text-white font-bold border-b border-slate-800 pb-2">
                         <span>ROLL A 6</span>
                         <span className="text-neon-green neon-text text-xl">6X MULTIPLIER</span>
                     </p>
                     <p className="flex justify-between items-center text-white font-bold border-b border-slate-800 pb-2">
                         <span>ROLL A 7</span>
                         <span className="text-neon-green neon-text text-xl">7X MULTIPLIER</span>
                     </p>
                </div>

                <div className="flex justify-center gap-6 mb-6">
                    <Die value={dice1} />
                    <Die value={dice2} />
                </div>

                {result && (
                    <div className="text-center text-neon-green font-bold text-lg mb-4 animate-bounce">
                        {result}
                    </div>
                )}

                <button 
                    onClick={rollDice}
                    disabled={rolling}
                    className="w-full py-4 bg-neon-pink hover:bg-fuchsia-600 text-white font-black uppercase text-xl rounded-lg shadow-[0_0_20px_#ff00ff] transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {rolling ? 'ROLLING...' : 'ROLL THE DICE'}
                </button>
            </div>
        </div>
        
        <div className="bg-slate-900 p-4 text-center border-t border-slate-800">
             <p className="text-slate-400 font-mono text-sm">SPLIT THE POT. TAKE THE CASH. DEC 6-7.</p>
        </div>
    </div>
  );
};

export default DiceArena;