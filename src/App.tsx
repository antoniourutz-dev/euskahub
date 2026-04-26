/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const apps = [
  { name: 'Elio', url: 'https://elio-tawny.vercel.app/', hoverBg: 'bg-indigo-600' },
  { name: 'Kuantia', url: 'https://kuantia.vercel.app/', hoverBg: 'bg-amber-500' },
  { name: 'Hitzkideak', url: 'https://hitzkideak.vercel.app/', hoverBg: 'bg-purple-600' },
  { name: 'Zinok', url: 'https://zinok.vercel.app/', hoverBg: 'bg-rose-600' },
  { name: 'Teusk', url: 'https://teusk.vercel.app/', hoverBg: 'bg-blue-600' },
  { name: 'Hizterm', url: 'https://hizterm.vercel.app/', hoverBg: 'bg-emerald-600' },
  { name: 'Hitzapasa', url: 'https://hitzapasa.vercel.app/', hoverBg: 'bg-cyan-600' },
  { name: 'Dominoa', url: 'https://dominoa.vercel.app/', hoverBg: 'bg-orange-600' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50, damping: 20 },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-black font-sans selection:bg-black selection:text-white flex flex-col overflow-x-hidden relative">
      {/* Ambient background colors */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-rose-100 blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-emerald-100 blur-[120px]" />
        <div className="absolute middle-0 left-[20%] w-[35%] h-[35%] rounded-full bg-amber-100 blur-[120px]" />
      </div>

      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference invert uppercase">
        <div className="text-[10px] font-bold tracking-[0.4em]">Euskahub</div>
        <div className="text-[10px] font-mono tracking-widest opacity-60">Status: Active</div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col pt-32 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              variants={titleVariants}
              className="border-b border-black/5 last:border-0"
            >
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative py-4 md:py-8 px-8 flex items-center justify-between transition-all duration-500 overflow-hidden"
              >
                {/* Background flow effect on hover - Using app color */}
                <div className={`absolute inset-0 ${app.hoverBg} translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0`} />
                
                <span className="relative z-10 text-5xl md:text-[8vw] font-display uppercase leading-none tracking-tighter group-hover:text-white transition-colors duration-500 block">
                  {app.name}
                </span>

                <div className="relative z-10 flex flex-col items-end gap-2 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-700 delay-100">
                  <ArrowUpRight className="w-8 h-8 md:w-14 md:h-14 text-white" strokeWidth={1} />
                  <span className="text-[10px] md:text-xs font-mono text-white/50 tracking-tighter uppercase whitespace-nowrap">
                    {new URL(app.url).hostname}
                  </span>
                </div>

                {/* Index Number */}
                <span className="absolute left-4 top-4 text-[10px] font-mono text-black/30 group-hover:text-white/30 transition-colors z-10">
                  0{index + 1}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full p-8 flex justify-between items-end mix-blend-difference invert z-50 pointer-events-none">
        {/* Decorative text removed */}
      </footer>
    </div>
  );
}
