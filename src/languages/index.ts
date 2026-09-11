import es from "./es.json";
import en from "./en.json";
import zhTW from "./zh-TW.json";

export const languages = { es, en, "zh-TW": zhTW } as const;
export type LanguageKey = keyof typeof languages;
export type TranslationKeys = keyof typeof es;

export { es, en, zhTW };
