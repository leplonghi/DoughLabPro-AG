import React, { createContext, useContext, useState, useEffect } from 'react';
import { FeatureKey, canUseFeature, getCurrentPlan } from '../../permissions';
import { useUser } from '../../contexts/UserProvider';
import { evaluateFomoTrigger, FomoTriggerContext } from './FomoEngine';
import { UpgradeModal } from './components/UpgradeModal';
import { useTranslation } from '@/i18n';

interface FomoContextType {
    triggerFomo: (context: FomoTriggerContext) => void;
    isUpgradeModalOpen: boolean;
    closeUpgradeModal: () => void;
    currentFeatureKey: FeatureKey | null;
}

const FomoContext = createContext<FomoContextType | undefined>(undefined);

export const FomoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
    const { user } = useUser();
    const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
    const [currentFeatureKey, setCurrentFeatureKey] = useState<FeatureKey | null>(null);

    const triggerFomo = (context: FomoTriggerContext) => {
        const plan = getCurrentPlan(user);

        // If user is already Lab Pro, never show FOMO
        if (plan === 'lab_pro') return;

        const featureKey = evaluateFomoTrigger(context);

        if (featureKey) {
            const allowed = canUseFeature(plan, featureKey);
            if (!allowed) {
                setCurrentFeatureKey(featureKey);
                setIsUpgradeModalOpen(true);
            }
        }
    };

    const closeUpgradeModal = () => {
        setIsUpgradeModalOpen(false);
        setCurrentFeatureKey(null);
    };

    return (
        <FomoContext.Provider value={{ triggerFomo, isUpgradeModalOpen, closeUpgradeModal, currentFeatureKey }}>
            {children}
            <UpgradeModal
                isOpen={isUpgradeModalOpen}
                onClose={closeUpgradeModal}
                featureKey={currentFeatureKey}
            />
        </FomoContext.Provider>
    );
};

export const useFomo = () => {
    const context = useContext(FomoContext);
    if (!context) {
        throw new Error('useFomo must be used within a FomoProvider');
    }
    return context;
};
