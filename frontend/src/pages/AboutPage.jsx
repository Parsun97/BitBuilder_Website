import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Zap,
  Shield,
  Clock
} from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "Every decision we make starts with our customers' needs. Your success is our success."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously improve our platform with cutting-edge technology and fresh ideas."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We protect your data like it's our own, with enterprise-grade security measures."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about helping businesses grow and succeed in the digital age."
    },
  ];

  const stats = [
    { value: "3.5+", label: "Years of Dev Experience", icon: Award },
    { value: "6+", label: "Industry ERP Modules", icon: Globe },
    { value: "1-on-1", label: "Founder-Led Support", icon: Users },
    { value: "24/7", label: "Support Availability", icon: Clock },
  ];

  return (
    <div className="pt-20" data-testid="about-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                ABOUT US
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Empowering Businesses with <span className="gradient-text">Smart Software</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                BITBUILDER was founded with a simple mission: to make powerful business 
                management software accessible to companies of all sizes. We believe that 
                every business deserves the tools to operate efficiently and grow sustainably.
              </p>
              <Link to="/contact">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg">
                  Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1758873268364-15bef4162221?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NzMyMjI4OTF8MA&ixlib=rb-4.1.0&q=85"
                alt="Team collaboration"
                className="rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32" data-testid="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-indigo-600 text-white rounded-2xl p-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-indigo-100 leading-relaxed">
                To democratize business management technology by providing affordable, 
                powerful, and easy-to-use ERP software that helps businesses of all 
                sizes streamline operations, increase productivity, and achieve sustainable growth.
              </p>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl p-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed">
                To become the world's most trusted business management platform, 
                powering millions of businesses across industries and geographies, 
                while continuously innovating to meet the evolving needs of modern enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  data-testid={`stat-${index}`}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <p className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</p>
                  <p className="text-slate-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our core values shape everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  data-testid={`value-${index}`}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-transform"
                >
                  <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-32 bg-slate-50" data-testid="team-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              FOUNDER-LED
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              The Person Behind BITBUILDER
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              No sales team, no middlemen — you work directly with the developer building your system.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="w-40 h-40 rounded-2xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-indigo-600">PK</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Founder & Developer</h3>
              <p className="text-indigo-600 text-sm font-medium mb-4">Full-Stack .NET Developer</p>
              <p className="text-slate-600 leading-relaxed">
                3.5+ years building production systems with ASP.NET Core, C#, SQL Server, 
                React and Angular — including a multi-tenant SaaS backend (HOS) built from 
                the ground up. BITBUILDER ERP is designed and built personally, module by 
                module, for each client's real needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Experience the BITBUILDER difference. Book a demo and see how we can 
            help transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6 text-lg"
                data-testid="about-demo-btn"
              >
                Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                data-testid="about-pricing-btn"
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

export default AboutPage;
