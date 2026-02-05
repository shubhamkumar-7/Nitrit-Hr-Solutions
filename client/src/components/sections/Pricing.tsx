import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="fees" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Transparent <span className="text-secondary">Fee Structure</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Affordable and clear pricing with no hidden costs. We believe in complete transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Compliance Package */}
          <Card className="border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 w-full h-1 bg-primary" />
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary">Compliance</CardTitle>
              <CardDescription>PF & ESIC Compliance</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">₹3,000</span>
                <span className="text-slate-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-green-600" /> PF Registration
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-green-600" /> ESIC Registration
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-green-600" /> Monthly Return Filing
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-green-600" /> Challan Generation
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Payroll Package */}
          <Card className="border-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform md:-translate-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary">Payroll Processing</CardTitle>
              <CardDescription>Per Employee Processing</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">₹30</span>
                <span className="text-slate-500">/employee</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-secondary" /> Salary Computation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-secondary" /> Payslip Generation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-secondary" /> Tax Calculation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-secondary" /> Leave Management
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-secondary" /> Full & Final Settlement
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 hover:text-primary" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Recruitment Package */}
          <Card className="border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 w-full h-1 bg-primary" />
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary">Recruitment</CardTitle>
              <CardDescription>Hiring Services</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold text-primary">15 Days</span>
                <span className="text-slate-500 block text-sm">of monthly CTC</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-green-600" /> Candidate Sourcing
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-green-600" /> Screening & Interviewing
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-green-600" /> IT & Non-IT Roles
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Check size={16} className="text-green-600" /> Replacement Guarantee
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
