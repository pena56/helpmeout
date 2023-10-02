import { FC } from "react"
import { Link } from "react-router-dom"

import { Button } from "./button"

interface bannerProps {}

export const Banner: FC<bannerProps> = () => {
  return (
    <div className="w-full px-[0.5rem] md:px-[3rem] py-0 md:py-32 bg-white mb-14">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-7 pb-10 md:">
        <div className="w-full md:w-[50%] flex flex-col gap-12 py-10 md:py-0">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#141414] font-Sora text-5xl md:text-6xl font-bold">
              Show Them Don't Just Tell
            </h1>

            <p className="font-Inter text-black/75 text-lg md:text-xl">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
          </div>

          <Link to="/file/85765367890876">
            <Button label="Install HelpMeOut" icon="arrowRight" />
          </Link>
        </div>

        <div className="w-full md:w-[50%] h-[320px] md:h-[448px]">
          <div className="w-full h-[320px] md:h-[448px] flex gap-5">
            <div className="w-[50%] h-[320px] md:h-[448px] flex flex-col gap-5 rounded-lg relative">
              <div className="absolute bottom-[-20px] md:bottom-[-58px] right-[28px] w-full h-[330px] z-0">
                <img
                  src="/icons/bottom-grid.svg"
                  className="absolute bottom-0 left-0 z-10"
                  alt=""
                />
              </div>

              <img
                src="/images/banner1.png"
                className="w-full h-[50%] object-cover rounded-lg relative z-20"
                alt=""
              />

              <img
                src="/images/banner2.png"
                className="w-full h-[50%] object-cover rounded-lg relative z-20"
                alt=""
              />
            </div>
            <div className="w-[50%] h-[320px] md:h-[448px] relative z-10">
              <div className="absolute top-[-20px] md:top-[-58px] left-[8px] md:left-[28px] w-full h-[330px] z-0">
                <img
                  src="/icons/top-grid.svg"
                  className="absolute top-0 right-0 z-10"
                  alt=""
                />
              </div>

              <div className="w-full h-full z-20 relative">
                <img
                  src="/images/banner3.png"
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
