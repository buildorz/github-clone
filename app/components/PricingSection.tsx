"use client";

import Link from "next/link";
import { useState } from "react";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("individuals");

  const CheckmarkIcon = () => (
    <svg
      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 text-white border border-white ">
            Plans
          </div>
          <h2 className="text-4xl font-medium text-white mb-4">
            Take flight with GitHub Copilot
          </h2>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full shadow-sm  border border-[#30363d] p-1 space-x-1">
            <button
              onClick={() => setActiveTab("individuals")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === "individuals"
                  ? "bg-[#238636] text-white"
                  : "text-[#8b949e] hover:bg-[#21262d]"
              }`}
            >
              For individuals
            </button>
            <button
              onClick={() => setActiveTab("businesses")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === "businesses"
                  ? "bg-[#238636] text-white"
                  : "text-[#8b949e] hover:bg-[#21262d]"
              }`}
            >
              For businesses
            </button>
          </div>
        </div>

        {activeTab === "businesses" ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Business Plan */}
            <div className=" rounded-lg p-8 border border-[#30363d]">
              <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
              <p className="text-[#8b949e] mb-4 h-10">
                Accelerate workflows with GitHub Copilot.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-[#8b949e] ml-1">USD</span>
                <p className="text-[#8b949e]">per user / month</p>
              </div>
              <Link
                href="#"
                className="block w-full bg-[#238636] text-white text-center py-3 rounded-md hover:bg-[#2ea043] font-medium mb-3 transition-colors"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="block w-full bg-transparent text-white text-center py-3 rounded-md hover:bg-[#21262d] border border-[#30363d] font-medium transition-colors"
              >
                Contact sales
              </Link>
              <div className="space-y-3 mt-6">
                <p className="font-medium text-white">What's included:</p>
                <ul className="space-y-2 text-[#8b949e]">
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      Unlimited agent mode and chats with GPT-4.1
                      <sup className="text-xs">1</sup>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>Unlimited code completions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      Access to code review, Claude 3.5/3.7/4 Sonnet, Gemini 2.5
                      Pro, and more
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      300 premium requests to use latest models per user, with
                      the option to buy more<sup className="text-xs">2</sup>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>User management and usage metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>IP indemnity and data privacy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className=" rounded-lg p-8 border border-[#30363d] relative">
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#1f6feb] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Best value
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-[#8b949e] mb-4 h-10">
                Scale with AI agents and comprehensive model access.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$39</span>
                <span className="text-[#8b949e] ml-1">USD</span>
                <p className="text-[#8b949e]">per user / month</p>
              </div>
              <Link
                href="#"
                className="block w-full bg-[#238636] text-white text-center py-3 rounded-md hover:bg-[#2ea043] font-medium mb-3 transition-colors"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="block w-full bg-transparent text-white text-center py-3 rounded-md hover:bg-[#21262d] border border-[#30363d] font-medium transition-colors"
              >
                Contact sales
              </Link>
              <div className="space-y-3 mt-6">
                <p className="font-medium text-white">
                  Everything in Business and:
                </p>
                <ul className="space-y-2 text-[#8b949e]">
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      Access to all models, including Claude Opus 4, o3, and
                      GPT-4.5
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      3.33x more premium requests than Business to use the
                      latest models, with the option to buy more
                      <sup className="text-xs">2</sup>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>Coding agent (preview)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3  max-w-7xl mx-auto">
            {/* Free Plan */}
            <div className=" rounded-l-lg p-8 border border-[#30363d]">
              <h3 className="text-2xl font-bold text-white mb-6">Free</h3>
              <p className="text-[#8b949e] mb-10 h-10">
                A fast way to get started with GitHub Copilot.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-[#8b949e] ml-1">USD</span>
                <p className="text-[#8b949e]">&nbsp;</p>
              </div>
              <Link
                href="#"
                className="block w-full bg-[#238636] text-white text-center py-3 rounded-md hover:bg-[#2ea043] font-medium mb-2 transition-colors"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="block w-full bg-[#30363d] text-white text-center py-3 rounded-md hover:bg-[#484f58] font-medium mb-6 transition-colors"
              >
                Open in VS Code
              </Link>
              <hr className="my-6 border-white/10 w-full h-[1px]" />
              <div className="space-y-5">
                <p className="font-medium text-white">What's included:</p>
                <ul className="space-y-2 text-[#8b949e]">
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>50 agent mode or chat requests per month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>2,000 completions per month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>Access to Claude 3.5 Sonnet, GPT-4.1, and more</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="  p-8 border-2 border-[#30363d] relative">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-4">
                Pro{" "}
                <div className="">
                  <div className="bg-[#56d364] text-white p-0.5 rounded-full text-sm font-medium">
                    <span className="bg-black w-full h-full  px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                </div>
              </h3>
              <p className="text-[#8b949e] mb-4 h-10">
                Unlimited completions and chats with access to more models.
              </p>
              <div className="mb-16">
                <span className="text-4xl font-bold text-white">$10</span>
                <span className="text-[#8b949e] ml-1">USD</span>
                <p className="text-[#8b949e]">per month or $100 per year</p>
              </div>
              <Link
                href="#"
                className="block w-full bg-[#238636] text-white text-center py-3 rounded-md  font-medium mb-2 transition-colors"
              >
                Try for 30 days free
              </Link>
              <Link
                href="#"
                className="block w-full opacity-0 pointer-events-none bg-[#238636] text-white text-center py-3 rounded-md  font-medium mb-2 transition-colors"
              >
                Try for 30 days free
              </Link>

              <hr className="my-6 border-white/10 w-full h-[1px]" />
              <div className="space-y-5">
                <p className="font-medium text-white">
                  Everything in Free and:
                </p>
                <ul className="space-y-2 text-[#8b949e]">
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      Unlimited agent mode and chats with GPT-4.1
                      <sup className="text-xs">1</sup>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>Unlimited code completions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      Access to code review, Claude 3.7/4 Sonnet, Gemini 2.5
                      Pro, and more
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      6x more premium requests than Copilot Free to use the
                      latest models, with the option to buy more
                      <sup className="text-xs">2</sup>
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-[#8b949e] pt-4">
                  Free for verified students, teachers, and maintainers of
                  popular open source projects.{" "}
                  <Link href="#" className="text-[#58a6ff] hover:underline">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>

            {/* Pro+ Plan */}
            <div className=" rounded-r-lg p-8 border border-[#30363d]">
              <h3 className="text-2xl font-bold text-white mb-6">Pro+</h3>
              <p className="text-[#8b949e] mb-10 h-10">
                Maximum flexibility and model choice.
              </p>
              <div className="mb-3">
                <span className="text-4xl font-bold text-white">$39</span>
                <span className="text-[#8b949e] ml-1">USD</span>
                <p className="text-[#8b949e]">per month or $390 per year</p>
              </div>
              <Link
                href="#"
                className="block w-full bg-[#238636] text-white text-center py-3 rounded-md hover:bg-[#2ea043] font-medium mb-2 transition-colors"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="block pointer-events-none opacity-0 w-full bg-[#238636] text-white text-center py-3 rounded-md  font-medium transition-colors"
              >
                Try for 30 days free
              </Link>
              <div className="py-3 mb-6"></div>
              <hr className="my-6 border-white/10 w-full h-[1px]" />
              <div className="space-y-5">
                <p className="font-medium text-white">Everything in Pro and:</p>
                <ul className="space-y-2 text-[#8b949e]">
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      Access to all models, including Claude Opus 4, o3, and
                      GPT-4.5
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>
                      30x more premium requests than Copilot Free to use the
                      latest models, with the option to buy more
                      <sup className="text-xs">2</sup>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkIcon />
                    <span>Coding agent (preview)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
