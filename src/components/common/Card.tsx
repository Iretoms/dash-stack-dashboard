"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Favourite } from "@/types";

interface CardProps {
  favourite: Favourite;
}

const Card: React.FC<CardProps> = ({ favourite }) => {
  const [liked, setLiked] = useState<boolean>(favourite.isFavorite);

  const handleLike = () => {
    setLiked(!liked);
    favourite.isFavorite = !liked;
  };

  return (
    <div className="bg-white relative shadow-md rounded-xl w-full overflow-hidden">
      <div className="relative flex items-center">
        <div className="absolute left-2 flex justify-center items-center bg-gray-3 rounded-full h-8 w-8 cursor-pointer p-2">
          <ChevronLeft className="text-gray-2" />
        </div>
        <Image
          src={favourite.image}
          alt="product"
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
        <div className="absolute right-2 flex justify-center items-center bg-gray-3 rounded-full h-8 w-8 cursor-pointer p-2">
          <ChevronRight className="text-gray-2" />
        </div>
      </div>
      <div className="px-4 py-6 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-base">{favourite.name}</p>
            <p className="font-bold text-primary text-sm">
              ${`${favourite.price}`}
            </p>
          </div>
          <div
            className="h-10 w-10 text-noti-red rounded-full flex items-center justify-center bg-gray-3 cursor-pointer"
            onClick={handleLike}
          >
            <Heart size={16} fill={liked ? "currentColor" : "none"} />
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-3">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill={index < favourite.rating ? "gold" : "currentColor"}
              stroke={index < favourite.rating ? "gold" : "currentColor"}
            />
          ))}
          <span className="text-sm text-gray-2">({favourite.reviewCount})</span>
        </div>
        <div>
          <Button className="font-bold bg-gray-3 hover:bg-gray-3">
            Edit Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
