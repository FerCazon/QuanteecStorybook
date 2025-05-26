import React from "react";
import { IconProps } from "./types";

const Level1: React.FC<IconProps> = ({
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
    <circle opacity={0.2} cx={24.9049} cy={25.0355} r={19.8656} fill={color} />
    <path
      d="M31.9981 20.7837L22.0653 30.7165L17.8083 26.4596"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Level1;
