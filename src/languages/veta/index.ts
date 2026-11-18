import es from "./es.json";
import en from "./en.json";

export const vetaLanguages = { es, en } as const;
export type VetaLanguageKey = keyof typeof vetaLanguages;
export type VetaTranslationKeys = keyof typeof es;

export { es, en };
