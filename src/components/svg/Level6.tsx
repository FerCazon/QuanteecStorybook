import React from "react";
import { IconProps } from "./types";

const Level6: React.FC<IconProps> = ({
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
    <circle opacity={0.2} cx={26.0599} cy={26.347} r={20.5081} fill={color} />
    <circle
      cx={26.0391}
      cy={36.0525}
      r={2.86696}
      fill={color}
      stroke={color}
      strokeWidth={0.878919}
    />
    <circle
      cx={26.0391}
      cy={16.6502}
      r={2.86696}
      fill={color}
      stroke={color}
      strokeWidth={0.878919}
    />
    <circle
      cx={34.4557}
      cy={31.1945}
      r={2.86696}
      transform="rotate(-60 34.4557 31.1945)"
      fill={color}
      stroke={color}
      strokeWidth={0.878919}
    />
    <circle
      cx={17.6324}
      cy={21.4962}
      r={2.86696}
      transform="rotate(-60 17.6324 21.4962)"
      fill={color}
      stroke={color}
      strokeWidth={0.878919}
    />
    <circle
      cx={34.44}
      cy={21.4887}
      r={2.86696}
      transform="rotate(-120 34.44 21.4887)"
      fill={color}
      stroke={color}
      strokeWidth={0.878919}
    />
    <circle
      cx={17.6385}
      cy={31.2025}
      r={2.86696}
      transform="rotate(-120 17.6385 31.2025)"
      fill={color}
      stroke={color}
      strokeWidth={0.878919}
    />
  </svg>
);

export default Level6;
