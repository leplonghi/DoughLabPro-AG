import React, { ReactNode } from 'react';

// Core Contexts
import { I18nProvider } from '@/components/providers/I18nProvider';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastProvider } from '@/components/ToastProvider';
import { UserProvider } from '@/contexts/UserProvider';
import { MarketingProvider } from '@/marketing/MarketingContext';
import { NotificationProvider } from '@/contexts/NotificationContext';
import { RouterProvider, useRouter } from '@/contexts/RouterContext';

// Domain Contexts
import { BatchesProviderComponent } from '@/contexts/BatchesProvider';
import { LevainProvider } from '@/contexts/LevainProvider';
import { GoalsProvider } from '@/contexts/GoalsProvider';
import { FloursProvider } from '@/contexts/FloursProvider';
import { ConsistencyProvider } from '@/contexts/ConsistencyProvider';
import { InsightsProvider } from '@/contexts/InsightsProvider';
import { RecipesProvider } from '@/contexts/RecipesProvider';
import { DoughsProvider } from '@/contexts/DoughsProvider';
import { SensoryProvider } from '@/contexts/SensoryProvider';
import { TimelineProvider } from '@/contexts/TimelineProvider';
import { DoughSessionProvider } from '@/contexts/DoughSessionContext';
import { CalculatorProvider } from '@/contexts/CalculatorContext';
import { StylesProvider } from '@/contexts/StylesProvider';

interface ProvidersProps {
    children: React.ReactNode;
}

const CoreProviders: React.FC<ProvidersProps> = ({ children }) => (
    <I18nProvider>
        <AuthProvider>
            <ToastProvider>
                <UserProvider>
                    <MarketingProvider>
                        <NotificationProvider>
                            {children}
                        </NotificationProvider>
                    </MarketingProvider>
                </UserProvider>
            </ToastProvider>
        </AuthProvider>
    </I18nProvider>
);

const CommonDomainProviders: React.FC<{ children: ReactNode }> = ({ children }) => (
    <FloursProvider>
        <StylesProvider>
            {children}
        </StylesProvider>
    </FloursProvider>
);

const DomainProviders: React.FC<ProvidersProps> = ({ children }) => {
    const { route } = useRouter();

    if (route === 'calculator') {
        return (
            <CommonDomainProviders>
                <CalculatorProvider>
                    <DoughSessionProvider>
                        {children}
                    </DoughSessionProvider>
                </CalculatorProvider>
            </CommonDomainProviders>
        );
    }

    // Default / MyLab (Full Domain)
    return (
        <CommonDomainProviders>
            <BatchesProviderComponent>
                <LevainProvider>
                    <GoalsProvider>
                        <ConsistencyProvider>
                            <InsightsProvider>
                                <RecipesProvider>
                                    <DoughsProvider>
                                        <SensoryProvider>
                                            <TimelineProvider>
                                                <DoughSessionProvider>
                                                    <CalculatorProvider>
                                                        {children}
                                                    </CalculatorProvider>
                                                </DoughSessionProvider>
                                            </TimelineProvider>
                                        </SensoryProvider>
                                    </DoughsProvider>
                                </RecipesProvider>
                            </InsightsProvider>
                        </ConsistencyProvider>
                    </GoalsProvider>
                </LevainProvider>
            </BatchesProviderComponent>
        </CommonDomainProviders>
    );
};

export const AppProviders: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <CoreProviders>
            <RouterProvider>
                <DomainProviders>
                    {children}
                </DomainProviders>
            </RouterProvider>
        </CoreProviders>
    );
};
