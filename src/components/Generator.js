import React, { useEffect, useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Generator() {

    return (
        <div  id="cvbox" >

            <Navbar/>

            <div className="sfondoWintergreen ">
                <div className="max-w-7xl mx-auto py-4 px-4 md:py-12 md:px-4 ">
                    <div className="bg-gray-300 shadow-xl rounded-2xl">
                        <h2 className="sr-only">Generator</h2>

                        <div className="">
                            {/*Tailwind generator classes*/}
                            <div className="flex flex-cols-2 justify-center justify-items-center divide-x divide-gray-900 overflow-hidden py-10 px-6 bg-gray-300 rounded-2xl sm:px-10 xl:p-12">

                                <div className="col-span-1 pr-4 md:pr-8">
                                    <p className="justify-end text-lg">Classes Research</p>
                                    <h3 className="text-sm"> Inserisci la classe di interesse</h3>
                                </div>
                                <div className="col-span-1 pl-4 md:pl-8">
                                    <p className="justify-start text-lg">Documantation & Results</p>
                                    <h3 className="text-sm"> Inserisci la classe di interesse</h3>
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
