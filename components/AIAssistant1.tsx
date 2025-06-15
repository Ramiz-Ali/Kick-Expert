// pages/index.js
import { FaPaperPlane } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100 flex flex-col items-center justify-center p-4">
      {/* Star Icon */}
      <div className="text-green-500 text-4xl mb-4">✦✦✦</div>

      {/* Heading */}
      <h1 className="text-center text-xl sm:text-2xl font-semibold text-gray-700 mb-8">
        Ask me anything about international football history. <br />
        Choose your difficulty level for personalized responses.
      </h1>

      {/* Chat Bubble Section */}
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-2">
          <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">ME</span>
          <div className="bg-white border border-gray-300 text-sm px-4 py-2 rounded-lg">
            What can I ask you to do?
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <span className="bg-green-300 text-white text-sm px-2 py-1 rounded-full">AI</span>
          <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg">
            What can I ask you to do?
          </div>
        </div>
      </div>

      {/* Input Field */}
      <div className="w-full max-w-xl">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Ask me anything about your projects"
            className="flex-grow px-4 py-2 focus:outline-none text-sm"
          />
          <button className="bg-green-400 p-3 text-white hover:bg-green-500">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}
