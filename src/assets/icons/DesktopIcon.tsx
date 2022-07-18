import React from "react";

type DesktopIconProps = {
    className?: string;
};

export default function DesktopIcon({ className }: DesktopIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 90"
            fill="none"
            className={`${className}`}
        >
            <g clip-path="url(#clip0_296_145)">
                <path
                    d="M86.7857 7.63391H3.21428C1.43638 7.63391 -3.8147e-06 9.0703 -3.8147e-06 10.8482V60.6696C-3.8147e-06 62.4475 1.43638 63.8839 3.21428 63.8839H41.3839V75.1339H24.1071C23.2232 75.1339 22.5 75.8571 22.5 76.7411V81.5625C22.5 82.0044 22.8616 82.3661 23.3036 82.3661H66.6964C67.1384 82.3661 67.5 82.0044 67.5 81.5625V76.7411C67.5 75.8571 66.7768 75.1339 65.8928 75.1339H48.6161V63.8839H86.7857C88.5636 63.8839 90 62.4475 90 60.6696V10.8482C90 9.0703 88.5636 7.63391 86.7857 7.63391ZM82.7678 56.6518H7.23214V14.8661H82.7678V56.6518Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_296_145">
                    <rect width="90" height="90" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
