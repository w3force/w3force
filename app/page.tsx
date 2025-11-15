import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="fade-in">
      <Hero />

      {/* Company Overview */}
      <section className="py-20 bg-white stagger-item">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered financial tools that help you plan for retirement, manage your budget, 
              track investments, and achieve your money goals with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Retirement Planning */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 hover:shadow-xl transition-all hover:-translate-y-1 card-hover">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-violet-900">Retirement Planning</h3>
              <p className="text-gray-700">
                Calculate your future with precision. Run what-if scenarios, plan contributions, 
                and see exactly when you can retire with the lifestyle you want.
              </p>
            </div>

            {/* Smart Budgeting */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition-all hover:-translate-y-1 card-hover">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold mb-3 text-pink-900">Smart Budgeting</h3>
              <p className="text-gray-700">
                Take control of your spending. Track expenses, manage bills, and get AI insights 
                on where your money goes and how to save more.
              </p>
            </div>

            {/* Investment Tracking */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all hover:-translate-y-1 card-hover">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-3 text-orange-900">Investment Tracking</h3>
              <p className="text-gray-700">
                Monitor your portfolio in real-time. Track stocks, analyze performance, 
                and make informed decisions with live market data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Nestly */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 stagger-item">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Tool</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our flagship retirement planning calculator
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 lg:p-12">
                <div className="inline-block px-4 py-2 gradient-bg text-white rounded-full text-sm font-semibold mb-4">
                  Retirement Planning
                </div>
                <h3 className="text-3xl font-bold mb-4">Nestly Advisor</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Plan your retirement with confidence. See exactly how your 401(k), savings, 
                  Social Security, and Medicare will add up over time. Run what-if scenarios 
                  to find the perfect balance between saving today and enjoying tomorrow.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="text-2xl mr-3">⚡</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant Projections</h4>
                      <p className="text-gray-600">See retirement results in 8 seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-3">📊</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">What-If Analysis</h4>
                      <p className="text-gray-600">Compare multiple scenarios side-by-side</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-3">🔒</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Privacy First</h4>
                      <p className="text-gray-600">All calculations run on your device</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://nestlyadvisor.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 gradient-bg text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    Visit Live Site
                  </a>
                  <Link
                    href="/portfolio"
                    className="px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="p-8 lg:p-0">
                <div className="relative h-[500px] lg:h-full">
                  <Image
                    src="/nestly/screenshot-1-home.png"
                    alt="Nestly Advisor App"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white stagger-item">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of <span className="gradient-text">Your Money?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of people using W3Force tools to plan smarter, save more, and build lasting wealth.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 gradient-bg text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Join Early Access
          </Link>
        </div>
      </section>
    </div>
  );
}

