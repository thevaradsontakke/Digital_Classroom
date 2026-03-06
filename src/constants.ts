import { Classroom, Quiz, Submission, User } from './types';

export const MOCK_USER: User = {
  id: 'prof-1',
  name: 'Dr. Alex Johnson',
  email: 'alex.j@smartlearn.edu',
  role: 'teacher',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  institution: 'SmartLearn University'
};

export const MOCK_CLASSROOMS: Classroom[] = [
  {
    id: 'c1',
    name: 'Advanced Physics',
    code: 'PHYS-101',
    subject: 'Physics',
    studentCount: 32,
    quizCount: 12,
    avgScore: 84,
    status: 'active',
    icon: 'science',
    color: 'blue'
  },
  {
    id: 'c2',
    name: 'Quantum Mechanics',
    code: 'QM-202',
    subject: 'Physics',
    studentCount: 28,
    quizCount: 8,
    avgScore: 78,
    status: 'active',
    icon: 'flare',
    color: 'purple'
  },
  {
    id: 'c3',
    name: 'Thermodynamics',
    code: 'THERMO-101',
    subject: 'Physics',
    studentCount: 45,
    quizCount: 15,
    avgScore: 91,
    status: 'active',
    icon: 'thermostat',
    color: 'orange'
  }
];

export const MOCK_QUIZZES: Quiz[] = [
  {
    id: 'q1',
    title: 'Mid-term Integration Exam',
    description: 'Review student performance and detailed analytics for the calculus series.',
    classId: 'c1',
    dueDate: '2024-05-24',
    timeLimit: 60,
    status: 'active',
    attempts: 28,
    avgScore: 76,
    questions: []
  },
  {
    id: 'q2',
    title: 'Trigonometry Basics',
    description: 'Fundamental concepts of trigonometry and their applications.',
    classId: 'c1',
    dueDate: '2024-04-15',
    timeLimit: 45,
    status: 'ended',
    attempts: 32,
    avgScore: 88,
    questions: []
  }
];

export const MOCK_SUBMISSIONS: Submission[] = [
  {
    id: 's1',
    quizId: 'q1',
    studentId: 'st1',
    studentName: 'Alex Harrison',
    studentAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    submittedAt: '2024-10-24T10:45:00Z',
    score: 23,
    totalScore: 25,
    weakConcepts: []
  },
  {
    id: 's2',
    quizId: 'q1',
    studentId: 'st2',
    studentName: 'Sarah Miller',
    studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    submittedAt: '2024-10-24T11:20:00Z',
    score: 19,
    totalScore: 25,
    weakConcepts: ['Trig Identities']
  },
  {
    id: 's3',
    quizId: 'q1',
    studentId: 'st3',
    studentName: 'Jordan Smith',
    studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    submittedAt: '2024-10-23T16:15:00Z',
    score: 15,
    totalScore: 25,
    weakConcepts: ['Limits', 'Functions']
  },
  {
    id: 's4',
    quizId: 'q1',
    studentId: 'st4',
    studentName: 'Maria Garcia',
    studentAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    submittedAt: '2024-10-23T14:30:00Z',
    score: 21,
    totalScore: 25,
    weakConcepts: ['Trig Identities']
  }
];
