// src/components/Chatbot.js

import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [conversations, setConversations] = useState([]);
    const endOfMessagesRef = useRef(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [conversations]);

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = async () => {
        if (!userInput.trim()) return;
    
        const userMessage = { sender: 'user', message: userInput };
        setConversations(conversations => [...conversations, userMessage]);
    
        // Placeholder for sending a message to the chatbot API
        const botResponse = await getBotResponse(userInput);
        setConversations(conversations => [...conversations, botResponse]);
        setUserInput(''); // Reset input field after sending
    };
    

    const clearChat = () => {
        setConversations([]);
    };

    // // Placeholder function for API call
    // const getBotResponse = async (message) => {
    //     // Replace this logic with the actual API call
    //     // Simulating a delay for response
    //     await new Promise(resolve => setTimeout(resolve, 1000));
    //     return { sender: 'bot', message: `Echo: ${message}` }; // Echo response for now
    // };

    // Placeholder function for API call
    const getBotResponse = async (message) => {
        try {
            const response = await fetch('http://localhost:5000/api/chat', { // Replace with your backend endpoint
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: message })
            });
            const data = await response.json();
            return { sender: 'bot', message: data.message };
        } catch (error) {
            console.error('Error fetching response:', error);
            return { sender: 'bot', message: "Sorry, I couldn't fetch the response." };
        }
    };


    return (
        <div className="chatbot-container flex justify-center items-center h-screen">
            <div className="bg-gray shadow-xl rounded-lg w-1/2">
                <div className="conversation overflow-y-auto h-96 p-4">
                    {conversations.map((conv, index) => (
                        <div key={index} className={`p-2 my-2 rounded-lg ${conv.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                            <span className={`font-semibold ${conv.sender === 'user' ? 'text-pearl-white' : 'text-blue-300'}`}>
                                {conv.sender === 'user' ? '😀\tYou\t' : '👾\tMTS\t'}
                            </span>
                            {conv.message}
                        </div>
                    ))}
                    <div ref={endOfMessagesRef}></div>
                </div>
                <div className="input-area flex p-4">
                    <input 
                        type="text" 
                        value={userInput} 
                        onChange={handleUserInput} 
                        onKeyPress={handleKeyPress}
                        className="flex-grow p-2 border rounded-l-lg" 
                        placeholder="Type a message..." 
                    />
                    <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r-lg">Send</button>
                </div>
                <div className="p-4 text-right">
                    <button onClick={clearChat} className="text-sm text-gray-600 hover:text-gray-800">Clear Chat</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
