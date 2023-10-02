import { FC } from "react"
import { Link } from "react-router-dom"

import { Button } from "./button"

interface successModalProps {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const SuccessModal: FC<successModalProps> = ({ show, setShow }) => {
  if (show) {
    document.body.style.overflow === "hidden"
  } else {
    document.body.style.overflow === "unset"
  }

  return (
    <div
      className={`${
        show ? "fixed" : "hidden"
      } top-0 left-0 bottom-0 right-0 bg-black/30 flex items-center justify-center z-50`}
    >
      <div className="w-[90%] max-w-xl bg-[#F2F4F7] rounded-3xl p-6 md:p-16 flex flex-col gap-14 md:gap-24">
        <div className="flex flex-col gap-10">
          <div className="w-full flex justify-center items-center relative">
            <button
              onClick={() => setShow(false)}
              className="w-8 md:w-10 h-8 md:h-10 absolute top-0 right-0"
            >
              <img
                src="/icons/close-circle.svg"
                className="w-full h-full object-contain"
                alt=""
              />
            </button>

            <img
              src="/images/success.png"
              className="w-[70%] h-auto object-contain"
              alt=""
            />
          </div>

          <p className="font-WorkSans text-xl md:text-2xl text-center text-primary">
            Your video link has been sent to{" "}
            <span className="font-medium text-primary-900">
              johnmark@gmail.com
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <p className="font-WorkSans text-base md:text-lg text-[#141414] text-center">
            Would you need to view this video later? Save to your account now!
          </p>

          <Button label="Save Video" size="sm" />
        </div>

        <p className="font-WorkSans text-base text-[#7E7E7E] text-center">
          Don't have an account?{" "}
          <Link to="/login">
            <span className="text-primary font-Sora font-semibold">
              Create account
            </span>
          </Link>
        </p>
      </div>
    </div>
  )
}
