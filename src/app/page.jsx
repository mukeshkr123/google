import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import React from "react";
import googleUrl from "../../utils/imageurl";
import HomeSearch from "@/components/HomeSearch";
const Page = () => {
  return (
    <>
      <HomeHeader />

      {/* body
       */}

      <div className="flex flex-col items-center mt-24">
        <Image width="300" src={googleUrl} height="200" />
        <HomeSearch />
      </div>
    </>
  );
};

export default Page;
