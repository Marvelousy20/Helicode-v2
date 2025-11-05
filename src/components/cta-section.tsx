import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg">
      <div className="bg-[#E3E8EF] rounded-2xl">
        <div className="p-10 flex lg:flex-row flex-col items-center justify-between">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-[3.5rem] md:leading-[107%] font-bold mb-4 text-foreground text-balance">
              Ready to hire your next developer or designer?
            </h2>
            <p className="text-[#4B5565] font-medium mb-8 text-lg text-balance max-w-2xl">
              Stop losing time on recruiting. Start building with the best
              talent managed end-to-end by Helicode.
            </p>
          </div>

          <Button className="bg-[#5500FE] h-14 hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg font-semibold">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
