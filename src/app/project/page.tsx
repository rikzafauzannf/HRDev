import CardProject from "@/components/Cards/CardProject";
import Link from "next/link";
import React from "react";

const Peoject = () => {
  const listProject = [
    {
      project: "KELOM",
      place: "Diskominfo",
      year: "2023",
      visit: "https://www.kelom.tasikmalayakota.go.id",
    },
    {
      project: "Goso",
      place: "Diskominfo",
      year: "2023",
      visit: "https://www.goso.tasikmalayakota.go.id",
    },
    {
      project: "Bageur",
      place: "Diskominfo",
      year: "2023",
      visit: "https://www.bageur.tasikmalayakota.go.id",
    },
    {
      project: "SetamanCinta",
      place: "Diskominfo",
      year: "2023",
      visit: "https://www.setamancinta.tasikmalayakota.go.id",
    },
    {
      project: "Katasik",
      place: "Diskominfo",
      year: "2023",
      visit: "https://www.katasik.tasikmalayakota.go.id",
    },
  ];
  return (
    <>
      <section>
        <div className="w-full min-h-48 flex justify-center items-center  bg-gradient-to-tr from-primary to-primary/50">
          <h1 className="text-7xl font-bold">Project</h1>
          <Link href={"/"} className="btn btn-sm btn-primary shadow-lg">
            Back to me...
          </Link>
        </div>
      </section>
      <section className="w-full p-4 ">
        <div className="grid grid-cols-2 gap-4">
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
      </section>
    </>
  );
};

export default Peoject;
