/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import "../index.css";
import {MailIcon} from "@heroicons/react/outline";
import CVirene from "../assets/CVIreneVeglioEn17052022.pdf";
import downloadpdf from "../icons/file.svg";
import {useState} from "react";

const curriculum = {
  name: "Irene Veglio",
  file: CVirene,
};

const steps = [
  {
    id: 1,
    name: "Education",
    description: "Scuola Media Statale, Monta' (CN)",
    href: "https://www.icmonta.edu.it/",
    status: "complete",
  },
  {
    id: 2,
    name: "Education",
    description: "Liceo Artistio 'Pinot Gallizio', Alba (CN)",
    href: "https://www.iisgovonealba.it/pagine/liceo-artistico-2",
    status: "complete",
  },
  {
    id: 3,
    name: "Work",
    description: "Substitute Teacher, IIS 'G.Govone', Alba (CN)",
    href: "https://www.iisgovonealba.it/",
    status: "complete",
  },
  {
    id: 4,
    name: "Education",
    description:
      "BSc Computer Engineer, Politecnico di Torino (TO)",
    href: "https://www.polito.it/",
    status: "current",
  },
  {
    id: 5,
    name: "Internship",
    description: "Intern Front-End, BeBraver s.r.l",
    href: "https://www.braver.app/landing",
    status: "current",
  },
  {
    id: 6,
    name: "Work",
    description: "Dream Job",
    href: "#",
    status: "upcoming",
  },
  {
    id: 7,
    name: "Education",
    description: "Master of Science",
    href: "#",
    status: "upcoming",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CVBox() {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <div  id="cvbox" >
      <div className="col-span-2 max-w-7xl mx-auto py-4 px-4 md:px-4">
        <div className="relative bg-gray-300 shadow-xl rounded-2xl">
          <div className="m-4 md:m-8 pt-10">
            <nav aria-label="Progress">
              <div className="pb-6 text-wintergreen font-bold text-lg">
                Curriculum Vitae
              </div>
              <ol role="list" className="overflow-hidden">
                {steps.map((step, stepIdx) => (
                  <li
                    key={step.name}
                    className={classNames(
                      stepIdx !== steps.length - 1 ? "pb-6 hover:underline" : "",
                      "relative"
                    )}
                  >
                    {step.status === "complete" ? (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                          <div
                            className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-wintergreen"
                            aria-hidden="true"
                          />
                        ) : null}
                        <a
                          href={step.href}
                          className="relative flex items-start group"
                        >
                          <span className="h-9 flex items-center">
                            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-wintergreen rounded-full ">
                              <CheckIcon
                                className="w-5 h-5 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                          <span className="ml-4 min-w-0 flex flex-col items-start  px-6 py-2 rounded-2xl hover:bg-gray-400">
                            <span className="text-xs md:text-sm font-bold tracking-wide uppercase">
                              {step.name}
                            </span>
                            <span className="text-sm md:text-md text-gray-600">
                              {step.description}
                            </span>
                          </span>
                        </a>
                      </>
                    ) : step.status === "current" ? (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                          <div
                            className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-wintergreen"
                            aria-hidden="true"
                          />
                        ) : null}
                        <a
                          href={step.href}
                          className="relative flex items-start group"
                          aria-current="step"
                        >
                          <span
                            className="h-9 flex items-center"
                            aria-hidden="true"
                          >
                            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green-600 rounded-full">
                              <span className="h-2.5 w-2.5 bg-wintergreen rounded-full" />
                            </span>
                          </span>
                          <span className="ml-4 min-w-0 flex flex-col items-start px-6 py-2 rounded-2xl hover:bg-gray-400">
                            <span className="text-xs md:text-sm font-bold tracking-wide uppercase text-wintergreen">
                              {step.name}
                            </span>
                            <span className="text-sm md:text-md text-gray-600">
                              {step.description}
                            </span>
                          </span>
                        </a>
                      </>
                    ) : (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                          <div
                            className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-wintergreen"
                            aria-hidden="true"
                          />
                        ) : null}
                        <a
                          href={step.href}
                          className="relative flex items-start group"
                        >
                          <span
                            className="h-9 flex items-center"
                            aria-hidden="true"
                          >
                            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                              <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                            </span>
                          </span>
                          <span className="ml-4 min-w-0 flex flex-col items-start  px-6 py-2 rounded-2xl hover:bg-gray-400">
                            <span className="text-xs md:text-sm font-bold tracking-wide uppercase text-gray-500">
                              {step.name}
                            </span>
                            <span className="text-sm md:text-md text-gray-500">
                              {step.description}
                            </span>
                          </span>
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <div className="relative overflow-hidden py-8 px-4 bg-richblack rounded-b-2xl sm:px-8 xl:p-10">
            <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
            >
              <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                />
                <defs>
                  <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
            >
            </div>
            <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
            >
              <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                />
                <defs>
                  <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

          <div className="">
            <h3 className="text-lg font-semibold text-white ">
              Download my CV for more info
            </h3>
            <dl className="mt-8 mx-12 space-y-6">
              <dd className="flex justify-center text-base text-yellow-300 py-2 rounded-full hover:font-bold hover:underline">
                <img
                    src={downloadpdf}
                    className="flex-shrink-0 w-8 h-8"
                    alt="logo"
                />
                <a href={CVirene} download="CVirene.pdf" target='_blank'>
                  <span className="ml-3">cv irene veglio</span>
                </a>
              </dd>
            </dl>

          </div>

          </div>
        </div>
      </div>
    </div>
  );
}
