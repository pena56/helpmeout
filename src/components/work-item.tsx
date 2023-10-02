import { FC } from "react"

interface workItemProps {
  number: string
  title: string
  description: string
}

export const WorkItem: FC<workItemProps> = ({ description, number, title }) => {
  return (
    <div className="w-full max-w-[358px] flex flex-col gap-7">
      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-14 md:w-16 h-14 md:h-16 bg-primary rounded-full flex items-center justify-center">
          <p className="text-white font-Inter font-bold text-lg md:text-2xl text-center">
            {number}
          </p>
        </div>

        <p className="font-Inter font-semibold text-center text-2xl md:text-3xl text-[#1B233D]">
          {title}
        </p>

        <p className="font-WorkSans text-center text-lg md:text-xl text-[#616163]">
          {description}
        </p>
      </div>

      <div className="w-full h-[270px]">
        <img
          src="/images/work.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
