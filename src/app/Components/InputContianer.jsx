"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaStop } from "react-icons/fa";
import "../Style/style.css";

const InputContiner = (props) => {
  const {
    prompt,
    setprompt,
    messages,
    handleSubmit,
    setisbuttonClicked,
    isbuttonClicked,
  } = props;
  useEffect(() => {
    console.log(prompt);
  }, [prompt]);

  return (
    <div className="Inputcontainer">
      <textarea
      value={prompt.input}
        onChange={(e) =>
          setprompt((prev) => ({ ...prev, input: e.target.value }))
        }
        placeholder="Type anything here..."
        className="textarea"
      />
      <button onClick={handleSubmit} className="button">
        {isbuttonClicked ? <FaStop /> : <FaArrowUp />}
      </button>
    </div>
  );
};

export default InputContiner;
