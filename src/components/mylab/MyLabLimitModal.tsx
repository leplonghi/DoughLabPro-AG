import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LockClosedIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import { Trans } from 'react-i18next';

interface MyLabLimitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MyLabLimitModal: React.FC<MyLabLimitModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const { openPaywall } = useUser();

    const handleUpgrade = () => {
        onClose();
        openPaywall('mylab');
    };

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="absolute right-4 top-4 z-10">
                                    <button
                                        type="button"
                                        className="rounded-full bg-slate-100 p-1 text-slate-400 hover:text-slate-500 hover:bg-slate-200 transition-colors"
                                        onClick={onClose}
                                    >
                                        <span className="sr-only">{t('common.close')}</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="p-1">
                                    {/* Image Container */}
                                    <div className="relative h-56 bg-slate-100 w-full overflow-hidden rounded-t-xl group">
                                        <img
                                            src="/images/marketing/mylab-pro.png"
                                            alt={t('common.mylab.pro_lab_analytics')}
                                            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/20">
                                            <LockClosedIcon className="w-3 h-3 text-lime-400" />{t('common.mylab.pro_analytics')}</div>
                                    </div>
                                </div>

                                <div className="px-6 pb-8 pt-2 text-center">
                                    <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-dlp-brand/20 ring-4 ring-white">
                                        <LockClosedIcon className="w-8 h-8 text-dlp-brand-hover" />
                                    </div>

                                    <Dialog.Title as="h3" className="text-2xl font-black leading-tight text-slate-900 mb-2">{t('common.mylab.lab_capacity_reached')}</Dialog.Title>

                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        <Trans i18nKey="common.mylab.limit_reach_desc">
                                            You've reached the <strong>1-batch limit</strong> for the Free plan. Upgrade to <strong>DoughLab Pro</strong> to unlock unlimited storage, advanced analytics, and historical tracking.
                                        </Trans>
                                    </p>

                                    <div className="space-y-3">
                                        <button
                                            type="button"
                                            className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-dlp-brand-hover to-dlp-brand py-4 px-6 text-base font-bold text-white shadow-lg shadow-dlp-brand/30 hover:shadow-xl hover:from-dlp-brand hover:to-lime-400 hover:-translate-y-0.5 transition-all"
                                            onClick={handleUpgrade}
                                        >
                                            <span className="absolute inset-0 rounded-xl bg-white/20 group-hover:opacity-0 transition-opacity"></span>
                                            <SparklesIcon className="w-5 h-5 text-lime-100" />{t('common.mylab.unlock_unlimited_lab')}</button>

                                        <button
                                            type="button"
                                            className="w-full py-3 text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors"
                                            onClick={onClose}
                                        >{t('common.mylab.maybe_later')}</button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};


