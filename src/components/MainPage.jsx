import React, { useState, useEffect } from "react";
import { AiFillGithub } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { BiLogoTailwindCss } from 'react-icons/bi'
import CopyModal from "./CopyModal";
import copy from "copy-to-clipboard";
import { BsFillClipboardCheckFill } from "react-icons/bs";
function MainPage() {
  const [openModal, setOpenModal] = useState(false);

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const copyToClipboard = () => {
    copy(text.replace(/\s/g, "🤸🏻‍♀️"));
    setText("")
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    let timerId;

    if (openModal) {
      // Start the function
      setOpenModal(true);

      // Set a timeout to stop the function after 5 seconds
      timerId = setTimeout(() => {
        closeModal();
      }, 3000);
    }

    // Cleanup function to clear the timeout when the component unmounts or is updated
    return () => {
      clearTimeout(timerId);
    };
  }, [openModal]);

  const generatedText = () => {
    return (
      <div className="flex flex-col justify-between rounded-lg w-full">
        <div className="flex justify-between items-center bg-gray-600 h-10 p-4 rounded-t-lg">
          <h1>Generated Text</h1>
          <button onClick={copyToClipboard}>
            <BsFillClipboardCheckFill size={25} />
          </button>
        </div>

        <div className="w-xl h-80 p-4 bg-gray-500 rounded-b-lg">
          <p>{text.replace(/\s/g, "🤸🏻‍♀️")}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen bg-[#282A3A] text-white">
      <CopyModal open={openModal} />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-[100%] sm:w-[80%] md:w-[50%] lg:w-[25%] p-6 flex flex-col justify-center items-center gap-6">
          <h1 className="text-5xl italic font-semibold ">🤸🏻‍♀️Beshify🤸🏻‍♀️</h1>
          <input
            type="text"
            placeholder="Beshify text"
            className="p-2 border-2 rounded-lg bg-transparent w-full"
            value={text}
            onChange={handleChange}
          />
          {text ? generatedText() : <div></div>}
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1>Developed By: Barysh Bacaltos</h1>
          <h1 className="flex justify-center items-center gap-3">Made via: <FaReact size={30}/> <BiLogoTailwindCss size={30} /></h1>
          <a href="https://github.com/raishudesu/beshyApp" target="_blank" className="flex gap-3 items-center">Source code: <AiFillGithub size={30}/></a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
