import React from 'react';
import { IoMdCloudDownload } from "react-icons/io";
const ButtonCV = () => {
  return (
    <div>
      <a href="/cv.pdf" download>
        <div style={{ cursor: 'pointer', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <IoMdCloudDownload /> Download CV
        </div>
      </a>
    </div>
  );
}

export default ButtonCV;
