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
  icon: string;
}

export const tierMap: Record<TierLevel, TierData> = {
  inactive: { label: "Inactive", dots: 0, icon: "Inactive" },
  core: { label: "G-1", dots: 1, icon: "Check" },
  lite: { label: "G-2", dots: 2, icon: "Core" },
  plus: { label: "G-3", dots: 3, icon: "Plus" },
  pro: { label: "G-4", dots: 4, icon: "Pro" },
  elite: { label: "G-5", dots: 5, icon: "Elite" },
  turbo: { label: "G-6", dots: 6, icon: "Turbo" },
};
