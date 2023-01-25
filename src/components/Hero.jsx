import { useState } from "react";

function Hero() {
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState("");

  return (
    <section className="h-[100vh] ">
      {/**Clip Path */}
      <div className="top-0 absolute bg-csky z-[-1] clip-path  w-full h-full"></div>

      {/**Actual Content*/}
      <div className=" asm:pt-0 py-8 my-[78px] w-5/6 mx-auto flex sm:flex-col justify-between ">
        {/**Left-Side */}
        <div className=" sm:w-full w-2/5 flex  flex-col gap-8 pt-12  items-start sm:items-center ">
          <div className="text-start sm:text-center">
            <span className=" font-bold pb-3 text-5xl text-transparent bg-clip-text bg-text italic sm:bg-sm-text sm:hidden">
              361° <br />
            </span>
            <h1 className="  md:text-3xl text-4xl  font-Anton mt-3 italic ">
              Nike Air Max Pro Sneakers Dynamic Fit.
            </h1>
            <h3 className="bg-bg font-Anton italic leading-[50px]  md:text-3xl text-4xl mt-2  mr-20 lg:mr-12 md:mr-7 sm:hidden  ">
              Be Ready for Today's World...
            </h3>

            <h3 className="bg-bg  italic  text-xl mt-3    sm:block hidden px-8 mx-4 ">
              Three Body X 361º, Be Ready for Today's World...
            </h3>
            <p className="pt-5  sm:hidden">
              Three Body X 361º | Running Shoes - ElWafy, A Breakthrough Lacing
              System that Adjusts to The Shape of Your Foot. With Our Intuitive
              Design Every Step Taking You Closer to Your Personal Goal. A True
              Nod to The Past with At Least 20% Recycled Material By Weight.
            </p>
          </div>
          <div className="flex gap-8 items-center md:mt-0 my-3 sm:my-3 ">
            <a
              href="#hero"
              className="bg-cblue text-cgray font-bold px-7 py-3 sm:text-sm sm:px-5 rounded-sm active:scale-90 transition-all duration-100 ease-in-out hover:bg-hover shadow-sm  shadow-cblue "
            >
              Add To Bag
            </a>
            <p className="  font-bold ">$149.99</p>
          </div>
        </div>

        {/**Right-Side */}
        <div className="relative sm:w-full w-3/5 asm:mt-24 sm:mt-5 ">
          <div className="absolute  flex  right-1/4 sm:right-20  ss:right-0   ">
            <img
              className="z-[-1] opacity-[7%] sm:hidden "
              src="../assets/Just-Do-It.png"
              alt=""
            />
            <img
              className="z-[-1] opacity-[7%] sm:block ss:w-5/6 hidden"
              src="../assets/Just-Do-It-h.png"
              alt=""
            />
          </div>

          <div className="  flex flex-col items-center  sm:hover:rotate-0 hover:rotate-[62deg] transition duration-700 mr-[60px]   ">
            <img
              className=" z-[-1] sm:hidden -rotate-[17deg]  cursor-pointer "
              src="../assets/hero.svg"
              alt="hero"
            />
            <img
              className=" z-[-1] sm:block hidden  cursor-pointer"
              src="../assets/hero small.svg"
              alt="hero"
            />
            {/**Videos */}
            <div className="flex gap-4 translate-x-40 -translate-y-60 md:translate-x-28 md:-translate-y-44 sm:translate-x-0 sm:-translate-y-0 rotate-[118deg] sm:rotate-0 sm:-mt-2">
              {/**video 1 */}

              <div className="relative overflow-hidden group cursor-pointer transition-all duration-300">
                <img
                  className="absolute sm:top-[26.6%] sm:right-[32.5%] asm:top-[26.6%] asm:right-[37.5%] top-[32.6%] right-[37.5%] z-10 sm:rotate-180 active:scale-100 transition-all duration-100 ease-in-out hover:scale-90 "
                  src="../assets/play-icon-grey.svg"
                  alt="play-icon"
                  onClick={() => {
                    setShow(!show);
                    setSrc("clip-1.mp4");
                  }}
                />

                <img
                  className="w-28 asm:w-24 sm:w-20   sm:rotate-180  rounded-md  "
                  src="../assets/video/vcover1.png"
                  alt="vcover1"
                />
                <video
                  src="../assets/video/clip-1.mp4"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  type="video/mp4"
                  className="absolute right-0 top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 rounded-md rotate-180 sm:rotate-0  "
                />
              </div>

              {/**video 2 */}

              <div className="relative overflow-hidden group cursor-pointer transition-all duration-300">
                <img
                  className="absolute sm:top-[26.6%] sm:right-[32.5%] asm:top-[26.6%] asm:right-[37.5%] top-[32.6%] right-[37.5%] z-10 sm:rotate-180 active:scale-100 transition-all duration-100 ease-in-out hover:scale-90"
                  src="../assets/play-icon-blue.svg"
                  alt="play-icon"
                  onClick={() => {
                    setShow(!show);
                    setSrc("clip-2.mp4");
                  }}
                />

                <img
                  className="w-28 asm:w-24 sm:w-20  sm:rotate-180  rounded-md  "
                  src="../assets/video/vcover2.png"
                  alt="vcover1"
                />
                <video
                  src="../assets/video/clip-2.mp4"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  type="video/mp4"
                  className="absolute right-0 top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 rounded-md rotate-180 sm:rotate-0 "
                />
              </div>

              {/**video 3 */}

              <div className="relative overflow-hidden group cursor-pointer transition-all duration-300">
                <img
                  className="absolute sm:top-[26.6%] sm:right-[32.5%] asm:top-[26.6%] asm:right-[37.5%] top-[32.6%] right-[37.5%] z-10 sm:rotate-180 active:scale-100 transition-all duration-100 ease-in-out hover:scale-90 "
                  src="../assets/play-icon-green.svg"
                  alt="play-icon"
                  onClick={() => {
                    setShow(!show);
                    setSrc("clip-3.mp4");
                  }}
                />

                <img
                  className="w-28 asm:w-24 sm:w-20  sm:rotate-180  rounded-md  "
                  src="../assets/video/vcover3.png"
                  alt="vcover1"
                />
                <video
                  src="../assets/video/clip-3.mp4"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  type="video/mp4"
                  className="absolute right-0 top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 rounded-md rotate-180 sm:rotate-0 "
                />
              </div>
            </div>
          </div>
        </div>

        {/**Video-Placeholder */}

        {show && (
          <div
            onClick={() => setShow(!show)}
            className="absolute top-0 right-0  flex justify-center items-center w-full h-full z-0  overlay "
          >
            <video
              id="my-video"
              src={`../assets/video/${src}`}
              controls
              preload="auto"
              width="640"
              height="264"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
