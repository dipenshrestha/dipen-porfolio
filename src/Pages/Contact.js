import React from "react";
import { contactDetails } from "../Details";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const { email, phone, github, linkedin } = contactDetails;

  return (
    <main className="container mt-[-60px] mx-auto max-width section px-4">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold mb-6">
        For any questions, feel free to reach out!
      </h1>

      <div className="text-center text-3xl md:text-3xl lg:text-4xl text-gradient font-semibold md:font-bold flex flex-col gap-4 items-center justify-center">
        <a href={`mailto:${email}`} className="flex items-center gap-3 hover:underline">
          <MdEmail className="text-blue-600" />
          {email}
        </a>

        <span className="text-content text-xl font-light block">or</span>

        <a href={`tel:${phone}`} className="flex items-center gap-3 hover:underline">
          <MdPhone className="text-green-500" />
          {phone}
        </a>
      </div>

      {(github || linkedin) && (
        <div className="mt-10 flex justify-center gap-8 text-3xl">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">
              <FaGithub />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
          )}
        </div>
      )}
    </main>
  );
}

export default Contact;

