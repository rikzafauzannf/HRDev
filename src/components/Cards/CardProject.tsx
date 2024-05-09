import Link from "next/link";
import React from "react";

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
        <h1 className="text-xl font-medium">{props.project}</h1>
        <hr />
        <p className="text-sm">
          {props.place} - {props.year}
        </p>
        {/* Check if 'visit' exists before rendering Link */}
        {props.visit && (
          <Link
            href={props.visit}
            target="blank"
            className="btn btn-sm btn-primary"
          >
            Visit
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardProject;
