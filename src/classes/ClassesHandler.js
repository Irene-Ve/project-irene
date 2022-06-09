import React, {useState} from "react";
import {padding, margin, spacing, flex, grid, layout,typography, background, border, sizing, altro } from "./AllClasses";


export function ClassesHandler(classe) {
    const [details, setDetails] = useState([]);
    let newarrayvalues = [];
    /* funzione che gestisce il passaggio dei dettagli usando la classe passata nei parametri --> switch sulla CLASSE */
    switch (classe) {
        case "Padding":
            newarrayvalues = padding;
            break;
        case "Margin":
            newarrayvalues = margin;
            break;
        case "Spacing":
            newarrayvalues = spacing;
            break;
        case "Flex":
            newarrayvalues = flex;
            break;
        case "Grid":
            newarrayvalues = grid;
            break;
        case "Layout":
            newarrayvalues = layout;
            break;
        case "Typography":
            newarrayvalues = typography;
            break;
        case "Background":
            newarrayvalues = background;
            break;
        case "Border":
            newarrayvalues = border;
            break;
        case "Sizing":
            newarrayvalues = sizing;
            break;
        default:
            newarrayvalues = altro;
            break;
    }

    setDetails((details) => [...details, newarrayvalues]);

    return (
        <div>
            <div className=" " >
                {details.map((singolaClasse) => (
                    <div>
                        {/* Qui dovremmo prendere spunto da CheckBoxList */}
                        {singolaClasse.name}
                    </div>

                ))}
            </div>

            <fieldset>
                <legend className="text-sm font-medium text-gray-900">
                    Seleziona e Personalizza i campi che ti interessano
                </legend>
                <div className="mt-4 pr-8 border-t border-b border-gray-200 divide-y divide-gray-200">
                    {details.map((voce, voceIdx) => (
                        <div key={voceIdx} className="relative flex items-center py-4">
                            <div className="mr-3 flex  h-5">
                                <input
                                    id={voce.id}
                                    name={voceIdx.id}
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                            </div>
                            <div className="min-w-0 flex-1 text-sm">
                                <label
                                    htmlFor={voce.id}
                                    className="font-medium text-gray-700 select-none"
                                >
                                    {voce.name} -
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
        </div>
    );
}