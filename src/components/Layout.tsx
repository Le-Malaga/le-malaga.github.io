import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Globe, User, MapPin, CheckCircle } from 'lucide-react'
import { useCms } from '../context/CmsContext'

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
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

  const rawQuickLinks =
    Array.isArray(hf.quickLinks) && hf.quickLinks.length > 0
      ? hf.quickLinks
      : Array.isArray(hf.quick_links) && hf.quick_links.length > 0
      ? hf.quick_links
      : defaultQuickLinks

  const quickLinks = rawQuickLinks.map((ql: any) => ({
    label: ql.label || ql.title || 'Link',
    path: ql.path || ql.url || '/',
  }))

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

  const rawNavItems =
    Array.isArray(hf.navItems) && hf.navItems.length > 0
      ? hf.navItems
      : Array.isArray(hf.nav_links) && hf.nav_links.length > 0
      ? hf.nav_links
      : defaultNavLinks

  const navLinks = rawNavItems
    .filter((item: any) => item.visible !== false)
    .map((item: any) => ({
      name: item.name || item.label || 'Link',
      path: item.path || item.url || '/',
    }))

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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-3 space-y-4">
            <img
              src={logoUrl}
              alt="Le Malaga"
              className="h-20 bg-[#fbf8f3] p-2 rounded-xl object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              {hf.headerTagline || 'A safe space for carers to rest, share, and walk together.'}
            </p>
          </div>
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-2">
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
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="text-xl font-heading font-bold mb-3 uppercase tracking-wide">
                We Acknowledge
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{weAcknowledge}</p>
            </div>
            <div className="bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/10 shadow-sm">
              <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-3">
                STAY CONNECTED
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (newsletterEmail) {
                    setIsSubscribed(true)
                    setNewsletterEmail('')
                    setTimeout(() => setIsSubscribed(false), 5000)
                  }
                }}
                className="flex items-center shadow-inner rounded-xl overflow-hidden border border-white/15 focus-within:ring-2 focus-within:ring-brand-orange bg-white"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 min-w-0 px-3.5 py-2.5 text-gray-900 bg-transparent outline-none text-sm font-medium placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="bg-brand-orange hover:bg-orange-700 text-white px-4 sm:px-5 py-2.5 font-heading font-bold uppercase tracking-wider text-xs sm:text-sm whitespace-nowrap shrink-0 transition"
                >
                  SUBSCRIBE
                </button>
              </form>
              {isSubscribed && (
                <p className="text-xs text-brand-orange font-bold mt-2.5 flex items-center gap-1.5 animate-pulse">
                  <CheckCircle size={14} className="shrink-0" /> Thank you for subscribing to Le Malaga!
                </p>
              )}
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
