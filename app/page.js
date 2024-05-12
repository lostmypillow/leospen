import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/leospen/pen.webp" alt="a pen" width={500} height={500} />
      <Link href="/shop" className="flex items-center justify-center px-4 py-2 bg-black text-white w-32 h-11 rounded-lg">Shop for Stuff</Link>
    </div>
  );
}
