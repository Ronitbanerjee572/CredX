import React, { useRef, useEffect } from 'react';
import CreditCard3D from '../components/CreditCard3D';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import adVideo from '../assets/ad.mp4';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        smoothMobile: true,
        getDirection: true,
        touchMultiplier: 2.5,
        lerp: 0.1,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-[var(--near-black)] text-white font-space-grotesk min-h-screen">
      <div ref={containerRef} data-scroll-container className="min-h-screen">
        {/* 1. Navigation Bar (Sticky Top) */}
        <nav data-scroll-section className="sticky top-0 bg-[var(--near-black)] z-50 py-4 px-8 flex justify-between items-center border-b border-[var(--deep-charcoal)]">
          <div className="text-2xl font-bold">CredX</div>
          <div className="hidden md:flex space-x-8">
            <button
              className="hover:text-[var(--coral-pink)] transition-colors cursor-pointer bg-transparent border-none p-0"
              onClick={() => {
                const scroll = containerRef.current?.__locomotive;
                if (scroll) {
                  scroll.scrollTo('#features');
                }
              }}
            >
              Features
            </button>
            <button
              className="hover:text-[var(--coral-pink)] transition-colors cursor-pointer bg-transparent border-none p-0"
              onClick={() => {
                const scroll = containerRef.current?.__locomotive;
                if (scroll) {
                  scroll.scrollTo('#security');
                }
              }}
            >
              Security
            </button>
            <button
              className="hover:text-[var(--coral-pink)] transition-colors cursor-pointer bg-transparent border-none p-0"
              onClick={() => {
                const scroll = containerRef.current?.__locomotive;
                if (scroll) {
                  scroll.scrollTo('#testimonials');
                }
              }}
            >
              Testimonials
            </button>
          </div>
          <button className="bg-[var(--coral-pink)] text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-opacity">
            Get Started
          </button>
        </nav>

        {/* 2. Hero Section */}
        <section data-scroll-section className="h-screen flex items-center px-8 bg-[var(--deep-charcoal)]">
          <div className="max-w-7xl mt-[-15vh] mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div data-scroll data-scroll-speed="2">
              <h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                data-scroll
                data-scroll-speed="1.5"
                data-scroll-delay="0.1"
              >
                The Smartest Way to Manage Your Plastic.
              </h1>
              <p
                className="mt-4 text-lg text-gray-200"
                data-scroll
                data-scroll-speed="1.2"
                data-scroll-delay="0.2"
              >
                Track spending, automate bills, monitor credit health, and detect fraud—all from one secure dashboard.
              </p>
              <button
                className="mt-8 bg-[var(--coral-pink)] text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-opacity"
                data-scroll
                data-scroll-speed="1"
                data-scroll-delay="0.3"
              >
                Add Your First Card
              </button>
            </div>
            {/* Right: Visuals */}
            <div className="flex justify-center items-center">
              <div className="w-80 h-80 bg-[var(--obsidian)] rounded-full flex justify-center items-center shadow-2xl shadow-[var(--coral-pink)]/20">
                <div className="w-64 h-64 bg-[var(--coral-pink)] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
            {/* <CreditCard3D /> */}
          </div>
        </section>

        {/* 3. Value Proposition Grid (Features) */}
        <section id="features" data-scroll-section className="py-20 px-8 bg-near-black">
          <div
            className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center"
            data-scroll
            data-scroll-speed="1"
          >
            {/* Block 1 */}
            <div
              className="bg-[var(--deep-charcoal)] p-8 rounded-xl"
              data-scroll
              data-scroll-speed="0.5"
              data-scroll-delay="0.1"
            >
              <div className="text-4xl mb-4 text-[var(--coral-pink)]">[Analytics Icon]</div>
              <h3 className="text-2xl font-bold mb-2">Intelligent Analytics</h3>
              <p className="text-gray-400">Stop guessing. Get detailed visualizations of your monthly spending on food, travel, and shopping. Tag transactions instantly for perfect reporting.</p>
            </div>
            {/* Block 2 */}
            <div
              className="bg-[var(--deep-charcoal)] p-8 rounded-xl"
              data-scroll
              data-scroll-speed="0.5"
              data-scroll-delay="0.1"
            >
              <div className="text-4xl mb-4 text-[var(--coral-pink)]">[Payments Icon]</div>
              <h3 className="text-2xl font-bold mb-2">Auto-Pilot Payments</h3>
              <p className="text-gray-400">Never Miss a Due Date. Set up UPI-based auto-debits with smart notifications. We alert you before we pay, giving you total control.</p>
            </div>
            {/* Block 3 */}
            <div
              className="bg-[var(--deep-charcoal)] p-8 rounded-xl"
              data-scroll
              data-scroll-speed="0.5"
              data-scroll-delay="0.1"
            >
              <div className="text-4xl mb-4 text-[var(--coral-pink)]">[Security Icon]</div>
              <h3 className="text-2xl font-bold mb-2">AI-Driven Security</h3>
              <p className="text-gray-400">Fraud Protection 2.0. Our machine learning algorithms learn your spending patterns and flag suspicious activity instantly. You are the firewall.</p>
            </div>
          </div>
        </section>

        {/* 4. Premium Cards Section */}
        <section data-scroll-section className="relative py-20 px-8 overflow-hidden bg-[var(--deep-charcoal)]">
          {/* Video Background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={adVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 bg-transparent z-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div
              className="text-center mb-16"
              data-scroll
              data-scroll-speed="0.8"
              data-scroll-direction="vertical"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Premium Cards</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">Experience luxury and rewards with our premium card collection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[

                {
                  name: 'Gold Premium',
                  color: 'bg-gradient-to-br from-yellow-600/40 to-yellow-800/40',
                  border: 'border-yellow-400',
                  text: 'text-white',
                  icon: '🌟',
                  features: ['3% Cashback', 'Travel Insurance', 'Priority Support']
                },
                {
                  name: 'Platinum Elite',
                  color: 'bg-gradient-to-br from-black/40 to-black/40',
                  border: 'border-gray-500',
                  text: 'text-white',
                  icon: '💎',
                  features: ['5% Cashback', 'Airport Lounge Access', '24/7 Concierge']
                },
                {
                  name: 'Silver Select',
                  color: 'bg-gradient-to-br from-gray-200/40 to-gray-400/40',
                  border: 'border-gray-300',
                  text: 'text-gray-900',
                  icon: '✨',
                  features: ['2% Cashback', 'No Annual Fee', 'Zero Foreign Transaction']
                }
              ].map((card, index) => (
                <div
                  key={card.name}
                  className={`${card.color} ${card.border} border-2 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-opacity-70 border-opacity-30`}
                  data-scroll
                  data-scroll-speed={0.5 + (index * 0.1)}
                  data-scroll-direction="vertical"
                  data-scroll-class="fade-in-up"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: 1,
                    transform: 'translateY(0)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className={`text-2xl font-bold mb-6 ${card.text}`}>{card.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`${card.text} mr-2 mt-1`}>•</span>
                        <span className={card.text === 'text-white' ? 'text-gray-200' : 'text-gray-800'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all ${card.text === 'text-white'
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. The "Smart Saver" Section */}
        <section data-scroll-section className="py-20 px-8 bg-near-black overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-8"
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
                data-scroll-class="fade-in"
              >
                Maximize Every Swipe.
              </h2>
              <ul className="space-y-4 text-lg">
                {[
                  "Reward Optimization: We tell you exactly which card to use for every purchase to maximize points.",
                  "EMI Calculator: Planning a big purchase? Calculate interest rates and breakdown monthly payments instantly.",
                  "One-View Dashboard: Track all your active EMIs in a single list."
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center opacity-0 translate-y-4 transition-all duration-500 ease-out"
                    data-scroll
                    data-scroll-speed={0.5 + (index * 0.1)}
                    data-scroll-direction="vertical"
                    data-scroll-class="fade-in-up"
                  >
                    <span className="text-[var(--coral-pink)] mr-4">[✓]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: Visuals */}
            <div
              className="flex justify-center items-center"
              data-scroll
              data-scroll-speed="-0.5"
              data-scroll-direction="horizontal"
              data-scroll-class="slide-in-right"
            >
              <div className="w-80 h-80 bg-[var(--deep-charcoal)] rounded-lg flex justify-center items-center transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                <p className="text-gray-400">[Stylized graphic of stacked coins]</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Trust & Security Footer */}
        <section data-scroll-section id="security" className="py-24 px-8 bg-[var(--deep-charcoal)] text-center overflow-hidden">
          <div className="container mx-auto">
            <div
              className="mb-16"
              data-scroll
              data-scroll-speed="0.5"
              data-scroll-direction="vertical"
              data-scroll-class="fade-in"
              data-scroll-offset="30%"
            >
              <h2 className="text-4xl font-bold mb-4">Your Data, Fortified.</h2>
              <p className="text-gray-200 max-w-2xl mx-auto">We use bank-grade encryption and read-only APIs. We never store your CVV or PIN.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                {
                  icon: (
                    <svg className="w-16 h-16 mx-auto mb-4 text-[var(--coral-pink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  text: "PCI-DSS Compliant"
                },
                {
                  icon: (
                    <svg className="w-16 h-16 mx-auto mb-4 text-[var(--coral-pink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  text: "ISO 27001 Certified"
                },
                {
                  icon: (
                    <svg className="w-16 h-16 mx-auto mb-4 text-[var(--coral-pink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  text: "256-bit Encryption"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[var(--near-black)] p-8 rounded-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl"
                  data-scroll
                  data-scroll-speed={0.3 + (index * 0.1)}
                  data-scroll-offset="20%"
                  data-scroll-direction="vertical"
                  data-scroll-class="fade-in-up"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: 1,
                    transform: 'translateY(0)'
                  }}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <p className="text-xl font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Standard Footer */}
        <footer data-scroll-section className="py-12 px-8 bg-near-black text-gray-400">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Product */}
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            {/* Social Media */}
            <div>
              <h4 className="font-bold text-white mb-4">Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">[T]</a>
                <a href="#" className="hover:text-white">[L]</a>
                <a href="#" className="hover:text-white">[I]</a>
              </div>
            </div>
          </div>
          <div className="border-t border-deep-charcoal pt-8 text-center text-sm">
            <p>© 2024 CredX. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};


export default Hero;
