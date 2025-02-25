// src/components/core/link/Link.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomLink from './Link';
import { LinkProps } from '@/types/PropTypes';

export default {
    title: 'Core/Link',
    component: CustomLink,
    parameters: {
        docs: {
            description: {
                component: 'The **Link** component provides navigation for internal and external URLs, supporting customization.',
            },
        },
    },
    argTypes: {
        href: {
            control: 'text',
            description: 'The target URL for the link.',
        },
        label: {
            control: 'text',
            description: 'The text displayed for the link.',
        },
        external: {
            control: 'boolean',
            description: 'Opens the link in a new tab if true.',
        },
        children: {
            description: 'Optional custom content inside the link.',
        },
    },
} as Meta<typeof CustomLink>;

const Template: StoryFn<LinkProps> = (args) => <CustomLink {...args} />;

// 🌟 Default Link
export const Default = Template.bind({});
Default.args = {
    href: 'https://example.com',
    label: 'Visit Example',
};

// 🌟 External Link
export const External = Template.bind({});
External.args = {
    href: 'https://example.com',
    label: 'Open in New Tab',
    external: true,
};

// 🌟 Link with Custom Content (Children)
export const WithChildren = Template.bind({});
WithChildren.args = {
    href: 'https://example.com',
    children: <span>🔗 Custom Content Link</span>,
};
