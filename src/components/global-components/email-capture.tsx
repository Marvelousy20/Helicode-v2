"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface EmailCaptureProps {
  onSubmit?: (email: string) => void;
  className?: string;
  placeholder?: string;
  buttonText?: string;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({
  onSubmit,
  className,
  placeholder = "Email address",
  buttonText = "Start Your Project",
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) return;

    setIsLoading(true);

    try {
      await onSubmit?.(email);
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-2xl mx-auto gap-3 sm:gap-0",
        className
      )}
    >
      <div className="relative flex w-full bg-[#E3E8EF] rounded-full border border-[#E3E8EF] p-1 sm:p-1.5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={isLoading}
          className="flex-1 bg-transparent px-5 sm:px-6 py-3 text-base text-gray-900 placeholder-gray-500 outline-none disabled:opacity-50"
          style={{ fontSize: "16px" }} // Prevent zoom on iOS
        />

        <button
          type="submit"
          disabled={isLoading || !email}
          className={cn(
            "hidden sm:inline-flex px-8 py-4 rounded-full bg-[#5500FE] text-white font-bold text-base",
            "transition-all duration-200",
            "hover:bg-purple-700 active:scale-[0.98]",
            "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
            "disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
          )}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            buttonText
          )}
        </button>
      </div>

      {/* Mobile button (below input) */}
      <button
        type="submit"
        disabled={isLoading || !email}
        className={cn(
          "sm:hidden w-full px-6 py-3 rounded-full bg-[#5500FE] text-white font-bold text-base",
          "transition-all duration-200",
          "hover:bg-purple-700 active:scale-[0.98]",
          "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
          "disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
        )}
      >
        {isLoading ? "Sending..." : buttonText}
      </button>
    </form>
  );
};

export default EmailCapture;
