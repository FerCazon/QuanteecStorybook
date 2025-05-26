import React from "react";
import { IconProps } from "./types";

const Level4: React.FC<IconProps> = ({
  width = 53,
  height = 53,
  color = "#2f90b0",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle opacity={0.2} cx={26.0599} cy={25.9837} r={20.5081} fill={color} />
    <circle cx={19.0212} cy={30.374} r={4.68942} fill={color} />
    <circle cx={26.0498} cy={18.6513} r={4.68942} fill={color} />
    <circle cx={33.0988} cy={30.374} r={4.68942} fill={color} />
  </svg>
);

export default Level4;
