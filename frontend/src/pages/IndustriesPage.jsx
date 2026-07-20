import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  CheckCircle2,
  Hospital,
  GraduationCap,
  Dumbbell,
  Scissors,
  UtensilsCrossed,
  ShoppingBag
} from "lucide-react";

const IndustriesPage = () => {
  const industries = [
    {
      icon: Hospital,
      name: "Hospital Management ERP",
      tagline: "Complete Healthcare Management Solution",
      image: "https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzczMjIyODk0fDA&ixlib=rb-4.1.0&q=85",
      description: "Streamline hospital operations with our comprehensive healthcare management system. From patient registration to discharge, manage every aspect efficiently.",
      features: [
        "Patient Registration & Records",
        "Appointment Scheduling",
        "Electronic Health Records (EHR)",
        "Pharmacy & Inventory Management",
        "Billing & Insurance Claims",
        "Lab & Radiology Integration",
        "Doctor & Staff Management",
        "Bed Management System"
      ]
    },
    {
      icon: GraduationCap,
      name: "School Management ERP",
      tagline: "Smart Education Administration",
      image: "https://images.unsplash.com/photo-1730106443463-0fb1512c5e60?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzMyMjI4OTh8MA&ixlib=rb-4.1.0&q=85",
      description: "Transform your educational institution with digital-first management. Engage students, parents, and teachers on a unified platform.",
      features: [
        "Student Information System",
        "Online Attendance Tracking",
        "Fee Management & Collection",
        "Exam & Grade Management",
        "Timetable Scheduling",
        "Library Management",
        "Transport Management",
        "Parent Communication Portal"
      ]
    },
    {
      icon: Dumbbell,
      name: "Gym Management ERP",
      tagline: "Fitness Business Made Simple",
      image: "https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvciUyMGZpdG5lc3N8ZW58MHx8fHwxNzczMjIyOTAzfDA&ixlib=rb-4.1.0&q=85",
      description: "Grow your fitness business with powerful membership management, class scheduling, and trainer coordination tools.",
      features: [
        "Membership Management",
        "Class & Session Booking",
        "Trainer Assignment",
        "Equipment Tracking",
        "Payment & Subscription",
        "Attendance Tracking",
        "Diet & Workout Plans",
        "Member Progress Tracking"
      ]
    },
    {
      icon: Scissors,
      name: "Salon Management ERP",
      tagline: "Beauty Business Excellence",
      image: "https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc3MzIyMjkwOHww&ixlib=rb-4.1.0&q=85",
      description: "Elevate your salon or spa with smart appointment booking, stylist management, and inventory tracking.",
      features: [
        "Online Appointment Booking",
        "Stylist/Therapist Management",
        "Service Catalog",
        "Product Inventory",
        "Client History & Preferences",
        "Commission Tracking",
        "Loyalty Programs",
        "SMS/Email Reminders"
      ]
    },
    {
      icon: UtensilsCrossed,
      name: "Restaurant Management ERP",
      tagline: "Complete Restaurant Solution",
      image: "https://images.unsplash.com/photo-1719204089341-11dec48eae19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5pbmd8ZW58MHx8fHwxNzczMjIyOTIxfDA&ixlib=rb-4.1.0&q=85",
      description: "From kitchen to customer, manage your restaurant operations seamlessly with our all-in-one POS and management system.",
      features: [
        "Table Management",
        "Order & POS System",
        "Kitchen Display System",
        "Menu Management",
        "Inventory & Recipe Costing",
        "Online Ordering Integration",
        "Delivery Management",
        "Sales & Revenue Analytics"
      ]
    },
    {
      icon: ShoppingBag,
      name: "Retail Shop Management ERP",
      tagline: "Retail Operations Simplified",
      image: "https://images.unsplash.com/photo-1765009433753-c7462637d21f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBjbG90aGluZyUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzczMjIyOTI2fDA&ixlib=rb-4.1.0&q=85",
      description: "Run your retail business efficiently with powerful POS, inventory tracking, and customer management features.",
      features: [
        "Point of Sale (POS)",
        "Inventory Management",
        "Barcode & SKU Support",
        "Supplier Management",
        "Customer Loyalty Programs",
        "Multi-Store Support",
        "Sales Analytics",
        "Purchase Order Management"
      ]
    },
  ];

  return (
    <div className="pt-20" data-testid="industries-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              INDUSTRY SOLUTIONS
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Tailored ERP Solutions for <span className="text-orange-500">Every Industry</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Our ERP software adapts to the unique needs of different industries, 
              providing specialized features that drive efficiency and growth.
            </p>
            <Link to="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg">
                Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Detail Section */}
      <section className="py-20 lg:py-32" data-testid="industries-detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isReversed = index % 2 === 1;
              return (
                <div 
                  key={index}
                  id={industry.name.toLowerCase().replace(/\s+/g, '-')}
                  data-testid={`industry-detail-${index}`}
                  className="scroll-mt-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? '' : ''}`}>
                    <div className={isReversed ? 'lg:order-2' : ''}>
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                        <img 
                          src={industry.image} 
                          alt={industry.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                              <Icon className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                              <p className="text-white font-bold text-lg">{industry.name}</p>
                              <p className="text-white/80 text-sm">{industry.tagline}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={isReversed ? 'lg:order-1' : ''}>
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                        {industry.tagline}
                      </span>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        {industry.name}
                      </h2>
                      <p className="text-lg text-slate-600 mb-8">
                        {industry.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {industry.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link to="/contact">
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
                          Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            BITBUILDER ERP is highly customizable. Contact us to discuss how we can 
            create a solution tailored to your specific industry needs.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg"
              data-testid="industries-cta-btn"
            >
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
