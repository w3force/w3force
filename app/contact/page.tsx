import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Join Early Access - W3force',
  description: 'Get early access to W3force AI-powered personal finance tools. Join thousands planning smarter.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Join Early <span className="gradient-text">Access</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be the first to try our new AI-powered financial tools
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Get Updates on <span className="gradient-text">New Tools</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our waitlist and be among the first to access new personal finance tools.
                Get exclusive updates, early access to features, and help us build the future
                of smart money management.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:hello@w3force.com"
                      className="text-violet-600 hover:text-violet-700"
                    >
                      hello@w3force.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      San Francisco Bay Area
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🔗</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Follow Our Journey</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/w3force"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-violet-600 transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/company/w3force"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-violet-600 transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://twitter.com/w3force"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-violet-600 transition-colors"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12 p-8 bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Why W3force Tools?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">✓</span>
                    <span>No finance degree required—built for everyone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">✓</span>
                    <span>AI-powered insights personalized to your goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">✓</span>
                    <span>Your data stays private—all calculations run locally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">✓</span>
                    <span>Free to use, no hidden fees or subscriptions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Join the Waitlist</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is W3force really free?</h3>
              <p className="text-gray-600">
                Yes! Our financial planning tools are completely free to use. No hidden fees,
                no subscriptions, no credit card required. We believe everyone deserves access
                to quality financial planning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is my financial data secure?</h3>
              <p className="text-gray-600">
                Absolutely. Your financial information never leaves your device. All calculations
                run locally in your browser, ensuring complete privacy and security. We don't
                collect, store, or share your personal financial data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">When will new tools be available?</h3>
              <p className="text-gray-600">
                We're constantly working on new features and tools. Join our waitlist to be the
                first to know when we launch new calculators, planning tools, and AI-powered
                insights for your finances.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do I need financial expertise to use these tools?</h3>
              <p className="text-gray-600">
                Not at all! Our tools are designed for everyone, regardless of financial knowledge.
                We use simple language, clear explanations, and intuitive interfaces to make
                financial planning accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
