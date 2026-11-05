import { Phone, Users, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCms, PageBlocksRenderer } from '../context/CmsContext'

export default function Support() {
  const { pages, supportCards } = useCms()
  const supportPage = pages['carer-support'] || {}

  const defaultCards = [
    {
      id: 'talanoa',
      icon: 'Phone',
      title: '1-ON-1 TALANOA',
      description: 'Confidential, culturally safe conversations with experienced carers who understand your journey.',
      buttonLabel: 'REQUEST A CALL',
      buttonUrl: 'mailto:lemalganz@gmail.com?subject=1-on-1%20Talanoa%20Request',
      buttonStyle: 'dark',
    },
    {
      id: 'groups',
      icon: 'Users',
      title: 'SUPPORT GROUPS',
      description: 'Join our regular in-person and online meetups to share stories and draw strength from the community.',
      buttonLabel: 'VIEW SCHEDULE',
      buttonUrl: '/events',
      buttonStyle: 'orange',
    },
    {
      id: 'sunday',
      icon: 'Calendar',
      title: 'SUNDAY SESSIONS',
      description: 'Monthly Zoom check-ins featuring guest speakers, spiritual grounding, and dedicated Q&A time.',
      buttonLabel: 'JOIN NEXT SESSION',
      buttonUrl: '/sunday-sessions',
      buttonStyle: 'dark',
    },
  ]

  const displayCards = supportCards.length > 0 ? supportCards : defaultCards

  const renderIcon = (name: string) => {
    switch (name?.toLowerCase()) {
      case 'users': return <Users size={28} />
      case 'calendar': return <Calendar size={28} />
      default: return <Phone size={28} />
    }
  }

  return (
    <div className="w-full">
      <div className="bg-brand-orange text-white py-20 px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-wide mb-4">
            {supportPage.hero_title || 'Carer Support'}
          </h1>
          <p className="text-xl font-script text-[#f3eedf]">
            {supportPage.hero_subtitle || "You don't have to carry the weight alone."}
          </p>
        </div>
      </div>

      <PageBlocksRenderer slug="carer-support" />

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-semibold text-brand-dark uppercase tracking-wide mb-6">
            How we can help
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {supportPage.content_markdown ||
              'Whether you need someone to talk to, practical advice on navigating the healthcare system, or just a safe space to connect with other carers, Le Malaga is here for you.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayCards.map((card: any) => {
            const isOrange = card.buttonStyle === 'orange'
            return (
              <div
                key={card.id || card.title}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-[#f3eedf] rounded-full flex items-center justify-center mb-6 text-brand-dark">
                  {renderIcon(card.icon)}
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 uppercase">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                  {card.description}
                </p>
                {card.buttonUrl?.startsWith('http') || card.buttonUrl?.startsWith('mailto') ? (
                  <a
                    href={card.buttonUrl}
                    className={`w-full ${
                      isOrange
                        ? 'bg-brand-orange hover:bg-orange-800'
                        : 'bg-brand-dark hover:bg-[#202d15]'
                    } text-white py-3 rounded-full font-bold transition shadow-md block text-center`}
                  >
                    {card.buttonLabel}
                  </a>
                ) : (
                  <Link
                    to={card.buttonUrl}
                    className={`w-full ${
                      isOrange
                        ? 'bg-brand-orange hover:bg-orange-800'
                        : 'bg-brand-dark hover:bg-[#202d15]'
                    } text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 transition shadow-md`}
                  >
                    {card.buttonLabel} <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
