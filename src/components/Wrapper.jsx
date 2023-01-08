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

  const { data, isLoading, isError } = useQuery(["shoes"], async () => {
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
      <Hero />
      <Popular top={top} />
      <ProductsWrapper popular={popular} />
      <ContentWrapper />
      <ProductsWrapper top={top} />
      <ContentWrapper />
    </div>
  );
}

export default Wrapper;
