import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Popular from "./Popular";
import ProductsWrapper from "./ProductsWrapper";
import ContentWrapper from "./ContentWrapper";

function Wrapper() {
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [kids, setKids] = useState([]);
  const [collections, setCollections] = useState([]);
  const [covers, setCovers] = useState([]);

  const { data, isLoading, isError, error } = useQuery(["shoes"], async () => {
    const res = await axios.get(process.env.REACT_APP_URL);
    const { popular, top, men, women, kids, collections, covers } = res.data;
    setPopular(popular);
    setTop(top);
    setMen(men);
    setWomen(women);
    setKids(kids);
    setCollections(collections);
    setCovers(covers);

    return res.data;
  });
 

  return (
    <div>
      <Navbar />
     
      <main className="flex flex-col gap-16 ">

      <Hero />
      <ProductsWrapper
        endpoint={popular}
        pop
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
      <ContentWrapper />
      <ProductsWrapper endpoint={top} />
      <ContentWrapper />
      </main>
    </div>
  );
}

export default Wrapper;
