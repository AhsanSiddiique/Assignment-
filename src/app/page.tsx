// pages/index.tsx
export default function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-green-600 text-black">
       <img src="/logo.png" alt="Logo" className="h-10" />
        <ul className="flex space-x-8">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
      <main className="p-8">
        <h1 className="text-center font-bold ">THIS WEBSITE IS CREATED FOR MY ASSIGNMET!</h1>
          <div className=" flex-item center justify-center h-screen">
            <p className="p-8 text-left font-bold text-center text-2xl"> I hope you liked this simple project i have worked on</p></div>
      </main>
    </div>
  );
}
