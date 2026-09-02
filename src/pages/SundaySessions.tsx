import { Calendar, Video, Clock, MessageCircle } from 'lucide-react'

export default function SundaySessions() {
  return (
    <div className="w-full">
      <div className="bg-[#fcfaf4] py-20 px-8 text-center border-b border-[#e8e2d2]">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-dark uppercase tracking-wide mb-4">Sunday Sessions</h1>
        <p className="text-2xl font-script text-brand-orange max-w-2xl mx-auto">
          A weekly space for spiritual grounding and connection.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Join us this Sunday</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our Sunday Sessions are the heartbeat of Le Malaga. Every week we gather online to share a short devotion, hear from a guest speaker on topics relating to health and wellbeing, and most importantly, check in on one another.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
              <h3 className="text-xl font-heading font-bold text-brand-orange mb-6 border-b pb-4">Next Session Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-800 font-medium">
                  <Calendar className="text-gray-400" size={24} /> <span>Sunday 6 September 2026</span>
                </div>
                <div className="flex items-center gap-4 text-gray-800 font-medium">
                  <Clock className="text-gray-400" size={24} /> <span>8:30pm (NZST)</span>
                </div>
                <div className="flex items-center gap-4 text-gray-800 font-medium">
                  <Video className="text-gray-400" size={24} /> <span>Online via Zoom</span>
                </div>
              </div>
              <button className="mt-8 w-full bg-brand-orange text-white py-4 rounded-full font-bold hover:bg-orange-800 transition shadow-md">
                GET ZOOM LINK
              </button>
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-white flex-shrink-0">
                <MessageCircle size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">Open Talanoa</h4>
                <p className="text-gray-600 leading-relaxed">We leave the last 30 minutes open for anyone to speak, share a challenge, or ask for prayer. It is a completely safe and confidential space.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Video size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">Cameras Optional</h4>
                <p className="text-gray-600 leading-relaxed">We know caring is exhausting. You are welcome to join in your pajamas, with your camera off, just to listen and be present.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
