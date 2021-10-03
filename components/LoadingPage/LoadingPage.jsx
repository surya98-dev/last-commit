import React from "react";
import walking from "../../public/gif/walking.gif";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Image src={walking} alt="" />
    </div>
  );
};

export default LoadingPage;
