import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../components/modal/Modal';
import type { ModalProps } from '../components/modal/Modal';
import React from 'react';

type StoryArgs = ModalProps & {
  tierLevel?: 'inactive' | 'lite' | 'core' | 'plus' | 'pro' | 'elite' | 'turbo';
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tierLevel: {
      control: { type: 'select' },
      options: ['inactive', 'lite', 'core', 'plus', 'pro', 'elite', 'turbo'],
    },
    dashboardProps: {
      control: 'object',
    },
    defaultSection: {
      table: {
        disable: true,
      },
    }
  },
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    tierLevel: 'lite',
    statusProps: {
      qoinsNumber: 120,
      progressBar: 75,
      bottomText: 'Start being part of something new',
      radioLabel: 'Stream Boost',
      learnMoreText: 'Learn More',
    },
    dashboardProps: {
      connected: 20,
      sharedData: 90,
      energySaved: 50,
      contributorsLabel: 'Users',
      dataLabel: 'Shared Data',
      energyLabel: 'Power Saved',
      liteLabel: 'Efficiency Mode',
      boostLabel: 'Boost',
    },
  },
  render: (args) => {
    const { tierLevel, ...rest } = args;
    return (
      <div style={{ width: '70vw', height: '60vh', overflow: 'auto' }}>
        <Modal
          {...rest}
          statusProps={{
            ...args.statusProps,
            tierLevel: tierLevel ?? 'lite',
          }}
        />
      </div>
    );
  },
};
