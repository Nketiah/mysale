import Image from 'next/image'
import SmoothScroll from './components/SmoothScroll'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SmoothScroll />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100 p-4 md:p-8">
        {/* Main Container with Rounded Frame and Blue Border */}
        <div className="max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">
          
          {/* Hero Section - Split Layout */}
          <div className="relative min-h-screen">
            
            {/* Full Width Image Section */}
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/home_bg.jpg"
                  alt="Wellness background"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Event Details Overlay - Top Left */}
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 max-w-xs">
                  {/* Logo */}
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mb-3">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Event Details */}
                  <div className="space-y-1 text-sm md:text-base">
                    <p className="text-gray-800 font-medium">An Inara Wellness Day</p>
                    <p className="text-gray-700">Experience - October 4, 2025 -</p>
                    <p className="text-gray-700">Minneapolis, MN</p>
                  </div>
                </div>
              </div>

              {/* "The Return to Self" Text at Bottom Left Corner */}
              <div className="absolute -bottom-8 -left-8 z-10">
                <div className="bg-white w-[600px] h-[300px] p-8  rounded-lg shadow-lg text-center">
                  <h1 className="text-lg md:text-xl font-serif text-gray-800 font-semibold">
                    The Return to Self
                  </h1>
                </div>
              </div>

              {/* Pagination Dots - Bottom Center */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Scroll Button - Bottom Right */}
              <div className="absolute bottom-6 right-6 z-10">
                <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 hover:shadow-lg">
                  Scroll for more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 text-center">
            Invitation
          </h2>
          <p className="text-lg md:text-xl text-white text-center max-w-4xl mx-auto leading-relaxed">
            You've held so much for so long. This is your invitation to lay it down. Join us for a deeply restorative, one-day bliss experience — where healing meets beauty, community meets stillness, and every moment is designed to help you return to yourself gently. Together, we'll move, reflect, paint, nourish, and be held — in the softest way.
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0 hidden md:block">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-amber-200 rounded-full opacity-60 mr-4 md:mr-8"></div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-200 rounded-full opacity-60 ml-12 md:ml-16 -mt-6 md:-mt-8"></div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-green-500 rounded-full opacity-60 ml-6 md:ml-8 -mt-3 md:-mt-4"></div>
        </div>
      </section>

      {/* Activity Pillars Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Move Card */}
            <div className="bg-amber-100 p-6 md:p-8 rounded-2xl relative group hover:shadow-lg transition-shadow duration-300 hover-lift">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3 md:mb-4">Move</h3>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">Mindful Pilates + Breathwork</p>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>

            {/* Create Card */}
            <div className="bg-amber-100 p-6 md:p-8 rounded-2xl relative group hover:shadow-lg transition-shadow duration-300 hover-lift">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3 md:mb-4">Create</h3>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">Therapeutic Art</p>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>

            {/* Nourish Card */}
            <div className="bg-teal-600 p-6 md:p-8 rounded-2xl relative group hover:shadow-lg transition-shadow duration-300 hover-lift">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3 md:mb-4">Nourish</h3>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">Mindful Pilates + Breathwork</p>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-8 md:mb-12">
            What's Included
          </h2>
          
          <div className="bg-amber-100 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto relative">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Every part of the day is intentionally curated for nervous system healing, emotional release, and soul-deep connection.
            </p>
          </div>
        </div>
        
        {/* Background Fabric Texture */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        {/* Decorative Flowers */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0 hidden md:block">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-amber-200 rounded-full opacity-60 ml-4 md:ml-8"></div>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0 hidden md:block">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-amber-200 rounded-full opacity-60 mr-4 md:mr-8"></div>
        </div>
      </section>

      {/* The Inara Brunch Experience Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Woman in meditation pose"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800">
                The Inara Brunch Experience
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A nourishing, seasonal brunch where you'll hear from our keynote speaker on what it truly means to return to yourself.
              </p>
              
              {/* Feature Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-amber-100 px-3 md:px-4 py-2 md:py-3 rounded-full text-gray-800 text-xs md:text-sm font-medium text-center">
                  Thoughtfully curated wellness menu
                </div>
                <div className="bg-amber-100 px-3 md:px-4 py-2 md:py-3 rounded-full text-gray-800 text-xs md:text-sm font-medium text-center">
                  Intimate table conversations
                </div>
                <div className="bg-amber-100 px-3 md:px-4 py-2 md:py-3 rounded-full text-gray-800 text-xs md:text-sm font-medium text-center">
                  You're Not Broken, You're Becoming
                </div>
                <div className="bg-amber-100 px-3 md:px-4 py-2 md:py-3 rounded-full text-gray-800 text-xs md:text-sm font-medium text-center">
                  Floral tablescape & conversation cards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 md:mb-8">
            Ready to Return to Yourself?
          </h2>
          <p className="text-lg md:text-xl text-white mb-6 md:mb-8">
            Join us for this transformative wellness experience on October 9, 2029
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-medium transition-colors duration-300 hover:shadow-lg hover-lift">
            Reserve Your Spot Now
          </button>
        </div>
      </section>
    </main>
  )
}
