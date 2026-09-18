export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-wide mb-6">Our Story</h1>
          <p className="text-xl text-[#a3a89e] max-w-2xl mx-auto">
            Le Malaga was born from a shared need to support Pasifika carers. We are a community rooted in faith, culture, and lived experience.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-heading font-bold text-brand-dark uppercase tracking-wide mb-8">Mission Statement</h2>
        <div className="text-xl text-gray-700 leading-relaxed space-y-6">
          <p>
            Le Malaga exists to Uplift, Empower and walk alongside Carers on their journey. We are Dementia specific but not exclusive. We are understanding that the feelings, emotions and exhaustion of caring often overlap, no matter the situation. Our space is for anyone carrying the weight of caring for someone that they love.
          </p>
          <p>
            We are built on Lived Experience. Real stories, real struggles, real resilience. Our group includes Carers at every stage – those just beginning, those in the middle, those nearing the end and those who have already served their time. We know the journey doesn't end when the Caring role does; the impact continues emotionally and spiritually.
          </p>
          <p className="font-semibold text-brand-orange">
            Through Cultural connection, Honesty, Empathy and Togetherness, Le Malaga is here to raise awareness, break the silence and ensure every Carer feels supported, celebrated and guided with love.
          </p>
        </div>
      </div>

      {/* Meet the Team / Lived Experience */}
      <div className="bg-[#fcfaf4] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-heading font-bold text-brand-dark uppercase tracking-wide mb-16 text-center">Meet the Aiga</h2>
          
          {/* Flory */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-heading font-bold text-brand-orange uppercase">Flory Fesaua'i Sio Levy</h3>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Talofa lava my name is Flory Fesaua'i Sio Levy, I'm caring for my mother. While on this journey with mum has become challenging at times but also taught me a lot about myself. The love, resilience, kindness, empathy and exhaustion."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "But also showing up, being patient and being her rock solid star for her I wouldn't change. I can make money any time any where, but I only have one mother in this lifetime. I owe so much to my mother and late father. So being a carer is my choice to serve and honour my first love."
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img src="/images/flory1.jpg" alt="Flory" className="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white" />
              <img src="/images/flory2.jpg" alt="Flory and Family" className="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white" />
            </div>
          </div>

          {/* Tasi & Juita */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img src="/images/tasi1.jpg" alt="Tasi" className="w-full h-64 object-cover rounded-2xl shadow-lg border-4 border-white" />
              <img src="/images/tasi2.jpg" alt="Tasi" className="w-full h-64 object-cover rounded-2xl shadow-lg border-4 border-white" />
            </div>
            <div className="flex-1">
              <img src="/images/juita.jpg" alt="Juita" className="w-full h-[33rem] object-cover rounded-2xl shadow-lg border-4 border-white" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
