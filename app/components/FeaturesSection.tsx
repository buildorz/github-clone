"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function FeaturesSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-white text-white mb-12">
            Features
          </div>
          <h2 className="text-[32px] md:text-6xl font-bold text-white mb-8 md:mb-16">
            Delegate like a boss
          </h2>
          <div className="relative z-10 mt-20 bg-white/15 rounded-[15px] border-2 border-white/40 p-1">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-[10px]"
              poster="https://images.ctfassets.net/8aevphvgewt8/7xenBC7iqpKfe5tXk9TKby/caf78ec4e1918cf82681613fcb7e9468/hero-poster-lg.webp"
            >
              <source src="//videos.ctfassets.net/8aevphvgewt8/oRsODfD5AIRds44zu51uQ/ad3028c1286fd523188cf482b542caba/features-breakout-coding-agent.mp4" />
            </video>
            <button
              onClick={togglePlay}
              className="absolute bottom-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center"
            >
              {isPlaying ? (
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.15812 2.3125C4.33257 2.3125 3.66333 2.98174 3.66333 3.80729V16.1927C3.66333 17.0183 4.33257 17.6875 5.15812 17.6875H8.1477C8.97326 17.6875 9.6425 17.0183 9.6425 16.1927V3.80729C9.6425 2.98174 8.97326 2.3125 8.1477 2.3125H5.15812ZM4.94458 3.80729C4.94458 3.68936 5.04019 3.59375 5.15812 3.59375H8.1477C8.26564 3.59375 8.36125 3.68936 8.36125 3.80729V16.1927C8.36125 16.3106 8.26564 16.4062 8.1477 16.4062H5.15812C5.04019 16.4062 4.94458 16.3106 4.94458 16.1927V3.80729ZM12.8456 2.3125C12.0201 2.3125 11.3508 2.98174 11.3508 3.80729V16.1927C11.3508 17.0183 12.0201 17.6875 12.8456 17.6875H15.8352C16.6608 17.6875 17.33 17.0183 17.33 16.1927V3.80729C17.33 2.98174 16.6608 2.3125 15.8352 2.3125H12.8456ZM12.6321 3.80729C12.6321 3.68936 12.7277 3.59375 12.8456 3.59375H15.8352C15.9531 3.59375 16.0487 3.68936 16.0487 3.80729V16.1927C16.0487 16.3106 15.9531 16.4062 15.8352 16.4062H12.8456C12.7277 16.4062 12.6321 16.3106 12.6321 16.1927V3.80729Z"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.24905 3.69194C5.82218 3.45967 5.30225 3.76868 5.30225 4.25466V15.7452C5.30225 16.2312 5.82218 16.5402 6.24906 16.3079L16.8079 10.5626C17.2538 10.32 17.2538 9.67983 16.8079 9.4372L6.24905 3.69194ZM4.021 4.25466C4.021 2.79672 5.58078 1.86969 6.86142 2.56651L17.4203 8.31176C18.758 9.03966 18.758 10.9602 17.4203 11.6881L6.86143 17.4333C5.58079 18.1301 4.021 17.2031 4.021 15.7452V4.25466Z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          <div className="flex w-full flex-col md:flex-row mt-12 justify-between">
            <p className="md:text-[32px] text-[20px]  mb-8 md:mb-0 text-[#8b949e] max-w-3xl text-start">
              <strong className="text-white">
                Your backlog doesn't stand a chance.
              </strong>
              <br className="sm:block hidden" />
              Delegate open issues to GitHub Copilot
              <br className="sm:block hidden" /> and let your coding agent
              write, run, <br className="sm:block hidden" /> and test code in
              the background.
              <br className="sm:block hidden" />
              <a
                href="#"
                className="text-[#79c0ff] text-[16px] font-semibold mt-[48px]"
              >
                Preview GitHub Copilot coding agent
              </a>
            </p>
            <ul className="flex flex-col gap-4 max-w-[370px] text-start">
              <li className="text-white/40 text-[16px] w-full px-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:border-2 before:border-[#6e7681] before:rounded-full after:content-[''] after:absolute after:left-0.5 after:top-5 after:w-0.5 after:h-full  after:bg-[#6e7681] after:rounded-full">
                <span className="text-white">Deals with your issues</span>. When
                assigned issues, GitHub Copilot plans, writes, tests, and
                iterates—using GitHub Actions to run code and deliver
                ready-to-review pull requests.
              </li>
              <li className="text-white/40 text-[16px] w-full px-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:border-2 before:border-[#6e7681] before:rounded-full after:content-[''] after:absolute after:left-0.5 after:top-5 after:w-0.5 after:h-full  after:bg-[#6e7681] after:rounded-full">
                <span className="text-white">Codes like an insider</span>.
                GitHub Copilot hooks into MCP servers to draw on data from your
                repositories and external resources—working like an insider.
              </li>
              <li className="text-white/40 text-[16px] w-full px-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:border-2 before:border-[#6e7681] before:rounded-full ">
                <span className="text-white">Human and agent in the loop</span>.
                Comment to guide GitHub Copilot, polish your code for merge, or
                take over locally in your IDE.{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-12 gap-6 mt-12 md:mt-0 items-center">
          <div className="md:max-w-[360px] w-full">
            <h3 className="text-2xl font-bold text-white mb-4">
              Because two brains <br /> are better than one
            </h3>
            <p className="text-[#8b949e] mb-6 leading-relaxed ">
              Agent mode helps make sweeping changes by analyzing code,
              proposing edits, running tests, and validating results across
              multiple files.
            </p>
            <Link
              href="#"
              className="text-[#79c0ff] hover:text-[#b87fff] font-medium transition-colors"
            >
              Try agent mode →
            </Link>
          </div>
          <div className="rounded-lg md:p-8 bg-white  flex items-center justify-center w-full  ">
            <Image
              src="https://images.ctfassets.net/8aevphvgewt8/3xm4YeFKwKXwae8Me6KaN/f48fd69e12e13ff5b9293af038bf3c65/github-copilot-agent-mode.webp"
              alt="Agent Mode Demo"
              width={1920}
              height={1080}
              className="md:w-[653px] md:h-[435px] w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
