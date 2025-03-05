"use client";
/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  BookmarkIcon,
  HeartIcon,
  HomeIcon,
  MusicalNoteIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import CommandPallete from "../molecules/command-pallete";
import { Combobox } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuI {
  label: string;
  link: string;
  desc: string;
  click?: () => void;
  icon?: any;
}

export const items: MenuI[] = [
  {
    label: "Me",
    desc: "Tentang Rabih",
    link: "/",
    icon: (
      <HomeIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
    ),
  },
  {
    label: "Portfolio",
    desc: "Karya yang pernah dibuat",
    link: "/portfolio",
    icon: (
      <BookmarkIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
    ),
  },
  {
    label: "Gallery",
    desc: "Kumpulan media foto/video",
    link: "/gallery",
    icon: (
      <PhotoIcon className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
    ),
  },
  {
    label: "Friends",
    desc: "List teman",
    link: "/friends",
    icon: (
      <HeartIcon className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
    ),
  },
  {
    label: "Certification",
    desc: "Sertifikasi",
    link: "/certification",
    icon: (
      <MusicalNoteIcon className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
    ),
  },
  {
    label: "Blog",
    link: "/blog",
    desc: "Tulisan",
    icon: (
      <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
    ),
  },
];

const CardOverlay = ({ isOpen, onClose, children }: any) => {
  const cardRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/50"
      >
        <motion.div
          ref={cardRef}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
        >
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-2xl ring-1 ring-gray-900/5">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const DropdownList = ({ isOpen, onClose, items }: any) => {
  const router = useRouter();
  return (
    <CardOverlay isOpen={isOpen} onClose={onClose}>
      <div className="p-2">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <Combobox>
          <Combobox.Options static className="space-y-1 p-2">
            {items.map((item: any, index: number) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Combobox.Option
                  value={item}
                  onClick={
                    item.click ? item.click : () => router.push(item.link)
                  }
                  className={({ active }) =>
                    classNames(
                      "flex cursor-pointer select-none rounded-xl p-3 group transition-all duration-200",
                      active ? "bg-gray-100 shadow-sm" : "hover:bg-gray-50"
                    )
                  }
                >
                  {({ active }) => (
                    <>
                      <div
                        className={classNames(
                          "flex h-10 w-10 flex-none items-center justify-center rounded-lg transition-all duration-200",
                          active
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-500"
                        )}
                      >
                        {item.icon}
                      </div>
                      <div className="ml-4 flex-auto">
                        <p
                          className={classNames(
                            "text-sm font-semibold transition-colors duration-200",
                            active ? "text-gray-900" : "text-gray-700"
                          )}
                        >
                          {item.label}
                        </p>
                        <p
                          className={classNames(
                            "text-sm transition-colors duration-200",
                            active ? "text-gray-700" : "text-gray-500"
                          )}
                        >
                          {item.desc}
                        </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: active ? 1 : 0,
                          x: active ? 0 : -10,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="flex items-center text-gray-400"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                      </motion.div>
                    </>
                  )}
                </Combobox.Option>
              </motion.div>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
    </CardOverlay>
  );
};

function Navbar() {
  const [data, setData] = useState({
    commandPalleteOpen: false,
    onHoverPicture: false,
    showItemList: false,
  });
  const toggleCommandPallete = () => {
    setData({
      ...data,
      commandPalleteOpen: !data.commandPalleteOpen,
    });
  };
  const toggleBurger = () => {
    setData((prev) => ({ ...prev, showItemList: !data.showItemList }));
  };
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
                {/* Additional content can be added here if needed */}
              </div>
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

export default Navbar;
