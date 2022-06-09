import React, {useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CheckboxList from "./CheckboxList";
import TagPreview from "./TagPreview";
import SelectFromList from "./SelectFromList";

import {
  altro,
  background,
  border,
  flex,
  grid,
  layout,
  margin,
  padding,
  sizing,
  spacing,
  typography
} from "../classes/AllClasses";

const classi = [
  'Padding',
  'Margin',
  'Layout',
  'Flex',
  'Grid',
  'Sizing',

  'Altro',
]

export const classiTailwind = [
  {
    id: 1,
    name: "padding",
    values: padding
  },
  {
    id: 2,
    name: "margin",
    values: margin
  },
  {
    id: 3,
    name: "spacing",
    values: spacing
  },
  {
    id: 4,
    name: "flex",
    values: flex
  },
  {
    id: 5,
    name: "grid",
    values: grid
  },
  {
    id: 6,
    name: "layout",
    values: layout
  },
  {
    id: 7,
    name: "typography",
    values: typography
  },
  {
    id: 8,
    name: "background",
    values: background
  },
  {
    id: 9,
    name: "border",
    values: border
  },
  {
    id: 10,
    name: "sizing",
    values: sizing
  },
  {
    id: 11,
    name: "altro",
    values: altro
  },
];

export default function Generator() {
  const [query, setQuery] = useState(classiTailwind[0])
  const [selectedValue, setSelectedValue] = useState('')

  const filteredClasseTailwind =
      query === ''
          ? classiTailwind
          : classiTailwind.filter((classe) => {
            return classe.name.toLowerCase().includes(query.name.toLowerCase())
          })
  return (
    <div id="generator" >
      <Navbar/>
      <div className="sfondoWintergreen">
        <div className="max-w-7xl mx-auto py-4 px-4 md:py-12 md:px-4 ">
          <div className="bg-gray-300 shadow-xl rounded-2xl">
            <h2 className="sr-only">Generator</h2>
            <div className="">
              {/*Tailwind generator classes*/}
              <div className="flex flex-cols-2 justify-center justify-items-center
              overflow-hidden py-10 px-6 pb-12 bg-gray-300 rounded-2xl sm:px-10 xl:p-12">

                <div className="col-span-1 pb-16 pr-4 md:pr-8">
                  <p className="justify-center text-lg">Classes Research</p>
                  <div className="absolute mb-16 md:mb-12">
                    <SelectFromList className="relative" query={query} setQuery={setQuery} />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="bg-gray-300 shadow-xl rounded-2xl mt-8">
            <h2 className="sr-only">Generator results</h2>
            <div className="w-full">
              {/*result & filter*/}
              <div className="flex flex-cols-2 justify-evenly justify-items-center overflow-hidden py-10 px-6 bg-gray-300 rounded-2xl sm:px-10 xl:p-12">
                <div className="w-1/2">
                  Controls
                  <CheckboxList query={query} sv={selectedValue} setSV={setSelectedValue} />
                  {/*  <ClassesHandler cl={query}/> */}
                </div>
                <div className="w-1/2">
                  Result
                 <TagPreview cl={query}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
