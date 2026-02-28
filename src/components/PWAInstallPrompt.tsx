import { useTranslation } from '@/i18n';
import { useState } from 'react';
import { X, Share, Zap, Smartphone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePWAInstall } from '@/hooks/usePWAInstall';

export default function PWAInstallPrompt() {
    const { t } = useTranslation();
    const { showPrompt, triggerInstall, hidePrompt, isIOS, isStandalone } = usePWAInstall();
    const [step, setStep] = useState(0); // Para animação se quiser steps

    // Não renderiza se já estiver instalado ou não houver evento
    if (!showPrompt || isStandalone) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={hidePrompt}
            >
                <motion.div
                    initial={{ y: 100, scale: 0.95 }}
                    animate={{ y: 0, scale: 1 }}
                    exit={{ y: 100, scale: 0.95 }}
                    className="w-full max-w-sm bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="relative p-6 pb-0">
                        <button
                            onClick={hidePrompt}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                        <div className="w-20 h-20 rounded-2xl shadow-lg mb-4 flex items-center justify-center overflow-hidden bg-white">
                            <img src="/pwa-192x192.png" alt="DoughLabPro" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('common:instalar_doughlabpro')}</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                            {t('common:instalar_app_descricao', 'Instale nosso app para ter acesso offline, melhor performance e uma experiência em tela cheia.')}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <div className="p-2 bg-dlp-brand-light/30 dark:bg-dlp-brand/20 rounded-lg text-dlp-brand-dark dark:text-dlp-brand">
                                <Smartphone className="w-4 h-4" />
                            </div>
                            <span>{t('common:acesso_direto_da_tela_inicial')}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                <Zap className="w-4 h-4" />
                            </div>
                            <span>{t('common:mais_rapido_responsivo', 'Mais rápido e responsivo')}</span>
                        </div>
                    </div>

                    {/* Ações Específicas por Plataforma */}
                    <div className="p-6 pt-0">
                        {isIOS ? (
                            // Instruções para iOS
                            <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-xl p-4 space-y-3">
                                <p className="text-sm font-medium text-center mb-2">{t('common:como_instalar_no_iphone')}</p>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-zinc-700 rounded-full text-xs font-bold">1</span>
                                    <span>Toque no botão <Share className="w-4 h-4 inline mx-1" /> compartilhar</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-zinc-700 rounded-full text-xs font-bold">2</span>
                                    <span>Role e selecione "Adicionar à Tela de Início"</span>
                                </div>
                            </div>
                        ) : (
                            // Botão para Android/Chrome
                            <button
                                onClick={triggerInstall}
                                className="w-full py-3.5 bg-dlp-brand hover:bg-dlp-brand-hover text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                            >{t('common:instalar_agora')}<ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
