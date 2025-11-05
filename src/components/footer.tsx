import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-primary-foreground py-14 px-4 sm:px-6 lg:px-18">
      <div className="">
        {/* Main CTA */}
        <div className="text-center mb-16 pb-16 border-b border-[#CDD5DF]/30">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 text-balance">
            Hire. Pay. Scale.
          </h2>
          <p className="text-[#9AA4B2] text-lg md:text-2xl mb-6 text-balance max-w-3xl mx-auto">
            Stop losing time on recruiting. Start building with the best talent
            managed end-to-end by Helicode.
          </p>
          <Button className="inline-block cursor-pointer h-[47px] bg-white text-black px-6 py-2 border-2 border-primary-foreground rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition">
            Apply as Talent
          </Button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="/logo-white.svg"
              alt="logo.svg"
              width={120}
              height={20}
            />
          </div>

          <div className="flex justify-between">
            <div>
              <h5 className="font-semibold mb-4 md:text-2xl">Product</h5>
              <ul className="space-y-2 text-[#9AA4B2]">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    Global Contractors
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    Global Payroll (coming soon)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 md:text-2xl">Company</h5>
              <ul className="space-y-2 text-[#9AA4B2]">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 md:text-2xl">Policies</h5>
              <ul className="space-y-2 text-[#9AA4B2]">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    Term & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/30 text-primary-foreground/70 text-sm">
          <div>
            <p>&copy; 2025. All rights reserved.</p>
            <h5 className="text-[#4B5565] max-w-md">
              Stop losing time on recruiting. Start building with the best
              African talent managed end-to-end by Helicode.
            </h5>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary-foreground transition">
              <Image src="/Twitter.svg" alt="twitter" width={24} height={24} />
            </Link>
            <Image
              src="/Instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
            <Link href="#" className="hover:text-primary-foreground transition">
              <Image
                src="/linkedin-02.svg"
                alt="linkedin"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition">
              <Image src="/Discord.svg" alt="discord" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition">
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
