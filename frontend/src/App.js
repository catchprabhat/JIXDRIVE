import "@/App.css";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Car, Gift, Coins, Menu, X } from "lucide-react";
import { useState } from "react";

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-dark-border overflow-visible" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex items-center justify-between h-24 overflow-visible">
          {/* Logo */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-visible" data-testid="logo-section">
            <img
              src="/first.png"
              alt="First logo"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-none object-contain -my-2 shrink-0"
            />
            <span className="text-gray-400 hidden sm:block whitespace-nowrap">collaborate with</span>
            <img
              src="/second.png"
              alt="Second logo"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-none object-contain -my-2 shrink-0"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="font-body text-white hover:text-gold transition-colors duration-300"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-body text-white hover:text-gold transition-colors duration-300"
              data-testid="nav-about"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-body text-white hover:text-gold transition-colors duration-300"
              data-testid="nav-contact"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="font-body text-white hover:text-gold transition-colors duration-300 text-left py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-body text-white hover:text-gold transition-colors duration-300 text-left py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-body text-white hover:text-gold transition-colors duration-300 text-left py-2"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Hero Section (Home)
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
      data-testid="hero-section"
      style={{
        background: 'linear-gradient(135deg, #050505 0%, #1a1a1a 50%, #050505 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold bokeh effects */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gold/15 rounded-full blur-3xl"></div>
        
        {/* Golden balloons representation */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20 w-8 h-10 bg-gradient-to-b from-gold to-gold-dark rounded-full opacity-60"
        ></motion.div>
        <motion.div 
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-32 right-32 w-6 h-8 bg-gradient-to-b from-gold to-gold-dark rounded-full opacity-50"
        ></motion.div>
        <motion.div 
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute top-16 right-48 w-10 h-12 bg-gradient-to-b from-gold to-gold-dark rounded-full opacity-70"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="font-accent italic text-5xl sm:text-6xl lg:text-7xl text-gold mb-4" data-testid="hero-title">
              Self-Drive
            </h1>
            <p className="font-body text-xl sm:text-2xl text-white/90 mb-8">
              Freedom to drive your way.
            </p>
            <p className="font-body text-gray-400 text-lg max-w-lg mb-8">
              Experience the ultimate freedom with our premium self-drive car rental service. 
              Choose from our fleet of well-maintained vehicles and hit the road on your own terms.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-black font-heading font-bold uppercase tracking-wider px-8 py-4 hover:bg-white transition-colors duration-300"
              data-testid="hero-cta"
            >
              Book Now
            </motion.button>
          </motion.div>

          {/* Cars Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Actual Car Fleet Image */}
              <img 
                src="https://customer-assets.emergentagent.com/job_landing-page-pro-5/artifacts/hsw4q3h2_image.png"
                alt="JIXDRIVE Car Fleet - WagonR, Baleno, Swift, Nexon, Brezza"
                className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl"
                data-testid="car-fleet-image"
              />
              
              {/* Car labels */}
              <div className="flex justify-center flex-wrap gap-3 mt-6">
                <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-body border border-gold/30">WagonR</span>
                <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-body border border-gold/30">Swift</span>
                <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-body border border-gold/30">Baleno</span>
                <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-body border border-gold/30">Nexon</span>
                <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-body border border-gold/30">Brezza</span>
              </div>
              
              {/* Road line */}
              <div className="absolute bottom-16 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 55C480 50 600 70 720 75C840 80 960 70 1080 65C1200 60 1320 60 1380 60L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFD700"/>
        </svg>
      </div>
    </section>
  );
};

// Celebration Drive Section
const CelebrationSection = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#FFD700' }}
      data-testid="celebration-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-accent italic text-5xl sm:text-6xl lg:text-7xl text-black mb-4" data-testid="celebration-title">
              Celebration<br />Drive
            </h2>
            <p className="font-heading text-xl sm:text-2xl text-black/80 mb-6">
              Ride. Celebrate. Repeat.
            </p>
            <p className="font-body text-black/70 text-lg max-w-lg mb-8">
              Celebrate your birthday or anniversary by booking a car with us. 
              We'll take care of the decorations and cake! Make your special moments 
              even more memorable with our celebration drive package.
            </p>
            <div className="flex items-center gap-4">
              <Gift className="w-8 h-8 text-black" />
              <span className="font-body text-black/80">Decorations & Cake Included</span>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Actual Celebration Image */}
              <img 
                src="https://customer-assets.emergentagent.com/job_landing-page-pro-5/artifacts/fum1ev6q_image.png"
                alt="Decorated car trunk with balloons and Happy Birthday banner"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl border-4 border-black/20"
                data-testid="celebration-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Lease Your Car Section
const LeaseSection = () => {
  return (
    <section 
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#050505' }}
      data-testid="lease-section"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent"></div>
      
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C240 20 480 0 720 20C960 40 1200 60 1440 40V60H0Z" fill="#FFD700"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-accent italic text-5xl sm:text-6xl lg:text-7xl text-gold mb-4" data-testid="lease-title">
              Lease<br />Your Car.
            </h2>
            <p className="font-heading text-xl sm:text-2xl text-white/90 mb-6">
              Turn your idle car into daily income
            </p>
            <p className="font-body text-gray-400 text-lg max-w-lg mb-8">
              Have a car sitting in your garage? Put it to work! Partner with JIXDRIVE 
              and earn passive income by leasing your vehicle. We handle everything - 
              from maintenance to customer management.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <Coins className="w-8 h-8 text-gold" />
              <span className="font-body text-white/80">Start earning today</span>
            </div>

            {/* QR Code placeholder */}
            <div className="inline-block bg-white p-4 rounded-lg">
              <div className="w-24 h-24 bg-black/10 grid grid-cols-5 gap-1 p-2">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`}></div>
                ))}
              </div>
              <p className="text-xs text-black/60 mt-2 text-center">Scan to Register</p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Actual Lease Image */}
              <img 
                src="https://customer-assets.emergentagent.com/job_landing-page-pro-5/artifacts/mfj14agt_ChatGPT%20Image%20Mar%206%2C%202026%2C%2012_38_23%20AM.png"
                alt="Lease your car and earn daily income with gold coins"
                className="w-full max-w-xl mx-auto rounded-2xl shadow-2xl"
                data-testid="lease-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer/Contact Section
const FooterSection = () => {
  return (
    <footer 
      id="contact"
      className="relative py-16 bg-gradient-to-b from-dark to-black"
      data-testid="footer-section"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Us Title */}
          <h2 className="font-heading text-4xl sm:text-5xl text-gold text-center mb-12" data-testid="contact-title">
            Contact Us
          </h2>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gold/10 rounded-full p-4 mb-4 border border-gold/30">
                <Phone className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">Phone</h3>
              <a href="tel:+917735537655" className="font-body text-gray-400 hover:text-gold transition-colors" data-testid="contact-phone">
                +91 77355 37655
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gold/10 rounded-full p-4 mb-4 border border-gold/30">
                <Mail className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">Email</h3>
              <a href="mailto:info@jixdrive.in" className="font-body text-gray-400 hover:text-gold transition-colors" data-testid="contact-email">
                info@jixdrive.in
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gold/10 rounded-full p-4 mb-4 border border-gold/30">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">Address</h3>
              <p className="font-body text-gray-400" data-testid="contact-address">
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>

          {/* Website Link */}
          <div className="text-center mb-8">
            <p className="font-body text-gray-500">
              scan or visit us @{' '}
              <a 
                href="https://www.jixdrive.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors font-semibold"
                data-testid="website-link"
              >
                www.jixdrive.in
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-dark-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <img
                  src="/first.png"
                  alt="First logo"
                  className="h-10 sm:h-12 w-auto max-w-none object-contain shrink-0"
                />
                <span className="text-gray-500">x</span>
                <img
                  src="/second.png"
                  alt="Second logo"
                  className="h-10 sm:h-12 w-auto max-w-none object-contain shrink-0"
                />
              </div>

              {/* Copyright */}
              <p className="font-body text-gray-500 text-sm">
                © 2024 JIXDRIVE. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Floating WhatsApp Button
const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=917735537655"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      data-testid="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

// Main App Component
function App() {
  return (
    <div className="App bg-dark min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CelebrationSection />
        <LeaseSection />
        <FooterSection />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;
