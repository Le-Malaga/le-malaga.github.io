import { Book, FileText, Download, Link as LinkIcon, Video } from 'lucide-react'

export default function Resources() {
  return (
    <div className="w-full">
      <div className="bg-brand-dark text-white py-20 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-wide mb-4">Carer Resources</h1>
        <p className="text-xl text-[#a3a89e] max-w-2xl mx-auto">
          Practical tools, information, and guides tailored for Pasifika carers to help navigate the healthcare system and daily life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Navigating the System</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Understanding government subsidies, healthcare processes, and legal rights can be overwhelming. We've simplified the essential information you need to advocate for your aiga.
            </p>
            <div className="space-y-4">
              <a href="#" className="flex items-center justify-between p-4 bg-[#fcfaf4] border border-[#e8e2d2] rounded-xl hover:shadow-md transition group">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition">
                    <FileText size={24} />
                  </div>
                  <span className="font-bold text-brand-dark">Carer Support Subsidy Guide</span>
                </div>
                <Download size={20} className="text-gray-400" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 bg-[#fcfaf4] border border-[#e8e2d2] rounded-xl hover:shadow-md transition group">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition">
                    <FileText size={24} />
                  </div>
                  <span className="font-bold text-brand-dark">Understanding Power of Attorney</span>
                </div>
                <Download size={20} className="text-gray-400" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 bg-[#fcfaf4] border border-[#e8e2d2] rounded-xl hover:shadow-md transition group">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition">
                    <LinkIcon size={24} />
                  </div>
                  <span className="font-bold text-brand-dark">Disability Support Services Directory</span>
                </div>
                <ArrowRightIcon />
              </a>
            </div>
          </div>
          <div className="bg-[#f3eedf] rounded-2xl p-8 flex flex-col justify-center border border-[#e8e2d2]">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">Recommended Reading</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Book className="text-brand-orange mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-brand-dark">The Pasifika Dementia Framework</h4>
                  <p className="text-sm text-gray-600 mt-1">A culturally appropriate approach to understanding and managing dementia in our communities.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Video className="text-brand-orange mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-brand-dark">Self-Care Webinar Series</h4>
                  <p className="text-sm text-gray-600 mt-1">Recorded sessions from our clinical psychologists on managing burnout and grief.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  )
}
