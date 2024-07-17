import React from "react";
import "./Features.css";
import img1 from "../../../public/cooltext460632036750881.png";

const Features = ({
  src,
  para = [],
  direction,
  color,
  animation,
  indexvalue,
}) => {
  return (
    <>
      <div
        className={`w-[100%] h-[500px] sm:h-auto flex ${
          direction == "reverse" ? "flex-row-reverse sm:flex-col" : " "
        } items-center justify-center overflow-hidden sm:rounded-md sm:!flex-col `}
      >
        <div className="p-0 m-0 w-[50%] sm:h-[400px] sm:w-[90%] h-full relative">
          <img
            className={`w-[100%] img h-full object-fill  bg-center bg-cover `}
            src={src}
            alt=""
          />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gradient-to-t from-slate-200 to-[#1a6b68] opacity-50"></div>
          <h2
            className={`absolute sm:text-[25px]  w-full h-full font-[Poppins] font-[300] flex items-center justify-center text-5xl top-0 left-0 text-white`}
          >
            Features
          </h2>
        </div>
        <p
          className={` text-center text-2xl sm:w-[90%] sm: flex-wrap  text-white font-serif  flex items-center justify-center font-bold bg-red-500 w-[50%] h-full ${color} bg-[#1a6b68e5]`}
        >
          <p
            className={`  w-[400px] transition-all delay-200 px-4 sm:h-auto sm:py-3  border-b border-white border-spacing-1 flex items-center justify-center flex-col  overflow-hidden `}
          >
            {para.map((item, index) => {
              return (
                <>
                  <div
                    className={`flex opacity-0  items-start pb-2 justify-start delay-200ms translate-y-100 transition-all gap-1 w-full text-left ${
                      animation ? " translate-y-0 opacity-100" : ""
                    }`}
                  >
                    <p className={`w-fit`}>{indexvalue + 1 + index}.</p>
                    <p
                      className={`para h-full font-[300] sm:font-[200] sm:w-full  flex text-[20px] sm:text[10px] items-start`}
                    >
                      {item}
                    </p>
                  </div>
                </>
              );
            })}
          </p>
        </p>
      </div>
    </>
  );
};

export default Features;
