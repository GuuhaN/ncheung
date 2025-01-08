import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row gap-20 py-12">
      <div className="flex flex-col gap-6 basis-2/4">
        <h2 className="text-6xl font-bold">NC.</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-5xl font-semibold">LETS TALK</h3>
          <p className="text-xl">
            If you need assistance with your portfolio, feel free to reach out
            to me and lets have a chat
          </p>
          <input placeholder="Email" />
        </div>
      </div>
      <Image
        src="/IMG_0736.jpeg"
        width={100}
        height={100}
        alt="nigel cheung"
        className="basis-1/4"
      />
      <div className="flex flex-col gap-10 basis-1/4">
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <ul className="flex flex-row gap-2">
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>X</li>
          <li>TikTok</li>
        </ul>
      </div>
    </div>
  );
}
