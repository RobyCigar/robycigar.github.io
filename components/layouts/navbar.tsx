"use client"
/* eslint-disable @next/next/no-img-element */
import { useTranslation } from '@/app/i18n';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import React, { ReactElement, useEffect, useState, useRef } from 'react'
import LanguageDropdown from '../molecules/navbar/language-dropdown';
import { useRouter } from "next/navigation";
import CommandPallete from '../molecules/command-pallete';
import Badge from '../atoms/badge';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

interface MenuI {
    label: string,
    link: string,
    click?: () => void,
    icon?: ReactElement
}

    const items: MenuI[] = [
      {
        label: "Me",
        link: "/",
      },
      {
        label: "Portfolio",
        link: "/portfolio",
      },
      {
        label: "Gallery",
        link: "/gallery",
      },
      {
        label: "Friends",
        link: "/friends",
      },
      {
        label: "Certification",
        link: "/certification",
      },
      {
        label: "Blog",
        link: "/blog",
        click: () => {
          window.open("https://dev.to/robycigar");
        },
        icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
      },
    ];
const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const CardOverlay = ({ isOpen, onClose, children }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50">
      <div
        ref={cardRef}
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

const DropdownList = ({ isOpen, onClose, items }) => {
  return (
    <CardOverlay isOpen={isOpen} onClose={onClose}>
      {items.map((item) => (
        <div
          onClick={items?.click ? items.click : undefined}
          key={item.label}
          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
        >
          <div>
            <Link href={item.link} className="font-semibold text-gray-900">
              {item.label}
              <span className="absolute inset-0" />
            </Link>
          </div>
        </div>
      ))}
    </CardOverlay>
  );
};

function Navbar() {
  const translation = useTranslation()
  const router = useRouter()
  const [data, setData] = useState({
    commandPalleteOpen: false,
    onHoverPicture: false,
    showItemList: false,
  })
    const handleChangeLanguage = (lang: string) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("lang", lang)
      }
      translation.setLanguage(lang)
      translation.loadTranslation()
      location.reload()
    }
    const toggleCommandPallete = () => {
      setData({
        ...data,
        commandPalleteOpen: !data.commandPalleteOpen
      })
    }
    const toggleBurger = () => {
      setData(prev => ({...prev, showItemList: !data.showItemList}))
    }
  return (
    <>
      <CommandPallete
        open={data.commandPalleteOpen}
        setOpen={toggleCommandPallete}
      />
      <header className="fixed z-10 w-screen">
        <nav className="backdrop-blur-sm bg-gray-50 shadow border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-stretch space-x-8">
              <div className="flex items-center space-x-4">
                {!data.onHoverPicture ? (
                  <img
                    onMouseEnter={() =>
                      setData({
                        ...data,
                        onHoverPicture: true,
                      })
                    }
                    className="w-10 h-10 rounded-full"
                    src="/assets/foto_profil_linkedin.jpeg"
                    alt="Profile Picture"
                  />
                ) : (
                  <img
                    onMouseLeave={() =>
                      setData({
                        ...data,
                        onHoverPicture: false,
                      })
                    }
                    className="w-10 h-10 rounded-full"
                    src="/assets/foto_profil_twitter.jpeg"
                    alt="Profile Picture"
                  />
                )}
                {/* <div className="font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                </div> */}
              </div>

              {/* <LanguageDropdown handleChange={handleChangeLanguage} /> */}
              <button>
                <Badge style="rounded-md border-gray-300">
                  <code
                    className="text-base font-semibold"
                    onClick={toggleCommandPallete}
                  >
                    /cmd
                  </code>
                </Badge>
              </button>
            </div>
            <div>
              <div className="flex items-center lg:order-2">
                <button
                  onClick={toggleBurger}
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-gray-700 ring-2 ring-gray-200 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  {items.map((it, index) => (
                    <li key={index}>
                      <Link
                        href={it.click ? {} : it.link}
                        onClick={it.click ? it.click : undefined}
                        className="flex hover:underline gap-1 py-2 pr-4 pl-3 text-gray-800 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        aria-current="page"
                      >
                        {it.label}
                        {it.icon ? it.icon : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <DropdownList
        isOpen={data.showItemList}
        onClose={toggleBurger}
        items={items}
      />
      {/* as filler */}
      <div className="invisible h-14"></div>
    </>
  );
}

export default Navbar