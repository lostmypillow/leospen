import Image from "next/image";
import Link from 'next/link';
import pen from '../public/pen.webp'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={pen.src} alt="a pen" />
      <Link href="/shop" className="flex items-center justify-center px-4 py-2 bg-black text-white w-32 h-11 rounded-lg">Shop for Stuff</Link>
    </div>
  );
}
