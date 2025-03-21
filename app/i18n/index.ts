"use client"
import { useState, useEffect } from "react"
import * as config from "@/locales/en/translation.json"

export type TranslationType = {
    [K in keyof typeof config]: string
} | any
export const useTranslation = ({ reload, setReload }: any = {}): any => {
    const lang = (typeof window !== "undefined" ? window.localStorage.getItem("lang") : 'id') ?? 'en'
    const [language, setLanguage] = useState(lang)
    // const [translation, setTranslation] = useState<TranslationType>({})
    // useEffect(() => {
    //     loadTranslation()
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
    // const loadTranslation = async () => {
    //     const translation = await import(`@/locales/id/translation.json`)
    //     setTranslation(translation)
    //     if(reload) {
    //         setReload(translation)
    //         reload
    //     }
    // }
    return {
        t: config,
        // loadTranslation,
        setLanguage,
        language
    }
}