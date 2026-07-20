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
  ArrowRight,
  CheckCircle2,
  Bell,
  FileText,
  CreditCard,
  Truck,
  Globe,
  Lock,
  Zap,
  RefreshCw
} from "lucide-react";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: LayoutDashboard,
      title: "Smart Business Dashboard",
      description: "Get a bird's-eye view of your entire business with our intelligent dashboard. Real-time metrics, charts, and insights help you make data-driven decisions instantly.",
      benefits: [
        "Real-time revenue tracking",
        "Customizable widgets",
        "Performance alerts",
        "Multi-location overview"
      ]
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock levels, manage suppliers, and automate reordering. Never run out of stock or overstock again with smart inventory predictions.",
      benefits: [
        "Barcode scanning support",
        "Auto-reorder alerts",
        "Supplier management",
        "Stock movement tracking"
      ]
    },
    {
      icon: Receipt,
      title: "Billing & Accounting System",
      description: "Create professional invoices, track payments, and manage your finances with our comprehensive accounting module. GST/VAT ready.",
      benefits: [
        "Professional invoices",
        "Payment tracking",
        "Tax calculations",
        "Financial reports"
      ]
    },
    {
      icon: Users,
      title: "Employee & HR Management",
      description: "Manage your workforce efficiently with attendance tracking, payroll processing, leave management, and performance reviews.",
      benefits: [
        "Attendance tracking",
        "Payroll automation",
        "Leave management",
        "Performance reviews"
      ]
    },
    {
      icon: UserCircle,
      title: "Customer Management (CRM)",
      description: "Build lasting relationships with your customers. Track interactions, manage leads, and deliver personalized experiences.",
      benefits: [
        "Contact management",
        "Lead tracking",
        "Communication history",
        "Customer segmentation"
      ]
    },
    {
      icon: Calendar,
      title: "Appointment & Booking System",
      description: "Let customers book appointments online. Manage schedules, send reminders, and reduce no-shows with automated notifications.",
      benefits: [
        "Online booking",
        "Calendar sync",
        "SMS/Email reminders",
        "Resource scheduling"
      ]
    },
  ];

  const additionalFeatures = [
    { icon: BarChart3, title: "Reports & Analytics", desc: "Comprehensive business reports and analytics" },
    { icon: Building2, title: "Multi-Business Support", desc: "Manage multiple locations from one account" },
    { icon: Shield, title: "Secure Cloud Database", desc: "Bank-grade encryption for your data" },
    { icon: Smartphone, title: "Mobile Friendly Access", desc: "Full functionality on any device" },
    { icon: Bell, title: "Smart Notifications", desc: "Stay updated with real-time alerts" },
    { icon: FileText, title: "Document Management", desc: "Store and organize business documents" },
    { icon: CreditCard, title: "Multiple Payment Methods", desc: "Accept all types of payments" },
    { icon: Truck, title: "Delivery Management", desc: "Track orders and deliveries" },
    { icon: Globe, title: "Multi-Language Support", desc: "Use in your preferred language" },
    { icon: Lock, title: "Role-Based Access", desc: "Control who sees what" },
    { icon: Zap, title: "Automation Rules", desc: "Automate repetitive tasks" },
    { icon: RefreshCw, title: "Data Sync", desc: "Real-time synchronization" },
  ];

  return (
    <div className="pt-20" data-testid="features-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              FEATURES
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Powerful Features to <span className="gradient-text">Grow Your Business</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              From inventory management to customer relationships, BITBUILDER ERP 
              provides all the tools you need to streamline operations and boost productivity.
            </p>
            <Link to="/contact">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 lg:py-32" data-testid="main-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isReversed = index % 2 === 1;
              return (
                <div 
                  key={index}
                  data-testid={`main-feature-${index}`}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="bg-slate-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
                      <div className="w-full max-w-sm">
                        <div className="glass bg-white rounded-xl p-6 shadow-soft">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-semibold text-slate-800">{feature.title}</span>
                          </div>
                          <div className="space-y-3">
                            {[1,2,3,4].map((i) => (
                              <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                <div className="w-8 h-8 bg-indigo-100 rounded-lg" />
                                <div className="flex-1">
                                  <div className="h-2 bg-slate-200 rounded w-full" />
                                  <div className="h-2 bg-slate-100 rounded w-2/3 mt-1" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 lg:py-32 bg-slate-50" data-testid="additional-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              And Much More...
            </h2>
            <p className="text-lg text-slate-600">
              Discover all the features that make BITBUILDER ERP the complete business solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  data-testid={`additional-feature-${index}`}
                  className="bg-white p-6 rounded-xl border border-slate-100 hover:-translate-y-1 transition-transform"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Book a free demo and see how BITBUILDER ERP can transform your business.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6 text-lg"
              data-testid="features-cta-btn"
            >
              Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
