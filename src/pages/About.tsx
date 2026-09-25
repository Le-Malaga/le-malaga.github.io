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

      {/* We removed the Meet the Aiga section because the stories now live on the dedicated Our Stories page */}
    </div>
  )
}
