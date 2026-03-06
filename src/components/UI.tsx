import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Sidebar = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'classrooms', label: 'Classrooms', icon: 'DoorOpen' },
    { id: 'quizzes', label: 'Quizzes', icon: 'FileQuestion' },
    { id: 'students', label: 'Students', icon: 'Users' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' },
  ];

  return (
    <aside className="w-64 border-r border-border-dark bg-surface-dark hidden lg:flex flex-col h-screen sticky top-0">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-10">
          <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center text-white">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">SmartLearn</h1>
            <p className="text-xs text-slate-400">Premium Educator</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                activeTab === item.id ? "bg-primary text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="material-symbols-outlined">{item.id === 'dashboard' ? 'dashboard' : item.id === 'classrooms' ? 'door_open' : item.id === 'quizzes' ? 'quiz' : item.id === 'students' ? 'group' : 'analytics'}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-border-dark">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-4">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Pro Plan</p>
            <p className="text-sm text-slate-300 mb-3">Unlock advanced analytics and AI quiz generation.</p>
            <button className="w-full py-2 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg transition-all">Upgrade Now</button>
          </div>
          <button 
            onClick={() => onTabChange('settings')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2 transition-colors text-left",
              activeTab === 'settings' ? "text-white" : "text-slate-400 hover:text-white"
            )}
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export const Header = ({ title, breadcrumbs }: { title?: string, breadcrumbs?: { label: string, active?: boolean }[] }) => {
  return (
    <header className="h-16 border-b border-border-dark bg-surface-dark/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-20">
      <div className="flex items-center gap-2 text-sm text-slate-400">
        {breadcrumbs?.map((bc, i) => (
          <React.Fragment key={bc.label}>
            {i > 0 && <span className="material-symbols-outlined text-base">chevron_right</span>}
            <span className={cn(bc.active ? "text-slate-100 font-medium" : "hover:text-primary cursor-pointer transition-colors")}>
              {bc.label}
            </span>
          </React.Fragment>
        ))}
        {!breadcrumbs && title && <h2 className="text-lg font-semibold text-white">{title}</h2>}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative group hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm group-focus-within:text-primary transition-colors">search</span>
          <input 
            className="pl-10 pr-4 py-1.5 bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-1 focus:ring-primary text-white placeholder:text-slate-500" 
            placeholder="Search data..." 
            type="text"
          />
        </div>
        <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-surface-dark"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-slate-700 border border-slate-600 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("glass-card rounded-2xl p-6", className)}>
    {children}
  </div>
);

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' }) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20',
    secondary: 'bg-white text-slate-900 hover:bg-slate-100',
    outline: 'bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800',
    ghost: 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5',
    danger: 'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white'
  };

  return (
    <button 
      className={cn(
        "px-5 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
