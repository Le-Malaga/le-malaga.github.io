import { Heart, Users, Shield, Globe, ArrowRight, Calendar, User, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCms, PageBlocksRenderer } from '../context/CmsContext'

export default function Home() {
  const { pages, siteSettings, events: cmsEvents, stories: cmsStories } = useCms()
  const homePage = pages['home'] || {}
  const nextSession = siteSettings.next_sunday_session || {}

  const heroImage = homePage.hero_image_url || '/images/hero-bg.jpg'
  const sundayDate = nextSession.dateLabel || 'Sunday 6 September 2026'
  const sundayTime = nextSession.timeLabel || '8:30pm (NZST)'
  const sundayFormat = nextSession.formatLabel || 'Online via Zoom'

  const displayEvents =
    cmsEvents.length > 0
      ? cmsEvents.slice(0, 3).map((ev: any) => ({
          date: (ev.date_text || '14').split(' ')[0] || 'TBA',
          month: (ev.date_text || 'FEB').split(' ')[1] || '2026',
          title: ev.title,
          loc: ev.location || 'Auckland',
        }))
      : [
          { date: '14', month: 'FEB', title: 'Le Malaga Tag Tournament', loc: 'Barry Curtis Park, Papakura' },
          { date: '09', month: 'AUG', title: 'Indoor Netball Tournament', loc: 'Action Indoor Sports, Auckland' },
          { date: '20', month: 'SEP', title: 'Carers Workshop & Lunch', loc: 'Auckland (Venue TBA)' },
        ]

  const featuredStories = cmsStories.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
        <div className="flex-1 space-y-6 z-10">
          {homePage.hero_title ? (
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-brand-dark leading-[1.1] uppercase tracking-wide">
              {homePage.hero_title}
            </h1>
          ) : (
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-brand-dark leading-[1.1] uppercase tracking-wide">
              Walking together,
              <br />
              <span className="text-brand-orange">No one walks alone</span>
            </h1>
          )}
          <p className="text-xl text-gray-800 max-w-lg font-medium leading-relaxed">
            {homePage.hero_subtitle ||
              'Le Malaga is a Pasifika-led community supporting carers and their aiga through dementia, disability, chronic illness and ageing.'}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/support"
              className="bg-brand-orange text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-orange-800 transition shadow-lg"
            >
              <Heart size={20} /> I NEED SUPPORT
            </Link>
            <Link
              to="/get-involved"
              className="bg-transparent text-brand-dark border-2 border-brand-dark px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-brand-dark hover:text-white transition shadow-lg"
            >
              <Users size={20} /> JOIN OUR COMMUNITY
            </Link>
          </div>
        </div>
        <div className="flex-1 relative w-full">
          <img
            src={heroImage}
            alt="Pasifika women"
            className="rounded-[2rem] shadow-2xl object-cover object-center w-full h-[500px]"
          />
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-brand-dark text-white py-16 px-8 shadow-inner mt-8 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <Heart className="text-brand-orange w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2 uppercase tracking-widest text-brand-bg">
                Lived Experience
              </h3>
              <p className="text-sm text-[#a3a89e] leading-relaxed">
                We understand because
                <br />
                we've walked this journey.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Globe className="text-brand-orange w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2 uppercase tracking-widest text-brand-bg">
                Pasifika Grounded
              </h3>
              <p className="text-sm text-[#a3a89e] leading-relaxed">
                Our values, culture and
                <br />
                faith guide us.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Shield className="text-brand-orange w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2 uppercase tracking-widest text-brand-bg">
                Safe & Confidential
              </h3>
              <p className="text-sm text-[#a3a89e] leading-relaxed">
                A safe space to share,
                <br />
                be heard and supported.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Users className="text-brand-orange w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2 uppercase tracking-widest text-brand-bg">
                Community Powered
              </h3>
              <p className="text-sm text-[#a3a89e] leading-relaxed">
                Stronger together as
                <br />
                carers and aiga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-24 px-8 max-w-7xl mx-auto relative z-10 -mt-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/start"
            className="bg-[#fcfaf4] rounded-2xl p-8 text-center shadow-xl border border-[#e8e2d2] flex flex-col items-center hover:-translate-y-2 transition transform duration-300 group"
          >
            <div className="w-24 h-24 bg-brand-orange text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white group-hover:scale-110 transition">
              <Heart size={40} />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-brand-orange mb-3 leading-tight uppercase tracking-wider">
              I'm New
              <br />
              To Caring
            </h3>
            <p className="text-sm text-gray-700 mb-8 flex-1 font-medium px-4">
              I don't know where to begin.
            </p>
            <div className="w-full bg-brand-orange text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 group-hover:bg-orange-800 transition shadow-md">
              START HERE <ArrowRight size={18} />
            </div>
          </Link>
          <Link
            to="/support"
            className="bg-[#fcfaf4] rounded-2xl p-8 text-center shadow-xl border border-[#e8e2d2] flex flex-col items-center hover:-translate-y-2 transition transform duration-300 group"
          >
            <div className="w-24 h-24 bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white group-hover:scale-110 transition">
              <Users size={40} />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-brand-dark mb-3 leading-tight uppercase tracking-wider">
              I Need
              <br />
              Support
            </h3>
            <p className="text-sm text-gray-700 mb-8 flex-1 font-medium px-4">
              I need someone who understands.
            </p>
            <div className="w-full bg-brand-dark text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 group-hover:bg-[#202d15] transition shadow-md">
              GET SUPPORT <ArrowRight size={18} />
            </div>
          </Link>
          <Link
            to="/get-involved"
            className="bg-[#fcfaf4] rounded-2xl p-8 text-center shadow-xl border border-[#e8e2d2] flex flex-col items-center hover:-translate-y-2 transition transform duration-300 group"
          >
            <div className="w-24 h-24 bg-brand-orange text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white group-hover:scale-110 transition">
              <Users size={40} />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-brand-orange mb-3 leading-tight uppercase tracking-wider">
              Join Our
              <br />
              Community
            </h3>
            <p className="text-sm text-gray-700 mb-8 flex-1 font-medium px-4">
              Connect with other carers and aiga.
            </p>
            <div className="w-full bg-brand-orange text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 group-hover:bg-orange-800 transition shadow-md">
              JOIN NOW <ArrowRight size={18} />
            </div>
          </Link>
          <Link
            to="/resources"
            className="bg-[#fcfaf4] rounded-2xl p-8 text-center shadow-xl border border-[#e8e2d2] flex flex-col items-center hover:-translate-y-2 transition transform duration-300 group"
          >
            <div className="w-24 h-24 bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white group-hover:scale-110 transition">
              <Globe size={40} />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-brand-dark mb-3 leading-tight uppercase tracking-wider">
              Carer
              <br />
              Resources
            </h3>
            <p className="text-sm text-gray-700 mb-8 flex-1 font-medium px-4">
              Practical tools and information.
            </p>
            <div className="w-full bg-brand-dark text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 group-hover:bg-[#202d15] transition shadow-md">
              EXPLORE RESOURCES <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </section>

      {/* Movable & Resizable CMS Blocks */}
      <PageBlocksRenderer slug="home" />

      {/* Events Section */}
      <section className="py-12 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 w-full">
        <div className="bg-[#fcfaf4] rounded-2xl p-10 shadow-lg border border-[#e8e2d2]">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-brand-orange" size={32} />
            <h2 className="text-3xl font-heading font-semibold text-brand-dark uppercase tracking-wide">
              {nextSession.title || 'Next Sunday Session'}
            </h2>
          </div>
          <p className="text-brand-orange font-script text-3xl mb-8 font-semibold">
            You're not alone in this journey
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex items-center gap-4 text-gray-800 font-medium text-lg">
              <Calendar className="text-brand-orange" size={24} /> <span>{sundayDate}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800 font-medium text-lg">
              <Calendar className="text-brand-orange" size={24} /> <span>{sundayTime}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800 font-medium text-lg">
              <Video className="text-brand-orange" size={24} /> <span>{sundayFormat}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800 font-medium text-lg">
              <User className="text-brand-orange" size={24} /> <span>Guest Speaker: TBA</span>
            </div>
          </div>

          <Link
            to="/sunday-sessions"
            className="bg-brand-orange text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-800 transition shadow-md w-full sm:w-max"
          >
            {nextSession.ctaLabel || 'JOIN ON ZOOM'} <ArrowRight size={18} />
          </Link>
        </div>

        <div className="bg-[#fcfaf4] rounded-2xl p-10 shadow-lg border border-[#e8e2d2]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-brand-dark" size={32} />
              <h2 className="text-3xl font-heading font-semibold text-brand-dark uppercase tracking-wide">
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="text-sm font-bold flex items-center gap-1 hover:text-brand-orange transition uppercase tracking-wider text-gray-600"
            >
              VIEW ALL EVENTS <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-6">
            {displayEvents.map((event: any, i: number) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="text-center w-16 flex-shrink-0">
                  <div className="text-3xl font-heading font-bold text-brand-dark leading-none mb-1">
                    {event.date}
                  </div>
                  <div className="text-brand-orange font-bold text-sm tracking-widest">
                    {event.month}
                  </div>
                </div>
                <div className="flex-1 border-l-2 pl-5 border-brand-orange/20">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-500 font-medium">{event.loc}</p>
                </div>
                <Link
                  to="/events"
                  className="bg-brand-dark text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#202d15] transition hidden sm:block shadow-sm tracking-wider"
                >
                  MORE INFO
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-heading font-semibold text-brand-dark uppercase tracking-wide">
              Stories From Our Aiga
            </h2>
            <p className="text-gray-600 mt-2 text-lg font-medium">
              Real stories. Real people. Real journeys.
            </p>
          </div>
          <Link
            to="/stories"
            className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hidden sm:flex items-center gap-2 hover:bg-orange-800 transition shadow-md"
          >
            READ STORIES <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStories.map((st: any) => (
            <Link
              key={st.id}
              to={`/stories/${st.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group hover:-translate-y-2 transition duration-300 block"
            >
              <img
                src={st.image}
                alt={st.name}
                className="w-full h-56 object-cover object-top group-hover:scale-105 transition duration-700"
              />
              <div className="p-8">
                <p className="font-heading font-semibold text-2xl text-brand-dark mb-4 leading-tight">
                  "{(st.quote || '').replace(/"/g, '')}"
                </p>
                <p className="text-brand-orange font-bold tracking-wider text-sm uppercase">
                  - {st.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
