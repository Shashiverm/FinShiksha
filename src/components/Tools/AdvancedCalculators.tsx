import React, { useState } from 'react'
import { Calculator, TrendingUp, Home, GraduationCap, Car, PiggyBank } from 'lucide-react'

const AdvancedCalculators = () => {
  const [activeCalculator, setActiveCalculator] = useState('retirement')

  const calculators = [
    { id: 'retirement', name: 'Retirement Planning', icon: PiggyBank, color: 'blue' },
    { id: 'education', name: 'Education Planning', icon: GraduationCap, color: 'green' },
    { id: 'home', name: 'Home Loan Planner', icon: Home, color: 'purple' },
    { id: 'car', name: 'Car Loan Calculator', icon: Car, color: 'orange' },
    { id: 'wealth', name: 'Wealth Calculator', icon: TrendingUp, color: 'red' },
    { id: 'tax', name: 'Tax Calculator', icon: Calculator, color: 'indigo' }
  ]

  const [retirementData, setRetirementData] = useState({
    currentAge: 30,
    retirementAge: 60,
    currentIncome: 1000000,
    currentExpenses: 600000,
    inflationRate: 6,
    returnRate: 12,
    currentSavings: 500000
  })

  const calculateRetirement = () => {
    const yearsToRetirement = retirementData.retirementAge - retirementData.currentAge
    const yearsInRetirement = 25 // Assuming 25 years post retirement
    
    // Future value of current expenses at retirement
    const futureExpenses = retirementData.currentExpenses * Math.pow(1 + retirementData.inflationRate/100, yearsToRetirement)
    
    // Corpus needed at retirement (considering inflation during retirement)
    const realReturnRate = (retirementData.returnRate - retirementData.inflationRate) / 100
    const corpusNeeded = futureExpenses * ((1 - Math.pow(1 + realReturnRate, -yearsInRetirement)) / realReturnRate)
    
    // Future value of current savings
    const futureValueCurrentSavings = retirementData.currentSavings * Math.pow(1 + retirementData.returnRate/100, yearsToRetirement)
    
    // Additional corpus needed
    const additionalCorpusNeeded = Math.max(0, corpusNeeded - futureValueCurrentSavings)
    
    // Monthly SIP required
    const monthlyRate = retirementData.returnRate / 12 / 100
    const totalMonths = yearsToRetirement * 12
    const monthlySIPRequired = additionalCorpusNeeded * monthlyRate / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    
    return {
      corpusNeeded,
      futureExpenses,
      monthlySIPRequired,
      futureValueCurrentSavings,
      yearsToRetirement
    }
  }

  const retirementResults = calculateRetirement()

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'retirement':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Retirement Planning Calculator</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Age</label>
                    <input
                      type="number"
                      value={retirementData.currentAge}
                      onChange={(e) => setRetirementData({...retirementData, currentAge: Number(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Retirement Age</label>
                    <input
                      type="number"
                      value={retirementData.retirementAge}
                      onChange={(e) => setRetirementData({...retirementData, retirementAge: Number(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Income (₹)</label>
                  <input
                    type="number"
                    value={retirementData.currentIncome}
                    onChange={(e) => setRetirementData({...retirementData, currentIncome: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Expenses (₹)</label>
                  <input
                    type="number"
                    value={retirementData.currentExpenses}
                    onChange={(e) => setRetirementData({...retirementData, currentExpenses: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings (₹)</label>
                  <input
                    type="number"
                    value={retirementData.currentSavings}
                    onChange={(e) => setRetirementData({...retirementData, currentSavings: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Inflation (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={retirementData.inflationRate}
                      onChange={(e) => setRetirementData({...retirementData, inflationRate: Number(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={retirementData.returnRate}
                      onChange={(e) => setRetirementData({...retirementData, returnRate: Number(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Retirement Plan Summary</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Years to Retirement</div>
                    <div className="text-2xl font-bold text-blue-600">{retirementResults.yearsToRetirement} years</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Corpus Needed at Retirement</div>
                    <div className="text-xl font-bold text-gray-900">₹{(retirementResults.corpusNeeded/10000000).toFixed(2)} Cr</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Monthly SIP Required</div>
                    <div className="text-xl font-bold text-green-600">₹{retirementResults.monthlySIPRequired.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Future Monthly Expenses</div>
                    <div className="text-lg font-semibold text-orange-600">₹{(retirementResults.futureExpenses/12).toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Select a calculator to get started</p>
          </div>
        )
    }
  }

  return (
    <div className="space-y-8">
      {/* Calculator Selection */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Financial Calculators</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {calculators.map((calc) => {
            const Icon = calc.icon
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
              green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
              purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
              orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
              red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
              indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
            }
            
            return (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`p-4 rounded-lg transition-all duration-200 text-center ${
                  activeCalculator === calc.id
                    ? `bg-gradient-to-r ${colorClasses[calc.color]} text-white shadow-lg transform scale-105`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <Icon className="h-6 w-6 mx-auto mb-2" />
                <span className="text-xs font-medium">{calc.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Calculator Content */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        {renderCalculator()}
      </div>
    </div>
  )
}

export default AdvancedCalculators