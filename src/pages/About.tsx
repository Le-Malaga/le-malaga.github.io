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

          {/* Tasi */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-24">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-heading font-bold text-brand-orange uppercase">Aityasi Lemanu (Tasi)</h3>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Talofa, My name is Aityasi Lemanu (aka tasi). Being a carer for my mother Apoaniva taught me more than anything else in my life. As the youngest of 7 from Afega and Vailele, it was an honour I didn't take lightly."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "It taught me patience — to slow down and be present. It taught me strength — to keep going even when it was hard and tiring. And it taught me alofa — real, unconditional love that gives without counting."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Like our Samoan saying, ‘O le ala i le pule o le tautua’ — the path to leadership is through service. Caring for my mum shaped who I am as a man, as a son, and as a Samoan."
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img src="/images/tasi1.jpg" alt="Tasi" className="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white" />
              <img src="/images/tasi2.jpg" alt="Tasi" className="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white" />
            </div>
          </div>

          {/* Juita */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-heading font-bold text-brand-orange uppercase">Juita Mariner</h3>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "My name is Juita Mariner, and at 43 years old, my life is dedicated to a purpose deeply rooted in devotion: serving as the full-time caregiver for both of my aging parents. My mother, who is 84, lives with the dual challenges of Alzheimer’s disease and vascular dementia. My father, who is 91, is currently receiving palliative care."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "When we first learned of my mother’s dementia diagnosis, it felt as though my entire world had instantly shattered. Since then, I have come to understand the quiet pain of anticipatory grief—the heartache of missing the mother I knew, even while she is still sitting right beside me. Managing both of their intensive care needs means navigating a delicate balance of continuous love and profound loss."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "To provide them with the stability they require, I maintain a highly structured, routine-based environment. I meticulously document every detail of their health—from tracking medication schedules and diabetes blood sugar levels to monitoring bowel movements and keeping daily communication logs. Yet, alongside this strict clinical discipline, our days are grounded in joy. We fill our home with tailored activities, uplifting music, and quiet moments of connection."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "While the days can be physically demanding and emotionally heavy, I hold no regrets. Caring for my parents in their final chapter is the greatest privilege of my life. I know that when the time eventually comes for me to step back into my own journey, I will carry peace in my heart, knowing I gave everything possible to ensure their last days were filled with dignity, comfort, and unconditional love."
              </p>
              
              <div className="bg-brand-bg p-6 rounded-xl border border-gray-200 mt-8 shadow-sm">
                <h4 className="font-heading font-bold text-brand-dark mb-4 uppercase">The Quiet Solitude of Caregiving</h4>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Caregiving often transforms a world once filled with plans and dreams into a quiet, solitary routine. As daily responsibilities multiply, the outside world tends to pull back. Invitations fade, phone calls grow infrequent, and a heavy sense of isolation settles in.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  For many carers, the most powerful lifeline isn't a grand gesture—it is simply knowing they haven’t been forgotten. A quick text message saying "I'm thinking of you," or a friend popping in for ten minutes just to say hello, can cut through the loneliness of an entire week.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Even when asked directly, "Do you need anything?", a carer will almost always answer "No." They are used to carrying the weight alone and default to putting others first. But the offer itself matters deeply. Reaching out in anyway reminds them that their dedication is seen, their struggles are recognized, and their presence is missed.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold text-brand-orange text-sm">
                  Caregiving is a heavy path to walk. You don't need to fix their reality to make a difference; you just need to show up so they don't have to walk it completely alone.
                </p>
              </div>
            </div>
            <div className="flex-1 sticky top-24">
              <img src="/images/juita.jpg" alt="Juita" className="w-full h-[45rem] object-cover object-top rounded-2xl shadow-lg border-4 border-white" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
