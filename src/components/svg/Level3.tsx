import React from "react";
import { IconProps } from "./types";

const Level3: React.FC<IconProps> = ({
  width = 21,
  height = 21,
  color = "#2f90b0",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#threeCirclesIconClip)">
      <circle
        opacity={0.2}
        cx={10.8226}
        cy={10.7912}
        r={9.91427}
        fill={color}
      />
      <circle cx={8.33575} cy={13.2936} r={2.49872} fill={color} />
      <circle cx={13.3421} cy={8.30145} r={2.49872} fill={color} />
    </g>
    <defs>
      <clipPath id="threeCirclesIconClip">
        <rect
          width={19.7432}
          height={19.7432}
          fill="white"
          transform="translate(0.948486 0.912109)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default Level3;

// #ee3c47
