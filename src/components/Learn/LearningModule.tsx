import React, { useState } from 'react'
import { BookOpen, Clock, Star, Users, ArrowRight, CheckCircle, Play, Download, Share2, ArrowLeft } from 'lucide-react'

interface LearningModuleProps {
  module: {
    id: number
    title: string
    description: string
    category: string
    duration: string
    difficulty: string
    rating: number
    students: number
    completed: boolean
    progress: number
    topics: string[]
    content: {
      introduction: string
      sections: Array<{
        title: string
        content: string
        examples?: string[]
        keyPoints?: string[]
      }>
      quiz?: Array<{
        question: string
        options: string[]
        correct: number
      }>
    }
  }
  onComplete: () => void
}

const LearningModule: React.FC<LearningModuleProps> = ({ module, onComplete }) => {
  const [currentSection, setCurrentSection] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)

  const handleSectionComplete = () => {
    if (currentSection < module.content.sections.length - 1) {
      setCurrentSection(currentSection + 1)
    } else if (module.content.quiz && !showQuiz) {
      setShowQuiz(true)
    } else {
      onComplete()
    }
  }

  const handleQuizSubmit = () => {
    if (!module.content.quiz) return
    
    let correct = 0
    module.content.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.correct) {
        correct++
      }
    })
    
    setQuizScore(correct)
    setQuizSubmitted(true)
    
    // Auto-complete after showing results
    setTimeout(() => {
      onComplete()
    }, 3000)
  }

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers]
    newAnswers[questionIndex] = answerIndex
    setQuizAnswers(newAnswers)
  }

  const progressPercentage = showQuiz 
    ? 100 
    : ((currentSection + 1) / module.content.sections.length) * 100

  if (showQuiz && quizSubmitted) {
    const percentage = Math.round((quizScore / (module.content.quiz?.length || 1)) * 100)
    
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
            <p className="text-gray-600">You scored {quizScore} out of {module.content.quiz?.length} questions</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-6 mb-6">
            <div className="text-4xl font-bold text-green-600 mb-2">{percentage}%</div>
            <div className="text-lg font-medium text-gray-700">
              {percentage >= 80 ? 'Excellent! 🎉' : 
               percentage >= 60 ? 'Good job! 👍' : 
               'Keep learning! 📚'}
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Module completed successfully! You'll be redirected to the learning dashboard shortly.
          </p>

          <button
            onClick={onComplete}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Continue Learning
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Module Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-3">
              <button
                onClick={onComplete}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Back to Modules</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2 mb-3">
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {module.difficulty}
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {module.category}
              </span>
            </div>
            
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{module.title}</h1>
            <p className="text-gray-600 text-base lg:text-lg mb-4">{module.description}</p>
            
            <div className="flex items-center space-x-4 lg:space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{module.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{module.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{module.students.toLocaleString()} students</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap gap-2">
          {module.content.sections.map((section, index) => (
            <button
              key={index}
              onClick={() => !showQuiz && setCurrentSection(index)}
              disabled={showQuiz}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                showQuiz
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : index === currentSection
                  ? 'bg-blue-600 text-white'
                  : index < currentSection
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {index < currentSection && !showQuiz && <CheckCircle className="h-3 w-3 inline mr-1" />}
              {index + 1}. {section.title}
            </button>
          ))}
          {module.content.quiz && (
            <button
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                showQuiz
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Quiz
            </button>
          )}
        </div>
      </div>

      {/* Content Section */}
      {!showQuiz ? (
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <div className="prose max-w-none">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
              {module.content.sections[currentSection].title}
            </h2>
            
            <div className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line text-sm lg:text-base">
              {module.content.sections[currentSection].content}
            </div>

            {/* Examples */}
            {module.content.sections[currentSection].examples && (
              <div className="bg-blue-50 rounded-lg p-4 lg:p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Examples</h3>
                <div className="space-y-3">
                  {module.content.sections[currentSection].examples!.map((example, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                      <p className="text-gray-700 text-sm lg:text-base">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Points */}
            {module.content.sections[currentSection].keyPoints && (
              <div className="bg-green-50 rounded-lg p-4 lg:p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  {module.content.sections[currentSection].keyPoints!.map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm lg:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4">
            <button
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={handleSectionComplete}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>
                {currentSection === module.content.sections.length - 1 
                  ? (module.content.quiz ? 'Take Quiz' : 'Complete Module')
                  : 'Next Section'
                }
              </span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Quiz Section */
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Module Quiz</h2>
          <p className="text-gray-600 mb-8">Test your understanding of the concepts covered in this module.</p>
          
          <div className="space-y-6">
            {module.content.quiz!.map((question, qIndex) => (
              <div key={qIndex} className="border border-gray-200 rounded-lg p-4 lg:p-6">
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">
                  {qIndex + 1}. {question.question}
                </h3>
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <label key={oIndex} className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-gray-50">
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        value={oIndex}
                        checked={quizAnswers[qIndex] === oIndex}
                        onChange={() => handleQuizAnswer(qIndex, oIndex)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 text-sm lg:text-base">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <button
              onClick={handleQuizSubmit}
              disabled={quizAnswers.length < module.content.quiz!.length}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LearningModule