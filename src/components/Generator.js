import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CheckboxList from "./CheckboxList";
import TagPreview from "./TagPreview";
import SelectFromList from "./SelectFromList";
import {ClassesHandler} from "../classes/ClassesHandler";

const classeTailwind = [
  'Padding',
  'Margin',
  'Layout',
  'Flex',
  'Grid',
  'Sizing',
  'Altro',
]

export default function Generator() {
  const [selectedClass, setSelectedClass] = useState(classeTailwind[0])
  const [query, setQuery] = useState('')

  const filteredClasseTailwind =
      query === ''
          ? classeTailwind
          : classeTailwind.filter((person) => {
            return classeTailwind.toLowerCase().includes(query.toLowerCase())
          })

  return (
    <div >
      <Navbar />
      <div className="sfondoWintergreen">
        <div className="max-w-7xl mx-auto py-4 px-4 md:py-12 md:px-4 ">
          <div className="bg-gray-300 shadow-xl rounded-2xl">
            <h2 className="sr-only">Generator</h2>
            <div className="">
              {/*Tailwind generator classes*/}
              <div className="flex flex-cols-2 justify-center justify-items-center divide-x divide-gray-900 overflow-hidden py-10 px-6 bg-gray-300 rounded-2xl sm:px-10 xl:p-12">
                <div className="col-span-1 pb-16 pr-4 md:pr-8">
                  <p className="justify-center text-lg">Classes Research</p>

                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium text-gray-700"
                  >

                  </label>

                  {/* <div className="mt-1 flex rounded-md shadow-sm">
                    <Combobox value={selectedClass} onChange={setSelectedClass} >
                      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
                      <Combobox.Options>
                        {filteredClasseTailwind.map((person) => (
                            <Combobox.Option key={person} value={classeTailwind}>
                              {classeTailwind}
                            </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    </Combobox>

                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      <SearchIcon className="w-6 h-6 text-black" />
                    </span>
                  </div>  */}

                  <div className="absolute mb-16 md:mb-12">
                    <SelectFromList className="relative"/>
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
                  <CheckboxList cl={query}/>
                    {/*  <ClassesHandler cl={query}/> */}
                </div>
                <div className="w-1/2">
                  Result
                 <TagPreview/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
