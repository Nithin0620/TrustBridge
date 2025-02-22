"use client";
import React from 'react';

const StickyButton: React.FC = () => {
    const handleClick = () => {
        window.location.href = 'https://6100-38-188-110-250.ngrok-free.app/';
    };
    return (
        <button 
            onClick={handleClick} 
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: '#ffffff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
        >
            Chat Boat
        </button>
    );
};

export default StickyButton;