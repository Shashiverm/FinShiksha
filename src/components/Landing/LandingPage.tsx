import React, { useState } from 'react'
import { 
  IndianRupee, 
  BookOpen, 
  Calculator, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Award, 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Star,
  Globe,
  Bot,
  Languages,
  Newspaper,
  HelpCircle,
  User,
  CreditCard,
  PiggyBank,
  Home,
  GraduationCap,
  MessageSquare,
  Lightbulb,
  BarChart3,
  Smartphone,
  Lock,
  Heart,
  Zap,
  Trophy,
  Clock,
  MapPin,
  Eye
} from 'lucide-react'

interface LandingPageProps {
  onGetStarted: () => void
  onExplorePlatform?: () => void
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onExplorePlatform }) => {
  const [activeFeature, setActiveFeature] = useState(0)

  const allFeatures = [
    {
      icon: BookOpen,
      title: 'Interactive Learning Modules',
      description: 'Master financial concepts through 50+ engaging modules designed specifically for Indian markets and regulations',
      color: 'from-blue-500 to-blue-600',
      benefits: ['RBI Guidelines Compliant', 'Real Indian Examples', 'Progressive Difficulty'],
      impact: 'Empowers 50,000+ Indians with essential financial knowledge'
    },
    {
      icon: Calculator,
      title: 'Smart Financial Calculators',
      description: 'Plan your finances with SIP, EMI, retirement, and goal calculators tailored for Indian investment options',
      color: 'from-green-500 to-green-600',
      benefits: ['SIP Calculator', 'EMI Calculator', 'Retirement Planner', 'Goal Calculator'],
      impact: 'Helps families plan ₹10+ crore worth of investments annually'
    },
    {
      icon: Target,
      title: 'Government Schemes Discovery',
      description: 'Discover and apply for 25+ financial schemes like PM-KISAN, PPF, PMMY, and state-specific benefits',
      color: 'from-orange-500 to-orange-600',
      benefits: ['PM-KISAN', 'Mudra Loans', 'PPF Benefits', 'State Schemes'],
      impact: 'Connected 1 lakh+ farmers and entrepreneurs to government benefits'
    },
    {
      icon: Bot,
      title: 'AI Financial Assistant',
      description: 'Get personalized financial advice powered by advanced AI technology trained on Indian financial regulations',
      color: 'from-purple-500 to-purple-600',
      benefits: ['24/7 Availability', 'Personalized Tips', 'Smart Recommendations', 'Context Aware'],
      impact: 'Provides instant financial guidance to users across India'
    },
    {
      icon: Languages,
      title: 'Multi-Language Support',
      description: 'Learn in your preferred language with support for 15+ Indian languages including Hindi, Bengali, Tamil, and more',
      color: 'from-pink-500 to-pink-600',
      benefits: ['15+ Languages', 'Real-time Translation', 'Voice Support', 'Cultural Context'],
      impact: 'Breaks language barriers for financial education across India'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Connect with financial experts and fellow learners in our vibrant community of 50,000+ members',
      color: 'from-indigo-500 to-indigo-600',
      benefits: ['Expert Guidance', 'Peer Learning', 'Discussion Forums', 'Live Sessions'],
      impact: 'Creates a supportive ecosystem for financial literacy'
    },
    {
      icon: Newspaper,
      title: 'Financial News & Updates',
      description: 'Stay updated with latest financial developments, market news, and policy changes affecting Indian investors',
      color: 'from-red-500 to-red-600',
      benefits: ['Real-time Updates', 'Market Analysis', 'Policy Changes', 'Expert Commentary'],
      impact: 'Keeps investors informed about market opportunities and risks'
    },
    {
      icon: HelpCircle,
      title: 'Interactive Quizzes',
      description: 'Test your knowledge with comprehensive quizzes covering all aspects of financial literacy and earn rewards',
      color: 'from-yellow-500 to-yellow-600',
      benefits: ['Skill Assessment', 'Progress Tracking', 'Gamification', 'Certificates'],
      impact: 'Validates learning and builds confidence in financial decisions'
    },
    {
      icon: Shield,
      title: 'Digital Security Training',
      description: 'Learn to protect yourself from financial frauds and use digital payment systems safely',
      color: 'from-teal-500 to-teal-600',
      benefits: ['UPI Safety', 'Fraud Prevention', 'Secure Banking', 'Privacy Protection'],
      impact: 'Protects users from ₹100+ crore worth of potential financial frauds'
    },
    {
      icon: TrendingUp,
      title: 'Investment Guidance',
      description: 'Comprehensive guidance on mutual funds, stocks, bonds, and other investment options available in India',
      color: 'from-emerald-500 to-emerald-600',
      benefits: ['SIP Planning', 'Risk Assessment', 'Portfolio Building', 'Tax Optimization'],
      impact: 'Guides systematic investment of ₹1000+ crore through SIPs'
    }
  ]

  const stats = [
    { number: '50+', label: 'Learning Modules', icon: BookOpen, description: 'Comprehensive financial education' },
    { number: '15+', label: 'Languages Supported', icon: Languages, description: 'Breaking language barriers' },
    { number: '25+', label: 'Government Schemes', icon: Target, description: 'Access to benefits' },
    { number: '10+', label: 'Financial Tools', icon: Calculator, description: 'Smart planning tools' },
    { number: '50K+', label: 'Active Users', icon: Users, description: 'Growing community' },
    { number: '₹1000Cr+', label: 'Investments Guided', icon: TrendingUp, description: 'Wealth creation impact' }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer, Mumbai',
      content: 'FinShikshaIn helped me understand SIP investments in Hindi. Now I\'m confidently building my portfolio worth ₹5 lakhs!',
      rating: 5,
      avatar: '👩‍💻',
      impact: 'Started investing ₹10,000/month in SIPs'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Small Business Owner, Delhi',
      content: 'The government schemes section helped me discover PMMY loan. Got ₹5 lakh funding for my business expansion!',
      rating: 5,
      avatar: '👨‍💼',
      impact: 'Secured business loan through PMMY'
    },
    {
      name: 'Anita Patel',
      role: 'Teacher, Gujarat',
      content: 'Learning financial planning in Gujarati made it so much easier. The AI assistant is incredibly helpful!',
      rating: 5,
      avatar: '👩‍🏫',
      impact: 'Built emergency fund of ₹3 lakhs'
    },
    {
      name: 'Vikram Singh',
      role: 'Farmer, Punjab',
      content: 'Discovered PM-KISAN scheme and learned about crop insurance. Now my family\'s financial future is secure.',
      rating: 5,
      avatar: '👨‍🌾',
      impact: 'Received ₹6,000 annual PM-KISAN benefit'
    }
  ]

  const impactMetrics = [
    {
      icon: IndianRupee,
      title: '₹1000+ Crore',
      subtitle: 'Investments Facilitated',
      description: 'Through SIP planning and investment guidance'
    },
    {
      icon: Users,
      title: '50,000+',
      subtitle: 'Lives Impacted',
      description: 'Across rural and urban India'
    },
    {
      icon: Target,
      title: '1 Lakh+',
      subtitle: 'Government Benefits Claimed',
      description: 'Through scheme discovery and guidance'
    },
    {
      icon: Shield,
      title: '₹100+ Crore',
      subtitle: 'Frauds Prevented',
      description: 'Through digital security education'
    }
  ]

  const handleExplorePlatform = () => {
    if (onExplorePlatform) {
      onExplorePlatform()
    } else {
      onGetStarted()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 lg:p-3 rounded-xl shadow-lg">
                  <IndianRupee className="h-6 lg:h-10 w-6 lg:w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900">FinShikshaIn</h1>
                  <p className="text-sm lg:text-lg text-orange-600 font-medium">Financial Literacy for India</p>
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Empowering
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Financial India</span>
              </h2>
              
              <p className="text-base lg:text-xl text-gray-600 leading-relaxed">
                Join 50,000+ Indians learning essential financial skills through interactive modules, 
                AI-powered guidance, and multi-language support. Build wealth, save taxes, and secure your future with India's most comprehensive financial literacy platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <button
                  onClick={onGetStarted}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Start Learning Free</span>
                  <ArrowRight className="h-4 lg:h-5 w-4 lg:w-5" />
                </button>
                <button 
                  onClick={handleExplorePlatform}
                  className="border-2 border-gray-300 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Eye className="h-4 lg:h-5 w-4 lg:w-5" />
                  <span>Explore Platform</span>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 lg:gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 lg:h-5 w-4 lg:w-5 text-green-500" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 lg:h-5 w-4 lg:w-5 text-green-500" />
                  <span>15+ Languages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 lg:h-5 w-4 lg:w-5 text-green-500" />
                  <span>AI Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 lg:h-5 w-4 lg:w-5 text-green-500" />
                  <span>RBI Compliant</span>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-2xl p-4 lg:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900">Your Financial Journey</h3>
                    <div className="bg-green-100 text-green-800 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                      Level 3
                    </div>
                  </div>
                  
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm lg:text-base text-gray-600">Modules Completed</span>
                      <span className="font-bold text-blue-600">12/50</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div className="bg-blue-50 p-3 lg:p-4 rounded-lg text-center">
                      <div className="text-lg lg:text-2xl font-bold text-blue-600">85%</div>
                      <div className="text-xs lg:text-sm text-gray-600">Quiz Score</div>
                    </div>
                    <div className="bg-green-50 p-3 lg:p-4 rounded-lg text-center">
                      <div className="text-lg lg:text-2xl font-bold text-green-600">₹5L</div>
                      <div className="text-xs lg:text-sm text-gray-600">SIP Portfolio</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 lg:p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="h-4 lg:h-5 w-4 lg:w-5 text-purple-600" />
                      <span className="font-medium text-purple-900 text-sm lg:text-base">AI Recommendation</span>
                    </div>
                    <p className="text-xs lg:text-sm text-purple-800">Consider increasing your SIP by ₹2,000 to reach your ₹10L goal faster!</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 bg-yellow-400 text-yellow-900 px-2 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-bold shadow-lg animate-bounce">
                🎉 New Achievement!
              </div>
              <div className="absolute -bottom-2 lg:-bottom-4 -left-2 lg:-left-4 bg-purple-500 text-white px-2 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-bold shadow-lg">
                🤖 AI Assistant Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Impact on Financial India</h2>
            <p className="text-lg lg:text-xl text-blue-100">Transforming lives through financial education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm p-3 lg:p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="h-6 lg:h-8 w-6 lg:w-8 text-white" />
                  </div>
                  <div className="text-xl lg:text-2xl font-bold mb-2">{metric.title}</div>
                  <div className="text-base lg:text-lg font-medium text-blue-200 mb-2">{metric.subtitle}</div>
                  <div className="text-xs lg:text-sm text-blue-100">{metric.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Platform Statistics</h2>
            <p className="text-lg lg:text-xl text-gray-600">Numbers that showcase our commitment to financial literacy</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 lg:p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="h-6 lg:h-8 w-6 lg:w-8 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium mb-1 text-sm lg:text-base">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Financial Literacy Ecosystem
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From basic concepts to advanced strategies, our comprehensive platform 
              covers all aspects of financial literacy tailored for Indian markets and regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-blue-200"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`bg-gradient-to-r ${feature.color} p-3 lg:p-4 rounded-xl inline-block mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="h-6 lg:h-8 w-6 lg:w-8 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm lg:text-base">{feature.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 lg:h-4 w-3 lg:w-4 text-green-500" />
                        <span className="text-xs lg:text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 mt-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-3 lg:h-4 w-3 lg:w-4 text-red-500" />
                      <span className="text-xs lg:text-sm font-medium text-blue-900">Impact:</span>
                    </div>
                    <p className="text-xs lg:text-sm text-blue-800 mt-1">{feature.impact}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Stories, Real Impact
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              See how FinShikshaIn is transforming financial literacy across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 lg:h-4 w-3 lg:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm lg:text-base">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-xl lg:text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm lg:text-base">{testimonial.name}</div>
                    <div className="text-xs lg:text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-xs font-medium text-green-800">Impact:</span>
                  </div>
                  <p className="text-xs text-green-700">{testimonial.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Financial Freedom
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Simple steps to transform your financial future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: User, title: 'Sign Up Free', description: 'Create your account in 30 seconds', step: '01' },
              { icon: BookOpen, title: 'Learn & Practice', description: 'Complete modules in your language', step: '02' },
              { icon: Calculator, title: 'Plan & Calculate', description: 'Use smart tools for financial planning', step: '03' },
              { icon: TrendingUp, title: 'Invest & Grow', description: 'Build wealth with confidence', step: '04' }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center relative">
                  <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-base lg:text-lg font-bold rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <Icon className="h-8 lg:h-12 w-8 lg:w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm lg:text-base">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-purple-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-lg lg:text-xl text-orange-100 mb-8">
            Join 50,000+ Indians who are already building wealth and securing their future with FinShikshaIn. 
            Start your journey to financial freedom today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={onGetStarted}
              className="bg-white text-orange-600 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>Start Your Journey Today</span>
              <ArrowRight className="h-4 lg:h-5 w-4 lg:w-5" />
            </button>
            <button 
              onClick={handleExplorePlatform}
              className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg hover:bg-white hover:text-orange-600 transition-all duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Eye className="h-4 lg:h-5 w-4 lg:w-5" />
              <span>Explore Platform</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-orange-200 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>100% Free forever</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Available in 15+ languages</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage