import React from "react";
import Image from "next/image";
import ProductTable from "@/components/product/ProductTable";

const ProductStock = () => {
  return (
    <div className="h-[100%] overflow-y-auto pb-8">
      <div className="flex justify-between items-center pt-6">
        <h1 className=" text-dark-text text-3xl font-bold">Product Stock</h1>
        <div className="bg-white flex gap-2 px-4 py-2 items-center border rounded-[25px] w-[300px]">
          <Image src="/images/search.svg" alt="search" width={20} height={20} />
          <input
            type="text"
            placeholder="Search product name"
            className="w-full bg-transparent text-dark-text opacity-80 text-base focus:outline-none"
          />
        </div>
      </div>
      <section className="mt-6">
        <ProductTable />
      </section>
    </div>
  );
};

export default ProductStock;
