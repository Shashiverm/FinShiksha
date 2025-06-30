import React, { useState } from 'react'
import { Users, MessageSquare, ThumbsUp, Share2, Plus, Filter, Search } from 'lucide-react'

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions')

  const discussions = [
    {
      id: 1,
      title: 'Best SIP strategy for beginners in 2024?',
      author: 'Priya Sharma',
      category: 'Investment',
      replies: 23,
      likes: 45,
      timeAgo: '2 hours ago',
      excerpt: 'I\'m 25 and just started earning. Looking for advice on starting my first SIP...'
    },
    {
      id: 2,
      title: 'Tax saving options under 80C - Need suggestions',
      author: 'Rajesh Kumar',
      category: 'Tax Planning',
      replies: 18,
      likes: 32,
      timeAgo: '5 hours ago',
      excerpt: 'With the financial year ending soon, what are the best 80C options...'
    },
    {
      id: 3,
      title: 'Emergency fund vs PPF - Where to invest first?',
      author: 'Anita Patel',
      category: 'Financial Planning',
      replies: 31,
      likes: 67,
      timeAgo: '1 day ago',
      excerpt: 'I have ₹50,000 to invest. Should I build emergency fund or start PPF...'
    },
    {
      id: 4,
      title: 'Digital payment safety tips everyone should know',
      author: 'Vikram Singh',
      category: 'Digital Finance',
      replies: 12,
      likes: 28,
      timeAgo: '2 days ago',
      excerpt: 'Sharing some important tips to stay safe while using UPI and digital wallets...'
    }
  ]

  const experts = [
    {
      id: 1,
      name: 'Dr. Meera Agarwal',
      title: 'Certified Financial Planner',
      expertise: 'Investment Planning, Tax Strategy',
      followers: 1250,
      posts: 89,
      verified: true
    },
    {
      id: 2,
      name: 'Rohit Mehta',
      title: 'Mutual Fund Advisor',
      expertise: 'SIP, Mutual Funds, Portfolio Management',
      followers: 980,
      posts: 156,
      verified: true
    },
    {
      id: 3,
      name: 'Kavita Joshi',
      title: 'Insurance Specialist',
      expertise: 'Life Insurance, Health Insurance',
      followers: 750,
      posts: 67,
      verified: false
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Mutual Fund Masterclass',
      date: '2024-02-15',
      time: '7:00 PM IST',
      speaker: 'Dr. Meera Agarwal',
      attendees: 245,
      type: 'Webinar'
    },
    {
      id: 2,
      title: 'Tax Planning Workshop',
      date: '2024-02-20',
      time: '6:30 PM IST',
      speaker: 'Rohit Mehta',
      attendees: 189,
      type: 'Workshop'
    },
    {
      id: 3,
      title: 'Digital Banking Safety Session',
      date: '2024-02-25',
      time: '8:00 PM IST',
      speaker: 'Vikram Singh',
      attendees: 156,
      type: 'Live Session'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Community</h2>
            <p className="text-gray-600 text-lg">Connect, learn, and grow with fellow learners</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-4">
              <Users className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'discussions', name: 'Discussions', icon: MessageSquare },
            { id: 'experts', name: 'Experts', icon: Users },
            { id: 'events', name: 'Events', icon: Plus }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'discussions' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Categories</option>
                  <option>Investment</option>
                  <option>Tax Planning</option>
                  <option>Financial Planning</option>
                  <option>Digital Finance</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>New Discussion</span>
              </button>
            </div>
          </div>

          {/* Discussions List */}
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {discussion.category}
                      </span>
                      <span className="text-gray-500 text-sm">{discussion.timeAgo}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{discussion.title}</h3>
                    <p className="text-gray-600 mb-3">{discussion.excerpt}</p>
                    <p className="text-sm text-gray-500">by {discussion.author}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm">{discussion.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-sm">{discussion.replies}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Join Discussion
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'experts' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <div key={expert.id} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{expert.name}</h3>
                {expert.verified && (
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <p className="text-blue-600 font-medium mb-2">{expert.title}</p>
              <p className="text-gray-600 text-sm mb-4">{expert.expertise}</p>
              
              <div className="flex justify-center space-x-4 mb-4 text-sm text-gray-500">
                <div>
                  <span className="font-medium text-gray-900">{expert.followers}</span>
                  <span className="ml-1">Followers</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">{expert.posts}</span>
                  <span className="ml-1">Posts</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Follow
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'events' && (
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                    <span className="text-gray-500 text-sm">{event.date} at {event.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">Speaker: {event.speaker}</p>
                  <p className="text-sm text-gray-500">{event.attendees} people attending</p>
                </div>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Community