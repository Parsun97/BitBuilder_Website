import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Package, 
  Receipt, 
  Users, 
  UserCircle, 
  Calendar,
  BarChart3,
  Building2,
  Shield,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Star,
  Zap,
  Clock,
  HeadphonesIcon,
  Settings,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomePage = () => {
  const features = [
    { icon: LayoutDashboard, title: "Smart Business Dashboard", desc: "Real-time insights at your fingertips" },
    { icon: Package, title: "Inventory Management", desc: "Track stock levels automatically" },
    { icon: Receipt, title: "Billing & Accounting", desc: "Invoicing made simple" },
    { icon: Users, title: "Employee & HR Management", desc: "Streamline your workforce" },
    { icon: UserCircle, title: "Customer Management (CRM)", desc: "Build lasting relationships" },
    { icon: Calendar, title: "Appointment & Booking", desc: "Schedule with ease" },
    { icon: BarChart3, title: "Reports & Analytics", desc: "Data-driven decisions" },
    { icon: Building2, title: "Multi-Business Support", desc: "Manage multiple locations" },
    { icon: Shield, title: "Secure Cloud Database", desc: "Your data, always safe" },
    { icon: Smartphone, title: "Mobile Friendly Access", desc: "Work from anywhere" },
  ];

  const industries = [
    { 
      name: "Hospital Management ERP", 
      desc: "Patient records, appointments, billing & pharmacy management",
      image: "https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzczMjIyODk0fDA&ixlib=rb-4.1.0&q=85"
    },
    { 
      name: "School Management ERP", 
      desc: "Student info, attendance, fees & exam management",
      image: "https://images.unsplash.com/photo-1730106443463-0fb1512c5e60?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzMyMjI4OTh8MA&ixlib=rb-4.1.0&q=85"
    },
    { 
      name: "Gym Management ERP", 
      desc: "Memberships, trainers, equipment & class scheduling",
      image: "https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvciUyMGZpdG5lc3N8ZW58MHx8fHwxNzczMjIyOTAzfDA&ixlib=rb-4.1.0&q=85"
    },
    { 
      name: "Salon Management ERP", 
      desc: "Appointments, stylists, services & inventory tracking",
      image: "https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc3MzIyMjkwOHww&ixlib=rb-4.1.0&q=85"
    },
    { 
      name: "Restaurant Management ERP", 
      desc: "Orders, tables, kitchen & delivery management",
      image: "https://images.unsplash.com/photo-1719204089341-11dec48eae19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5pbmd8ZW58MHx8fHwxNzczMjIyOTIxfDA&ixlib=rb-4.1.0&q=85"
    },
    { 
      name: "Retail Shop Management ERP", 
      desc: "POS, inventory, suppliers & customer loyalty",
      image: "https://images.unsplash.com/photo-1765009433753-c7462637d21f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBjbG90aGluZyUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzczMjIyOTI2fDA&ixlib=rb-4.1.0&q=85"
    },
  ];

  const benefits = [
    { icon: Zap, title: "Easy to Use Interface", desc: "Intuitive design that anyone can master" },
    { icon: Receipt, title: "Affordable Pricing", desc: "Plans that fit every budget" },
    { icon: Shield, title: "Secure Data Protection", desc: "Bank-grade encryption for your data" },
    { icon: Building2, title: "Cloud + Offline Support", desc: "Work anywhere, anytime" },
    { icon: HeadphonesIcon, title: "24/7 Technical Support", desc: "We're always here to help" },
    { icon: Settings, title: "Customizable Modules", desc: "Tailor-made for your needs" },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Hospital Administrator",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc3MzIyMjkzMHww&ixlib=rb-4.1.0&q=85",
      quote: "BITBUILDER ERP transformed how we manage patient records. The efficiency gains have been remarkable.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Retail Chain Owner",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc3MzIyMjkwOHww&ixlib=rb-4.1.0&q=85",
      quote: "Managing inventory across 5 stores was a nightmare until we found BITBUILDER. Now it's effortless.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Gym Owner",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400",
      quote: "The membership management and class scheduling features have helped us grow our gym by 40%.",
      rating: 5
    },
  ];

  const faqs = [
    {
      question: "What is BITBUILDER ERP?",
      answer: "BITBUILDER ERP is an all-in-one cloud-based business management software that helps organizations manage their operations efficiently. It includes modules for inventory, billing, HR, CRM, appointments, and more."
    },
    {
      question: "Which industries does BITBUILDER support?",
      answer: "BITBUILDER supports multiple industries including hospitals, schools, gyms, salons, restaurants, and retail businesses. Each industry gets specialized features tailored to their specific needs."
    },
    {
      question: "Is my data secure with BITBUILDER?",
      answer: "Absolutely! We use bank-grade encryption and secure cloud infrastructure to protect your data. Regular backups and multi-factor authentication ensure your business information is always safe."
    },
    {
      question: "Can I use BITBUILDER on mobile devices?",
      answer: "Yes! BITBUILDER is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. You can manage your business from anywhere, anytime."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a free demo where you can explore all features with our team. Book a demo to see how BITBUILDER can transform your business operations."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support via chat, email, and phone. Our dedicated team is always ready to help you with any questions or issues."
    },
  ];

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "500+", label: "Businesses" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="pt-20" data-testid="home-page">
      {/* Hero Section */}
      <section className="hero-pattern relative overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fadeInUp">
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                All-in-One Business Solution
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                BITBUILDER ERP – <span className="gradient-text">One Software</span> to Manage Your Entire Business
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Powerful cloud-based ERP software for hospitals, schools, gyms, 
                salons, restaurants and businesses. Streamline operations, boost 
                productivity, and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="btn-primary bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg"
                    data-testid="hero-demo-btn"
                  >
                    Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full px-8 py-6 text-lg border-slate-300 hover:bg-slate-50"
                    data-testid="hero-contact-btn"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-200">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item" style={{ animationDelay: `${index * 100}ms` }}>
                    <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="animate-slideInRight animation-delay-200">
              <div className="dashboard-preview glass rounded-2xl p-6 shadow-glow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4">
                  {/* Mini Dashboard Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">B</span>
                      </div>
                      <span className="font-semibold text-slate-800">Dashboard</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-slate-100 rounded-lg" />
                      <div className="w-8 h-8 bg-slate-100 rounded-lg" />
                    </div>
                  </div>
                  {/* Mini Stats Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-indigo-50 rounded-xl p-3">
                      <p className="text-xs text-slate-500">Revenue</p>
                      <p className="text-lg font-bold text-indigo-600">$45.2K</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <p className="text-xs text-slate-500">Orders</p>
                      <p className="text-lg font-bold text-green-600">1,234</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-3">
                      <p className="text-xs text-slate-500">Customers</p>
                      <p className="text-lg font-bold text-orange-600">856</p>
                    </div>
                  </div>
                  {/* Mini Chart Placeholder */}
                  <div className="bg-slate-50 rounded-xl p-4 h-32 flex items-end gap-2">
                    {[40, 70, 55, 85, 65, 90, 75].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-indigo-500 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  {/* Mini Recent Items */}
                  <div className="space-y-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                        <div className="w-8 h-8 bg-slate-200 rounded-full" />
                        <div className="flex-1">
                          <div className="h-2 bg-slate-200 rounded w-24" />
                          <div className="h-2 bg-slate-100 rounded w-16 mt-1" />
                        </div>
                        <div className="h-2 bg-green-200 rounded w-12" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-slate-50" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              POWERFUL FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Run Your Business
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From inventory to invoicing, our comprehensive suite of tools helps you 
              manage every aspect of your business efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLarge = index === 0;
              const isWide = index === 4 || index === 8;
              return (
                <div
                  key={index}
                  data-testid={`feature-card-${index}`}
                  className={`feature-card bg-white p-6 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-transform ${
                    isLarge ? 'md:col-span-2 md:row-span-2' : ''
                  } ${isWide ? 'md:col-span-2' : ''}`}
                >
                  <div className={`w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 ${isLarge ? 'w-16 h-16' : ''}`}>
                    <Icon className={`text-indigo-600 ${isLarge ? 'w-8 h-8' : 'w-6 h-6'}`} />
                  </div>
                  <h3 className={`font-semibold text-slate-900 mb-2 ${isLarge ? 'text-xl' : ''}`}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline" className="rounded-full px-8">
                View All Features <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              INDUSTRY SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our ERP software adapts to the unique needs of different industries, 
              providing specialized features that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Link 
                to="/industries" 
                key={index}
                data-testid={`industry-card-${index}`}
                className="industry-card relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
              >
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="industry-card-overlay absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-white/80 text-sm">{industry.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/industries">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8">
                Explore All Industries <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-4">
              WHY BITBUILDER
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose BITBUILDER ERP?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Join thousands of businesses who trust BITBUILDER to power their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  data-testid={`benefit-card-${index}`}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Business Leaders
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See what our customers say about their experience with BITBUILDER ERP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                data-testid={`testimonial-card-${index}`}
                className="testimonial-card bg-white p-8 rounded-2xl border border-slate-100 shadow-soft"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-slate-50" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-200 px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-indigo-600" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of businesses already using BITBUILDER ERP. 
            Start your free demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6 text-lg font-semibold"
                data-testid="cta-demo-btn"
              >
                Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                data-testid="cta-pricing-btn"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
