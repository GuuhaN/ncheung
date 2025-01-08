import EmailCta from "@/components/EmailCta";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between gap-20">
        <Image
          src="/IMG_3072.jpg"
          height={500}
          width={500}
          alt="nigel cheung"
          className="w-full h-64 object-cover"
        />
        <div className="bg-slate-50 h-72 w-full" />
        <div className="bg-slate-100 h-96 w-full" />
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="basis-2/3 w-full">
            <p>(Hello NC.)</p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-wider w-full text-justify">
              Full <span className="font-normal italic">stack</span> Developer
            </h1>
          </div>
          <div className="flex flex-col w-full gap-2 place-content-end basis-1/3 text-2xl tracking-wide">
            <p className="text-justify">
              As a fullstack developer, together creating projects that work for
              <span className="font-semibold"> you</span>.
            </p>
            <EmailCta />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h2 className="text-7xl line-clamp-1 basis-3/4">Featured Work</h2>
            <div className="basis-1/4 text-justify flex flex-col gap-8">
              <p>
                As a fullstack I create different software solutions based on
                your needs
              </p>
              <EmailCta />
            </div>
          </div>
          <div>Work</div>
        </div>
      </div>
    </div>
  );
}
