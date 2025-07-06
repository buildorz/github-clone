import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Video/Image */}
      <div className="absolute md:inset-0   w-full h-[430px] md:h-[1030px] object-cover">
        <Image
          src="https://github.githubassets.com/assets/hero-bg-desktop-6cb381873ba2.webp"
          alt="Hero Section"
          width={1480}
          height={830}
          className=" relative w-[1480px] h-full mx-auto  top-[12%] object-cover md:block hidden"
        />
        <Image
          src="https://github.githubassets.com/assets/hero-bg-mobile-b65c4e4cee99.webp"
          alt="Hero Section"
          width={768}
          height={430}
          className=" relative w-full h-full mx-auto top-[80%] object-cover block md:hidden"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="text-center px-4 sm:px-0">
          <div className="inline-flex items-center p-[1px]  rounded-full relative text-sm font-medium  isolate bg-gradient-to-r from-[#3fb950] via-[#553098] to-[#1158c7] text-white mb-6">
            <div className=" w-full bg-black h-full rounded-full px-3 py-1">
              <span className="relative z-10">
                Now supercharged with agent mode
              </span>
            </div>
          </div>
          <h1 className="text-[36px] md:text-6xl font-bold text-white mb-8 leading-tight">
            AI that builds <br className="sm:hidden" /> with you
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-8 sm:px-0">
            <Link
              href="#"
              className="bg-white text-black flex justify-center items-center py-3  rounded-lg sm:w-[200px] w-full hover:bg-[#2ea043] font-semibold transition-colors"
            >
              Get started for free
            </Link>
            <Link
              href="#"
              className=" bg-white/10 font-semibold text-white flex justify-center items-center py-2 rounded-lg sm:w-[200px] w-full hover:bg-[#21262d]  transition-colors"
            >
              See plans
            </Link>
          </div>
          <p className="text-sm mt-5 text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Already have Visual Studio Code?{" "}
            <Link
              href="#"
              className=" hover:text-[#b87fff] font-medium transition-colors"
            >
              Open now
            </Link>
          </p>
        </div>
        <div className="relative z-10 mt-20 bg-white/15 rounded-[15px] border-2 border-white/40 p-1 -right-2 sm:right-0">
          {/* Desktop Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full sm:h-full h-[438px] object-cover rounded-[10px] hidden sm:block"
            poster="https://images.ctfassets.net/8aevphvgewt8/7xenBC7iqpKfe5tXk9TKby/caf78ec4e1918cf82681613fcb7e9468/hero-poster-lg.webp"
          >
            <source
              src="//videos.ctfassets.net/8aevphvgewt8/5R57iyx96ENtWp4nOHBsAl/f935b264e79099bd8ed54e2d74db7ab5/hero-animation-lg.mp4"
              type="video/mp4"
            />
          </video>

          {/* Mobile Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full sm:h-full h-[438px] object-cover rounded-[10px] block sm:hidden"
            poster="//images.ctfassets.net/8aevphvgewt8/7xenBC7iqpKfe5tXk9TKby/caf78ec4e1918cf82681613fcb7e9468/hero-poster-lg.webp"
          >
            <source
              src="//videos.ctfassets.net/8aevphvgewt8/1IDKHmC5WpUvnQWCkxRKzK/39ff304fd1e32d393e2cb43de6cdf020/hero-animation-sm.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}