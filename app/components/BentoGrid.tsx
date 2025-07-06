import React from "react";

export default function BentoGrid() {
  const imageSrc =
    "https://bentogrids.com/cdn-cgi/image/width=2048,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png";

  console.log("BentoGrid Image Source:", imageSrc);

  return (
    <figure>
      <img
        alt=""
        fetchPriority="high"
        width="2616"
        height="2296"
        decoding="async"
        data-nimg="1"
        className=""
        sizes="(max-width: 639px) calc(100vw - 64px), (max-width: 1136px) calc(100vw - 112px), 1024px"
        srcSet="https://bentogrids.com/cdn-cgi/image/width=256,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 256w, https://bentogrids.com/cdn-cgi/image/width=320,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 320w, https://bentogrids.com/cdn-cgi/image/width=384,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 384w, https://bentogrids.com/cdn-cgi/image/width=400,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 400w, https://bentogrids.com/cdn-cgi/image/width=450,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 450w, https://bentogrids.com/cdn-cgi/image/width=640,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 640w, https://bentogrids.com/cdn-cgi/image/width=700,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 700w, https://bentogrids.com/cdn-cgi/image/width=750,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 750w, https://bentogrids.com/cdn-cgi/image/width=800,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 800w, https://bentogrids.com/cdn-cgi/image/width=828,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 828w, https://bentogrids.com/cdn-cgi/image/width=960,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 960w, https://bentogrids.com/cdn-cgi/image/width=1024,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 1024w, https://bentogrids.com/cdn-cgi/image/width=1080,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 1080w, https://bentogrids.com/cdn-cgi/image/width=1200,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 1200w, https://bentogrids.com/cdn-cgi/image/width=1504,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 1504w, https://bentogrids.com/cdn-cgi/image/width=1920,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 1920w, https://bentogrids.com/cdn-cgi/image/width=2048,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/clte7sfvn0000i094jkfa42fh.png 2048w"
        src={imageSrc}
        style={{ color: "transparent" }}
      />
      <div
        className="absolute inset-0  transition-opacity duration-300 ease-linear  opacity-0"
        aria-hidden="true"
      ></div>
    </figure>
  );
}
