import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Layers,
  Users,
  Database,
  Lock,
  Code2,
  CheckCircle2
} from "lucide-react";

const CaseStudyPage = () => {
  const stack = [
    "ASP.NET Core (C#)",
    "SQL Server + ADO.NET",
    "Angular (frontend integration)",
    "Multi-tenant architecture",
  ];

  const problems = [
    {
      icon: Building2,
      title: "One system, many organizations",
      desc: "Running a separate deployment per client doesn't scale. HOS was built so a single backend can serve multiple organizations — each with its own isolated data — without spinning up new infrastructure per client."
    },
    {
      icon: Lock,
      title: "Data isolation between organizations",
      desc: "Every organization's data is scoped and isolated at the data layer, so one client can never see or touch another client's records — a core requirement for any real multi-tenant SaaS."
    },
    {
      icon: Users,
      title: "Onboarding without manual setup",
      desc: "New organizations can self-register into the system instead of requiring a developer to manually provision each new client — reducing the operational overhead of onboarding."
    },
    {
      icon: ShieldCheck,
      title: "Secure authentication",
      desc: "Authentication was rebuilt and hardened to support multiple organizations and roles safely within the same system."
    },
  ];

  return (
    <div className="pt-20" data-testid="case-study-page">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            CASE STUDY
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            HOS — From a Single Hospital System to a <span className="gradient-text">Multi-Tenant SaaS Backend</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            HOS started as a hospital/room management system and was rebuilt into a
            multi-tenant SaaS backend capable of powering multiple industries — the
            same architecture behind BITBUILDER ERP.
          </p>
        </div>
      </section>

      {/* Snapshot */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-slate-500 mb-1">Origin</p>
            <p className="font-semibold text-slate-900">Hospital/room management system</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Evolved into</p>
            <p className="font-semibold text-slate-900">Multi-tenant SaaS backend</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Currently powers</p>
            <p className="font-semibold text-slate-900">School ERP (Angular frontend)</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Built by</p>
            <p className="font-semibold text-slate-900">Founder, solo</p>
          </div>
        </div>
      </section>

      {/* Problems / decisions */}
      <section className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              THE PROBLEM &amp; APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why It Was Built This Way
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white border border-slate-100 shadow-soft"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-4">
              TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built On</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stack.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <Code2 className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                <p className="text-sm text-slate-200">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where it stands + what connects to it */}
      <section className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              WHERE IT STANDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Actively Built, Actively Used
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-8 lg:p-10 flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-slate-600 leading-relaxed">
              HOS is the backend already wired to a school management ERP built in Angular,
              and its multi-tenant architecture is what BITBUILDER's industry ERP modules
              (hospital, school, gym, salon, restaurant, retail) are designed to build on top of.
              Want to see it in action for your industry? Book a walkthrough below.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want This Architecture Powering Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Book a walkthrough and see how the same backend can be shaped around your industry.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6 text-lg"
            >
              Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
