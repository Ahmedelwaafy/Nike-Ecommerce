import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Popular from "./Popular";
function Wrapper() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [kids, setKids] = useState([]);
  const [collections, setCollections] = useState([]);

  const { data, isLoading, isError } = useQuery(["shoes"], async () => {
  
      const res = await axios.get(process.env.REACT_APP_URL);
      const { popular, top, men, women, kids, collections } = res.data;
      setPopular(popular);
      setTopRated(top);
      setMen(men);
      setWomen(women);
      setKids(kids);
      setCollections(collections);
     
      return res.data;
    
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <Popular top={top} />
    </div>
  );
}

export default Wrapper;
