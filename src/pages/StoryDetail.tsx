import { useParams, Link } from 'react-router-dom'
import { stories } from '../data/stories'
import { ArrowLeft, BookOpen, Headphones, Play, HeartHandshake, CircleAlert, ArrowRight } from 'lucide-react'

export default function StoryDetail() {
  const { id } = useParams()
  const story = stories.find(s => s.id === id)

  if (!story) return <div className="p-20 text-center">Story not found.</div>

  return (
    <div className="w-full bg-[#fcfaf4] min-h-screen pb-20">
      
      {/* Hero Header */}
      <div className="w-full h-[60vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/40 z-10"></div>
        <img src={story.image} alt={story.name} className="absolute inset-0 w-full h-full object-cover object-top blur-[2px]" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-8 text-center mt-20">
          <Link to="/stories" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-medium transition">
            <ArrowLeft size={20} /> Back to all stories
          </Link>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg leading-tight">
            {story.quote}
          </h1>
          <div className="inline-flex items-center gap-3 bg-brand-orange text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl">
            {story.name} <span className="opacity-50">|</span> {story.location}
          </div>
        </div>
      </div>

      {/* 3 Column Layout */}
      <div className="max-w-7xl mx-auto px-8 mt-16 flex flex-col lg:flex-row gap-12">
        
        {/* Left Col: At a Glance */}
        <div className="w-full lg:w-1/4 space-y-12">
          <div>
            <h3 className="font-heading font-bold text-3xl text-brand-dark mb-6">At a glance</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange shrink-0">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark uppercase tracking-wider text-sm mb-1">The Role</h4>
                  <p className="text-gray-600 text-sm">Full-time carer balancing family and responsibilities.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-brand-dark/10 p-3 rounded-full text-brand-dark shrink-0">
                  <CircleAlert size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark uppercase tracking-wider text-sm mb-1">The Hard Part</h4>
                  <p className="text-gray-600 text-sm">The unseen days of isolation and navigating dementia care alone.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#f0ece1] p-8 rounded-2xl">
            <p className="font-heading text-2xl text-brand-dark italic leading-relaxed mb-4">
              "Please don't wait until you're exhausted before asking for help."
            </p>
            <p className="font-bold text-brand-orange">— Le Malaga</p>
          </div>
        </div>

        {/* Middle Col: The Timeline */}
        <div className="w-full lg:w-2/4">
          <h2 className="font-heading font-bold text-5xl text-brand-dark mb-12">Their Story</h2>
          
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-[19px] before:w-0.5 before:bg-gray-200">
            {story.timeline.map((step, i) => (
              <div key={i} className="relative flex gap-8">
                <div className="w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0 z-10 shadow-md">
                  {step.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-brand-dark uppercase tracking-wider mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    {step.text}
                  </p>
                  <div className="mt-6 inline-block bg-white p-3 shadow-md rounded border border-gray-200 rotate-1 hover:rotate-0 transition duration-300">
                    <img src={story.image} alt="Polaroid" className="w-64 h-auto object-cover rounded-sm" />
                    <p className="text-center mt-3 font-medium text-gray-600 italic">Moments in time...</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="relative flex gap-8">
               <div className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0 z-10 shadow-md">
                  <ArrowRight size={20} />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-xl text-brand-orange font-bold italic">
                    "We value your story. If you've walked a caring journey, your story could help someone else feel seen, heard, and understood."
                  </p>
                </div>
            </div>
          </div>
        </div>

        {/* Right Col: Media & CTA */}
        <div className="w-full lg:w-1/4 space-y-12">
          <div>
            <h3 className="font-bold text-brand-dark uppercase tracking-wider mb-6">How they shared it</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-brand-orange/20 hover:border-brand-orange transition group">
                <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition">
                  <BookOpen size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-brand-dark text-sm">READ</h4>
                  <p className="text-xs text-gray-500">Full written story</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-brand-dark transition group opacity-50 cursor-not-allowed">
                <div className="bg-gray-100 p-2 rounded-lg text-gray-400">
                  <Headphones size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-400 text-sm">LISTEN (Coming Soon)</h4>
                  <p className="text-xs text-gray-400">Audio version</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-brand-dark transition group opacity-50 cursor-not-allowed">
                <div className="bg-gray-100 p-2 rounded-lg text-gray-400">
                  <Play size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-400 text-sm">WATCH (Coming Soon)</h4>
                  <p className="text-xs text-gray-400">Video story</p>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-10">
              <HeartHandshake size={150} />
            </div>
            <h3 className="font-heading font-bold text-3xl mb-4 relative z-10">Your story matters</h3>
            <p className="text-white/80 mb-8 relative z-10 text-sm leading-relaxed">
              If you've walked a caring journey, your story could help someone else feel seen, heard, and understood.
            </p>
            <button className="w-full bg-brand-orange text-white font-bold py-3 rounded-full hover:bg-white hover:text-brand-orange transition relative z-10">
              SHARE YOUR STORY &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
