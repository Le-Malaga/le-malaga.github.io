import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'

export default function Placeholder() {
  const location = useLocation()
  const path = location.pathname.split('/').pop() || 'Page'
  const title = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-24 text-center bg-[#fcfaf4]">
      <div className="bg-white p-12 md:p-16 rounded-3xl shadow-xl max-w-3xl w-full border border-[#e8e2d2]">
        <div className="w-24 h-24 bg-[#f3eedf] text-brand-dark rounded-full flex items-center justify-center mx-auto mb-8">
          <BookOpen size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 uppercase tracking-wide">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-4 font-medium leading-relaxed">
          We are currently gathering resources and weaving together the stories for this section.
        </p>
        <p className="text-lg text-brand-orange font-script font-bold italic mb-10">
          Check back soon as we continue to grow our community space.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#202d15] transition shadow-md tracking-wider">
          <ArrowLeft size={18} /> RETURN HOME
        </Link>
      </div>
    </div>
  )
}
