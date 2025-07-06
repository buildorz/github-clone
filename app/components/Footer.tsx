import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex flex-col lg:flex-row justify-between gap-8">
          <div className="space-y-4 max-w-xs">
            <Link href={"/"}>
              <FaGithub className="h-8 w-8 mb-4" />
            </Link>
            <h2 className="font-bold text-lg">
              Subscribe to our developer newsletter
            </h2>
            <p className="text-[#8b949e]">
              Get tips, technical guides, and best practices. Twice a month.
            </p>
            <button className="border border-[#30363d] rounded-md px-4 py-2 text-sm font-medium hover:border-blue-500 transition-colors w-full text-left">
              Subscribe
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-[#8b949e]">Product</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Copilot
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    AI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Compare GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#8b949e]">Platform</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Developer API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    GitHub CLI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    GitHub Desktop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    GitHub Mobile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#8b949e]">Support</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Community Forum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Professional Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Premium Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Contact GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#8b949e]">Company</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Why GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Customer stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    The ReadME Project
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Inclusion
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Social Impact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#010409] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between items-center text-xs text-[#8b949e]">
          <div className="flex flex-wrap items-center space-x-4 mt-4 md:mt-0">
            <span>© 2024 GitHub, Inc.</span>
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy (Updated 02/2024)
            </Link>
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
            <Link href="#" className="hover:underline">
              What is Git?
            </Link>
            <Link href="#" className="hover:underline">
              Manage cookies
            </Link>
            <Link href="#" className="hover:underline">
              Do not share my personal information
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <FaYoutube className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="X">
              <FaXTwitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="TikTok">
              <FaTiktok className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitch">
              <FaTwitch className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <FaGithub className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
