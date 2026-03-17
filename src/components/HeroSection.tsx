import { heroData } from "@/data/hero-data";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const avatarFallback = heroData.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <section className="flex gap-6">
      <div className="hidden sm:block relative w-20 h-20 shrink-0">
        {heroData.avatar ?
          <Image
            src={heroData.avatar}
            alt={heroData.name}
            fill
            className="rounded-md object-cover"
            priority
          />
        : <div className="w-full h-full rounded-md bg-heading flex items-center justify-center text-background font-bold text-2xl leading-none">
            {avatarFallback}
          </div>
        }
      </div>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-normal text-heading">
          <Link href="/">{heroData.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg sm:text-xl tracking-normal text-heading">
          {heroData.title}
        </h2>
        <p className="mt-4 max-w-xs">{heroData.bio}</p>
      </div>
    </section>
  );
};
