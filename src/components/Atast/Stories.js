import React from "react";
import Isitcomm from "../../assests/isitcom.png";
import SS from "../../assests/redstudentsection.png";
import Epi from "../../assests/epi.png";
import Fms from "../../assests/fms.png";
import Issat from "../../assests/issat.png";
import Tbs from "../../assests/tbs.png"

const stories = [
  { name: "ISITCOM", img: Isitcomm },
  { name: "FMS", img: Fms },
  { name: "ISSATSo", img: Issat},
  { name: "EPI", img: Epi },
  { name: "Student Section", img: SS },
  { name: "TBS", img: Tbs}

];

const Stories = () => {
  return (
    <div className="flex space-x-4 p-4 overflow-x-auto whitespace-nowrap" style={{ backgroundColor: "rgba(18, 18, 18, 1)", scrollbarWidth: "none" }}>
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 border-4 border-red-900 rounded-full flex items-center justify-center overflow-hidden">
            <img src={story.img} alt={story.name} className="w-full h-full object-cover bg-gray-300" />
          </div>
          <span className="text-white mt-2 text-sm font-bold">{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
