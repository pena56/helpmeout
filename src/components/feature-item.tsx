import { FC } from "react"

interface featureItemProps {
  icon: "record-circle" | "send-2" | "refresh-square-2"
  title: string
  description: string
}

export const FeatureItem: FC<featureItemProps> = ({
  description,
  icon,
  title,
}) => {
  const ICONS = {
    "record-circle": "/icons/record-circle.svg",
    "send-2": "/icons/send-2.svg",
    "refresh-square-2": "/icons/refresh-square-2.svg",
  }

  return (
    <div className="w-full flex gap-4">
      <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary-400 flex items-center justify-center">
        <img
          src={ICONS[icon]}
          alt=""
          className="w-6 md:w-8 h-6 md:h-8 object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <p className="font-Inter text-[22px] md:text-[28px] font-semibold text-[#1B233D]">
          {title}
        </p>

        <p className="font-WorkSans text-base md:text-xl text-[#616163]">
          {description}
        </p>
      </div>
    </div>
  )
}
