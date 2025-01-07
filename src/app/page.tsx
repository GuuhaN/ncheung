import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div className="bg-white h-20 w-10"></div>
        <div className="bg-slate-100 h-40 w-20"></div>
        <div className="bg-slate-200 h-60 w-28"></div>
      </div>
      <div className="flex flex-row gap-8 basis-1">
        <div>
          <p>(Hello Nigel)</p>
          <h1 className="md:text-8xl lg:text-9xl font-semibold tracking-wide">
            Full <span className="font-normal italic">stack</span> Developer
          </h1>
        </div>
        <div className="flex flex-col w-full gap-2 place-content-end">
          <p className="text-justify">
            As a fullstack developer, we create applications that
            <span className="font-semibold"> work</span>.
          </p>
          <Link href="mailto:nigelcheung97@hotmail.com" className="flex ">
            <div className="border rounded-full py-2 px-4">
              Let's discuss <span></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
