import React from "react";

interface Props {
  item: string;
}

const PrimButton = ({ item }: Props) => {
  return (
    <button className="bg-primButton w-40 border border-black rounded-full text-xl">
      {item}
    </button>
  );
};

export default PrimButton;
