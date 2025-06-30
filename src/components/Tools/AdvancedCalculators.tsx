import React, { useState } from 'react'
import { Calculator, TrendingUp, Home, GraduationCap, Car, PiggyBank, Receipt, Percent, DollarSign, Building, Briefcase, Heart } from 'lucide-react'

const AdvancedCalculators = () => {
  const [activeCalculator, setActiveCalculator] = useState('retirement')

  type CalculatorColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo' | 'teal' | 'pink';

  const calculators = [
    { id: 'retirement', name: 'Retirement Planning', icon: PiggyBank, color: 'blue' as CalculatorColor },
    { id: 'education', name: 'Education Planning', icon: GraduationCap, color: 'green' as CalculatorColor },
    { id: 'home', name: 'Home Loan Planner', icon: Home, color: 'purple' as CalculatorColor },
    { id: 'car', name: 'Car Loan Calculator', icon: Car, color: 'orange' as CalculatorColor },
    { id: 'wealth', name: 'Wealth Calculator', icon: TrendingUp, color: 'red' as CalculatorColor },
    { id: 'tax', name: 'Tax Calculator', icon: Receipt, color: 'indigo' as CalculatorColor },
    { id: 'fd', name: 'FD Calculator', icon: Building, color: 'teal' as CalculatorColor },
    { id: 'business', name: 'Business Loan', icon: Briefcase, color: 'pink' as CalculatorColor }
  ]

  // Retirement Planning State
  const [retirementData, setRetirementData] = useState({
    currentAge: 30,
    retirementAge: 60,
    currentIncome: 1000000,
    currentExpenses: 600000,
    inflationRate: 6,
    returnRate: 12,
    currentSavings: 500000
  })

  // Education Planning State
  const [educationData, setEducationData] = useState({
    childAge: 5,
    educationAge: 18,
    currentCost: 500000,
    inflationRate: 8,
    returnRate: 12,
    currentSavings: 100000
  })

  // Home Loan State
  const [homeData, setHomeData] = useState({
    propertyValue: 5000000,
    downPayment: 1000000,
    interestRate: 8.5,
    loanTenure: 20,
    processingFee: 25000
  })

  // Car Loan State
  const [carData, setCarData] = useState({
    carPrice: 800000,
    downPayment: 200000,
    interestRate: 9.5,
    loanTenure: 5,
    processingFee: 15000
  })

  // Wealth Calculator State
  const [wealthData, setWealthData] = useState({
    initialAmount: 100000,
    monthlyInvestment: 10000,
    investmentPeriod: 15,
    expectedReturn: 12,
    stepUpPercentage: 10
  })

  // Tax Calculator State
  const [taxData, setTaxData] = useState({
    annualIncome: 1200000,
    regime: 'old',
    section80C: 150000,
    section80D: 25000,
    homeLoanInterest: 200000,
    otherDeductions: 50000
  })

  // FD Calculator State
  const [fdData, setFdData] = useState({
    principal: 100000,
    interestRate: 6.5,
    tenure: 3,
    compoundingFrequency: 'quarterly'
  })

  // Business Loan State
  const [businessData, setBusinessData] = useState({
    loanAmount: 2000000,
    interestRate: 11,
    loanTenure: 7,
    processingFee: 50000,
    businessType: 'manufacturing'
  })

  // Validation helper
  const validateInput = (value: number, min: number = 0, max: number = Infinity) => {
    return Math.max(min, Math.min(max, value || 0))
  }

  // Calculation functions
  const calculateRetirement = () => {
    try {
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
        corpusNeeded: Math.round(corpusNeeded),
        futureExpenses: Math.round(futureExpenses),
        monthlySIPRequired: Math.round(monthlySIPRequired),
        futureValueCurrentSavings: Math.round(futureValueCurrentSavings),
        yearsToRetirement
      }
    } catch (error) {
      return { corpusNeeded: 0, futureExpenses: 0, monthlySIPRequired: 0, futureValueCurrentSavings: 0, yearsToRetirement: 0 }
    }
  }

  const calculateEducation = () => {
    try {
      const yearsToEducation = educationData.educationAge - educationData.childAge
      const futureEducationCost = educationData.currentCost * Math.pow(1 + educationData.inflationRate/100, yearsToEducation)
      const futureValueCurrentSavings = educationData.currentSavings * Math.pow(1 + educationData.returnRate/100, yearsToEducation)
      const additionalAmountNeeded = Math.max(0, futureEducationCost - futureValueCurrentSavings)
      
      const monthlyRate = educationData.returnRate / 12 / 100
      const totalMonths = yearsToEducation * 12
      const monthlySIPRequired = additionalAmountNeeded * monthlyRate / (Math.pow(1 + monthlyRate, totalMonths) - 1)
      
      return {
        futureEducationCost: Math.round(futureEducationCost),
        futureValueCurrentSavings: Math.round(futureValueCurrentSavings),
        monthlySIPRequired: Math.round(monthlySIPRequired),
        yearsToEducation
      }
    } catch (error) {
      return { futureEducationCost: 0, futureValueCurrentSavings: 0, monthlySIPRequired: 0, yearsToEducation: 0 }
    }
  }

  const calculateHomeLoan = () => {
    try {
      const loanAmount = homeData.propertyValue - homeData.downPayment
      const monthlyRate = homeData.interestRate / 12 / 100
      const totalMonths = homeData.loanTenure * 12
      
      const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
      const totalAmount = emi * totalMonths
      const totalInterest = totalAmount - loanAmount
      const totalCost = homeData.propertyValue + totalInterest + homeData.processingFee
      
      return {
        loanAmount: Math.round(loanAmount),
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest),
        totalCost: Math.round(totalCost)
      }
    } catch (error) {
      return { loanAmount: 0, emi: 0, totalAmount: 0, totalInterest: 0, totalCost: 0 }
    }
  }

  const calculateCarLoan = () => {
    try {
      const loanAmount = carData.carPrice - carData.downPayment
      const monthlyRate = carData.interestRate / 12 / 100
      const totalMonths = carData.loanTenure * 12
      
      const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
      const totalAmount = emi * totalMonths
      const totalInterest = totalAmount - loanAmount
      const totalCost = carData.carPrice + totalInterest + carData.processingFee
      
      return {
        loanAmount: Math.round(loanAmount),
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest),
        totalCost: Math.round(totalCost)
      }
    } catch (error) {
      return { loanAmount: 0, emi: 0, totalAmount: 0, totalInterest: 0, totalCost: 0 }
    }
  }

  const calculateWealth = () => {
    try {
      const monthlyRate = wealthData.expectedReturn / 12 / 100
      const totalMonths = wealthData.investmentPeriod * 12
      
      // Future value of initial amount
      const futureValueInitial = wealthData.initialAmount * Math.pow(1 + wealthData.expectedReturn/100, wealthData.investmentPeriod)
      
      // Future value of SIP with step-up
      let futureValueSIP = 0
      let currentSIP = wealthData.monthlyInvestment
      
      for (let year = 1; year <= wealthData.investmentPeriod; year++) {
        const yearlyAmount = currentSIP * 12
        const yearsRemaining = wealthData.investmentPeriod - year + 1
        futureValueSIP += yearlyAmount * Math.pow(1 + wealthData.expectedReturn/100, yearsRemaining - 1)
        currentSIP = currentSIP * (1 + wealthData.stepUpPercentage/100)
      }
      
      const totalInvestment = wealthData.initialAmount + (wealthData.monthlyInvestment * 12 * wealthData.investmentPeriod)
      const totalWealth = futureValueInitial + futureValueSIP
      const totalReturns = totalWealth - totalInvestment
      
      return {
        totalWealth: Math.round(totalWealth),
        totalInvestment: Math.round(totalInvestment),
        totalReturns: Math.round(totalReturns),
        futureValueInitial: Math.round(futureValueInitial),
        futureValueSIP: Math.round(futureValueSIP)
      }
    } catch (error) {
      return { totalWealth: 0, totalInvestment: 0, totalReturns: 0, futureValueInitial: 0, futureValueSIP: 0 }
    }
  }

  const calculateTax = () => {
    try {
      const income = taxData.annualIncome
      let taxableIncome = income
      let tax = 0
      
      if (taxData.regime === 'old') {
        // Old regime with deductions
        taxableIncome = income - taxData.section80C - taxData.section80D - taxData.homeLoanInterest - taxData.otherDeductions
        
        // Tax slabs for old regime
        if (taxableIncome <= 250000) tax = 0
        else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05
        else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20
        else tax = 112500 + (taxableIncome - 1000000) * 0.30
      } else {
        // New regime without deductions
        if (taxableIncome <= 300000) tax = 0
        else if (taxableIncome <= 600000) tax = (taxableIncome - 300000) * 0.05
        else if (taxableIncome <= 900000) tax = 15000 + (taxableIncome - 600000) * 0.10
        else if (taxableIncome <= 1200000) tax = 45000 + (taxableIncome - 900000) * 0.15
        else if (taxableIncome <= 1500000) tax = 90000 + (taxableIncome - 1200000) * 0.20
        else tax = 150000 + (taxableIncome - 1500000) * 0.30
      }
      
      // Add cess
      const cess = tax * 0.04
      const totalTax = tax + cess
      const netIncome = income - totalTax
      const effectiveRate = (totalTax / income) * 100
      
      return {
        taxableIncome: Math.round(taxableIncome),
        totalTax: Math.round(totalTax),
        netIncome: Math.round(netIncome),
        effectiveRate: Math.round(effectiveRate * 100) / 100,
        totalDeductions: Math.round(income - taxableIncome)
      }
    } catch (error) {
      return { taxableIncome: 0, totalTax: 0, netIncome: 0, effectiveRate: 0, totalDeductions: 0 }
    }
  }

  const calculateFD = () => {
    try {
      const principal = fdData.principal
      const rate = fdData.interestRate / 100
      const time = fdData.tenure
      
      let compoundingFreq = 4 // quarterly
      if (fdData.compoundingFrequency === 'monthly') compoundingFreq = 12
      else if (fdData.compoundingFrequency === 'annually') compoundingFreq = 1
      else if (fdData.compoundingFrequency === 'half-yearly') compoundingFreq = 2
      
      const maturityAmount = principal * Math.pow(1 + rate/compoundingFreq, compoundingFreq * time)
      const interest = maturityAmount - principal
      const effectiveRate = (interest / principal / time) * 100
      
      return {
        maturityAmount: Math.round(maturityAmount),
        interest: Math.round(interest),
        effectiveRate: Math.round(effectiveRate * 100) / 100
      }
    } catch (error) {
      return { maturityAmount: 0, interest: 0, effectiveRate: 0 }
    }
  }

  const calculateBusinessLoan = () => {
    try {
      const loanAmount = businessData.loanAmount
      const monthlyRate = businessData.interestRate / 12 / 100
      const totalMonths = businessData.loanTenure * 12
      
      const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
      const totalAmount = emi * totalMonths
      const totalInterest = totalAmount - loanAmount
      const totalCost = loanAmount + totalInterest + businessData.processingFee
      
      return {
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest),
        totalCost: Math.round(totalCost)
      }
    } catch (error) {
      return { emi: 0, totalAmount: 0, totalInterest: 0, totalCost: 0 }
    }
  }

  // Get calculation results
  const retirementResults = calculateRetirement()
  const educationResults = calculateEducation()
  const homeResults = calculateHomeLoan()
  const carResults = calculateCarLoan()
  const wealthResults = calculateWealth()
  const taxResults = calculateTax()
  const fdResults = calculateFD()
  const businessResults = calculateBusinessLoan()

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'retirement':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Retirement Planning Calculator</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Age</label>
                    <input
                      type="number"
                      value={retirementData.currentAge}
                      onChange={(e) => setRetirementData({...retirementData, currentAge: validateInput(Number(e.target.value), 18, 65)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="18" max="65"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Retirement Age</label>
                    <input
                      type="number"
                      value={retirementData.retirementAge}
                      onChange={(e) => setRetirementData({...retirementData, retirementAge: validateInput(Number(e.target.value), 50, 75)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="50" max="75"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Income (₹)</label>
                  <input
                    type="number"
                    value={retirementData.currentIncome}
                    onChange={(e) => setRetirementData({...retirementData, currentIncome: validateInput(Number(e.target.value), 100000, 50000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="100000" max="50000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Expenses (₹)</label>
                  <input
                    type="number"
                    value={retirementData.currentExpenses}
                    onChange={(e) => setRetirementData({...retirementData, currentExpenses: validateInput(Number(e.target.value), 50000, 10000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="50000" max="10000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings (₹)</label>
                  <input
                    type="number"
                    value={retirementData.currentSavings}
                    onChange={(e) => setRetirementData({...retirementData, currentSavings: validateInput(Number(e.target.value), 0, 10000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="0" max="10000000"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Inflation (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={retirementData.inflationRate}
                      onChange={(e) => setRetirementData({...retirementData, inflationRate: validateInput(Number(e.target.value), 3, 15)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="3" max="15"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={retirementData.returnRate}
                      onChange={(e) => setRetirementData({...retirementData, returnRate: validateInput(Number(e.target.value), 6, 25)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="6" max="25"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 lg:p-6">
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
                    <div className="text-xl font-bold text-green-600">₹{retirementResults.monthlySIPRequired.toLocaleString('en-IN')}</div>
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

      case 'education':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Education Planning Calculator</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Child's Current Age</label>
                    <input
                      type="number"
                      value={educationData.childAge}
                      onChange={(e) => setEducationData({...educationData, childAge: validateInput(Number(e.target.value), 0, 17)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      min="0" max="17"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Education Start Age</label>
                    <input
                      type="number"
                      value={educationData.educationAge}
                      onChange={(e) => setEducationData({...educationData, educationAge: validateInput(Number(e.target.value), 16, 25)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      min="16" max="25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Education Cost (₹)</label>
                  <input
                    type="number"
                    value={educationData.currentCost}
                    onChange={(e) => setEducationData({...educationData, currentCost: validateInput(Number(e.target.value), 100000, 10000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    min="100000" max="10000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings for Education (₹)</label>
                  <input
                    type="number"
                    value={educationData.currentSavings}
                    onChange={(e) => setEducationData({...educationData, currentSavings: validateInput(Number(e.target.value), 0, 5000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    min="0" max="5000000"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Education Inflation (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={educationData.inflationRate}
                      onChange={(e) => setEducationData({...educationData, inflationRate: validateInput(Number(e.target.value), 5, 15)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      min="5" max="15"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={educationData.returnRate}
                      onChange={(e) => setEducationData({...educationData, returnRate: validateInput(Number(e.target.value), 8, 20)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      min="8" max="20"
                    />
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Education Planning Tips</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Start early to benefit from compounding</li>
                    <li>• Consider Sukanya Samriddhi Yojana for girl child</li>
                    <li>• Education inflation is typically higher than general inflation</li>
                    <li>• Diversify between equity and debt funds</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Education Plan Summary</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Years to Education</div>
                    <div className="text-2xl font-bold text-green-600">{educationResults.yearsToEducation} years</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Future Education Cost</div>
                    <div className="text-xl font-bold text-gray-900">₹{(educationResults.futureEducationCost/100000).toFixed(1)} L</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Monthly SIP Required</div>
                    <div className="text-xl font-bold text-green-600">₹{educationResults.monthlySIPRequired.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Current Savings Growth</div>
                    <div className="text-lg font-semibold text-blue-600">₹{(educationResults.futureValueCurrentSavings/100000).toFixed(1)} L</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'home':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Home Loan Calculator</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Value (₹)</label>
                  <input
                    type="number"
                    value={homeData.propertyValue}
                    onChange={(e) => setHomeData({...homeData, propertyValue: validateInput(Number(e.target.value), 1000000, 100000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    min="1000000" max="100000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment (₹)</label>
                  <input
                    type="number"
                    value={homeData.downPayment}
                    onChange={(e) => setHomeData({...homeData, downPayment: validateInput(Number(e.target.value), 200000, homeData.propertyValue * 0.5)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    min="200000" max={homeData.propertyValue * 0.5}
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 20% of property value</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={homeData.interestRate}
                      onChange={(e) => setHomeData({...homeData, interestRate: validateInput(Number(e.target.value), 6, 15)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      min="6" max="15"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Tenure (Years)</label>
                    <input
                      type="number"
                      value={homeData.loanTenure}
                      onChange={(e) => setHomeData({...homeData, loanTenure: validateInput(Number(e.target.value), 5, 30)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      min="5" max="30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Processing Fee (₹)</label>
                  <input
                    type="number"
                    value={homeData.processingFee}
                    onChange={(e) => setHomeData({...homeData, processingFee: validateInput(Number(e.target.value), 10000, 100000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    min="10000" max="100000"
                  />
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Home Loan Benefits</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Principal repayment: 80C deduction up to ₹1.5L</li>
                    <li>• Interest payment: Section 24 deduction up to ₹2L</li>
                    <li>• First-time buyers: Additional ₹50K deduction</li>
                    <li>• Stamp duty and registration: Tax benefits available</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Home Loan Summary</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Loan Amount</div>
                    <div className="text-xl font-bold text-purple-600">₹{(homeResults.loanAmount/100000).toFixed(1)} L</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Monthly EMI</div>
                    <div className="text-2xl font-bold text-gray-900">₹{homeResults.emi.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Interest</div>
                    <div className="text-xl font-bold text-red-600">₹{(homeResults.totalInterest/100000).toFixed(1)} L</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Cost of Property</div>
                    <div className="text-lg font-semibold text-orange-600">₹{(homeResults.totalCost/100000).toFixed(1)} L</div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-2">Payment Breakdown</div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-purple-600 h-4 rounded-l-full"
                        style={{ width: `${homeResults.totalAmount > 0 ? (homeResults.loanAmount / homeResults.totalAmount) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Principal</span>
                      <span>Interest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'car':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Car Loan Calculator</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Car Price (₹)</label>
                  <input
                    type="number"
                    value={carData.carPrice}
                    onChange={(e) => setCarData({...carData, carPrice: validateInput(Number(e.target.value), 200000, 10000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="200000" max="10000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment (₹)</label>
                  <input
                    type="number"
                    value={carData.downPayment}
                    onChange={(e) => setCarData({...carData, downPayment: validateInput(Number(e.target.value), 50000, carData.carPrice * 0.5)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="50000" max={carData.carPrice * 0.5}
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 10-15% of car price</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={carData.interestRate}
                      onChange={(e) => setCarData({...carData, interestRate: validateInput(Number(e.target.value), 7, 18)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      min="7" max="18"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Tenure (Years)</label>
                    <input
                      type="number"
                      value={carData.loanTenure}
                      onChange={(e) => setCarData({...carData, loanTenure: validateInput(Number(e.target.value), 1, 7)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      min="1" max="7"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Processing Fee (₹)</label>
                  <input
                    type="number"
                    value={carData.processingFee}
                    onChange={(e) => setCarData({...carData, processingFee: validateInput(Number(e.target.value), 5000, 50000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="5000" max="50000"
                  />
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-2">Car Loan Tips</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Compare rates from banks and NBFCs</li>
                    <li>• Consider pre-owned car loans for better deals</li>
                    <li>• Factor in insurance, maintenance costs</li>
                    <li>• Shorter tenure saves on total interest</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Car Loan Summary</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Loan Amount</div>
                    <div className="text-xl font-bold text-orange-600">₹{carResults.loanAmount.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Monthly EMI</div>
                    <div className="text-2xl font-bold text-gray-900">₹{carResults.emi.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Interest</div>
                    <div className="text-xl font-bold text-red-600">₹{carResults.totalInterest.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Cost of Car</div>
                    <div className="text-lg font-semibold text-purple-600">₹{carResults.totalCost.toLocaleString('en-IN')}</div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-2">Payment Breakdown</div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-orange-600 h-4 rounded-l-full"
                        style={{ width: `${carResults.totalAmount > 0 ? (carResults.loanAmount / carResults.totalAmount) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Principal</span>
                      <span>Interest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'wealth':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Wealth Calculator</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Initial Investment (₹)</label>
                  <input
                    type="number"
                    value={wealthData.initialAmount}
                    onChange={(e) => setWealthData({...wealthData, initialAmount: validateInput(Number(e.target.value), 10000, 10000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    min="10000" max="10000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Investment (₹)</label>
                  <input
                    type="number"
                    value={wealthData.monthlyInvestment}
                    onChange={(e) => setWealthData({...wealthData, monthlyInvestment: validateInput(Number(e.target.value), 1000, 500000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    min="1000" max="500000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Investment Period (Years)</label>
                  <input
                    type="number"
                    value={wealthData.investmentPeriod}
                    onChange={(e) => setWealthData({...wealthData, investmentPeriod: validateInput(Number(e.target.value), 1, 40)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    min="1" max="40"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={wealthData.expectedReturn}
                      onChange={(e) => setWealthData({...wealthData, expectedReturn: validateInput(Number(e.target.value), 6, 25)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      min="6" max="25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Annual Step-up (%)</label>
                    <input
                      type="number"
                      step="1"
                      value={wealthData.stepUpPercentage}
                      onChange={(e) => setWealthData({...wealthData, stepUpPercentage: validateInput(Number(e.target.value), 0, 20)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      min="0" max="20"
                    />
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Wealth Building Tips</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Start early to maximize compounding benefits</li>
                    <li>• Increase investments annually with income growth</li>
                    <li>• Diversify across asset classes</li>
                    <li>• Stay invested for long-term wealth creation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Wealth Projection</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Investment</div>
                    <div className="text-xl font-bold text-blue-600">₹{(wealthResults.totalInvestment/100000).toFixed(1)} L</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Wealth</div>
                    <div className="text-2xl font-bold text-red-600">₹{(wealthResults.totalWealth/100000).toFixed(1)} L</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Returns</div>
                    <div className="text-xl font-bold text-green-600">₹{(wealthResults.totalReturns/100000).toFixed(1)} L</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Return Multiple</div>
                    <div className="text-lg font-semibold text-purple-600">{wealthResults.totalInvestment > 0 ? (wealthResults.totalWealth/wealthResults.totalInvestment).toFixed(1) : 0}x</div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-2">Wealth Breakdown</div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-red-600 h-4 rounded-l-full"
                        style={{ width: `${wealthResults.totalWealth > 0 ? (wealthResults.totalInvestment / wealthResults.totalWealth) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Investment</span>
                      <span>Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'tax':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Tax Calculator</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income (₹)</label>
                  <input
                    type="number"
                    value={taxData.annualIncome}
                    onChange={(e) => setTaxData({...taxData, annualIncome: validateInput(Number(e.target.value), 100000, 50000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    min="100000" max="50000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tax Regime</label>
                  <select
                    value={taxData.regime}
                    onChange={(e) => setTaxData({...taxData, regime: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="old">Old Regime (with deductions)</option>
                    <option value="new">New Regime (without deductions)</option>
                  </select>
                </div>

                {taxData.regime === 'old' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Section 80C Deductions (₹)</label>
                      <input
                        type="number"
                        value={taxData.section80C}
                        onChange={(e) => setTaxData({...taxData, section80C: validateInput(Number(e.target.value), 0, 150000)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        min="0" max="150000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Maximum ₹1.5 lakhs</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Section 80D (Health Insurance) (₹)</label>
                      <input
                        type="number"
                        value={taxData.section80D}
                        onChange={(e) => setTaxData({...taxData, section80D: validateInput(Number(e.target.value), 0, 100000)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        min="0" max="100000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Home Loan Interest (₹)</label>
                      <input
                        type="number"
                        value={taxData.homeLoanInterest}
                        onChange={(e) => setTaxData({...taxData, homeLoanInterest: validateInput(Number(e.target.value), 0, 200000)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        min="0" max="200000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Maximum ₹2 lakhs for self-occupied property</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Other Deductions (₹)</label>
                      <input
                        type="number"
                        value={taxData.otherDeductions}
                        onChange={(e) => setTaxData({...taxData, otherDeductions: validateInput(Number(e.target.value), 0, 500000)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        min="0" max="500000"
                      />
                    </div>
                  </>
                )}

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-900 mb-2">Tax Saving Tips</h4>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Compare old vs new regime for your income</li>
                    <li>• Maximize 80C deductions with ELSS, PPF</li>
                    <li>• Health insurance saves tax under 80D</li>
                    <li>• Plan investments before March 31st</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Tax Calculation</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Taxable Income</div>
                    <div className="text-xl font-bold text-indigo-600">₹{taxResults.taxableIncome.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Tax (incl. cess)</div>
                    <div className="text-2xl font-bold text-red-600">₹{taxResults.totalTax.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Net Income</div>
                    <div className="text-xl font-bold text-green-600">₹{taxResults.netIncome.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Effective Tax Rate</div>
                    <div className="text-lg font-semibold text-purple-600">{taxResults.effectiveRate}%</div>
                  </div>

                  {taxData.regime === 'old' && (
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600">Total Deductions</div>
                      <div className="text-lg font-semibold text-blue-600">₹{taxResults.totalDeductions.toLocaleString('en-IN')}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )

      case 'fd':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Fixed Deposit Calculator</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Principal Amount (₹)</label>
                  <input
                    type="number"
                    value={fdData.principal}
                    onChange={(e) => setFdData({...fdData, principal: validateInput(Number(e.target.value), 1000, 10000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    min="1000" max="10000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (% per annum)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={fdData.interestRate}
                    onChange={(e) => setFdData({...fdData, interestRate: validateInput(Number(e.target.value), 3, 12)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    min="3" max="12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tenure (Years)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={fdData.tenure}
                    onChange={(e) => setFdData({...fdData, tenure: validateInput(Number(e.target.value), 0.25, 10)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    min="0.25" max="10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Compounding Frequency</label>
                  <select
                    value={fdData.compoundingFrequency}
                    onChange={(e) => setFdData({...fdData, compoundingFrequency: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="half-yearly">Half-yearly</option>
                    <option value="annually">Annually</option>
                  </select>
                </div>

                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-900 mb-2">FD Features</h4>
                  <ul className="text-sm text-teal-800 space-y-1">
                    <li>• Guaranteed returns with capital protection</li>
                    <li>• Interest taxable as per income tax slab</li>
                    <li>• Premature withdrawal allowed with penalty</li>
                    <li>• Senior citizens get 0.5% extra interest</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">FD Maturity Details</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Principal Amount</div>
                    <div className="text-xl font-bold text-teal-600">₹{fdData.principal.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Maturity Amount</div>
                    <div className="text-2xl font-bold text-gray-900">₹{fdResults.maturityAmount.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Interest Earned</div>
                    <div className="text-xl font-bold text-green-600">₹{fdResults.interest.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Effective Annual Rate</div>
                    <div className="text-lg font-semibold text-blue-600">{fdResults.effectiveRate}%</div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-2">Amount Breakdown</div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-teal-600 h-4 rounded-l-full"
                        style={{ width: `${fdResults.maturityAmount > 0 ? (fdData.principal / fdResults.maturityAmount) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Principal</span>
                      <span>Interest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'business':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Business Loan Calculator</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={businessData.loanAmount}
                    onChange={(e) => setBusinessData({...businessData, loanAmount: validateInput(Number(e.target.value), 100000, 50000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    min="100000" max="50000000"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={businessData.interestRate}
                      onChange={(e) => setBusinessData({...businessData, interestRate: validateInput(Number(e.target.value), 8, 20)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      min="8" max="20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Tenure (Years)</label>
                    <input
                      type="number"
                      value={businessData.loanTenure}
                      onChange={(e) => setBusinessData({...businessData, loanTenure: validateInput(Number(e.target.value), 1, 15)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      min="1" max="15"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <select
                    value={businessData.businessType}
                    onChange={(e) => setBusinessData({...businessData, businessType: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="manufacturing">Manufacturing</option>
                    <option value="trading">Trading</option>
                    <option value="services">Services</option>
                    <option value="retail">Retail</option>
                    <option value="agriculture">Agriculture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Processing Fee (₹)</label>
                  <input
                    type="number"
                    value={businessData.processingFee}
                    onChange={(e) => setBusinessData({...businessData, processingFee: validateInput(Number(e.target.value), 10000, 200000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    min="10000" max="200000"
                  />
                </div>

                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-900 mb-2">Business Loan Benefits</h4>
                  <ul className="text-sm text-pink-800 space-y-1">
                    <li>• Interest payments are tax deductible</li>
                    <li>• PMMY scheme for loans up to ₹10 lakhs</li>
                    <li>• CGTMSE guarantee for collateral-free loans</li>
                    <li>• Special rates for women entrepreneurs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Business Loan Summary</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Loan Amount</div>
                    <div className="text-xl font-bold text-pink-600">₹{(businessData.loanAmount/100000).toFixed(1)} L</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Monthly EMI</div>
                    <div className="text-2xl font-bold text-gray-900">₹{businessResults.emi.toLocaleString('en-IN')}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Interest</div>
                    <div className="text-xl font-bold text-red-600">₹{(businessResults.totalInterest/100000).toFixed(1)} L</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Cost</div>
                    <div className="text-lg font-semibold text-purple-600">₹{(businessResults.totalCost/100000).toFixed(1)} L</div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-2">Payment Breakdown</div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-pink-600 h-4 rounded-l-full"
                        style={{ width: `${businessResults.totalAmount > 0 ? (businessData.loanAmount / businessResults.totalAmount) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Principal</span>
                      <span>Interest</span>
                    </div>
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
    <div className="space-y-6 lg:space-y-8">
      {/* Calculator Selection */}
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Financial Calculators</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4">
          {calculators.map((calc) => {
            const colorClasses: Record<'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo' | 'teal' | 'pink', string> = {
              blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
              green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
              purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
              orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
              red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
              indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
              teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
              pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
            }
            const Icon = calc.icon;
            return (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`p-3 lg:p-4 rounded-lg transition-all duration-200 text-center ${
                  activeCalculator === calc.id
                    ? `bg-gradient-to-r ${colorClasses[calc.color]} text-white shadow-lg transform scale-105`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <Icon className="h-5 lg:h-6 w-5 lg:w-6 mx-auto mb-2" />
                <span className="text-xs font-medium">{calc.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Calculator Content */}
      <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
        {renderCalculator()}
      </div>

      {/* Advanced Tips */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl p-4 lg:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Heart className="h-5 w-5 mr-2 text-red-500" />
          Advanced Financial Planning Tips
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Retirement Planning</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Start retirement planning in your 20s</li>
              <li>• Aim for 70-80% of pre-retirement income</li>
              <li>• Consider inflation in retirement planning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Loan Management</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Compare interest rates across lenders</li>
              <li>• Consider prepayment to reduce interest</li>
              <li>• Maintain good credit score for better rates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Tax Optimization</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Plan tax-saving investments early</li>
              <li>• Compare old vs new tax regime</li>
              <li>• Keep all investment proofs ready</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedCalculators