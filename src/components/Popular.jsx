import { useState, useEffect } from "react";

function Popular() {
  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className=" w-full h-auto">
      Popular {`${process.env.REACT_APP_URL}`} {process.env.REACT_APP_URL}
    </div>
  );
}

export default Popular;
