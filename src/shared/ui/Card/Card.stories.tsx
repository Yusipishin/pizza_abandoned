import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardTheme } from './Card';
import { Text } from '../Text';

const meta: Meta<typeof Card> = {
    component: Card,
    title: 'shared/Card',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
};

export const Inverted: Story = {
    args: {
        children: <Text title="test" text="text text" />,
        theme: CardTheme.INVERTED,
    },
};