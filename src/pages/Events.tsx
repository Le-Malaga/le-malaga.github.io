import { MapPin, ArrowRight } from 'lucide-react'

export default function Events() {
  const events = [
    { date: '14', month: 'JUN', title: 'Le Malaga Tag Tournament', loc: 'Barry Curtis Park, Papakura', desc: 'A fun family day out! Enter a team or just come to support. Food stalls and kids activities available.' },
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
    </div>
  )
}
