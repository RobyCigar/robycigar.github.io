import React, { useEffect } from 'react'
import useLocalStorage from "@/utils/useLocalStorage";

function useThemes() {
    const [dark, setDark] = useLocalStorage<boolean>("is_dark", false);
    useEffect(() => {
        if (dark) {
        const root = document.documentElement;
        root.classList.add("dark");
        }
    });

    const onChangeDarkMode = () => {
        const root = document.documentElement;
        root.classList.toggle("dark");
        setDark(!dark);
    };

    return {
        onChangeDarkMode,
        dark,
        setDark
    }
}

export default useThemes