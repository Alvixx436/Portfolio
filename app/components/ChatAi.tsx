"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import React from "react";

type EndParams = { userInput: string };
const ChatBot = lazy(() => import("react-chatbotify"));

function ChatAi() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const settings = {
    isOpen: true,
    botBubble: { showAvatar: true },
    general: {
      primaryColor: "#42b0c5",
      secondaryColor: "#491d8d",
      fontFamily: "Arial, sans-serif",
      embedded: true,
    },
    audio: {
      disabled: false,
    },
    chatHistory: {
      storageKey: "concepts_settings",
    },
    // other sections
  };

  const flow = {
    start: {
      message: "Who are you?",
      path: "end",
    },
    end: {
      message: (params: EndParams) => `Hi ${params.userInput}!`,
      chatDisabled: true,
    },
  };
  return (
    <>
      {isLoaded && (
        <Suspense fallback={<div>Loading...</div>}>
          <ChatBot settings={settings} flow={flow} />
        </Suspense>
      )}
    </>
  );
}

export default ChatAi;
