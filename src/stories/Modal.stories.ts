import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/modal/Modal';
import React from 'react'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClose: () => {},
  },
  render: function (args) {
    return React.createElement(
      'div',
      {
        style: {
          width: '70vw',
          height: '60vh',
          overflow: 'auto',
        },
      },
      React.createElement(Modal, { ...args })
    )
  },
}