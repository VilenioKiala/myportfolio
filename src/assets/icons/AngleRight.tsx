import React from "react";

type AngleRightProps = {
    className?: string;
};

export default function AngleRight({ className }: AngleRightProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 11 17"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                d="M9.74365 9.33008L3.10303 15.9707C2.64404 16.4297 1.90186 16.4297 1.44775 15.9707L0.344238 14.8672C-0.114746 14.4082 -0.114746 13.666 0.344238 13.2119L5.05127 8.50488L0.344238 3.79785C-0.114746 3.33887 -0.114746 2.59668 0.344238 2.14258L1.44287 1.0293C1.90186 0.570313 2.64404 0.570313 3.09814 1.0293L9.73877 7.66992C10.2026 8.12891 10.2026 8.87109 9.74365 9.33008Z"
                fill="#D2D2D2"
            />
        </svg>
    );
}
