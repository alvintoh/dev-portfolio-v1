import { heroData } from "@/data/hero-data";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-normal text-heading">
          <Link href="/">{heroData.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg sm:text-xl tracking-normal text-heading">
          {heroData.title}
        </h2>
        <p className="mt-4 max-w-sm leading-relaxed">{heroData.bio}</p>
      </div>
    </section>
  );
};
