"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProducts } from "@/lib/features/products/productsSlice";
import { Product } from "@/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Edit, Trash } from "lucide-react";

const ProductTable = () => {
  const dispatch = useAppDispatch();
  const {
    items: products,
    status,
    error,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="bg-white border rounded-xl p-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Image</TableHead>
            <TableHead className="font-bold">Product Name</TableHead>
            <TableHead className="font-bold">Category</TableHead>
            <TableHead className="font-bold">Price</TableHead>
            <TableHead className="font-bold">Piece</TableHead>
            <TableHead className="font-bold">Available Color</TableHead>
            <TableHead className="font-bold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: Product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Image
                  src={product.image}
                  alt={product.productName}
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.piece}</TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  {product.availableColors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center border rounded-md bg-gray-4">
                  <Edit className="w-6 h-6 cursor-pointer text-gray-text py-1 pr-2 border-r-[1px]" />
                  <Trash className="w-6 h-6 cursor-pointer text-noti-red py-1 pl-2" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
