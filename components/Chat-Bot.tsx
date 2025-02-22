"use client";
import { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages([...newMessages, { sender: "bot", text: data.response }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([...newMessages, { sender: "bot", text: "Sorry, I couldn't fetch an answer." }]);
    }
    setInput("");
  };

  return (
    <div className="chatbot-container border p-4 rounded-md shadow-md bg-white max-w-md">
      <div className="chat-window max-h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <p className={`p-2 rounded-md ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 p-2 border rounded-l-md"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r-md">
          Send
        </button>
      </div>
    </div>
  );
}
