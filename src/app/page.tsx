"use client";

import TypingAnimation from "@/components/typing-animation";

export default function Home() {
  return (
    <main className="w-full min-h-screen absolute flex justify-center items-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#A78BFA]/20 blur-3xl" />
        <div className="absolute top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#6EE7B7]/16 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-[520px] w-[520px] rounded-full bg-[#FF6B6B]/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <section className="relative mx-auto flex w-full max-w-6xl justify-center px-6 py-16 md:py-24">
        <div className="items-center">
          <div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
              Hello! I’m{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#2215b2] via-[#1994c8] to-[#5c40b1] bg-clip-text text-transparent">
                  Martin Garcia
                </span>
              </span>
            </h1>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-[#A7B0C3] md:text-xl">
              I build clean, fast, customer-facing experiences and love turning
              messy requirements into polished product.
            </p>

            <div className="mt-6 flex items-baseline gap-3 text-lg md:text-xl">
              <span className="text-[#A7B0C3]">I am a</span>
              <span className="font-semibold text-[#F6F3EE]">
                <TypingAnimation
                  sequenceText={[
                    "Frontend Software Engineer",
                    "Software Developer",
                    "Full Stack Developer",
                    "Team Player",
                    "Coder",
                    "Leader",
                    "Scrum Master",
                    "Electrical Engineer",
                  ]}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
