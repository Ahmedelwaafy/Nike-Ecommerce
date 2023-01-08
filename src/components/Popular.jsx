import { useState, useEffect } from "react";


function Popular({top}) {
useEffect(() => {
  fetch(process.env.REACT_APP_URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));

}, []);
   
console.log(top);

const color =
  "radial-gradient(circle, rgba(9,160,89,1) 0%, rgba(183,226,247,1) 100%)";
  
  
  
  
  
  
  return (
    <div
     style={{background: `${color}`}
}
      className=" w-full h-auto"
    >
      Popular {`${process.env.REACT_APP_URL}`} {process.env.REACT_APP_URL}
    </div>
  );
}

export default Popular;
