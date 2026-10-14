import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { currentFocus, collaborations } from "../constants";

const About = () => {
  const grid2Container = useRef();

  const coreSkills = [
    "React.js & Next.js",
    "Node.js & Express",
    "React Native",
    "AI / ML Integration",
    "Python & LangChain",
    "PostgreSQL & Supabase",
    "AWS & Vercel",
    "Socket.IO Realtime",
    "Windows Server & Networks",
  ];

  return (
    <section className="c-space section-spacing" id="about">
      <div className="flex flex-col gap-2">
        <h2 className="text-heading">About Me</h2>
        <p className="subtext">
          Full-Stack Developer · AI Engineer · IT Consultant based in Dhaka, Bangladesh.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-10">
        {/* Grid 1: Profile & Bio */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/rana.jpeg"
            alt="MD Nuralam"
            className="absolute scale-[1.3] -right-[4rem] -top-[1rem] md:scale-[2.4] md:left-48 md:inset-y-56 lg:scale-[1.6] object-cover opacity-80"
          />
          <div className="z-10 max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2 text-xs font-semibold rounded-full bg-lavender/30 text-white w-fit">
              Founder @ RANCODED
            </div>
            <p className="headtext text-2xl font-bold">Hi, I&apos;m MD Nuralam</p>
            <p className="subtext leading-relaxed">
              Results-driven Full-Stack Developer and AI Engineer with 5+ years of experience designing, building, and delivering secure, scalable web and mobile applications for clients across Singapore, Vietnam, the US, and Bangladesh.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2: Engineering Philosophy & Interactive Cards */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="relative flex items-center justify-center w-full h-full overflow-hidden"
          >
            <p className="flex items-end text-4xl lg:text-5xl font-black text-gray-600/40 select-none">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "-15deg", top: "18%", left: "8%" }}
              text="React & Next.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "55%", left: "12%" }}
              text="AI / LLM Tooling"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "20%", left: "55%" }}
              text="Node.js & Express"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "60%", left: "52%" }}
              text="React Native"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "75%", left: "30%" }}
              text="Python & PyTorch"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "10%", left: "35%" }}
              text="Clean Architecture"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3: Time Zone & Remote Availability */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[55%]">
            <span className="text-xs font-semibold uppercase tracking-wider text-mint">
              Remote Worldwide
            </span>
            <p className="headtext text-xl font-bold">Dhaka, Bangladesh</p>
            <p className="subtext">
              Based in UTC+6 — highly flexible and experienced collaborating across US, European, and Asian time zones.
            </p>
          </div>
          <figure className="absolute left-[35%] top-[5%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4: Contact Action */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full text-center">
            <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
              Available For Hire
            </span>
            <p className="text-xl lg:text-2xl font-bold text-white">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Tech Stack Orbit */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <span className="text-xs font-semibold uppercase tracking-wider text-lavender">
              Core Ecosystem
            </span>
            <p className="headtext text-xl font-bold">Tech Stack & Tools</p>
            <p className="subtext">
              Specialized in JavaScript/TypeScript & Python ecosystems, building secure full-stack web, cross-platform mobile, and AI solutions with cloud deployment on AWS & Vercel.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[48%] md:scale-125 pointer-events-none">
            <Frameworks />
          </div>
        </div>
      </div>

      {/* Focus, Capabilities & Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {/* Card 1: Current Focus */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-storm/80 to-indigo/80 border border-white/10 hover:-translate-y-1 duration-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🔭</span>
            <h3 className="text-xl font-bold text-white">Current Focus</h3>
          </div>
          <div className="space-y-4">
            {currentFocus.map((item, idx) => (
              <div key={idx} className="border-l-2 border-lavender/50 pl-3">
                <h4 className="text-sm font-semibold text-neutral-200 flex items-center gap-1.5">
                  <span>{item.icon}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lavender transition-colors underline-offset-2 hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Looking to Collaborate On */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-storm/80 to-indigo/80 border border-white/10 hover:-translate-y-1 duration-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">👯</span>
            <h3 className="text-xl font-bold text-white">Looking to Collaborate On</h3>
          </div>
          <ul className="space-y-2.5">
            {collaborations.map((collab, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs md:text-sm text-neutral-300"
              >
                <span className="text-mint font-bold mt-0.5">✓</span>
                <span>{collab}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🎓</span>
              <h4 className="text-sm font-bold text-white">Education</h4>
            </div>
            <p className="text-xs font-semibold text-neutral-200">
              BSc, Computer Science & Engineering
            </p>
            <p className="text-xs text-neutral-400">
              Bangladesh National University · Dhaka, Bangladesh · Graduated 2024
            </p>
          </div>
        </div>

        {/* Card 3: Ask Me About */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-storm/80 to-indigo/80 border border-white/10 hover:-translate-y-1 duration-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💬</span>
            <h3 className="text-xl font-bold text-white">Ask Me About</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:border-lavender/50 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-5 p-3.5 rounded-xl bg-midnight/80 border border-white/5">
            <p className="text-xs font-medium text-neutral-300">
              💡 Background also includes <span className="text-lavender font-semibold">Enterprise IT Systems Administration</span> (Windows Server, Active Directory, Network Infrastructure) at Chittagong Port container terminals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
