import React, { useEffect, useState } from "react";
import "../index.css";
import CVBox from "./CVBox";
import ContactMeModale from "./ContactMeModale";
import TopNavBar from "./TopNavBar";
import profilePic from "../assets/me-round2.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const profile = {
  name: "Irene Veglio",
  email: "irene.veglio@gmail.com",
  phone: "(555) 123-4567",
  avatar: profilePic,
  backgroundImage:
    "https://artincontext.org/wp-content/uploads/2021/11/What-Colors-Make-Teal.jpg",
  fields: [
    ["Phone", "(555) 123-4567"],
    ["Email", "irene.veglio@gmail.com"],
    ["Title", "Intern Front-End Developer"],
    ["Team", "IT"],
    ["Location", "Torino"],
    ["Sits", "Politecnico di Torino"],
    ["Birthday", "September 20, 1998"],
  ],
};

export default function HeaderIrene() {
  const [buttonPopUpMessage, setButtonPopUpMessage] = useState(false);

  return (
    <div>

      <Navbar/>

      <div className="sfondoWintergreen">
        <div className="max-w-5xl mx-auto px-8 py-2 sm:px-12">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex rounded-full">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-black shadow-2xl sm:h-32 sm:w-32"
                src={profile.avatar}
                alt=""
              />
            </div>
          </div>
          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h3> ciao</h3>
          </div>
        </div>
      </div>

      <div className="sfondoWintergreen pb-24 grid grid-cols-1 md:grid-cols-2">
        <ContactMeModale className="md:col-span-1"/>
        <CVBox className="md:col-span-1"/>
      </div>

      <Footer/>

    </div>
  );
}
