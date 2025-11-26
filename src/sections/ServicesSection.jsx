import nicon1 from '../assets/nicon1.mp4';
import nicon2 from '../assets/nicon2.mp4';
import nicon3 from '../assets/nicon3.mp4';
import nicon4 from '../assets/nicon4.mp4';
import mealboxImg from '../assets/mealbox.jpg';

const servicesData = [
  {
    id: 1,
    title: "Delivery",
    media: nicon1,
    isVideo: true,
    description: "Now your favorite meal is just one call away from your door step. We have embraced our services to let our customer enjoy their mommylicious meals at their homes."
  },
  {
    id: 2,
    title: "Catering",
    media: nicon2,
    isVideo: true,
    description: "Our expert chefs create dishes that are delicious and visually stunning, taking you on a journey. Come join us and experience the best."
  },
  {
    id: 3,
    title: "Take Away",
    media: nicon3,
    isVideo: true,
    description: "Dining in is not your thing? Order online or take away and enjoy our delicious special dishes at your place."
  },
  {
    id: 4,
    title: "Catering",
    media: nicon4,
    isVideo: true,
    description: "Catering by Shaista's is a Noida-based event management & wedding planning company."
  },
  {
    id: 5,
    title: "Mommylicious MealBox",
    media: mealboxImg,
    isVideo: false,
    description: "At Mommylicious, we serve food with the taste and love of home, just like a mother's cooking – simple, healthy, and made from the heart."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap justify-center -mx-2 sm:-mx-4">
          {servicesData.map((service) => (
            <div key={service.id} className="w-1/2 sm:w-1/2 lg:w-1/5 px-2 sm:px-4 mb-6 sm:mb-10 flex flex-col items-center text-center group">
              
              {/* Media Container */}
              <div className="mb-3 sm:mb-6 relative w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                {service.isVideo ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src={service.media} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={service.media} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-xl font-bold text-[#3E1F18] font-serif mb-1 sm:mb-4 min-h-[2rem] sm:min-h-[3rem] flex items-center justify-center">
                {service.title.split(' ').length > 1 && service.title.includes('Mommylicious') ? (
                  <span className="flex flex-col">
                    <span>Mommylicious</span>
                    <span>MealBox</span>
                  </span>
                ) : (
                  service.title
                )}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[11px] sm:text-[13px] leading-tight sm:leading-relaxed font-sans px-1 sm:px-2 max-w-[180px] mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;