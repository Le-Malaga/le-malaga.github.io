import { Link } from 'react-router-dom'
import { stories } from '../data/stories'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Stories() {
  const categories = [
    "ALL STORIES", "CARER JOURNEYS", "DEMENTIA", "AIGA & FAMILY", "THE UNSEEN WARRIORS", "AFTER CARING", "HOPE & HEALING"
  ]

  return (
    <div className="w-full min-h-screen bg-[#fcfaf4] font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="w-full h-auto min-h-[60vh] relative flex flex-col md:flex-row items-center justify-between bg-[#fcfaf4] pt-8 md:pt-0">
        <div className="w-full md:w-5/12 px-8 md:pl-16 lg:pl-24 relative z-20 py-12 md:py-24">
          <h1 className="text-6xl md:text-8xl font-script text-brand-orange mb-6 -rotate-2 origin-left drop-shadow-sm">
            Our Stories
          </h1>
          <h2 className="text-sm md:text-base font-bold text-brand-dark uppercase tracking-widest mb-6 border-b-2 border-brand-orange inline-block pb-2">
            REAL PEOPLE. REAL EXPERIENCES. REAL JOURNEYS.
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-lg mb-8">
            Behind every caring journey is a person with a story. A mother, a daughter, a son, a husband, a wife, a grandparent, a friend. These are the voices of our aiga — the moments of love, exhaustion, laughter, grief, uncertainty and hope that make up the caring journey.
          </p>
          <p className="text-xl md:text-2xl font-script text-brand-orange font-bold">
            You are seen • You are heard • You are valued
          </p>
        </div>

        <div className="w-full md:w-7/12 h-[300px] md:h-[600px] relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-l from-transparent to-[#fcfaf4] z-10 pointer-events-none"></div>
          {/* Using one of the carer images for the hero */}
          <img src="/images/SinaVera_1.png" alt="Our Stories Hero" className="w-full h-full object-cover object-top opacity-90" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black)' }} />
        </div>
      </div>

      {/* Filters Row */}
      <div className="max-w-6xl mx-auto px-4 py-8 border-b border-[#e8e3d5]">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat, i) => (
            <button 
              key={cat} 
              className={`px-6 py-2 rounded-md font-bold text-[10px] sm:text-xs tracking-widest uppercase transition shadow-sm ${i === 0 ? 'bg-[#d95a2b] text-white shadow-md' : 'bg-[#f0ece1] text-brand-dark hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Stories Carousel */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-dark uppercase tracking-widest flex items-center justify-center gap-4">
            <span className="text-brand-orange">🌺</span> FEATURED STORIES <span className="text-brand-orange">🌺</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1e2a24] text-white rounded-full flex items-center justify-center hover:bg-brand-orange transition z-20 shadow-xl opacity-0 group-hover:opacity-100 hidden sm:flex">
            <ArrowLeft size={24} />
          </button>
          
          <button className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1e2a24] text-white rounded-full flex items-center justify-center hover:bg-brand-orange transition z-20 shadow-xl opacity-0 group-hover:opacity-100 hidden sm:flex">
            <ArrowRight size={24} />
          </button>

          {/* Cards Flex Container (Horizontal Scroll) */}
          <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar pt-4">
            {stories.map((story) => (
              <div key={story.id} className="min-w-[280px] w-[280px] sm:min-w-[320px] sm:w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col snap-center shrink-0 relative group/card border border-[#e8e3d5] hover:-translate-y-2 transition duration-300">
                <div className="h-48 sm:h-56 w-full relative">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover object-top transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition duration-300"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-[175px] sm:top-[205px] left-6 bg-white border border-gray-100 px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest text-brand-dark shadow-md z-10 uppercase">
                  CARER JOURNEY
                </div>

                <div className="p-8 pt-10 flex-1 flex flex-col bg-white">
                  <h3 className="text-3xl font-script text-brand-dark mb-4 leading-tight">
                    {story.shortTitle || story.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 font-medium italic relative">
                    <span className="text-2xl text-[#d95a2b] absolute -top-2 -left-3 opacity-20 font-serif">"</span>
                    "{story.quote.replace(/"/g, '')}"
                  </p>
                  
                  <Link to={`/stories/${story.id}`} className="inline-flex items-center gap-2 text-[#d95a2b] font-bold text-xs tracking-widest uppercase hover:text-[#b34820] transition mt-auto group/link">
                    READ {story.name.split(' ')[0]}'S STORY <ArrowRight size={14} className="group-hover/link:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-4">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-orange"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#d4cdb3]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#d4cdb3]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#d4cdb3]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#d4cdb3]"></div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full bg-[#fcfaf4] relative overflow-hidden py-24 border-t border-gray-200">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')] pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-20 px-8">
          <h2 className="text-4xl md:text-5xl font-script text-brand-orange mb-6 -rotate-1">
            Your story could help someone else
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            There may be another carer out there feeling exactly what you once felt. Your story might be the first thing that makes them realise they are not alone.
          </p>
          
          <button className="bg-[#d95a2b] text-white px-10 py-4 rounded-xl font-bold tracking-widest hover:bg-[#b34820] transition shadow-lg flex items-center justify-center gap-3 mx-auto mb-6">
            SHARE YOUR STORY <ArrowRight size={20} />
          </button>
          
          <div className="flex items-center justify-center gap-3 text-gray-600 text-sm">
            <input type="checkbox" id="anonymous" className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
            <label htmlFor="anonymous">I would like my story to be anonymous</label>
          </div>
          
          <div className="absolute -right-12 bottom-0 transform rotate-12 opacity-80 pointer-events-none">
             <p className="font-script text-3xl text-brand-orange">Real stories.</p>
             <p className="font-script text-3xl text-brand-orange ml-4">Real impact. ♡</p>
          </div>
        </div>
      </div>
    </div>
  )
}
