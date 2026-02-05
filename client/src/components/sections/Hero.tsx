import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-office.png" 
          alt="Modern corporate office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-secondary text-sm font-medium mb-6">
            <CheckCircle2 size={16} />
            <span>Trusted by Industry Leaders</span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Professional <span className="text-secondary">HR & Compliance</span> Consultancy
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
            End-to-end solutions in statutory compliance, payroll management, and recruitment services backed by 6+ years of industry experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary font-semibold text-lg px-8 h-12" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-semibold text-lg px-8 h-12" asChild>
              <a href="#contact">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">6+</div>
              <div className="text-sm text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-slate-300">Compliance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-slate-300">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-slate-300">Placements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
