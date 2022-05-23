{/*
!!! QUESTA PAGINA CREA UN NUOVO CONTATTO NEL DB --> SERVE IL BACKEND, GRAPHQL, POSTGRESQL !!!

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT_IRENE } from "../constants/amici_irene_constants";
import useApiNotification from "../../../providers/useApiNotification";
import {useHistory} from "react-router-dom";

export default function FormIrene() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [createContactMutation] = useMutation(CREATE_CONTACT_IRENE);
    const { notification, addNotification, removeNotification } = useApiNotification();
    const history = useHistory();

  function saveContact() {
    createContactMutation({
      variables: {
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      },
    }).then((response) => afterCreation());
  }

  function afterCreation(){
        addNotification("Grazie per avermi contattato", 200, true)
        history.push("/")
    }

  return (
    <div
      className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-900"
        >
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-medium text-gray-900"
        >
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
          >
            Phone
          </label>
          <span id="phone-optional" className="text-sm text-gray-500">
            Optional
          </span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            aria-describedby="phone-optional"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-900"
        >
          Subject
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-900"
          >
            Message
          </label>
          <span id="message-max" className="text-sm text-gray-500">
            Max. 500 characters
          </span>
        </div>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
            aria-describedby="message-max"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          onClick={saveContact}
          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
}


*/}