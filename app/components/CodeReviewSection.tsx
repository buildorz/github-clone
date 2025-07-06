import Image from "next/image";
import Link from "next/link";

export default function CodeReviewSection() {
  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-[360px]">
            <h3 className="text-2xl font-bold text-white mb-4">
              Your code's guardian angel
            </h3>
            <p className="text-[#8b949e] mb-6 leading-relaxed">
              GitHub Copilot performing a code review. In an active popover
              where reviewers can be requested, Copilot is selected.
            </p>
            <Link
              href="#"
              className="text-[#79c0ff] hover:text-[#b87fff] font-medium transition-colors"
            >
              Discover code review →
            </Link>
          </div>
          <div className="rounded-lg md:p-8  flex items-center justify-center  ">
            <Image
              src="https://images.ctfassets.net/8aevphvgewt8/3rJsQY9gZvpJclmyFa8UFb/58d010b0ea1e2ddea3c703c342917909/github-copilot-code-review.webp"
              alt="Code Review"
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
