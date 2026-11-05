import { Heart, Users, HandHeart } from 'lucide-react'
import { useCms, PageBlocksRenderer } from '../context/CmsContext'

export default function GetInvolved() {
  const { pages, getInvolvedCards } = useCms()
  const involvedPage = pages['get-involved'] || {}

  const fallbackCards = [
    {
      id: 'member',
      icon: 'Users',
      title: 'Become a Member',
      description:
        'Are you a carer? Join our community for free to access our resources, support groups, and Sunday Sessions.',
      buttonText: 'SIGN UP',
      buttonUrl: 'mailto:lemalganz@gmail.com?subject=Join%20Le%20Malaga',
      theme: 'dark',
    },
    {
      id: 'volunteer',
      icon: 'HandHeart',
      title: 'Volunteer',
      description:
        'We are always looking for passionate people to help run events, moderate online spaces, or provide professional services.',
      buttonText: 'VOLUNTEER WITH US',
      buttonUrl: 'mailto:lemalganz@gmail.com?subject=Volunteer%20Inquiry',
      theme: 'orange',
    },
    {
      id: 'donate',
      icon: 'Heart',
      title: 'Donate or Sponsor',
      description:
        'Your financial contributions allow us to run workshops, host retreats for burnt-out carers, and keep our services free.',
      buttonText: 'MAKE A DONATION',
      buttonUrl:
        'https://givealittle.co.nz/cause/help-us-be-there-for-carers-today-not-tomorrow',
      theme: 'dark',
    },
  ]

  const displayCards =
    getInvolvedCards && getInvolvedCards.length > 0 ? getInvolvedCards : fallbackCards

  return (
    <div className="w-full">
      <div className="bg-brand-orange text-white py-20 px-8 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-wide mb-4 relative z-10">
          {involvedPage.hero_title || 'Get Involved'}
        </h1>
        <p className="text-xl font-script text-[#f3eedf] relative z-10">
          {involvedPage.hero_subtitle || 'We are stronger together as aiga.'}
        </p>
      </div>

      <PageBlocksRenderer slug="get-involved" />

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-semibold text-brand-dark uppercase tracking-wide mb-6">
            Join the Movement
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {involvedPage.content_markdown ||
              'Le Malaga thrives on the strength and generosity of our community. Whether you are a carer looking for a safe space, a volunteer wanting to give back, or a sponsor looking to support our mission, there is a place for you here.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayCards.map((card: any, idx: number) => {
            const isOrange = card.theme === 'orange' || idx === 1
            const IconComponent =
              card.icon === 'HandHeart' ? HandHeart : card.icon === 'Heart' ? Heart : Users
            return (
              <div
                key={card.id || idx}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center ${
                  isOrange ? 'border-t-4 border-t-brand-orange' : ''
                }`}
              >
                <div
                  className={`w-16 h-16 ${
                    isOrange ? 'bg-brand-orange' : 'bg-brand-dark'
                  } rounded-full flex items-center justify-center mb-6 text-white`}
                >
                  <IconComponent size={28} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 uppercase">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">{card.description}</p>
                {card.buttonUrl?.startsWith('http') || card.buttonUrl?.startsWith('mailto') ? (
                  <a
                    href={card.buttonUrl}
                    target={card.buttonUrl?.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-full font-bold transition shadow-md block ${
                      isOrange
                        ? 'bg-brand-orange text-white hover:bg-orange-800'
                        : 'bg-brand-dark text-white hover:bg-[#202d15]'
                    }`}
                  >
                    {card.buttonText || 'LEARN MORE'}
                  </a>
                ) : (
                  <a
                    href={card.buttonUrl || '#'}
                    className={`w-full py-3 rounded-full font-bold transition shadow-md block ${
                      isOrange
                        ? 'bg-brand-orange text-white hover:bg-orange-800'
                        : 'bg-brand-dark text-white hover:bg-[#202d15]'
                    }`}
                  >
                    {card.buttonText || 'LEARN MORE'}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
