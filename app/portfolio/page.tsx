import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Tools - W3force',
  description: 'Explore our suite of AI-powered personal finance tools including Nestly Advisor, My Budget, and My Stocks.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="gradient-text">Financial Tools</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered solutions that help you plan, budget, and grow your wealth with confidence
            </p>
          </div>
        </div>
      </section>

      {/* Nestly Advisor - Main Project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 gradient-bg text-white rounded-full text-sm font-semibold mb-4">
              Retirement Planning Tool
            </div>
            <h2 className="text-4xl font-bold mb-4">Nestly Advisor</h2>
            <p className="text-xl text-gray-600 mb-6">
              Watch your future grow, one nest at a time.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              Plan your retirement with complete confidence. Nestly helps you see exactly how your 
              401(k), savings, Social Security, and Medicare will add up over time. Run what-if scenarios 
              to find the perfect balance between living today and securing tomorrow—all in one simple calculator.
            </p>
            
            <a
              href="https://nestlyadvisor.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 gradient-bg text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Visit Live Site →
            </a>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">
              Key <span className="gradient-text">Features</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-8 rounded-2xl">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-3 text-violet-900">See Results in 8 Seconds</h4>
                <p className="text-gray-700">
                  Enter your age, current balance, and investment strategy to see your 
                  retirement projection instantly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-xl font-bold mb-3 text-pink-900">What-If Analysis</h4>
                <p className="text-gray-700">
                  Compare multiple retirement scenarios side-by-side to explore different 
                  strategies and understand how changes affect your outcomes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-bold mb-3 text-orange-900">Privacy First</h4>
                <p className="text-gray-700">
                  Free forever. We never send personal data to servers — calculations run 
                  entirely on your device.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold mb-3 text-teal-900">Deterministic Planning</h4>
                <p className="text-gray-700">
                  Project your retirement with a single set of fixed assumptions for a clear 
                  scenario based on conservative estimates.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-xl font-bold mb-3 text-indigo-900">Portfolio Strategies</h4>
                <p className="text-gray-700">
                  Choose from Conservative, Balanced, or Aggressive investment strategies 
                  with automatic portfolio allocation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-3 text-purple-900">IRS Compliance</h4>
                <p className="text-gray-700">
                  Automatically tracks IRS contribution limits and catch-up contributions, 
                  with projected adjustments for inflation.
                </p>
              </div>
            </div>
          </div>

          {/* Screenshots Gallery */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">
              App <span className="gradient-text">Screenshots</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Screenshot 1 - Home */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-[500px]">
                  <Image
                    src="/nestly/screenshot-1-home.png"
                    alt="Nestly Home Screen"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-bold mb-2">Quick Start Calculator</h4>
                  <p className="text-gray-600">
                    Simple, intuitive interface to get started with retirement planning in seconds.
                  </p>
                </div>
              </div>

              {/* Screenshot 2 - Analytics */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-[500px]">
                  <Image
                    src="/nestly/screenshot-2-analytics.png"
                    alt="Nestly Analytics"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-bold mb-2">Detailed Analysis</h4>
                  <p className="text-gray-600">
                    Comprehensive breakdown of your retirement readiness with monthly income projections.
                  </p>
                </div>
              </div>

              {/* Screenshot 3 - Portfolio */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-[500px]">
                  <Image
                    src="/nestly/screenshot-3-portfolio.png"
                    alt="Nestly Portfolio Projection"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-bold mb-2">Portfolio Growth</h4>
                  <p className="text-gray-600">
                    Visualize your portfolio growth over time with detailed projections.
                  </p>
                </div>
              </div>

              {/* Screenshot 4 - Scenarios */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-[500px]">
                  <Image
                    src="/nestly/screenshot-4-scenarios.png"
                    alt="Nestly Scenarios"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-bold mb-2">Multiple Scenarios</h4>
                  <p className="text-gray-600">
                    Create and compare different retirement strategies to find the best path forward.
                  </p>
                </div>
              </div>

              {/* Screenshot 5 - What-If */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow lg:col-span-2">
                <div className="relative h-[500px]">
                  <Image
                    src="/nestly/screenshot-5-whatif.png"
                    alt="Nestly What-If Planner"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-bold mb-2">What-If Planner</h4>
                  <p className="text-gray-600">
                    Balance comparison view showing multiple retirement scenarios with portfolio 
                    projections from baseline to high saving strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Outcomes */}
          <div className="bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Project <span className="gradient-text">Highlights</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">8 Sec</div>
                <p className="text-gray-700 font-semibold">Instant Results</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <p className="text-gray-700 font-semibold">Client-Side Processing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Free</div>
                <p className="text-gray-700 font-semibold">Forever</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Budget - Second Project */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 gradient-bg text-white rounded-full text-sm font-semibold mb-4">
              Windows Phone App
            </div>
            <h2 className="text-4xl font-bold mb-4">My Budget</h2>
            <p className="text-xl text-gray-600 mb-6">
              Complete personal finance management solution
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              My Budget is a comprehensive personal finance management application designed for Windows Phone. 
              Track expenses, manage multiple accounts, monitor bills, and gain complete control over your finances 
              with an intuitive Metro-style interface. Perfect for individuals and families looking to stay on top 
              of their spending and savings goals.
            </p>
            
            <a
              href="https://www.youtube.com/watch?v=rh43HHvOhOQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 gradient-bg text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Watch Demo Video →
            </a>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">
              Key <span className="gradient-text">Features</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">💳</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Account Management</h4>
                <p className="text-gray-600">
                  Manage multiple bank accounts, credit cards, and cash accounts in one place. 
                  Track balances and monitor all your financial accounts effortlessly.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🛒</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Expense Tracking</h4>
                <p className="text-gray-600">
                  Create and categorize expenses with ease. Track spending patterns, 
                  set budgets, and get insights into where your money goes each month.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Bill Management</h4>
                <p className="text-gray-600">
                  Never miss a payment again. Track recurring bills, set reminders, 
                  and manage all your payment schedules in one convenient location.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">💸</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Transaction History</h4>
                <p className="text-gray-600">
                  Comprehensive transaction logging with detailed history. 
                  Search, filter, and analyze your spending patterns over time.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Financial Reports</h4>
                <p className="text-gray-600">
                  Generate detailed financial reports and visualizations. 
                  Understand your spending habits with charts and analytics.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Customizable Settings</h4>
                <p className="text-gray-600">
                  Personalize the app to fit your needs. Configure categories, 
                  currencies, and preferences to match your financial management style.
                </p>
              </div>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">
              App <span className="gradient-text">Screenshots</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mybudget/screenshot-1-home.png"
                  alt="My Budget Home Screen"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Get Started</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mybudget/screenshot-2-accounts.jpg"
                  alt="My Budget Accounts"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Account Management</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mybudget/screenshot-3-expenses.png"
                  alt="My Budget Expenses"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Expense Tracking</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mybudget/screenshot-4-bills.png"
                  alt="My Budget Bills"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Bill Management</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mybudget/screenshot-5-transactions.png"
                  alt="My Budget Transactions"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Transaction History</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mybudget/screenshot-6-info.png"
                  alt="My Budget Information"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Financial Information</p>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className="bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Project <span className="gradient-text">Highlights</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
                <p className="text-gray-600">Downloads</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">4.8★</div>
                <p className="text-gray-600">User Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Featured</div>
                <p className="text-gray-600">Windows Store App</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Stocks - Third Project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 gradient-bg text-white rounded-full text-sm font-semibold mb-4">
              Mobile App
            </div>
            <h2 className="text-4xl font-bold mb-4">My Stocks</h2>
            <p className="text-xl text-gray-600 mb-6">
              Smart stock portfolio tracking and management
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              My Stocks is a comprehensive mobile application for tracking and managing your stock portfolios. 
              Monitor real-time market data, organize stocks into custom groups, track your investments, 
              and watch your portfolio performance with an intuitive interface designed for both novice 
              and experienced investors.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">
              Key <span className="gradient-text">Features</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Portfolio Management</h4>
                <p className="text-gray-600">
                  Organize stocks into custom groups (Tech Stocks, Oil Stocks, etc.) with real-time value tracking 
                  and percentage changes for each holding.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">👀</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Watch Lists</h4>
                <p className="text-gray-600">
                  Create and manage custom watch lists to track stocks you&apos;re interested in, 
                  with live price updates and market performance indicators.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Real-Time Data</h4>
                <p className="text-gray-600">
                  Access live stock prices, market indices (DOW, NASDAQ), and track daily gains/losses 
                  with percentage calculations for informed decision making.
                </p>
              </div>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">
              App <span className="gradient-text">Screenshots</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mystocks/screenshot-1-portfolio.png"
                  alt="My Stocks Portfolio View"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Portfolio Overview</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mystocks/screenshot-2-watchlist.png"
                  alt="My Stocks Watch List"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Watch List</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mystocks/screenshot-3.png"
                  alt="My Stocks Details"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Stock Details</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mystocks/screenshot-4.png"
                  alt="My Stocks Analytics"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Analytics View</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mystocks/screenshot-5.png"
                  alt="My Stocks Settings"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Settings</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/mystocks/screenshot-6.png"
                  alt="My Stocks Market Data"
                  width={400}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-center mt-4 text-gray-600 font-medium">Market Data</p>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className="bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Project <span className="gradient-text">Highlights</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">4.5★</div>
                <p className="text-gray-600">App Store Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Real-time</div>
                <p className="text-gray-600">Market Data Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of <span className="gradient-text">Your Finances?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our waitlist and be first to access new financial planning tools and features.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 gradient-bg text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Join Early Access
          </a>
        </div>
      </section>
    </div>
  );
}
