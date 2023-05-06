import React from "react";

import "../../styles/button.scss";

export const Button = (props) => {
  const width = props.width;
  const height = props.height;
  const size = props.size;
  const weight = props.weight;
  const radius = props.radius;

  return (
    <button
      className="componentButton"
      style={{
        width: width,
        height: height,
        fontSize: size,
        fontWeight: weight,
        borderRadius: radius,
      }}
    >
      {props.label}
    </button>
  );
};
