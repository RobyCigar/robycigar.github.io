"use client"
import { useState, useEffect } from "react"
import * as config from "@/locales/en/translation.json"

const client = typeof window !== undefined
export type TranslationType = {
    [K in keyof typeof config]: string
} | any
export const useTranslation = ({ reload, setReload }: any = {}): {t: TranslationType, loadTranslation: any, setLanguage: any, language: any} => {
    const lang = (client ? window.localStorage.getItem("lang") : 'en') ?? 'en'
    const [language, setLanguage] = useState(lang)
    const [translation, setTranslation] = useState<TranslationType>({})
    useEffect(() => {
        loadTranslation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language])
    const loadTranslation = async () => {
        const translation = await import(`@/locales/${language}/translation.json`)
        setTranslation(translation)
        if(reload) {
            setReload(translation)
            reload
        }
    }
    return {
        t: translation,
        loadTranslation,
        setLanguage,
        language
    }
}