import { FC } from "react"
import { Link } from "react-router-dom"

interface logoProps {
  showText?: boolean
  mode?: "light" | "dark"
}

export const Logo: FC<logoProps> = ({ showText = true, mode = "dark" }) => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 p-[10px]">
        <img
          src={mode === "light" ? "/assets/icon-white.svg" : "/assets/icon.svg"}
          className="w-10 h-10 object-contain"
          alt=""
        />

        {showText && mode === "dark" && (
          <p className="hidden md:inline-block font-Inter text-primary-600 text-base font-bold">
            HelpMeOut
          </p>
        )}

        {mode === "light" && (
          <p className="font-Inter text-white text-base font-bold">HelpMeOut</p>
        )}
      </div>
    </Link>
  )
}
