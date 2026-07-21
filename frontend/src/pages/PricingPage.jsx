import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  ArrowRight,
  CheckCircle2,
  X,
  Zap,
  Building2,
  Rocket
} from "lucide-react";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small businesses getting started",
      monthlyPrice: 2999,
      annualPrice: 2499,
      monthlyPriceUsd: 36,
      annualPriceUsd: 30,
      features: [
        { name: "Up to 5 users", included: true },
        { name: "Basic Dashboard", included: true },
        { name: "Inventory Management", included: true },
        { name: "Billing & Invoicing", included: true },
        { name: "Customer Management", included: true },
        { name: "Email Support", included: true },
        { name: "Multi-location Support", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "API Access", included: false },
        { name: "Custom Integrations", included: false },
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      icon: Building2,
      description: "Best for growing businesses with more needs",
      monthlyPrice: 5999,
      annualPrice: 4999,
      monthlyPriceUsd: 72,
      annualPriceUsd: 60,
      features: [
        { name: "Up to 20 users", included: true },
        { name: "Advanced Dashboard", included: true },
        { name: "Inventory Management", included: true },
        { name: "Billing & Invoicing", included: true },
        { name: "Customer Management (CRM)", included: true },
        { name: "HR & Payroll Module", included: true },
        { name: "Multi-location Support", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Priority Support", included: true },
        { name: "API Access", included: false },
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "For large organizations with custom requirements",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        { name: "Unlimited users", included: true },
        { name: "Custom Dashboard", included: true },
        { name: "All Modules Included", included: true },
        { name: "Multi-location Support", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "Custom Integrations", included: true },
        { name: "API Access", included: true },
        { name: "On-premise Option", included: true },
        { name: "SLA Guarantee", included: true },
      ],
      popular: false,
      cta: "Contact Sales"
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, bank transfers, and all major debit/credit cards."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
    },
  ];

  return (
    <div className="pt-20" data-testid="pricing-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              PRICING
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Choose the plan that fits your business. All plans include a 14-day free trial.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                Monthly
              </span>
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
                data-testid="billing-toggle"
              />
              <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20" data-testid="pricing-cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div 
                  key={index}
                  data-testid={`pricing-card-${index}`}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular 
                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-600 ring-offset-4' 
                      : 'bg-white border border-slate-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="popular-badge">
                      <span className="px-4 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      plan.popular ? 'bg-white/20' : 'bg-indigo-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-indigo-600'}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm ${plan.popular ? 'text-indigo-100' : 'text-slate-500'}`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      <>
                        <span className="text-4xl font-bold">
                          ₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className={`text-sm ${plan.popular ? 'text-indigo-100' : 'text-slate-500'}`}>
                          /month
                        </span>
                        <p className={`text-sm mt-1 ${plan.popular ? 'text-indigo-200' : 'text-slate-400'}`}>
                          (~${isAnnual ? plan.annualPriceUsd : plan.monthlyPriceUsd}/month)
                        </p>
                        {isAnnual && (
                          <p className={`text-sm mt-1 ${plan.popular ? 'text-indigo-100' : 'text-slate-500'}`}>
                            Billed annually
                          </p>
                        )}
                      </>
                    ) : (
                      <span className="text-2xl font-bold">Custom Pricing</span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                            plan.popular ? 'text-green-400' : 'text-green-500'
                          }`} />
                        ) : (
                          <X className={`w-5 h-5 flex-shrink-0 ${
                            plan.popular ? 'text-indigo-300' : 'text-slate-300'
                          }`} />
                        )}
                        <span className={`text-sm ${
                          !feature.included && !plan.popular ? 'text-slate-400' : ''
                        }`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button 
                      className={`w-full rounded-full py-6 ${
                        plan.popular 
                          ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                      data-testid={`pricing-cta-${index}`}
                    >
                      {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50" data-testid="pricing-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Have questions? We have answers.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                data-testid={`pricing-faq-${index}`}
                className="bg-white rounded-xl p-6 border border-slate-200"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our team is here to help you find the perfect plan for your business.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6 text-lg"
              data-testid="pricing-contact-btn"
            >
              Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
