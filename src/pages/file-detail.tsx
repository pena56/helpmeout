import { useParams, Link } from "react-router-dom"
import { useState } from "react"

import { Navbar, Footer, Button, SuccessModal } from "@/components"

function FileDetail() {
  const { id }: { id?: string } = useParams()

  const [title, setTitle] = useState(id)
  const [editTitle, setEditTitle] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <main className="w-full bg-[#F4F6F8]">
      <SuccessModal show={showModal} setShow={setShowModal} />

      <Navbar />

      <div className="w-full px-[0.5rem] md:px-[3rem] py-0 md:py-12 bg-white">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10 md:gap-0 md:flex-row py-12 md:py-0">
          <div className="w-full md:w-[50%] md:pr-10 flex flex-col gap-10">
            <p className="font-Sora font-bold text-4xl md:text-5xl text-[#141414]">
              Your video is ready!
            </p>

            <div className="flex flex-col gap-2">
              <p className="font-Sora font-medium text-sm md:text-base text-[#727272]">
                Name
              </p>

              <div className="flex w-full md:gap-6 items-center justify-between">
                <input
                  className={`font-Sora font-semibold text-xl md:text-2xl w-full max-w-[70%] py-1 bg-transparent text-primary-400 rounded ${
                    editTitle
                      ? "border border-primary-400"
                      : "border border-transparent"
                  }`}
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  disabled={!editTitle}
                />

                <button
                  onClick={() => setEditTitle((prev) => !prev)}
                  className="w-6 md:w-8 h-6 md:h-8"
                >
                  <img
                    src="/icons/edit.svg"
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </button>
              </div>
            </div>

            <div className="w-full bg-[#B6B3C633] rounded-2xl flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
              <input
                type="text"
                placeholder="enter email of receiver"
                className="font-WorkSans text-base md:text-lg placeholder:text-[#434343CC] text-[#434343] bg-transparent outline-none flex-1 max-w-[65%]"
              />

              <button
                onClick={() => setShowModal(false)}
                className="px-4 md:px-5 py-2 text-white bg-primary-300 rounded-lg w-fit text-base font-medium"
              >
                Send
              </button>
            </div>

            <div className="w-full bg-[#FAFAFA] border border-[#929292] rounded-2xl flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
              <div className="flex-1 max-w-[65%] overflow-hidden">
                <p className="font-WorkSans text-sm md:text-base text-[#4B4B4B] max-w-[50%] w-full whitespace-nowrap text-ellipsis">
                  https://www.helpmeout/Untitled_Video_20232509
                </p>
              </div>

              <button className="px-3 md:px-4 py-2 text-primary rounded-lg w-fit text-sm md:text-base font-medium border border-primary flex items-center gap-2">
                <img
                  src="/icons/copy.svg"
                  alt=""
                  className="w-4 md:w-5 h-4 md:h-5 object-contain"
                />
                Copy
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-Sora font-semibold text-sm md:text-base text-primary-900">
                Share your video
              </p>

              <div className="flex flex-wrap w-full gap-4">
                <button className="px-4 py-2 md:py-3 text-primary-900 rounded-lg w-fit text-sm md:text-base font-medium font-Inter border border-primary flex items-center gap-2">
                  <img
                    src="/icons/facebook.svg"
                    alt=""
                    className="w-4 md:w-5 h-4 md:h-5 object-contain"
                  />
                  Facebook
                </button>

                <button className="px-4 py-2 md:py-3 text-primary-900 rounded-lg w-fit text-sm md:text-base font-medium font-Inter border border-primary flex items-center gap-2">
                  <img
                    src="/icons/whatsapp.svg"
                    alt=""
                    className="w-4 md:w-5 h-4 md:h-5 object-contain"
                  />
                  WhatsApp
                </button>

                <button className="px-4 py-2 md:py-3 text-primary-900 rounded-lg w-fit text-sm md:text-base font-medium font-Inter border border-primary flex items-center gap-2">
                  <img
                    src="/icons/telegram.svg"
                    alt=""
                    className="w-4 md:w-5 h-4 md:h-5 object-contain"
                  />
                  Telegram
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] md:border-l md:border-l-[#F4F6F8] md:pl-10 flex flex-col gap-20">
            <div className="w-full h-60 md:h-96 rounded-lg bg-[#00000033]"></div>

            <div className="w-full flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-Sora font-semibold text-xl md:text-2xl text-black">
                  Transcript
                </p>

                <div className="relative inline-flex">
                  <select className="appearance-none border border-gray-300 rounded px-2 py-2 pr-20 font-WorkSans text-base bg-white text-[#9D9D9D] leading-tight focus:outline-none focus:shadow-outline">
                    <option value="option1">English</option>
                    <option value="option2">French</option>
                    <option value="option3">Spanish</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9D9D9D]">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-64">
                <div className="w-full h-64 overflow-hidden overflow-y-scroll flex flex-col gap-4">
                  <div className="w-full flex gap-6">
                    <p className="font-WorkSans text-base text-[#141414]">
                      0.01
                    </p>

                    <p className="font-Inter font-medium text-base text-black">
                      First step. Open Facebook on your desktop or mobile device
                      and locate "Marketplace" in the left-hand menu or at the
                      top of the{" "}
                    </p>
                  </div>

                  <div className="w-full flex gap-6">
                    <p className="font-WorkSans text-base text-[#141414]">
                      0.01
                    </p>

                    <p className="font-Inter font-medium text-base text-black">
                      First step. Open Facebook on your desktop or mobile device
                      and locate "Marketplace" in the left-hand menu or at the
                      top of the{" "}
                    </p>
                  </div>

                  <div className="w-full flex gap-6">
                    <p className="font-WorkSans text-base text-[#141414]">
                      0.01
                    </p>

                    <p className="font-Inter font-medium text-base text-black">
                      First step. Open Facebook on your desktop or mobile device
                      and locate "Marketplace" in the left-hand menu or at the
                      top of the{" "}
                    </p>
                  </div>

                  <div className="w-full flex gap-6">
                    <p className="font-WorkSans text-base text-[#141414]">
                      0.01
                    </p>

                    <p className="font-Inter font-medium text-base text-black">
                      First step. Open Facebook on your desktop or mobile device
                      and locate "Marketplace" in the left-hand menu or at the
                      top of the{" "}
                    </p>
                  </div>

                  <div className="w-full flex gap-6">
                    <p className="font-WorkSans text-base text-[#141414]">
                      0.01
                    </p>

                    <p className="font-Inter font-medium text-base text-black">
                      First step. Open Facebook on your desktop or mobile device
                      and locate "Marketplace" in the left-hand menu or at the
                      top of the{" "}
                    </p>
                  </div>

                  <div className="w-full flex gap-6">
                    <p className="font-WorkSans text-base text-[#141414]">
                      0.01
                    </p>

                    <p className="font-Inter font-medium text-base text-black">
                      First step. Open Facebook on your desktop or mobile device
                      and locate "Marketplace" in the left-hand menu or at the
                      top of the{" "}
                    </p>
                  </div>
                </div>

                <div className="w-full h-14 bg-white/60 absolute left-0 bottom-0 right-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-[0.5rem] md:px-[3rem] py-0 md:py-12 bg-[#F4F6F8]">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-10 py-12 md:py-0">
          <p className="font-Sora font-semibold text-xl md:text-2xl text-center">
            To ensure the availability and privacy of your video, <br /> we
            recommend saving it to your account.
          </p>

          <Button label="Save Video" size="sm" />

          <p className="font-Sora font-semibold text-xl md:text-2xl text-center text-[#7E7E7E]">
            Don't have an account?{" "}
            <Link to="/login">
              <span className="text-primary underline">Create account</span>
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full h-16 bg-white"></div>

      <Footer />
    </main>
  )
}

export default FileDetail
