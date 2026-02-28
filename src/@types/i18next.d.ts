
import 'i18next';
import common from '../../public/locales/en/common.json';
import ui from '../../public/locales/en/ui.json';
import calculator from '../../public/locales/en/calculator.json';
import learn from '../../public/locales/en/learn.json';
import styles from '../../public/locales/en/styles.json';
import errors from '../../public/locales/en/errors.json';
import notifications from '../../public/locales/en/notifications.json';
import weather from '../../public/locales/en/weather.json';
import baguette from '../../public/locales/en/baguette_tradition_francaise_detailed_i18n.json';
import california_complete from '../../public/locales/en/california_style_COMPLETE_i18n.json';
import california_detailed from '../../public/locales/en/california_style_detailed_i18n.json';
import chicago from '../../public/locales/en/chicago_deep_dish_i18n.json';
import ciabatta from '../../public/locales/en/ciabatta_high_hydration_detailed_i18n.json';
import detroit from '../../public/locales/en/detroit_style_i18n.json';
import neapolitan from '../../public/locales/en/neapolitan_avpn_classic_i18n.json';
import new_york from '../../public/locales/en/new_york_style_i18n.json';
import roman from '../../public/locales/en/roman_scrocchiarella_detailed_i18n.json';
import sicilian from '../../public/locales/en/sicilian_grandma_pan_detailed_i18n.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common';
        resources: {
            common: typeof common;
            ui: typeof ui;
            calculator: typeof calculator;
            learn: typeof learn;
            styles: typeof styles;
            errors: typeof errors;
            notifications: typeof notifications;
            weather: typeof weather;
            baguette_tradition_francaise_detailed_i18n: typeof baguette;
            california_style_COMPLETE_i18n: typeof california_complete;
            california_style_detailed_i18n: typeof california_detailed;
            chicago_deep_dish_i18n: typeof chicago;
            ciabatta_high_hydration_detailed_i18n: typeof ciabatta;
            detroit_style_i18n: typeof detroit;
            neapolitan_avpn_classic_i18n: typeof neapolitan;
            new_york_style_i18n: typeof new_york;
            roman_scrocchiarella_detailed_i18n: typeof roman;
            sicilian_grandma_pan_detailed_i18n: typeof sicilian;
        };
    }
}
