import { FaHeartCircleBolt } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* header */}
      <section className="flex flex-col md:flex-row  justify-center items-center w-full min-h-dvh">
        <Image
          alt="roket"
          src={"/roket.png"}
          width={100}
          height={100}
          className="w-40 animate-bounce"
        />
        <div className="px-1.5 text-center md:text-left">
          <h1 className="text-2xl font-bold text-current font-sans">
            HR<span className="text-primary">DEV</span>
          </h1>
          <h2 className="text-4xl font-bold">MAKE IT SIMPLE, MAKE ME BETTER</h2>
          <button className="btn btn-sm btn-primary shadow-lg mt-2">
            Contact
          </button>
        </div>
      </section>

      {/* section abaout */}
      <section className="w-full  px-1.5 flex justify-center items-center">
        {/* content */}
        <div className="card bg-gradient-to-tr from-white/10 to-white/50 w-1/2">
          <div className="card-body">
            <Image
              alt="Me"
              src={"/ME.jpg"}
              width={100}
              height={100}
              className="w-40 rounded-full shadow-lg mb-2"
            />
            <h1 className="text-xl font-semibold">Rikza Fauzan Nurfadilah</h1>
            <h3 className="text-lg font-light">
              HI IM A <span className="font-bold">FRONT-END DEVELOPER</span>{" "}
              WITH <span className="font-bold">1 YEAR EXPERIEND</span>
              <span className="text-primary font-extrabold">...</span>
            </h3>
          </div>
        </div>
      </section>

      {/* section Project */}
      <section className="p-4 w-full h-64 flex justify-center items-center  rounded-b-2xl shadow-xl">
        <div className="text-center space-y-2">
          <div className="w-full flex justify-center">
            <FaDollarSign className="text-2xl text-primary" />
          </div>
          <h1 className="uppercase text-sm">
            Hanya <b>kamu</b> yang dapat membuatku lupa akan <b>kata lelah</b>
          </h1>
          <Link href={"project"} className="btn btn-sm btn-primary shadow-xl">
            {"project >>"}
          </Link>
        </div>
      </section>
    </>
  );
}
