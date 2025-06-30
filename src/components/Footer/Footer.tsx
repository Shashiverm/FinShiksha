import React from 'react'
import { 
  IndianRupee, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  BookOpen,
  Calculator,
  Target,
  Users,
  Bot,
  Languages,
  Newspaper,
  Award,
  Shield,
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    learn: {
      title: 'Learn',
      icon: BookOpen,
      links: [
        { name: 'Financial Basics', href: '/learn', description: 'Start your journey' },
        { name: 'Investment Guide', href: '/learn', description: 'Build wealth' },
        { name: 'Tax Planning', href: '/learn', description: 'Save money' },
        { name: 'Digital Finance', href: '/learn', description: 'Stay secure' },
        { name: 'Government Schemes', href: '/schemes', description: 'Get benefits' }
      ]
    },
    tools: {
      title: 'Tools',
      icon: Calculator,
      links: [
        { name: 'SIP Calculator', href: '/tools', description: 'Plan investments' },
        { name: 'EMI Calculator', href: '/tools', description: 'Loan planning' },
        { name: 'Budget Planner', href: '/tools', description: 'Track expenses' },
        { name: 'Goal Calculator', href: '/tools', description: 'Achieve dreams' },
        { name: 'Tax Calculator', href: '/tools', description: 'Estimate taxes' }
      ]
    },
    features: {
      title: 'Features',
      icon: Bot,
      links: [
        { name: 'AI Assistant', href: '/dashboard', description: 'Smart guidance' },
        { name: 'Multi-Language', href: '/translate', description: '15+ languages' },
        { name: 'Community', href: '/community', description: 'Connect & learn' },
        { name: 'News & Updates', href: '/news', description: 'Stay informed' },
        { name: 'Quiz & Tests', href: '/quiz', description: 'Test knowledge' }
      ]
    },
    support: {
      title: 'Support',
      icon: Users,
      links: [
        { name: 'Help Center', href: '#', description: 'Get answers' },
        { name: 'Contact Us', href: '#', description: 'Reach out' },
        { name: 'FAQ', href: '#', description: 'Quick help' },
        { name: 'Feedback', href: '#', description: 'Share thoughts' },
        { name: 'Report Issue', href: '#', description: 'Technical help' }
      ]
    }
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600', bgColor: 'hover:bg-blue-50' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400', bgColor: 'hover:bg-blue-50' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600', bgColor: 'hover:bg-pink-50' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700', bgColor: 'hover:bg-blue-50' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600', bgColor: 'hover:bg-red-50' }
  ]

  const achievements = [
    { icon: Award, text: 'Best Financial Education Platform 2024' },
    { icon: Users, text: '50,000+ Active Learners' },
    { icon: Shield, text: 'Trusted by Financial Experts' },
    { icon: Languages, text: 'Available in 15+ Indian Languages' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl shadow-lg">
                <IndianRupee className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">FinShikshaInIn</h3>
                <p className="text-orange-400 text-sm font-medium">Financial Literacy for India</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Indians with essential financial knowledge through interactive learning, 
              practical tools, and AI-powered guidance. Building a financially literate India, one learner at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-sm">support@FinShikshaIn.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-sm">+91 1800-123-4567 (Toll Free)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                    <Icon className="h-3 w-3 text-orange-400" />
                    <span>{achievement.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Newspaper className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">Stay Updated with FinShikshaIn</h4>
              </div>
              <p className="text-gray-300 mb-6">
                Get the latest financial tips, market updates, and exclusive content delivered to your inbox. 
                Join 50,000+ subscribers who trust our insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2 whitespace-nowrap">
                  <span>Subscribe Free</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                📧 Weekly newsletter • 🎯 Personalized tips • 🔒 No spam, unsubscribe anytime
              </p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerSections).map(([key, section]) => {
            const Icon = section.icon
            return (
              <div key={key}>
                <div className="flex items-center space-x-2 mb-6">
                  <Icon className="h-5 w-5 text-orange-400" />
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-start space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <ArrowRight className="h-3 w-3 mt-1 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <div>
                          <div className="font-medium">{link.name}</div>
                          <div className="text-xs text-gray-500">{link.description}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-3 bg-gray-800 rounded-lg ${social.color} ${social.bgColor} transition-all duration-200 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex items-center space-x-2 text-orange-400 mb-2">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Made with love in India</span>
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Data Protected</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} FinShikshaIn. All rights reserved. 
              <span className="text-orange-400 ml-1">Empowering Financial Literacy Across India.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1">
                <span>Privacy Policy</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1">
                <span>Terms of Service</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1">
                <span>Accessibility</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gradient-to-r from-orange-500/5 to-red-500/5 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>RBI Guidelines Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-blue-400" />
              <span>Certified Financial Education</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-purple-400" />
              <span>50,000+ Trusted Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Languages className="h-4 w-4 text-orange-400" />
              <span>15+ Indian Languages</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer