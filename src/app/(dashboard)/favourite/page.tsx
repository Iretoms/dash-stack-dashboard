"use client"
import React, {useEffect} from "react";
import Card from "@/components/common/Card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchFavourites } from "@/lib/features/favorites/favouritesSlice";
import { Favourite } from "@/types";

const Favorite = () => {
  const dispatch = useAppDispatch();
  const {
    items: favourites,
    status,
    error,
  } = useAppSelector((state) => state.favourites);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFavourites());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="h-[100%] overflow-y-auto pb-8">
      <h1 className="pt-6 text-dark-text text-3xl font-bold">Favorites</h1>
      <section className="grid grid-cols-3 gap-4 overflow-y-auto mt-6">
        {favourites.map((favourite: Favourite) => (
          <Card key={favourite.id} favourite={favourite} />
        ))}
      </section>
    </div>
  );
};

export default Favorite;
