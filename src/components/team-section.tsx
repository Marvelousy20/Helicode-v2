import Image from "next/image";
export function TeamSection() {
  const contractors = [
    {
      name: "John Doe",
      title: "Product Designer",
      experience: "5+ years",
      image: "/first.svg",
    },
    {
      name: "John Doe",
      title: "Frontend Developer",
      experience: "10+ years",
      image: "/second.svg",
    },
    {
      name: "John Doe",
      title: "Backend Developer",
      experience: "5+ years",
      image: "/third.svg",
    },
    {
      name: "John Doe",
      title: "UI/UX Designer",
      experience: "5+ years",
      image: "/fourth.svg",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground text-balance">
          Peep into top Helicode Contractors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contractors.map((contractor, i) => (
            <div key={i} className="">
              <div className="mb-5">
                <Image
                  src={contractor.image}
                  alt={contractor.name}
                  width={306}
                  height={292}
                />
              </div>
              <h3 className="font-bold">{contractor.name}</h3>

              <div className="flex items-center gap-1">
                <div className="flex">
                  <p className="text-black font-bold text-base md:text-xl">
                    {contractor.title}
                  </p>
                  <span className="md:text-xl">,</span>
                </div>

                <p className="text-black font-light text-sm md:text-lg">
                  {contractor.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
