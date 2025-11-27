import React, { useState } from 'react';

const Map = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Submitted email:', email);
      setIsSubmitted(true);
      setEmail('');
      // Reset submission status after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Map Section */}
        <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1234567890123!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shaista's Location"
            className="rounded-lg"
          />
        </div>

        {/* Membership Discount Section */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Delicious food"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Join Our Member And Get Discount To 35%
            </h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> We'll be in touch soon with your discount code!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#548076]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#548076] hover:bg-[#3d6158] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                >
                  Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
