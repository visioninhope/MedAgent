// src/components/core/stack/Stack.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Stack from './Stack';
import { StackProps } from '@/types/PropTypes';
import Button from '../button/Button';

export default {
    title: 'Core/Stack',
    component: Stack,
    parameters: {
        docs: {
            description: {
                component: 'The **Stack** component organizes child elements in a flexible layout with spacing, wrapping, and alignment options.',
            },
        },
    },
    argTypes: {
        direction: {
            control: 'radio',
            options: ['vertical', 'horizontal'],
            description: 'Layout direction (vertical or horizontal).',
        },
        spacing: {
            control: 'select',
            options: ['1', '2', '4', '8', '16'],
            description: 'Gap between children (Tailwind gap classes).',
        },
        wrap: {
            control: 'boolean',
            description: 'Whether items should wrap when overflowing.',
        },
        align: {
            control: 'radio',
            options: ['start', 'center', 'end', 'stretch'],
            description: 'Alignment of items along the cross axis.',
        },
        justify: {
            control: 'radio',
            options: ['start', 'center', 'between', 'around', 'end'],
            description: 'Justification of items along the main axis.',
        },
    },
} as Meta<typeof Stack>;

const Template: StoryFn<StackProps> = (args) => (
    <Stack {...args}>
        <Button label="Button 1" variant="primary" />
        <Button label="Button 2" variant="secondary" />
        <Button label="Button 3" variant="tertiary" />
        <Button label="Button 4" variant="primary" />
        <Button label="Button 5" variant="primary" />
        <Button label="Button 6" variant="secondary" />
        <Button label="Button 7" variant="tertiary" />
        <Button label="Button 8" variant="primary" />
        <Button label="Button 9" variant="primary" />
        <Button label="Button 10" variant="secondary" />
        <Button label="Button 11" variant="tertiary" />
        <Button label="Button 12" variant="primary" />
        <Button label="Button 13" variant="primary" />
        <Button label="Button 14" variant="secondary" />
        <Button label="Button 15" variant="tertiary" />
        <Button label="Button 16" variant="primary" />
    </Stack>
);

export const Vertical = Template.bind({});
Vertical.args = {
    direction: 'vertical',
    spacing: '2pt',
    wrap: false,
    align: 'start',
    justify: 'start',
};

export const HorizontalWrapCentered = Template.bind({});
HorizontalWrapCentered.args = {
    direction: 'horizontal',
    spacing: '2pt',
    wrap: true,
    align: 'start',
    justify: 'center',
};

export const HorizontalWrap = Template.bind({});
HorizontalWrap.args = {
    direction: 'horizontal',
    spacing: '2pt',
    wrap: true,
    align: 'center',
    justify: 'between',
};

