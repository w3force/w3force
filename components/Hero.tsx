import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-block mb-8 px-6 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-violet-200">
          <p className="text-sm font-semibold gradient-text">AI-Powered Innovation</p>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Intelligent Software</span>
          <br />
          <span className="text-gray-800">That Transforms Business</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We craft AI-powered applications that solve real-world problems.
          From concept to deployment, we build the future of software.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/portfolio"
            className="px-8 py-4 gradient-bg text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-violet-600 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow border-2 border-violet-600"
          >
            Get In Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">AI-First</div>
            <p className="text-gray-600">Approach to Development</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">Modern</div>
            <p className="text-gray-600">Tech Stack</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">Innovative</div>
            <p className="text-gray-600">Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
