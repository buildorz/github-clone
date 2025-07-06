import Image from "next/image";

export default function NextEditSuggestionsSection() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:gap-12 gap-6 items-center">
          <div className="max-w-[360px]">
            <h3 className="text-2xl font-bold text-white mb-4">
              Make one change. GitHub Copilot handles the rest.
            </h3>
            <p className="text-[#8b949e] mb-6 leading-relaxed">
              Next edit suggestions reveal the ripple effects of your changes
              across your project—helping you keep everything consistent.
            </p>
            <br />
            <a
              href="#"
              className="text-[#79c0ff] hover:text-[#388bfd] font-medium transition-colors"
            >
              Try next edit suggestions →
            </a>
          </div>
          <div className="rounded-lg p-8  flex items-center justify-center  ">
            <Image
              src="https://images.ctfassets.net/8aevphvgewt8/11f2wKcDICAdlSFayGMnLn/a36db611e0d2050610450a4fe2cb38e3/github-copilot-next-edit-suggestions.webp"
              alt="Next Edit Suggestions"
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
