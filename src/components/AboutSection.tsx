import Link from "next/dist/client/link";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="text-sm tracking-widest uppercase text-[#e2e8f0] mb-6 lg:hidden sticky top-0 bg-[#0a192f]/90 backdrop-blur-sm py-4 z-10">
        About
      </h2>
      <div className="flex flex-col gap-4 text-[#8892b0]">
        <p>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I&apos;ve had the privilege of
          building software for an{" "}
          <Link
            href="#"
            className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
          >
            advertising agency
          </Link>
          , a{" "}
          <Link
            href="#"
            className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
          >
            start-up
          </Link>
          , a{" "}
          <Link
            href="#"
            className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
          >
            huge corporation
          </Link>
          , and a{" "}
          <Link
            href="#"
            className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
          >
            student-led design studio
          </Link>
          .
        </p>
        <p>
          My main focus these days is building accessible, inclusive products
          and digital experiences at{" "}
          <a
            href="#"
            className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
          >
            Acme Corp
          </a>{" "}
          for a variety of clients.
        </p>
        <p>
          When I&apos;m not at the computer, I&apos;m usually rock climbing,
          hanging out with my dog, or exploring local coffee shops and record
          stores.
        </p>
      </div>
    </section>
  );
}
