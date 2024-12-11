import React from "react";

interface Prpos {
  item: string;
}

const PrimButton = ({ item }: Props) => {
  return <button className="btn btn-primary">{item}</button>;
};

export default PrimButton;
