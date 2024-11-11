// components/NavBar.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-2 bg-customMooncolor text-white">
      <Image src="/moon.png" alt="Logo" width={80} height={80} />
      <div className="flex space-x-6">
        <Link href="/" className='hover:text-black'>Home</Link>
        <Link href="/about" className='hover:text-black'>About</Link>
        <Link href="/services" className='hover:text-black'>Services</Link>
        <Link href="/contact" className='hover:text-black'>Contact</Link>
        <Link href="/blog" className='hover:text-black'>Blog</Link>
      </div>
    </nav>
  );
}
