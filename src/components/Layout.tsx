import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Globe, User, MapPin } from 'lucide-react'
import { useCms } from '../context/CmsContext'

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { siteSettings } = useCms()

  const isActive = (path: string) => location.pathname === path

  const hf = siteSettings.header_footer || {}
  const logoUrl = hf.logoUrl || '/images/logo.png'
  const donateLabel = hf.donateButtonLabel || 'DONATE'
  const donateUrl =
    hf.donateButtonUrl ||
    'https://givealittle.co.nz/cause/help-us-be-there-for-carers-today-not-tomorrow'
  const contactEmail = hf.contactEmail || 'lemalagajourney@gmail.com'
  const footerDesc =
    hf.footerDescription ||
    'We acknowledge our Pasifika ancestors and the land we walk on today.'
  const copyrightText =
    hf.copyrightText ||
    '© 2026 Le Malaga Incorporated | NZBN: 9429046818730 | Registered Incorporated Society'

  const defaultNavLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CARER SUPPORT', path: '/carer-support' },
    { name: 'RESOURCES', path: '/resources' },
    { name: 'SUNDAY SESSIONS', path: '/sunday-sessions' },
    { name: 'EVENTS', path: '/events' },
    { name: 'OUR STORIES', path: '/stories' },
    { name: 'GET INVOLVED', path: '/get-involved' },
  ]

  const navLinks =
    Array.isArray(hf.navItems) && hf.navItems.length > 0
      ? hf.navItems
          .filter((item: any) => item.visible !== false)
          .map((item: any) => ({ name: item.label, path: item.path }))
      : defaultNavLinks

  return (
    <div className="min-h-screen bg-brand-bg text-gray-800 font-sans flex flex-col">
      <header className="flex flex-wrap items-center justify-between px-8 py-4 bg-[#fbf8f3] shadow-sm sticky top-0 z-40">
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={logoUrl} alt="Le Malaga" className="h-16 object-contain" />
        </Link>

        <button
          className="lg:hidden text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden lg:flex items-center gap-4">
          {navLinks.map((link: any) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-brand-orange transition ${
                isActive(link.path) ? 'text-brand-orange font-bold' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {donateUrl.startsWith('http') ? (
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-6 py-2 rounded-md hover:bg-orange-800 transition font-bold shadow-sm"
            >
              {donateLabel}
            </a>
          ) : (
            <Link
              to={donateUrl}
              className="bg-brand-orange text-white px-6 py-2 rounded-md hover:bg-orange-800 transition font-bold shadow-sm"
            >
              {donateLabel}
            </Link>
          )}
        </nav>

        {isMobileMenuOpen && (
          <nav className="w-full lg:hidden flex flex-col gap-4 pt-4 mt-4 border-t font-medium text-sm">
            {navLinks.map((link: any) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition ${isActive(link.path) ? 'text-brand-orange font-bold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            {donateUrl.startsWith('http') ? (
              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-orange text-white px-6 py-2 rounded-md font-bold mt-2 w-full text-center shadow-sm"
              >
                {donateLabel}
              </a>
            ) : (
              <Link
                to={donateUrl}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-orange text-white px-6 py-2 rounded-md font-bold mt-2 w-full text-center shadow-sm"
              >
                {donateLabel}
              </Link>
            )}
          </nav>
        )}
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-brand-footer text-white mt-12">
        <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src={logoUrl}
              alt="Le Malaga"
              className="h-20 bg-[#fbf8f3] p-2 rounded-xl object-contain mb-4"
            />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-brand-orange" /> {contactEmail}
              </li>
              <li className="flex items-center gap-2">
                <User size={16} className="text-brand-orange" /> 021 123 4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-orange" /> Auckland, New Zealand
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400 font-medium">
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/safeguarding" className="hover:text-white">
                  Safeguarding Policy
                </Link>
              </li>
              <li>
                <Link to="/complaints" className="hover:text-white">
                  Complaints Process
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-wide">
              We Acknowledge
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{footerDesc}</p>
            <div className="bg-white/10 p-4 rounded-xl border border-white/5">
              <h4 className="font-bold mb-3 tracking-wide">STAY CONNECTED</h4>
              <div className="flex shadow-inner rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-2.5 text-black outline-none text-sm font-medium"
                />
                <button className="bg-brand-orange px-5 py-2.5 font-bold hover:bg-orange-800 transition text-sm">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-8 py-6 text-center text-sm text-gray-500 font-medium">
          {copyrightText}
        </div>
      </footer>
    </div>
  )
}
