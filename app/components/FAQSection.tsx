"use client";

import { useState } from "react";

const faqData = [
  {
    category: "General",
    items: [
      {
        question: "What is GitHub Copilot?",
        answer:
          "GitHub Copilot is an AI pair programmer that offers autocomplete-style suggestions as you code. You can receive suggestions from GitHub Copilot either by starting to write the code you want to use, or by writing a natural language comment describing what you want the code to do.",
      },
      {
        question: "Who is eligible to access GitHub Copilot for free?",
        answer:
          "Verified students, teachers, and maintainers of popular open-source projects are eligible to use GitHub Copilot for free.",
      },
      {
        question:
          "What languages, IDEs, and platforms does GitHub Copilot support?",
        answer:
          "GitHub Copilot is trained on all languages that appear in public repositories. It's available as an extension in Visual Studio Code, Visual Studio, Vim, Neovim, the JetBrains suite of IDEs, and Azure Data Studio.",
      },
      {
        question: 'Does GitHub Copilot "copy/paste"?',
        answer:
          "GitHub Copilot is a code synthesizer, not a search engine. The vast majority of the code that it suggests is synthesized and has not been seen before. It is designed to generate new code, including unique combinations and applications of existing code patterns.",
      },
      {
        question:
          "What are the differences between the GitHub Copilot Business, GitHub Copilot Enterprise, and GitHub Copilot Individual plans?",
        answer:
          "GitHub Copilot Individual is for personal use. GitHub Copilot Business includes organization-level policy management, and GitHub Copilot Enterprise offers even more customization and control for large organizations.",
      },
      {
        question: "What data has GitHub Copilot been trained on?",
        answer:
          "GitHub Copilot is trained on a selection of English language and source code from publicly available sources, including code in public repositories on GitHub.",
      },
    ],
  },
  {
    category: "Plans & pricing",
    items: [
      {
        question: "How much does GitHub Copilot cost?",
        answer:
          "GitHub Copilot offers different pricing plans for individuals, businesses, and enterprises. Please visit the official GitHub Copilot pricing page for the most up-to-date information.",
      },
      {
        question: "Is there a trial version?",
        answer:
          "Yes, GitHub Copilot typically offers a free trial for new users to experience its features before committing to a paid plan.",
      },
    ],
  },
  {
    category: "Privacy",
    items: [
      {
        question: "How does GitHub Copilot handle my code?",
        answer:
          "GitHub Copilot transmits snippets of your code from your IDE to GitHub to provide and improve the service. Your code is not stored or used for any other purpose.",
      },
      {
        question: "Can I use GitHub Copilot with private repositories?",
        answer:
          "Yes, GitHub Copilot can be used with both public and private repositories. Your private code remains private.",
      },
    ],
  },
  {
    category: "Responsible AI",
    items: [
      {
        question: "How does GitHub ensure Copilot is used responsibly?",
        answer:
          "GitHub is committed to developing AI responsibly. We have implemented filters to block offensive words and to avoid suggesting code in the context of sensitive topics. We are continuously working on improving these systems.",
      },
      {
        question:
          "Can GitHub Copilot introduce insecure code in its suggestions?",
        answer:
          "Public code may contain insecure coding patterns. GitHub Copilot has filters to block or notify users of insecure code patterns, but it is still the developer's responsibility to write secure code.",
      },
    ],
  },
];

function AccordionItem({
  item,
}: {
  item: { question: string; answer: string };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#30363d] py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg text-white">{item.question}</h3>
        <svg
          className={`w-6 h-6 text-purple-400 transform transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      {isOpen && (
        <p className="text-[#8b949e] leading-relaxed mt-4">{item.answer}</p>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(
    null
  );

  const handleMobileCategoryToggle = (category: string) => {
    setOpenMobileCategory((prev) => (prev === category ? null : category));
  };

  const activeCategoryData = faqData.find(
    (data) => data.category === activeCategory
  );

  return (
    <section className="py-20  min-h-dvh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold  text-white mb-4">
            Frequently <br /> asked questions
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex md:space-x-12">
          <div className="w-1/3">
            <ul className="space-y-2">
              {faqData.map((data) => (
                <li key={data.category}>
                  <button
                    onClick={() => setActiveCategory(data.category)}
                    className={`w-full text-left px-4 py-3 rounded-md text-lg transition-colors duration-200 ${
                      activeCategory === data.category
                        ? "bg-[#161b22] text-white font-semibold"
                        : "text-[#8b949e] hover:bg-[#161b22] hover:text-white"
                    }`}
                  >
                    {data.category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 min-h-dvh">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {activeCategory}
            </h3>
            {activeCategoryData &&
              activeCategoryData.items.map((item, index) => (
                <AccordionItem key={index} item={item} />
              ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {faqData.map((categoryData) => (
            <div
              key={categoryData.category}
              className="border-b-4 border-white"
            >
              <button
                onClick={() =>
                  handleMobileCategoryToggle(categoryData.category)
                }
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <h3 className="text-xl text-white font-semibold">
                  {categoryData.category}
                </h3>
                <svg
                  className={`w-5 h-5 text-white transform transition-transform ${
                    openMobileCategory === categoryData.category
                      ? "rotate-180"
                      : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openMobileCategory === categoryData.category && (
                <div className="pb-6">
                  {categoryData.items.map((item, index) => (
                    <AccordionItem key={index} item={item} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
