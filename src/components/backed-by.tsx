import Image from "next/image";
export function BackedBy() {
  const logos = ["/lisk.svg", "coinsub.svg", "mest.svg"];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#EEF2F6] rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[#202939] text-xl md:text-3xl font-semibold mb-8">
          Backed and Supported By
        </h2>
        <div className="flex justify-center items-end gap-8 flex-wrap">
          <Image src={logos[0]} alt="Lisk.svg" width={98} height={34} />
          <Image src={logos[1]} alt="Lisk.svg" width={146} height={26} />
          <Image src={logos[2]} alt="Lisk.svg" width={122} height={17} />
        </div>
      </div>
    </section>
  );
}
