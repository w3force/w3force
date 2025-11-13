import W3ForceLogo from '@/components/W3ForceLogo';
import W3ForceLogoAlt from '@/components/W3ForceLogoAlt';
import W3ForceLogoMark from '@/components/W3ForceLogoMark';

export default function LogoComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Choose Your <span className="gradient-text">Logo & Tagline</span>
          </h1>
          <p className="text-xl text-gray-600">
            Three professional options for W3Force branding
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Option 1 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500 p-8 text-white text-center">
              <div className="flex justify-center mb-4">
                <W3ForceLogo className="w-32 h-32 bg-white rounded-2xl p-4" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Option 1</h2>
              <p className="text-lg opacity-90">Current Design</p>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                <span className="gradient-text">W3Force</span>
              </h3>
              <p className="text-center text-gray-600 font-semibold mb-6">
                AI-Powered Innovation
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Style:</h4>
                  <p className="text-gray-600">Dynamic & Energetic</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• W3 Wave Pattern (flowing connection)</li>
                    <li>• Lightning Bolt (power & speed)</li>
                    <li>• Circuit Dots (AI elements)</li>
                    <li>• Organic, dynamic shapes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Startups</li>
                    <li>• Fast-moving companies</li>
                    <li>• Consumer-facing brands</li>
                    <li>• Innovation focus</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personality:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Energetic</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Fast</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Dynamic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-violet-500">
            <div className="bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500 p-8 text-white text-center">
              <div className="flex justify-center mb-4">
                <W3ForceLogoAlt className="w-32 h-32 bg-white rounded-2xl p-4" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Option 2</h2>
              <p className="text-lg opacity-90">Alternative Design</p>
              <div className="mt-3 inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                NEW!
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                <span className="gradient-text">W3Force</span>
              </h3>
              <p className="text-center text-gray-600 font-semibold mb-2">
                Architecting Intelligent Solutions
              </p>
              <p className="text-center text-gray-500 text-sm mb-6">
                (or: Engineering Tomorrow&apos;s Software)
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Style:</h4>
                  <p className="text-gray-600">Professional & Technical</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Hexagon Frame (structure & tech)</li>
                    <li>• W3 Typography (bold & clear)</li>
                    <li>• Neural Network (AI intelligence)</li>
                    <li>• Geometric, professional shapes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Enterprise clients</li>
                    <li>• B2B positioning</li>
                    <li>• Technical services</li>
                    <li>• Professional credibility</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personality:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Professional</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Precise</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Technical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-indigo-500">
            <div className="bg-gradient-to-br from-slate-900 via-violet-700 to-blue-500 p-8 text-white text-center">
              <div className="flex justify-center mb-4">
                <W3ForceLogoMark className="w-32 h-32 bg-white/10 rounded-2xl p-4" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Option 3</h2>
              <p className="text-lg opacity-90">Executive Mark</p>
              <div className="mt-3 inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                TRUST FOCUSED
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                <span className="gradient-text">W3Force</span>
              </h3>
              <p className="text-center text-gray-600 font-semibold mb-2">
                Secure Intelligence Delivered
              </p>
              <p className="text-center text-gray-500 text-sm mb-6">
                (or: Confidence for Critical Software)
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Style:</h4>
                  <p className="text-gray-600">Executive & Trustworthy</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Sentinel Circle (360º reliability)</li>
                    <li>• W/3 Monogram (cohesive identity)</li>
                    <li>• Orbit Path (strategic guidance)</li>
                    <li>• Signal Nodes (mission-critical focus)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Regulated industries</li>
                    <li>• Enterprise transformation</li>
                    <li>• Government & finance projects</li>
                    <li>• High-trust partnerships</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personality:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Assured</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Strategic</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Trustworthy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline Options for Option 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Option 2: <span className="gradient-text">Tagline Variations</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 border-2 border-violet-200 rounded-xl hover:border-violet-400 transition-colors">
              <h4 className="font-bold text-lg mb-2 gradient-text">
                Architecting Intelligent Solutions
              </h4>
              <p className="text-gray-600 text-sm">
                Professional, emphasizes planning and structure
              </p>
            </div>
            
            <div className="p-6 border-2 border-pink-200 rounded-xl hover:border-pink-400 transition-colors">
              <h4 className="font-bold text-lg mb-2 gradient-text">
                Engineering Tomorrow&apos;s Software
              </h4>
              <p className="text-gray-600 text-sm">
                Forward-thinking, technical expertise focus
              </p>
            </div>
            
            <div className="p-6 border-2 border-orange-200 rounded-xl hover:border-orange-400 transition-colors">
              <h4 className="font-bold text-lg mb-2 gradient-text">
                Precision in AI Development
              </h4>
              <p className="text-gray-600 text-sm">
                Technical excellence, quality-focused
              </p>
            </div>
            
            <div className="p-6 border-2 border-indigo-200 rounded-xl hover:border-indigo-400 transition-colors">
              <h4 className="font-bold text-lg mb-2 gradient-text">
                Code That Thinks Ahead
              </h4>
              <p className="text-gray-600 text-sm">
                Clever, memorable, intelligent AI focus
              </p>
            </div>
          </div>
        </div>

        {/* Tagline Options for Option 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Option 3: <span className="gradient-text">Tagline Variations</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 border-2 border-slate-200 rounded-xl hover:border-slate-400 transition-colors">
              <h4 className="font-bold text-lg mb-2 gradient-text">
                Secure Intelligence Delivered
              </h4>
              <p className="text-gray-600 text-sm">
                Highlights reliability and end-to-end accountability
              </p>
            </div>
            
            <div className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-colors">
              <h4 className="font-bold text-lg mb-2 gradient-text">
                Confidence for Critical Software
              </h4>
              <p className="text-gray-600 text-sm">
                Aims at executive buyers in regulated, mission-critical spaces
              </p>
            </div>
            
            <div className="p-6 border-2 border-indigo-200 rounded-xl hover:border-indigo-400 transition-colors">
              <h4 className="font-bold text-lg mb-2 gradient-text">
                Stewardship for Intelligent Systems
              </h4>
              <p className="text-gray-600 text-sm">
                Emphasizes ongoing partnership and governance
              </p>
            </div>
            
            <div className="p-6 border-2 border-sky-200 rounded-xl hover:border-sky-400 transition-colors">
              <h4 className="font-bold text-lg mb-2 gradient-text">
                Trust the Code That Powers Decisions
              </h4>
              <p className="text-gray-600 text-sm">
                Speaks to decision-grade software powering AI insights
              </p>
            </div>
          </div>
        </div>

        {/* Decision Helper */}
        <div className="bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Deciding?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold text-lg mb-3 text-violet-600">Choose Option 1 If:</h4>
              <ul className="text-left text-gray-600 space-y-2 text-sm">
                <li>✓ Targeting startups or consumers</li>
                <li>✓ Want an energetic, dynamic feel</li>
                <li>✓ Emphasizing speed and innovation</li>
                <li>✓ Prefer organic, flowing design</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold text-lg mb-3 text-pink-600">Choose Option 2 If:</h4>
              <ul className="text-left text-gray-600 space-y-2 text-sm">
                <li>✓ Targeting enterprise or B2B</li>
                <li>✓ Want a professional, technical feel</li>
                <li>✓ Emphasizing expertise and reliability</li>
                <li>✓ Prefer structured, geometric design</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold text-lg mb-3 text-indigo-600">Choose Option 3 If:</h4>
              <ul className="text-left text-gray-600 space-y-2 text-sm">
                <li>✓ Speaking to executives or regulated buyers</li>
                <li>✓ Need to emphasize trust and stewardship</li>
                <li>✓ Highlighting mission-critical software delivery</li>
                <li>✓ Prefer a timeless, emblem-style mark</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
