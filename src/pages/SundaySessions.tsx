import { Calendar, Video, Clock, MessageCircle } from 'lucide-react'
import { useCms, PageBlocksRenderer } from '../context/CmsContext'

export default function SundaySessions() {
  const { pages, siteSettings } = useCms()
  const sessionPage = pages['sunday-sessions'] || {}
  const nextSession = siteSettings.next_sunday_session || {}

  return (
    <div className="w-full">
      <div className="bg-[#fcfaf4] py-20 px-8 text-center border-b border-[#e8e2d2]">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-dark uppercase tracking-wide mb-4">
          {sessionPage.hero_title || 'Sunday Sessions'}
        </h1>
        <p className="text-2xl font-script text-brand-orange max-w-2xl mx-auto">
          {sessionPage.hero_subtitle || 'A regular space for spiritual grounding and connection.'}
        </p>
      </div>

      <PageBlocksRenderer slug="sunday-sessions" />

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
              {nextSession.title || 'Join us this Sunday'}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {nextSession.description ||
                'Our Sunday Sessions are the heartbeat of Le Malaga. We gather online to share a short devotion, hear from a guest speaker on topics relating to health and wellbeing, and most importantly, check in on one another.'}
            </p>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
              <img
                src={nextSession.imageUrl || '/images/zoom_meeting.jpg'}
                alt="Zoom Meeting"
                className="w-full h-48 object-cover border-b border-gray-100"
              />
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-brand-orange mb-6 border-b pb-4">
                  Next Session Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-800 font-medium">
                    <Calendar className="text-gray-400" size={24} />{' '}
                    <span>{nextSession.dateLabel || 'Sunday 6 September 2026'}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-800 font-medium">
                    <Clock className="text-gray-400" size={24} />{' '}
                    <span>{nextSession.timeLabel || '8:30pm (NZST)'}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-800 font-medium">
                    <Video className="text-gray-400" size={24} />{' '}
                    <span>{nextSession.formatLabel || 'Online via Zoom'}</span>
                  </div>
                </div>
                <a
                  href={
                    nextSession.registrationUrl ||
                    'mailto:lemalganz@gmail.com?subject=Sunday%20Session%20Registration'
                  }
                  className="mt-8 block text-center w-full bg-brand-orange text-white py-4 rounded-full font-bold hover:bg-orange-800 transition shadow-md"
                >
                  {nextSession.ctaLabel || 'GET ZOOM LINK'}
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-white flex-shrink-0">
                <MessageCircle size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">Open Talanoa</h4>
                <p className="text-gray-600 leading-relaxed">
                  We leave the last 30 minutes open for anyone to speak, share a challenge, or ask
                  for prayer. It is a completely safe and confidential space.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Video size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">Cameras Optional</h4>
                <p className="text-gray-600 leading-relaxed">
                  We know caring is exhausting. You are welcome to join in your pajamas, with your
                  camera off, just to listen and be present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
