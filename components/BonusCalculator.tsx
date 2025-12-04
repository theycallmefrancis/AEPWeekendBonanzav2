import React, { useState, useEffect } from 'react';
import { Target, AlertTriangle } from 'lucide-react';
import { CalculatorState } from '../types';

interface Props {
  onUpdate: (data: { eligibleForRoll: boolean; estimatedBonus: number; projectedCalls: number }) => void;
}

const BonusCalculator: React.FC<Props> = ({ onUpdate }) => {
  const [state, setState] = useState<CalculatorState>({
    hoursWorked: 8,
    callsPerHour: 5,
  });

  const { hoursWorked, callsPerHour } = state;
  
  // Calculations
  const totalCalls = Math.floor(hoursWorked * callsPerHour);
  const eligibleBCPH = callsPerHour >= 5;
  
  // Bonus Logic
  let bonusAmount = 0;
  if (eligibleBCPH) {
    if (hoursWorked >= 8) bonusAmount = 100;
    else if (hoursWorked >= 5) bonusAmount = 50;
  }

  const eligibleForRoll = bonusAmount > 0 && totalCalls >= 30;

  useEffect(() => {
    onUpdate({
      eligibleForRoll,
      estimatedBonus: bonusAmount,
      projectedCalls: totalCalls
    });
  }, [eligibleForRoll, bonusAmount, totalCalls, onUpdate]);

  const handleChange = (field: keyof CalculatorState, value: string) => {
    const num = parseFloat(value);
    setState(prev => ({ ...prev, [field]: isNaN(num) ? 0 : num }));
  };

  return (
    <div className="bg-slate-800 h-full border-t-4 border-slate-600 relative overflow-hidden">
      <div className="p-6">
          <div className="flex items-center mb-6 border-b border-slate-600 pb-4">
            <Target className="w-8 h-8 text-white mr-3" />
            <h3 className="text-2xl font-black uppercase text-white sports-font tracking-wide">Performance Calc</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase mb-1">Hours on the Floor</label>
              <input 
                type="number" 
                min="0"
                max="12"
                value={state.hoursWorked}
                onChange={(e) => handleChange('hoursWorked', e.target.value)}
                className="w-full bg-slate-900 border-2 border-slate-700 p-4 text-white text-3xl font-black focus:border-gold-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase mb-1">BCPH (Must be 5+)</label>
              <div className="relative">
                <input 
                    type="number" 
                    min="0"
                    max="20"
                    value={state.callsPerHour}
                    onChange={(e) => handleChange('callsPerHour', e.target.value)}
                    className={`w-full bg-slate-900 border-2 p-4 text-white text-3xl font-black outline-none transition-colors ${!eligibleBCPH ? 'border-urgent-red' : 'border-slate-700 focus:border-gold-500'}`}
                />
                {!eligibleBCPH && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-urgent-red">
                        <AlertTriangle />
                    </div>
                )}
              </div>
            </div>
          </div>
      </div>

      <div className="bg-slate-900 p-6 border-t border-slate-700">
          <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 border-l-4 border-slate-500">
                  <span className="block text-xs text-slate-400 uppercase font-bold">Total Calls</span>
                  <span className="block text-4xl font-black text-white">{totalCalls}</span>
              </div>
              <div className={`p-4 border-l-4 ${bonusAmount > 0 ? 'bg-green-900/20 border-green-500' : 'bg-slate-800 border-slate-500'}`}>
                  <span className="block text-xs text-slate-400 uppercase font-bold">Daily Bonus</span>
                  <span className={`block text-4xl font-black ${bonusAmount > 0 ? 'text-green-500' : 'text-slate-500'}`}>${bonusAmount}</span>
              </div>
          </div>
          
          <div className={`mt-4 text-center p-3 font-bold uppercase tracking-widest text-sm ${eligibleForRoll ? 'bg-gold-500 text-black' : 'bg-slate-800 text-slate-500'}`}>
              {eligibleForRoll ? 'QUALIFIED FOR DICE ROLL' : 'NOT QUALIFIED FOR POT'}
          </div>
      </div>
    </div>
  );
};

export default BonusCalculator;