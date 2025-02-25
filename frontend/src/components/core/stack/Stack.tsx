import React from 'react';
import { StackProps } from '@/types/PropTypes';
import '@/styles/additional_styles.css';

const Stack: React.FC<StackProps> = ({
    direction = 'vertical',
    spacing = '4',
    wrap = false,
    align = 'start',
    justify = 'start',
    children,
    className = '',
}) => {
    const stackClasses = `
        flex
        ${direction === 'horizontal' ? 'flex-row' : 'flex-col'}
        ${wrap ? 'flex-wrap' : 'flex-nowrap'}
        items-${align}
        justify-${justify}
        ${className}
    `;

    return <div className={stackClasses.trim()} style={{ gap: `${spacing}` }}>{children}</div>;
};

export default Stack;
