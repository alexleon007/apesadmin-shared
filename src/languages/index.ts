import es from "./es.json" with { type: "json" };
import en from "./en.json" with { type: "json" };
import zhTW from "./zh-TW.json" with { type: "json" };

export const languages = { es, en, "zh-TW": zhTW } as const;
export type LanguageKey = keyof typeof languages;
export type TranslationKeys = keyof typeof es;

export { es, en, zhTW };
