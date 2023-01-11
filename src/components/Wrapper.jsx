import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProductsWrapper from "./ProductsWrapper";
import Highlights from "./Highlights";
import Featured from "./Featured";
import Stories from "./Stories";
import Footer from "./Footer";

function Wrapper() {
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [kids, setKids] = useState([]);
  const [collections, setCollections] = useState([]);
  const [covers, setCovers] = useState([]);
  const [stories, setStories] = useState([]);

  const { data, isLoading, isError, error } = useQuery(["shoes"], async () => {
    const res = await axios.get(process.env.REACT_APP_URL);
    const { popular, top, men, women, kids, collections, covers, Stories } =
      res.data;
    setPopular(popular);
    setTop(top);
    setMen(men);
    setWomen(women);
    setKids(kids);
    setCollections(collections);
    setCovers(covers);
    setStories(Stories);

    return res.data;
  });
 

  return (
    <div>
      <Navbar />

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
      <Footer />
    </div>
  );
}

export default Wrapper;
