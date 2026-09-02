import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Placeholder() {
  const location = useLocation()
  
  // Format the path into a readable title
  const path = location.pathname.split('/').pop() || 'Page'
  const title = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl w-full border border-[#e8e2d2]">
        <h1 className="text-5xl font-heading font-bold text-brand-dark mb-6">{title}</h1>
        <p className="text-xl text-gray-600 mb-10 font-medium">
          This is a simulated page for the <strong className="text-brand-orange">{location.pathname}</strong> route. 
          In the full application, this would contain the actual content for {title}.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-800 transition shadow-md">
          <ArrowLeft size={18} /> BACK TO HOME
        </Link>
      </div>
    </div>
  )
}
