"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F8FAFC] border-border sticky top-0 z-50 md:rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.svg" alt="Logo" width={149} height={33} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#pricing"
              className="text-[#121926] font-medium hover:text-primary transition"
            >
              Pricing
            </Link>
            <Link
              href="#team"
              className="text-[#121926] font-medium hover:text-primary transition"
            >
              About us
            </Link>
            <Link
              href="#contact"
              className="text-[#121926] font-medium hover:text-primary transition"
            >
              Contact
            </Link>
            <Link
              href="#apply"
              className="text-[#121926] font-medium hover:text-primary transition"
            >
              Apply as a Talent
            </Link>
            <Link
              href="#services"
              className="text-[#121926] font-medium hover:text-primary transition"
            >
              Services
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="hover:bg-primary/90 rounded-full px-6 bg-[#935EFD1A]! text-[#5500FE] font-semibold"
              asChild
            >
              <Link href="#apply">Apply as Talents</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="#pricing" className="text-[#121926] hover:text-primary">
              Pricing
            </Link>
            <Link href="#team" className="text-[#121926] hover:text-primary">
              About us
            </Link>
            <Link href="#contact" className="text-[#121926] hover:text-primary">
              Contact
            </Link>
            <Link href="#apply" className="text-[#121926] hover:text-primary">
              Apply as a Talents
            </Link>
            <Link
              href="#services"
              className="text-[#121926] hover:text-primary"
            >
              Services
            </Link>
            <Button className="bg-[#935EFD1A]! text-[#5500FE] font-semibold">
              Apply as Talents
            </Button>
          </nav>
        )}
      </div>
    </div>
  );
}
