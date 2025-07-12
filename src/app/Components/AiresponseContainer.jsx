"use client";
import React, { useState } from "react";
import styles from "../Style/style.css";
import InputContiner from "./InputContianer";

const ChatContainer = () => {
  const [isbuttonClicked, setisbuttonClicked] = useState(false);

  const [messages, setmessages] = useState([]);

  const [prompt, setprompt] = useState({
    input: "",
    sender: "user",
  });

  const handleSubmit = () => {
    if (prompt.input.trim() === "") {
      alert("Please write something");
      return;
    }

    const userMessage = {
      sender: "user",
      text: prompt.input,
    };

    // Add user's message
    setmessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear input
    setprompt({ input: "", sender: "user" });
    setisbuttonClicked(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        sender: "ai",
        text: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
        para: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",
      };

      setmessages((prevMessages) => [...prevMessages, aiMessage]);
      setisbuttonClicked(false);
    }, 2000);
  };

  return (
    <>
      <div className="chatContainer">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "userChats" : "AIchats"}
          >
            {msg.text} <br />
            {msg.para && <p>{msg.para}</p>}
            {msg.sender === "ai" && msg.link && (
              <>
                <br />
                <a href={msg.link} target="_blank" rel="noopener noreferrer">
                  Download Judgment PDF
                </a>
                <br />
              </>
            )}
          </div>
        ))}
      </div>
      <InputContiner
        prompt={prompt}
        setprompt={setprompt}
        messages={messages}
        handleSubmit={handleSubmit}
        isbuttonClicked={isbuttonClicked}
      />
    </>
  );
};

export default ChatContainer;
