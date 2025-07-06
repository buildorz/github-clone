import Image from "next/image";

export default function IDESupportSection() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className=" font-medium text-white/60 mb-4">
            GitHub Copilot is available on your favorite platforms:
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col items-center space-y-4 p-3 rounded-lg  border border-[#30363d]">
            <Image
              src="https://github.githubassets.com/assets/github-dae1693fc0e0.svg"
              alt="GitHub"
              width={48}
              height={48}
              className="opacity-60"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 rounded-lg  border border-[#30363d]">
            <Image
              src="https://github.githubassets.com/assets/vscode-41ed661450e9.svg"
              alt="VS Code"
              width={48}
              height={48}
              className="opacity-60"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 rounded-lg  border border-[#30363d]">
            <Image
              src="https://github.githubassets.com/assets/visualstudio-7b2c255a778e.svg"
              alt="Visual Studio"
              width={48}
              height={48}
              className="opacity-60"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 rounded-lg  border border-[#30363d]">
            <Image
              src="https://github.githubassets.com/assets/xcode-b8ad451a19a6.svg"
              alt="Xcode"
              width={48}
              height={48}
              className="opacity-60"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 rounded-lg  border border-[#30363d]">
            <Image
              src="https://github.githubassets.com/assets/jetbrains-logo-f47fa4bb0b1d.svg"
              alt="JetBrains"
              width={48}
              height={48}
              className="opacity-60"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 rounded-lg  border border-[#30363d]">
            <Image
              src="https://github.githubassets.com/assets/neovim-c63bac91528a.svg"
              alt="Neovim"
              width={48}
              height={48}
              className="opacity-60"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 rounded-lg  border border-[#30363d]">
            <Image
              src="https://github.githubassets.com/assets/azure-e978ccb08351.svg"
              alt="Azure"
              width={48}
              height={48}
              className="opacity-60"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 p-3 rounded-lg  border border-[#30363d]">
            <Image
              src="https://github.githubassets.com/assets/eclipse-b96fa7bd534b.svg"
              alt="Eclipse"
              width={48}
              height={48}
              className="opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
