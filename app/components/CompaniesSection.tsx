import Marquee from "react-fast-marquee";

export default function Network() {
  return (
    <div>
      <div className="sm:flex max-w-7xl mx-auto mt-[2%] justify-center items-center flex-col pt-[3%] px-[5%]">
        <div className="flex sm:flex-row flex-col gap-7 items-center sm:mt-[-10px] sm:mb-[40px]">
          <Marquee className="mq" direction="left" speed={120}>
            <img
              className="w-[100px] mr-5"
              src={"/Asset 4.png"}
              alt="buildorz"
            />

            {/* <img
              className="w-[100px] mr-5"
              src={"/Asset 5.png"}
              alt="buildorz"
            />

            <img
              className="w-[100px] mr-5"
              src={"/Asset 7.png"}
              alt="buildorz"
            /> */}
            <img
              className="w-[150px] mr-5"
              src={"/Asset 4.png"}
              alt="buildorz"
            />
            <img
              className="w-[100px] mr-5"
              src={"/Asset 6.png"}
              alt="buildorz"
            />

            {/* <img
              className="w-[100px] mr-5"
              src={"/Asset 5.png"}
              alt="buildorz"
            /> */}

            <img
              className="w-[100px] mr-5"
              src={"/Asset 7.png"}
              alt="buildorz"
            />
            <img
              className="w-[150px] mr-5"
              src={"/Asset 4.png"}
              alt="buildorz"
            />
            <img
              className="w-[100px] mr-5"
              src={"/Asset 6.png"}
              alt="buildorz"
            />
{/* 
            <img
              className="w-[100px] mr-5"
              src={"/Asset 5.png"}
              alt="buildorz"
            /> */}

            <img
              className="w-[100px] mr-5"
              src={"/Asset 7.png"}
              alt="buildorz"
            />
            <img
              className="w-[150px] mr-5"
              src={"/Asset 4.png"}
              alt="buildorz"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
}
