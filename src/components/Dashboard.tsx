import React from 'react';
import { TrendingUp, Target, Award, BookOpen, Calculator, Users, ArrowRight, Star, Clock, Play, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  type StatColor = 'blue' | 'green' | 'yellow' | 'purple';

  const stats: {
    label: string;
    value: string;
    icon: React.ElementType;
    color: StatColor;
    progress: number;
  }[] = [
    { label: 'Modules Completed', value: '12/24', icon: BookOpen, color: 'blue', progress: 50 },
    { label: 'Tools Used', value: '8', icon: Calculator, color: 'green', progress: 80 },
    { label: 'Quiz Score', value: '85%', icon: Award, color: 'yellow', progress: 85 },
    { label: 'Streak Days', value: '15', icon: Target, color: 'purple', progress: 60 },
  ];

  const recentActivities = [
    { activity: 'Completed SIP Calculator', time: '2 hours ago', type: 'tool', icon: Calculator },
    { activity: 'Finished "Emergency Fund" module', time: '1 day ago', type: 'learn', icon: BookOpen },
    { activity: 'Scored 90% in Investment Quiz', time: '2 days ago', type: 'quiz', icon: Award },
    { activity: 'Discovered PM Kisan Scheme', time: '3 days ago', type: 'scheme', icon: Target },
  ];

  type FeaturedModuleColor = 'blue' | 'green' | 'purple';

  const featuredModules: {
    title: string;
    description: string;
    progress: number;
    difficulty: string;
    time: string;
    color: FeaturedModuleColor;
  }[] = [
    {
      title: 'Digital Payments Security',
      description: 'Learn how to safely use UPI, digital wallets, and online banking',
      progress: 60,
      difficulty: 'Beginner',
      time: '15 min',
      color: 'blue'
    },
    {
      title: 'Mutual Fund Basics',
      description: 'Understanding SIP, NAV, and different types of mutual funds',
      progress: 30,
      difficulty: 'Intermediate',
      time: '25 min',
      color: 'green'
    },
    {
      title: 'Tax Saving Strategies',
      description: 'Explore 80C, ELSS, PPF and other tax-saving instruments',
      progress: 0,
      difficulty: 'Advanced',
      time: '30 min',
      color: 'purple'
    }
  ];

  type QuickActionColor = 'blue' | 'green' | 'yellow' | 'purple';

  const quickActions: {
    name: string;
    icon: React.ElementType;
    color: QuickActionColor;
    href: string;
  }[] = [
    { name: 'SIP Calculator', icon: Calculator, color: 'blue', href: '/tools' },
    { name: 'Learn Module', icon: BookOpen, color: 'green', href: '/learn' },
    { name: 'Take Quiz', icon: Award, color: 'yellow', href: '/quiz' },
    { name: 'Explore Schemes', icon: Target, color: 'purple', href: '/schemes' },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Welcome Section - Responsive */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 lg:p-8 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Welcome back, Learner!</h2>
            <p className="text-blue-100 text-base lg:text-lg">Continue your financial literacy journey</p>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid - Responsive */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'from-blue-500 to-blue-600',
            green: 'from-green-500 to-green-600',
            yellow: 'from-yellow-500 to-orange-500',
            purple: 'from-purple-500 to-purple-600'
          };
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 lg:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`bg-gradient-to-r ${colorClasses[stat.color]} p-2 lg:p-3 rounded-lg`}>
                    <Icon className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-xs lg:text-sm font-medium">{stat.label}</p>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                {/* Progress bar for mobile/tablet */}
                <div className="w-full bg-gray-200 rounded-full h-1.5 lg:h-2">
                  <div 
                    className={`bg-gradient-to-r ${colorClasses[stat.color]} h-1.5 lg:h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions - Mobile/Tablet Only */}
      <div className="lg:hidden bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              green: 'from-green-500 to-green-600',
              yellow: 'from-yellow-500 to-orange-500',
              purple: 'from-purple-500 to-purple-600'
            };
            
            return (
              <a
                key={index}
                href={action.href}
                className={`bg-gradient-to-r ${colorClasses[action.color]} text-white p-4 rounded-lg text-center hover:shadow-lg transition-all duration-200`}
              >
                <Icon className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{action.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid - Responsive Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Featured Modules - Takes 2 columns on XL screens */}
        <div className="xl:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Continue Learning</h3>
              <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 text-sm font-medium">
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4 lg:space-y-6">
              {featuredModules.map((module, index) => {
                const colorClasses = {
                  blue: 'bg-blue-600',
                  green: 'bg-green-600',
                  purple: 'bg-purple-600'
                };
                
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 lg:p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1 mb-4 lg:mb-0 lg:mr-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                            module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {module.difficulty}
                          </span>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>{module.time}</span>
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">{module.title}</h4>
                        <p className="text-gray-600 text-sm lg:text-base mb-3">{module.description}</p>
                        
                        {/* Mobile: Show progress inline */}
                        <div className="lg:hidden">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Progress</span>
                            <span>{module.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`${colorClasses[module.color]} h-2 rounded-full transition-all duration-300`}
                              style={{ width: `${module.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Desktop: Show progress in sidebar */}
                      <div className="hidden lg:block lg:w-32">
                        <div className="text-right mb-2">
                          <span className="text-sm font-medium text-gray-700">{module.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${colorClasses[module.color]} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                          {module.progress > 0 ? 'Continue' : 'Start'}
                        </button>
                      </div>
                    </div>
                    
                    {/* Mobile: Show action button */}
                    <div className="lg:hidden mt-4">
                      <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        {module.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent Activity - Takes 1 column on XL screens */}
        <div className="xl:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                
                return (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm lg:text-base font-medium text-gray-900 leading-tight">{activity.activity}</p>
                      <p className="text-xs lg:text-sm text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* View All Activities Button */}
            <div className="mt-6">
              <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium text-sm py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                View All Activities
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Progress Overview - Full Width */}
      <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Learning Progress Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {([
            { category: 'Financial Basics', completed: 8, total: 10, color: 'blue' },
            { category: 'Investment Knowledge', completed: 6, total: 12, color: 'green' },
            { category: 'Digital Finance', completed: 5, total: 8, color: 'purple' },
            { category: 'Tax Planning', completed: 3, total: 15, color: 'orange' }
          ] as {
            category: string;
            completed: number;
            total: number;
            color: 'blue' | 'green' | 'purple' | 'orange';
          }[]).map((progress, index) => {
            const percentage = (progress.completed / progress.total) * 100;
            const colorClasses: Record<'blue' | 'green' | 'purple' | 'orange', string> = {
              blue: 'bg-blue-600',
              green: 'bg-green-600',
              purple: 'bg-purple-600',
              orange: 'bg-orange-600'
            };
            
            return (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-3">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${percentage * 2.51} 251`}
                      className={colorClasses[progress.color].replace('bg-', 'text-')}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg lg:text-xl font-bold text-gray-900">{Math.round(percentage)}%</span>
                  </div>
                </div>
                <h4 className="font-medium text-gray-900 text-sm lg:text-base mb-1">{progress.category}</h4>
                <p className="text-xs lg:text-sm text-gray-500">{progress.completed}/{progress.total} modules</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;