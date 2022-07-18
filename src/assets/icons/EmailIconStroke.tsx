import React from "react";

type EmailIconStrokeProps = {
    className?: string;
};

export default function EmailIconStroke({ className }: EmailIconStrokeProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fill="none"
            className={`${className}`}
        >
            <g clip-path="url(#clip0_430_627)">
                <path
                    d="M48.2143 5.35718H1.78571C0.797991 5.35718 0 6.15517 0 7.14289V42.8572C0 43.8449 0.797991 44.6429 1.78571 44.6429H48.2143C49.202 44.6429 50 43.8449 50 42.8572V7.14289C50 6.15517 49.202 5.35718 48.2143 5.35718ZM45.9821 11.5402V40.625H4.01786V11.5402L2.47768 10.3404L4.67076 7.52236L7.05915 9.38062H42.9464L45.3348 7.52236L47.5279 10.3404L45.9821 11.5402ZM42.9464 9.37503L25 23.3259L7.05357 9.37503L4.66518 7.51678L2.4721 10.3349L4.01228 11.5346L23.0748 26.3561C23.623 26.782 24.2974 27.0132 24.9916 27.0132C25.6858 27.0132 26.3603 26.782 26.9085 26.3561L45.9821 11.5402L47.5223 10.3404L45.3292 7.52236L42.9464 9.37503Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_430_627">
                    <rect width="50" height="50" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
