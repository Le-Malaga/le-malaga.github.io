import { Link } from 'react-router-dom'
import { stories } from '../data/stories'
import { ArrowRight, Quote } from 'lucide-react'

export default function Stories() {
  return (
    <div className="w-full min-h-screen bg-[#fcfaf4]">
      {/* Header */}
      <div className="bg-brand-dark text-white py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-wide mb-6">Our Stories</h1>
          <p className="text-xl text-[#a3a89e] leading-relaxed max-w-2xl mx-auto">
            "Because Le Malaga isn't just about supporting the carer, it's about embracing the people we care for too. Different places. Different journeys. One village."
          </p>
        </div>
      </div>

      {/* Grid / Carousel */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {stories.map((story) => (
            <Link key={story.id} to={`/stories/${story.id}`} className="group relative block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 bg-white">
              <div className="h-80 w-full overflow-hidden">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-brand-orange font-bold text-sm tracking-widest uppercase mb-3">
                  {story.location}
                </div>
                <h3 className="text-3xl font-heading font-bold text-brand-dark mb-4">{story.name}</h3>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-gray-100 w-12 h-12 -z-10 transform rotate-180" />
                  <p className="text-gray-600 leading-relaxed italic z-10 relative">
                    {story.quote}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-brand-dark font-bold group-hover:text-brand-orange transition">
                  Read full story <ArrowRight size={20} className="group-hover:translate-x-2 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
