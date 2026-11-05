import { Book, FileText, Download, Link as LinkIcon, Video, ExternalLink } from 'lucide-react'
import { useCms, PageBlocksRenderer } from '../context/CmsContext'

export default function Resources() {
  const { pages, resources, resourcesReading } = useCms()
  const resourcesPage = pages['resources'] || {}

  const fallbackReading = [
    {
      id: 'framework',
      icon: 'Book',
      title: 'The Pasifika Dementia Framework',
      description:
        'A culturally appropriate approach to understanding and managing dementia in our communities.',
    },
    {
      id: 'webinar',
      icon: 'Video',
      title: 'Self-Care Webinar Series',
      description:
        'Recorded sessions from our clinical psychologists on managing burnout and grief.',
    },
  ]
  const displayReading =
    resourcesReading && resourcesReading.length > 0 ? resourcesReading : fallbackReading

  return (
    <div className="w-full">
      <div className="bg-brand-dark text-white py-20 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-wide mb-4">
          {resourcesPage.hero_title || 'Carer Resources'}
        </h1>
        <p className="text-xl text-[#a3a89e] max-w-2xl mx-auto">
          {resourcesPage.hero_subtitle ||
            'Practical tools, information, and guides tailored for Pasifika carers to help navigate the healthcare system and daily life.'}
        </p>
      </div>

      <PageBlocksRenderer slug="resources" />

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
              Navigating the System
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
              {resourcesPage.content_markdown ||
                "Understanding government subsidies, healthcare processes, and legal rights can be overwhelming. We've simplified the essential information you need to advocate for your aiga."}
            </p>
            <div className="space-y-4">
              {resources.length > 0 ? (
                resources.map((res: any) => (
                  <a
                    key={res.id}
                    href={res.link_url || '#'}
                    target={res.link_url?.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-[#fcfaf4] border border-[#e8e2d2] rounded-xl hover:shadow-md transition group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition">
                        <FileText size={24} />
                      </div>
                      <div>
                        <span className="font-bold text-brand-dark block">{res.title}</span>
                        {res.description && (
                          <span className="text-xs text-gray-500">{res.description}</span>
                        )}
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-gray-400 shrink-0" />
                  </a>
                ))
              ) : (
                <>
                  <a
                    href="#"
                    className="flex items-center justify-between p-4 bg-[#fcfaf4] border border-[#e8e2d2] rounded-xl hover:shadow-md transition group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition">
                        <FileText size={24} />
                      </div>
                      <span className="font-bold text-brand-dark">Carer Support Subsidy Guide</span>
                    </div>
                    <Download size={20} className="text-gray-400" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between p-4 bg-[#fcfaf4] border border-[#e8e2d2] rounded-xl hover:shadow-md transition group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition">
                        <FileText size={24} />
                      </div>
                      <span className="font-bold text-brand-dark">
                        Understanding Power of Attorney
                      </span>
                    </div>
                    <Download size={20} className="text-gray-400" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between p-4 bg-[#fcfaf4] border border-[#e8e2d2] rounded-xl hover:shadow-md transition group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition">
                        <LinkIcon size={24} />
                      </div>
                      <span className="font-bold text-brand-dark">
                        Disability Support Services Directory
                      </span>
                    </div>
                    <ExternalLink size={20} className="text-gray-400" />
                  </a>
                </>
              )}
            </div>
          </div>
          <div className="bg-[#f3eedf] rounded-2xl p-8 flex flex-col justify-center border border-[#e8e2d2]">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Recommended Reading
            </h3>
            <div className="space-y-6">
              {displayReading.map((item: any, idx: number) => (
                <div key={item.id || idx} className="flex gap-4 items-start">
                  {item.icon === 'Video' ? (
                    <Video className="text-brand-orange mt-1 flex-shrink-0" size={24} />
                  ) : (
                    <Book className="text-brand-orange mt-1 flex-shrink-0" size={24} />
                  )}
                  <div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-brand-dark hover:text-brand-orange transition flex items-center gap-1.5"
                      >
                        {item.title} <ExternalLink size={14} className="opacity-60" />
                      </a>
                    ) : (
                      <h4 className="font-bold text-brand-dark">{item.title}</h4>
                    )}
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
