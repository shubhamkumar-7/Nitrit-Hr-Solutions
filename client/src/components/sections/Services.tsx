import { 
  FileText, 
  Users, 
  Scale, 
  ClipboardCheck, 
  Building2, 
  Briefcase 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Compliance Services",
    icon: <Scale className="w-10 h-10 text-secondary" />,
    description: "Comprehensive management of statutory obligations to ensure your business remains compliant.",
    features: [
      "PF & ESIC Registration",
      "Monthly PF / ESIC Return Filing",
      "Labour Law Compliance Support",
      "Audit & Inspection Assistance",
      "Statutory Registers & Returns"
    ]
  },
  {
    title: "Payroll Processing",
    icon: <FileText className="w-10 h-10 text-secondary" />,
    description: "Accurate and timely payroll management services tailored to your organizational structure.",
    features: [
      "Monthly Salary Processing",
      "Payslip Generation",
      "Tax Deductions & Calculations",
      "Full & Final Settlements",
      "Leave Management Integration"
    ]
  },
  {
    title: "Recruitment Services",
    icon: <Users className="w-10 h-10 text-secondary" />,
    description: "End-to-end hiring solutions to find the right talent for IT, Non-IT, and Manufacturing roles.",
    features: [
      "IT & Non-IT Recruitment",
      "Manufacturing & Export Hiring",
      "Engineers & Supervisors",
      "PLC Programmers & Designers",
      "End-to-End Recruitment Support"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Our Core <span className="text-secondary">Services</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We provide specialized solutions designed to streamline your HR operations and ensure full regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="h-2 bg-secondary w-0 group-hover:w-full transition-all duration-500" />
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 bg-primary/5 w-fit rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">{service.title}</CardTitle>
                <CardDescription className="text-slate-500 mt-2 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional specialized roles banner */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img src="/images/compliance-abstract.png" className="w-full h-full object-cover" alt="abstract" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6">Specialized Hiring for Manufacturing & Export Industries</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Electrical Designers", "PLC Programmers", "SMP Machine Designers", "Supervisors", "Staff Hiring"].map((role) => (
                <span key={role} className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
