import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800 text-white">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to DropBox
            <br />
            <br />
            Storing everything for you and your buisness needs. All in one place
          </h1>

          <p>
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convienience of easy file management and sharing in one centralized
            solution.
          </p>

          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-600 p-5 w-fit rounded-full"
          >
            Try it for free
            <ArrowRight className="ml-5" />
          </Link>
        </div>
        <div className="bf-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </main>
  );
}
