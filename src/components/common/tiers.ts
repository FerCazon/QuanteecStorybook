import { FunctionComponent, SVGProps } from "react";
import ThreeCirclesIcon from "../svg/ThreeCirclesIcon";

export type TierLevel =
  | "inactive"
  | "core"
  | "lite"
  | "plus"
  | "pro"
  | "elite"
  | "turbo";

export interface TierData {
  label: string;
  dots: number;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const tierMap: Record<TierLevel, TierData> = {
  inactive: { label: "Inactive", dots: 0, icon: ThreeCirclesIcon },
  core: { label: "G-1", dots: 1, icon: ThreeCirclesIcon },
  lite: { label: "G-2", dots: 2, icon: ThreeCirclesIcon },
  plus: { label: "G-3", dots: 3, icon: ThreeCirclesIcon },
  pro: { label: "G-4", dots: 4, icon: ThreeCirclesIcon },
  elite: { label: "G-5", dots: 5, icon: ThreeCirclesIcon },
  turbo: { label: "G-6", dots: 6, icon: ThreeCirclesIcon },
};
