import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-heading font-bold text-2xl mb-4 tracking-tight">
              NITRIT <span className="text-secondary">HR</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Professional HR & Compliance Consultancy providing end-to-end solutions in statutory compliance, payroll management, and recruitment services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#why-choose-us" className="text-slate-300 hover:text-white transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-secondary">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-300 text-sm">PF & ESIC Registration</li>
              <li className="text-slate-300 text-sm">Payroll Processing</li>
              <li className="text-slate-300 text-sm">Compliance Management</li>
              <li className="text-slate-300 text-sm">IT & Non-IT Recruitment</li>
              <li className="text-slate-300 text-sm">Labour Law Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                <span className="text-slate-300 text-sm">Greater Noida, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <a href="tel:6398736023" className="text-slate-300 text-sm hover:text-white">6398736023</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <a href="mailto:hrniteshkumarsharma@gmail.com" className="text-slate-300 text-sm hover:text-white">hrniteshkumarsharma@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} NITRIT HR SOLUTIONS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
