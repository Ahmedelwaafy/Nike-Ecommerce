import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Player } from "@lottiefiles/react-lottie-player";

function Missing() {
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="h-[100vh]">
      <Player
        src="https://assets9.lottiefiles.com/packages/lf20_zyu0ctqb.json"
        style={{ height: "500px", width: "500px" }}
        loop
        autoplay
      />
    </div>
  );
}

export default Missing;
