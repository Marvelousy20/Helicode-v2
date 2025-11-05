import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PricingSection() {
  const plans = [
    {
      name: "Starter Plan",
      subtitle: "For solo founders & small teams",
      price: 500,

      features: [
        "1 vetted contractor (designer or developer)",
        "20 hours of work per week",
        "Project-based support",
        "Talent replacement guarantee",
        "Access to Helicode talent network",
      ],
      featured: true,
    },
    {
      name: "Growth Plan",
      subtitle: "For growing startups building fast.",
      price: 1000,

      features: [
        "1 vetted contractor (designer or developer)",
        "40 hours of work per week (per contractor)",
        "Priority matching & onboarding",
        "Dedicated project manager",
        "Monthly performance review",
      ],
      featured: false,
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[3.5rem] font-bold mb-2 text-foreground">
            Pricing
          </h2>
          <p className="text-xl text-[#4B5565] font-medium">
            Subscription is the new hiring
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-214 mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-[44px] p-8 transition-all bg-black text-white`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[1.75rem] font-bold">{plan.name}</h3>

                {plan.featured && (
                  <p className="text-sm font-semibold">Popular</p>
                )}
              </div>
              <p className="md:mb-10 mb-6">{plan.subtitle}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-[2.5rem] font-bold">
                    ${plan.price}
                  </span>
                  <span className="">/month</span>
                </div>
              </div>

              <Button className="w-full rounded-full bg-[#5500FE] font-bold mb-6 md:mb-10 h-14">
                Get Started
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Image
                      src="/check.svg"
                      alt="check"
                      width={18}
                      height={18}
                    />
                    <span className={`text-sm`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
