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
                Sign up to get early access to our latest financial planning tools. Be among
                the first to try new features, provide feedback, and help shape the future of
                personal finance.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@w3force.com"
                      className="text-violet-600 hover:text-violet-700"
                    >
                      info@w3force.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Silicon Valley, CA
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🔗</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Connect With Us</h3>
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
                <h3 className="text-xl font-bold mb-4">Why Choose W3force?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">✓</span>
                    <span>AI-first approach to development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">✓</span>
                    <span>Experienced team of developers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">✓</span>
                    <span>Modern tech stack and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">✓</span>
                    <span>On-time delivery and quality assurance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
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
              <h3 className="text-xl font-semibold mb-2">What services do you offer?</h3>
              <p className="text-gray-600">
                We specialize in AI-powered software development, including web applications,
                mobile apps, machine learning solutions, and AI consulting services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity and scope. A simple web application
                might take 4-8 weeks, while complex AI solutions can take 3-6 months or more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do you work with startups?</h3>
              <p className="text-gray-600">
                Absolutely! We work with businesses of all sizes, from startups to enterprises.
                We offer flexible engagement models to fit your needs and budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What technologies do you use?</h3>
              <p className="text-gray-600">
                We use modern technologies including React, Next.js, TypeScript, Python,
                TensorFlow, PyTorch, AWS, and more. We choose the best tools for each project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
