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

export const AppProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <I18nProvider>
            <AuthProvider>
                <ToastProvider>
                    <UserProvider>
                        <MarketingProvider>
                            <RouterProvider>
                                <DoughSessionProvider>
                                    <CalculatorProvider>
                                        <StylesProvider>
                                            {children}
                                        </StylesProvider>
                                    </CalculatorProvider>
                                </DoughSessionProvider>
                            </RouterProvider>
                        </MarketingProvider>
                    </UserProvider>
                </ToastProvider>
            </AuthProvider>
        </I18nProvider>
    );
};

export default AppProviders;
