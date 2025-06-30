import React, { useState } from 'react';
import { Target, Users, CheckCircle, ExternalLink, Filter, Search } from 'lucide-react';

const Schemes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Schemes' },
    { id: 'investment', name: 'Investment' },
    { id: 'insurance', name: 'Insurance' },
    { id: 'pension', name: 'Pension' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'education', name: 'Education' }
  ];

  const schemes = [
    {
      id: 1,
      name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
      category: 'agriculture',
      description: 'Direct income support to farmer families across the country with cultivable land holding',
      benefits: '₹6,000 per year in three equal installments',
      eligibility: 'Small and marginal farmers with cultivable land',
      documents: ['Land ownership documents', 'Aadhaar card', 'Bank account details'],
      website: 'https://pmkisan.gov.in',
      featured: true
    },
    {
      id: 2,
      name: 'Public Provident Fund (PPF)',
      category: 'investment',
      description: 'Long-term savings scheme with attractive interest rate and tax benefits',
      benefits: 'Tax deduction under 80C, tax-free returns, 15-year lock-in',
      eligibility: 'Indian residents, one account per person',
      documents: ['PAN card', 'Aadhaar card', 'Address proof', 'Passport-size photo'],
      website: 'https://www.india.gov.in/spotlight/public-provident-fund-ppf',
      featured: true
    },
    {
      id: 3,
      name: 'Atal Pension Yojana (APY)',
      category: 'pension',
      description: 'Guaranteed pension scheme for unorganized sector workers',
      benefits: 'Guaranteed pension of ₹1,000 to ₹5,000 per month',
      eligibility: 'Age 18-40 years, bank account holder',
      documents: ['Aadhaar card', 'Bank account details', 'Mobile number'],
      website: 'https://npscra.nsdl.co.in/apy/',
      featured: false
    },
    {
      id: 4,
      name: 'Pradhan Mantri Mudra Yojana (PMMY)',
      category: 'investment',
      description: 'Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises',
      benefits: 'Collateral-free loans, flexible repayment, business growth support',
      eligibility: 'Small business owners, entrepreneurs, self-employed individuals',
      documents: ['Business plan', 'Identity proof', 'Address proof', 'Bank statements'],
      website: 'https://www.mudra.org.in',
      featured: true
    },
    {
      id: 5,
      name: 'Sukanya Samriddhi Yojana (SSY)',
      category: 'education',
      description: 'Small deposit scheme for girl child with high interest rate and tax benefits',
      benefits: 'High interest rate, tax benefits under 80C, partial withdrawal for education',
      eligibility: 'Girl child below 10 years, Indian resident',
      documents: ['Birth certificate of girl child', 'Identity proof of guardian', 'Address proof'],
      website: 'https://www.india.gov.in/sukanya-samriddhi-yojana',
      featured: false
    },
    {
      id: 6,
      name: 'Pradhan Mantri Jan Aushadhi Yojana',
      category: 'insurance',
      description: 'Provides quality medicines at affordable prices through special kendra',
      benefits: 'Medicines at 50-90% lower prices, quality assurance',
      eligibility: 'All Indian citizens',
      documents: ['Prescription from registered medical practitioner'],
      website: 'https://janaushadhi.gov.in',
      featured: false
    }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Government Schemes</h2>
            <p className="text-gray-600 text-lg">Discover financial schemes and benefits available to you</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-4">
              <Target className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search schemes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Featured Schemes */}
      {selectedCategory === 'all' && searchTerm === '' && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Schemes</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {schemes.filter(scheme => scheme.featured).map((scheme) => (
              <div key={scheme.id} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border-2 border-blue-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">Featured</span>
                      <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full capitalize">
                        {scheme.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{scheme.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{scheme.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Benefits: </span>
                    <span className="text-sm text-gray-600">{scheme.benefits}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Eligibility: </span>
                    <span className="text-sm text-gray-600">{scheme.eligibility}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-blue-200">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Check Eligibility
                  </button>
                  <a
                    href={scheme.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Schemes */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {selectedCategory === 'all' ? 'All Schemes' : `${categories.find(c => c.id === selectedCategory)?.name} Schemes`}
          <span className="text-sm font-normal text-gray-500 ml-2">({filteredSchemes.length} schemes)</span>
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {filteredSchemes.map((scheme) => (
            <div key={scheme.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full capitalize">
                      {scheme.category}
                    </span>
                    {scheme.featured && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{scheme.name}</h4>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-900 mb-2">Benefits</h5>
                  <p className="text-sm text-gray-600">{scheme.benefits}</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900 mb-2">Eligibility</h5>
                  <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-sm font-medium text-gray-900 mb-2">Required Documents</h5>
                <div className="flex flex-wrap gap-2">
                  {scheme.documents.map((doc, index) => (
                    <span key={index} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3" />
                      <span>{doc}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-200">
                  Check Eligibility
                </button>
                <button className="flex-1 bg-green-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
                <a
                  href={scheme.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span>Learn More</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schemes;