import React from "react";

type CSSIconProps = {
    className?: string;
};

export default function CSSIcon({ className }: CSSIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 52"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                d="M46.0875 0L41.9103 46.7946L23.1339 52L4.40923 46.8019L0.236511 0H46.0875Z"
                fill="#264DE4"
            />
            <path
                d="M38.3342 43.8148L41.9039 3.82666H23.162V48.0211L38.3342 43.8148Z"
                fill="#2965F1"
            />
            <path
                d="M9.8024 21.1849L10.3169 26.9249H23.162V21.1849H9.8024Z"
                fill="#EBEBEB"
            />
            <path
                d="M23.162 9.56689H23.1421H8.76865L9.29044 15.307H23.162V9.56689Z"
                fill="#EBEBEB"
            />
            <path
                d="M23.162 42.0643V36.0922L23.1368 36.0989L16.7441 34.3728L16.3354 29.7948H13.229H10.5733L11.3775 38.8075L23.1356 42.0716L23.162 42.0643Z"
                fill="#EBEBEB"
            />
            <path
                d="M30.2104 26.9249L29.5441 34.3693L23.1422 36.0973V42.0691L34.9096 38.8078L34.9959 37.838L36.3448 22.7263L36.4848 21.1849L37.5211 9.56689H23.1422V15.307H31.2305L30.7082 21.1849H23.1422V26.9249H30.2104Z"
                fill="white"
            />
        </svg>
    );
}
