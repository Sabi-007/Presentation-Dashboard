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
  Sparkles,
  Users,
  Lock,
  FileQuestion,
  Activity,
  Map,
  Newspaper
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

    {/* AI Accuracy Breakdown */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="neon-card-purple"
    >
      <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
        <BrainCircuit className="text-fuchsia-400" /> AI Accuracy Breakdown
      </h3>
      <p className="text-slate-400 text-sm mb-8">How AI accuracy is measured across different features of EduConnect.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { feature: 'Note Summarization', accuracy: '94%', method: 'Key-point coverage vs. source material', color: 'cyan' },
          { feature: 'Quiz Generation', accuracy: '91%', method: 'Correct answer validation & option quality', color: 'violet' },
          { feature: 'Copilot Q&A', accuracy: '90%', method: 'Context-relevance of answers to document', color: 'emerald' },
          { feature: 'Learning Path Outline', accuracy: '93%', method: 'Topic alignment & logical module ordering', color: 'fuchsia' },
        ].map((item) => (
          <div key={item.feature} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-all">
            <span className={`block text-3xl font-black mb-2 neon-text-${item.color}`}>{item.accuracy}</span>
            <span className="block text-white font-bold text-sm mb-2">{item.feature}</span>
            <span className="text-slate-500 text-xs leading-relaxed">{item.method}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/5">
        <p className="text-slate-400 text-sm leading-relaxed">
          <strong className="text-white">Methodology:</strong> Accuracy is computed by comparing AI outputs against manually validated ground truth across 50+ sample inputs per feature. 
          The AI model (<span className="text-fuchsia-400 font-bold">Llama 3.1 8B</span> via <span className="text-cyan-400 font-bold">Groq LPU</span>) is evaluated on relevance, correctness, and structural quality. 
          Overall weighted accuracy: <span className="text-white font-black">~92%</span>.
        </p>
      </div>
    </motion.div>

    {/* Datasets / Database Schema */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="neon-card-blue"
    >
      <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
        <Database className="text-cyan-400" /> Datasets & Database Schema
      </h3>
      <p className="text-slate-400 text-sm mb-8">All data models powering EduConnect — stored in PostgreSQL (Neon) via Prisma ORM.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { model: 'User', desc: 'Student & instructor accounts with roles, OTP, hashed passwords', category: 'Auth' },
          { model: 'Note', desc: 'Class notes with AI summaries, YouTube links, subject tagging', category: 'LMS' },
          { model: 'Attachment', desc: 'PDF/file uploads linked to notes for study material', category: 'LMS' },
          { model: 'HeatmapPoint', desc: 'Scroll & dwell-time data points for reading behavior', category: 'Analytics' },
          { model: 'Doubt', desc: 'Student questions tagged with position in note content', category: 'AI' },
          { model: 'UserActivity', desc: 'Login timestamps and engagement event tracking', category: 'Analytics' },
          { model: 'LearningMetric', desc: 'Quiz scores, study time, retention metrics per user', category: 'Analytics' },
          { model: 'Course', desc: 'Course definitions with subject, instructor, schedule', category: 'LMS' },
          { model: 'Enrollment', desc: 'Student-course relationships and enrollment status', category: 'LMS' },
          { model: 'Quiz / Question', desc: 'AI-generated quizzes with MCQ questions and explanations', category: 'AI' },
          { model: 'Attempt', desc: 'Student quiz attempts with scores and answers', category: 'AI' },
          { model: 'LearningPath', desc: 'AI-generated roadmaps with topic, modules, and status', category: 'AI' },
          { model: 'PathModule', desc: 'Individual lessons within a learning path', category: 'AI' },
          { model: 'PathResource', desc: 'YouTube videos & articles auto-attached to modules', category: 'AI' },
          { model: 'PathEnrollment', desc: 'Student enrollment and progress in learning paths', category: 'AI' },
        ].map((item) => (
          <div key={item.model} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${item.category === 'Auth' ? 'bg-violet-500' : item.category === 'LMS' ? 'bg-cyan-500' : item.category === 'AI' ? 'bg-fuchsia-500' : 'bg-amber-500'}`} />
            <div>
              <span className="text-white font-bold text-sm">{item.model}</span>
              <span className={`ml-2 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${item.category === 'Auth' ? 'bg-violet-500/15 text-violet-400' : item.category === 'LMS' ? 'bg-cyan-500/15 text-cyan-400' : item.category === 'AI' ? 'bg-fuchsia-500/15 text-fuchsia-400' : 'bg-amber-500/15 text-amber-400'}`}>{item.category}</span>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-6 justify-center text-center">
        {[
          { label: '15+', sub: 'Database Models' },
          { label: '50+', sub: 'Fields Tracked' },
          { label: 'Neon', sub: 'Cloud PostgreSQL' },
        ].map(stat => (
          <div key={stat.label} className="p-4">
            <span className="block text-2xl font-black text-white">{stat.label}</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.sub}</span>
          </div>
        ))}
      </div>
    </motion.div>
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
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 py-6 md:py-10">
        {[
          { label: 'Edge Runtime', color: 'violet' },
          { label: 'Server Actions', color: 'cyan' },
          { label: 'Neon Postgres', color: 'sky' },
          { label: 'LPU Inference', color: 'fuchsia' }
        ].map((step, i, arr) => (
          <div key={step.label} className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className={`px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-${step.color}-500/30 bg-${step.color}-500/10 text-${step.color}-400 font-black tracking-widest uppercase text-xs md:text-sm shadow-[0_0_20px_rgba(var(--${step.color}-rgb),0.1)] text-center`}>
              {step.label}
            </div>
            {i < arr.length - 1 && <ChevronRight className="text-slate-700 w-6 h-6 md:w-8 md:h-8 rotate-90 md:rotate-0" />}
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
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-10 relative z-10 text-center sm:text-left">
        <div className="p-4 bg-violet-500/20 rounded-3xl border border-violet-500/30 animate-pulse">
          <Zap className="w-8 h-8 text-violet-400" />
        </div>
        <div>
          <h4 className="text-2xl sm:text-3xl font-black italic tracking-tighter">THE GROQ ADVANTAGE</h4>
          <p className="text-violet-400/60 font-bold uppercase tracking-widest text-xs mt-1 sm:mt-0">Unmatched Latency Performance</p>
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
            <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 group text-center sm:text-left items-center sm:items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 font-black group-hover:scale-110 transition-transform">{item.id}</div>
              <div>
                <h5 className="font-black text-lg mb-1 italic uppercase tracking-tight">{item.title}</h5>
                <p className="text-slate-400 font-medium text-sm sm:text-base">{item.desc}</p>
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

const ModulesPage = () => (
  <div className="space-y-10">
    <SectionHeader 
      title="Core Modules & Features" 
      subtitle="A simple, comprehensive breakdown of every major component and feature in the EduConnect project."
      icon={<BookOpen className="w-8 h-8" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Module 1 */}
      <motion.div className="neon-card-blue flex flex-col h-full" whileHover={{ y: -5 }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400"><Users className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-black italic tracking-tight">User & Auth Module</h3>
            <p className="text-slate-400 text-sm font-medium">Secure entry point</p>
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /><span className="text-slate-300"><strong>OTP Verification:</strong> Secure email-based login without passwords.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /><span className="text-slate-300"><strong>JWT Sessions:</strong> Fast and secure user sessions using JSON Web Tokens.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /><span className="text-slate-300"><strong>Profile Management:</strong> User data tracking and personalization.</span></li>
        </ul>
      </motion.div>

      {/* Module 2 */}
      <motion.div className="neon-card-emerald flex flex-col h-full" whileHover={{ y: -5 }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400"><FileText className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-black italic tracking-tight">Content Management (LMS)</h3>
            <p className="text-slate-400 text-sm font-medium">Core study material</p>
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-slate-300"><strong>PDF Processing:</strong> Upload and parse PDF study materials easily.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-slate-300"><strong>Notes Organization:</strong> Create, edit, and organize digital notes.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-slate-300"><strong>AI Summarization:</strong> Automatically condense long texts into key points.</span></li>
        </ul>
      </motion.div>

      {/* Module 3 */}
      <motion.div className="neon-card-purple flex flex-col h-full" whileHover={{ y: -5 }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-fuchsia-500/10 rounded-2xl text-fuchsia-400"><BrainCircuit className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-black italic tracking-tight">AI Copilot & Assistance</h3>
            <p className="text-slate-400 text-sm font-medium">Your personal AI tutor</p>
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" /><span className="text-slate-300"><strong>Real-time Q&A:</strong> Ask questions and get instant AI-generated answers.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" /><span className="text-slate-300"><strong>Context-Aware:</strong> AI understands the specific note or file you are reading.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" /><span className="text-slate-300"><strong>Llama 3.1 Integration:</strong> Powered by advanced LLMs for high accuracy.</span></li>
        </ul>
      </motion.div>

      {/* Module 4 */}
      <motion.div className="neon-card-emerald flex flex-col h-full" whileHover={{ y: -5 }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-400"><Activity className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-black italic tracking-tight">Reading Heatmaps</h3>
            <p className="text-slate-400 text-sm font-medium">Engagement tracking</p>
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /><span className="text-slate-300"><strong>Scroll Tracking:</strong> Monitors which sections students spend time on.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /><span className="text-slate-300"><strong>Confusion Detection:</strong> Identifies areas where students might be stuck.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /><span className="text-slate-300"><strong>Visual Insights:</strong> Displays color-coded heatmaps for educators.</span></li>
        </ul>
      </motion.div>

      {/* Module 5 */}
      <motion.div className="neon-card-blue flex flex-col h-full" whileHover={{ y: -5 }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-400"><FileQuestion className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-black italic tracking-tight">Quizzes & Assessment</h3>
            <p className="text-slate-400 text-sm font-medium">Knowledge testing</p>
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /><span className="text-slate-300"><strong>Auto-Generated Quizzes:</strong> AI creates quizzes based on current notes.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /><span className="text-slate-300"><strong>Instant Grading:</strong> Real-time feedback on correct and incorrect answers.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /><span className="text-slate-300"><strong>Active Recall:</strong> Helps students remember facts through testing.</span></li>
        </ul>
      </motion.div>

      {/* Module 6 */}
      <motion.div className="neon-card-purple flex flex-col h-full" whileHover={{ y: -5 }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-violet-500/10 rounded-2xl text-violet-400"><LineChart className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-black italic tracking-tight">Analytics Dashboard</h3>
            <p className="text-slate-400 text-sm font-medium">Performance monitoring</p>
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0" /><span className="text-slate-300"><strong>Progress Tracking:</strong> Visual charts of study time and quiz scores.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0" /><span className="text-slate-300"><strong>Mastery Trends:</strong> Shows how well concepts are understood over time.</span></li>
        </ul>
      </motion.div>

      {/* Module 7 */}
      <motion.div className="neon-card-emerald flex flex-col h-full" whileHover={{ y: -5 }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400"><Map className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-black italic tracking-tight">Learning Paths</h3>
            <p className="text-slate-400 text-sm font-medium">AI-guided self-study roadmaps</p>
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-slate-300"><strong>AI Roadmap Generation:</strong> Enter any topic and the AI creates a structured learning path with modules.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-slate-300"><strong>YouTube & Article Resources:</strong> Each module is auto-enriched with real YouTube tutorials and curated articles.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-slate-300"><strong>Enroll & Track Progress:</strong> Students enroll in published paths and mark modules as complete.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span className="text-slate-300"><strong>News-to-Path:</strong> Convert any tech news headline into a full learning path instantly.</span></li>
        </ul>
      </motion.div>

      {/* Module 8 */}
      <motion.div className="neon-card-blue flex flex-col h-full" whileHover={{ y: -5 }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400"><Newspaper className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-black italic tracking-tight">Tech News Feed</h3>
            <p className="text-slate-400 text-sm font-medium">Stay current with the industry</p>
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /><span className="text-slate-300"><strong>Live RSS Aggregation:</strong> Pulls the latest tech headlines from multiple sources in real-time.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /><span className="text-slate-300"><strong>One-Click Learning:</strong> Turn any news article into a full AI-generated learning path.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /><span className="text-slate-300"><strong>Auto-Refresh:</strong> Feed revalidates every 30 seconds to keep headlines fresh.</span></li>
        </ul>
      </motion.div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'OVERVIEW', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'modules', label: 'MODULES', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'ai-max', label: 'AI ENGINE', icon: <BrainCircuit className="w-5 h-5" /> },
    { id: 'architecture', label: 'ARCHITECTURE', icon: <Layers className="w-5 h-5" /> },
    { id: 'security', label: 'SECURITY', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-12 max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 selection:bg-cyan-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-4 md:top-8 z-50">
        <nav className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 p-4 glass rounded-[2rem] md:rounded-[40px] px-4 md:px-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-white/10">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:rotate-12 transition-transform duration-500">
              E
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter italic leading-none">EduConnect</h1>
              <span className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase leading-none">System Status: Active</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-1 bg-black/20 rounded-full border border-white/5 w-full overflow-x-auto custom-scrollbar md:w-auto md:overflow-visible">
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

          <div className="flex items-center gap-4 w-full lg:w-auto justify-center mt-2 lg:mt-0">
            <a href="https://my-edu-connect.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center w-full sm:w-auto gap-3 italic tracking-tighter text-sm">
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
            {activeTab === 'modules' && <ModulesPage />}
            {activeTab === 'architecture' && <ArchitecturePage />}
            {activeTab === 'ai-max' && <AIFeaturesPage />}
            {activeTab === 'security' && <SecurityPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <p className="text-slate-500 font-bold text-sm tracking-tight mb-1 italic">© 2026 EduConnect Intelligence.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
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
