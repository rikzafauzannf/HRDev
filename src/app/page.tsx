import { FaDollarSign } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import CardProject from "@/components/Cards/CardProject";
import ButtonCV from "@/components/CV/ButtonCV";
import CardProgress from "@/components/Cards/CardProgress";
import { listSkill } from "@/Data/Skill";
import { listProject } from "@/Data/Project";

export default function Home() {
  return (
    <>
      {/* header */}
      <section className="flex flex-col md:flex-row  justify-center items-center w-full min-h-dvh relative overflow-hidden">
        <Image
          alt="waves"
          src={"/waves.svg"}
          width={100}
          height={100}
          className="w-full h-auto absolute bottom-0 drop-shadow-md"
        />
        <Image
          alt="roket"
          src={"/roket.png"}
          width={100}
          height={100}
          className="w-40 animate-bounce"
        />
        <div className="px-1.5 text-center md:text-left">
          <h1 className="text-2xl font-bold text-current font-sans">
            HR<span className="text-primary font-mono">DEV</span>
          </h1>
          <h2 className="text-4xl font-bold">MAKE IT SIMPLE, MAKE ME BETTER</h2>
          <Link href={"https://wa.me/6289603711237"} className="btn btn-sm btn-primary shadow-lg mt-2">
            Contact <MdOutlineContactSupport />
          </Link>
        </div>
      </section>

      {/* section abaout */}
      <section className="w-full md:px-1.5 px-2 flex justify-center items-center">
        {/* content */}
        <div className="card bg-gradient-to-tr from-white to-white/50 md:w-[50%] shadow-lg glass">
          <div className="card-body">
            <Image
              alt="Me"
              src={"/ME.jpg"}
              width={100}
              height={100}
              className="md:w-40 rounded-full shadow-lg mb-2"
            />
            <h1 className="text-xl font-semibold">Rikza Fauzan Nurfadilah</h1>
            <h3 className="md:text-lg text-base font-light">
              HI IM A <span className="font-bold">FRONT-END DEVELOPER</span>{" "}
              WITH <span className="font-bold">1 YEAR EXPERIEND</span>
              <span className="text-primary font-extrabold">...</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center py-10 px-2 md:px-0">
        <div>
          <h1 className="text-2xl font-semibold">
            Project<span className="text-primary">.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {listProject.map((item, index) => {
              return (
                <CardProject
                  key={index}
                  project={item.project}
                  place={item.place}
                  year={item.year}
                  visit={item.visit}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* relate */}
      <section className="w-full flex justify-center items-center py-10 px-2 md:px-0">
        <div>
          <h1 className="text-2xl font-semibold">
            Skill<span className="text-primary">.</span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {listSkill.map((items,index)=>{
              return(
                <CardProgress
                key={index}
                skill={items.skill}
                />
              )
            })}
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
          {/* <Link href={"project"} className="btn btn-sm btn-primary shadow-xl">
            {"project >>"}
          </Link> */}
          <ButtonCV/>
        </div>
      </section>
    </>
  );
}
