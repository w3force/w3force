import Link from 'next/link';
import W3ForceLogo from './W3ForceLogo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <W3ForceLogo className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold gradient-text leading-none">W3Force</h3>
                <p className="text-xs text-gray-400 mt-1">AI-Powered Innovation</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering AI-powered software and app development solutions.
              Building intelligent applications that transform businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-violet-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@w3force.com" className="text-gray-400 hover:text-violet-400 transition-colors">
                  info@w3force.com
                </a>
              </li>
              <li>
                <a href="https://github.com/w3force" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/w3force" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} W3Force. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
