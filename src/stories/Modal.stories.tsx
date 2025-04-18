import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../components/modal/Modal';
import type { ModalProps } from '../components/modal/Modal';
import React from 'react';

type StoryArgs = ModalProps & {
  tierLevel?: 'inactive' | 'lite' | 'core' | 'plus' | 'pro' | 'elite' | 'turbo'
  progressBar?: number
}

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
    progressBar: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    defaultSection: {
      table: { disable: true },
    },
    onClose: { action: 'closed' },
  },
}

export default meta
type Story = StoryObj<StoryArgs>

export const Default: Story = {
  args: {
    tierLevel: 'lite',
    progressBar: 75,
    statusProps: {
      qoinsNumber: 120,
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
    const { tierLevel, progressBar, statusProps, ...rest } = args

    return (
      <div style={{ width: '70vw', height: '60vh', overflow: 'auto' }}>
        <Modal
          {...rest}
          statusProps={{
            ...statusProps,
            tierLevel: tierLevel ?? 'lite',
            progressBar: progressBar ?? 0,
          }}
        />
      </div>
    )
  },
}
