import React from "react";

type IllustratorIconProps = {
    className?: string;
};

export default function IllustratorIcon({ className }: IllustratorIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 99"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                d="M0 0.635986H100V98.5527H0V0.635986Z"
                fill="url(#paint0_linear_25_465)"
            />
            <path
                d="M36.4796 50.4837H45.3434L40.9116 33.2959L36.4796 50.4837ZM7.56555 8.30298V90.9337H92.5612V8.30298H7.56555ZM50.208 69.3291L46.9649 58.1589H34.966L31.7229 69.3291H23.5074L35.074 29.8368V25.5129H46.1002L59.2881 69.3291H50.208ZM72.0443 69.3291H63.1803V35.9987H72.0443V69.3291ZM67.666 31.999C65.1286 31.999 63.0714 29.9662 63.0714 27.4589C63.0714 24.9514 65.1282 22.9186 67.666 22.9186C70.2037 22.9186 72.2603 24.9514 72.2603 27.4589C72.2603 29.9662 70.2035 31.999 67.666 31.999Z"
                fill="url(#paint1_linear_25_465)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_25_465"
                    x1="99.4792"
                    y1="0.114952"
                    x2="1.47596"
                    y2="98.1183"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFAA2A" />
                    <stop offset="1" stopColor="#FFC06C" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_25_465"
                    x1="50.0634"
                    y1="8.16422"
                    x2="50.0634"
                    y2="90.5166"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#251200" />
                    <stop offset="1" />
                </linearGradient>
            </defs>
        </svg>
    );
}
