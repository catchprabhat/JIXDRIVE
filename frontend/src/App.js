import "@/App.css";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Gift, Coins, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={[
        "fixed z-50 overflow-visible transition-all duration-300",
        isScrolled
          ? "top-0 left-0 right-0 navbar-blur border-b border-dark/15 shadow-lg"
          : "top-0 left-0 right-0 bg-transparent",
      ].join(" ")}
      data-testid="navbar"
    >
      <div className="w-full px-3 sm:px-6 lg:px-10 overflow-visible">
        <div className="flex items-center justify-between h-24 overflow-visible">
          {/* Logo */}
          <div className="flex items-center overflow-visible" data-testid="logo-section">
            <img
              src="/first.png"
              alt="First logo"
              className="h-14 sm:h-16 md:h-[72px] w-auto max-w-none object-contain -my-2 shrink-0"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="font-body text-dark hover:text-gold transition-colors duration-300"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-body text-dark hover:text-gold transition-colors duration-300"
              data-testid="nav-about"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-body text-dark hover:text-gold transition-colors duration-300"
              data-testid="nav-contact"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark"
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
                className="font-body text-dark hover:text-gold transition-colors duration-300 text-left py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-body text-dark hover:text-gold transition-colors duration-300 text-left py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-body text-dark hover:text-gold transition-colors duration-300 text-left py-2"
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
  const whatsappBookingLink = `https://api.whatsapp.com/send?phone=917735537655&text=${encodeURIComponent(
    "Hii, I want to book a car"
  )}`;

  const scrollToPackages = () => {
    const element = document.getElementById("packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
      data-testid="hero-section"
      style={{
        background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 50%, #F8FAFC 100%)"
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="https://customer-assets.emergentagent.com/job_landing-page-pro-5/artifacts/hsw4q3h2_image.png"
          alt=""
          className="w-full h-full max-w-none object-cover opacity-[0.10]"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-gold mb-4" data-testid="hero-title">
            Self-Drive
          </h1>
          <p className="font-body text-xl sm:text-2xl text-dark/90 mb-6">
            Freedom to drive your way.
          </p>
          <p className="font-body text-dark/70 text-lg max-w-2xl mx-auto mb-10">
            Experience the ultimate freedom with our premium self-drive car rental service.
            Choose from our fleet of well-maintained vehicles and hit the road on your own terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-testid="hero-cta">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToPackages}
              className="bg-dark text-white font-heading font-bold uppercase tracking-wider px-8 py-4 hover:bg-dark-surface transition-colors duration-300"
              data-testid="hero-cta-experience"
            >
              Book Experience
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-dark text-dark font-heading font-bold uppercase tracking-wider px-8 py-4 hover:bg-dark hover:text-white transition-colors duration-300 text-center"
              data-testid="hero-cta-book-now"
            >
              Book Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Celebration Drive Section
const CelebrationSection = () => {
  const slides = [
    { src: "/one.png", alt: "Celebration drive setup 1" },
    { src: "/two.png", alt: "Celebration drive setup 2" },
    { src: "/three.png", alt: "Celebration drive setup 3" },
    { src: "/four.png", fallbackSrc: "/Four.png", alt: "Celebration drive setup 4" },
  ];

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused || count <= 1) return;
    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [api, isPaused, count]);

  const scrollTo = useCallback((index) => api?.scrollTo(index), [api]);

  return (
    <section 
      className="relative py-24 bg-white"
      data-testid="celebration-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-dark mb-4" data-testid="celebration-title">
            Celebration Drive
          </h2>
          <p className="font-heading text-xl sm:text-2xl text-dark/80 mb-6">
            Ride. Celebrate. Repeat.
          </p>
          <p className="font-body text-dark/70 text-lg max-w-3xl mx-auto mb-10">
            Celebrate your birthday, anniversary, or a surprise moment by booking a car with us.
            We’ll take care of the decorations and cake before you begin your drive, so you just show up and enjoy.
            Choose your car, pick your vibe, and make memories that feel effortless and premium.
          </p>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-dark/10 bg-white/70 shadow-sm">
            <Gift className="w-6 h-6 text-gold" />
            <span className="font-body text-dark/80">Decorations & Cake Included</span>
          </div>
        </motion.div>

        <div className="mt-12">
          <Carousel
            opts={{ loop: true, align: "center" }}
            setApi={setApi}
            className="w-full max-w-6xl mx-auto"
            data-testid="celebration-carousel"
            onPointerEnter={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <CarouselContent className="-ml-0">
              {slides.map((slide) => (
                <CarouselItem key={slide.src} className="pl-0">
                  <div className="overflow-hidden rounded-3xl shadow-2xl border border-dark/10 bg-white">
                    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          if (!slide.fallbackSrc) return;
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = slide.fallbackSrc;
                        }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-3 sm:left-5 bg-white/80 hover:bg-white border-dark/15" />
            <CarouselNext className="right-3 sm:right-5 bg-white/80 hover:bg-white border-dark/15" />
          </Carousel>

          {count > 1 && (
            <div className="mt-5 flex justify-center gap-2" aria-label="Celebration carousel pagination">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    index === current ? "w-10 bg-dark" : "w-2.5 bg-dark/25 hover:bg-dark/35",
                  ].join(" ")}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === current}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const PackagesSection = () => {
  const packages = [
    {
      title: "ROYAL ROMANCE PACKAGE",
      price: "RS 35000/-",
      items: [
        "Max 4 people",
        "Flower Bouquet",
        "Cake",
        "Decoration",
        "Driver (optional)",
        "Self drive 24hrs",
        "Foldable furniture",
        "Beverages",
        "A surprise gift",
      ],
    },
    {
      title: "LOVE STORY RIDE",
      price: "RS 25000/-",
      items: [
        "Max 2 people",
        "Flower Bouquet",
        "Cake",
        "Decoration",
        "Driver (Optional)",
        "Self drive 24hrs",
        "Beverages",
        "A surprise gift",
      ],
    },
    {
      title: "LUXURY SURPRISE DRIVE",
      price: "RS 45000 /-",
      items: [
        "Max 2 people",
        "Flower Bouque",
        "Cake",
        "Decoration",
        "Alcohol",
        "Driver (Mandatory)",
        "Foldable furniture",
        "Beverages",
        "A surprise gift",
      ],
    },
  ];

  return (
    <section id="packages" className="py-24 bg-slate-50" data-testid="packages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl sm:text-5xl text-dark text-center mb-12" data-testid="packages-title">
          Packages
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.title} className="bg-white rounded-2xl shadow-xl border border-dark/10 p-8">
              <h3 className="font-heading text-xl text-dark mb-5 text-center">{pkg.title}</h3>
              <ul className="space-y-3 text-dark/80 font-body">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center">
                <div className="bg-dark text-white font-heading font-bold px-6 py-3 rounded-xl">
                  {pkg.price}
                </div>
              </div>
            </div>
          ))}
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
      className="relative py-24 bg-white"
      data-testid="lease-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-gold mb-4" data-testid="lease-title">
              Lease<br />Your Car.
            </h2>
            <p className="font-heading text-xl sm:text-2xl text-dark/90 mb-6">
              Turn your idle car into daily income
            </p>
            <p className="font-body text-dark/70 text-lg max-w-lg mb-8">
              Have a car sitting in your garage? Put it to work! Partner with JIXDRIVE 
              and earn passive income by leasing your vehicle. We handle everything - 
              from maintenance to customer management.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <Coins className="w-8 h-8 text-gold" />
              <span className="font-body text-dark/80">Start earning today</span>
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
                src="/last.png"
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
      className="relative"
      data-testid="footer-section"
    >
      <div className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl sm:text-6xl text-white mb-4" data-testid="contact-title">
              Let's Connect
            </h2>
            <p className="font-body text-white/90 text-lg sm:text-xl mb-10">
              Ready to book your next drive? Get in touch with us today.
            </p>

            <div className="space-y-6 max-w-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-heading text-white">Call Us</div>
                  <a href="tel:+917735537655" className="font-body text-white/90 hover:text-white transition-colors" data-testid="contact-phone">
                    +91 77355 37655
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-heading text-white">Email Us</div>
                  <a href="mailto:info@jixdrive.in" className="font-body text-white/90 hover:text-white transition-colors" data-testid="contact-email">
                    info@jixdrive.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-heading text-white">Visit Us</div>
                  <div className="font-body text-white/90" data-testid="contact-address">
                    Bengaluru, Karnataka, India
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <img src="/first.png" alt="First logo" className="h-10 w-auto object-contain" />
                <span className="text-white/70">x</span>
                <img src="/second.png" alt="Second logo" className="h-10 w-auto object-contain" />
              </div>
              <p className="font-body text-white/70 mt-4">
                Freedom to drive your way with premium self-drive experiences.
              </p>
            </div>

            <div>
              <div className="font-heading text-white mb-4">Quick Links</div>
              <div className="space-y-2 font-body text-white/70">
                <a href="#home" className="block hover:text-white transition-colors">Home</a>
                <a href="#about" className="block hover:text-white transition-colors">About Us</a>
                <a href="#contact" className="block hover:text-white transition-colors">Contact Us</a>
              </div>
            </div>

            <div>
              <div className="font-heading text-white mb-4">Services</div>
              <div className="space-y-2 font-body text-white/70">
                <div>Self-Drive</div>
                <div>Celebration Drive</div>
                <div>Lease Your Car</div>
                <div>Packages</div>
              </div>
            </div>

            <div>
              <div className="font-heading text-white mb-4">Contact Info</div>
              <div className="space-y-3 font-body text-white/70">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-0.5" />
                  <div>Bengaluru, Karnataka, India</div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold mt-0.5" />
                  <a href="tel:+917735537655" className="hover:text-white transition-colors">+91 77355 37655</a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold mt-0.5" />
                  <a href="mailto:info@jixdrive.in" className="hover:text-white transition-colors">info@jixdrive.in</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <a
              href="https://www.jixdrive.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-white/70 hover:text-white transition-colors"
              data-testid="website-link"
            >
              www.jixdrive.in
            </a>
            <p className="font-body text-white/60 text-sm">
              © 2026 JIXDRIVE. All rights reserved.
            </p>
          </div>
        </div>
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
    <div className="App bg-slate-50 text-dark min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CelebrationSection />
        <PackagesSection />
        <LeaseSection />
        <FooterSection />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;
