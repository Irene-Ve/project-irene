import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  XIcon, PhoneIcon, PhoneOutgoingIcon,
} from "@heroicons/react/solid";
import "../index.css";

export default function ModaleIreneChiamata({ titolo, nome, numeroDiTelefono }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm hover:bg-irene-deep text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          <PhoneIcon
            className="-ml-1 mr-2 h-5 w-5 text-irene-shamrock"
            aria-hidden="true"
          />
          {titolo}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
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
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
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
                      /* className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-irene-charcoal hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" */
                      className="group relative w-1/3 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-irene-charcoal hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      onClick={closeModal}
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <XIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                      Chiudi
                    </button>
                  </div>

                  <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                      <div>
                        <PhoneIcon
                          className="mx-auto h-12 w-auto text-irene-shamrock"
                          alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                          Vuoi chiamare <div>{nome} ?</div>
                        </h2>
                      </div>
                      <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="rounded-md shadow-sm -space-y-px">


                        </div>

                        <div>
                          <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-braver-orange hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                              <PhoneOutgoingIcon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                            </span>
                            Chiama {numeroDiTelefono}
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
    </>
  );
}
