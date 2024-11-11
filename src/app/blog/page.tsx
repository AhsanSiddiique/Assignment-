// pages/index.tsx
import NavBar from "../components/navbar";

export default function Blog() {
  return (
    <div className="bg-customMoonchange min-h-screen">
      <NavBar />
      <h1 className="text-center font-bold text-yellow-400 text-5xl mt-10 ">
        AHSAN SIDDIQUE DHANANI!
      </h1>
      <div className="flex items-center justify-center">
        <p className="p-8 text-left font-bold text-center text-red-500 text-4xl mt-20">
          THIS IS THE BLOG PAGE!
        </p>
      </div>
    </div>
  );
}
