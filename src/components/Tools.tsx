import React, { useState } from 'react';
import { Calculator, TrendingUp, PiggyBank, CreditCard, Target, IndianRupee, Home, GraduationCap } from 'lucide-react';
import AdvancedCalculators from './Tools/AdvancedCalculators';

const Tools = () => {
  const [activeCalculator, setActiveCalculator] = useState('sip');
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const [sipData, setSipData] = useState({
    monthlyAmount: 5000,
    years: 10,
    expectedReturn: 12
  });

  const [emiData, setEmiData] = useState({
    loanAmount: 500000,
    interestRate: 8.5,
    years: 20
  });

  const [budgetData, setBudgetData] = useState({
    income: 100000,
    expenses: {
      housing: 30000,
      food: 15000,
      transportation: 8000,
      utilities: 5000,
      entertainment: 7000,
      savings: 20000,
      others: 15000
    }
  });

  const [goalData, setGoalData] = useState({
    targetAmount: 1000000,
    timeframe: 5,
    expectedReturn: 10,
    currentSavings: 50000
  });

  type CalculatorColor = 'blue' | 'green' | 'purple' | 'orange';

  const basicCalculators: {
    id: string;
    name: string;
    icon: React.ElementType;
    color: CalculatorColor;
  }[] = [
    { id: 'sip', name: 'SIP Calculator', icon: TrendingUp, color: 'blue' },
    { id: 'emi', name: 'EMI Calculator', icon: CreditCard, color: 'green' },
    { id: 'budget', name: 'Budget Planner', icon: PiggyBank, color: 'purple' },
    { id: 'goal', name: 'Goal Calculator', icon: Target, color: 'orange' }
  ];

  const calculateSIP = () => {
    try {
      const monthlyRate = sipData.expectedReturn / 12 / 100;
      const totalMonths = sipData.years * 12;
      
      if (monthlyRate === 0) {
        const futureValue = sipData.monthlyAmount * totalMonths;
        const totalInvestment = sipData.monthlyAmount * totalMonths;
        const returns = 0;
        return { futureValue, totalInvestment, returns };
      }
      
      const futureValue = sipData.monthlyAmount * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
      const totalInvestment = sipData.monthlyAmount * totalMonths;
      const returns = futureValue - totalInvestment;
      
      return { 
        futureValue: Math.round(futureValue), 
        totalInvestment: Math.round(totalInvestment), 
        returns: Math.round(returns) 
      };
    } catch (error) {
      console.error('SIP calculation error:', error);
      return { futureValue: 0, totalInvestment: 0, returns: 0 };
    }
  };

  const calculateEMI = () => {
    try {
      const monthlyRate = emiData.interestRate / 12 / 100;
      const totalMonths = emiData.years * 12;
      
      if (monthlyRate === 0) {
        const emi = emiData.loanAmount / totalMonths;
        const totalAmount = emiData.loanAmount;
        const totalInterest = 0;
        return { emi: Math.round(emi), totalAmount: Math.round(totalAmount), totalInterest: 0 };
      }
      
      const emi = (emiData.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
      const totalAmount = emi * totalMonths;
      const totalInterest = totalAmount - emiData.loanAmount;
      
      return { 
        emi: Math.round(emi), 
        totalAmount: Math.round(totalAmount), 
        totalInterest: Math.round(totalInterest) 
      };
    } catch (error) {
      console.error('EMI calculation error:', error);
      return { emi: 0, totalAmount: 0, totalInterest: 0 };
    }
  };

  const calculateGoal = () => {
    try {
      const monthlyRate = goalData.expectedReturn / 12 / 100;
      const totalMonths = goalData.timeframe * 12;
      const futureValueCurrentSavings = goalData.currentSavings * Math.pow(1 + goalData.expectedReturn/100, goalData.timeframe);
      const remainingAmount = Math.max(0, goalData.targetAmount - futureValueCurrentSavings);
      
      let monthlySIP = 0;
      if (monthlyRate === 0) {
        monthlySIP = remainingAmount / totalMonths;
      } else {
        monthlySIP = remainingAmount * monthlyRate / (Math.pow(1 + monthlyRate, totalMonths) - 1);
      }
      
      return { 
        monthlySIP: Math.round(monthlySIP), 
        futureValueCurrentSavings: Math.round(futureValueCurrentSavings), 
        remainingAmount: Math.round(remainingAmount) 
      };
    } catch (error) {
      console.error('Goal calculation error:', error);
      return { monthlySIP: 0, futureValueCurrentSavings: 0, remainingAmount: 0 };
    }
  };

  const sipResults = calculateSIP();
  const emiResults = calculateEMI();
  const goalResults = calculateGoal();

  const totalBudgetExpenses = Object.values(budgetData.expenses).reduce((sum, expense) => sum + expense, 0);
  const budgetBalance = budgetData.income - totalBudgetExpenses;

  // Input validation
  const validateInput = (value: number, min: number = 0, max: number = Infinity) => {
    return Math.max(min, Math.min(max, value || 0));
  };

  if (showAdvanced) {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Advanced Financial Tools</h2>
              <p className="text-gray-600 text-base lg:text-lg">Comprehensive calculators for detailed financial planning</p>
            </div>
            <button
              onClick={() => setShowAdvanced(false)}
              className="bg-gray-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-gray-700 transition-colors text-sm lg:text-base"
            >
              Back to Basic Tools
            </button>
          </div>
        </div>

        <AdvancedCalculators />
      </div>
    );
  }

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'sip':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">SIP Investment Calculator</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Investment Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={sipData.monthlyAmount}
                    onChange={(e) => setSipData({...sipData, monthlyAmount: validateInput(Number(e.target.value), 100, 10000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="5000"
                    min="100"
                    max="10000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Period (Years)
                  </label>
                  <input
                    type="number"
                    value={sipData.years}
                    onChange={(e) => setSipData({...sipData, years: validateInput(Number(e.target.value), 1, 50)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="10"
                    min="1"
                    max="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={sipData.expectedReturn}
                    onChange={(e) => setSipData({...sipData, expectedReturn: validateInput(Number(e.target.value), 0, 50)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="12"
                    min="0"
                    max="50"
                  />
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">SIP Benefits</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Rupee cost averaging reduces market timing risk</li>
                    <li>• Disciplined investing builds wealth over time</li>
                    <li>• Power of compounding maximizes returns</li>
                    <li>• Flexible - can increase, decrease, or pause anytime</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Investment Summary</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Monthly Investment:</span>
                    <span className="font-semibold text-gray-900">₹{sipData.monthlyAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Total Investment:</span>
                    <span className="font-semibold text-gray-900">₹{sipResults.totalInvestment.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Expected Returns:</span>
                    <span className="font-semibold text-green-600">₹{sipResults.returns.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm lg:text-base">Maturity Amount:</span>
                      <span className="font-bold text-lg lg:text-xl text-blue-600">₹{sipResults.futureValue.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-2">Investment Breakdown</div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-blue-600 h-4 rounded-l-full"
                        style={{ width: `${sipResults.futureValue > 0 ? (sipResults.totalInvestment / sipResults.futureValue) * 100 : 0}%` }}
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
        );

      case 'emi':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">EMI Calculator</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={emiData.loanAmount}
                    onChange={(e) => setEmiData({...emiData, loanAmount: validateInput(Number(e.target.value), 10000, 100000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="500000"
                    min="10000"
                    max="100000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={emiData.interestRate}
                    onChange={(e) => setEmiData({...emiData, interestRate: validateInput(Number(e.target.value), 0, 50)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="8.5"
                    min="0"
                    max="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Tenure (Years)
                  </label>
                  <input
                    type="number"
                    value={emiData.years}
                    onChange={(e) => setEmiData({...emiData, years: validateInput(Number(e.target.value), 1, 50)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="20"
                    min="1"
                    max="50"
                  />
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">EMI Tips</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Choose shorter tenure to save on interest</li>
                    <li>• Make prepayments to reduce total interest</li>
                    <li>• EMI should not exceed 40% of monthly income</li>
                    <li>• Compare rates across different lenders</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">EMI Breakdown</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Monthly EMI:</span>
                    <span className="font-bold text-lg lg:text-xl text-green-600">₹{emiResults.emi.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Principal Amount:</span>
                    <span className="font-semibold text-gray-900">₹{emiData.loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Total Interest:</span>
                    <span className="font-semibold text-red-600">₹{emiResults.totalInterest.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm lg:text-base">Total Amount Payable:</span>
                      <span className="font-bold text-lg lg:text-xl text-gray-900">₹{emiResults.totalAmount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-2">Payment Breakdown</div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-green-600 h-4 rounded-l-full"
                        style={{ width: `${emiResults.totalAmount > 0 ? (emiData.loanAmount / emiResults.totalAmount) * 100 : 0}%` }}
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
        );

      case 'budget':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Monthly Budget Planner</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Income (₹)
                  </label>
                  <input
                    type="number"
                    value={budgetData.income}
                    onChange={(e) => setBudgetData({...budgetData, income: validateInput(Number(e.target.value), 0, 10000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="100000"
                    min="0"
                    max="10000000"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Monthly Expenses</h4>
                  {Object.entries(budgetData.expenses).map(([category, amount]) => (
                    <div key={category}>
                      <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                        {category} (₹)
                      </label>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setBudgetData({
                          ...budgetData,
                          expenses: {
                            ...budgetData.expenses,
                            [category]: validateInput(Number(e.target.value), 0, 1000000)
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        min="0"
                        max="1000000"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Budget Analysis</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Monthly Income:</span>
                    <span className="font-semibold text-gray-900">₹{budgetData.income.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Total Expenses:</span>
                    <span className="font-semibold text-gray-900">₹{totalBudgetExpenses.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm lg:text-base">Balance:</span>
                      <span className={`font-bold text-lg lg:text-xl ${budgetBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{budgetBalance.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-4">Expense Breakdown</div>
                    <div className="space-y-2">
                      {Object.entries(budgetData.expenses).map(([category, amount]) => {
                        const percentage = budgetData.income > 0 ? (amount / budgetData.income) * 100 : 0;
                        return (
                          <div key={category} className="flex items-center justify-between">
                            <span className="text-sm capitalize text-gray-700">{category}</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 lg:w-20 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-purple-600 h-2 rounded-full"
                                  style={{ width: `${Math.min(percentage, 100)}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500 w-8 lg:w-10">{percentage.toFixed(0)}%</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {budgetBalance < 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                      <p className="text-red-800 text-sm font-medium">⚠️ Budget Deficit</p>
                      <p className="text-red-700 text-xs mt-1">Your expenses exceed income. Consider reducing expenses or increasing income.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'goal':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Financial Goal Calculator</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={goalData.targetAmount}
                    onChange={(e) => setGoalData({...goalData, targetAmount: validateInput(Number(e.target.value), 1000, 100000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="1000000"
                    min="1000"
                    max="100000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Frame (Years)
                  </label>
                  <input
                    type="number"
                    value={goalData.timeframe}
                    onChange={(e) => setGoalData({...goalData, timeframe: validateInput(Number(e.target.value), 1, 50)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="5"
                    min="1"
                    max="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={goalData.expectedReturn}
                    onChange={(e) => setGoalData({...goalData, expectedReturn: validateInput(Number(e.target.value), 0, 50)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="10"
                    min="0"
                    max="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Savings (₹)
                  </label>
                  <input
                    type="number"
                    value={goalData.currentSavings}
                    onChange={(e) => setGoalData({...goalData, currentSavings: validateInput(Number(e.target.value), 0, 10000000)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="50000"
                    min="0"
                    max="10000000"
                  />
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-2">Goal Planning Tips</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Set SMART goals (Specific, Measurable, Achievable)</li>
                    <li>• Start early to benefit from compounding</li>
                    <li>• Review and adjust goals annually</li>
                    <li>• Consider inflation in your planning</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-4 lg:p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Goal Achievement Plan</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Target Amount:</span>
                    <span className="font-semibold text-gray-900">₹{goalData.targetAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Time Frame:</span>
                    <span className="font-semibold text-gray-900">{goalData.timeframe} years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm lg:text-base">Current Savings Growth:</span>
                    <span className="font-semibold text-blue-600">₹{goalResults.futureValueCurrentSavings.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm lg:text-base">Monthly SIP Required:</span>
                      <span className="font-bold text-lg lg:text-xl text-orange-600">₹{goalResults.monthlySIP.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm text-gray-600 mb-2">Goal Progress</div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-orange-600 h-4 rounded-full"
                        style={{ width: `${goalData.targetAmount > 0 ? Math.min((goalData.currentSavings / goalData.targetAmount) * 100, 100) : 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹{goalData.currentSavings.toLocaleString('en-IN')}</span>
                      <span>₹{goalData.targetAmount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Select a calculator to get started</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Financial Calculators</h2>
            <p className="text-gray-600 text-base lg:text-lg">Plan your finances with powerful calculation tools</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-4">
              <Calculator className="h-8 lg:h-12 w-8 lg:w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Selection */}
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Choose Calculator</h3>
          <button
            onClick={() => setShowAdvanced(true)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
          >
            Advanced Tools
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {basicCalculators.map((calc) => {
            const Icon = calc.icon;
            const colorClasses: Record<CalculatorColor, string> = {
              blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
              green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
              purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
              orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
            };
            return (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`p-3 lg:p-4 rounded-lg transition-all duration-200 ${
                  activeCalculator === calc.id
                    ? `bg-gradient-to-r ${colorClasses[calc.color]} text-white shadow-lg transform scale-105`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <Icon className="h-6 lg:h-8 w-6 lg:w-8 mx-auto mb-2" />
                <span className="text-xs lg:text-sm font-medium">{calc.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calculator Content */}
      <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
        {renderCalculator()}
      </div>

      {/* Financial Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-4 lg:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Financial Planning Tips</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">SIP Investment</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Start with small amounts and increase gradually</li>
              <li>• Stay invested for at least 5-7 years</li>
              <li>• Don't stop SIPs during market downturns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Loan Management</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Keep total EMIs under 40% of income</li>
              <li>• Make prepayments to reduce interest burden</li>
              <li>• Compare rates before taking loans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;