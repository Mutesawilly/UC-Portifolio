import Image from "next/image";

export default function Home() {
  return (
    <main className="font-serif min-h-screen">
      <div className="h-dvh">
        {/* The Navigation Bar */}
        <nav className="flex justify-between px-12 py-8 text-[14px] font-sans">
          <p className="text-xl text-pink-900">@Christella</p>
          <div className="flex gap-8 items-center">
            <p className="cursor-pointer hover:text-pink-400">ABOUT</p>
            <p className="cursor-pointer hover:text-pink-400">EXPERIENCE</p>
            <p className="cursor-pointer hover:text-pink-400">RESUME</p>
          </div>
        </nav>
        {/* The Biography and Personal Description */}
        <div className="flex flex-col items-center justify-center">
          <Image src="/images.jpg" alt="Profile picture" width={180} height={100} className="cursor-pointer" />
          <div className="flex flex-col items-center w-[60%] text-center">
            <h1 className="font-[girl-next-door] text-5xl py-7">About Me</h1>
            <p className="font-sans font-medium text-lg">I&#39;m Christella, a Data Scientist & Insight Alchemist with a background in tech, healthcare, and finance who crafts raw information into actionable intelligence you can leverage. Since 2019, I have focused on translating complexity into intuitive, data-driven solutions.</p>
          </div>
        </div>
      </div>

      {/* Transition Sentence From Biography To Activities */}
      <div className="flex items-center justify-center pb-20">
        <div className="group relative flex-col justify-between pt-50px">
          <p className="absolute sm:left-[-50px] md:left-[-100px] text-left text-4xl">⋆｡‧˚ʚ🍫ɞ˚‧｡⋆</p>
          <p className="absolute sm:right-[-100px] md:right-[-200px] sm:bottom-[-50px] md:bottom-[-50px] text-right text-4xl">༄˖°.☕️.ೃ࿔📚*:･</p>
          <p className="py-5 text-3xl sm:pt-15 md:pt-17">If not <span className="text-pink-600 cursor-pointer">me, who?</span> If not <span className="text-green-600 cursor-pointer">now, when?</span></p>
        </div>
      </div>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-2">
        <div className="bg-pink-100 w-dvw flex justify-center p-10 rounded-lg">
          <div className="flex flex-col items-center">
            <p className="flex items-center justify-center w-15 h-15 rounded-full bg-pink-300 text-2xl cursor-pointer text-pink-800 font-bold">UC</p>
            <p className="font-medium text-[60px] pt-10 pb-5">Let&#39;s get down to serious business</p>
            <p className="text-2xl">let’s talk design, internet culture, or your latest playlist.</p>
            <div className="flex items-center justify-center gap-10 pt-15">
              <div className="bg-pink-200 px-8 py-3 rounded-4xl text-xl flex items-center justify-center gap-2 hover:bg-pink-300 ease-in-out duration-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height={25} width={25}>
                  <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" fill="#323544" />
                </svg>
                <button type="button">shot an email</button>
              </div>
              <div className="bg-pink-200 px-8 py-3 rounded-4xl text-xl flex items-center justify-center gap-2 hover:bg-pink-300 ease-in-out duration-500 cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z" fill="#323544" />
                </svg>
                <button type="button">connect with me</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
