import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, Flower2 } from 'lucide-react'

export default function GenericPage() {
  const location = useLocation()
  const path = location.pathname.split('/').pop() || 'Page'
  const title = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
  
  return (
    <div className="flex-1 w-full bg-[#fcfaf4]">
      <div className="bg-brand-dark text-white py-16 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide">{title}</h1>
      </div>
      <div className="max-w-4xl mx-auto p-12 text-center">
        <div className="w-24 h-24 bg-[#f3eedf] text-brand-orange rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <Flower2 size={48} />
        </div>
        <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Content for {title}</h2>
        <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
          This is a fully realistic routed page template. In the final version, this space will be populated with the full copy, forms, or imagery for the {title} section.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-800 transition shadow-md tracking-wider">
          <ArrowLeft size={18} /> BACK TO HOME
        </Link>
      </div>
    </div>
  )
}
