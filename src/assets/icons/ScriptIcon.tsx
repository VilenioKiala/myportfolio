import React from "react";

type ScriptIconProps = {
    className?: string;
};

export default function ScriptIcon({ className }: ScriptIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 77 77"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                d="M38.8438 52.3359C38.8438 52.7141 39.1359 53.0234 39.4883 53.0234H55.3867C55.7391 53.0234 56.0312 52.7141 56.0312 52.3359V48.2109C56.0312 47.8328 55.7391 47.5234 55.3867 47.5234H39.4883C39.1359 47.5234 38.8438 47.8328 38.8438 48.2109V52.3359ZM22.0945 52.8602L38.5945 39.0242C38.9211 38.7492 38.9211 38.2422 38.5945 37.9672L22.0945 24.1398C21.9949 24.0551 21.8731 24.0008 21.7435 23.9833C21.614 23.9657 21.4821 23.9858 21.3635 24.041C21.245 24.0962 21.1448 24.1842 21.0748 24.2947C21.0048 24.4051 20.968 24.5333 20.9688 24.6641V30.0523C20.9688 30.2586 21.0547 30.4477 21.218 30.5766L30.6539 38.5L21.218 46.4234C21.1412 46.4877 21.0791 46.5679 21.0361 46.6583C20.9931 46.7488 20.9701 46.8475 20.9688 46.9477V52.3359C20.9688 52.9203 21.6477 53.2383 22.0945 52.8602ZM70.125 4.125H6.875C5.35391 4.125 4.125 5.35391 4.125 6.875V70.125C4.125 71.6461 5.35391 72.875 6.875 72.875H70.125C71.6461 72.875 72.875 71.6461 72.875 70.125V6.875C72.875 5.35391 71.6461 4.125 70.125 4.125ZM66.6875 66.6875H10.3125V10.3125H66.6875V66.6875Z"
                fill="white"
            />
        </svg>
    );
}
