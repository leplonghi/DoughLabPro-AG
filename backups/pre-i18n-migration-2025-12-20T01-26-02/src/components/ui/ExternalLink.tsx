import React from 'react';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    label?: string; // Optional, can use children instead
    className?: string;
    children?: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
    href,
    label,
    className = "",
    children,
    ...props
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...props}
        >
            {children || label || href}
        </a>
    );
};
