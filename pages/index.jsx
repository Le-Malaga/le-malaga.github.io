import React from 'react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      id: 1,
      icon: '❤️',
      title: 'I\'M NEW TO CARING',
      description: 'I don\'t know where to begin.',
      link: '/start-here',
      buttonText: 'START HERE'
    },
    {
      id: 2,
      icon: '🤝',
      title: 'I NEED SUPPORT',
      description: 'I need someone who understands.',
      link: '/support',
      buttonText: 'GET SUPPORT'
    },
    {
      id: 3,
      icon: '👥',
      title: 'JOIN OUR COMMUNITY',
      description: 'Connect with other carers and aiga.',
      link: '/community',
      buttonText: 'JOIN NOW'
    },
    {
      id: 4,
      icon: '📚',
      title: 'CARER RESOURCES',
      description: 'Practical tools and information.',
      link: '/resources',
      buttonText: 'EXPLORE RESOURCES'
    }
  ];

  const events = [
    {
      id: 1,
      day: '14',
      month: 'JUN',
      title: 'Le Malaga Tag Tournament',
      location: 'Barry Curtis Park, Papakura'
    },
    {
      id: 2,
      day: '09',
      month: 'AUG',
      title: 'Indoor Netball Tournament',
      location: 'Action Indoor Sports, Auckland'
    },
    {
      id: 3,
      day: '20',
      month: 'SEP',
      title: 'Carers Workshop & Lunch',
      location: 'Auckland (Venue TBA)'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: 'Caring for Dad taught me patience and love',
      author: 'Mele, Auckland',
      image: '👨‍👩‍👧'
    },
    {
      id: 2,
      quote: 'Le Malaga is my safe space to breathe',
      author: 'Sia, Manurewa',
      image: '👩‍🦱'
    },
    {
      id: 3,
      quote: 'We walk this journey together as aiga',
      author: 'Junior, Henderson',
      image: '👴‍👩'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌺</span>
              <span className="text-xl font-bold text-orange-600">LE MALAGA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-orange-600">HOME</Link>
              <Link href="#" className="text-gray-700 hover:text-orange-600">ABOUT US</Link>
              <Link href="#" className="text-gray-700 hover:text-orange-600">CAREER SUPPORT</Link>
              <Link href="#" className="text-gray-700 hover:text-orange-600">RESOURCES</Link>
              <Link href="#" className="text-gray-700 hover:text-orange-600">SUNDAY SESSIONS</Link>
              <Link href="#" className="text-gray-700 hover:text-orange-600">EVENTS</Link>
              <Link href="#" className="text-gray-700 hover:text-orange-600">GET INVOLVED</Link>
            </div>
            <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">
              DONATE
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cream to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                WALKING TOGETHER,<br />
                <span className="text-orange-600">NO ONE WALKS ALONE</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Le Malaga is a Pasifika-led community supporting carers and their aiga through dementia, disability, chronic illness and ageing.
              </p>
              <div className="flex gap-4">
                <button className="bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 flex items-center gap-2">
                  ❤️ I NEED SUPPORT
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded font-semibold hover:bg-orange-50 flex items-center gap-2">
                  👥 JOIN OUR COMMUNITY
                </button>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg overflow-hidden flex items-center justify-center">
              <span className="text-8xl">👨‍👩‍👧‍👦</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="font-bold mb-2">LIVED EXPERIENCE</h3>
              <p className="text-sm text-gray-300">We understand because we've walked this journey.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌺</div>
              <h3 className="font-bold mb-2">PASIFIKA GROUNDED</h3>
              <p className="text-sm text-gray-300">Our values, culture and faith guide us.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold mb-2">SAFE & CONFIDENTIAL</h3>
              <p className="text-sm text-gray-300">A safe space to share, be heard and supported.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold mb-2">COMMUNITY POWERED</h3>
              <p className="text-sm text-gray-300">Stronger together as carers and aiga.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{feature.description}</p>
                <button className={`px-6 py-2 rounded font-semibold transition ${
                  feature.id === 2 
                    ? 'bg-gray-800 text-white hover:bg-gray-900' 
                    : 'bg-orange-600 text-white hover:bg-orange-700'
                }`}>
                  {feature.buttonText} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">📅 NEXT SUNDAY SESSION</h2>
              <p className="text-orange-600 text-lg font-semibold mb-6">You're not alone in this journey</p>
              <div className="space-y-4 mb-8">
                <p className="flex items-center gap-3"><span className="text-xl">📅</span> Sunday 25 May 2025</p>
                <p className="flex items-center gap-3"><span className="text-xl">⏰</span> 8:30pm (NZST)</p>
                <p className="flex items-center gap-3"><span className="text-xl">💻</span> Online via Zoom</p>
                <p className="flex items-center gap-3"><span className="text-xl">👥</span> Guest Speaker: TBA</p>
                <p className="flex items-center gap-3"><span className="text-xl">📌</span> Topic: Looking After You While You Care</p>
              </div>
              <button className="bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700">
                JOIN ON ZOOM →
              </button>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">📅 UPCOMING EVENTS</h2>
              <div className="space-y-6">
                {events.map((event) => (
                  <div key={event.id} className="border-l-4 border-orange-600 pl-6 py-4">
                    <div className="flex gap-4 mb-2">
                      <div className="text-center bg-orange-600 text-white rounded px-3 py-2 min-w-fit">
                        <div className="text-xl font-bold">{event.day}</div>
                        <div className="text-xs">{event.month}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.location}</p>
                      </div>
                    </div>
                    <button className="bg-gray-800 text-white px-4 py-1 text-sm rounded hover:bg-gray-900 ml-16">
                      MORE INFO
                    </button>
                  </div>
                ))}
              </div>
              <Link href="#" className="text-orange-600 font-semibold mt-6 inline-block">
                VIEW ALL EVENTS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">STORIES FROM OUR AIGA</h2>
          <p className="text-gray-600 mb-8">Real stories. Real people. Real journeys.</p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 mb-12">
            READ STORIES →
          </button>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="h-48 bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center text-6xl">
                  {testimonial.image}
                </div>
                <div className="p-6">
                  <p className="text-gray-800 font-semibold mb-3 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-orange-600 font-semibold">– {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">LE MALAGA</h3>
              <p className="text-gray-400 text-sm">You are seen. You are heard. You are valued.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">CONTACT US</h4>
              <p className="text-gray-400 text-sm mb-2">✉️ lemalaga.journey@gmail.com</p>
              <p className="text-gray-400 text-sm mb-2">📞 021 123-4567</p>
              <p className="text-gray-400 text-sm">📍 Auckland, New Zealand</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">QUICK LINKS</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Use</Link></li>
                <li><Link href="#" className="hover:text-white">Safeguarding Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Complaints Process</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">FOLLOW US</h4>
              <div className="flex gap-4 text-2xl">
                <Link href="#" className="hover:text-orange-600">f</Link>
                <Link href="#" className="hover:text-orange-600">📷</Link>
                <Link href="#" className="hover:text-orange-600">▶️</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Le Malaga Incorporated | NZBN: 9429046618730</p>
            <p>Registered Incorporated Society</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
