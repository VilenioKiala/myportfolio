import React from "react";

type FacebookIconProps = {
    className?: string;
};

export default function FacebookIcon({ className }: FacebookIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.28882e-05 20C2.28882e-05 8.9543 8.95433 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.95433 40 2.28882e-05 31.0457 2.28882e-05 20ZM22.0847 31.7596V20.8785H25.0883L25.4863 17.1288H22.0847L22.0898 15.2521C22.0898 14.2741 22.1827 13.7501 23.5873 13.7501H25.4651V10H22.461C18.8526 10 17.5826 11.819 17.5826 14.878V17.1293H15.3334V20.8789H17.5826V31.7596H22.0847Z"
                fill="white"
            />
        </svg>
    );
}
