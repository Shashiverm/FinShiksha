import React from 'react';
import { User, Award, TrendingUp, Target, BookOpen, Calendar, Star, Trophy } from 'lucide-react';

const Profile = () => {
  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Completed your first learning module',
      icon: BookOpen,
      earned: true,
      earnedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Calculator Master',
      description: 'Used all financial calculators',
      icon: Target,
      earned: true,
      earnedDate: '2024-01-20'
    },
    {
      id: 3,
      title: 'Quiz Champion',
      description: 'Scored 90%+ in any quiz',
      icon: Trophy,
      earned: true,
      earnedDate: '2024-01-25'
    },
    {
      id: 4,
      title: 'Streak Master',
      description: 'Maintained 30-day learning streak',
      icon: Star,
      earned: false,
      progress: 50
    },
    {
      id: 5,
      title: 'Investment Guru',
      description: 'Complete all investment modules',
      icon: TrendingUp,
      earned: false,
      progress: 75
    },
    {
      id: 6,
      title: 'Scholar',
      description: 'Complete 20 learning modules',
      icon: Award,
      earned: false,
      progress: 60
    }
  ];

  const learningProgress = [
    { category: 'Financial Basics', completed: 8, total: 10, color: 'blue' },
    { category: 'Investment Knowledge', completed: 6, total: 12, color: 'green' },
    { category: 'Digital Finance', completed: 5, total: 8, color: 'purple' },
    { category: 'Financial Planning', completed: 3, total: 15, color: 'orange' },
    { category: 'Government Schemes', completed: 4, total: 6, color: 'red' }
  ];

  const recentActivity = [
    {
      type: 'module',
      title: 'Completed "SIP Basics" module',
      date: '2024-01-28',
      xp: 50
    },
    {
      type: 'quiz',
      title: 'Scored 85% in Investment Quiz',
      date: '2024-01-27',
      xp: 100
    },
    {
      type: 'tool',
      title: 'Used EMI Calculator',
      date: '2024-01-26',
      xp: 25
    },
    {
      type: 'achievement',
      title: 'Earned "Quiz Champion" badge',
      date: '2024-01-25',
      xp: 200
    }
  ];

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <User className="h-16 w-16 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">Learning Profile</h2>
            <p className="text-blue-100 text-lg mb-4">Track your financial literacy journey</p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">Level 3</div>
                <div className="text-sm text-blue-200">Current Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1,240</div>
                <div className="text-sm text-blue-200">Total XP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm text-blue-200">Day Streak</div>
              </div>
            </div>
          </div>
        </div>

        {/* Level Progress */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-blue-200 mb-2">
            <span>Progress to Level 4</span>
            <span>1,240 / 1,500 XP</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-300"
              style={{ width: '82%' }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Learning Progress */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Progress</h3>
            <div className="space-y-4">
              {learningProgress.map((category, index) => {
                const percentage = (category.completed / category.total) * 100;
                const colorClasses = {
                  blue: 'bg-blue-600',
                  green: 'bg-green-600',
                  purple: 'bg-purple-600',
                  orange: 'bg-orange-600',
                  red: 'bg-red-600'
                };

                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-900">{category.category}</h4>
                      <span className="text-sm text-gray-600">
                        {category.completed}/{category.total} modules
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${colorClasses[category.color]} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-500">{Math.round(percentage)}% complete</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const iconMap = {
                  module: BookOpen,
                  quiz: Award,
                  tool: Target,
                  achievement: Trophy
                };
                const Icon = iconMap[activity.type];
                
                return (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        +{activity.xp} XP
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                
                return (
                  <div 
                    key={achievement.id} 
                    className={`p-4 rounded-lg border-2 ${
                      achievement.earned 
                        ? 'border-yellow-300 bg-yellow-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        achievement.earned 
                          ? 'bg-yellow-500 text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        
                        {achievement.earned ? (
                          <span className="text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full">
                            Earned on {achievement.earnedDate}
                          </span>
                        ) : (
                          <div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                              <div 
                                className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                                style={{ width: `${achievement.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500">{achievement.progress}% complete</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Modules Completed</span>
                <span className="font-medium">26/51</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quizzes Taken</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Quiz Score</span>
                <span className="font-medium">78%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tools Used</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Study Streak</span>
                <span className="font-medium">15 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;