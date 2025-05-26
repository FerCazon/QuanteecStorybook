import React from "react";
import { IconProps } from "./types";

const Level2: React.FC<IconProps> = ({
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
    <circle opacity={0.2} cx={26.3099} cy={25.9842} r={20.5081} fill={color} />
    <circle cx={26.2992} cy={25.9826} r={8.78919} fill={color} />
  </svg>
);

export default Level2;
