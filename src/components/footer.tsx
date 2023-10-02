import { FC } from "react"

import { Logo } from "./logo"

interface footerProps {}

export const Footer: FC<footerProps> = () => {
  return (
    <footer className="w-full px-[0.5rem] md:px-[3rem] py-0 md:py-32 bg-primary">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 justify-between items-start gap-16 py-12 md:py-0">
        <Logo mode="light" />

        <div className="flex flex-col gap-6">
          <p className="font-Sora text-white text-base font-semibold">Menu</p>

          <p className="font-WorkSans text-white text-base">Home</p>

          <p className="font-WorkSans text-white text-base">Converter</p>

          <p className="font-WorkSans text-white text-base">How it Works</p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-Sora text-white text-base font-semibold">
            About us
          </p>

          <p className="font-WorkSans text-white text-base">About</p>

          <p className="font-WorkSans text-white text-base">Contact Us</p>

          <p className="font-WorkSans text-white text-base">Privacy Policy</p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-Sora text-white text-base font-semibold">
            Screen Record
          </p>

          <p className="font-WorkSans text-white text-base">Browser Window</p>

          <p className="font-WorkSans text-white text-base">Desktop</p>

          <p className="font-WorkSans text-white text-base">Application</p>
        </div>
      </div>
    </footer>
  )
}
