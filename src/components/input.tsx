import { FC } from "react"

interface inputProps {
  label: string
  placeholder: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  type?: "text" | "password"
}

export const Input: FC<inputProps> = ({
  label,
  placeholder,
  setValue,
  value,
  type,
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <label
        htmlFor=""
        className="font-WorkSans font-medium text-sm text-[#141414]"
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        className="border rounded-xl border-primary-100 outline-none focus:border-primary-500 placeholder:text-[#626262] font-WorkSans text-base font-medium p-4"
      />
    </div>
  )
}
