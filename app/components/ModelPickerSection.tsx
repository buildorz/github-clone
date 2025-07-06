import Image from "next/image";

export default function ModelPickerSection() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 md:gap-12 gap-6 items-center">
          <div className="max-w-[360px]">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get speed when you need it. Depth when you don't.
            </h3>
            <p className="text-[#8b949e] mb-6 leading-relaxed">
              Swap between models like{" "}
              <a
                href="https://www.anthropic.com/news/claude-3-7-sonnet"
                className="text-[#79c0ff] hover:text-[#388bfd] font-medium mr-1 transition-colors"
              >
                Claude 3.7 Sonnet
              </a>
              OpenAI o1 , and Google Gemini 2.0 Flash to crush coding tasks fast
              or go deep when it counts.
            </p>
          </div>
          <div className="">
            <Image
              src="https://images.ctfassets.net/8aevphvgewt8/SZzlMX8i6u1JBI497nKNL/39e00b093683ece9855b9d702b326edc/github-copilot-model-picker.webp"
              alt="Model Picker"
              width={708}
              height={472}
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
