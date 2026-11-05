import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { stories as defaultStories } from '../data/stories'

export interface CmsContextType {
  loading: boolean
  siteSettings: Record<string, any>
  pages: Record<string, any>
  teamMembers: any[]
  stories: any[]
  events: any[]
  highlights: any[]
  resources: any[]
  homeFeatures: any[]
  homeActionCards: any[]
  supportCards: any[]
  sundayHighlights: any[]
  resourcesReading: any[]
  getInvolvedCards: any[]
}

const CmsContext = createContext<CmsContextType>({
  loading: true,
  siteSettings: {},
  pages: {},
  teamMembers: [],
  stories: defaultStories,
  events: [],
  highlights: [],
  resources: [],
  homeFeatures: [],
  homeActionCards: [],
  supportCards: [],
  sundayHighlights: [],
  resourcesReading: [],
  getInvolvedCards: [],
})

export const useCms = () => useContext(CmsContext)

export function CmsProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [siteSettings, setSiteSettings] = useState<Record<string, any>>({})
  const [pages, setPages] = useState<Record<string, any>>({})
  const [teamMembers, setTeamMembers] = useState<any[]>([])
  const [cmsStories, setCmsStories] = useState<any[]>(defaultStories)
  const [events, setEvents] = useState<any[]>([])
  const [highlights, setHighlights] = useState<any[]>([])
  const [resources, setResources] = useState<any[]>([])

  useEffect(() => {
    async function fetchPublicCms() {
      try {
        const [
          settingsRes,
          pagesRes,
          teamRes,
          storiesRes,
          eventsRes,
          highlightsRes,
          resourcesRes,
        ] = await Promise.all([
          supabase.from('site_settings').select('*'),
          supabase.from('site_pages').select('*'),
          supabase.from('team_members').select('*').eq('is_published', true).order('sort_order'),
          supabase
            .from('stories')
            .select('*')
            .eq('publish_scope', 'public_portal')
            .order('sort_order'),
          supabase.from('events').select('*').eq('is_published', true).order('sort_order'),
          supabase
            .from('community_highlights')
            .select('*')
            .eq('is_published', true)
            .order('sort_order'),
          supabase.from('resources').select('*').eq('is_published', true).order('sort_order'),
        ])

        if (settingsRes.data) {
          const map: Record<string, any> = {}
          settingsRes.data.forEach((r: any) => {
            map[r.key] = r.value
          })
          setSiteSettings(map)
        }

        if (pagesRes.data) {
          const pageMap: Record<string, any> = {}
          pagesRes.data.forEach((p: any) => {
            pageMap[p.slug] = p
          })
          setPages(pageMap)
        }

        if (teamRes.data && teamRes.data.length > 0) {
          const mappedTeam = teamRes.data.map((m: any) => ({
            ...m,
            role: m.role || m.role_title || 'Co-Founder & Carer',
            image_url: m.image_url || (m.photo_urls && m.photo_urls[0]) || '/images/flory1.jpg',
            bio: m.bio || (Array.isArray(m.bio_paragraphs) ? m.bio_paragraphs.join('\n\n') : ''),
          }))
          setTeamMembers(mappedTeam)
        }

        if (storiesRes.data && storiesRes.data.length > 0) {
          // Merge Supabase story fields with rich local timeline fallback so existing 5-step polaroid layouts work seamlessly
          const merged = storiesRes.data.map((dbStory: any) => {
            const localMatch = defaultStories.find((s) => s.id === dbStory.id)
            const parsedSteps = parseMarkdownSections(dbStory.full_story)
            const existingTimeline = Array.isArray(dbStory.timeline) && dbStory.timeline.length > 0 ? dbStory.timeline : null

            return {
              id: dbStory.id,
              name: dbStory.name || dbStory.author_name || dbStory.title || localMatch?.name || 'Carer',
              shortTitle: dbStory.short_title || dbStory.shortTitle || dbStory.title || localMatch?.shortTitle || dbStory.name,
              location: dbStory.location || (dbStory.caring_for
                ? `Caring for ${dbStory.caring_for}`
                : localMatch?.location || 'Aotearoa'),
              quote: dbStory.quote || dbStory.subtitle || localMatch?.quote || '',
              subquote: dbStory.subquote || dbStory.excerpt || localMatch?.subquote || '',
              image: dbStory.image || dbStory.cover_image_url || localMatch?.image || '/images/SinaVera_1.png',
              featured: dbStory.featured ?? dbStory.is_featured_home ?? true,
              full_story: dbStory.full_story,
              category: dbStory.category || 'CARER JOURNEY',
              at_a_glance: dbStory.at_a_glance || (localMatch as any)?.at_a_glance,
              timeline:
                parsedSteps.length > 0
                  ? parsedSteps.map((sec, idx) => ({
                      step: idx + 1,
                      title: sec.title,
                      text: sec.text,
                      image:
                        existingTimeline?.[idx]?.image ||
                        localMatch?.timeline?.[idx]?.image ||
                        (idx === 0 ? (dbStory.image || dbStory.cover_image_url) : undefined),
                    }))
                  : existingTimeline || localMatch?.timeline || [],
            }
          })
          setCmsStories(merged)
        }

        if (eventsRes.data && eventsRes.data.length > 0) {
          const mappedEvents = eventsRes.data.map((e: any) => ({
            ...e,
            date_text: e.date_text || (e.date_day ? `${e.date_day} ${e.date_month}` : 'TBA'),
            cta_url: e.rsvp_url || e.cta_url || '/get-involved',
            cta_label: e.cta_label || 'RSVP',
          }))
          setEvents(mappedEvents)
        }

        if (highlightsRes.data && highlightsRes.data.length > 0) {
          setHighlights(highlightsRes.data)
        }

        if (resourcesRes.data && resourcesRes.data.length > 0) {
          const mappedResources = resourcesRes.data.map((r: any) => ({
            ...r,
            link_url: r.url || r.link_url || '#',
            link_label: r.link_label || 'VIEW RESOURCE',
            category: r.category || (r.section === 'reading' ? 'Reading' : 'System Guide'),
          }))
          setResources(mappedResources)
        }
      } catch (err) {
        console.warn('Using fallback static CMS data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPublicCms()
  }, [])

  return (
    <CmsContext.Provider
      value={{
        loading,
        siteSettings,
        pages,
        teamMembers,
        stories: cmsStories,
        events,
        highlights,
        resources,
        homeFeatures: siteSettings.home_features || [],
        homeActionCards: siteSettings.home_action_cards || [],
        supportCards: siteSettings.support_cards || [],
        sundayHighlights: siteSettings.sunday_highlights || [],
        resourcesReading: siteSettings.resources_reading || [],
        getInvolvedCards: siteSettings.get_involved_cards || [],
      }}
    >
      {children}
    </CmsContext.Provider>
  )
}

function parseMarkdownSections(md?: string): { title: string; text: string }[] {
  if (!md) return []
  const parts = md.split(/^##\s+/m).filter(Boolean)
  return parts.map((part) => {
    const lines = part.trim().split('\n')
    const rawTitle = (lines.shift() || 'Their Journey').replace(/^\d+\.\s*/, '').trim()
    const text = lines.join('\n').trim()
    return { title: rawTitle, text }
  })
}

export function toVideoEmbedUrl(url: string): string {
  if (!url || typeof url !== 'string') return ''
  const trimmed = url.trim()

  const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/)
  if (shortsMatch) {
    return `https://www.youtube-nocookie.com/embed/${shortsMatch[1]}`
  }

  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]+)/)
  if (watchMatch) {
    return `https://www.youtube-nocookie.com/embed/${watchMatch[1]}`
  }

  const shortlinkMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
  if (shortlinkMatch) {
    return `https://www.youtube-nocookie.com/embed/${shortlinkMatch[1]}`
  }

  if (trimmed.includes('youtube.com/embed/')) {
    return trimmed.replace('youtube.com/embed/', 'youtube-nocookie.com/embed/')
  }

  const vimeoMatch = trimmed.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch && !trimmed.includes('player.vimeo.com')) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  }

  return trimmed
}

export function PageBlocksRenderer({ slug }: { slug: string }) {
  const { pages } = useCms()
  const page = pages[slug]
  if (!page || !Array.isArray(page.content_blocks) || page.content_blocks.length === 0) {
    return null
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-12 space-y-10">
      {page.content_blocks.map((blk: any, i: number) => {
        const widthClass =
          blk.width === 'small'
            ? 'max-w-sm'
            : blk.width === 'medium'
            ? 'max-w-xl'
            : blk.width === 'large'
            ? 'max-w-4xl'
            : 'max-w-full'
        const alignClass =
          blk.align === 'left' ? 'mr-auto' : blk.align === 'right' ? 'ml-auto' : 'mx-auto'

        if (blk.type === 'video' && blk.mediaUrl) {
          const embedUrl = toVideoEmbedUrl(blk.mediaUrl)
          return (
            <div key={blk.id || i} className={`${widthClass} ${alignClass}`}>
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-black aspect-video">
                <iframe
                  src={embedUrl}
                  title={blk.caption || 'Video'}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {blk.caption && (
                <p className="text-center font-script text-2xl text-brand-orange mt-3">
                  {blk.caption}
                </p>
              )}
            </div>
          )
        }

        if (blk.type === 'text') {
          return (
            <div
              key={blk.id || i}
              className={`${widthClass} ${alignClass} bg-[#fcfaf4] border border-[#e8e2d2] rounded-2xl p-8 shadow-md`}
            >
              {blk.caption && (
                <h3 className="font-heading text-2xl font-bold uppercase text-brand-dark mb-3">
                  {blk.caption}
                </h3>
              )}
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blk.text}</p>
            </div>
          )
        }

        return (
          <div key={blk.id || i} className={`${widthClass} ${alignClass}`}>
            {blk.style === 'polaroid' ? (
              <div className="bg-white p-4 pb-12 rounded-sm shadow-xl border border-gray-200 transform -rotate-1">
                <img
                  src={blk.mediaUrl}
                  alt={blk.caption || ''}
                  className="w-full h-auto object-cover rounded-sm"
                />
                {blk.caption && (
                  <p className="font-script text-3xl text-brand-dark text-center mt-4">
                    {blk.caption}
                  </p>
                )}
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={blk.mediaUrl}
                  alt={blk.caption || ''}
                  className="w-full h-auto object-cover"
                />
                {blk.caption && (
                  <p className="p-4 text-center font-medium text-gray-700">{blk.caption}</p>
                )}
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}
