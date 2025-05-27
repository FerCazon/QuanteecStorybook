import { Sponsor } from "../../common/sponsors";
import { TierLevel } from "../../common/tiers";

export interface DashboardSliderProps {
  connected?: number;
  sharedData?: number;
  energySaved?: number;
  contributorsLabel?: string;
  dataLabel?: string;
  energyLabel?: string;
  tierLevel?: TierLevel;
  switchOn: boolean;
  onSwitchToggle: () => void;
  sponsor?: Sponsor;
}
