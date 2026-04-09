import React from 'react';
import AppPageLayout, { AppPageHeaderConfig } from '@/components/ui/AppPageLayout';

interface LibraryPageLayoutProps {
    children: React.ReactNode;
    pageHeader?: AppPageHeaderConfig | false;
}

export const LibraryPageLayout: React.FC<LibraryPageLayoutProps> = ({ children, pageHeader = false }) => {
    return <AppPageLayout width="wide" density="default" pageHeader={pageHeader}>{children}</AppPageLayout>;
};


