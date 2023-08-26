"use client"
import useClickOutside from '@/utils/useClickOutside';
import React, { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

interface CountryOption {
    label: string,
    value: string | null
}
const countries = [
  {
    label: "Select Language",
    value: null,
  },
  {
    label: "🇬🇧 English",
    value: "en",
  },
  {
    label: "🇮🇩 Indonesia",
    value: "id",
  },
  {
    label: "🇯🇵 日本語",
    value: "jp",
  },
];

interface StateI {
  visible: boolean,
  activeLanguage: any,
  loading: boolean,
}
 
function LanguageDropdown({ handleChange }: {
    handleChange: (label: string) => void
}) {
    const [state, setState] = useState<StateI>({
        visible: false,
        activeLanguage: countries.find((it: CountryOption) => it.value === localStorage.getItem('lang')),
        loading: true
    })

    useEffect(() => {
      setState({
        ...state,
        activeLanguage: typeof window !== "undefined" ? (countries.find(it => it.value == localStorage.getItem("lang")) ?? countries[0]) : countries[0],
        loading: false,
      })
    }, [])
    

    const toggleVisible = () => {
        setState({...state, visible: !state.visible})
    }
    const handleClickOutside = () => {
      toggleVisible()
    };
    const ref = useClickOutside(handleClickOutside);
    const handleClickItem = (item: CountryOption) => {
      if(!item.value) {
        return
      }
      // setState({ ...state, activeLanguage: countries.find(it => it.value === item.value) });
      handleChange(item.value)
    }
    // if(state.loading) {
    //   return null
    // }
  return (
    <div>
      <div className="flex relative">
        <button
          onClick={toggleVisible}
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          className="flex-shrink-0 z-10 gap-2 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          {state.activeLanguage.label}
          <ChevronDownIcon className="h-5 w-5" />
        </button>
        {state.visible && (
          <div
            ref={ref}
            id="dropdown-states"
            className="z-10 absolute top-full bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="states-button"
            >
              {countries.map((it: CountryOption) => (
                <li onClick={() => handleClickItem(it)} key={it.label}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <div className="inline-flex items-center">{it.label}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageDropdown