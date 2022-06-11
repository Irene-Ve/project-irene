import React, { useState } from "react";
import SelectCheckboxList from "./SelectCheckboxList";

const allClasses = [
  { id: 1, name: "padding" },
  { id: 2, name: "margin" },
  { id: 3, name: "spacing" },
  { id: 4, name: "flex" },
  { id: 5, name: "grid" },
  { id: 6, name: "layout" },
  { id: 7, name: "typography" },
  { id: 8, name: "background" },
  { id: 9, name: "border" },
  { id: 10, name: "sizing" },
  { id: 11, name: "altro" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CheckboxList({ query, sv, setSV }) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-gray-900">
        Personalizza
      </legend>
      <div className="mt-4 pr-8 border-t border-b border-gray-200 divide-y divide-gray-200">
        {query.values.map((sottoclasse) => (
          <div key={sottoclasse.id} className="relative flex items-center py-4">
            <div className="mr-3 flex  h-5">
              <input
                id={sottoclasse.id}
                name={sottoclasse.id}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="min-w-0 flex-1 text-sm">
              <label
                htmlFor={sottoclasse.id}
                className="font-medium text-gray-700 select-none"
              >
                {sottoclasse.name} -
              </label>

              <div>
                <div
                  className={({ sottoclasse }) =>
                    classNames(
                      sottoclasse.isText === true
                        ? "appearance-none w-1/6 ml-2 bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        : "hidden"
                    )
                  }
                >
                  <input  classname="w-1/4" id="value-px" type="text" placeholder="24" />
                </div>

                <div
                  className={({ sottoclasse }) =>
                    classNames(
                      sottoclasse.isText === true
                        ? "hidden"
                        : "ml-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    )
                  }
                >
                  <SelectCheckboxList sc={sottoclasse} sv={sv} setSV={setSV} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
