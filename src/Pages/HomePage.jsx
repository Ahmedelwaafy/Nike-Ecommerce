import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Hero from "../components/Hero";
import ProductsWrapper from "../components/ProductsWrapper";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import Stories from "../components/Stories";
function HomePage() {
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [kids, setKids] = useState([]);
  const [collections, setCollections] = useState([]);
  const [covers, setCovers] = useState([]);
  const [stories, setStories] = useState([]);

  const { data, isLoading, isError, error } = useQuery(
    ["shoes"],
    async () => {
      const res = await axios.get(process.env.REACT_APP_URL);
      return res.data;
    },
    {
      cacheTime: 300,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        
      const { popular, top, men, women, kids, collections, covers, Stories } =
        data;
      setPopular(popular);
      setTop(top);
      setMen(men);
      setWomen(women);
      setKids(kids);
      setCollections(collections);
      setCovers(covers);
      setStories(Stories);
      },
      //staleTime: Infinity,
      // keepPreviousData: true,
    }
  );

  return (
    <main className="flex flex-col gap-24 ">
      <Hero />
      <ProductsWrapper
        endpoint={popular}
        pop
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
      <Highlights />
      <ProductsWrapper
        endpoint={top}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
      <Featured />
      <Stories
        stories={stories}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </main>
  );
}

export default HomePage;
