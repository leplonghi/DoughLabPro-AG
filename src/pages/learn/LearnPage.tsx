
// Force rebuild
import React from 'react';
import { useTranslation } from '@/i18n';
import { Page } from '@/types';
import {
    AcademicCapIcon,
    WrenchScrewdriverIcon,
    FermentationIcon,
    SparklesIcon,
    QuestionMarkCircleIcon,
    FlourIcon,
    FlaskIcon,
    BookOpenIcon,
    ListBulletIcon,
    FireIcon,
    BeakerIcon,
    SunIcon,
    CubeIcon,
    ShieldCheckIcon,
    WaterIcon,
    SaltIcon,
    OilIcon,
    TagIcon,
    GlobeAltIcon,
} from '@/components/ui/Icons';
import { ProFeatureLock } from '@/components/ProFeatureLock';

interface LearnPageProps {
    onNavigate: (page: Page) => void;
}

const LearnCategoryCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
}> = ({ icon, title, description, onClick }) => (
    <button
        onClick={onClick}
        className="group h-full text-left flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="flex items-start justify-between mb-4 relative z-10">
            <div className="p-3 rounded-xl bg-lime-50 text-lime-600 group-hover:bg-lime-500 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6" })}
            </div>
        </div>

        <div className="relative z-10">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-lime-700 transition-colors duration-300 mb-2">
                {title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {description}
            </p>
        </div>
    </button>
);

const SectionHeader: React.FC<{ title: string; icon?: React.ReactNode }> = ({ title, icon }) => (
    <div className="flex items-center gap-3 mb-6 mt-12 first:mt-0 pb-4 border-b border-slate-100">
        {icon && <div className="text-lime-600">{icon}</div>}
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
    </div>
);

const SectionCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    itemCount: number;
    onClick: () => void;
}> = ({ icon, title, itemCount, onClick }) => (
    <button
        onClick={onClick}
        className="group h-full text-left flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="p-4 rounded-full bg-lime-50 text-lime-600 group-hover:bg-lime-500 group-hover:text-white transition-colors duration-300 mb-4 relative z-10">
            {React.cloneElement(icon as React.ReactElement, { className: "h-10 w-10" })}
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-700 transition-colors duration-300 mb-2 text-center relative z-10">
            {title}
        </h3>

        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full group-hover:bg-white/80 transition-colors relative z-10">
            {itemCount} Topics
        </span>
    </button>
);

const LearnPage: React.FC<LearnPageProps> = ({ onNavigate }) => {
    const { t } = useTranslation();
    const [activeSectionIndex, setActiveSectionIndex] = React.useState<number | null>(null);

    const sections = [
        {
            title: "Foundations",
            icon: <AcademicCapIcon className="h-6 w-6" />,
            items: [
                { page: 'learn/dough-science', title: 'Dough Science', description: 'The fundamental physics of gluten networks, hydration, and viscoelasticity.', icon: <SparklesIcon /> },
                { page: 'learn/fundamentals', title: 'Baking Fundamentals', description: 'Core concepts every baker needs to know.', icon: <BookOpenIcon /> },
                { page: 'learn/glossary', title: 'Technical Glossary', description: 'Definitions of standardized baking terminology.', icon: <ListBulletIcon /> },
            ]
        },
        {
            title: "Ingredients",
            icon: <FlourIcon className="h-6 w-6" />,
            items: [
                { page: 'learn/ingredients/flours', title: 'Flours Library', description: 'Comprehensive database of flours and their properties.', icon: <FlourIcon /> },
                { page: 'learn/ingredients', title: 'Ingredients Overview', description: 'Selection criteria for professional-grade flour, water, salt, and yeast.', icon: <FlourIcon /> },
                { page: 'learn/water', title: 'Water Chemistry', description: 'Impact of pH, hardness, and mineral content on dough rheology.', icon: <WaterIcon /> },
                { page: 'learn/salt', title: 'The Role of Salt', description: 'Ionic functions of salt in gluten strengthening and yeast regulation.', icon: <SaltIcon /> },
                { page: 'learn/fats', title: 'Fats & Lipids', description: 'How oils and fats affect crumb softness, shelf life, and structure.', icon: <OilIcon /> },
                { page: 'learn/sugars-malts-enzymes', title: 'Sugars & Enzymes', description: 'Amylase activity, malt addition, and their role in fermentation and crust color.', icon: <SparklesIcon /> },
                { page: 'learn/ingredients/yeasts', title: 'Yeasts', description: 'Understanding commercial and wild yeasts.', icon: <FermentationIcon /> },
            ]
        },
        {
            title: "Fermentation Science",
            icon: <FermentationIcon className="h-6 w-6" />,
            items: [
                { page: 'learn/fermentation-biochemistry', title: 'Fermentation Biochemistry', description: 'Yeast metabolism, bacterial activity, and the creation of flavor compounds.', icon: <BeakerIcon />, isPro: true },
                { page: 'learn/fermentation', title: 'Fermentation Control', description: 'Managing time, temperature, and inoculation for consistent results.', icon: <FermentationIcon /> },
                { page: 'learn/preferments', title: 'Preferments (Biga/Poolish)', description: 'Using indirect methods to boost flavor, extensibility, and shelf life.', icon: <BeakerIcon /> },
                { page: 'learn/ambient-vs-cold-fermentation', title: 'Ambient vs. Cold', description: 'Comparative analysis of enzymatic activity at different temperatures.', icon: <SunIcon /> },
                { page: 'learn/dough-aging', title: 'Maturation & Aging', description: 'The difference between fermentation (gas) and maturation (flavor/structure).', icon: <FermentationIcon /> },
            ]
        },
        {
            title: "Gluten & Structure",
            icon: <CubeIcon className="h-6 w-6" />,
            items: [
                { page: 'learn/crumb-structure', title: 'Crumb Structure', description: 'The mechanics of alveoli formation and gas retention for the perfect open crumb.', icon: <CubeIcon /> },
                { page: 'learn/methods', title: 'Structure Building', description: 'Methods to build and maintain dough structure.', icon: <CubeIcon /> },
            ]
        },
        {
            title: "Handling Techniques",
            icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
            items: [
                { page: 'learn/techniques', title: 'Core Techniques', description: 'Autolyse, bassinage, coil folds, and lamination explained.', icon: <WrenchScrewdriverIcon /> },
                { page: 'learn/mixing-techniques', title: 'Mixing Science', description: 'Mechanical energy input, friction factors, and gluten development stages.', icon: <CubeIcon /> },
                { page: 'learn/balling-technique', title: 'Balling & Shaping', description: 'Surface tension mechanics and their effect on the final proof.', icon: <CubeIcon /> },
                { page: 'learn/autolyse', title: 'Autolyse', description: 'The science of resting dough for extensibility.', icon: <WrenchScrewdriverIcon /> },
            ]
        },
        {
            title: "Baking Science",
            icon: <FireIcon className="h-6 w-6" />,
            items: [
                { page: 'learn/oven-science', title: 'Oven Thermodynamics', description: 'Conduction, convection, and radiation profiles of different oven types.', icon: <FireIcon />, isPro: true },
                { page: 'learn/oven-spring', title: 'Oven Spring', description: 'Thermodynamics of the initial expansion phase during baking.', icon: <FireIcon /> },
                { page: 'learn/parbaking', title: 'Parbaking Strategy', description: 'Optimizing workflow with double-baking techniques.', icon: <FireIcon /> },
                { page: 'learn/temperature-control', title: 'Temperature Control', description: 'Calculating Desired Dough Temperature (DDT) for precision baking.', icon: <SunIcon /> },
            ]
        },
        {
            title: "Troubleshooting",
            icon: <QuestionMarkCircleIcon className="h-6 w-6" />,
            items: [
                { page: 'learn/troubleshooting', title: 'Troubleshooting', description: 'Diagnostic guide for common defects and their root causes.', icon: <QuestionMarkCircleIcon /> },
                { page: 'learn/troubleshooting-guide', title: 'Visual Guide', description: 'Visual references for common dough issues.', icon: <QuestionMarkCircleIcon /> },
            ]
        },
        {
            title: "Technical References",
            icon: <BookOpenIcon className="h-6 w-6" />,
            items: [
                { page: 'learn/references', title: 'References Library', description: 'Citations and sources for the scientific principles used in DoughLabPro.', icon: <BookOpenIcon /> },
                { page: 'learn/chemistry-library', title: 'Chemistry Library', description: 'Deep dive into enzymatic reactions, Maillard reaction, and caramelization.', icon: <FlaskIcon />, isPro: true },
                { page: 'learn/equipment', title: 'Tools & Equipment', description: 'Technical impact of baking surfaces (steel vs stone) and mixers.', icon: <WrenchScrewdriverIcon /> },
                { page: 'learn/hygiene-safety', title: 'Food Safety', description: 'HACCP principles and pathogen control in the dough lab.', icon: <ShieldCheckIcon /> },
            ]
        }
    ];

    const activeSection = activeSectionIndex !== null ? sections[activeSectionIndex] : null;

    return (
        <div className="mx-auto max-w-7xl animate-fade-in pb-20">
            {/* Hero Section */}
            <div className="text-center mb-16 relative py-10">
                <div className="absolute inset-0 bg-gradient-to-b from-lime-50/50 to-transparent -z-10 rounded-b-[3rem]" />
                <div className="inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 ring-1 ring-slate-100">
                    <AcademicCapIcon className="h-12 w-12 text-lime-600" />
                </div>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    Dough Science Library
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
                    A comprehensive technical resource for the modern baker. Explore the <span className="font-semibold text-lime-700">physics</span>, <span className="font-semibold text-lime-700">chemistry</span>, and <span className="font-semibold text-lime-700">gastronomy</span> of dough making.
                </p>
            </div>

            <div className="px-4 sm:px-6">
                {activeSection ? (
                    <div className="animate-fade-in">
                        <button
                            onClick={() => setActiveSectionIndex(null)}
                            className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-lime-600 transition-colors"
                        >
                            &larr; Back to Categories
                        </button>

                        <SectionHeader title={activeSection.title} icon={activeSection.icon} />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {activeSection.items.map((item: any) => {
                                const card = (
                                    <LearnCategoryCard
                                        key={item.page}
                                        icon={item.icon}
                                        title={item.title}
                                        description={item.description}
                                        onClick={() => onNavigate(item.page as Page)}
                                    />
                                );

                                if (item.isPro) {
                                    return (
                                        <ProFeatureLock
                                            key={item.page}
                                            featureKey="learn_advanced"
                                            contextLabel="Advanced Baking Science"
                                            origin="learn"
                                        >
                                            {card}
                                        </ProFeatureLock>
                                    );
                                }
                                return card;
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {sections.map((section, idx) => (
                            <SectionCard
                                key={idx}
                                icon={section.icon}
                                title={section.title}
                                itemCount={section.items.length}
                                onClick={() => setActiveSectionIndex(idx)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LearnPage;
