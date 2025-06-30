import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, Trophy, RotateCcw, ArrowRight } from 'lucide-react';

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizCategories = [
    {
      id: 'basic',
      title: 'Financial Basics',
      description: 'Test your knowledge of fundamental financial concepts',
      difficulty: 'Beginner',
      questions: 10,
      color: 'blue'
    },
    {
      id: 'investment',
      title: 'Investment Knowledge',
      description: 'Assess your understanding of investment options in India',
      difficulty: 'Intermediate',
      questions: 12,
      color: 'green'
    },
    {
      id: 'digital',
      title: 'Digital Finance',
      description: 'Evaluate your digital payment and banking knowledge',
      difficulty: 'Beginner',
      questions: 8,
      color: 'purple'
    },
    {
      id: 'planning',
      title: 'Financial Planning',
      description: 'Test your financial planning and budgeting skills',
      difficulty: 'Advanced',
      questions: 15,
      color: 'orange'
    }
  ];

  const quizzes = {
    basic: {
      title: 'Financial Basics Quiz',
      questions: [
        {
          question: 'What is the current repo rate set by RBI (as of 2024)?',
          options: ['5.5%', '6.5%', '7.0%', '6.0%'],
          correct: 1,
          explanation: 'The RBI repo rate is a key policy rate that influences borrowing costs across the economy.'
        },
        {
          question: 'Which of the following is NOT covered under Section 80C tax deductions?',
          options: ['PPF', 'ELSS', 'Fixed Deposits', 'Life Insurance Premium'],
          correct: 2,
          explanation: 'Regular Fixed Deposits do not qualify for 80C deductions, only Tax Saver FDs with 5-year lock-in period.'
        },
        {
          question: 'What is the maximum insurance coverage under PMJDY account?',
          options: ['₹1 lakh', '₹2 lakh', '₹50,000', '₹5 lakh'],
          correct: 1,
          explanation: 'PMJDY accounts come with RuPay debit card having accident insurance of ₹2 lakh.'
        },
        {
          question: 'The minimum amount required to open a PPF account is:',
          options: ['₹100', '₹500', '₹1000', '₹250'],
          correct: 1,
          explanation: 'PPF account can be opened with a minimum deposit of ₹500 per year.'
        },
        {
          question: 'What does SIP stand for in mutual funds?',
          options: ['Systematic Investment Plan', 'Simple Investment Plan', 'Systematic Income Plan', 'Special Investment Plan'],
          correct: 0,
          explanation: 'SIP allows you to invest a fixed amount regularly in mutual funds.'
        }
      ]
    },
    investment: {
      title: 'Investment Knowledge Quiz',
      questions: [
        {
          question: 'What is NAV in mutual funds?',
          options: ['Net Asset Value', 'New Asset Value', 'National Asset Value', 'Net Annual Value'],
          correct: 0,
          explanation: 'NAV represents the per-unit market value of all securities held by the mutual fund.'
        },
        {
          question: 'Which type of mutual fund is best for tax saving under 80C?',
          options: ['Liquid Fund', 'ELSS', 'Gold Fund', 'Debt Fund'],
          correct: 1,
          explanation: 'ELSS (Equity Linked Savings Scheme) offers tax deduction under 80C with 3-year lock-in period.'
        },
        {
          question: 'What is the lock-in period for ELSS mutual funds?',
          options: ['1 year', '2 years', '3 years', '5 years'],
          correct: 2,
          explanation: 'ELSS has the shortest lock-in period of 3 years among all 80C investment options.'
        }
      ]
    },
    digital: {
      title: 'Digital Finance Quiz',
      questions: [
        {
          question: 'What is the full form of UPI?',
          options: ['United Payment Interface', 'Unified Payment Interface', 'Universal Payment Interface', 'Unique Payment Interface'],
          correct: 1,
          explanation: 'UPI enables instant money transfer between bank accounts through mobile phones.'
        },
        {
          question: 'What should you do if you receive a suspicious SMS asking for OTP?',
          options: ['Share the OTP', 'Call the bank', 'Ignore and delete', 'Forward to friends'],
          correct: 2,
          explanation: 'Never share OTP with anyone. Banks never ask for OTP through SMS or calls.'
        }
      ]
    },
    planning: {
      title: 'Financial Planning Quiz',
      questions: [
        {
          question: 'What percentage of income should ideally go towards emergency fund?',
          options: ['3-6 months expenses', '1-2 months expenses', '12 months expenses', '1 month expenses'],
          correct: 0,
          explanation: 'Emergency fund should cover 3-6 months of essential expenses for financial security.'
        },
        {
          question: 'Which is the best investment option for long-term wealth creation?',
          options: ['Fixed Deposits', 'Gold', 'Equity Mutual Funds', 'Savings Account'],
          correct: 2,
          explanation: 'Equity mutual funds historically provide better returns for long-term wealth creation.'
        }
      ]
    }
  };

  const startQuiz = (quizId) => {
    setCurrentQuiz(quizId);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    
    if (currentQuestion < quizzes[currentQuiz].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizzes[currentQuiz].questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setQuizCompleted(false);
  };

  if (showResults) {
    const score = calculateScore();
    const totalQuestions = quizzes[currentQuiz].questions.length;
    const percentage = (score / totalQuestions) * 100;

    return (
      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
            <p className="text-gray-600">Here are your results for {quizzes[currentQuiz].title}</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-6 mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">{score}/{totalQuestions}</div>
            <div className="text-lg font-medium text-gray-700 mb-1">{percentage.toFixed(0)}% Correct</div>
            <div className="text-sm text-gray-600">
              {percentage >= 80 ? 'Excellent! 🎉' : 
               percentage >= 60 ? 'Good job! 👍' : 
               percentage >= 40 ? 'Keep learning! 📚' : 'Practice more! 💪'}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {quizzes[currentQuiz].questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-left">
                  <div className="flex items-start space-x-3">
                    {isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-2">{question.question}</p>
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Your answer:</span> {question.options[userAnswer]}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-600 mb-1">
                          <span className="font-medium">Correct answer:</span> {question.options[question.correct]}
                        </p>
                      )}
                      <p className="text-xs text-gray-500">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Take Another Quiz</span>
            </button>
            <button
              onClick={() => startQuiz(currentQuiz)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Retake This Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentQuiz) {
    const quiz = quizzes[currentQuiz];
    const question = quiz.questions[currentQuestion];

    return (
      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{quiz.title}</h2>
              <p className="text-gray-600">Question {currentQuestion + 1} of {quiz.questions.length}</p>
            </div>
            <div className="text-right">
              <div className="w-32 bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">
                {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}% Complete
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h3>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={resetQuiz}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
            >
              Exit Quiz
            </button>
            <button
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
              className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 ${
                selectedAnswer !== null
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span>{currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Financial Literacy Quiz</h2>
            <p className="text-gray-600 text-lg">Test your knowledge and earn XP points</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-4">
              <HelpCircle className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizCategories.map((category) => {
          const colorClasses = {
            blue: 'from-blue-500 to-blue-600',
            green: 'from-green-500 to-green-600',
            purple: 'from-purple-500 to-purple-600',
            orange: 'from-orange-500 to-orange-600'
          };

          return (
            <div key={category.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      category.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      category.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {category.difficulty}
                    </span>
                    <span>{category.questions} Questions</span>
                    <span>~{Math.ceil(category.questions * 1.5)} minutes</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => startQuiz(category.id)}
                className={`w-full bg-gradient-to-r ${colorClasses[category.color]} text-white font-medium py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2`}
              >
                <HelpCircle className="h-5 w-5" />
                <span>Start Quiz</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Quiz Stats */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Quiz Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600">Quizzes Taken</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">78%</div>
            <div className="text-sm text-gray-600">Average Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">1,240</div>
            <div className="text-sm text-gray-600">XP Earned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">3</div>
            <div className="text-sm text-gray-600">Badges Earned</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;