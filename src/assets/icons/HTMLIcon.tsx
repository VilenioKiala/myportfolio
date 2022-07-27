import React from "react";

type HTMLIconProps = {
    className?: string;
};

export default function HTMLIcon({ className }: HTMLIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 50"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                d="M4.17191 44.8899L0.186684 0.158813H44L40.0148 44.8658L22.0571 49.8413"
                fill="#E44D26"
            />
            <path
                d="M22.0932 46.0376V3.83044H40.0025L36.5849 41.992"
                fill="#F16529"
            />
            <path
                d="M8.32619 9.3009H22.0933V14.7836H14.3403L14.8475 20.3992H22.0933V25.8698H9.82367L8.32619 9.3009ZM10.0652 28.6232H15.5721L15.9585 33.007L22.0933 34.6493V40.3736L10.8381 37.2337"
                fill="#EBEBEB"
            />
            <path
                d="M35.8119 9.3009H22.0689V14.7836H35.3047L35.8119 9.3009ZM34.8096 20.3992H22.0689V25.8819H28.8317L28.1917 33.007L22.0689 34.6493V40.3494L33.3 37.2337"
                fill="white"
            />
        </svg>
    );
}
