import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import React from "react";
import HomeSearch from "@/components/HomeSearch";
const Page = () => {
  return (
    <>
      <HomeHeader />

      {/* body
       */}

      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          alt=""
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height="200"
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default Page;
