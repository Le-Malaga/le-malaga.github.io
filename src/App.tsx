import { useState } from 'react'
import { Heart, Users, Shield, Globe, ArrowRight, Calendar, User, Video, MapPin, Menu, X } from 'lucide-react'
import './index.css'

function App() {
  const [toast, setToast] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-brand-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
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

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="w-full lg:hidden flex flex-col gap-4 pt-4 mt-4 border-t font-medium text-sm">
            <a onClick={() => { handleNav('Home'); setIsMobileMenuOpen(false); }} className="cursor-pointer text-brand-orange">HOME</a>
            <a onClick={() => { handleNav('About Us'); setIsMobileMenuOpen(false); }} className="cursor-pointer">ABOUT US</a>
            <a onClick={() => { handleNav('Carer Support'); setIsMobileMenuOpen(false); }} className="cursor-pointer">CARER SUPPORT</a>
            <a onClick={() => { handleNav('Resources'); setIsMobileMenuOpen(false); }} className="cursor-pointer">RESOURCES</a>
            <a onClick={() => { handleNav('Sunday Sessions'); setIsMobileMenuOpen(false); }} className="cursor-pointer">SUNDAY SESSIONS</a>
            <a onClick={() => { handleNav('Events'); setIsMobileMenuOpen(false); }} className="cursor-pointer">EVENTS</a>
            <a onClick={() => { handleNav('Get Involved'); setIsMobileMenuOpen(false); }} className="cursor-pointer">GET INVOLVED</a>
            <button onClick={() => { handleNav('Donate'); setIsMobileMenuOpen(false); }} className="bg-brand-orange text-white px-6 py-2 rounded-md font-bold mt-2 w-full text-center">DONATE</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 z-10">
          <h1 className="text-6xl md:text-7xl font-heading font-bold text-brand-dark leading-[1.1] uppercase tracking-wide">
            Walking together,<br/>
            <span className="text-brand-orange">No one walks alone</span>
          </h1>
          <p className="text-xl text-gray-800 max-w-lg font-medium leading-relaxed">
            Le Malaga is a Pasifika-led community supporting carers and their aiga through dementia, disability, chronic illness and ageing.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => handleNav('I Need Support')} className="bg-brand-orange text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-orange-700 transition shadow-lg">
              <Heart size={20} /> I NEED SUPPORT
            </button>
            <button onClick={() => handleNav('Join Community')} className="bg-transparent text-brand-dark border-2 border-brand-dark px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-brand-dark hover:text-white transition shadow-lg">
              <Users size={20} /> JOIN OUR COMMUNITY
            </button>
          </div>
        </div>
        <div className="flex-1 relative w-full">
          <img src="/images/hero-bg.jpg" alt="Pasifika women" className="rounded-[2rem] shadow-2xl object-cover w-full h-[500px]" />
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-brand-dark text-white py-16 px-8 shadow-inner mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <Heart className="text-brand-orange w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2 uppercase tracking-widest text-brand-bg">Lived Experience</h3>
              <p className="text-sm text-[#a3a89e] leading-relaxed">We understand because<br/>we've walked this journey.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Globe className="text-brand-orange w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2 uppercase tracking-widest text-brand-bg">Pasifika Grounded</h3>
              <p className="text-sm text-[#a3a89e] leading-relaxed">Our values, culture and<br/>faith guide us.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Shield className="text-brand-orange w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2 uppercase tracking-widest text-brand-bg">Safe & Confidential</h3>
              <p className="text-sm text-[#a3a89e] leading-relaxed">A safe space to share,<br/>be heard and supported.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Users className="text-brand-orange w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2 uppercase tracking-widest text-brand-bg">Community Powered</h3>
              <p className="text-sm text-[#a3a89e] leading-relaxed">Stronger together as<br/>carers and aiga.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-24 px-8 max-w-7xl mx-auto relative z-10 -mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#fcfaf4] rounded-2xl p-8 text-center shadow-xl border border-[#e8e2d2] flex flex-col items-center hover:-translate-y-2 transition transform duration-300">
            <div className="w-24 h-24 bg-brand-orange text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
              <Heart size={40} />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-brand-orange mb-3 leading-tight uppercase tracking-wider">I'm New<br/>To Caring</h3>
            <p className="text-sm text-gray-700 mb-8 flex-1 font-medium px-4">I don't know where to begin.</p>
            <button onClick={() => handleNav('Start Here')} className="w-full bg-brand-orange text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-800 transition shadow-md">
              START HERE <ArrowRight size={18} />
            </button>
          </div>
          <div className="bg-[#fcfaf4] rounded-2xl p-8 text-center shadow-xl border border-[#e8e2d2] flex flex-col items-center hover:-translate-y-2 transition transform duration-300">
            <div className="w-24 h-24 bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
              <Users size={40} />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-brand-dark mb-3 leading-tight uppercase tracking-wider">I Need<br/>Support</h3>
            <p className="text-sm text-gray-700 mb-8 flex-1 font-medium px-4">I need someone who understands.</p>
            <button onClick={() => handleNav('Get Support')} className="w-full bg-brand-dark text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#202d15] transition shadow-md">
              GET SUPPORT <ArrowRight size={18} />
            </button>
          </div>
          <div className="bg-[#fcfaf4] rounded-2xl p-8 text-center shadow-xl border border-[#e8e2d2] flex flex-col items-center hover:-translate-y-2 transition transform duration-300">
            <div className="w-24 h-24 bg-brand-orange text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
              <Users size={40} />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-brand-orange mb-3 leading-tight uppercase tracking-wider">Join Our<br/>Community</h3>
            <p className="text-sm text-gray-700 mb-8 flex-1 font-medium px-4">Connect with other carers and aiga.</p>
            <button onClick={() => handleNav('Join Now')} className="w-full bg-brand-orange text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-800 transition shadow-md">
              JOIN NOW <ArrowRight size={18} />
            </button>
          </div>
          <div className="bg-[#fcfaf4] rounded-2xl p-8 text-center shadow-xl border border-[#e8e2d2] flex flex-col items-center hover:-translate-y-2 transition transform duration-300">
            <div className="w-24 h-24 bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
              <Globe size={40} />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-brand-dark mb-3 leading-tight uppercase tracking-wider">Carer<br/>Resources</h3>
            <p className="text-sm text-gray-700 mb-8 flex-1 font-medium px-4">Practical tools and information.</p>
            <button onClick={() => handleNav('Explore Resources')} className="w-full bg-brand-dark text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#202d15] transition shadow-md">
              EXPLORE RESOURCES <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        <div className="bg-[#fcfaf4] rounded-2xl p-10 shadow-lg border border-[#e8e2d2]">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-brand-orange" size={32} />
            <h2 className="text-3xl font-heading font-semibold text-brand-dark uppercase tracking-wide">Next Sunday Session</h2>
          </div>
          <p className="text-brand-orange font-script text-3xl mb-8 font-semibold">You're not alone in this journey</p>
          
          <div className="space-y-5 mb-10">
            <div className="flex items-center gap-4 text-gray-800 font-medium text-lg">
              <Calendar className="text-brand-orange" size={24} /> <span>Sunday 25 May 2025</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800 font-medium text-lg">
              <Calendar className="text-brand-orange" size={24} /> <span>8:30pm (NZST)</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800 font-medium text-lg">
              <Video className="text-brand-orange" size={24} /> <span>Online via Zoom</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800 font-medium text-lg">
              <User className="text-brand-orange" size={24} /> <span>Guest Speaker: TBA</span>
            </div>
          </div>
          
          <button onClick={() => handleNav('Join Sunday Session Zoom')} className="bg-brand-orange text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-800 transition shadow-md w-full sm:w-auto">
            JOIN ON ZOOM <ArrowRight size={18} />
          </button>
        </div>

        <div className="bg-[#fcfaf4] rounded-2xl p-10 shadow-lg border border-[#e8e2d2]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-brand-dark" size={32} />
              <h2 className="text-3xl font-heading font-semibold text-brand-dark uppercase tracking-wide">Upcoming Events</h2>
            </div>
            <button onClick={() => handleNav('All Events')} className="text-sm font-bold flex items-center gap-1 hover:text-brand-orange transition uppercase tracking-wider text-gray-600">
              VIEW ALL EVENTS <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="space-y-6">
            {[
              { date: '14', month: 'JUN', title: 'Le Malaga Tag Tournament', loc: 'Barry Curtis Park, Papakura' },
              { date: '09', month: 'AUG', title: 'Indoor Netball Tournament', loc: 'Action Indoor Sports, Auckland' },
              { date: '20', month: 'SEP', title: 'Carers Workshop & Lunch', loc: 'Auckland (Venue TBA)' }
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="text-center w-16 flex-shrink-0">
                  <div className="text-3xl font-heading font-bold text-brand-dark leading-none mb-1">{event.date}</div>
                  <div className="text-brand-orange font-bold text-sm tracking-widest">{event.month}</div>
                </div>
                <div className="flex-1 border-l-2 pl-5 border-brand-orange/20">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-500 font-medium">{event.loc}</p>
                </div>
                <button onClick={() => handleNav(`Event: ${event.title}`)} className="bg-brand-dark text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#202d15] transition hidden sm:block shadow-sm tracking-wider">
                  MORE INFO
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-heading font-semibold text-brand-dark uppercase tracking-wide">Stories From Our Aiga</h2>
            <p className="text-gray-600 mt-2 text-lg font-medium">Real stories. Real people. Real journeys.</p>
          </div>
          <button onClick={() => handleNav('All Stories')} className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hidden sm:flex items-center gap-2 hover:bg-orange-800 transition shadow-md">
            READ STORIES <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group cursor-pointer hover:-translate-y-2 transition duration-300">
            <img src="/images/story1.jpg" alt="Mere" className="w-full h-56 object-cover object-top group-hover:scale-105 transition duration-700" />
            <div className="p-8">
              <p className="font-heading font-semibold text-2xl text-brand-dark mb-4 leading-tight">"Caring for Dad taught me patience and love"</p>
              <p className="text-brand-orange font-bold tracking-wider text-sm uppercase">- Mere, Auckland</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group cursor-pointer hover:-translate-y-2 transition duration-300">
            <img src="/images/story2.jpg" alt="Sia" className="w-full h-56 object-cover object-top group-hover:scale-105 transition duration-700" />
            <div className="p-8">
              <p className="font-heading font-semibold text-2xl text-brand-dark mb-4 leading-tight">"Le Malaga is my safe space to breathe"</p>
              <p className="text-brand-orange font-bold tracking-wider text-sm uppercase">- Sia, Manurewa</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group cursor-pointer hover:-translate-y-2 transition duration-300">
            <img src="/images/story3.jpg" alt="Junior" className="w-full h-56 object-cover object-top group-hover:scale-105 transition duration-700" />
            <div className="p-8">
              <p className="font-heading font-semibold text-2xl text-brand-dark mb-4 leading-tight">"We walk this journey together as aiga"</p>
              <p className="text-brand-orange font-bold tracking-wider text-sm uppercase">- Junior, Henderson</p>
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
