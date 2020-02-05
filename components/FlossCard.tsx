import React from "react";

interface Floss {
  brand: string;
  color: number;
  r: number;
  g: number;
  b: number;
}

const FlossCard = ({ brand, color, r, g, b }: Floss) => {
  return (
    <div className="flex justify-between w-1/5">
      <p className="font-sans">{brand}</p>
      <p>{color}</p>
      <div
        style={{
          width: "100px",
          height: "50px",
          backgroundColor: `rgb(${r}, ${g}, ${b})`
        }}
      />
    </div>
  );
};

export default FlossCard;
