import React from "react";

const Keyword = ({ name, index }) => {
  const color = [
    { background: "#FEF2F2", borderColor: " #FCA5A5", color: "#EF4444" },
    { background: "#F0FFF4", borderColor: " #9AE6B4", color: "#22C55E" },
    { background: "#EFF6FF", borderColor: " #A3BFFA", color: "#3B82F6" },
    { background: "#FFFBEB", borderColor: " #FDE68A", color: "#F59E0B" },
  ];
  return (
    <p
      className={`border-2  text-sm font-semibold rounded-lg py-1 px-3`}
      style={color[index]}
    >
      {name}
    </p>
  );
};

export default Keyword;
