/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Layers, Orbit, Sparkles, Terminal, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const apps = [
  {
    name: 'Teusk',
    url: 'https://teusk.vercel.app/',
    description: 'Explore the limitless possibilities and digital creativity.',
    icon: <Layers className="w-5 h-5 transition-colors duration-300" />,
    iconBgHover: 'group-hover:bg-indigo-50',
    iconTextHover: 'group-hover:text-indigo-600',
  },
  {
    name: 'Hizterm',
    url: 'https://hizterm.vercel.app/',
    description: 'Professional terminal experience and developer tools on the web.',
    icon: <Terminal className="w-5 h-5 transition-colors duration-300" />,
    iconBgHover: 'group-hover:bg-blue-50',
    iconTextHover: 'group-hover:text-blue-600',
  },
  {
    name: 'Kuantia',
    url: 'https://kuantia.vercel.app/',
    description: 'Quantum-level insights and advanced analytics for your data.',
    icon: <Orbit className="w-5 h-5 transition-colors duration-300" />,
    iconBgHover: 'group-hover:bg-emerald-50',
    iconTextHover: 'group-hover:text-emerald-600',
  },
  {
    name: 'Zinok',
    url: 'https://zinok.vercel.app/',
    description: 'Fast, reliable, and secure technical solutions.',
    icon: <Zap className="w-5 h-5 transition-colors duration-300" />,
    iconBgHover: 'group-hover:bg-amber-50',
    iconTextHover: 'group-hover:text-amber-600',
  },
  {
    name: 'Elio Tawny',
    url: 'https://elio-tawny.vercel.app/',
    description: 'Creative, dynamic, and aesthetic web experiences.',
    icon: <Sparkles className="w-5 h-5 transition-colors duration-300" />,
    iconBgHover: 'group-hover:bg-rose-50',
    iconTextHover: 'group-hover:text-rose-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <header className="w-full pt-16 pb-12 px-6 lg:px-20 flex flex-col md:flex-row md:justify-between md:items-end gap-6 max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4 max-w-2xl"
        >
          <h1 className="text-4xl font-light tracking-tight text-slate-900">
            Ecosystem Hub
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed tracking-wide">
            A central directory mapping all active projects and applications within your personal ecosystem. Select an environment to initiate launch.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 text-xs font-medium text-slate-400 pb-1"
        >
          <span className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            All systems active
          </span>
          <span className="h-4 w-[1px] bg-slate-200"></span>
          <span>v2.4.0</span>
        </motion.div>
      </header>

      <main className="flex-1 px-6 lg:px-20 pb-20 max-w-[1440px] w-full mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {apps.map((app) => (
            <motion.div key={app.name} variants={itemVariants} className="h-full">
                <div className="relative h-full">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-slate-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full min-h-[16rem] flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                  <div>
                    <div className={`w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${app.iconBgHover}`}>
                      <div className={`text-slate-600 transition-colors duration-300 ${app.iconTextHover}`}>
                        {app.icon}
                      </div>
                    </div>
                    <h2 className="text-xl font-medium tracking-tight text-slate-900">
                      {app.name}
                    </h2>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center justify-between">
                  <span className={`text-xs font-semibold text-slate-400 tracking-widest uppercase transition-colors duration-300 ${app.iconTextHover}`}>
                    Launch Instance
                  </span>
                  <div className={`flex items-center text-xs font-mono text-slate-400 opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${app.iconTextHover}`}>
                    <span className="truncate">{new URL(app.url).hostname}</span>
                    <ExternalLink className="ml-2 h-3 w-3 shrink-0" />
                  </div>
                </div>
              </a>
            </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="w-full py-8 px-6 lg:px-20 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 bg-white shrink-0 mt-auto">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Active Session</span>
            <span className="text-xs font-mono text-slate-600">USER_AUTH_OK</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Location</span>
            <span className="text-xs font-mono text-slate-600">EU-WEST-1</span>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-medium whitespace-nowrap">
          &copy; {new Date().getFullYear()} Portal Infrastructure
        </div>
      </footer>
    </div>
  );
}
