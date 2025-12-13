"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { translations, type Language } from "./translations"

type I18nContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: keyof typeof translations.en, params?: Record<string, string>) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    const t = (key: keyof typeof translations.en, params?: Record<string, string>) => {
        let text = translations[language][key] || translations["en"][key] || key

        if (params) {
            Object.entries(params).forEach(([paramKey, paramValue]) => {
                text = text.replace(`{${paramKey}}`, paramValue)
            })
        }

        return text
    }

    return (
        <I18nContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </I18nContext.Provider>
    )
}

export function useI18n() {
    const context = useContext(I18nContext)
    if (context === undefined) {
        throw new Error("useI18n must be used within a I18nProvider")
    }
    return context
}
