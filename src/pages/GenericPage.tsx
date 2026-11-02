import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, Flower2 } from 'lucide-react'
import { useCms, PageBlocksRenderer } from '../context/CmsContext'

export default function GenericPage() {
  const location = useLocation()
  const { pages } = useCms()
  const slug = location.pathname.replace(/^\/+|\/+$/g, '') || 'start'
  const cmsPage = pages[slug]

  const fallbackTitle = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
  const title = cmsPage?.hero_title || cmsPage?.title || fallbackTitle
  const subtitle = cmsPage?.hero_subtitle || ''

  return (
    <div className="flex-1 w-full bg-[#fcfaf4]">
      <div className="bg-brand-dark text-white py-16 px-8 text-center">
        {cmsPage?.hero_badge && (
          <div className="inline-block bg-brand-orange text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            {cmsPage.hero_badge}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-[#a3a89e] max-w-2xl mx-auto mt-4">{subtitle}</p>
        )}
      </div>

      <PageBlocksRenderer slug={slug} />

      <div className="max-w-4xl mx-auto p-8 md:p-12">
        {cmsPage?.content_markdown ? (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#e8e2d2] space-y-6 text-gray-700 leading-relaxed whitespace-pre-line">
            {cmsPage.content_markdown}
          </div>
        ) : (
          <div className="text-center">
            <div className="w-24 h-24 bg-[#f3eedf] text-brand-orange rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Flower2 size={48} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
              Manage this page's content anytime in the Le Malaga Admin Portal.
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-800 transition shadow-md tracking-wider"
          >
            <ArrowLeft size={18} /> BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  )
}
