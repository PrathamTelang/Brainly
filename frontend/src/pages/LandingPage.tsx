// src/pages/LandingPage.tsx

import { Button } from "../components/Button";

export default function LandingPage() {
  return (
    <div className="relative bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#1A0A14] text-white font-sans overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF3366' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF3366]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#BEFC6D]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Sticky Nav */}
      <header className="sticky top-0 z-20 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-4 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-[#FF3366] hover:text-[#FF4477] transition-colors duration-300 cursor-pointer">
            LinkStash
          </h1>
          <Button text="Sign In" variant="primary" size="md" onClick={() => window.location.href = "/signin"} />
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-16">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#FF3366] via-[#FF4477] to-[#BEFC6D] bg-clip-text text-transparent animate-gradient">
                Organize Your Links.
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Instantly.</span>
            </h2>
          </div>
          
          <div className="mb-12 animate-fade-in-up delay-300">
            <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-xl md:text-2xl leading-relaxed font-light">
              Save, categorize, and retrieve anything with{" "}
              <span className="text-[#BEFC6D] font-semibold">LinkStash</span> — your personal second brain for the web.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-500">
            <Button text="Get Started" variant="primary" size="lg" onClick={() => window.location.href = "/signup"} />
            <Button text="Learn More" variant="secondary" size="lg" onClick={() => window.location.href = "#features"} />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-glow">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section id="features" className="relative py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#FF3366]">LinkStash</span>?
          </h3>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Powerful features designed to supercharge your productivity
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { 
              emoji: "📌", 
              title: "Save Instantly", 
              desc: "One-click save from anywhere, no more lost bookmarks. Browser extension coming soon.",
              color: "from-[#FF3366] to-[#FF4477]"
            },
            { 
              emoji: "🏷️", 
              title: "Tag & Organize", 
              desc: "Smart tagging system to filter, sort & find faster than ever before.",
              color: "from-[#BEFC6D] to-[#A8E055]"
            },
            { 
              emoji: "🔍", 
              title: "Search Lightning-Fast", 
              desc: "Find any link in seconds with our intelligent search algorithms.",
              color: "from-[#4FC3F7] to-[#29B6F6]"
            },
          ].map((feature) => (
            <div 
              key={feature.title} 
              className="group relative p-8 glass rounded-2xl hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl animate-float"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.emoji}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#BEFC6D] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Testimonials */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#0F0F0F] to-[#111]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23BEFC6D' fill-opacity='0.05'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              { number: "10,000+", label: "Active Users", icon: "👥" },
              { number: "1M+", label: "Links Saved", icon: "🔗" },
              { number: "99.9%", label: "Uptime", icon: "⚡" }
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#FF3366] mb-2 group-hover:text-[#BEFC6D] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Testimonial */}
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-12 animate-fade-in-up">
              <div className="text-6xl text-[#FF3366] mb-8 animate-float">"</div>
              <blockquote className="text-2xl md:text-3xl font-light text-gray-300 mb-8 leading-relaxed italic">
                LinkStash transformed how I save and revisit knowledge. It's like having a personal assistant for my digital life.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF3366] to-[#BEFC6D] rounded-full flex items-center justify-center text-white font-bold animate-glow">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">Jane Doe</div>
                  <div className="text-gray-400">Product Manager at TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h4 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#FF3366]">Questions</span>
          </h4>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Everything you need to know about LinkStash
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: "How secure is my data?",
              answer: "Your data is encrypted end-to-end and stored securely. We never share your personal information with third parties."
            },
            {
              question: "Can I import my existing bookmarks?",
              answer: "Yes! LinkStash supports importing bookmarks from all major browsers including Chrome, Firefox, Safari, and Edge."
            },
            {
              question: "Is there a mobile app?",
              answer: "Our web app is fully responsive and works great on mobile. Native iOS and Android apps are coming soon!"
            }
          ].map((faq, index) => (
            <div key={index} className="glass rounded-xl p-6 hover:border-white/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h5 className="text-xl font-semibold text-white mb-3">{faq.question}</h5>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-[#0A0A0A] via-[#111] to-[#0A0A0A] py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#FF3366] mb-4">Ready to get started?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of users who have already transformed their digital organization
            </p>
            <Button text="Start Your Journey" variant="primary" size="lg" onClick={() => window.location.href = "/signup"} />
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} LinkStash. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
