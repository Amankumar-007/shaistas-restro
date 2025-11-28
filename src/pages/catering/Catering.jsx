import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChefHat, 
  Star, 
  Calendar, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  UtensilsCrossed,
  Clock,
  Play
} from 'lucide-react';

const Catering = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('signatures');

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuCategories = {
    signatures: {
      title: "Zaika-E-Khaas",
      items: [
        { name: "Shaista's Special Biryani", desc: "Aromatic basmati rice cooked with tender meat and secret spices.", price: "Signature" },
        { name: "Mughlai Korma", desc: "Rich, creamy curry with nuts and saffron.", price: "Premium" },
        { name: "Galouti Kebab", desc: "Melt-in-your-mouth minced meat patties.", price: "Classic" },
        { name: "Shahi Tukda", desc: "Royal bread pudding with cardamom and nuts.", price: "Dessert" }
      ]
    },
    starters: {
      title: "Appetizers",
      items: [
        { name: "Paneer Tikka", desc: "Char-grilled cottage cheese marinated in yogurt spices.", price: "Veg" },
        { name: "Chicken Malai Tikka", desc: "Creamy, mild chicken chunks grilled to perfection.", price: "Non-Veg" },
        { name: "Dahi Ke Sholey", desc: "Crispy bread pockets filled with hung curd and peppers.", price: "Veg" },
        { name: "Mutton Seekh", desc: "Spiced minced mutton skewers cooked in tandoor.", price: "Non-Veg" }
      ]
    },
    main: {
      title: "Main Course",
      items: [
        { name: "Butter Chicken", desc: "Classic tandoori chicken in tomato makhani gravy.", price: "Bestseller" },
        { name: "Dal Makhani", desc: "Black lentils simmered overnight with butter and cream.", price: "Classic" },
        { name: "Roghan Josh", desc: "Kashmiri style lamb curry with aromatic spices.", price: "Spicy" },
        { name: "Navratan Korma", desc: "Mixed vegetables in a rich cashew-based gravy.", price: "Mild" }
      ]
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-stone-50 selection:bg-yellow-600 selection:text-white">
      
    

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-yellow-500/30 rounded-full bg-black/20 backdrop-blur-sm">
              <Play className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-400 text-xs font-semibold tracking-wider uppercase">Our Story</span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative group">
            {/* Subtle Glow Effect */}
            <div className="absolute -inset-2 bg-linear-to-r from-yellow-600/10 to-emerald-600/10 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-700"></div>
            
            {/* Video Frame */}
            <div className="relative bg-black/60 backdrop-blur-md rounded-3xl px-1 py-1 border-y border-yellow-500/10 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/8xecHVEWAFs?autoplay=1&mute=1&loop=1&playlist=8xecHVEWAFs&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                  title="Shaista's Catering Experience"
                  className="w-full h-full absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Subtle Vignette Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Minimalist Corner Accents */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500/60 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-400/60 rounded-full"></div>
          </div>

          {/* Subtitle */}
          <div className="text-center mt-8">
            <p className="text-yellow-400/80 text-sm font-light tracking-wide">
              Experience the art of royal catering
            </p>
          </div>
        </div>
      </section>

      {/* Our Story / Legacy Section */}
      <section id="our-story" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-bl-full opacity-50 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-50 rounded-tr-full opacity-50 -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-yellow-100 rounded-sm transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Culinary Art" 
                className="relative rounded-sm shadow-xl w-full h-[500px] object-cover transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-8 rounded-sm shadow-lg max-w-xs">
                <p className="font-serif text-2xl italic">"We don't just serve food; we serve memories."</p>
                <p className="mt-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">- Shaista Kausari</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-yellow-600"></div>
                <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">The Legacy</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 font-bold mb-8">
                From Fine Dining to <br />Grand Celebrations
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Shaista Kausari's journey began with the remarkable success of <strong>"Shaista's"</strong>, a restaurant synonymous with warm hospitality and delectable dishes. Her dedication to perfection set the stage for a bold new venture.
                </p>
                <p>
                  <strong>Subh Mangal Mubarak Catering</strong> represents our commitment to crafting events that are not only flawlessly executed but deeply personal. The name itself translates to "Congratulations on Auspicious Beginnings," reflecting our mission to make every wedding and milestone a joyous occasion.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12 border-t border-gray-100 pt-8">
                <div>
                  <span className="block text-4xl font-serif text-yellow-600 font-bold">10+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">Years of Excellence</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif text-yellow-600 font-bold">100%</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">What We Do</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Elevating Events to Extraordinary</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat size={32} />,
                title: "Weddings & Galas",
                desc: "Dreamy weddings executed with royal flair, from the Sangeet to the Reception.",
                img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                icon: <UtensilsCrossed size={32} />,
                title: "Corporate Events",
                desc: "Professional catering that impresses clients and boosts team morale.",
                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                icon: <Star size={32} />,
                title: "Milestone Parties",
                desc: "Birthdays, anniversaries, and private gatherings made intimate and special.",
                img: "https://images.unsplash.com/photo-1464349153912-652186959c08?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-sm cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${service.img})` }}></div>
                <div className="absolute inset-0 bg-emerald-950/80 group-hover:bg-emerald-950/70 transition-colors duration-300"></div>
                <div className="relative p-8 h-80 flex flex-col justify-end border border-white/10 hover:border-yellow-500/50 transition-colors">
                  <div className="mb-4 text-yellow-500 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{service.title}</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">The Menu</span>
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mt-3 font-bold">Zaika-E-Khaas</h2>
            <p className="mt-4 text-gray-600">A curation of Mughlai and North Indian masterpieces.</p>
          </div>

          {/* Menu Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {Object.entries(menuCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === key 
                    ? 'bg-emerald-900 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-500 hover:text-emerald-900 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {menuCategories[activeTab].items.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-stone-100 flex justify-between items-center group">
                <div>
                  <h4 className="font-serif text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
                <div className="ml-4">
                  <span className="inline-block px-3 py-1 bg-stone-100 text-emerald-900 text-xs font-bold uppercase tracking-wider rounded-sm">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <button 
                onClick={() => scrollToSection('contact')}
                className="text-emerald-900 font-bold border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition-colors inline-flex items-center gap-2"
              >
               Request Full Menu Catalog <ArrowRight size={16} />
             </button>
          </div>
        </div>
      </section>

      {/* Testimonials / Quote */}
      <section className="py-20 bg-yellow-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Star className="inline-block w-8 h-8 mb-6 text-emerald-900 opacity-50" />
          <h2 className="font-serif text-3xl md:text-5xl italic leading-tight mb-8">
            "We were blown away by the service. The Biryani was the talk of the evening!"
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-serif font-bold text-xl">R</div>
            <div className="text-left">
              <div className="font-bold uppercase tracking-wider">Rahul Sharma</div>
              <div className="text-sm opacity-80">Wedding Reception, Noida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
              <h2 className="font-serif text-4xl text-emerald-950 font-bold mt-2 mb-6">Let's Plan Your Event</h2>
              <p className="text-gray-600 mb-8">
                Ready to create something memorable? Contact us for a consultation or a custom quote.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-900 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600 w-3/4">45 Ground Floor 7th, Avenue High Street, Sector 4 Greater Noida West, Uttar Pradesh - 201318</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-900 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+91-9643803833</p>
                    <p className="text-gray-600">+91-9643803813</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-900 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Office Hours</h4>
                    <p className="text-gray-600">12:30 PM to 11:45 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 text-white flex items-center justify-center hover:bg-yellow-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 text-white flex items-center justify-center hover:bg-yellow-600 transition-colors"><Facebook size={20} /></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-stone-50 p-8 md:p-10 rounded-xl shadow-lg border border-stone-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" placeholder="+91..." />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Event Type</label>
                  <select className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all">
                    <option>Wedding / Reception</option>
                    <option>Corporate Event</option>
                    <option>Birthday / Anniversary</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" placeholder="Tell us about your event (Date, Guest count, etc.)"></textarea>
                </div>

                <button type="submit" className="w-full bg-emerald-900 text-white font-bold py-4 rounded-md hover:bg-emerald-800 transition-colors shadow-md">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering;