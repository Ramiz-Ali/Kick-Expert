import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function ChatAssistant() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const aiResponse = {
      text: `You asked: "${input}". I'm here to help with football history! Try asking about a specific event or player.`,
      sender: "ai",
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, aiResponse]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    handleSendMessage();
  }
};


  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center bg-stone-50 px-4 py-8 min-h-screen">
      <div className="relative w-full max-w-3xl rounded-2xl shadow-lg bg-gradient-to-b from-white via-green-100 to-lime-300 p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-20">
          <Image
            src="/footbal.png"
            alt="Football background"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center text-center mb-6 z-10 relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
            <Image
              src="/images/image12.png"
              alt="Icon"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-800 mt-3 text-sm sm:text-lg md:text-xl max-w-lg">
            Ask me anything about international football history. Choose your difficulty level for personalized responses.
          </p>
        </div>

  

        <div
          ref={chatContainerRef}
          className="flex flex-col mb-4 overflow-y-auto z-10 relative p-3 sm:p-4 h-[40vh] sm:h-[50vh] rounded-lg "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex-1 flex flex-col justify-end space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "user" ? (
                  <div className="flex items-end gap-1.5 max-w-[70%] sm:max-w-[300px]">
                    <div className="bg-green-100 px-3 py-1.5 rounded-lg text-xs sm:text-sm shadow-sm transition-all duration-300 break-words w-fit">
                      {message.text}
                    </div>
                    <span className="text-[10px] sm:text-xs bg-green-200 text-gray-800 px-1.5 py-0.5 rounded-full">
                      YOU
                    </span>
                  </div>
                ) : (
                  <div className="flex items-end gap-1.5 max-w-[70%] sm:max-w-[300px]">
                    <span className="text-[10px] sm:text-xs bg-lime-500 text-white px-2 py-0.5 rounded-full">
                      AI
                    </span>
                    <div className="bg-lime-500 text-gray-800 px-3 py-1.5 rounded-lg text-xs sm:text-sm shadow-sm transition-all duration-300 break-words w-fit">
                      {message.text}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white z-10 relative shadow-sm">
          <input
            type="text"
            placeholder="Ask about football history..."
            className="flex-grow px-2 py-1 sm:py-2 text-sm sm:text-base outline-none bg-transparent text-gray-800 placeholder-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSendMessage}
            className="text-lime-500 hover:text-lime-700 p-1.5 sm:p-2 transition-colors"
          >
            <FaPaperPlane size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
      <p className="mt-6 font-semibold text-sm text-neutral-500">Want to explore more football history?</p>

      <div className="mt-2 flex flex-col sm:flex-row gap-3 items-center">
        <button className="bg-lime-500 hover:bg-lime-600 text-white px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors">
          FULL CHAT
        </button>
        <button className="border border-gray-400 text-gray-800 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors">
          TAKE QUIZ
        </button>
      </div>
    </div>
  );
}