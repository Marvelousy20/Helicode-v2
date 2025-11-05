import CompanyTalentToggle from "./global-components/company-talent-toggle";
import EmailCapture from "./global-components/email-capture";
export function HeroSection() {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-272 mx-auto">
        {/* Badges */}
        <div className="flex justify-center mb-6">
          <CompanyTalentToggle />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[5rem] lg:leading-[107%] font-bold text-center text-balance mb-6 text-foreground">
          Hire world-class contractors. Pay monthly. Build fast.
        </h1>

        {/* Subheading */}
        <p className="text-center text-[#121926] text-lg md:text-[1.75rem] leading-[100%] mb-6 text-balance">
          Instantly hire top contractors in design, development, and marketing.
          Pay monthly, no compliance headaches.
        </p>

        {/* CTA Form */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
}
