export type Role = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  institution?: string;
}

export interface Classroom {
  id: string;
  name: string;
  code: string;
  subject: string;
  studentCount: number;
  quizCount: number;
  avgScore: number;
  status: 'active' | 'archived';
  icon: string;
  color: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  classId: string;
  dueDate: string;
  timeLimit: number;
  status: 'active' | 'ended' | 'draft';
  attempts: number;
  avgScore: number;
  questions: Question[];
}

export interface Question {
  id: string;
  type: 'mcq' | 'short-answer' | 'boolean';
  text: string;
  options?: string[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

export interface Submission {
  id: string;
  quizId: string;
  studentId: string;
  studentName: string;
  studentAvatar?: string;
  submittedAt: string;
  score: number;
  totalScore: number;
  weakConcepts: string[];
}

export interface StudentPerformance {
  studentId: string;
  overallScore: number;
  completionRate: number;
  improvementTrend: number;
  conceptMastery: {
    concept: string;
    score: number;
    status: 'strong' | 'medium' | 'weak';
  }[];
}
