import React, {useState} from "react";

const people = [
  { id: 1, name: "p" },
  { id: 2, name: "pl" },
  { id: 3, name: "pr" },
  { id: 4, name: "pt" },
  { id: 5, name: "pb" },
  { id: 6, name: "px" },
  { id: 7, name: "py" },
];

export default function CheckboxList(classe) {

    {/* function getDetailsByClass(){
        switch(classe){
            case "Padding": getDetailsByClass('Padding');
                             break;
            case "Margin": getDetailsByClass('Margin');
                            break;


        }
    };    */}

    return (
    <fieldset>
      <legend className="text-sm font-medium text-gray-900">Personalizza</legend>
      <div className="mt-4 pr-8 border-t border-b border-gray-200 divide-y divide-gray-200">
        {people.map((person, personIdx) => (
          <div key={personIdx} className="relative flex items-center py-4">
            <div className="mr-3 flex  h-5">
              <input
                id={person.id}
                name={person.id}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="min-w-0 flex-1 text-sm">
              <label
                htmlFor={person.id}
                className="font-medium text-gray-700 select-none"
              >
                {person.name} -
              </label>
                <input
                  className="appearance-none w-1/6 ml-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="value-px"
                  type="text"
                  placeholder="24"
                />
            </div>
          </div>
        ))}
      </div>
    </fieldset>

  );
}
