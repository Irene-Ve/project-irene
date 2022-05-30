import React, { useEffect, useState } from "react";

const codice = [{ id: 1, name: " <div class='flex flex-col-reverse'> "},
    { id: 2, name: " <div>01</div> "},
    { id: 3, name: " <div>02</div> "},
    { id: 4, name: " <div>03</div> "},
    { id: 5, name: " </div> "},
];

export default function TagPreview() {
  return (
    <div className="h-full">
      <legend className="text-sm font-medium text-gray-900">
        tag preview{" "}
      </legend>
      <div className="flex flex-col mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        <div className="py-8">
          <legend className="text-sm font-medium text-gray-900">Codice</legend>
          <div className="bg-richblack rounded-2xl text-gray-300 px-6  py-8">
              <code className="">
                {(codice.map((riga) => (
                    <p>{riga.name}</p>
                    )))}
            </code>
          </div>
        </div>

        <div className="py-8">
          <legend className="text-sm font-medium text-gray-900">
            Esempio grafico
          </legend>
          <div className="bg-white text-black rounded-2xl">
              <div className="flex flex-col mx-auto space-y-4 bg-red-500 rounded-xl">
                  <div className="">01</div>
                  <div>02</div>
                  <div>03</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
