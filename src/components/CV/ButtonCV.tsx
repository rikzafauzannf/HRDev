import React from 'react';
import { IoMdCloudDownload } from "react-icons/io";
const ButtonCV = () => {
  return (
    <div>
      <a href="/CV2024.pdf" download>
        <div className="btn btn-sm btn-secondary shadow-lg">
          <IoMdCloudDownload /> Download CV
        </div>
      </a>
    </div>
  );
}

export default ButtonCV;
