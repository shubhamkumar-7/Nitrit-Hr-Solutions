import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 translate-x-1/2 -z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/team-meeting.png" 
                alt="Our HR Team" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-in fade-in zoom-in duration-500 delay-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">N</div>
                <div>
                  <div className="font-bold text-primary">Nitish Kumar Sharma</div>
                  <div className="text-xs text-slate-500">Director & Leader</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 italic">"Delivering reliable, compliant, and result-oriented HR solutions."</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 bg-secondary/10 text-primary rounded-full text-sm font-semibold mb-4">
              About NITRIT HR Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Empowering Businesses with <span className="text-secondary">Strategic HR Solutions</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              We are a professional HR & Compliance consultancy providing end-to-end solutions in statutory compliance, payroll management, and recruitment services.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              With over 6 years of practical industry experience, we support organizations in maintaining statutory compliance, managing workforce processes, and fulfilling hiring requirements efficiently. We focus on accuracy, confidentiality, and timely delivery to keep our clients stress-free.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Statutory Compliance Experts",
                "End-to-End Recruitment",
                "Payroll Management",
                "Labour Law Support"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
