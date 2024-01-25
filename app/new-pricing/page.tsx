import PricingCard2 from "@/components/pricingCard2/PricingCard2";
import React from "react";

const Page = () => {
  return (
    <>
      <main className="py-32">
        <h1 className="text-center text-7xl mb-10 font-semibold">Choose Your Plan</h1>
        <p className="text-center mb-32 max-w-[700px] mx-auto font-[600] text-[15px] text-[#78829D]">
          If you need more info about our pricing, please check Pricing
        <span className="text-blue-500 "> Guidelines.</span>  
        </p>

        <div className="container my-96 py-52 flex gap-10 items-center justify-center">
          <PricingCard2 price={45} />
          <PricingCard2 price={199} />
          <PricingCard2 price={200}/>
        </div>
      </main>
    </>
  );
};

export default Page;
