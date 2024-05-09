import CardProject from "@/components/Cards/CardProject";
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
    <section>
      <div className="w-full min-h-48 flex justify-center place-items-baseline bg-gradient-to-tr from-lime-200 to-lime-400">
        <h1 className="text-7xl font-bold">Project</h1>
      </div>
      <div className="w-full p-4 space-y-4">
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
  );
};

export default Peoject;
