import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../components/modal/Modal";
import type { ModalProps } from "../components/modal/Modal";
import { TierLevel } from "../components/common/tiers";

type StoryArgs = ModalProps & {
  progressBar?: number;
  tierLevel?: TierLevel;
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
    onClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    tierLevel: "lite",
    progressBar: 75,
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
          }}
          dashboardProps={{
            ...dashboardProps,
            tierLevel: tierLevel,
          }}
        />
      </div>
    );
  },
};
