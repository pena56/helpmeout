import { Navbar, Banner, FeatureItem, WorkItem, Footer } from "@/components"

function Index() {
  return (
    <main className="w-full bg-[#F4F6F8]">
      <Navbar />
      <Banner />

      <div className="w-full px-[0.5rem] md:px-[3rem] py-0 md:py-32 bg-white">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-16 py-12 md:py-0">
          <div className="flex flex-col gap-2">
            <h3 className="font-Sora font-bold text-[28px] md:text-[40px] text-center text-[#141414]">
              Features
            </h3>

            <p className="font-WorkSans text-base md:text-xl text-center text-[#616163]">
              Key Highlights of Our Extension
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-center gap-14">
            <div className="w-full md:w-[50%] flex flex-col gap-12">
              <FeatureItem
                icon="record-circle"
                title="Simple Screen Recording"
                description="Effortless screen recording for everyone. Record with ease, no tech expertise required."
              />

              <FeatureItem
                icon="send-2"
                title="Easy-to-Share URL"
                description="Share your recordings instantly with a single link. No attachments, no downloads."
              />

              <FeatureItem
                icon="refresh-square-2"
                title="Revisit Recordings"
                description="Access and review your past content effortlessly. Your recordings, always at your fingertips."
              />
            </div>
            <div className="w-full md:w-[50%] h-[228px] md:h-[454px]">
              <img
                src="/images/feature.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-[0.5rem] md:px-[3rem] py-0 md:py-32 bg-white mt-14">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-16 py-12 md:py-0">
          <div className="flex flex-col gap-2">
            <h3 className="font-Sora font-bold text-[28px] md:text-[40px] text-center text-[#141414]">
              How it works
            </h3>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between gap-6">
            <WorkItem
              number="1"
              title="Record Screen"
              description={`Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.`}
            />

            <WorkItem
              number="2"
              title="Share Your Recording"
              description={`We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.`}
            />

            <WorkItem
              number="3"
              title="Learn Effortlessly"
              description={`Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.`}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Index
