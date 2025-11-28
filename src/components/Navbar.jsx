"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ShoppingCart, User, Menu, X, ChevronRight } from "lucide-react"
import Cart from "./Cart"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chicken Biryani', price: 12.99, quantity: 2, image: '/src/assets/1.webp' },
    { id: 2, name: 'Butter Naan', price: 2.99, quantity: 3, image: '/src/assets/10.webp' },
  ])
  const location = useLocation()
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const isCateringPage = location.pathname === "/catering"

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Order Now", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Catering", href: "/catering" },
    { name: "Gallery", href: "/gallery" },
    { name: "Mommylicious Mealbox", href: "/Mommylicious-mealbox"},
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm border-b h-17 transition-all duration-300 ${
      isCateringPage 
        ? "bg-transparent border-transparent" 
        : "bg-white/90 border-amber-100"
    }`}>
      {/* Changed max-w-7xl to max-w-screen-2xl to push logo more to the left edge on big screens */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 h-full">
        <div className="relative flex items-center justify-between h-full">
          
          {/* ==================== 1. LOGO (SMALL & LEFT) ==================== */}
          <div className="flex-shrink-0 flex items-center z-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/src/assets/newlogo2.webp" 
                alt="Shaista's Restaurant" 
                // Removed hover:scale and transition effects. Reduced height to h-10.
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* ==================== 2. NAV LINKS (ABSOLUTE POSITIONED) ==================== */}
          <div className="hidden md:flex absolute left-[55%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl overflow-x-auto no-scrollbar">
            <div className={`flex items-center space-x-1 rounded-full px-1.5 py-1.5 border transition-all duration-300 mx-auto ${
              isCateringPage
                ? "bg-emerald-900/50 border-emerald-700/50"
                : "bg-amber-50 border-amber-100"
            }`}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "bg-[#f54900] text-white shadow-sm"
                        : isCateringPage
                        ? "text-emerald-200 hover:text-white hover:bg-emerald-800/50"
                        : "text-amber-800 hover:text-[#f54900] hover:bg-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* ==================== 3. RIGHT SIDE ==================== */}
          <div className="flex items-center gap-3 z-20">
            {/* Search */}
            <div className={`hidden md:flex items-center transition-all duration-300 ${isSearchOpen ? "w-64" : "w-10"}`}>
              {isSearchOpen ? (
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-3 pr-8 py-1.5 text-sm bg-gray-50 border border-amber-200 rounded-full focus:outline-none focus:ring-1 focus:ring-[#f54900]"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <X
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 cursor-pointer hover:text-[#f54900]"
                    onClick={() => setIsSearchOpen(false)}
                  />
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2 rounded-full transition-colors ${
                    isCateringPage
                      ? "text-emerald-200 hover:text-white hover:bg-emerald-800/50"
                      : "text-amber-800 hover:text-[#f54900] hover:bg-amber-50"
                  }`}
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Cart */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 rounded-full transition-colors ${
                isCateringPage
                  ? "text-emerald-200 hover:text-white hover:bg-emerald-800/50"
                  : "text-amber-800 hover:text-[#f54900] hover:bg-amber-50"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 h-4 w-4 bg-[#f54900] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User */}
            <button className="hidden md:flex items-center justify-center h-9 w-9 rounded-full bg-[#f54900] text-white shadow-md hover:bg-orange-600 transition-colors">
              <User className="h-4 w-4" />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isCateringPage
                  ? "text-emerald-200 hover:text-white"
                  : "text-amber-800 hover:text-[#f54900]"
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full backdrop-blur-md border-b shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"
        } ${
          isCateringPage
            ? "bg-transparent border-transparent"
            : "bg-white border-amber-100"
        }`}
      >
        <div className="px-5 py-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#f54900]"
            />
          </div>
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#f54900] text-white"
                      : isCateringPage
                      ? "text-emerald-200 hover:bg-emerald-800/50 hover:text-white"
                      : "text-gray-700 hover:bg-amber-50 hover:text-[#f54900]"
                  }`}
                >
                  {link.name}
                  <ChevronRight className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-300"}`} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* Cart Component */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </nav>
  )
}

// Custom scrollbar hiding for the navigation
const style = document.createElement('style');
style.textContent = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);

export default Navbar