import React from 'react';
import { Ticket, ChevronsRight, Clock, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 border-b-4 border-gold-500">
      {/* Motion Blur Background Effect */}
      <div className="absolute inset-0 speed-lines opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-900/80 to-black z-0"></div>
      
      {/* Floating Dollar Signs - Simulating Steam */}
      <div className="absolute top-10 right-10 text-6xl opacity-20 animate-bounce text-green-500 font-bold select-none">$</div>
      <div className="absolute top-20 right-32 text-4xl opacity-10 animate-pulse text-gold-500 font-bold select-none">$</div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-10 -rotate-12 text-white font-bold select-none">🚂</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        
        {/* Top Headline */}
        <div className="text-center mb-8">
           <h1 className="text-5xl md:text-7xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-[0_4px_0_rgba(0,0,0,1)] transform -skew-x-12">
             🚂 ALL ABOARD THE MONEY TRAIN! 🚂
           </h1>
           <p className="mt-2 text-xl md:text-2xl text-urgent-red font-black tracking-widest uppercase bg-black/50 inline-block px-4 py-1 skew-x-12">
             Dec 6 & 7 • Final AEP Weekend
           </p>
        </div>

        {/* Centerpiece: Golden Ticket */}
        <div className="flex justify-center mb-12">
            <div className="relative bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-slate-900 w-full max-w-2xl rounded-lg shadow-[0_0_50px_rgba(234,179,8,0.4)] transform rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Perforations */}
                <div className="absolute left-0 top-0 bottom-0 w-4 ticket-perforations"></div>
                <div className="absolute right-0 top-0 bottom-0 w-4 ticket-perforations rotate-180"></div>
                
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-y-2 border-dashed border-slate-900/30 m-2">
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-2">
                             <Ticket className="w-8 h-8 mr-2 opacity-80" />
                             <span className="font-bold tracking-widest opacity-70">ADMIT ONE AGENT</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">Double<br/>Commission</h2>
                        <div className="inline-block mt-2 bg-slate-900 text-gold-400 px-3 py-1 font-bold rounded uppercase text-sm">
                            Valid Dec 6 & 7 Only
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                         <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-slate-900 rounded-full flex items-center justify-center bg-transparent relative">
                            <div className="absolute inset-1 border-2 border-dashed border-slate-900 rounded-full animate-spin-slow"></div>
                            <div className="text-center">
                                <span className="block text-3xl md:text-4xl font-black">2X</span>
                                <span className="block text-xs font-bold uppercase">Multiplier</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* The Stations (Timeline) */}
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative">
                {/* Track Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-700 -z-10"></div>
                
                {/* Station 1 */}
                <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-green-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)] mb-3">
                        <Clock className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="text-center">
                        <span className="block text-slate-400 text-sm font-bold uppercase">Station 1 (5 Hrs)</span>
                        <span className="block text-2xl font-black text-white">$50 BONUS</span>
                    </div>
                </div>

                <ChevronsRight className="md:hidden text-slate-600 w-8 h-8 transform rotate-90" />

                {/* Station 2 */}
                <div className="flex flex-col items-center group">
                     <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-gold-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(234,179,8,0.5)] mb-3">
                        <div className="text-center">
                             <span className="block text-xs font-bold text-gold-500">8 HRS</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <span className="block text-slate-400 text-sm font-bold uppercase">Station 2</span>
                        <span className="block text-3xl font-black text-gold-400">$100 BONUS</span>
                    </div>
                </div>

                <ChevronsRight className="md:hidden text-slate-600 w-8 h-8 transform rotate-90" />

                {/* Destination */}
                <div className="flex flex-col items-center group">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-urgent-red to-red-700 border-4 border-white flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,0,60,0.6)] animate-pulse mb-3">
                         <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                        <span className="block text-slate-400 text-sm font-bold uppercase">Destination</span>
                        <span className="block text-4xl font-black text-white brand-font">THE JACKPOT</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-slate-400 font-mono tracking-tighter">PHONES = PAYCHECKS. DON'T MISS THE RIDE.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;