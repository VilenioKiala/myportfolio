import React from "react";

type MessengerIconProps = {
    className?: string;
};

export default function MessengerIcon({ className }: MessengerIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
            fill="none"
            className={`${className}`}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 25.4152C6.5 14.5467 15.0151 6.50024 26 6.50024C36.9849 6.50024 45.5 14.5467 45.5 25.4152C45.5 36.2838 36.9849 44.3302 26 44.3302C24.0269 44.3302 22.1339 44.0697 20.3553 43.5807C20.0096 43.4855 19.6419 43.5124 19.3138 43.6571L15.4434 45.3657C14.4309 45.8126 13.2881 45.0927 13.2541 43.9863L13.1479 40.5176C13.1349 40.0902 12.9426 39.6908 12.6241 39.4057C8.82986 36.0126 6.5 31.1002 6.5 25.4152ZM20.0185 21.8591L14.2903 30.9468C13.7406 31.819 14.8127 32.8018 15.6339 32.1786L21.7868 27.5089C22.203 27.193 22.7782 27.1913 23.1962 27.5048L27.7522 30.9218C29.1192 31.9472 31.0704 31.5871 31.9816 30.1415L37.7098 21.0536C38.2593 20.1815 37.1873 19.1987 36.3661 19.8219L30.2132 24.4916C29.7969 24.8075 29.2218 24.8091 28.8038 24.4956L24.2479 21.0787C22.8808 20.0534 20.9296 20.4133 20.0185 21.8591Z"
                fill="white"
            />
        </svg>
    );
}
