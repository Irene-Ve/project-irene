/* This example requires Tailwind CSS v2.0+
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
*
*
* */
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import {classiTailwind} from "./Generator";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function SelectFromList({query,setQuery}) {
/* USARE LE GRAFFE (cost che verranno cambiate/dinamiche */
  /*
    const selectElement = document.querySelector('.class-select');
  selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.result');
    result.textContent = `You like ${event.target.value}`;
  });
  */

  return (
    <div className="z-50">
      {/*
           <label>
        scegli una classe
        <select id="class-select" name="class-select" onChange="ClassesHandler(classe)">
          <option value="padding">padding</option>
          <option value="margin">margin</option>
          <option value="spacing">spacing</option>
          <option value="flex">flex</option>
        </select>
      </label>
      <div className="result"></div>
      */}
      <Listbox value={query} onChange={setQuery}>
        {({ open }) => (
            <>
              <Listbox.Label className="block text-xs font-medium text-gray-500 pt-4">
                Inserisci la classe di interesse
              </Listbox.Label>

                <div className="mt-1 relative">
                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{query.name}</span>
                </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                  />
                </span>
                </Listbox.Button>

                <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {classiTailwind.map((classe) => (
                        <Listbox.Option
                            key={classe.id}
                            className={({ active }) =>
                                classNames(
                                    active ? "text-white bg-indigo-600" : "text-gray-900",
                                    "cursor-default select-none relative py-2 pl-3 pr-9"
                                )
                            }
                            value={classe}
                            /* essendo il nuovo selected deve essere tutto l'oggetto (id,name,value) */
                        >
                          {({ query, active }) => (
                              <>
                                <div className="flex items-center">
                            <span
                                className={classNames(
                                    query ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                )}
                            >
                              {classe.name}
                            </span>
                                </div>

                                {query ? (
                                    <span
                                        className={classNames(
                                            active ? "text-white" : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                        )}
                                    >
                              <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                              />
                            </span>
                                ) : null}
                              </>
                          )}
                        </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
        )}
      </Listbox>


    </div>
  );
}
