import React from 'react';
import { IoMdCloudDownload } from "react-icons/io";
const ButtonCV = () => {
  return (
    <div>
      <a href="/cv.pdf" download>
        <div className="btn btn-sm btn-secondary shadow-lg">
          <IoMdCloudDownload /> Download CV
        </div>
      </a>
    </div>
  );
}

export default ButtonCV;
