import React, { useState } from 'react';
import { Sidebar, Header, Card, Button } from './components/UI';
import { MOCK_CLASSROOMS, MOCK_QUIZZES, MOCK_SUBMISSIONS, MOCK_USER } from './constants';
import { Classroom, Quiz, Submission } from './types';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// Views
const LoginView = ({ onLogin }: { onLogin: () => void }) => (
  <div className="flex min-h-screen w-full flex-col lg:flex-row overflow-hidden bg-background-dark">
    <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 text-white">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white">auto_awesome</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight">SmartLearn</h2>
        </div>
      </div>
      <div className="relative z-10 max-w-lg">
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/30 mb-6">
            New: AI Study Companion v2.0
          </span>
          <h1 className="text-5xl font-black leading-tight tracking-tight text-white mb-6">
            AI-powered <span className="text-primary">personalized</span> learning
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Secure access to your intelligent study companion. Empowering students with real-time feedback and adaptive content.
          </p>
          <div className="flex items-center gap-4 py-4 border-t border-slate-700/50">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img 
                  key={i}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0F172A]" 
                  src={`https://i.pravatar.cc/150?u=${i}`} 
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-400">Trusted by 500+ institutions worldwide</p>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full h-64 rounded-xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-violet-900/60 backdrop-blur-sm border border-white/10 rounded-xl"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4 p-8 w-full opacity-60">
            <div className="h-12 bg-white/10 rounded-lg"></div>
            <div className="h-12 bg-white/20 rounded-lg col-span-2"></div>
            <div className="h-12 bg-white/10 rounded-lg"></div>
            <div className="h-24 bg-white/20 rounded-lg col-span-2"></div>
            <div className="h-24 bg-white/10 rounded-lg col-span-2"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-6xl text-white/40">school</span>
        </div>
      </div>
    </div>
    <div className="flex flex-1 flex-col items-center justify-center p-6 sm:p-12 lg:p-24 bg-[#111827]">
      <div className="w-full max-w-md">
        <div className="lg:hidden flex justify-center mb-8">
          <div className="flex items-center gap-2 text-white">
            <div className="size-8 flex items-center justify-center bg-primary rounded-lg">
              <span className="material-symbols-outlined text-white">auto_awesome</span>
            </div>
            <h2 className="text-xl font-bold">SmartLearn</h2>
          </div>
        </div>
        <Card className="p-8">
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">Welcome back</h2>
            <p className="text-slate-400 mt-2">Enter your credentials to access your dashboard</p>
          </div>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">I am a...</label>
              <div className="relative">
                <select className="w-full appearance-none bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-primary focus:border-primary block p-3 pr-10 outline-none">
                  <option value="student">Student</option>
                  <option value="teacher">Teacher / Educator</option>
                  <option value="admin">Administrator</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                  <span className="material-symbols-outlined text-sm">unfold_more</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </div>
                <input className="bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3 placeholder-slate-500 outline-none" placeholder="name@institution.edu" required type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-300">Password</label>
                <a className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors" href="#">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                  <span className="material-symbols-outlined text-sm">lock</span>
                </div>
                <input className="bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3 placeholder-slate-500 outline-none" placeholder="••••••••" required type="password" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-slate-500 hover:text-slate-300">
                  <span className="material-symbols-outlined text-sm">visibility_off</span>
                </div>
              </div>
            </div>
            <Button className="w-full py-3.5" type="submit">Sign in to Account</Button>
          </form>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#111827] px-2 text-slate-500 font-medium">New to SmartLearn?</span>
            </div>
          </div>
          <Button variant="outline" className="w-full py-3">Create institutional account</Button>
        </Card>
        <div className="mt-8 flex justify-center gap-6 text-xs text-slate-500 font-medium">
          <a className="hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-slate-300 transition-colors" href="#">Support</a>
        </div>
      </div>
    </div>
  </div>
);

const DashboardView = () => {
  const performanceData = [
    { name: 'JAN', score: 65, avg: 60 },
    { name: 'FEB', score: 75, avg: 65 },
    { name: 'MAR', score: 68, avg: 62 },
    { name: 'APR', score: 85, avg: 70 },
    { name: 'MAY', score: 92, avg: 75 },
    { name: 'JUN', score: 88, avg: 78 },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">Dashboard</h2>
          <p className="text-slate-400 text-lg">Welcome back, Professor Sarah</p>
        </div>
        <Button>
          <span className="material-symbols-outlined text-lg">add</span>
          New Assessment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Classes', value: '12', trend: '+2%', icon: 'class', color: 'blue' },
          { label: 'Total Students', value: '450', trend: 'Steady', icon: 'group', color: 'purple' },
          { label: 'Active Quizzes', value: '8', trend: '+4%', icon: 'quiz', color: 'orange' },
          { label: 'Avg Performance', value: '78%', trend: '+12%', icon: 'analytics', color: 'emerald' },
        ].map((stat, i) => (
          <Card key={i} className="relative overflow-hidden group">
            <div className={cn("absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-primary")}>
              <span className="material-symbols-outlined text-6xl">{stat.icon}</span>
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2 rounded-lg bg-opacity-20", `bg-${stat.color}-500`, `text-${stat.color}-400`)}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">{stat.trend}</span>
            </div>
            <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
            <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Class Performance Overview</h3>
              <p className="text-slate-400 text-sm">Average score trends over the last 6 months</p>
            </div>
            <div className="bg-slate-800/50 px-3 py-1 rounded-lg text-xs font-medium text-slate-400 border border-slate-700">
              Academic Year 2024
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis dataKey="name" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid #1E293B', borderRadius: '8px' }}
                  itemStyle={{ color: '#5048e5' }}
                />
                <Bar dataKey="score" fill="#5048e5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="avg" fill="#1E293B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="space-y-8">
          <Card>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              AI Insights
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Recommendation</p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Students in <span className="font-bold">Physics 101</span> are struggling with <span className="text-orange-400">Quantum Mechanics</span>. Consider generating a targeted review quiz.
                </p>
                <button className="mt-4 text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  Generate Quiz now <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Performance Alert</p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Overall class participation is up by <span className="text-emerald-400 font-bold">15%</span> this week. Great job on the interactive sessions!
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-white mb-6">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { label: 'Create Class', icon: 'add_circle' },
                { label: 'Create Quiz', icon: 'quiz' },
                { label: 'View Reports', icon: 'analytics' },
              ].map((action, i) => (
                <button key={i} className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-left group">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">{action.icon}</span>
                  <span className="text-sm font-semibold text-slate-200">{action.label}</span>
                </button>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
            <div className="space-y-6">
              {[
                { user: 'John Doe', action: 'completed Quiz 3', time: '2 minutes ago', color: 'emerald' },
                { user: 'Alex Smith', action: 'joined Physics 101', time: '1 hour ago', color: 'primary' },
                { user: 'Sarah Jenkins', action: 'requested a review', time: '3 hours ago', color: 'orange' },
              ].map((activity, i) => (
                <div key={i} className="flex gap-4">
                  <div className={cn("size-2 rounded-full mt-1.5 shrink-0", `bg-${activity.color === 'primary' ? 'primary' : activity.color + '-500'}`)}></div>
                  <div>
                    <p className="text-sm text-slate-200">
                      <span className="font-bold">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-xs font-bold text-slate-400 hover:text-white transition-colors border-t border-slate-800 pt-4">
              View Full Log
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ClassroomsView = () => (
  <div className="p-8 space-y-8 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">Classrooms</h2>
        <p className="text-slate-400 text-lg">Manage your classes and monitor student progress.</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">search</span>
          <input className="bg-surface-dark border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm w-64 focus:ring-primary focus:border-primary text-slate-100 placeholder:text-slate-500" placeholder="Search classrooms..." type="text" />
        </div>
        <Button>
          <span className="material-symbols-outlined text-lg">add</span>
          Create Classroom
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {MOCK_CLASSROOMS.map((classroom) => (
        <Card key={classroom.id} className="flex flex-col gap-5 hover:border-primary/40 transition-all group">
          <div className="flex justify-between items-start">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", 
              classroom.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : 
              classroom.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : 
              'bg-orange-500/20 text-orange-400'
            )}>
              <span className="material-symbols-outlined text-2xl">{classroom.icon}</span>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border border-emerald-500/20">Active</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">{classroom.name}</h3>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">tag</span>
              <span>{classroom.code}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Students</p>
              <p className="text-slate-100 text-lg font-bold">{classroom.studentCount}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Quizzes</p>
              <p className="text-slate-100 text-lg font-bold">{classroom.quizCount}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-medium">
              <span className="text-slate-400 uppercase tracking-tighter">Avg. Score</span>
              <span className="text-emerald-400">{classroom.avgScore}%</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full" style={{ width: `${classroom.avgScore}%` }}></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <Button variant="secondary" className="w-full py-2">View Classroom</Button>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="py-2 text-xs">
                <span className="material-symbols-outlined text-base">edit_note</span>
                Quizzes
              </Button>
              <Button variant="outline" className="py-2 text-xs">
                <span className="material-symbols-outlined text-base">content_copy</span>
                Join Code
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const QuizzesView = () => (
  <div className="p-8 space-y-8 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">Quizzes</h2>
        <p className="text-slate-400 text-lg">Design and manage your assessments.</p>
      </div>
      <Button>
        <span className="material-symbols-outlined text-lg">add</span>
        Create New Quiz
      </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {MOCK_QUIZZES.map((quiz) => (
        <Card key={quiz.id} className="overflow-hidden group hover:border-primary/50 transition-all p-0">
          <div className={cn("h-32 p-6 flex items-end justify-between", 
            quiz.id === 'q1' ? "bg-gradient-to-br from-indigo-900 to-indigo-700" : "bg-gradient-to-br from-purple-900 to-purple-700"
          )}>
            <span className={cn("px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border backdrop-blur-md",
              quiz.status === 'active' ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-slate-500/20 text-slate-400 border-slate-500/30"
            )}>
              {quiz.status}
            </span>
            <span className="text-white/50">
              <span className="material-symbols-outlined">{quiz.status === 'active' ? 'quiz' : 'history'}</span>
            </span>
          </div>
          <div className="p-6">
            <h5 className="text-lg font-bold text-white mb-4 line-clamp-1">{quiz.title}</h5>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-slate-400 mb-1">Attempts</p>
                <p className="text-sm font-semibold text-slate-100">{quiz.attempts}/32</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Avg. Score</p>
                <p className="text-sm font-semibold text-slate-100">{quiz.avgScore}%</p>
              </div>
            </div>
            <Button variant="outline" className="w-full py-2.5">
              {quiz.status === 'active' ? 'Manage Quiz' : 'View Results'}
            </Button>
          </div>
        </Card>
      ))}
      <Card className="border-dashed border-2 border-slate-800 bg-transparent flex flex-col items-center justify-center p-8 text-center min-h-[320px] group">
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-4xl">add</span>
        </div>
        <h5 className="text-lg font-bold text-white mb-2">Create New Quiz</h5>
        <p className="text-sm text-slate-500 mb-6">Generate from course material or build manually.</p>
        <Button className="px-8">Start Building</Button>
      </Card>
    </div>
  </div>
);

const StudentsView = () => (
  <div className="p-8 space-y-8 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Students</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Monitor student progress and provide personalized support.</p>
      </div>
      <div className="flex items-center gap-4">
        <Button>
          <span className="material-symbols-outlined text-sm">person_add</span>
          Add New Student
        </Button>
      </div>
    </div>

    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-1 min-w-[300px] max-w-md relative group">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
        <input className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Search by name or email..." type="text" />
      </div>
      <div className="flex items-center gap-3">
        <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white cursor-pointer min-w-[140px] outline-none">
          <option>All Classes</option>
          <option>Math 101</option>
          <option>Physics A</option>
        </select>
        <Button variant="outline">
          <span className="material-symbols-outlined text-lg">download</span>
          Export CSV
        </Button>
      </div>
    </div>

    <Card className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Student</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Enrolled Classes</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Avg Score</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Weak Concepts</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">Trend</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {[
              { name: 'James Dalton', email: 'j.dalton@university.edu', classes: ['Math 101', 'Physics A'], score: 92, weak: ['Quantum Mech.'], trend: 'up' },
              { name: 'Sarah Chen', email: 's.chen@university.edu', classes: ['Math 101'], score: 64, weak: ['Calculus', 'Trigonometry'], trend: 'flat' },
              { name: 'Marcus Reyes', email: 'm.reyes@university.edu', classes: ['CS Intro', 'Physics A'], score: 48, weak: ['Data Struct.'], trend: 'down' },
            ].map((student, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{student.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {student.classes.map(c => (
                      <span key={c} className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">{c}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1.5 min-w-[100px]">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{student.score}%</span>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className={cn("h-full rounded-full", student.score > 80 ? "bg-emerald-500" : student.score > 60 ? "bg-amber-500" : "bg-red-500")} style={{ width: `${student.score}%` }}></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {student.weak.map(w => (
                      <span key={w} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">{w}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={cn("material-symbols-outlined p-1 rounded-full", 
                    student.trend === 'up' ? "text-emerald-500 bg-emerald-500/10" : 
                    student.trend === 'down' ? "text-red-500 bg-red-500/10" : 
                    "text-amber-500 bg-amber-500/10"
                  )}>
                    {student.trend === 'up' ? 'trending_up' : student.trend === 'down' ? 'trending_down' : 'trending_flat'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-xl">monitoring</span>
                    </button>
                    <button className="p-2 hover:bg-primary/20 hover:text-primary rounded-lg text-slate-500 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-xl">auto_awesome</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-900/30">
        <p className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-semibold text-slate-900 dark:text-white">1-4</span> of <span className="font-semibold text-slate-900 dark:text-white">28</span> students</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="p-2 min-w-0"><span className="material-symbols-outlined">chevron_left</span></Button>
          <button className="h-8 w-8 rounded-lg bg-primary text-white text-sm font-bold">1</button>
          <button className="h-8 w-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-400">2</button>
          <Button variant="outline" className="p-2 min-w-0"><span className="material-symbols-outlined">chevron_right</span></Button>
        </div>
      </div>
    </Card>
  </div>
);

const SettingsView = () => (
  <div className="max-w-5xl mx-auto px-6 py-10">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight">Settings</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your account preferences and classroom configurations.</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost">Discard</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-64 shrink-0">
        <Card className="p-2 space-y-1">
          {['Profile', 'Account', 'Notifications', 'Classroom Defaults', 'Appearance'].map((tab, i) => (
            <button 
              key={tab} 
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left",
                i === 0 ? "bg-primary/10 text-primary font-semibold" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              <span className="material-symbols-outlined text-[20px]">
                {tab === 'Profile' ? 'person' : tab === 'Account' ? 'lock' : tab === 'Notifications' ? 'notifications' : tab === 'Classroom Defaults' ? 'school' : 'palette'}
              </span>
              {tab}
            </button>
          ))}
        </Card>
      </div>
      <div className="flex-1 space-y-8">
        <Card className="p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">person</span>
            Profile Information
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 bg-slate-800 flex items-center justify-center">
                <img className="w-full h-full object-cover" src={MOCK_USER.avatar} alt="Profile" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </button>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-400">Full Name</label>
                <input className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary outline-none transition-all text-white" type="text" defaultValue={MOCK_USER.name} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-400">Email Address</label>
                <input className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary outline-none transition-all text-white" type="email" defaultValue={MOCK_USER.email} />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-400">Biography</label>
                <textarea className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary outline-none transition-all text-white resize-none" rows={4} defaultValue="Senior Mathematics Instructor with 10 years of experience in digital learning and curriculum development." />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-500">
            <span className="material-symbols-outlined">report</span>
            Danger Zone
          </h3>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white">Delete Account</p>
              <p className="text-sm text-slate-400">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
            <Button variant="danger">Delete Permanently</Button>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isLoggedIn) {
    return <LoginView onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'classrooms': return <ClassroomsView />;
      case 'quizzes': return <QuizzesView />;
      case 'students': return <StudentsView />;
      case 'settings': return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  const getBreadcrumbs = () => {
    const base = [{ label: activeTab.charAt(0).toUpperCase() + activeTab.slice(1), active: true }];
    if (activeTab === 'dashboard') return null;
    return base;
  };

  return (
    <div className="flex min-h-screen bg-background-dark">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header breadcrumbs={getBreadcrumbs() || undefined} title={activeTab === 'dashboard' ? 'Dashboard' : undefined} />
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
    </div>
  );
}
