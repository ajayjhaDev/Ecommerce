import React from "react";

const Banner = () => {
  return (
    <div className="conatiner">
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2qVMtdsaYY4B0Gqwsh0OIqXzWhjHL34Yfg&usqp=CAU"
        }
        alt={"banner"}
        className={"img-fluid"}
        style={{ width: "100%", height: "40vh" }}
      />
    </div>
  );
};

export default Banner;
