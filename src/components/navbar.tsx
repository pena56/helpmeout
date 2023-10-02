import { FC } from "react"
import { Link } from "react-router-dom"

import { Logo } from "./logo"

interface navbarProps {}

export const Navbar: FC<navbarProps> = () => {
  return (
    <nav className="w-full px-[0.5rem] md:px-[3rem] py-2 md:py-3 border-b-2 border-[#F4F6F8] bg-white">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-10 py-[10px] px-5">
          <p className="font-WorkSans text-base font-medium text-black">
            Features
          </p>

          <p className="font-WorkSans text-base font-medium text-black">
            How It Works
          </p>
        </div>

        <Link to="/login">
          <button className="text-primary rounded-md px-[10px] py-3 font-Sora text-lg font-semibold">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  )
}
