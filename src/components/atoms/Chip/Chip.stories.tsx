import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'number', min: 0 },
      description: 'ID usado para determinar el color del chip',
    },
    label: {
      control: 'text',
      description: 'Texto que se muestra en el chip',
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
    },
    onClick: {
      action: 'clicked',
      description: 'Manejador de clic',
    },
  },
  args: {
    id: 0,
    label: 'Action',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 0,
    label: 'Action',
  },
};

export const Secondary: Story = {
  args: {
    id: 1,
    label: 'Adventure',
  },
};

export const Tertiary: Story = {
  args: {
    id: 2,
    label: 'Comedy',
  },
};

export const Clickable: Story = {
  args: {
    id: 0,
    label: 'Click me!',
    onClick: () => alert('Chip clicked!'),
  },
};

export const WithCustomClass: Story = {
  args: {
    id: 1,
    label: 'Custom Style',
    className: 'font-bold uppercase',
  },
};
