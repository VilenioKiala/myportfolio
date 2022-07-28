import React from "react";

type UserIconProps = {
    className?: string;
};

export default function UserIcon({ className }: UserIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 37"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                d="M16 18.5C21.05 18.5 25.1429 14.3592 25.1429 9.25C25.1429 4.14082 21.05 0 16 0C10.95 0 6.85714 4.14082 6.85714 9.25C6.85714 14.3592 10.95 18.5 16 18.5ZM22.8429 20.8559L19.4286 34.6875L17.1429 24.8594L19.4286 20.8125H12.5714L14.8571 24.8594L12.5714 34.6875L9.15714 20.8559C4.06429 21.1016 0 25.3146 0 30.525V33.5312C0 35.4463 1.53571 37 3.42857 37H28.5714C30.4643 37 32 35.4463 32 33.5312V30.525C32 25.3146 27.9357 21.1016 22.8429 20.8559Z"
                fill="white"
            />
        </svg>
    );
}
