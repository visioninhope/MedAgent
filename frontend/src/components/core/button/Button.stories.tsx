import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from '@/types/PropTypes';

const meta: Meta<typeof Button> = {
    title: 'Core/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
        },
    },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary Button',
    variant: 'tertiary',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled Button',
    disabled: true,
};
