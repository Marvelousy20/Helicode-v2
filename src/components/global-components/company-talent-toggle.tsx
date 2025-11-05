"use client";

import React from "react";

interface CompanyTalentToggleProps {
  externalTalentUrl?: string;
}

const CompanyTalentToggle: React.FC<CompanyTalentToggleProps> = ({
  externalTalentUrl = "#",
}) => {
  const [activeTab, setActiveTab] = React.useState<"companies" | "talent">(
    "companies"
  );

  const handleTalentClick = () => {
    // Navigate to external link
    window.location.href = externalTalentUrl;
  };

  return (
    <div className="inline-flex items-center p-1 bg-[b#FCFCFD] border-2 rounded-full">
      <button
        onClick={() => setActiveTab("companies")}
        className={`
          relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200
          ${
            activeTab === "companies"
              ? "bg-[#8141FF1C] text-[#5500FE] shadow-sm font-semibold"
              : "text-[#364152] hover:text-gray-900 font-semibold"
          }
        `}
      >
        Companies
      </button>
      <button
        onClick={handleTalentClick}
        className={`
          relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200
          ${
            activeTab === "talent"
              ? "bg-white text-[#5500FE] shadow-sm font-semibold"
              : "text-[#364152] hover:text-gray-900 font-semibold"
          }
        `}
      >
        Talent
      </button>
    </div>
  );
};

export default CompanyTalentToggle;
