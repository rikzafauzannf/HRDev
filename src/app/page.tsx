import { FaHeartCircleBolt } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* header */}
      <section className="w-full min-h-dvh flex justify-center items-center rounded-b-2xl shadow-xl ">
        {/* content header */}
        <div className="w-full space-y-2 px-8 items-center ">
          <FaHeartCircleBolt className="animate__animated animate__fadeInDown" />
          <h1 className="text-2xl font-bold animate__animated animate__fadeInLeft">
            MAKE IT SIMPLE, MAKE ME BETTER
          </h1>
          <p className="text-sm text-slate-600 animate__animated animate__fadeInLeft">
            Semua itu indah di saat kamu mulai mewarnai hari ku
          </p>
          <button className="btn btn-sm btn-primary shadow-xl animate__animated animate__fadeInUp">
            Contact
          </button>
        </div>
      </section>

      {/* section abaout */}
      <section className="flex justify-center gap-2 items-center rounded-b-2xl shadow-xl bg-gradient-to-tr from-lime-200 to-lime-400">
        <div className="w-20 bg-pattern min-h-80"></div>
        <div className="flex-auto p-4">
          <h1 className="text-2xl font-medium">AboutME</h1>
          <p className="text-slate-600">
            Hanya seseorang yang terus berjuang dengan segala cara untuk sebuah
            fiksi menjadi fakta.
          </p>
        </div>
      </section>

      {/* section abaout */}
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
