import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../components/modal/Modal";
import { action } from "@storybook/addon-actions";
import type { ModalProps } from "../components/modal/Modal";
import { TierLevel } from "../components/common/tiers";
import type { Sponsor } from "../components/common/sponsors";

type StoryArgs = ModalProps & {
  progressBar?: number;
  tierLevel?: TierLevel;
  switchOn: boolean;
  onSwitchToggle: () => void;
  sponsor?: Sponsor;
};

const meta: Meta<StoryArgs> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tierLevel: {
      name: "Dashboard Tier (G-n)",
      control: { type: "select" },
      options: [
        "inactive",
        "core",
        "lite",
        "plus",
        "pro",
        "elite",
        "turbo",
      ] as TierLevel[],
      defaultValue: "lite",
    },
    progressBar: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    defaultSection: {
      table: { disable: true },
    },
    sponsor: {
      name: "Sponsor",
      control: { type: "select" },
      options: ["quanteec", "redbull"],
      defaultValue: "quanteec",
    },
    onClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    tierLevel: "lite",
    progressBar: 75,
    switchOn: false,
    onSwitchToggle: action("dashboardSwitchToggle"),
    statusProps: {
      qoinsNumber: 120,
      bottomText: "Start being part of something new",
      radioLabel: "Stream Boost",
      learnMoreText: "Learn More",
    },
    dashboardProps: {
      connected: 20,
      sharedData: 90,
      energySaved: 50,
      contributorsLabel: "Contributors",
      dataLabel: "Data",
      energyLabel: "Energy",
      switchOn: false,
      onSwitchToggle: action("dashboardSwitchToggle"),
    },
  },
  render: (args) => {
    const { tierLevel, progressBar, statusProps, dashboardProps, ...rest } =
      args;

    return (
      <div style={{ width: "70vw", height: "60vh", overflow: "auto" }}>
        <Modal
          {...rest}
          statusProps={{
            ...statusProps,
            tierLevel: tierLevel ?? "lite",
            progressBar: progressBar ?? 0,
            sponsor: args.sponsor,
          }}
          dashboardProps={{
            ...dashboardProps,
            tierLevel: tierLevel,
            switchOn: args.switchOn,
            onSwitchToggle: args.onSwitchToggle,
          }}
        />
      </div>
    );
  },
};
