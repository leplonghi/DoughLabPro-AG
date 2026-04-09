import React, { ReactNode } from 'react';
import { ToastProvider } from '@/components/ToastProvider';
import { UserProvider } from '@/contexts/UserProvider';
import { AuthProvider } from '@/contexts/AuthContext';
import { I18nProvider } from '@/i18n';
import { CalculatorProvider } from '@/contexts/CalculatorContext';
import { DoughSessionProvider } from '@/contexts/DoughSessionContext';
import { StylesProvider } from '@/contexts/StylesProvider';
import { RouterProvider } from '@/contexts/RouterContext';
import { MarketingProvider } from '@/marketing/MarketingContext';
import { FloursProvider } from '@/contexts/FloursProvider';
import { BatchesProvider } from '@/contexts/BatchesProvider';
import { LevainProvider } from '@/contexts/LevainProvider';
import { InsightsProvider } from '@/contexts/InsightsProvider';
import { TimelineProvider } from '@/contexts/TimelineProvider';
import { GoalsProvider } from '@/contexts/GoalsProvider';
import { ConsistencyProvider } from '@/contexts/ConsistencyProvider';
import { DoughsProvider } from '@/contexts/DoughsProvider';
import { RecipesProvider } from '@/contexts/RecipesProvider';
import { SensoryProvider } from '@/contexts/SensoryProvider';
import { NotificationProvider } from '@/contexts/NotificationContext';
import { LearnProvider } from '@/contexts/LearnContext';

const CoreProviders: React.FC<{ children: ReactNode }> = ({ children }) => (
    <I18nProvider>
        <AuthProvider>
            <ToastProvider>
                <UserProvider>
                    <MarketingProvider>
                        <RouterProvider>{children}</RouterProvider>
                    </MarketingProvider>
                </UserProvider>
            </ToastProvider>
        </AuthProvider>
    </I18nProvider>
);

const LabProviders: React.FC<{ children: ReactNode }> = ({ children }) => (
    <FloursProvider>
        <BatchesProvider>
            <LevainProvider>
                <InsightsProvider>
                    <TimelineProvider>
                        <GoalsProvider>
                            <ConsistencyProvider>
                                <DoughsProvider>
                                    <RecipesProvider>
                                        <SensoryProvider>{children}</SensoryProvider>
                                    </RecipesProvider>
                                </DoughsProvider>
                            </ConsistencyProvider>
                        </GoalsProvider>
                    </TimelineProvider>
                </InsightsProvider>
            </LevainProvider>
        </BatchesProvider>
    </FloursProvider>
);

const ProductProviders: React.FC<{ children: ReactNode }> = ({ children }) => (
    <NotificationProvider>
        <LearnProvider>
            <DoughSessionProvider>
                <CalculatorProvider>
                    <StylesProvider>{children}</StylesProvider>
                </CalculatorProvider>
            </DoughSessionProvider>
        </LearnProvider>
    </NotificationProvider>
);

export const AppProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <CoreProviders>
            <LabProviders>
                <ProductProviders>{children}</ProductProviders>
            </LabProviders>
        </CoreProviders>
    );
};

export default AppProviders;
