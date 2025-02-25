import React from 'react';
import Link from 'next/link';
import { LinkProps } from '@/types/PropTypes';
import '@/styles/additional_styles.css';

const CustomLink: React.FC<LinkProps> = ({ href, label, external = false, children }) => {
    const linkProps = external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};

    return (
        <Link href={href} {...linkProps} className="custom-link">
            {children || label}
        </Link>
    );
};

export default CustomLink;
