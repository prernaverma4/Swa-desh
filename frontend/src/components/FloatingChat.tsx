'use client';
import { useState } from 'react';

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl w-72 h-96 mb-4 flex flex-col border overflow-hidden">
                    <div className="bg-[var(--color-primary)] text-white p-3 font-semibold flex justify-between items-center">
                        <span>Help & Support</span>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 text-lg">&times;</button>
                    </div>
                    <div className="flex-1 p-4 bg-gray-50 flex flex-col gap-2 overflow-y-auto text-sm">
                        <div className="bg-gray-200 self-start p-2 rounded-lg max-w-[80%] text-gray-800 text-left">
                            Namaste! How can we help you today?
                        </div>
                        <div className="bg-[#808000] text-white self-end p-2 rounded-lg max-w-[80%] text-left mt-2 hidden">
                            Dummy msg
                        </div>
                    </div>
                    <div className="p-3 border-t bg-white">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-primary)] bg-white text-black"
                        />
                    </div>
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-[var(--color-accent)] text-black rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </button>
        </div>
    );
}
