import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex flex-row justify-between py-4">
      <Link href="/" className="text-3xl font-bold tracking-wider">
        NC.
      </Link>
      <ul className="flex flex-row gap-12">
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
        <li>-</li>
      </ul>
    </nav>
  );
}
