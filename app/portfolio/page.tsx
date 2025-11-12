import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portfolio - W3force',
  description: 'Explore our portfolio of AI-powered applications including Nestly Advisor, a comprehensive retirement planning tool.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#374151' }}>
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing innovative AI-powered solutions that make a difference
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
              Featured Project
            </div>
            <h2 className="text-4xl font-bold mb-4">Nestly Advisor</h2>
            <p className="text-xl text-gray-600 mb-6">
              Watch your future grow, one nest at a time.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              Nestly helps you project your savings, 401(k), Social Security, Medicare costs, 
              and investments over time — guiding you to build a secure financial future. 
              An intelligent retirement planning tool with instant projections and privacy-first design.
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
            <h3 className="text-3xl font-bold mb-8" style={{ color: '#374151' }}>
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
            <h3 className="text-3xl font-bold mb-8" style={{ color: '#374151' }}>
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

          {/* Tech Stack */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8" style={{ color: '#374151' }}>
              Tech <span className="gradient-text">Stack</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Next.js',
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Vercel',
                'Chart.js',
                'Local Storage',
                'PWA'
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-violet-50 to-pink-50 p-4 rounded-xl text-center font-semibold text-gray-800"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Project Outcomes */}
          <div className="bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#374151' }}>
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

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your <span className="gradient-text">Next Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s build something amazing together with AI-powered solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 gradient-bg text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
