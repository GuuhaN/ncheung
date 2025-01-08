import Link from "next/link";

export default function EmailCta() {
  return (
    <Link href="mailto:nigelcheung97@hotmail.com" className="flex ">
      <div className="border rounded-full py-2 px-4">Lets discuss</div>
    </Link>
  );
}
