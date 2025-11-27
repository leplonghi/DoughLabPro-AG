import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
    return (
        <svg
            viewBox="0 0 350 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="DoughLab Pro Logo"
            preserveAspectRatio="xMinYMid meet"
        >
            {/* Icon Group - Centered vertically */}
            <g transform="translate(0, 2)">
                {/* Green Drop */}
                <path
                    d="M28 4C28 4 18 18 18 25C18 30.5228 22.4772 35 28 35C33.5228 35 38 30.5228 38 25C38 18 28 4 28 4Z"
                    fill="#84cc16"
                />

                {/* Bowl Outline */}
                <path
                    d="M10 32C10 32 10 52 28 52C46 52 46 32 46 32"
                    stroke="#1e293b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Bowl Top Rim */}
                <ellipse cx="28" cy="32" rx="18" ry="5" stroke="#1e293b" strokeWidth="3.5" />

                {/* Green Accent/Reflection inside bowl */}
                <path
                    d="M16 36C16 36 18 46 26 48"
                    stroke="#84cc16"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.8"
                />

                {/* Base Stand */}
                <path
                    d="M18 56H38"
                    stroke="#1e293b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                />
            </g>

            {/* Text: DoughLab */}
            <text
                x="65"
                y="46"
                fontFamily="'Inter', sans-serif"
                fontWeight="700"
                fontSize="42"
                fill="#1e293b"
                letterSpacing="-0.03em"
            >
                DoughLab
            </text>

            {/* Text: Pro */}
            <text
                x="285"
                y="46"
                fontFamily="'Inter', sans-serif"
                fontWeight="400"
                fontSize="42"
                fill="#84cc16"
                letterSpacing="-0.03em"
            >
                Pro
            </text>
        </svg>
    );
};

export default Logo;
