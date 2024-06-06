import { createContext } from "react";
import { I18n } from "i18n-js";
import en from './locales/en';
import es from './locales/es';
import pt from './locales/pt';

const i18n = new I18n({ 
    en, 
    es, 
    pt });
i18n.defaultLocale = 'en';
i18n.locale = 'en';

export const I18nContext = createContext();

export default i18n;