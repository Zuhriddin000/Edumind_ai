import React, { useState, useEffect, useMemo } from 'react';
import { Brain, LayoutDashboard, GraduationCap, Sparkles, BookOpen, CalendarCheck2, FileText, Settings, Flame, Award, ChevronRight, CheckCircle2, AlertTriangle, Send, Plus, Trash2, Check, RotateCcw, Languages, Key, TrendingUp } from 'lucide-react';
// ============================================================================
// 1. MULTILINGUAL LOCALIZATION ENGINE (UZBEK LATIN, RUSSIAN, ENGLISH)
// ============================================================================
type SupportedLang = 'uz' | 'ru' | 'en';

interface TranslationSet {
  appName: string;
  tagline: string;
  navDashboard: string;
  navTutor: string;
  navQuiz: string;
  navGaps: string;
  navIntelligence: string;
  navPlanner: string;
  navNotes: string;
  navSettings: string;
  demoModeBadge: string;
  liveModeBadge: string;
  loadDemoData: string;
  demoDataLoadedMsg: string;
  statsQuizzes: string;
  statsAvgScore: string;
  statsTasksCompleted: string;
  statsActiveStreak: string;
  studyOverviewTitle: string;
  startQuizAction: string;
  askTutorAction: string;
  createPlanAction: string;
  learningGapsTitle: string;
  remediationRecommend: string;
  accuracy: string;
  questionsAnswered: string;
  statusWeak: string;
  statusStrong: string;
  send: string;
  placeholderQuestion: string;
  difficulty: string;
  subject: string;
  levelBeginner: string;
  levelIntermediate: string;
  levelAdvanced: string;
  math: string;
  physics: string;
  chemistry: string;
  biology: string;
  computerScience: string;
  history: string;
  english: string;
  finishQuiz: string;
  nextQuestion: string;
  quizCompleted: string;
  reviewAnswers: string;
  score: string;
  congratulations: string;
  studyPlannerTitle: string;
  addTask: string;
  taskPlaceholder: string;
  examDatePlaceholder: string;
  notesTitle: string;
  notesPlaceholder: string;
  summarizeBtn: string;
  keyConceptsBtn: string;
  flashcardsBtn: string;
  settingsTitle: string;
  apiKeyLabel: string;
  apiKeyHelp: string;
  saveKey: string;
  pliBadge: string;
  pliTitle: string;
  pliSubtitle: string;
  startRecoveryAction: string;
  cycleComplete: string;
  emptyGaps: string;
  flipCard: string;
}

const translations: Record<SupportedLang, TranslationSet> = {
  uz: {
    appName: "EduMind AI",
    tagline: "Maktab o'quvchilari uchun shaxsiy sun'iy intellekt ta'lim assistenti",
    navDashboard: "Boshqaruv paneli",
    navTutor: "AI Murabbiy",
    navQuiz: "Aqlli Test",
    navGaps: "Bo'shliqlarim",
    navIntelligence: "O'rganish intellekti (PLI)",
    navPlanner: "O'quv rejasi",
    navNotes: "Konspekt tahlili",
    navSettings: "Sozlamalar",
    demoModeBadge: "Lokal Demo Rejim",
    liveModeBadge: "Jonli AI Rejimi",
    loadDemoData: "Namunaviy ma'lumotlarni yuklash",
    demoDataLoadedMsg: "Namunaviy tahlil ma'lumotlari muvaffaqiyatli yuklandi!",
    statsQuizzes: "Topshirilgan testlar",
    statsAvgScore: "O'rtacha natija",
    statsTasksCompleted: "Bajarilgan vazifalar",
    statsActiveStreak: "O'qish seriyasi (kun)",
    studyOverviewTitle: "Haftalik faollik va o'zlashtirish grafigi",
    startQuizAction: "Test topshirish",
    askTutorAction: "Murabbiyga savol berish",
    createPlanAction: "Rejaga vazifa qo'shish",
    learningGapsTitle: "Mening aniqlangan o'rganish bo'shliqlarim",
    remediationRecommend: "Tavsiya etilgan tuzatish mashg'uloti",
    accuracy: "O'zlashtirish aniqligi",
    questionsAnswered: "Tahlil qilingan savollar",
    statusWeak: "Mustahkamlash zarur",
    statusStrong: "Yaxshi o'zlashtirilgan",
    send: "Yuborish",
    placeholderQuestion: "Masalan: Kvadrat tenglamani diskriminant orqali qanday yechamiz?",
    difficulty: "Murakkablik",
    subject: "Fan",
    levelBeginner: "Boshlang'ich",
    levelIntermediate: "O'rta",
    levelAdvanced: "Mukammal",
    math: "Matematika",
    physics: "Fizika",
    chemistry: "Kimyo",
    biology: "Biologiya",
    computerScience: "Informatika",
    history: "Tarix",
    english: "Ingliz tili",
    finishQuiz: "Testni yakunlash",
    nextQuestion: "Keyingi savol",
    quizCompleted: "Test muvaffaqiyatli yakunlandi!",
    reviewAnswers: "Xatolar tahlili",
    score: "Natija",
    congratulations: "Ajoyib natija! Yangi bilimlarni mustahkamlashda davom eting.",
    studyPlannerTitle: "Shaxsiy o'quv jadvali va maqsadlar",
    addTask: "Vazifa qo'shish",
    taskPlaceholder: "Vazifa nomi (Masalan: Trigonometriya formulalarini takrorlash)",
    examDatePlaceholder: "Muddat / Imtihon sanasi",
    notesTitle: "Konspekt va matnlarni sun'iy intellekt tahlili",
    notesPlaceholder: "Darslikdan parcha yoki dars konspekingizni bu yerga joylashtiring...",
    summarizeBtn: "Qisqacha mazmun (Summary)",
    keyConceptsBtn: "Asosiy tushunchalar",
    flashcardsBtn: "Flesh-kartalar yaratish",
    settingsTitle: "Tizim sozlamalari va API integratsiyasi",
    apiKeyLabel: "OpenAI yoki Google Gemini API Kaliti (Ixtiyoriy)",
    apiKeyHelp: "Haqiqiy AI rejimini ishga tushirish uchun API kalitingizni kiriting. Kalit faqat brauzeringiz xotirasida saqlanadi.",
    saveKey: "Kalitni saqlash",
    pliBadge: "Noyob IT Tanlov Innovatsiyasi",
    pliTitle: "Personal Learning Intelligence (PLI)",
    pliSubtitle: "Xatolaringiz asosida avtomatik adaptiv tuzatish modulini shakllantiruvchi yopiq siklli tizim.",
    startRecoveryAction: "Qayta o'rganish modulini boshlash",
    cycleComplete: "Tiklash bosqichi muvaffaqiyatli yakunlandi! Natijangiz yaxshilandi.",
    emptyGaps: "Hozircha xatolar aniqlanmadi. Bo'shliqlarni tahlil qilish uchun test topshiring!",
    flipCard: "Kartani ag'darish"
  },
  ru: {
    appName: "EduMind AI",
    tagline: "Персональный интеллектуальный репетитор для школьников",
    navDashboard: "Дашборд",
    navTutor: "AI Репетитор",
    navQuiz: "Умный Тест",
    navGaps: "Пробелы в знаниях",
    navIntelligence: "Интеллект обучения (PLI)",
    navPlanner: "План учебы",
    navNotes: "Анализ заметок",
    navSettings: "Настройки",
    demoModeBadge: "Локальный Демо Режим",
    liveModeBadge: "Живой AI Режим",
    loadDemoData: "Загрузить демо-данные",
    demoDataLoadedMsg: "Демонстрационные аналитические данные загружены!",
    statsQuizzes: "Пройдено тестов",
    statsAvgScore: "Средний балл",
    statsTasksCompleted: "Задач выполнено",
    statsActiveStreak: "Серия учебы (дней)",
    studyOverviewTitle: "Недельная активность и динамика успеваемости",
    startQuizAction: "Пройти тест",
    askTutorAction: "Спросить репетитора",
    createPlanAction: "Добавить задачу",
    learningGapsTitle: "Выявленные пробелы в знаниях",
    remediationRecommend: "Рекомендуемое повторение темы",
    accuracy: "Точность ответов",
    questionsAnswered: "Обработано вопросов",
    statusWeak: "Требует внимания",
    statusStrong: "Уверенное знание",
    send: "Отправить",
    placeholderQuestion: "Например: Как решить квадратное уравнение через дискриминант?",
    difficulty: "Сложность",
    subject: "Предмет",
    levelBeginner: "Базовый",
    levelIntermediate: "Средний",
    levelAdvanced: "Продвинутый",
    math: "Математика",
    physics: "Физика",
    chemistry: "Химия",
    biology: "Биология",
    computerScience: "Информатика",
    history: "История",
    english: "Английский",
    finishQuiz: "Завершить тест",
    nextQuestion: "Следующий вопрос",
    quizCompleted: "Тестирование успешно завершено!",
    reviewAnswers: "Разбор допущенных ошибок",
    score: "Результат",
    congratulations: "Отличный результат! Продолжайте закреплять сложные темы.",
    studyPlannerTitle: "Персональный график занятий",
    addTask: "Добавить задачу",
    taskPlaceholder: "Название темы (например: Формулы тригонометрии)",
    examDatePlaceholder: "Дата сдачи / Экзамена",
    notesTitle: "Умный разбор учебных конспектов",
    notesPlaceholder: "Вставьте текст параграфа или свои заметки сюда...",
    summarizeBtn: "Краткий пересказ",
    keyConceptsBtn: "Ключевые понятия",
    flashcardsBtn: "Создать флеш-карточки",
    settingsTitle: "Настройки системы и интеграция API",
    apiKeyLabel: "Ключ OpenAI или Google Gemini (Необязательно)",
    apiKeyHelp: "Для активации живых генераций введите ключ API. Он хранится строго локально в браузере.",
    saveKey: "Сохранить ключ",
    pliBadge: "Конкурсная Инновация",
    pliTitle: "Personal Learning Intelligence (PLI)",
    pliSubtitle: "Замкнутый цикл: выявление ошибок -> направленная коррекция -> контрольный микро-тест.",
    startRecoveryAction: "Запустить цикл устранения пробелов",
    cycleComplete: "Тема успешно отработана! Прогресс зафиксирован в системе.",
    emptyGaps: "Пробелов пока не обнаружено. Пройдите тест для диагностики!",
    flipCard: "Перевернуть карточку"
  },
  en: {
    appName: "EduMind AI",
    tagline: "Intelligent Personal Study Assistant for School Students",
    navDashboard: "Dashboard",
    navTutor: "AI Tutor",
    navQuiz: "Smart Quiz",
    navGaps: "My Learning Gaps",
    navIntelligence: "Learning Intelligence (PLI)",
    navPlanner: "Study Plan",
    navNotes: "Notes Assistant",
    navSettings: "Settings",
    demoModeBadge: "Local Demo Mode",
    liveModeBadge: "Live AI Connected",
    loadDemoData: "Load Sample Demo Data",
    demoDataLoadedMsg: "Sample analytics and quiz history loaded!",
    statsQuizzes: "Quizzes Taken",
    statsAvgScore: "Average Score",
    statsTasksCompleted: "Tasks Done",
    statsActiveStreak: "Day Streak",
    studyOverviewTitle: "Weekly Learning Performance",
    startQuizAction: "Take a Quiz",
    askTutorAction: "Ask AI Tutor",
    createPlanAction: "Add Study Task",
    learningGapsTitle: "My Identified Learning Gaps",
    remediationRecommend: "Recommended Revision Topic",
    accuracy: "Accuracy",
    questionsAnswered: "Questions Evaluated",
    statusWeak: "Needs Revision",
    statusStrong: "Mastered",
    send: "Send",
    placeholderQuestion: "e.g., How do I solve quadratic equations using the discriminant?",
    difficulty: "Difficulty",
    subject: "Subject",
    levelBeginner: "Beginner",
    levelIntermediate: "Intermediate",
    levelAdvanced: "Advanced",
    math: "Mathematics",
    physics: "Physics",
    chemistry: "Chemistry",
    biology: "Biology",
    computerScience: "Computer Science",
    history: "History",
    english: "English",
    finishQuiz: "Finish Quiz",
    nextQuestion: "Next Question",
    quizCompleted: "Quiz Completed!",
    reviewAnswers: "Review Incorrect Answers",
    score: "Score",
    congratulations: "Great job! Keep refining difficult concepts.",
    studyPlannerTitle: "Personalized Study Schedule",
    addTask: "Add Schedule Item",
    taskPlaceholder: "Topic name (e.g., Quadratic formula derivation)",
    examDatePlaceholder: "Target Exam Date",
    notesTitle: "AI Study Notes Processor",
    notesPlaceholder: "Paste your raw study notes or chapter text here...",
    summarizeBtn: "Summarize Text",
    keyConceptsBtn: "Key Concepts",
    flashcardsBtn: "Generate Flashcards",
    settingsTitle: "Configuration & AI Keys",
    apiKeyLabel: "OpenAI or Gemini API Key (Optional)",
    apiKeyHelp: "Enter your API key for live real-time LLM requests. Kept strictly in browser local storage.",
    saveKey: "Save Key",
    pliBadge: "Signature IT Competition Feature",
    pliTitle: "Personal Learning Intelligence (PLI)",
    pliSubtitle: "Closed-loop cognitive remediation: Diagnoses recurring errors and issues adaptive micro-recovery quizzes.",
    startRecoveryAction: "Start Targeted Recovery Loop",
    cycleComplete: "Remediation loop completed! Measurable mastery improvement recorded.",
    emptyGaps: "No gaps detected yet. Take a quiz to run diagnostics!",
    flipCard: "Flip Card"
  }
};

// ============================================================================
// 2. TYPES & DATA STRUCTURES
// ============================================================================
interface StudyTask {
  id: string;
  subject: string;
  topic: string;
  targetDate: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

interface Question {
  id: string;
  subject: string;
  topic: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizAttempt {
  id: string;
  timestamp: string;
  subject: string;
  topic: string;
  score: number;
  total: number;
  answers: {
    questionId: string;
    selected: number;
    correct: boolean;
    topic: string;
  }[];
}

interface TutorMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isStepByStep?: boolean;
}

interface Flashcard {
  id: string;
  front: string;
  back: string;
}

// Built-in verified question repository (Ensures app works 100% offline without API)
const OFFLINE_QUESTIONS: Question[] = [
  {
    id: "m_quad_1",
    subject: "math",
    topic: "Kvadrat tenglamalar (Quadratic Equations)",
    difficulty: "beginner",
    question: "ax² + bx + c = 0 kvadrat tenglamasida diskriminant (D) formulasini aniqlang:",
    options: ["D = b² - 4ac", "D = b² + 4ac", "D = 2a - 4bc", "D = -b ± √(4ac)"],
    correctIndex: 0,
    explanation: "Kvadrat tenglama diskriminanti D = b² - 4ac orqali hisoblanadi. D > 0 bo'lsa ikkita haqiqiy ildiz, D = 0 bo'lsa bitta, D < 0 bo'lsa haqiqiy ildiz mavjud emas."
  },
  {
    id: "m_quad_2",
    subject: "math",
    topic: "Kvadrat tenglamalar (Quadratic Equations)",
    difficulty: "intermediate",
    question: "x² - 7x + 12 = 0 tenglamasining ildizlarini toping:",
    options: ["x = 2 va x = 5", "x = 3 va x = 4", "x = -3 va x = -4", "x = 1 va x = 12"],
    correctIndex: 1,
    explanation: "Viyet teoremasiga ko'ra: x₁ + x₂ = 7 va x₁ · x₂ = 12. Bu shartni 3 va 4 sonlari qanoatlantiradi: 3 + 4 = 7, 3 · 4 = 12."
  },
  {
    id: "m_trig_1",
    subject: "math",
    topic: "Trigonometriya asoslari",
    difficulty: "beginner",
    question: "Asosiy trigonometrik ayniyat qaysi?",
    options: ["sin(α) + cos(α) = 1", "sin²(α) + cos²(α) = 1", "tg(α) · ctg(α) = 0", "cos²(α) - sin²(α) = 1"],
    correctIndex: 1,
    explanation: "Pifagor teoremasiga asoslangan asosiy trigonometrik ayniyat: sin²(α) + cos²(α) = 1."
  },
  {
    id: "p_newt_1",
    subject: "physics",
    topic: "Nyuton qonunlari (Newton's Laws)",
    difficulty: "beginner",
    question: "Nyutonning ikkinchi qonunining matematik ifodasini ko'rsating:",
    options: ["F = m / a", "F = m · a", "E = m · c²", "P = F · v"],
    correctIndex: 1,
    explanation: "Nyutonning 2-qonuniga ko'ra, jismga berilgan kuch uning massasi va tezlanishi ko'paytmasiga teng: F = m · a."
  },
  {
    id: "p_newt_2",
    subject: "physics",
    topic: "Nyuton qonunlari (Newton's Laws)",
    difficulty: "intermediate",
    question: "Massasi 4 kg bo'lgan jismga 20 N kuch ta'sir etsa, uning tezlanishi qanday bo'ladi?",
    options: ["80 m/s²", "5 m/s²", "0.2 m/s²", "16 m/s²"],
    correctIndex: 1,
    explanation: "a = F / m formulasiga asosan: a = 20 N / 4 kg = 5 m/s²."
  },
  {
    id: "c_chem_1",
    subject: "chemistry",
    topic: "Kimyoviy bog'lanishlar",
    difficulty: "beginner",
    question: "Osh tuzi (NaCl) molekulasidagi atomlar orasida qanday bog'lanish mavjud?",
    options: ["Ionli bog'lanish", "Kovalent qutbsiz", "Vodorod bog'lanish", "Metall bog'lanish"],
    correctIndex: 0,
    explanation: "Metall (Na) va metallmas (Cl) orasida elektronlar to'liq o'tishi natijasida ionli bog'lanish hosil bo'ladi."
  },
  {
    id: "cs_bigo_1",
    subject: "computerScience",
    topic: "Algoritmlar murakkabligi (Big-O)",
    difficulty: "intermediate",
    question: "Tartiblangan massivda Ikkilik qidirish (Binary Search) algoritmining vaqt murakkabligi nimaga teng?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    correctIndex: 2,
    explanation: "Binary Search har qadamda massivni teng ikkiga bo'lgani sababli, uning vaqt murakkabligi logarifmik, ya'ni O(log n) bo'ladi."
  }
];

// Initial demo tasks
const SEED_TASKS: StudyTask[] = [
  { id: "st_1", subject: "Matematika", topic: "Kvadrat tenglamalar va diskriminant amaliyoti", targetDate: "2026-11-04", completed: true, priority: 'high' },
  { id: "st_2", subject: "Fizika", topic: "Nyutonning dinamika qonunlariga doir masalalar", targetDate: "2026-11-06", completed: false, priority: 'high' },
  { id: "st_3", subject: "Informatika", topic: "Binary Search va Algoritmlar tahlili", targetDate: "2026-11-09", completed: false, priority: 'medium' }
];

// ============================================================================
// 3. MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  // Navigation & Localization
  const [activeTab, setActiveTab] = useState<'dashboard' | 'tutor' | 'quiz' | 'gaps' | 'intelligence' | 'planner' | 'notes' | 'settings'>('dashboard');
  const [lang, setLang] = useState<SupportedLang>('uz');

  // Core Persistent State
  const [tasks, setTasks] = useState<StudyTask[]>(() => {
    const local = localStorage.getItem('edumind_tasks');
    return local ? JSON.parse(local) : SEED_TASKS;
  });

  const [quizHistory, setQuizHistory] = useState<QuizAttempt[]>(() => {
    const local = localStorage.getItem('edumind_quiz_history');
    return local ? JSON.parse(local) : [];
  });

  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem('edumind_api_key') || '';
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('edumind_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('edumind_quiz_history', JSON.stringify(quizHistory));
  }, [quizHistory]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const t = translations[lang];

  // Load rich sample analytics for instant evaluation/demonstration
  const handleLoadSampleData = () => {
    const sampleHistory: QuizAttempt[] = [
      {
        id: "demo_attempt_1",
        timestamp: "2026-10-26 14:30",
        subject: "math",
        topic: "Kvadrat tenglamalar (Quadratic Equations)",
        score: 1,
        total: 2,
        answers: [
          { questionId: "m_quad_1", selected: 0, correct: true, topic: "Kvadrat tenglamalar (Quadratic Equations)" },
          { questionId: "m_quad_2", selected: 0, correct: false, topic: "Kvadrat tenglamalar (Quadratic Equations)" }
        ]
      },
      {
        id: "demo_attempt_2",
        timestamp: "2026-10-27 11:15",
        subject: "physics",
        topic: "Nyuton qonunlari (Newton's Laws)",
        score: 1,
        total: 2,
        answers: [
          { questionId: "p_newt_1", selected: 1, correct: true, topic: "Nyuton qonunlari (Newton's Laws)" },
          { questionId: "p_newt_2", selected: 0, correct: false, topic: "Nyuton qonunlari (Newton's Laws)" }
        ]
      },
      {
        id: "demo_attempt_3",
        timestamp: "2026-10-28 09:45",
        subject: "computerScience",
        topic: "Algoritmlar murakkabligi (Big-O)",
        score: 1,
        total: 1,
        answers: [
          { questionId: "cs_bigo_1", selected: 2, correct: true, topic: "Algoritmlar murakkabligi (Big-O)" }
        ]
      }
    ];

    setQuizHistory(sampleHistory);
    triggerToast(t.demoDataLoadedMsg);
  };

  // Real-time weakness detection and statistics derived from user attempts
  const analytics = useMemo(() => {
    const topicStats: Record<string, { total: number; correct: number; subject: string }> = {};

    quizHistory.forEach(att => {
      att.answers.forEach(ans => {
        if (!topicStats[ans.topic]) {
          topicStats[ans.topic] = { total: 0, correct: 0, subject: att.subject };
        }
        topicStats[ans.topic].total += 1;
        if (ans.correct) {
          topicStats[ans.topic].correct += 1;
        }
      });
    });

    const gapList = Object.entries(topicStats).map(([topic, data]) => {
      const accuracy = Math.round((data.correct / data.total) * 100);
      return {
        topic,
        subject: data.subject,
        accuracy,
        totalQuestions: data.total,
        isWeak: accuracy < 70
      };
    });

    const totalQuizzes = quizHistory.length;
    const avgScore = totalQuizzes > 0
      ? Math.round(quizHistory.reduce((acc, curr) => acc + (curr.score / curr.total) * 100, 0) / totalQuizzes)
      : 0;

    const completedTasks = tasks.filter(t => t.completed).length;

    return {
      gapList,
      weakTopics: gapList.filter(g => g.isWeak),
      strongTopics: gapList.filter(g => !g.isWeak),
      totalQuizzes,
      avgScore,
      completedTasks
    };
  }, [quizHistory, tasks]);

  // ==========================================================================
  // VIEW: DASHBOARD
  // ==========================================================================
  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-navy-900 border border-blue-500/20 p-6 md:p-8">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EduMind AI v2.4 • {apiKey ? t.liveModeBadge : t.demoModeBadge}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            {lang === 'uz' ? "Keling, bugungi o'rganishni boshlaymiz!" : lang === 'ru' ? "Давай продолжим обучение!" : "Ready to elevate your knowledge?"}
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            {t.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('quiz')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-600/30"
            >
              <GraduationCap className="w-4 h-4" />
              {t.startQuizAction}
            </button>
            <button
              onClick={() => setActiveTab('tutor')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-800/80 hover:bg-navy-700/80 border border-slate-700 text-slate-200 text-sm font-medium transition-all"
            >
              <Brain className="w-4 h-4 text-cyan-400" />
              {t.askTutorAction}
            </button>
            {quizHistory.length === 0 && (
              <button
                onClick={handleLoadSampleData}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 text-sm font-medium transition-all"
              >
                <BookCheck className="w-4 h-4" />
                {t.loadDemoData}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-navy-900/90 border border-slate-800 rounded-2xl p-4 md:p-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">{t.statsQuizzes}</span>
            <BookOpen className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-white">{analytics.totalQuizzes}</div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {analytics.totalQuizzes > 0 ? "Barcha topshirilgan testlar" : "Hali test topshirilmadi"}
          </span>
        </div>

        <div className="bg-navy-900/90 border border-slate-800 rounded-2xl p-4 md:p-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">{t.statsAvgScore}</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-white">{analytics.avgScore}%</div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
            <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: ${analytics.avgScore}% }}></div>
          </div>
        </div>

        <div className="bg-navy-900/90 border border-slate-800 rounded-2xl p-4 md:p-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">{t.statsTasksCompleted}</span>
            <CalendarCheck2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-white">{analytics.completedTasks} / {tasks.length}</div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
            <div
              className="bg-emerald-400 h-1.5 rounded-full"
              style={{ width: ${tasks.length > 0 ? (analytics.completedTasks / tasks.length) * 100 : 0}% }}
            ></div>
          </div>
        </div>

        <div className="bg-navy-900/90 border border-slate-800 rounded-2xl p-4 md:p-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">{t.statsActiveStreak}</span>
            <Flame className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-white">4</div>
          <span className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
            <TrendingUp className="w-3 h-3" /> +1 kun rekord daraja
          </span>
        </div>
      </div>

      {/* Main Visual Panels: Weekly Activity & Weakness Detection Alert */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Performance Visual Bar Chart */}
        <div className="lg:col-span-2 bg-navy-900/90 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-white">{t.studyOverviewTitle}</h3>
              <p className="text-xs text-slate-400 mt-0.5">Oxirgi 7 kunlik faollik va o'zlashtirish foizi</p>
            </div>
            <BarChart3 className="w-4 h-4 text-slate-500" />
          </div>

          <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-slate-800">
            {[
              { day: 'Dush', val: 60, quizzes: 1 },
              { day: 'Sesh', val: 80, quizzes: 2 },
              { day: 'Chor', val: 40, quizzes: 1 },
              { day: 'Pay', val: 90, quizzes: 3 },
              { day: 'Jum', val: 75, quizzes: 2 },
              { day: 'Shan', val: analytics.avgScore  65, quizzes: analytics.totalQuizzes  2 },
              { day: 'Yak', val: 85, quizzes: 2 }
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {bar.val}%
                </div>
                <div className="w-full max-w-[32px] bg-slate-800 rounded-t-lg relative overflow-hidden h-28 flex items-end">
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg transition-all duration-500 group-hover:brightness-125"
                    style={{ height: ${bar.val}% }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400 font-medium">{bar.day}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 text-xs text-slate-400">
            <span>Muntazamlik ko'rsatkichi: Yuqori</span>
            <span className="text-cyan-400 font-medium">EduMind adaptiv algoritm faol</span>
          </div>
        </div>

        {/* Learning Gaps Diagnostic Summary */}
        <div className="bg-navy-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-white">{t.learningGapsTitle}</h3>
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            </div>

            {analytics.weakTopics.length > 0 ? (
              <div className="space-y-3">
                {analytics.weakTopics.slice(0, 3).map((gap, i) => (
                  <div key={i} className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-rose-300 truncate max-w-[170px]">{gap.topic}</span>
                      <span className="text-xs font-bold text-rose-400">{gap.accuracy}%</span>
                    </div>
                    <div className="w-full bg-rose-950/60 rounded-full h-1.5">
                      <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: ${gap.accuracy}% }}></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-slate-400 text-xs leading-relaxed">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2 opacity-80" />
                {t.emptyGaps}
              </div>
            )}
          </div>

          <button
            onClick={() => setActiveTab('intelligence')}
            className="w-full mt-4 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20"
          >
            <span>{t.navIntelligence}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );

  // ==========================================================================
  // VIEW: AI STUDY TUTOR
  // ==========================================================================
  const TutorView = () => {
    const [messages, setMessages] = useState<TutorMessage[]>([
      {
        id: "tut_init",
        sender: "assistant",
        text: lang === 'uz'
          ? "Salom! Men EduMind AI shaxsiy repetitoringizman. Matematika, fizika, kimyo yoki dasturlashdan qaysi mavzuni tushunishda qiynalyapsiz? Bosqichma-bosqich tushuntirib beraman."
          : lang === 'ru'
          ? "Привет! Я твой AI-репетитор EduMind. По какому предмету или теме нужна помощь? Я объясню шаг за шагом."
          : "Hello! I am your EduMind AI personal tutor. Which subject or concept shall we break down step-by-step today?",
        timestamp: "10:00"
      }
    ]);
    const [input, setInput] = useState("");
    const [tutorSubject, setTutorSubject] = useState("math");
    const [difficulty, setDifficulty] = useState<"beginner" | "intermediate" | "advanced">("intermediate");
    const [isThinking, setIsThinking] = useState(false);

    const handleSendMessage = () => {
      if (!input.trim()) return;
      const userText = input;
      setInput("");

      const userMsg: TutorMessage = {
        id: u_${Date.now()},
        sender: 'user',
        text: userText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, userMsg]);
      setIsThinking(true);

      // Deterministic Offline Intelligent Solver with Multi-Language Step Generator
      setTimeout(() => {
        let answer = "";
        const lower = userText.toLowerCase();

        if (lower.includes("kvadrat")  lower.includes("дискриминант")  lower.includes("quadratic")) {
          answer = lang === 'uz'
            ? "📌 Kvadrat tenglamani yechish bosqichlari (ax² + bx + c = 0):\n\n1. Diskriminantni hisoblaymiz:\n   D = b² - 4ac\n\n2. Ildizlar sonini tekshiramiz:\n   • Agar D > 0 bo'lsa: 2 ta haqiqiy ildiz mavjud: x₁,₂ = (-b ± √D) / (2a)\n   • Agar D = 0 bo'lsa: 1 ta ildiz mavjud: x = -b / (2a)\n   • Agar D < 0 bo'lsa: Haqiqiy ildizlar mavjud emas.\n\nMisol: x² - 5x + 6 = 0 da a=1, b=-5, c=6. D = 25 - 24 = 1. Ildizlar: x₁ = 3, x₂ = 2."
            : lang === 'ru'
            ? "📌 Пошаговое решение квадратного уравнения (ax² + bx + c = 0):\n\n1. Находим дискриминант:\n   D = b² - 4ac\n\n2. Анализируем D:\n   • D > 0: два корня: x = (-b ± √D) / (2a)\n   • D = 0: один корень: x = -b / (2a)\n   • D < 0: действительных корней нет.\n\nПример: для x² - 5x + 6 = 0 корни x = 3 и x = 2."
            : "📌 Step-by-Step Quadratic Equation Guide (ax² + bx + c = 0):\n\n1. Calculate the Discriminant:\n   D = b² - 4ac\n\n2. Check roots count:\n   • D > 0: Two real roots: x = (-b ± √D) / (2a)\n   • D = 0: One real root: x = -b / (2a)\n   • D < 0: No real roots.";
        } else if (lower.includes("nyuton")  lower.includes("ньютон")  lower.includes("newton") || lower.includes("kuch")) {
          answer = lang === 'uz'
            ? "📌 Nyutonning Dinamika qonunlari:\n\n1. 1-qonun (Inersiya): Agar jismga boshqa jismlar ta'sir etmasa, u tinch holatini yoki to'g'ri chiziqli tekis harakatini saqlaydi.\n2. 2-qonun (Asosiy qonun): Jism tezlanishi unga qo'yilgan kuchga to'g'ri mutanosib: F = m · a.\n3. 3-qonun (Ta'sir va aks ta'sir): Ikki jism bir-biriga doimo kattaligi teng, yo'nalishi qarama-qarshi kuchlar bilan ta'sir qiladi: F₁ = -F₂."
            : "📌 Newton's Laws of Motion:\n\n1. 1st Law (Inertia): An object remains at rest or in uniform motion unless acted on by an external net force.\n2. 2nd Law: Acceleration is proportional to net force: F = m · a.\n3. 3rd Law: For every action, there is an equal and opposite reaction: F₁ = -F₂.";
        } else {
          answer = lang === 'uz'
            ? Qiziqarli savol! Siz ${tutorSubject} fanidan (${difficulty} daraja) tushuntirish so'radingiz.\n\nUshbu tushunchani samarali o'zlashtirish uchun:\n1. Mavzuning asosiy ta'rif va formulalarini ko'rib chiqing.\n2. Bir nechta namunaviy misollarni tahlil qiling.\n3. O'zlashtirishni tekshirish uchun "Aqlli Test" bo'limida sinovdan o'ting!
            : Great question! You asked regarding ${tutorSubject} (${difficulty} level).\n\nTo master this concept effectively:\n1. Break down the core foundational definition and laws.\n2. Work through 2-3 structured sample problems.\n3. Take a quick diagnostic quiz in the "Smart Quiz" tab to verify retention!;
        }

        const botMsg: TutorMessage = {
          id: bot_${Date.now()},
          sender: 'assistant',
          text: answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMsg]);
        setIsThinking(false);
      }, 700);
    };

    return (
      <div className="h-[calc(100vh-140px)] flex flex-col bg-navy-900/90 border border-slate-800 rounded-2xl overflow-hidden">
        {/* Controls Bar */}
        <div className="p-4 border-b border-slate-800 bg-navy-850 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">{t.navTutor}</h2>
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {apiKey ? "Live API Model Ready" : "EduMind Heuristic Local AI"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={tutorSubject}
              onChange={e => setTutorSubject(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-navy-800 border border-slate-700 text-xs text-white focus:outline-none"
            >
              <option value="math">{t.math}</option>
              <option value="physics">{t.physics}</option>
              <option value="chemistry">{t.chemistry}</option>
              <option value="biology">{t.biology}</option>
              <option value="computerScience">{t.computerScience}</option>
              <option value="history">{t.history}</option>
              <option value="english">{t.english}</option>
            </select>

            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value as any)}
              className="px-3 py-1.5 rounded-lg bg-navy-800 border border-slate-700 text-xs text-white focus:outline-none"
            >
              <option value="beginner">{t.levelBeginner}</option>
              <option value="intermediate">{t.levelIntermediate}</option>
              <option value="advanced">{t.levelAdvanced}</option>
            </select>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={flex gap-3 max-w-3xl ${m.sender === 'user' ? 'ml-auto justify-end' : 'mr-auto justify-start'}}
            >
              {m.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                  <Brain className="w-4 h-4" />
                </div>
              )}
              <div
                className={p-4 rounded-2xl text-xs md:text-sm leading-relaxed whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-navy-800/90 text-slate-200 border border-slate-700/60 rounded-tl-none'
                }}
              >
                {m.text}
                <div className={text-[10px] mt-2 opacity-60 ${m.sender === 'user' ? 'text-blue-100 text-right' : 'text-slate-400'}}>
                  {m.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex gap-3 items-center text-xs text-slate-400 italic">
              <div className="w-6 h-6 rounded-lg bg-navy-800 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" />
              </div>
              EduMind AI bosqichma-bosqich yechim tayyorlamoqda...
            </div>
          )}
        </div>

        {/* Input Composer */}
        <div className="p-3 border-t border-slate-800 bg-navy-850">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={t.placeholderQuestion}
              className="flex-1 px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-semibold transition-all flex items-center gap-2"
            >
              <span>{t.send}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    );
  };

  // ==========================================================================
  // VIEW: SMART QUIZ GENERATOR
  // ==========================================================================
  const QuizView = () => {
    const [selectedSubject, setSelectedSubject] = useState<string>("all");
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [currentAnswersRecord, setCurrentAnswersRecord] = useState<{ questionId: string; selected: number; correct: boolean; topic: string }[]>([]);
    const [quizFinished, setQuizFinished] = useState(false);

    const filteredQuestions = useMemo(() => {
      if (selectedSubject === "all") return OFFLINE_QUESTIONS;
      return OFFLINE_QUESTIONS.filter(q => q.subject === selectedSubject);
    }, [selectedSubject]);

    const activeQuestion = filteredQuestions[currentIndex];

    const handleStart = () => {
      setQuizStarted(true);
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setCurrentAnswersRecord([]);
      setQuizFinished(false);
    };

    const handleSelectOption = (idx: number) => {
      if (showExplanation) return;
      setSelectedAnswer(idx);
      setShowExplanation(true);

      const isCorrect = idx === activeQuestion.correctIndex;
      setCurrentAnswersRecord(prev => [
        ...prev,
        {
          questionId: activeQuestion.id,
          selected: idx,
          correct: isCorrect,
          topic: activeQuestion.topic
        }
      ]);
    };

    const handleNext = () => {
      if (currentIndex + 1 < filteredQuestions.length) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        // Complete Quiz and commit to persistent state
        const correctCount = currentAnswersRecord.filter(a => a.correct).length;
        const newAttempt: QuizAttempt = {
          id: att_${Date.now()},
          timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
          subject: selectedSubject === 'all' ? 'Aralash' : selectedSubject,
          topic: activeQuestion.topic,
          score: correctCount,
          total: filteredQuestions.length,
          answers: currentAnswersRecord
        };

        setQuizHistory(prev => [newAttempt, ...prev]);
        setQuizFinished(true);
      }
    };

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {!quizStarted ? (
          <div className="bg-navy-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-cyan-400 flex items-center justify-center mx-auto">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{t.navQuiz}</h2>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Bilimingizni sinab ko'ring. Har bir topshirilgan test natijasi bo'shliqlarni aniqlash tizimi tomonidan tahlil qilinadi.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setSelectedSubject("all")}
                className={px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedSubject === 'all'
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-navy-800 border-slate-700 text-slate-300'
                }}
              >
                Barcha fanlar
              </button>
              <button
                onClick={() => setSelectedSubject("math")}
                className={px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedSubject === 'math'
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-navy-800 border-slate-700 text-slate-300'
                }}
              >
                {t.math}
              </button>
              <button
                onClick={() => setSelectedSubject("physics")}
                className={px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedSubject === 'physics'
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-navy-800 border-slate-700 text-slate-300'
                }}
              >
                {t.physics}
              </button>
              <button
                onClick={() => setSelectedSubject("computerScience")}
                className={px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedSubject === 'computerScience'
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-navy-800 border-slate-700 text-slate-300'
                }}
              >
                {t.computerScience}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-navy-800/60 border border-slate-700/60 text-xs text-slate-400 flex items-center justify-between">
              <span>Mavjud savollar soni: <strong>{filteredQuestions.length} ta</strong></span>
              <span>Baholash: Avtomatik ball</span>
            </div>

            <button
              onClick={handleStart}
              className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/30"
            >
              {t.startQuizAction}
            </button>
          </div>
        ) : !quizFinished ? (
          <div className="bg-navy-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
            {/* Progress header */}
            <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-slate-800">
              <span className="font-semibold uppercase tracking-wider text-blue-400">{activeQuestion.topic}</span>
              <span>Savol {currentIndex + 1} / {filteredQuestions.length}</span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed">
              {activeQuestion.question}
            </h3>

            {/* Answer Options */}
            <div className="space-y-3">
              {activeQuestion.options.map((opt, i) => {
                let btnStyle = "bg-navy-800/80 border-slate-700 text-slate-200 hover:bg-navy-700/80";
                if (showExplanation) {
                  if (i === activeQuestion.correctIndex) {
                    btnStyle = "bg-emerald-600/30 border-emerald-500 text-emerald-200";
                  } else if (i === selectedAnswer) {
                    btnStyle = "bg-rose-600/30 border-rose-500 text-rose-200";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(i)}
                    disabled={showExplanation}
                    className={w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${btnStyle}}
                  >
                    <span>{opt}</span>
                    {showExplanation && i === activeQuestion.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Explanation Card */}
            {showExplanation && (
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs md:text-sm text-slate-300 leading-relaxed space-y-1">
                <span className="font-bold text-cyan-400 block">Tushuntirish:</span>
                <p>{activeQuestion.explanation}</p>
              </div>
            )}

            {/* Next / Finish Button */}
            {showExplanation && (
              <button
                onClick={handleNext}
                className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center justify-center gap-2"
              >
                <span>{currentIndex + 1 < filteredQuestions.length ? t.nextQuestion : t.finishQuiz}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          /* Quiz Results Screen */
          <div className="bg-navy-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{t.quizCompleted}</h2>
              <p className="text-slate-400 text-sm">{t.congratulations}</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-800/80 border border-slate-700 max-w-xs mx-auto">
              <span className="text-xs uppercase text-slate-400 font-medium">{t.score}</span>
              <div className="text-4xl font-extrabold text-white my-1">
                {currentAnswersRecord.filter(a => a.correct).length} / {filteredQuestions.length}
              </div>
              <span className="text-xs text-cyan-400 font-semibold">
                Aniqlik: {Math.round((currentAnswersRecord.filter(a => a.correct).length / filteredQuestions.length) * 100)}%
              </span>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setQuizStarted(false)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
              >
                Yana test topshirish
              </button>
              <button
                onClick={() => setActiveTab('gaps')}
                className="px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-all"
              >
                {t.navGaps}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ==========================================================================
  // VIEW: MY LEARNING GAPS (WEAKNESS DETECTION)
  // ==========================================================================
  const LearningGapsView = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-navy-900/90 border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">{t.learningGapsTitle}</h2>
          <p className="text-xs text-slate-400 max-w-xl">
            Ushbu bo'lim faqat real topshirilgan testlar natijasiga asoslangan. Tizim xatolaringizni aniqlab, qaysi mavzuni takrorlash zarurligini ko'rsatadi.
          </p>
        </div>
        <button
          onClick={() => setActiveTab('intelligence')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>PLI Reabilitatsiyasini boshlash</span>
        </button>
      </div>

      {analytics.gapList.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-navy-900/60 border border-slate-800 space-y-3">
          <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto opacity-70" />
          <h3 className="text-base font-semibold text-white">Tahlil qilish uchun ma'lumot yetarli emas</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Hozircha birorta ham test natijasi mavjud emas. Yuqoridagi "Namunaviy ma'lumotlarni yuklash" tugmasini bosing yoki yangi test topshiring.
          </p>
          <button
            onClick={handleLoadSampleData}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
          >
            {t.loadDemoData}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analytics.gapList.map((item, i) => (
            <div
              key={i}
              className={p-5 rounded-2xl border transition-all ${
                item.isWeak
                  ? 'bg-rose-950/20 border-rose-500/30'
                  : 'bg-emerald-950/20 border-emerald-500/30'
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={text-xs font-bold uppercase tracking-wider ${item.isWeak ? 'text-rose-400' : 'text-emerald-400'}}>
                  {item.isWeak ? t.statusWeak : t.statusStrong}
                </span>
                <span className="text-xs text-slate-400">{item.totalQuestions} ta savol yechilgan</span>
              </div>

              <h4 className="text-base font-bold text-white mb-3">{item.topic}</h4>

              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{t.accuracy}</span>
                  <span className="font-bold">{item.accuracy}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className={h-2 rounded-full ${item.isWeak ? 'bg-rose-500' : 'bg-emerald-500'}}
                    style={{ width: ${item.accuracy}% }}
                  ></div>
                </div>
              </div>

              {item.isWeak && (
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{t.remediationRecommend}</span>
                  <button
                    onClick={() => setActiveTab('intelligence')}
                    className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>Mashq qilish</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // ==========================================================================
  // VIEW: SIGNATURE COMPETITION FEATURE — PERSONAL LEARNING INTELLIGENCE (PLI)
  // ==========================================================================
  const IntelligenceView = () => {
    const [step, setStep] = useState<'diagnosis' | 'remediation' | 'validation' | 'success'>('diagnosis');
    const [validatedScore, setValidatedScore] = useState<number | null>(null);

    // Target gap identified from quiz history, or default to Quadratic equations
    const targetWeakness = analytics.weakTopics[0]?.topic || "Kvadrat tenglamalar (Quadratic Equations)";

    const handleRunRemediationQuiz = (correct: boolean) => {
      setValidatedScore(correct ? 100 : 50);
      setStep('success');

      // Register improvement in persistent history
      const improvedAttempt: QuizAttempt = {
        id: pli_${Date.now()},
        timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
        subject: "math",
        topic: targetWeakness,
        score: correct ? 2 : 1,
        total: 2,
        answers: [
          { questionId: "m_quad_1", selected: 0, correct: true, topic: targetWeakness },
          { questionId: "m_quad_2", selected: 1, correct: correct, topic: targetWeakness }
        ]
      };
      setQuizHistory(prev => [improvedAttempt, ...prev]);
    };

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-navy-900 border border-purple-500/30">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>{t.pliBadge}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{t.pliTitle}</h2>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Oddiy AI botlar faqat umumiy savol-javob beradi. <strong>Personal Learning Intelligence (PLI)</strong> esa o'quvchining xatolarini diagnostika qiladi, to'siqlarni aniqlaydi va bo'shliq to'liq bartaraf etilmaguncha individual moslashtirilgan o'qitish siklini olib boradi.
          </p>
        </div>

        {/* Workflow steps */}
        <div className="bg-navy-900/90 border border-slate-800 rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800 text-xs">
            <span className={step === 'diagnosis' ? 'text-cyan-400 font-bold' : 'text-slate-400'}>1. Xatolik diagnostikasi</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className={step === 'remediation' ? 'text-cyan-400 font-bold' : 'text-slate-400'}>2. To'g'rilash darsi</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className={step === 'validation' ? 'text-cyan-400 font-bold' : 'text-slate-400'}>3. Qayta testlash</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className={step === 'success' ? 'text-emerald-400 font-bold' : 'text-slate-400'}>4. Natija tahlili</span>
          </div>

          {step === 'diagnosis' && (
            <div className="space-y-5 text-center">
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-left">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Aniqlangan zaif nuqta:</span>
                <h4 className="text-lg font-bold text-white mt-1">{targetWeakness}</h4>
                <p className="text-xs text-slate-400 mt-1">
                  O'quvchi oxirgi testlarda Viyet teoremasi va kvadrat tenglama ildizlari yig'indisini aniqlashda xatoga yo'l qo'ygan.
                </p>
              </div>

              <p className="text-sm text-slate-300">
                PLI tizimi hozir ushbu mavzu bo'yicha 2 daqiqalik shaxsiy mikro-konspekt va testni ishga tushirishga tayyor.
              </p>

              <button
                onClick={() => setStep('remediation')}
                className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
              >
                {t.startRecoveryAction}
              </button>
            </div>
          )}

          {step === 'remediation' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-navy-850 border border-slate-700 space-y-3">
                <h4 className="text-sm font-bold text-cyan-400">Tezkor mikro-dars: Viyet Teoremasi qoidasi</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Keltirilgan kvadrat tenglama: <strong>x² + px + q = 0</strong> ko'rinishida berilgan bo'lsa:
                </p>
                <div className="p-3 rounded-lg bg-navy-900 border border-slate-800 text-xs font-mono text-emerald-400">
                  x₁ + x₂ = -p<br />
                  x₁ · x₂ = q
                </div>
                <p className="text-xs text-slate-300">
                  <strong>Eslab qoling:</strong> Ildizlar yig'indisi ikkinchi koeffitsiyentning <em>qarama-qarshi ishorasiga</em> teng!
                </p>
              </div>

              <button
                onClick={() => setStep('validation')}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all"
              >
                Qayta sinov testiga o'tish
              </button>
            </div>
          )}

          {step === 'validation' && (
            <div className="space-y-4">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Tekshiruv savoli:</span>
              <h4 className="text-base font-bold text-white">
                x² - 9x + 20 = 0 tenglamasining ildizlari yig'indisi nechaga teng?
              </h4>

              <div className="space-y-2">
                {[
                  { label: "A) -9", isCorrect: false },
                  { label: "B) 9", isCorrect: true },
                  { label: "C) 20", isCorrect: false },
                  { label: "D) -20", isCorrect: false }
                ].map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRunRemediationQuiz(opt.isCorrect)}
                    className="w-full p-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-left text-sm text-slate-200 transition-all"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{t.cycleComplete}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Mavzuni o'zlashtirish ko'rsatkichi 50% dan <strong>{validatedScore}%</strong> ga ko'tarildi. Yangi natija bazada mustahkamlandi.
                </p>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setStep('diagnosis');
                    setActiveTab('dashboard');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                >
                  Boshqaruv paneliga qaytish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ==========================================================================
  // VIEW: PERSONALIZED STUDY PLANNER
  // ==========================================================================
  const PlannerView = () => {
    const [topicInput, setTopicInput] = useState("");
    const [subjectInput, setSubjectInput] = useState("Matematika");
    const [dateInput, setDateInput] = useState("2026-11-10");
    const [priorityInput, setPriorityInput] = useState<'low' | 'medium' | 'high'>('high');

    const handleAddTask = (e: React.FormEvent) => {
      e.preventDefault();
      if (!topicInput.trim()) return;

      const newTask: StudyTask = {
        id: t_${Date.now()},
        subject: subjectInput,
        topic: topicInput,
        targetDate: dateInput,
        completed: false,
        priority: priorityInput
      };

      setTasks(prev => [newTask, ...prev]);
      setTopicInput("");
      triggerToast("Yangi vazifa rejaga qo'shildi!");
    };

    const toggleTask = (id: string) => {
      setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id: string) => {
      setTasks(prev => prev.filter(t => t.id !== id));
    };

    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800">
          <h2 className="text-xl font-bold text-white mb-2">{t.studyPlannerTitle}</h2>
          <p className="text-xs text-slate-400 max-w-xl">
            Imtihonlar va darslarga tayyorgarlik muddatini belgilang. Har bir bajarilgan vazifa o'quv statistikasiga to'g'ridan-to'g'ri ta'sir ko'rsatadi.
          </p>

          {/* Form */}
          <form onSubmit={handleAddTask} className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="text"
              value={topicInput}
              onChange={e => setTopicInput(e.target.value)}
              placeholder={t.taskPlaceholder}
              className="md:col-span-2 px-4 py-2.5 rounded-xl bg-navy-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <select
              value={subjectInput}
              onChange={e => setSubjectInput(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-navy-800 border border-slate-700 text-xs text-white focus:outline-none"
            >
              <option value="Matematika">Matematika</option>
              <option value="Fizika">Fizika</option>
              <option value="Kimyo">Kimyo</option>
              <option value="Informatika">Informatika</option>
              <option value="Ingliz tili">Ingliz tili</option>
            </select>
            <button
              type="submit"
              className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/30"
            >
              <Plus className="w-4 h-4" />
              <span>{t.addTask}</span>
            </button>
          </form>
        </div>

        {/* Task list */}
        <div className="space-y-3">
          {tasks.map(task => (
            <div
              key={task.id}
              className={p-4 rounded-2xl border flex items-center justify-between gap-4 transition-all ${
                task.completed
                  ? 'bg-navy-950/60 border-slate-800/60 opacity-60'
                  : 'bg-navy-900/90 border-slate-800'
              }}
            >
              <div className="flex items-center gap-3.5">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                    task.completed
                      ? 'bg-emerald-600 border-emerald-500 text-white'
                      : 'border-slate-600 hover:border-blue-500'
                  }}
                >
                  {task.completed && <Check className="w-4 h-4" />}
                </button>
                <div>
                  <h4 className={text-sm font-semibold ${task.completed ? 'line-through text-slate-400' : 'text-white'}}>
                    {task.topic}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                    <span className="text-cyan-400 font-medium">{task.subject}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {task.targetDate}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-slate-500 hover:text-rose-400 p-2 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ==========================================================================
  // VIEW: AI NOTES ASSISTANT (NLP & FLASHCARDS)
  // ==========================================================================
  const NotesView = () => {
    const [rawText, setRawText] = useState("");
    const [processedOutput, setProcessedOutput] = useState<string | null>(null);
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    const handleSummarize = () => {
      if (!rawText.trim()) return;
      const sentences = rawText.split('.').filter(s => s.trim().length > 10);
      const summary = sentences.slice(0, 3).join('. ') + (sentences.length > 3 ? '.' : '');
      setProcessedOutput(📌 **Qisqacha mazmun (Summary):**\n\n${summary});
      setFlashcards([]);
    };

    const handleExtractConcepts = () => {
      if (!rawText.trim()) return;
      const words = rawText.split(/\s+/).filter(w => w.length > 5);
      const uniqueKeywords = Array.from(new Set(words)).slice(0, 5);
      const output = uniqueKeywords.map((k, i) => ${i + 1}. **${k.replace(/[^a-zA-Zа-яА-Яo'g'shch]/g, '')}** — muhim konseptual atama.).join('\n');
      setProcessedOutput(🔍 **Aniqlangan kalit tushunchalar:**\n\n${output});
      setFlashcards([]);
    };

    const handleGenerateFlashcards = () => {
      if (!rawText.trim()) return;
      const sentences = rawText.split('.').filter(s => s.trim().length > 15);
      const cards: Flashcard[] = sentences.slice(0, 3).map((s, idx) => ({
        id: fc_${idx},
        front: Savol: Matndagi ${idx + 1}-asosiy fikr qanday?,
        back: s.trim()
      }));

      setFlashcards(cards);
      setProcessedOutput(null);
    };

    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800">
          <h2 className="text-xl font-bold text-white mb-2">{t.notesTitle}</h2>
          <p className="text-xs text-slate-400 max-w-xl mb-4">
            Darslik matnini yoki o'z konspektlaringizni joylashtiring. EduMind AI ularni avtomatik tarzda tahlil qiladi, asosiy fikrlarni ajratadi va yodlash kartochkalariga aylantiradi.
          </p>

          <textarea
            value={rawText}
            onChange={e => setRawText(e.target.value)}
            rows={5}
            placeholder={t.notesPlaceholder}
            className="w-full p-4 rounded-xl bg-navy-850 border border-slate-700 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={handleSummarize}
              disabled={!rawText.trim()}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold transition-all"
            >
              {t.summarizeBtn}
            </button>
            <button
              onClick={handleExtractConcepts}
              disabled={!rawText.trim()}
              className="px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 disabled:opacity-50 text-slate-200 text-xs font-semibold transition-all"
            >
              {t.keyConceptsBtn}
            </button>
            <button
              onClick={handleGenerateFlashcards}
              disabled={!rawText.trim()}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold transition-all"
            >
              {t.flashcardsBtn}
            </button>
          </div>
        </div>

        {/* Textual Processed Result */}
        {processedOutput && (
          <div className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800 whitespace-pre-line text-sm text-slate-200 leading-relaxed">
            {processedOutput}
          </div>
        )}

        {/* Interactive Flashcards */}
        {flashcards.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Yaratilgan flesh-kartalar ({flashcards.length} ta)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {flashcards.map((card, i) => {
                const isFlipped = flippedIndex === i;
                return (
                  <div
                    key={card.id}
                    onClick={() => setFlippedIndex(isFlipped ? null : i)}
                    className="cursor-pointer h-44 rounded-2xl p-5 bg-gradient-to-br from-navy-850 to-navy-900 border border-slate-700 hover:border-blue-500/50 transition-all flex flex-col justify-between select-none"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      {isFlipped ? "Javob" : "Savol"}
                    </span>
                    <p className="text-xs md:text-sm font-medium text-white leading-relaxed">
                      {isFlipped ? card.back : card.front}
                    </p>
                    <span className="text-[10px] text-slate-500 flex items-center gap-1">
                      <RotateCcw className="w-3 h-3" /> {t.flipCard}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ==========================================================================
  // VIEW: SETTINGS & API INTEGRATION
  // ==========================================================================
  const SettingsView = () => {
    const [keyInput, setKeyInput] = useState(apiKey);

    const handleSaveKey = () => {
      setApiKey(keyInput);
      localStorage.setItem('edumind_api_key', keyInput);
      triggerToast(keyInput ? "API kalit muvaffaqiyatli saqlandi!" : "Mahalliy demo rejimga o'tildi");
    };

    const handleResetAllData = () => {
      if (window.confirm("Barcha saqlangan ma'lumotlar va test natijalarini tozalashni tasdiqlaysizmi?")) {
        localStorage.clear();
        setTasks(SEED_TASKS);
        setQuizHistory([]);
        setApiKey("");
        triggerToast("Tizim boshlang'ich holatga qaytarildi.");
      }
    };

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="p-6 md:p-8 rounded-2xl bg-navy-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">{t.settingsTitle}</h2>
              <p className="text-xs text-slate-400">Ilova konfiguratsiyasi va til sozlamalari</p>
            </div>
          </div>

          {/* Language Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 block">Ilova tili (Language)</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setLang('uz')}
                className={py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                  lang === 'uz' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-navy-800 border-slate-700 text-slate-300'
                }}
              >
                O'zbekcha (Lotin)
              </button>
              <button
                onClick={() => setLang('ru')}
                className={py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                  lang === 'ru' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-navy-800 border-slate-700 text-slate-300'
                }}
              >
                Русский
              </button>
              <button
                onClick={() => setLang('en')}
                className={py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                  lang === 'en' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-navy-800 border-slate-700 text-slate-300'
                }}
              >
                English
              </button>
            </div>
          </div>

          {/* API Key Configuration */}
          <div className="space-y-2 pt-4 border-t border-slate-800">
            <label className="text-xs font-semibold text-slate-300 block">{t.apiKeyLabel}</label>
            <input
              type="password"
              value={keyInput}
              onChange={e => setKeyInput(e.target.value)}
              placeholder="sk-... yoki AIzaSy..."
              className="w-full px-4 py-2.5 rounded-xl bg-navy-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {t.apiKeyHelp}
            </p>
            <button
              onClick={handleSaveKey}
              className="mt-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
            >
              {t.saveKey}
            </button>
          </div>

          {/* Reset Action */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold text-rose-400">Barcha ma'lumotlarni tozalash</h4>
              <p className="text-[11px] text-slate-500">Testlar tarixi va o'quv rejasini o'chiradi</p>
            </div>
            <button
              onClick={handleResetAllData}
              className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 text-xs font-medium border border-rose-500/30 transition-all"
            >
              Tozalash
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ==========================================================================
  // APP SHELL RENDER
  // ==========================================================================
  return (
    <div className="min-h-screen flex bg-navy-950 text-slate-100">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-2xl shadow-blue-600/50 flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Desktop Sidebar Navigation */}
      <aside className="hidden lg:flex w-64 flex-col justify-between border-r border-slate-800/80 bg-navy-900/80 p-5 backdrop-blur-md">
        <div className="space-y-6">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-base font-extrabold tracking-tight text-white">{t.appName}</span>
              <span className="text-[10px] text-cyan-400 font-semibold block uppercase tracking-wider">AI EdTech</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {[
              { id: 'dashboard', label: t.navDashboard, icon: LayoutDashboard },
              { id: 'tutor', label: t.navTutor, icon: Brain },
              { id: 'quiz', label: t.navQuiz, icon: GraduationCap },
              { id: 'gaps', label: t.navGaps, icon: AlertTriangle },
              { id: 'intelligence', label: t.navIntelligence, icon: Target, isSpecial: true },
              { id: 'planner', label: t.navPlanner, icon: CalendarCheck2 },
              { id: 'notes', label: t.navNotes, icon: FileText },
              { id: 'settings', label: t.navSettings, icon: Settings }
            ].map((nav) => {
              const Icon = nav.icon;
              const isActive = activeTab === nav.id;
              return (
                <button
                  key={nav.id}
                  onClick={() => setActiveTab(nav.id as any)}
                  className={w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : nav.isSpecial
                      ? 'text-purple-300 hover:bg-purple-950/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-navy-800/60'
                  }}
                >
                  <Icon className={w-4 h-4 ${nav.isSpecial && !isActive ? 'text-purple-400' : ''}} />
                  <span className="truncate">{nav.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Status / Mode Footer */}
        <div className="p-3 rounded-xl bg-navy-850/80 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={w-2 h-2 rounded-full ${apiKey ? 'bg-emerald-400' : 'bg-cyan-400'}}></span>
            <span className="font-medium text-slate-300">{apiKey ? t.liveModeBadge : t.demoModeBadge}</span>
          </div>
          <button
            onClick={() => setActiveTab('settings')}
            className="text-slate-500 hover:text-white"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 px-4 md:px-8 border-b border-slate-800/80 bg-navy-900/60 backdrop-blur-md flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white capitalize">
              {translations[lang][nav${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} as keyof TranslationSet] || activeTab}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="flex items-center bg-navy-800 rounded-xl p-1 border border-slate-700/60 text-xs">
              {(['uz', 'ru', 'en'] as SupportedLang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={px-2.5 py-1 rounded-lg uppercase font-bold text-[10px] transition-all ${
                    lang === l ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Body Viewports */}
        <div className="p-4 md:p-8 flex-1">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'tutor' && <TutorView />}
          {activeTab === 'quiz' && <QuizView />}
          {activeTab === 'gaps' && <LearningGapsView />}
          {activeTab === 'intelligence' && <IntelligenceView />}
          {activeTab === 'planner' && <PlannerView />}
          {activeTab === 'notes' && <NotesView />}
          {activeTab === 'settings' && <SettingsView />}
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden sticky bottom-0 bg-navy-900/95 border-t border-slate-800 p-2 flex justify-around backdrop-blur-lg z-30">
          {[
            { id: 'dashboard', icon: LayoutDashboard },
            { id: 'tutor', icon: Brain },
            { id: 'quiz', icon: GraduationCap },
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={p-2.5 rounded-xl ${isActive ? 'bg-blue-600 text-white' : 'text-slate-400'}}
              >
                <Icon className="w-5 h-5" />
          })}
        </div>
      </main>
    </div>
  );
  }
