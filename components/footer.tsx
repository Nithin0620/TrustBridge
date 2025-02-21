"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://api.groq.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer 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`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "mixtral-8x7b-32768",
          messages: [{ role: "user", content: input }]
        })
      });

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "Sorry, I didn't understand that.";

      setMessages([...messages, userMessage, { role: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...messages, userMessage, { role: "bot", text: "Error fetching response." }]);
    }
  };

  return (
    <footer className="border-t relative">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">TrustBridge</h3>
            <p className="text-sm text-muted-foreground">
              Building trust between freelancers and companies through secure, transparent collaboration.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Need Help?</h4>
            <button
              className="px-4 py-2 bg-primary text-white rounded-md"
              onClick={() => setShowChat(!showChat)}
            >
              Chat with AI
            </button>
          </div>
        </div>

        {showChat && (
          <div className="fixed bottom-20 right-4 bg-white shadow-lg p-4 rounded-lg w-80 border">
            <div className="h-64 overflow-y-auto mb-2">
              {messages.map((msg, index) => (
                <p key={index} className={msg.role === "user" ? "text-right text-blue-600" : "text-left text-gray-700"}>
                  {msg.text}
                </p>
              ))}
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="border p-2 w-full rounded-md"
            />
            <button onClick={sendMessage} className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md">
              Send
            </button>
          </div>
        )}

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TrustBridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
