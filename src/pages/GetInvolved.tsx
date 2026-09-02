import { Heart, Users, HandHeart } from 'lucide-react'

export default function GetInvolved() {
  return (
    <div className="w-full">
      <div className="bg-brand-orange text-white py-20 px-8 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-wide mb-4 relative z-10">Get Involved</h1>
        <p className="text-xl font-script text-[#f3eedf] relative z-10">We are stronger together as aiga.</p>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-semibold text-brand-dark uppercase tracking-wide mb-6">Join the Movement</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Le Malaga thrives on the strength and generosity of our community. Whether you are a carer looking for a safe space, a volunteer wanting to give back, or a sponsor looking to support our mission, there is a place for you here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6 text-white">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 uppercase">Become a Member</h3>
            <p className="text-gray-600 mb-8 flex-1">
              Are you a carer? Join our community for free to access our resources, support groups, and Sunday Sessions.
            </p>
            <button className="w-full bg-brand-dark text-white py-3 rounded-full font-bold hover:bg-[#202d15] transition shadow-md">
              SIGN UP
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center border-t-4 border-t-brand-orange">
            <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 text-white">
              <HandHeart size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 uppercase">Volunteer</h3>
            <p className="text-gray-600 mb-8 flex-1">
              We are always looking for passionate people to help run events, moderate online spaces, or provide professional services.
            </p>
            <button className="w-full bg-brand-orange text-white py-3 rounded-full font-bold hover:bg-orange-800 transition shadow-md">
              VOLUNTEER WITH US
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6 text-white">
              <Heart size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 uppercase">Donate or Sponsor</h3>
            <p className="text-gray-600 mb-8 flex-1">
              Your financial contributions allow us to run workshops, host retreats for burnt-out carers, and keep our services free.
            </p>
            <a
              href="https://givealittle.co.nz/cause/help-us-be-there-for-carers-today-not-tomorrow"
              target="_blank"
              rel="noopener noreferrer"
              </a>
            <button className="w-full bg-brand-dark text-white py-3 rounded-full font-bold hover:bg-[#202d15] transition shadow-md">
              MAKE A DONATION
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
