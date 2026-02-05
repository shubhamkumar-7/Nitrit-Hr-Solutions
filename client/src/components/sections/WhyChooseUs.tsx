import { ShieldCheck, Clock, Award, UserCheck, HeartHandshake, Lock } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Compliance First",
    description: "Strict adherence to statutory laws and government regulations ensuring zero penalties."
  },
  {
    icon: <UserCheck size={32} />,
    title: "Experienced Team",
    description: "6+ years of practical industry experience in HR and compliance management."
  },
  {
    icon: <Lock size={32} />,
    title: "Confidentiality",
    description: "We respect data privacy and maintain strict confidentiality of all client information."
  },
  {
    icon: <Clock size={32} />,
    title: "Timely Delivery",
    description: "On-time support and accurate execution of services every single month."
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Client-Centric",
    description: "Flexible, affordable, and personalized solutions tailored to your specific needs."
  },
  {
    icon: <Award size={32} />,
    title: "Quality Assured",
    description: "High-quality service delivery with complete transparency and integrity."
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Why Partner With <span className="text-secondary">NITRIT</span>?
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We don't just provide services; we build partnerships based on trust, reliability, and results. Our values define how we operate and serve our clients.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col gap-3 group">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 text-lg">{reason.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/10 rounded-3xl -rotate-3" />
            <img 
              src="/images/compliance-abstract.png" 
              alt="Compliance abstract visualization" 
              className="relative rounded-3xl shadow-2xl w-full object-cover rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
