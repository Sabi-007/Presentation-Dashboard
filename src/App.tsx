import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Layers, 
  BrainCircuit, 
  LineChart,
  Zap,
  BookOpen,
  FileText,
  MousePointer2,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Globe,
  Sparkles
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie,
  LabelList
} from 'recharts';

// --- Data ---

const FEATURE_COMPLETION = [
  { name: 'Auth (JWT/OTP)', value: 100 },
  { name: 'AI Summaries', value: 100 },
  { name: 'LMS Core', value: 95 },
  { name: 'AI Quizzes', value: 90 },
  { name: 'Heatmaps', value: 85 },
  { name: 'Analytics', value: 80 },
];

const SCHEMA_DISTRIBUTION = [
  { name: 'Users/Auth', value: 3, color: '#06b6d4' },
  { name: 'LMS Core', value: 4, color: '#8b5cf6' },
  { name: 'AI/Learning', value: 6, color: '#f59e0b' },
];

const TECH_STACK = [
  { name: 'Next.js 16', icon: <Globe className="w-5 h-5" />, category: 'Framework', color: 'violet' },
  { name: 'React 19', icon: <Layers className="w-5 h-5" />, category: 'Library', color: 'cyan' },
  { name: 'PostgreSQL', icon: <Database className="w-5 h-5" />, category: 'Database', color: 'cyan' },
  { name: 'Prisma 5.10', icon: <Database className="w-5 h-5" />, category: 'ORM', color: 'amber' },
  { name: 'Llama 3.1 8B', icon: <BrainCircuit className="w-5 h-5" />, category: 'AI', color: 'fuchsia' },
  { name: 'Groq API', icon: <Cpu className="w-5 h-5" />, category: 'Inference', color: 'cyan' },
  { name: 'Tailwind v4', icon: <LayoutDashboard className="w-5 h-5" />, category: 'Styling', color: 'violet' },
];

// --- Components ---

const StatCard = ({ title, value, icon, color }: any) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="stat-card group"
  >
    <div className={`p-4 rounded-2xl bg-${color}-500/10 text-${color}-400 mb-2 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(var(--${color}-rgb),0.3)]`}>
      {icon}
    </div>
    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{title}</span>
    <span className={`text-3xl font-black neon-text-${color === 'emerald' ? 'emerald' : 'cyan'}`}>{value}</span>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, icon }: any) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-2">
      {icon && <div className="p-2 rounded-lg bg-white/5 text-cyan-400">{icon}</div>}
      <h2 className="text-4xl font-black neon-gradient-text tracking-tight italic">{title}</h2>
    </div>
    <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>
  </div>
);

// --- Pages ---

const DashboardHome = () => (
  <div className="space-y-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <StatCard title="DB Models" value="13" icon={<Database />} color="violet" />
      <StatCard title="AI Latency" value={"< 100ms"} icon={<Zap />} color="cyan" />
      <StatCard title="Server Actions" value="40+" icon={<Cpu />} color="amber" />
      <StatCard title="AI Accuracy" value="92%" icon={<BrainCircuit />} color="fuchsia" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="neon-card-emerald"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Sparkles className="text-cyan-400 animate-pulse" /> Mission Control
        </h3>
        <p className="text-slate-300 leading-relaxed text-lg mb-8">
          EduConnect isn't just an LMS; it's a <span className="text-cyan-400 font-bold">cognitive accelerator</span>. 
          By bridging LLM intelligence with pedagogical frameworks, we've built a system that learns <span className="italic underline decoration-cyan-500/50">with</span> the student.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Automated Note Summarization',
            'AI-Generated Quizzes',
            'Doubt Detection Engine',
            'Active Recall Loops'
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group">
              <CheckCircle2 className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="neon-card-blue h-[450px]"
      >
        <h3 className="text-2xl font-bold mb-6">Feature Velocity</h3>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={FEATURE_COMPLETION} layout="vertical" margin={{ left: 20, right: 30 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} width={120} tickLine={false} axisLine={false} />
            <RechartsTooltip 
              cursor={{ fill: 'rgba(255,255,255,0.03)' }}
              contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)' }}
              itemStyle={{ color: '#cbd5e1', fontWeight: 600 }}
              labelStyle={{ color: '#f8fafc', fontWeight: 800, marginBottom: '4px' }}
            />
            <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={24}>
              {FEATURE_COMPLETION.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.value === 100 ? '#06b6d4' : '#8b5cf6'} fillOpacity={0.8} />
              ))}
              <LabelList dataKey="value" position="right" fill="#e2e8f0" fontSize={12} fontWeight={900} formatter={(val: any) => `${val}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  </div>
);

const ArchitecturePage = () => (
  <div className="space-y-10">
    <SectionHeader 
      title="The Engine Room" 
      subtitle="A high-performance stack optimized for sub-second AI inference and real-time reactivity."
      icon={<Layers className="w-8 h-8" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="neon-card-blue lg:col-span-2">
        <h3 className="text-2xl font-bold mb-8">Technology Ecosystem</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {TECH_STACK.map((tech) => (
            <motion.div 
              key={tech.name} 
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center p-6 rounded-3xl bg-slate-800/30 border border-white/5 hover:border-${tech.color}-500/50 transition-all cursor-default shadow-sm`}
            >
              <div className={`text-${tech.color}-400 mb-3 p-3 rounded-2xl bg-${tech.color}-500/10`}>{tech.icon}</div>
              <span className="font-bold text-base mb-1">{tech.name}</span>
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="neon-card-purple">
        <h3 className="text-2xl font-bold mb-8">Data Topology</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={SCHEMA_DISTRIBUTION}
              innerRadius={70}
              outerRadius={90}
              paddingAngle={8}
              dataKey="value"
              stroke="none"
            >
              {SCHEMA_DISTRIBUTION.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
              ))}
            </Pie>
            <RechartsTooltip 
              contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}
              itemStyle={{ color: '#cbd5e1', fontWeight: 600 }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="space-y-4 mt-6">
          {SCHEMA_DISTRIBUTION.map(item => (
            <div key={item.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ background: item.color }} />
                <span className="text-slate-400 font-bold text-sm uppercase tracking-wider">{item.name}</span>
              </div>
              <span className="font-black text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="neon-card-emerald">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Cpu className="text-cyan-400" /> Pipeline Flow
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-6 py-10">
        {[
          { label: 'Edge Runtime', color: 'violet' },
          { label: 'Server Actions', color: 'cyan' },
          { label: 'Neon Postgres', color: 'sky' },
          { label: 'LPU Inference', color: 'fuchsia' }
        ].map((step, i, arr) => (
          <div key={step.label} className="flex items-center gap-6">
            <div className={`px-8 py-4 rounded-2xl border border-${step.color}-500/30 bg-${step.color}-500/10 text-${step.color}-400 font-black tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(var(--${step.color}-rgb),0.1)]`}>
              {step.label}
            </div>
            {i < arr.length - 1 && <ChevronRight className="text-slate-700 w-8 h-8" />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AIFeaturesPage = () => (
  <div className="space-y-10">
    <SectionHeader 
      title="AI Core: Max-1" 
      subtitle="Leveraging Llama 3.1 8B on Groq LPUs for near-instantaneous cognitive processing."
      icon={<BrainCircuit className="w-8 h-8" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'Semantic Summaries', icon: <FileText />, desc: 'Instant distillation of lecture notes into structured insights.' },
        { title: 'Dynamic Quizzing', icon: <Zap />, desc: 'Adaptive assessment generation based on student performance.' },
        { title: 'Confusion Mapping', icon: <MousePointer2 />, desc: 'Real-time identification of learning gaps via UX heatmaps.' },
        { title: 'Active Recall', icon: <Layers />, desc: 'Automated flashcard generation from study material.' },
        { title: 'Mastery Trends', icon: <LineChart />, desc: 'Predictive analytics on concept retention and progress.' },
        { title: 'Neural Analogies', icon: <Sparkles />, desc: 'Simplifying complex terms with relatable real-world examples.' },
      ].map((feat, i) => (
        <motion.div 
          key={feat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="neon-card-emerald group"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 transition-all group-hover:scale-110 group-hover:rotate-3">
            {feat.icon}
          </div>
          <h4 className="text-xl font-black mb-3 italic tracking-tight">{feat.title}</h4>
          <p className="text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
        </motion.div>
      ))}
    </div>

    <div className="neon-card-blue bg-violet-500/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
      <div className="flex items-center gap-6 mb-10 relative z-10">
        <div className="p-4 bg-violet-500/20 rounded-3xl border border-violet-500/30 animate-pulse">
          <Zap className="w-8 h-8 text-violet-400" />
        </div>
        <div>
          <h4 className="text-3xl font-black italic tracking-tighter">THE GROQ ADVANTAGE</h4>
          <p className="text-violet-400/60 font-bold uppercase tracking-widest text-xs">Unmatched Latency Performance</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
        {[
          { label: '800+', sub: 'Tokens / Second', color: 'cyan' },
          { label: '< 100ms', sub: 'First Token Latency', color: 'emerald' },
          { label: '100%', sub: 'Reliability Rate', color: 'violet' }
        ].map(stat => (
          <div key={stat.label} className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-md">
            <span className={`block text-5xl font-black mb-2 neon-text-${stat.color}`}>{stat.label}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SecurityPage = () => (
  <div className="space-y-10">
    <SectionHeader 
      title="Hardened Shield" 
      subtitle="Multi-layer security architecture protecting institutional data integrity."
      icon={<ShieldCheck className="w-8 h-8" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="neon-card-purple">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <ShieldCheck className="text-fuchsia-400" /> Authentication Pipeline
        </h3>
        <div className="space-y-8">
          {[
            { id: '01', title: 'Domain Guard', desc: 'Strict institutional restriction using email domain validation.' },
            { id: '02', title: 'Stateful OTP', desc: 'Rate-limited 6-digit verification with session-bound tokens.' },
            { id: '03', title: 'HTTP-Only Cookies', desc: 'Secure JWT delivery with CSRF/XSS mitigation strategies.' }
          ].map((item) => (
            <div key={item.id} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 font-black group-hover:scale-110 transition-transform">{item.id}</div>
              <div>
                <h5 className="font-black text-lg mb-1 italic uppercase tracking-tight">{item.title}</h5>
                <p className="text-slate-400 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="neon-card-blue">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Database className="text-violet-400" /> Data Sovereignty
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {[
            'Bcrypt Password Hashing (Cost Factor 10)',
            'Prisma-enforced Referential Integrity',
            'PostgreSQL Cascade Policies',
            'Connection Pooling via Neon Proxy'
          ].map(policy => (
            <div key={policy} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              <span className="text-slate-300 font-bold text-sm tracking-wide">{policy}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'DASHBOARD', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'architecture', label: 'ARCHITECTURE', icon: <Layers className="w-5 h-5" /> },
    { id: 'ai-max', label: 'AI ENGINE', icon: <BrainCircuit className="w-5 h-5" /> },
    { id: 'security', label: 'SECURITY', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto flex flex-col gap-12 selection:bg-cyan-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-8 z-50">
        <nav className="flex flex-col lg:flex-row items-center justify-between gap-6 p-4 glass rounded-[40px] px-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-white/10">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:rotate-12 transition-transform duration-500">
              E
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter italic leading-none">EduConnect</h1>
              <span className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase leading-none">System Status: Active</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-1 bg-black/20 rounded-full border border-white/5">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? 'nav-item-active' : 'nav-item'}
              >
                <div className="flex items-center gap-2">
                  {tab.icon}
                  <span className="hidden sm:inline italic text-xs tracking-tighter font-black">{tab.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://my-edu-connect.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-3 italic tracking-tighter text-sm">
              LAUNCH <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            {activeTab === 'dashboard' && <DashboardHome />}
            {activeTab === 'architecture' && <ArchitecturePage />}
            {activeTab === 'ai-max' && <AIFeaturesPage />}
            {activeTab === 'security' && <SecurityPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="pt-20 pb-10 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <p className="text-slate-500 font-bold text-sm tracking-tight mb-1 italic">© 2026 EduConnect Intelligence.</p>
            <p className="text-slate-600 text-xs font-medium max-w-sm leading-relaxed">
              Synthesized for the Final Year Viva-Voce. Engineered for excellence.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            {[
              { label: 'Next.js 16', icon: <Globe className="w-4 h-4" /> },
              { label: 'Groq AI', icon: <Cpu className="w-4 h-4" /> },
              { label: 'Neon DB', icon: <Database className="w-4 h-4" /> }
            ].map(tech => (
              <div key={tech.label} className="flex items-center gap-2 group cursor-default">
                <div className="text-cyan-500 group-hover:scale-125 transition-transform">{tech.icon}</div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
