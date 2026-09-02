import { useState } from 'react'
import { Heart, Users, Shield, Globe, ArrowRight, Calendar, User, Video, MapPin } from 'lucide-react'
import './index.css'

function App() {
  const [toast, setToast] = useState<string | null>(null)

  const handleNav = (page: string) => {
    setToast(`Navigating to ${page}...`)
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div className="min-h-screen bg-brand-bg text-gray-800 font-sans">
      {toast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-bounce">
          {toast}
        </div>
      )}

      {/* Header */}
      <header className="flex flex-wrap items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-40">
        <div className="flex items-center cursor-pointer" onClick={() => handleNav('Home')}>
          <img src="/images/logo.png" alt="Le Malaga" className="h-16 object-contain" />
        </div>
        <nav className="hidden lg:flex gap-6 items-center font-medium text-sm">
          <a onClick={() => handleNav('Home')} className="cursor-pointer text-brand-orange border-b-2 border-brand-orange pb-1">HOME</a>
          <a onClick={() => handleNav('About Us')} className="cursor-pointer hover:text-brand-orange transition">ABOUT US</a>
          <a onClick={() => handleNav('Carer Support')} className="cursor-pointer hover:text-brand-orange transition">CARER SUPPORT</a>
          <a onClick={() => handleNav('Resources')} className="cursor-pointer hover:text-brand-orange transition">RESOURCES</a>
          <a onClick={() => handleNav('Sunday Sessions')} className="cursor-pointer hover:text-brand-orange transition">SUNDAY SESSIONS</a>
          <a onClick={() => handleNav('Events')} className="cursor-pointer hover:text-brand-orange transition">EVENTS</a>
          <a onClick={() => handleNav('Get Involved')} className="cursor-pointer hover:text-brand-orange transition">GET INVOLVED</a>
          <button onClick={() => handleNav('Donate')} className="bg-brand-orange text-white px-6 py-2 rounded-md hover:bg-orange-700 transition font-bold">DONATE</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark leading-tight uppercase">
            Walking together,<br/>No one walks alone
          </h1>
          <p className="text-lg text-gray-700 max-w-lg font-medium">
            Le Malaga is a Pasifika-led community supporting carers and their aiga through dementia, disability, chronic illness and ageing.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => handleNav('I Need Support')} className="bg-brand-orange text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-orange-700 transition shadow-lg">
              <Heart size={20} /> I NEED SUPPORT
            </button>
            <button onClick={() => handleNav('Join Community')} className="bg-[#f0ece1] text-brand-dark border-2 border-brand-dark px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-brand-dark hover:text-white transition shadow-lg">
              <Users size={20} /> JOIN OUR COMMUNITY
            </button>
          </div>
        </div>
        <div className="flex-1 relative w-full">
          <img src="/images/hero-bg.jpg" alt="Pasifika women" className="rounded-2xl shadow-2xl object-cover w-full h-[400px] border-4 border-white" />
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-brand-dark text-white py-12 px-8 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <Heart className="text-brand-orange w-10 h-10 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1 uppercase tracking-wider">Lived Experience</h3>
              <p className="text-sm text-gray-300">We understand because we've walked this journey.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <Globe className="text-brand-orange w-10 h-10 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1 uppercase tracking-wider">Pasifika Grounded</h3>
              <p className="text-sm text-gray-300">Our values, culture and faith guide us.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <Shield className="text-brand-orange w-10 h-10 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1 uppercase tracking-wider">Safe & Confidential</h3>
              <p className="text-sm text-gray-300">A safe space to share, be heard and supported.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <Users className="text-brand-orange w-10 h-10 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1 uppercase tracking-wider">Community Powered</h3>
              <p className="text-sm text-gray-300">Stronger together as carers and aiga.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#fdfbf7] rounded-xl p-8 text-center shadow-lg border border-gray-100 flex flex-col items-center hover:-translate-y-1 transition transform duration-300">
            <div className="w-20 h-20 bg-brand-orange text-white rounded-full flex items-center justify-center mb-6 shadow-md">
              <Heart size={36} />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-3 leading-tight uppercase">I'm New<br/>To Caring</h3>
            <p className="text-sm text-gray-600 mb-8 flex-1">I don't know where to begin.</p>
            <button onClick={() => handleNav('Start Here')} className="w-full bg-brand-orange text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition">
              START HERE <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-[#fdfbf7] rounded-xl p-8 text-center shadow-lg border border-gray-100 flex flex-col items-center hover:-translate-y-1 transition transform duration-300">
            <div className="w-20 h-20 bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-md">
              <Users size={36} />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-3 leading-tight uppercase">I Need<br/>Support</h3>
            <p className="text-sm text-gray-600 mb-8 flex-1">I need someone who understands.</p>
            <button onClick={() => handleNav('Get Support')} className="w-full bg-brand-dark text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#202d15] transition">
              GET SUPPORT <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-[#fdfbf7] rounded-xl p-8 text-center shadow-lg border border-gray-100 flex flex-col items-center hover:-translate-y-1 transition transform duration-300">
            <div className="w-20 h-20 bg-brand-orange text-white rounded-full flex items-center justify-center mb-6 shadow-md">
              <Users size={36} />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-3 leading-tight uppercase">Join Our<br/>Community</h3>
            <p className="text-sm text-gray-600 mb-8 flex-1">Connect with other carers and aiga.</p>
            <button onClick={() => handleNav('Join Now')} className="w-full bg-brand-orange text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition">
              JOIN NOW <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-[#fdfbf7] rounded-xl p-8 text-center shadow-lg border border-gray-100 flex flex-col items-center hover:-translate-y-1 transition transform duration-300">
            <div className="w-20 h-20 bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-md">
              <Globe size={36} />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-3 leading-tight uppercase">Carer<br/>Resources</h3>
            <p className="text-sm text-gray-600 mb-8 flex-1">Practical tools and information.</p>
            <button onClick={() => handleNav('Explore Resources')} className="w-full bg-brand-dark text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#202d15] transition">
              EXPLORE RESOURCES <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#f6f2e8] rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-brand-dark" size={28} />
            <h2 className="text-2xl font-bold text-brand-dark uppercase">Next Sunday Session</h2>
          </div>
          <p className="text-brand-orange font-script text-2xl mb-6 font-semibold italic">You're not alone in this journey</p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="text-gray-400" size={20} /> <span>Sunday 25 May 2025</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="text-gray-400" size={20} /> <span>8:30pm (NZST)</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Video className="text-gray-400" size={20} /> <span>Online via Zoom</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <User className="text-gray-400" size={20} /> <span>Guest Speaker: TBA</span>
            </div>
          </div>
          
          <button onClick={() => handleNav('Join Sunday Session Zoom')} className="bg-brand-orange text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-orange-700 transition">
            JOIN ON ZOOM <ArrowRight size={16} />
          </button>
        </div>

        <div className="bg-[#f6f2e8] rounded-xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="text-brand-dark" size={28} />
              <h2 className="text-2xl font-bold text-brand-dark uppercase">Upcoming Events</h2>
            </div>
            <button onClick={() => handleNav('All Events')} className="text-sm font-bold flex items-center gap-1 hover:text-brand-orange transition">
              VIEW ALL EVENTS <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="space-y-6">
            {[
              { date: '14', month: 'JUN', title: 'Le Malaga Tag Tournament', loc: 'Barry Curtis Park, Papakura' },
              { date: '09', month: 'AUG', title: 'Indoor Netball Tournament', loc: 'Action Indoor Sports, Auckland' },
              { date: '20', month: 'SEP', title: 'Carers Workshop & Lunch', loc: 'Auckland (Venue TBA)' }
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="text-center w-16">
                  <div className="text-2xl font-bold text-brand-dark">{event.date}</div>
                  <div className="text-brand-orange font-bold text-sm">{event.month}</div>
                </div>
                <div className="flex-1 border-l pl-4 border-gray-200">
                  <h4 className="font-bold text-gray-900">{event.title}</h4>
                  <p className="text-sm text-gray-500">{event.loc}</p>
                </div>
                <button onClick={() => handleNav(`Event: ${event.title}`)} className="bg-brand-dark text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-[#202d15] transition hidden sm:block">
                  MORE INFO
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-12 px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark uppercase">Stories From Our Aiga</h2>
            <p className="text-gray-600 mt-2">Real stories. Real people. Real journeys.</p>
          </div>
          <button onClick={() => handleNav('All Stories')} className="bg-brand-orange text-white px-6 py-2 rounded-md font-bold hidden sm:flex items-center gap-2 hover:bg-orange-700 transition">
            READ STORIES <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-md group cursor-pointer" onClick={() => handleNav('Story: Mere')}>
            <img src="/images/story1.jpg" alt="Mere" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-6">
              <p className="font-medium text-lg mb-2">"Caring for Dad taught me patience and love"</p>
              <p className="text-brand-orange font-bold text-sm">- Mere, Auckland</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-md group cursor-pointer" onClick={() => handleNav('Story: Sia')}>
            <img src="/images/story2.jpg" alt="Sia" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-6">
              <p className="font-medium text-lg mb-2">"Le Malaga is my safe space to breathe"</p>
              <p className="text-brand-orange font-bold text-sm">- Sia, Manurewa</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-md group cursor-pointer" onClick={() => handleNav('Story: Junior')}>
            <img src="/images/story3.jpg" alt="Junior" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-6">
              <p className="font-medium text-lg mb-2">"We walk this journey together as aiga"</p>
              <p className="text-brand-orange font-bold text-sm">- Junior, Henderson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-footer text-white mt-12">
        <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/images/logo.png" alt="Le Malaga" className="h-20 bg-white p-2 rounded-xl object-contain mb-4" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2"><Globe size={16} className="text-brand-orange"/> lemalagajourney@gmail.com</li>
              <li className="flex items-center gap-2"><User size={16} className="text-brand-orange"/> 021 123 4567</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-orange"/> Auckland, New Zealand</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a onClick={() => handleNav('Privacy Policy')} className="hover:text-white cursor-pointer">Privacy Policy</a></li>
              <li><a onClick={() => handleNav('Terms of Use')} className="hover:text-white cursor-pointer">Terms of Use</a></li>
              <li><a onClick={() => handleNav('Safeguarding')} className="hover:text-white cursor-pointer">Safeguarding Policy</a></li>
              <li><a onClick={() => handleNav('Complaints')} className="hover:text-white cursor-pointer">Complaints Process</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">We Acknowledge</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We acknowledge our Pasifika ancestors and the land we walk on today.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">STAY CONNECTED</h4>
              <div className="flex">
                <input type="email" placeholder="Email" className="flex-1 px-3 py-2 text-black rounded-l-md outline-none text-sm" />
                <button onClick={() => handleNav('Subscribe')} className="bg-brand-orange px-4 py-2 rounded-r-md font-bold hover:bg-orange-700 transition text-sm">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-8 py-6 text-center text-sm text-gray-500">
          © 2026 Le Malaga Incorporated | NZBN: 9429046818730 | Registered Incorporated Society
        </div>
      </footer>
    </div>
  )
}

export default App
