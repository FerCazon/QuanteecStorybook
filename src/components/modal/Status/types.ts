import { Sponsor } from "../../common/sponsors";

export type TierLevel =
  | "inactive"
  | "lite"
  | "core"
  | "plus"
  | "pro"
  | "elite"
  | "turbo";

export interface StatusSliderProps {
  qoinsNumber?: number;
  progressBar?: number;
  bottomText?: string;
  radioLabel?: string;
  learnMoreText?: string;
  claimText?: string;
  qoinsLabel?: string;
  nextGenText?: string;
  showDots?: boolean;
  defaultSwitchActive?: boolean;
  tierLevel?: TierLevel;
  forceClaimEnabled?: boolean;
  sponsor?: Sponsor;
}
