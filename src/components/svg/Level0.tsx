import React from "react";
import { IconProps } from "./types";

const Level0: React.FC<IconProps> = ({
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
      d="M19.2197 19.3657L30.576 30.722M30.576 19.3657L19.2197 30.722"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Level0;
