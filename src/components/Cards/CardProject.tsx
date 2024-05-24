import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEye } from "react-icons/fa";

interface ContentProps {
  project: string;
  place: string;
  year: string;
  visit: string;
}

const CardProject: React.FC<ContentProps> = (props) => {
  return (
    <div className="card rounded-xl shadow-xl bg-neutral-content/10">
      <div className="card-body space-y-0">
        <div className="flex w-full items-center justify-start gap-4">
          <Image
            alt="dummy"
            src={"/pattern.svg"}
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
          {/* content */}
          <div className="flex-1">
            <h1 className="text-2xl font-medium">{props.project}</h1>
            <hr />
            <p className="text-sm">
              {props.place} - {props.year}
            </p>
            {/* Check if 'visit' exists before rendering Link */}
            {props.visit && (
              <Link
                href={props.visit}
                target="blank"
                className="btn btn-sm btn-primary shadow-lg mt-3"
              >
                <FaRegEye /> Visit
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
