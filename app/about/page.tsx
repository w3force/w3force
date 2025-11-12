import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - W3force',
  description: 'Learn about W3force, our mission, and our expertise in AI-powered software development.',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="gradient-text">W3force</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#374151' }}>
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                At W3force, we believe in the transformative power of artificial intelligence.
                Our mission is to democratize AI technology by building intuitive, powerful
                applications that solve real-world problems.
              </p>
              <p className="text-gray-600 text-lg">
                We strive to bridge the gap between cutting-edge AI research and practical
                business applications, making advanced technology accessible to everyone.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#374151' }}>
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
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#374151' }}>
              What We <span className="gradient-text">Do</span>
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
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
              <p className="text-gray-600">
                Deploy and scale applications on AWS, Azure, and Google Cloud with optimal
                performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">AI Consulting</h3>
              <p className="text-gray-600">
                Strategic guidance on AI implementation, data strategy, and digital
                transformation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-gray-600">
                Design beautiful, intuitive interfaces that delight users and drive
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#374151' }}>
              Our Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-xl text-gray-600">
              We work with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js',
              'Python', 'TensorFlow', 'PyTorch', 'OpenAI',
              'AWS', 'Vercel', 'Docker', 'PostgreSQL',
              'MongoDB', 'Tailwind CSS', 'GraphQL', 'REST APIs'
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gradient-to-br from-violet-50 to-pink-50 p-6 rounded-xl text-center font-semibold text-gray-800 hover:shadow-lg transition-shadow"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#374151' }}>
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into reality with AI-powered solutions?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 gradient-bg text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
