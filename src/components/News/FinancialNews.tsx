import React, { useState, useEffect } from 'react'
import { Newspaper, ExternalLink, Clock, TrendingUp, Filter } from 'lucide-react'

interface NewsItem {
  id: string
  title: string
  summary: string
  category: string
  source: string
  publishedAt: string
  url: string
  imageUrl?: string
}

const FinancialNews = () => {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'markets', name: 'Markets' },
    { id: 'banking', name: 'Banking' },
    { id: 'policy', name: 'Policy' },
    { id: 'crypto', name: 'Cryptocurrency' },
    { id: 'mutual-funds', name: 'Mutual Funds' }
  ]

  // Mock news data (in real app, this would come from an API)
  const mockNews: NewsItem[] = [
    {
      id: '1',
      title: 'RBI Keeps Repo Rate Unchanged at 6.5% in Latest Policy Review',
      summary: 'The Reserve Bank of India maintains its key lending rate, citing inflation concerns and economic stability.',
      category: 'policy',
      source: 'Economic Times',
      publishedAt: '2024-02-08T10:30:00Z',
      url: '#',
      imageUrl: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Mutual Fund SIP Inflows Hit Record High of ₹17,073 Crore in January',
      summary: 'Systematic Investment Plans continue to attract retail investors with highest monthly inflow recorded.',
      category: 'mutual-funds',
      source: 'Mint',
      publishedAt: '2024-02-07T14:15:00Z',
      url: '#',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'Digital Payment Transactions Cross ₹18 Lakh Crore Mark',
      summary: 'UPI and digital wallet transactions show robust growth, indicating increasing digital adoption.',
      category: 'banking',
      source: 'Business Standard',
      publishedAt: '2024-02-06T09:45:00Z',
      url: '#',
      imageUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      title: 'Sensex Surges 500 Points on Strong Q3 Earnings',
      summary: 'Indian stock markets rally as major companies report better-than-expected quarterly results.',
      category: 'markets',
      source: 'CNBC TV18',
      publishedAt: '2024-02-05T16:20:00Z',
      url: '#',
      imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      title: 'New Tax Rules for Cryptocurrency Trading Come into Effect',
      summary: 'Updated regulations for crypto transactions and reporting requirements announced by the government.',
      category: 'crypto',
      source: 'Moneycontrol',
      publishedAt: '2024-02-04T11:30:00Z',
      url: '#',
      imageUrl: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      title: 'HDFC Bank Launches New Savings Account with Higher Interest Rates',
      summary: 'Private sector bank introduces competitive savings product targeting young professionals.',
      category: 'banking',
      source: 'Financial Express',
      publishedAt: '2024-02-03T13:10:00Z',
      url: '#',
      imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNews(mockNews)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => item.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours} hours ago`
    return `${Math.floor(diffInHours / 24)} days ago`
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Financial News</h2>
            <p className="text-gray-600 text-lg">Stay updated with the latest financial developments</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-4">
              <Newspaper className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Filter className="h-5 w-5 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
              <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
              <div className="space-y-3">
                <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                <div className="bg-gray-300 h-4 rounded w-1/2"></div>
                <div className="bg-gray-300 h-3 rounded w-full"></div>
                <div className="bg-gray-300 h-3 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {item.imageUrl && (
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full capitalize">
                    {item.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatDate(item.publishedAt)}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.source}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    <span>Read More</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredNews.length === 0 && !loading && (
        <div className="text-center py-12">
          <Newspaper className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No news articles found for the selected category.</p>
        </div>
      )}

      {/* Market Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
          Market Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">72,500</div>
            <div className="text-sm text-gray-600">Sensex</div>
            <div className="text-xs text-green-600">+1.2%</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">22,150</div>
            <div className="text-sm text-gray-600">Nifty</div>
            <div className="text-xs text-green-600">+0.8%</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">₹83.25</div>
            <div className="text-sm text-gray-600">USD/INR</div>
            <div className="text-xs text-red-600">+0.1%</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-yellow-600">₹62,500</div>
            <div className="text-sm text-gray-600">Gold/10g</div>
            <div className="text-xs text-green-600">+0.5%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialNews