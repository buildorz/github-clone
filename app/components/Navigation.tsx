"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCopilotSubNavOpen, setCopilotSubNavOpen] = useState(false);

  const subNavLinks = (
    <>
      <Link
        href="#"
        className="text-gray-400 hover:text-white transition-colors"
      >
        For business
      </Link>
      <Link
        href="#"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Extensions
      </Link>
      <Link
        href="#"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Tutorials
      </Link>
      <Link
        href="#"
        className="text-gray-400 hover:text-white transition-colors"
      >
        What's new
      </Link>
      <Link href="#" className="text-white font-semibold">
        Plans & pricing
      </Link>
    </>
  );

  return (
    <div className="bg-black text-white">
      <nav className="px-4 py-3 sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/">
                <Image
                  src="https://github.githubassets.com/assets/github-dae1693fc0e0.svg"
                  alt="GitHub Logo"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="#"
                className="flex items-center text-white hover:text-gray-400 transition-colors font-semibold"
              >
                Product <ChevronDown size={16} className="ml-1" />
              </Link>
              <Link
                href="#"
                className="flex items-center text-white hover:text-gray-400 transition-colors font-semibold"
              >
                Solutions <ChevronDown size={16} className="ml-1" />
              </Link>
              <Link
                href="#"
                className="flex items-center text-white hover:text-gray-400 transition-colors font-semibold"
              >
                Resources <ChevronDown size={16} className="ml-1" />
              </Link>
              <Link
                href="#"
                className="flex items-center text-white hover:text-gray-400 transition-colors font-semibold"
              >
                Open Source <ChevronDown size={16} className="ml-1" />
              </Link>
              <Link
                href="#"
                className="flex items-center text-white hover:text-gray-400 transition-colors font-semibold"
              >
                Enterprise <ChevronDown size={16} className="ml-1" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-400 transition-colors font-semibold"
              >
                Pricing
              </Link>
            </div>
          </div>

          <Link href="/" className="md:hidden">
            <Image
              src="https://github.githubassets.com/assets/github-dae1693fc0e0.svg"
              alt="GitHub Logo"
              width={32}
              height={32}
            />
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white p-2 rounded-md bg-[#b1bac4]/25 border border-gray-600 hover:bg-gray-800">
                <Search size={16} />
              </button>
              <div className="h-6 border-l border-gray-600"></div>
              <button className="text-white text-sm px-3 py-1 rounded-md border border-gray-600 hover:bg-gray-800">
                Dashboard
              </button>
              <Image
                src="https://avatars.githubusercontent.com/u/10?v=4"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div className="md:hidden">
              <button className="text-white text-sm px-3 py-1 rounded-md border border-gray-600 hover:bg-gray-800">
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <MobileNavigation closeMenu={() => setMobileMenuOpen(false)} />
      )}
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Desktop Sub-Nav */}
        <div className="hidden md:flex items-center space-x-4 py-3 border-t border-gray-800">
          <h2 className="text-xl font-semibold text-white">GitHub Copilot</h2>
          <span className="text-gray-500">/</span>
          <div className="flex items-center space-x-6 text-sm">
            {subNavLinks}
          </div>
        </div>

        {/* Mobile Sub-Nav */}
        <div className="md:hidden border-t border-gray-800">
          <button
            onClick={() => setCopilotSubNavOpen(!isCopilotSubNavOpen)}
            className="w-full flex justify-between items-center py-3"
          >
            <h2 className="text-xl font-semibold text-white">GitHub Copilot</h2>
            <ChevronDown
              className={`transition-transform duration-200 ${
                isCopilotSubNavOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isCopilotSubNavOpen && (
            <div className="pb-4 flex flex-col items-start space-y-4 text-sm">
              {subNavLinks}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
