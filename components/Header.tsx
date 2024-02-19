"use client";
import { Bars3Icon, ChevronDownIcon ,XMarkIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-[#013894]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg px-8"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5 ">
            <span className="sr-only">Booking.com</span>
            <img className="h-12 w-auto" src="booking_logo.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover
            className={"h-5 w-5 flex-none text-white"}
            aria-hidden="true"
          >
            <Popover.Button
              className={
                "flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
              }
            >
              Stays
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-white"
              />
            </Popover.Button>
            <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            ></Transition>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  );
}
