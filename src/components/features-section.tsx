import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] md:leading-[107%] font-bold mb-4 text-foreground text-balance">
            The fastest way to build your team without full-time hiring pain.
          </h2>
          <p className="text-[#4B5565] text-xl md:text-2xl md:leading-[100%] text-balance max-w-3xl mx-auto">
            We help startups and founders access top talent paired with one-time
            subscription. No HR, no compliance, no headaches.
          </p>
        </div>

        {/* features */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.42fr_1fr] xl:grid-cols-[1fr_1fr] gap-6">
            <div className="bg-[#DBE8FB] rounded-3xl p-10">
              <div className="flex justify-center">
                <Image
                  src="/matched.png"
                  alt="Matched.svg"
                  width={495}
                  height={257}
                />
              </div>

              <h3 className="md:text-3xl text-xl font-bold mb-4">
                Get Matched in 24 Hours
              </h3>
              <p className="text-[#4B5565] font-medium text-base md:text-xl leading-[131%]">
                With Helicode, you can get matched with a pre-vetted designer,
                developer, or product expert in less than 24 hours.
              </p>
            </div>

            <div className="bg-[#FBECE7] rounded-3xl p-10">
              <div className="flex justify-center">
                <Image
                  src="/subscription.png"
                  alt="Subscription.svg"
                  width={495}
                  height={257}
                />
              </div>
              <h3 className="md:text-3xl text-xl font-bold mb-4">
                Fixed monthly subscription
              </h3>
              <p className="text-[#4B5565] font-medium text-base md:text-xl leading-[131%]">
                One simple plan. No hidden fees. Predictable, flexible, and
                built to scale with you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.42fr] xl:grid-cols-[1fr_1fr] gap-6">
            <div className="bg-[#F5EAFB] rounded-3xl flex flex-col">
              <div className="flex justify-center mt-20">
                <Image
                  src="/onboard.png"
                  alt="Onboarding.svg"
                  width={893}
                  height={172}
                />
              </div>
              <div className="flex-1"></div>
              <div className="p-10">
                <h3 className="md:text-3xl text-xl font-bold mb-4">
                  Instant Onboarding
                </h3>
                <p className="text-[#4B5565] font-medium text-base md:text-xl leading-[131%]">
                  Our automated system verifies profiles, matches skills, and
                  activates access instantly.
                </p>
              </div>
            </div>
            <div className="bg-[#DBE8FB] rounded-3xl p-10">
              <div className="flex justify-center">
                <Image
                  src="/pay.png"
                  alt="Matched.svg"
                  width={495}
                  height={257}
                />
              </div>

              <h3 className="md:text-3xl text-xl font-bold mb-4">
                Pay Globally
              </h3>
              <p className="text-[#4B5565] font-medium text-base md:text-xl leading-[131%]">
                Hire anywhere, pay effortlessly, we handle cross-border payments
                and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
