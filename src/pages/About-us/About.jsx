import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Heart, Award, Clock, Users, ChefHat, 
  MapPin, Star, Utensils, ArrowRight, Quote,
  ArrowDown
} from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  // Stagger animation variants for text
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const stats = [
    { label: "Years of Service", value: "15+" },
    { label: "Happy Guests", value: "50k" },
    { label: "Curated Dishes", value: "100" },
    { label: "Honors Won", value: "25" }
  ];

  const team = [
    {
      name: "Shaista Khan",
      role: "Founder & Head Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Ahmed Hassan",
      role: "Chef de Cuisine",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Fatima Ali",
      role: "General Manager",
      image: "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <div className="py-18 min-h-screen bg-[#fff0dc] text-[#2C2420] font-sans selection:bg-[#E3DCD2] selection:text-[#2C2420]">
      
      {/* --- HERO SECTION (Text Only, Editorial Style) --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 border-b border-[#EBE8E0]">
        
        {/* Subtle Grain/Texture Background (CSS Pattern) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#E3DCD2 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-[#A89F91]"></span>
            <span className="text-[#8C8376] uppercase tracking-[0.3em] text-xs font-semibold">Est. 2008</span>
            <span className="h-[1px] w-12 bg-[#A89F91]"></span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-[#1C1917] leading-[0.9] tracking-tight mb-8">
            Taste the <br /> 
            <span className="italic text-[#8C8376] font-light">Legacy.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[#5C554D] max-w-2xl mx-auto leading-relaxed font-light mb-12">
            An homage to traditional flavors, reinterpreted for the modern palate. 
            Located in the heart of the city, we serve more than food — we serve history.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-[#2C2420] text-[#2C2420] transition-all hover:bg-[#2C2420] hover:text-[#FDFBF7]">
              <span className="relative z-10 font-medium tracking-wide">Reserve Your Table</span>
            </button>
          </motion.div>
        </motion.div>

        
      </section>


      {/* --- STATS (Minimalist) --- */}
      <section className="py-20 border-b border-[#EBE8E0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-serif text-[#2C2420]">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-[#8C8376]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* --- THE NARRATIVE (Split Layout) --- */}
      <section className="py-32 px-6 bg-[#F5F2EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative pr-8"
            >
              {/* Image with minimal styling */}
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-[600px] object-cover grayscale-[20%] sepia-[10%]"
                  alt="Chef plating" 
                />
                <div className="absolute inset-0 border-[12px] border-[#F5F2EA]/50"></div>
              </div>
              
              {/* Overlapping Card */}
              <div className="absolute -bottom-10 -right-0 bg-[#FDFBF7] p-8 max-w-xs shadow-2xl border border-[#EBE8E0]">
                <Quote className="w-8 h-8 text-[#A89F91] mb-4" />
                <p className="font-serif italic text-[#4A4238] leading-relaxed">
                  "We don't just cook food. We curate experiences that linger in memory long after the meal ends."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Crafting Culinary <br />
                <span className="italic text-[#8C8376]">Masterpieces</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#2C2420]"></div>
              <p className="text-[#5C554D] text-lg leading-relaxed">
                Our journey began with a simple philosophy: honor the ingredients. Shaista's was founded on the belief that authentic cuisine requires patience, respect, and a touch of innovation.
              </p>
              <p className="text-[#5C554D] text-lg leading-relaxed">
                From our locally sourced produce to our hand-ground spices, every element of your meal is selected with purpose. We invite you to slow down, savor the moment, and join us in a celebration of taste.
              </p>
              
              <div className="pt-4">
                <button className="flex items-center gap-3 text-[#2C2420] font-medium hover:gap-5 transition-all">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* --- VALUES --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Philosophy</h2>
            <div className="w-px h-16 bg-[#2C2420] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sourced with Care", icon: Heart, desc: "We partner with local artisans to bring you the freshest organic ingredients." },
              { title: "Culinary Excellence", icon: Award, desc: "Award-winning techniques meet traditional family recipes." },
              { title: "Community First", icon: Users, desc: "A gathering place designed to foster connection and conversation." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-[#FAF9F6] p-10 border border-[#EBE8E0] text-center hover:shadow-lg hover:shadow-[#EBE8E0] transition-all duration-300"
              >
                <item.icon className="w-6 h-6 mx-auto mb-6 text-[#8C8376]" />
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-[#6B5D54] leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* --- TEAM (Clean & Professional) --- */}
      <section className="py-32 px-6 bg-[#1C1917] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#44403C] pb-8">
            <h2 className="text-4xl font-serif">The Team</h2>
            <p className="text-[#A8A29E] max-w-md text-right mt-4 md:mt-0">
              The dedicated artisans behind every plate, pouring passion into every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-[450px] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-[#8C8376] text-sm uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-[#2C2420]">
            Experience the <span className="italic text-[#8C8376]">Extraordinary</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-[#2C2420] text-[#FDFBF7] rounded-sm hover:bg-[#443C36] transition-colors w-full sm:w-auto">
              Book a Reservation
            </button>
            <button className="px-10 py-4 border border-[#2C2420] text-[#2C2420] rounded-sm hover:bg-[#F5F2EA] transition-colors w-full sm:w-auto">
              View Menu
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;