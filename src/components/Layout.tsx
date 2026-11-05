import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Globe, User, MapPin } from 'lucide-react'
import { useCms } from '../context/CmsContext'

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { siteSettings } = useCms()

  const isActive = (path: string) => location.pathname === path

  const hf = siteSettings.header_footer || {}

  // Dynamic Head, Favicon & SEO Management
  useEffect(() => {
    const baseSiteTitle = hf.siteTitle || 'Le Malaga'

    const titles: Record<string, string> = {
      '/': `${baseSiteTitle} | Walking Alongside Pasifika Dementia Carers`,
      '/about': `About Us | ${baseSiteTitle}`,
      '/carer-support': `Carer Support | ${baseSiteTitle}`,
      '/resources': `Resources & Guides | ${baseSiteTitle}`,
      '/sunday-sessions': `Sunday Sessions | ${baseSiteTitle}`,
      '/events': `Events & Meetups | ${baseSiteTitle}`,
      '/stories': `Our Stories | ${baseSiteTitle}`,
      '/get-involved': `Get Involved | ${baseSiteTitle}`,
      '/start': `Getting Started | ${baseSiteTitle}`,
      '/privacy': `Privacy Policy | ${baseSiteTitle}`,
      '/terms': `Terms of Use | ${baseSiteTitle}`,
      '/safeguarding': `Safeguarding Policy | ${baseSiteTitle}`,
      '/complaints': `Complaints Process | ${baseSiteTitle}`,
    }

    let resolvedTitle = titles[location.pathname]
    if (!resolvedTitle) {
      if (location.pathname.startsWith('/stories/')) {
        const storyId = location.pathname.replace('/stories/', '')
        resolvedTitle = `${storyId.charAt(0).toUpperCase() + storyId.slice(1)}'s Story | ${baseSiteTitle}`
      } else {
        resolvedTitle = `${baseSiteTitle} | Walking Alongside Pasifika Dementia Carers`
      }
    }
    document.title = resolvedTitle

    // Dynamic Favicon
    const faviconUrl = hf.faviconUrl || '/images/logo.png'
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    link.href = faviconUrl

    // Dynamic Meta Description
    if (hf.metaDescription) {
      let descTag = document.querySelector("meta[name='description']")
      if (!descTag) {
        descTag = document.createElement('meta')
        descTag.setAttribute('name', 'description')
        document.head.appendChild(descTag)
      }
      descTag.setAttribute('content', hf.metaDescription)
    }

    // Dynamic OG Image
    if (hf.ogImageUrl) {
      let ogImgTag = document.querySelector("meta[property='og:image']")
      if (!ogImgTag) {
        ogImgTag = document.createElement('meta')
        ogImgTag.setAttribute('property', 'og:image')
        document.head.appendChild(ogImgTag)
      }
      ogImgTag.setAttribute('content', hf.ogImageUrl)
    }
  }, [location.pathname, hf.siteTitle, hf.faviconUrl, hf.metaDescription, hf.ogImageUrl])
  const logoUrl = hf.logoUrl || '/images/logo.png'
  const donateLabel = hf.donateButtonLabel || 'DONATE'
  const donateUrl =
    hf.donateButtonUrl ||
    'https://givealittle.co.nz/cause/help-us-be-there-for-carers-today-not-tomorrow'
  const contactEmail = hf.contactEmail || 'lemalagajourney@gmail.com'
  const contactPhone = hf.contactPhone || '021 123 4567'
  const contactLocation = hf.contactLocation || 'Auckland, New Zealand'
  const weAcknowledge =
    hf.weAcknowledge ||
    hf.footerDescription ||
    'We acknowledge our Pasifika ancestors and the land we walk on today.'
  const copyrightText =
    hf.copyrightText ||
    '© 2026 Le Malaga Incorporated | NZBN: 9429046818730 | Registered Incorporated Society'

  const defaultQuickLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Use', path: '/terms' },
    { label: 'Safeguarding Policy', path: '/safeguarding' },
    { label: 'Complaints Process', path: '/complaints' },
  ]

  const quickLinks =
    Array.isArray(hf.quickLinks) && hf.quickLinks.length > 0 ? hf.quickLinks : defaultQuickLinks

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
                <User size={16} className="text-brand-orange" /> {contactPhone}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-orange" /> {contactLocation}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400 font-medium">
              {quickLinks.map((ql: any) => (
                <li key={ql.path}>
                  <Link to={ql.path} className="hover:text-white">
                    {ql.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-wide">
              We Acknowledge
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{weAcknowledge}</p>
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
