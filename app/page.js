import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main>
        {/* The Navigation Bar */}
        <nav className="flex justify-between px-12 py-8 text-[14px]">
          <p className="cursor-pointer hover:text-gray-600">ABOUT</p>
          <p className="cursor-pointer hover:text-gray-600">EXPERIENCE</p>
          <p className="cursor-pointer hover:text-gray-600">RESUME</p>
        </nav>
        {/* The Biography and Personal Description */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
