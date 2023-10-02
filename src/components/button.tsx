import { FC } from "react"

interface buttonProps {
  label: string
  icon?: "arrowRight"
  width?: "full" | "fit"
  size?: "lg" | "sm"
}

export const Button: FC<buttonProps> = ({
  label,
  icon,
  width = "fit",
  size = "lg",
}) => {
  const ICONS = {
    arrowRight: "/icons/arrow-right.svg",
  }

  return (
    <button
      className={`flex items-center justify-center gap-3 font-WorkSans text-base md:text-lg font-medium text-white px-6 ${
        size === "lg" ? "py-[18px] md:py-[22px]" : "py-3 md:py-4"
      } rounded-lg bg-primary hover:bg-primary-700 ${
        width === "fit" ? "w-fit" : "w-full"
      }`}
    >
      {label}
      {icon && <img src={ICONS[icon]} className="" />}
    </button>
  )
}
