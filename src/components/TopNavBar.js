import React, { useState } from "react";
import "../index.css";
import hamburger from "../icons/hamburger.svg";
import process from "../icons/process.svg";
import { Dialog, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  XIcon,
} from "@heroicons/react/solid";

export default function HeaderIrene() {

  let [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);
  function closeLateralMenu() {
    setIsLateralMenuOpen(false);
  }
  function openLateralMenu() {
    setIsLateralMenuOpen(true);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="flex row-span-2 justify-between bg-richblack h-32">
        <h1 className="align-middle text-saffron text-3xl font-bold font-serif pl-4 pt-5">
          Irene Veglio
        </h1>
        <img
          src={hamburger}
          className="justify-items-end h-16 w-16 pr-2 pt-4"
          alt="logo"
          onClick={isLateralMenuOpen===true ? closeLateralMenu : openLateralMenu}
        />
      </div>

      <div className="flex col-span-6 justify-items-end align-top">
        <div className={isLateralMenuOpen === true ? "col-end-2 m-4" : "hidden"}>
          <div className="px-6 py-2">
            <a href="https://tailwindcss.com/">
              link alla pagina del generatore
            </a>
          </div>
        </div>
      </div>

      <Transition appear show={isLateralMenuOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeLateralMenu}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}

            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <>
                  <div className="text-center">
                    <button
                      type="button"
                      className="group relative w-1/3 flex justify-end py-2 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-richblack hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                      onClick={closeLateralMenu}
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                      Chiudi
                    </button>
                  </div>

                  <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                      <div>
                        <img
                          src={process}
                          className="mx-auto h-16 w-16  w-auto text-saffron"
                          alt="Workflow"
                          alt="logo"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                          Vuoi usare il generatore di classi?
                        </h2>
                      </div>
                      <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="rounded-md shadow-sm -space-y-px"></div>

                        <div>
                          <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-wintergreen hover:bg-saffron hover:outline-none hover:ring-4 hover:shadow-inner hover:ring-yellow-500"
                          >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                              <CheckCircleIcon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                            </span>
                            Prova!
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
