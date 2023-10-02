import { useState } from "react"

import { Logo, Input, Button } from "@/components"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main className="w-full bg-white">
      <div className="w-full px-[0.5rem] md:px-[3rem] py-0 md:py-20 bg-white flex flex-col items-center justify-center gap-9 mx-auto max-w-[1440px]">
        <div className="w-full">
          <Logo />
        </div>

        <div className="w-full max-w-md flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-Inter font-bold text-3xl text-[#141414] text-center">
              Log in or Sign up
            </p>

            <p className="font-Inter font-light text-sm text-center text-[#434343]">
              Join millions of others in sharing successful <br /> moves on{" "}
              <span className="font-Sen font-normal">HelpMeOut</span>.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <button className="w-full border border-[#141414] rounded-xl flex items-center justify-center gap-4 font-Inter font-medium text-base text-[#141414] py-2">
              <img
                src="/icons/google.svg"
                className="w-6 h-6 object-contain"
                alt=""
              />
              Continue with Google
            </button>

            <button className="w-full border border-[#141414] rounded-xl flex items-center justify-center gap-4 font-Inter font-medium text-base text-[#141414] py-2">
              <img
                src="/icons/facebook.svg"
                className="w-6 h-6 object-contain"
                alt=""
              />
              Continue with Facebook
            </button>
          </div>

          <div className="w-full flex items-center gap-1">
            <div className="w-full h-[1px] bg-[#B9C2C8]" />

            <p className="font-Inter font-medium text-sm text-[#B9C2C8]">or</p>

            <div className="w-full h-[1px] bg-[#B9C2C8]" />
          </div>

          <div className="flex flex-col gap-4">
            <Input
              label="Email"
              placeholder="Enter your email address"
              value={email}
              setValue={setEmail}
            />

            <Input
              label="Password"
              placeholder="Enter your Password"
              value={password}
              setValue={setPassword}
              type="password"
            />

            <Button label="Sign Up" width="full" size="sm" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
