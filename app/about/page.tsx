import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - W3Force',
  description: 'Learn about W3Force and our mission to make personal finance simple through AI-powered tools.',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 stagger-item" style={{animationDelay: '0.3s'}}>
              About <span className="gradient-text">W3Force</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto stagger-item" style={{animationDelay: '0.5s'}}>
              Pioneering the future of software development with AI-first solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                At W3Force, we believe in the transformative power of artificial intelligence.
                Our mission is to democratize AI technology by building intuitive, powerful
                applications that solve real-world problems.
              </p>
              <p className="text-gray-600 text-lg">
                We strive to bridge the gap between cutting-edge AI research and practical
                business applications, making advanced technology accessible to everyone.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                We envision a future where AI seamlessly integrates into every aspect of
                software development, enhancing user experiences and driving innovation
                across industries.
              </p>
              <p className="text-gray-600 text-lg">
                Through continuous innovation and a commitment to excellence, we aim to be
                the leading force in AI-powered software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">AI/ML Development</h3>
              <p className="text-gray-600">
                Build intelligent systems using machine learning, natural language processing,
                and computer vision technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-gray-600">
                Create modern web applications with React, Next.js, Node.js, and the latest
                web technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">Mobile Applications</h3>
              <p className="text-gray-600">
                Develop cross-platform mobile apps with native performance and beautiful
                user interfaces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI Recommendations</h3>
              <p className="text-gray-600">
                Get personalized financial insights powered by intelligent algorithms
                that learn from your goals and behavior.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-3">What-If Scenarios</h3>
              <p className="text-gray-600">
                Test different financial strategies instantly. See how changes in
                contributions or retirement age affect your future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Your financial data never leaves your device. All calculations run
                locally in your browser for maximum privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose W3Force */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="gradient-text">W3Force</span>
            </h2>
            <p className="text-xl text-gray-600">
              Built for young professionals, families, and anyone who wants clarity about their finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Simple</h3>
              <p className="text-gray-600 text-lg">
                No finance degree needed. Our tools speak your language and guide you
                every step of the way.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="text-5xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-3">Personalized</h3>
              <p className="text-gray-600 text-lg">
                AI-powered insights tailored to your unique situation, goals, and
                timeline.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Automated</h3>
              <p className="text-gray-600 text-lg">
                Get instant calculations and recommendations. Spend less time crunching
                numbers, more time living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your <span className="gradient-text">Financial Journey</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of people taking control of their financial future with W3Force tools.
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
