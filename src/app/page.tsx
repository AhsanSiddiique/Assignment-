// pages/index.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-customMoonchange min-h-screen">
      <nav className="flex items-center justify-between p-4 bg-customMooncolor text-white">
        <Image src="/moon.png" alt="Logo" width={80} height={80} />
        <ul className="flex space-x-8">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
      <main className="p-8">
        <h1 className="text-center font-bold">THIS WEBSITE IS CREATED FOR MY ASSIGNMENT!</h1>
        <div className="flex items-center justify-center h-screen">
          <p className="p-8 text-left font-bold text-center text-2xl">
            FINAL TOUCHES ON COLORS BY MADINATHEBEST
          </p>
          <p className="p-8 text-left font-bold text-center text-2xl">
            I hope you liked this simple project I have worked on
          </p>
        </div>
      </main>
    </div>
  );
}
