import { Heart, Shield, Users } from 'lucide-react'

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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-heading font-semibold text-brand-dark uppercase tracking-wide mb-6">Rooted in Lived Experience</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We understand the challenges of caring for aiga through dementia, disability, chronic illness, and ageing because we walk this journey ourselves. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Often, carers feel isolated and overwhelmed. Le Malaga was created to ensure that no one has to walk this path alone. By coming together, we share resources, provide emotional support, and navigate the complex health systems as a collective.
          </p>
          <ul className="space-y-4 mt-8">
            <li className="flex items-start gap-4">
              <Heart className="text-brand-orange mt-1" />
              <p className="text-gray-800 font-medium">Empathetic support from people who truly understand.</p>
            </li>
            <li className="flex items-start gap-4">
              <Shield className="text-brand-orange mt-1" />
              <p className="text-gray-800 font-medium">A safe, confidential space for carers to breathe and share.</p>
            </li>
            <li className="flex items-start gap-4">
              <Users className="text-brand-orange mt-1" />
              <p className="text-gray-800 font-medium">Pasifika values and faith at the core of everything we do.</p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/images/story1.jpg" alt="Community" className="rounded-2xl w-full h-64 object-cover object-top shadow-lg" />
          <img src="/images/story2.jpg" alt="Support" className="rounded-2xl w-full h-64 object-cover object-top shadow-lg mt-8" />
        </div>
      </div>
    </div>
  )
}
