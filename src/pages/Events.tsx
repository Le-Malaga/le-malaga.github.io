import { MapPin, ArrowRight, ExternalLink } from 'lucide-react'

export default function Events() {
  const events = [
    { date: '14', month: 'FEB', title: 'Le Malaga Tag Tournament', loc: 'Barry Curtis Park, Papakura', desc: 'A fun family day out! Enter a team or just come to support. Food stalls and kids activities available.' },
    { date: '09', month: 'AUG', title: 'Indoor Netball Tournament', loc: 'Action Indoor Sports, Auckland', desc: 'Our annual fundraiser. Grab your aiga and register a team for a day of friendly competition.' },
    { date: '20', month: 'SEP', title: 'Carers Workshop & Lunch', loc: 'Auckland (Venue TBA)', desc: 'A dedicated day for carers to receive training on manual handling, stress management, followed by a catered lunch.' },
    { date: '15', month: 'NOV', title: 'End of Year Fiafia Night', loc: 'Mangere Memorial Hall', desc: 'Celebrating our carers and their incredible work throughout the year. Dinner, performances, and awards.' }
  ]

  return (
    <div className="w-full">
      <div className="bg-brand-dark text-white py-20 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-wide mb-4">Events & Meetups</h1>
        <p className="text-xl text-[#a3a89e] max-w-2xl mx-auto">
          Come together to connect, learn, and celebrate with the Le Malaga community.
        </p>
      </div>

      {/* Walk Fundraiser Banner */}
      <div className="bg-brand-orange text-white py-12 px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-heading font-bold uppercase tracking-wide">Moving For Le Malaga - Walk Fundraiser</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              We are walking to raise awareness and vital funds for Pasifika dementia carers. Support our journey and help us continue providing free community events, resources, and safe spaces for our aiga.
            </p>
          </div>
          <a href="https://givealittle.co.nz/cause/moving-for-le-malaga" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-bg transition flex items-center gap-3 shadow-lg whitespace-nowrap">
            Support on Givealittle <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-20 space-y-8">
        {events.map((event, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-8 hover:-translate-y-1 transition duration-300">
            <div className="text-center w-32 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-8">
              <div className="text-5xl font-heading font-bold text-brand-dark mb-1">{event.date}</div>
              <div className="text-brand-orange font-bold text-lg tracking-widest">{event.month}</div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">{event.title}</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-4 font-medium">
                <MapPin size={18} className="text-brand-orange" /> {event.loc}
              </div>
              <p className="text-gray-600 leading-relaxed">{event.desc}</p>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-[#fcfaf4] border-2 border-brand-dark text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-dark hover:text-white transition flex items-center justify-center gap-2">
                RSVP <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Gatherings Highlight */}
      <div className="bg-[#fcfaf4] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-dark uppercase tracking-wide mb-4">Recent Gatherings</h2>
            <p className="text-lg text-gray-600">Connecting outside our wider events in smaller local spaces.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex-1 w-full">
              <img src="/images/West_Auckland_1.png" alt="West Auckland Carers Gathering" className="w-full h-auto rounded-2xl shadow-md border-4 border-white bg-gray-50 object-cover" />
            </div>
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-brand-bg text-brand-orange px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-2">Community Highlight</div>
              <h3 className="text-3xl font-heading font-bold text-brand-dark">West & Central Auckland Catch-Up</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Just a few of our 21 West & Central Auckland carers! Le Malaga has now grown to 60 members altogether with our carers spread across Auckland, around Aotearoa, the South Island, Samoa and Australia.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                These smaller local catch-ups make it easier for us to connect outside of our wider gatherings. Today was extra special having 3 of our loved ones right there with us, connecting, laughing, and simply being part of the village.
              </p>
              <p className="text-brand-orange font-bold text-xl italic mt-6">
                "Because Le Malaga isn't just about supporting the carer, it's about embracing the people we care for too. Different places. Different journeys. One village."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
