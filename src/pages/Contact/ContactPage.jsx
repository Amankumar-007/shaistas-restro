import React, { useState } from 'react';
import { MapPin, Phone, Mail, User, MessageSquare, Send, Clock, Calendar, Star, ChefHat, UtensilsCrossed, Car, Wifi, CreditCard, Shield, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen text-slate-800">
      
      {/* FULL-SCREEN HERO SECTION WITH WHITE-BEIGE GRADIENT */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#FFF9F2] to-[#F5F2EA] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#f54900] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-amber-900/15 rounded-full bg-white/70 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#f54900] rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold tracking-wider text-amber-900 uppercase font-poppins">We're Here For You</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-amber-950 mb-6 leading-tight font-poppins">
            Connect With <span className="text-[#f54900] font-semibold">Shaista's</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-amber-900/60 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            From intimate dinners to grand celebrations, our team is ready to make every moment special. 
            Reach out and let us create unforgettable experiences together.
          </p>
          
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#f54900]/8 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5 text-[#f54900]" />
              </div>
              <h3 className="font-semibold text-amber-950 mb-1 text-sm">Call Us</h3>
              <p className="text-amber-900/60 text-xs font-medium">+91 96438 03833</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#f54900]/8 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-5 h-5 text-[#f54900]" />
              </div>
              <h3 className="font-semibold text-amber-950 mb-1 text-sm">Email Us</h3>
              <p className="text-amber-900/60 text-xs font-medium">info@shaistas.com</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#f54900]/8 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-5 h-5 text-[#f54900]" />
              </div>
              <h3 className="font-semibold text-amber-950 mb-1 text-sm">Visit Us</h3>
              <p className="text-amber-900/60 text-xs font-medium">Greater Noida West</p>
            </div>
          </div>
        </div>
        
      
      </section>

      {/* WHY CONTACT US SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Why Choose <span className="text-[#f54900]">Shaista's</span>
            </h2>
            <p className="text-xl text-amber-900/70 max-w-3xl mx-auto">
              We're not just a restaurant – we're your partners in creating memorable experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "5-Star Service", desc: "Exceptional service that exceeds expectations" },
              { icon: ChefHat, title: "Expert Chefs", desc: "Culinary masters crafting perfection" },
              { icon: UtensilsCrossed, title: "Authentic Cuisine", desc: "Traditional recipes with modern twist" },
              { icon: Calendar, title: "Easy Booking", desc: "Seamless reservation system" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f54900] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-amber-950 mb-2">{item.title}</h3>
                <p className="text-sm text-amber-900/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#FFF9F2] to-[#F5F2EA]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-amber-900/70 max-w-3xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* CONTACT FORM - TAKES 2/3 SPACE */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-amber-900/10 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-amber-950">Full Name <span className="text-[#f54900]">*</span></label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-900/30" />
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full pl-12 pr-4 py-4 bg-amber-50/50 border border-amber-200/50 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#f54900] focus:border-transparent outline-none transition-all placeholder:text-amber-900/30"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-amber-950">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-900/30" />
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210" 
                        className="w-full pl-12 pr-4 py-4 bg-amber-50/50 border border-amber-200/50 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#f54900] focus:border-transparent outline-none transition-all placeholder:text-amber-900/30"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-amber-950">Email Address <span className="text-[#f54900]">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-900/30" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="w-full pl-12 pr-4 py-4 bg-amber-50/50 border border-amber-200/50 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#f54900] focus:border-transparent outline-none transition-all placeholder:text-amber-900/30"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-amber-950">Subject <span className="text-[#f54900]">*</span></label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-900/30" />
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-amber-50/50 border border-amber-200/50 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#f54900] focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="catering">Catering Services</option>
                      <option value="events">Private Events</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="other">Other Enquiries</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-amber-950">Message <span className="text-[#f54900]">*</span></label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-amber-900/30" />
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6} 
                      placeholder="Tell us how we can help you..." 
                      className="w-full pl-12 pr-4 py-4 bg-amber-50/50 border border-amber-200/50 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#f54900] focus:border-transparent outline-none transition-all placeholder:text-amber-900/30 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#f54900] to-orange-600 hover:from-[#d64000] hover:to-orange-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-orange-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
            
            {/* SIDEBAR - TAKES 1/3 SPACE */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* LOCATION CARD */}
              <div className="bg-white rounded-3xl shadow-xl shadow-amber-900/10 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-950">Our Location</h3>
                </div>
                
                <div className="rounded-2xl overflow-hidden border border-amber-200/50 h-[200px] mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.930434449796!2d77.4475!3d28.5800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzQ4LjAiTiA3N8KwMjYnNTEuMCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    title="Shaistas Location"
                  ></iframe>
                </div>
                
                <div className="space-y-3">
                  <p className="font-bold text-amber-950">Shaista's Restaurant</p>
                  <p className="text-sm text-amber-900/70 leading-relaxed">
                    45 Ground Floor 7th, Avenue High Street, Sector 4, Greater Noida West, UP - 201318
                  </p>
                </div>
              </div>
              
              {/* BUSINESS HOURS */}
              <div className="bg-white rounded-3xl shadow-xl shadow-amber-900/10 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f54900] to-orange-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-950">Business Hours</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { day: "Monday – Friday", time: "8:00 AM – 10:00 PM", highlight: false },
                    { day: "Saturday", time: "9:00 AM – 11:00 PM", highlight: false },
                    { day: "Sunday", time: "9:00 AM – 9:00 PM", highlight: false },
                    { day: "Holidays", time: "10:00 AM – 8:00 PM", highlight: true }
                  ].map((item, index) => (
                    <div key={index} className={`flex justify-between items-center pb-3 ${index !== 3 ? 'border-b border-amber-100' : ''}`}>
                      <span className={`text-sm font-medium ${item.highlight ? 'text-[#f54900]' : 'text-amber-900/70'}`}>{item.day}</span>
                      <span className={`text-sm font-bold ${item.highlight ? 'text-[#f54900]' : 'text-amber-950'}`}>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* QUICK CONTACT */}
              <div className="bg-gradient-to-br from-[#f54900] to-orange-600 rounded-3xl shadow-xl shadow-orange-900/20 p-6 text-white text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Need Quick Help?</h3>
                <p className="text-orange-100 text-sm mb-4">Call us for immediate assistance</p>
                <a href="tel:+919643803833" className="text-2xl font-bold hover:text-orange-100 transition-colors">
                  +91 96438 03833
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Premium Amenities
            </h2>
            <p className="text-xl text-amber-900/70 max-w-3xl mx-auto">
              Everything you need for a perfect dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Car, title: "Valet Parking", desc: "Complimentary parking service" },
              { icon: Wifi, title: "Free WiFi", desc: "High-speed internet access" },
              { icon: CreditCard, title: "Multiple Payment", desc: "All payment modes accepted" },
              { icon: Shield, title: "Safe & Hygienic", desc: "Highest safety standards" },
              { icon: UtensilsCrossed, title: "Private Dining", desc: "Exclusive dining spaces" },
              { icon: Calendar, title: "Event Hosting", desc: "Perfect for celebrations" }
            ].map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-[#FFF9F2] to-[#F5F2EA] rounded-2xl p-6 border border-amber-200/50 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f54900] to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-950 mb-1">{item.title}</h3>
                    <p className="text-sm text-amber-900/70">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#FFF9F2] to-[#F5F2EA]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-amber-900/70">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Do I need to make a reservation?",
                answer: "While walk-ins are welcome, we highly recommend making a reservation, especially for weekend dining and large groups."
              },
              {
                question: "Do you offer catering services?",
                answer: "Yes! We provide comprehensive catering services for events of all sizes. Contact our events team for customized menus."
              },
              {
                question: "What dietary options do you have?",
                answer: "We offer extensive vegetarian, vegan, and gluten-free options. Please inform us of any dietary restrictions when booking."
              },
              {
                question: "Is there parking available?",
                answer: "Yes, we offer complimentary valet parking service for all our guests."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-amber-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#f54900]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-[#f54900]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-950 mb-2">{faq.question}</h3>
                    <p className="text-amber-900/70">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#f54900] to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey that will delight your senses and create lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919643803833" 
              className="px-8 py-4 bg-white text-[#f54900] font-bold rounded-xl hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-colors border border-white/30">
              Make Reservation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;