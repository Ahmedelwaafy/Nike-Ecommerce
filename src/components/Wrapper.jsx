import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Popular from "./Popular";


function Wrapper() {
  const [men, setMen] = useState([]);

  const { data, isLoading, isError } = useQuery(["shoes"], async () => {
    const res = await axios.get(process.env.REACT_APP_URL);
    const { men } = res.data;

    setMen(men);

    return res.data;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <Popular men={men} />
    </div>
  );
}

export default Wrapper;
