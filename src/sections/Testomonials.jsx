import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Phone, MessageCircle, ChevronUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Afshan Zaidi",
    role: "Food Blogger",
    image: "https://i.pravatar.cc/150?img=5",
    review: "Awesome place for Mughlai food... Loved the atmosphere, service and the food is mouthwatering... 🤩 The thali is amazing 😍",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/150?img=11",
    review: "The kebabs here are absolutely divine! The best dining experience I've had in the city for a long time. Highly recommended.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Food Critic",
    image: "https://i.pravatar.cc/150?img=9",
    review: "Great ambiance and very polite staff. The biryani was cooked to perfection with authentic spices.",
    rating: 4
  }
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return; // Pause auto-slide when hovered
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/src/assets/food.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-amber-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            What Our Customers Say
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto"></div>
        </div>

        {/* Testimonial Slider */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-amber-300 hover:bg-white/20 transition-all z-10 border border-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-amber-300 hover:bg-white/20 transition-all z-10 border border-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial Cards */}
          <div className="relative h-[320px] md:h-[280px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                  current === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur-sm rounded-xl shadow-2xl p-6 max-w-3xl mx-auto h-full flex flex-col border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                  <Quote className="text-amber-400/50 w-8 h-8 mb-4" />
                  
                  <p className="text-white/90 text-base leading-relaxed mb-4 grow">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-amber-400/30 mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-xs text-amber-100/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-amber-400 w-6' : 'bg-white/30 w-2 hover:bg-amber-300/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default TestimonialSection;