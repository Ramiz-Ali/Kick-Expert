'use client';

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaSearch, FaPaperPlane } from "react-icons/fa";

export default function FootballAssistant() {
  const [activeLevel, setActiveLevel] = useState<"easy" | "medium" | "hard">("medium");
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Sample responses for each difficulty level
  const levelResponses = {
    easy: [
      "That's a great beginner question! In simple terms, {query} is one of the most basic aspects of football.",
      "For new fans: {query} refers to a fundamental part of the game that's easy to understand.",
      "As a starter, you should know that {query} is important because..."
    ],
    medium: [
      "Interesting question about {query}. At this level, you should know that...",
      "Regarding {query}, a medium-difficulty fact is that...",
      "You're asking about {query} - this involves some deeper knowledge like..."
    ],
    hard: [
      "A true expert question about {query}! Did you know this obscure fact...",
      "For hardcore fans only: {query} relates to this little-known historical detail...",
      "Only veteran fans would know that {query} connects to this complex tactical nuance..."
    ]
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;

    // Add user message
    const userMessage = { 
      text: searchQuery, 
      sender: "user"
    };
    setMessages((prev) => [...prev, userMessage]);
    setSearchQuery("");
    setIsLoading(true);

    // Simulate AI response after a short delay
    setTimeout(() => {
      const responses = levelResponses[activeLevel];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        .replace("{query}", `"${searchQuery}"`);

      setMessages((prev) => [...prev, { 
        text: randomResponse, 
        sender: "ai"
      }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center px-4 pt-20 pb-8 md:pt-36 min-h-screen">
      {/* Header section */}
      <div className="relative text-center mb-10 w-full max-w-4xl">
        <p className="text-lime-600 font-bold text-xl mb-2">Football History</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-green-900 to-lime-400 text-transparent bg-clip-text  mb-4">
          Choose Your Knowledge Level
        </h1>
        <p className="text-lime-600 max-w-2xl mx-auto text-sm sm:text-base">
          Get tailored football history answers based on your expertise
        </p>
      </div>

      {/* Knowledge level cards */}
      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-8 w-full max-w-4xl">
        {(["easy", "medium", "hard"] as const).map((level) => (
          <div 
            key={level}
            className={`flex-1 border-2 rounded-xl p-4 sm:p-6 text-center transition-all cursor-pointer
              ${activeLevel === level 
                ? "border-lime-500 bg-lime-100 shadow-md" 
                : "border-gray-400 hover:border-lime-300"}`}
            onClick={() => setActiveLevel(level)}
          >
            <div className="flex flex-col items-center">
              <span className={`text-2xl mb-2 ${
                level === "easy" ? "text-lime-400" :
                level === "medium" ? "text-lime-500" :
                "text-lime-600"
              }`}>
                {level === "easy" ? "👶" : level === "medium" ? "🧠" : "🏆"}
              </span>
              <h2 className="text-lg font-bold text-gray-800 capitalize">{level}</h2>
              <p className="text-gray-500 text-sm mt-1">
                {level === "easy" ? "Basic facts" : 
                 level === "medium" ? "Detailed analysis" : 
                 "Expert insights"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Upper Search Input - Hidden when chat section appears */}
      {messages.length === 0 && (
        <div className="w-full  mb-4">
          <div className="flex items-center border-2 border-gray-500 rounded-xl px-4 py-3 shadow-sm">
            <FaSearch className="text-gray-700 mr-3" />
            <input
              type="text"
              placeholder={`Ask a ${activeLevel} level question...`}
              className="flex-grow outline-none bg-transparent text-base text-gray-700 placeholder-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              onClick={handleSearch}
              className="text-white bg-lime-500 hover:bg-lime-600 p-2 rounded-full transition-colors"
              disabled={isLoading}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {/* Chat Section - Appears after first message */}
      {messages.length > 0 && (
        <div className="w-full max-w-3xl bg-gray-50 rounded-xl shadow-inner p-4 sm:p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)} Level Chat
            </h3>
            <span className="px-3 py-1 bg-lime-100 text-lime-800 text-xs font-medium rounded-full">
              {activeLevel}
            </span>
          </div>

          <div 
            ref={chatContainerRef}
            className="flex flex-col space-y-4 h-64 sm:h-80 overflow-y-auto p-3 mb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-lime-500 text-white"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="flex items-center mb-1">
                    <span className={`text-xs font-medium ${
                      message.sender === "user" ? "text-lime-100" : "text-gray-500"
                    }`}>
                      {message.sender === "user" ? "You" : "Football Expert"}
                    </span>
                  </div>
                  <p className="text-sm ">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center border-2 border-gray-600 rounded-lg px-3 py-2 bg-white">
            <input
              type="text"
              placeholder={`Ask another ${activeLevel} level question...`}
              className="flex-grow px-2 py-1 text-sm  outline-none bg-transparent text-gray-800 placeholder-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSearch}
              className="text-lime-500 hover:text-lime-700 p-1.5 transition-colors"
              disabled={isLoading}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* Info section */}
      <div className=" max-w-2xl">
        <p className="text-gray-700 text-lg mb-1">
          Selected level: <span className="font-medium text-lime-600 capitalize">{activeLevel}</span>
        </p>
        <p className="text-gray-600 text-md text-center">
          The assistant will tailor responses based on your selected knowledge level
        </p>
      </div>
    </div>
  );
}