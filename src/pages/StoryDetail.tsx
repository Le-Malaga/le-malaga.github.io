import { useParams, Link } from 'react-router-dom'
import { stories } from '../data/stories'
import { ArrowLeft, BookOpen, Headphones, Play, HeartHandshake, CircleAlert, ArrowRight } from 'lucide-react'

export default function StoryDetail() {
  const { id } = useParams()
  const story = stories.find(s => s.id === id)

  if (!story) return <div className="p-20 text-center">Story not found.</div>

  return (
    <div className="w-full bg-[#fcfaf4] min-h-screen pb-20 font-sans">
      
      {/* Hero Header matching Mockup */}
      <div className="w-full h-auto min-h-[50vh] relative flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/50 pb-12 pt-8">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')] pointer-events-none"></div>
        
        <div className="w-full md:w-5/12 h-[300px] md:h-[500px] relative z-20">
          {/* Masked Image on Left */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#fcfaf4] z-10 pointer-events-none"></div>
          <img src={story.image} alt={story.name} className="w-full h-full object-cover object-top" />
        </div>

        <div className="w-full md:w-7/12 relative z-20 px-8 md:pr-16 text-center md:text-left mt-8 md:mt-0">
          <div className="mb-8">
            <Link to="/stories" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-orange mb-6 font-bold tracking-wider text-sm transition">
              <ArrowLeft size={18} /> BACK TO STORIES
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-[#5b3c31] leading-tight mb-8">
            {story.quote}
          </h1>
          
          <div className="text-lg md:text-xl text-gray-700 font-medium max-w-xl mb-4">
            {story.subquote}
          </div>
          <div className="text-brand-dark font-bold tracking-widest uppercase text-sm border-b-2 border-brand-orange inline-block pb-1">
            {story.name} <span className="opacity-50 mx-2">|</span> {story.location}
          </div>
        </div>
        
        {/* CARER'S VOICE Badge */}
        <div className="absolute top-12 right-0 bg-brand-orange text-white px-8 py-3 rounded-l-full font-bold uppercase tracking-widest text-sm shadow-md flex items-center gap-2 z-30">
          <HeartHandshake size={18} /> CARER'S VOICE
        </div>
      </div>

      {/* 3 Column Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 flex flex-col lg:flex-row gap-10">
        
        {/* Left Col: At a Glance */}
        <div className="w-full lg:w-[25%] space-y-12">
          <div className="bg-[#f5f1e6] p-8 rounded-3xl shadow-sm border border-[#e8e3d5]">
            <h3 className="font-script text-4xl text-brand-dark mb-8 transform -rotate-2">At a glance</h3>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-[#b36a4b] p-3 rounded-full text-white shrink-0 shadow-inner">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark uppercase tracking-wider text-xs mb-1">THE MOMENT</h4>
                  <p className="text-gray-600 text-sm leading-snug">Mum's needs started changing.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-[#785b41] p-3 rounded-full text-white shrink-0 shadow-inner">
                  <CircleAlert size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark uppercase tracking-wider text-xs mb-1">THE HARD PART</h4>
                  <p className="text-gray-600 text-sm leading-snug">Trying to care while working and looking after my own family.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-[#3e4a28] p-3 rounded-full text-white shrink-0 shadow-inner">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark uppercase tracking-wider text-xs mb-1">WHAT I LEARNED</h4>
                  <p className="text-gray-600 text-sm leading-snug">I didn't have to carry everything alone.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[#e8e3d5]">
              <p className="font-script text-3xl text-[#5b3c31] leading-relaxed mb-4 text-center transform -rotate-1">
                "Please don't wait until you're exhausted before asking for help."
              </p>
              <p className="font-bold text-brand-dark text-center text-sm uppercase tracking-widest">— Le Malaga</p>
            </div>
          </div>
          
          <button className="w-full bg-[#d95a2b] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#b34820] transition flex items-center justify-center gap-2 tracking-widest text-sm">
            READ THE FULL STORY <ArrowRight size={18} />
          </button>
        </div>

        {/* Middle Col: The Timeline */}
        <div className="w-full lg:w-[45%] lg:px-4">
          <h2 className="font-script text-5xl text-brand-dark mb-12 transform -rotate-2">Their Story</h2>
          
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-[15px] before:w-px before:bg-[#d4cdb3]">
            {story.timeline.map((step, i) => (
              <div key={i} className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 group">
                <div className="w-8 h-8 bg-[#d95a2b] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 z-10 shadow-md ring-4 ring-[#fcfaf4] mt-1">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-brand-dark uppercase tracking-widest text-sm mb-3">{step.title}</h3>
                  <p className="text-[#5b3c31] leading-relaxed mb-6">
                    {step.text}
                  </p>
                  
                  {step.image ? (
                    <div className={`inline-block bg-white p-4 pb-16 shadow-xl rounded-sm border border-gray-200 transform transition duration-500 hover:scale-110 hover:z-20 ${i % 2 === 0 ? 'rotate-3' : '-rotate-3'} relative`}>
                      <img src={step.image} alt={step.title} className="w-48 sm:w-64 h-48 sm:h-64 object-cover rounded-sm bg-gray-100" />
                      <p className="absolute bottom-4 left-0 right-0 text-center font-script text-3xl text-gray-700 transform -rotate-1">Memories...</p>
                    </div>
                  ) : (
                    <div className={`inline-block bg-white p-4 pb-12 shadow-md rounded-sm border border-gray-200 w-56 sm:w-72 h-60 sm:h-80 flex flex-col items-center justify-center transform transition duration-500 hover:scale-110 hover:z-20 ${i % 2 === 0 ? 'rotate-2' : '-rotate-3'}`}>
                      <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-4 bg-gray-50/50">
                         <p className="text-center font-bold text-gray-400 text-xs tracking-widest uppercase px-4">Upload Photo in Notion</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center pb-8">
            <h3 className="font-bold text-brand-orange uppercase tracking-widest text-sm mb-2">A MESSAGE FOR OTHER CARERS</h3>
            <p className="font-script text-4xl text-[#5b3c31] leading-relaxed transform -rotate-1">
              "Please don't wait until you're exhausted before asking for help."
            </p>
          </div>
        </div>

        {/* Right Col: Media & CTA */}
        <div className="w-full lg:w-[30%] space-y-12">
          <div className="bg-[#f5f1e6] p-6 rounded-3xl border border-[#e8e3d5]">
            <h3 className="font-bold text-brand-dark uppercase tracking-wider text-sm mb-6">HOW {story.name.toUpperCase()} SHARED IT</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-brand-orange/20 hover:border-brand-orange transition group">
                <div className="bg-brand-orange p-3 rounded-full text-white shadow-inner">
                  <BookOpen size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-brand-dark text-sm">READ</h4>
                  <p className="text-xs text-gray-500">Full written story</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-gray-200 opacity-60 cursor-not-allowed">
                <div className="bg-gray-200 p-3 rounded-full text-gray-500 shadow-inner">
                  <Headphones size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-500 text-sm">LISTEN</h4>
                  <p className="text-xs text-gray-400">Audio version (Coming Soon)</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-gray-200 opacity-60 cursor-not-allowed">
                <div className="bg-gray-200 p-3 rounded-full text-gray-500 shadow-inner">
                  <Play size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-500 text-sm">WATCH</h4>
                  <p className="text-xs text-gray-400">Video story (Coming Soon)</p>
                </div>
              </button>
            </div>
            
            <div className="mt-8 bg-[#e86a33] p-8 rounded-2xl text-center transform rotate-1 shadow-lg relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
               <p className="font-script text-3xl text-white leading-relaxed relative z-10">
                 "I thought I was just helping Mum. Then I realised I needed help too."
               </p>
            </div>
          </div>

          <div className="bg-[#1e2a24] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <h3 className="font-script text-4xl mb-4 relative z-10 transform -rotate-2">Your story matters</h3>
            <p className="text-white/80 mb-8 relative z-10 text-sm leading-relaxed">
              If you've walked a caring journey, your story could help someone else feel seen, heard and understood.
            </p>
            <button className="w-full bg-[#d95a2b] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-white hover:text-[#d95a2b] transition tracking-widest text-sm relative z-10">
              SHARE YOUR STORY &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

