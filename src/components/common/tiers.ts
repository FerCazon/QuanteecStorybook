import { FunctionComponent, SVGProps } from "react";
import Level3 from "../svg/Level3";
import Level0 from "../svg/Level0";
import Level1 from "../svg/Level1";
import Level2 from "../svg/Level2";
import Level4 from "../svg/Level4";
import Level5 from "../svg/Level5";
import Level6 from "../svg/Level6";

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
  inactive: { label: "Inactive", dots: 0, icon: Level0 },
  core: { label: "G-1", dots: 1, icon: Level1 },
  lite: { label: "G-2", dots: 2, icon: Level2 },
  plus: { label: "G-3", dots: 3, icon: Level3 },
  pro: { label: "G-4", dots: 4, icon: Level4 },
  elite: { label: "G-5", dots: 5, icon: Level5 },
  turbo: { label: "G-6", dots: 6, icon: Level6 },
};
