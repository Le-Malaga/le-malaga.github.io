import { Phone, Users, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Support() {
  return (
    <div className="w-full">
      <div className="bg-brand-orange text-white py-20 px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-wide mb-4">Carer Support</h1>
          <p className="text-xl font-script text-[#f3eedf]">You don't have to carry the weight alone.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-semibold text-brand-dark uppercase tracking-wide mb-6">How we can help</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you need someone to talk to, practical advice on navigating the healthcare system, or just a safe space to connect with other carers, Le Malaga is here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#f3eedf] rounded-full flex items-center justify-center mb-6 text-brand-dark">
              <Phone size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 uppercase">1-on-1 Talanoa</h3>
            <p className="text-gray-600 mb-8 flex-1">
              Confidential, culturally safe conversations with experienced carers who understand your journey.
            </p>
            <button className="w-full bg-brand-dark text-white py-3 rounded-full font-bold hover:bg-[#202d15] transition shadow-md">
              REQUEST A CALL
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#f3eedf] rounded-full flex items-center justify-center mb-6 text-brand-dark">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 uppercase">Support Groups</h3>
            <p className="text-gray-600 mb-8 flex-1">
              Join our regular in-person and online meetups to share stories and draw strength from the community.
            </p>
            <Link to="/events" className="w-full bg-brand-orange text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-800 transition shadow-md">
              VIEW SCHEDULE <ArrowRight size={18} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#f3eedf] rounded-full flex items-center justify-center mb-6 text-brand-dark">
              <Calendar size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 uppercase">Sunday Sessions</h3>
            <p className="text-gray-600 mb-8 flex-1">
              Weekly Zoom check-ins featuring guest speakers, spiritual grounding, and dedicated Q&A time.
            </p>
            <Link to="/sunday-sessions" className="w-full bg-brand-dark text-white py-3 rounded-full font-bold hover:bg-[#202d15] transition shadow-md">
              JOIN NEXT SESSION
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
