import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from '@/types/PropTypes';
import { Mail, Bell } from 'lucide-react';

const meta: Meta<typeof Button> = {
    title: 'Core/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'This is the **Button** component used for primary actions. It supports variants like primary, secondary, and tertiary, and can be disabled when necessary.',
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
            description: 'Defines the style of the button.',
        },
        label: {
            control: 'text',
            description: 'The text displayed inside the button.',
        },
        onClick: {
            action: 'clicked',
            description: 'Callback when the button is clicked.',
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button if set to true.',
        },
        children: {
            description: 'Custom content such as icons alongside text.',
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

export const IconWithLabel = Template.bind({});
IconWithLabel.args = {
    variant: 'primary',
    children: (
        <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>Email Me</span>
        </div>
    ),
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    variant: 'primary',
    children: <Bell size={18} />,
};
