import React from 'react';

interface EmptyStateProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    action?: { label: string; onClick: () => void };
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
    return (
        <div className="empty-state">
            <div className="empty-state__icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            {action && (
                <button className="btn-primary" onClick={action.onClick}>
                    {action.label}
                </button>
            )}
        </div>
    );
}
