import { ArrowRight } from "lucide-react";
import heroImage from "../assets/newhero.webp";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 scale-[1.02] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="absolute left-1/2 top-[175px] z-10 w-full -translate-x-1/2 px-6 text-center text-white">

        {/* Badge */}
        <div className="mx-auto mb-8 w-fit rounded-full border border-white/20 bg-black/30 px-5 py-2 text-xs tracking-[0.25em] text-white/80 backdrop-blur-sm">
          <span className="mr-2 text-amber-400">●</span>
          FARMER-DIRECT MARKETPLACE
        </div>

        {/* Heading */}
        <h1
          className="leading-[0.9] text-5xl sm:text-3xl md:text-6xl lg:text-[7rem] xl:text-[8rem]"
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontWeight: 200,
          }}
        >
          <span className="block text-white">
            From the Earth,
          </span>

          <span className="block text-amber-400">
            to Your Table.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
          Connect directly with local farmers across the country — no
          <br className="hidden md:block" />
          middlemen, no markups. Real food, real people, real prices.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-3">

          <a
            href="#"
            className="flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-medium text-black transition duration-300 hover:bg-amber-400"
          >
            Browse the Market
            <ArrowRight size={18} />
          </a>

          <a
            href="#"
            className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
          >
            Sell Your Harvest
          </a>

        </div>
      </div>

    </section>
  );
};

export default Hero;