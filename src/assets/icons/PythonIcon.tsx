import React from "react";

type PythonIconProps = {
    className?: string;
};

export default function PythonIcon({ className }: PythonIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 62 63"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                d="M30.3066 35.9371C27.5799 35.9371 25.3695 33.7267 25.3695 31C25.3695 28.2733 27.5799 26.0629 30.3066 26.0629C33.0333 26.0629 35.2437 28.2733 35.2437 31C35.2437 33.7267 33.0333 35.9371 30.3066 35.9371Z"
                fill="#61DAFB"
            />
            <path
                d="M30.7765 0.901123C15.037 0.901123 16.0198 7.72671 16.0198 7.72671L16.0373 14.7982H31.0572V16.9213H10.0716C10.0716 16.9213 -0.000152588 15.779 -0.000152588 31.6601C-0.000152588 47.5416 8.79069 46.9784 8.79069 46.9784H14.037V39.6087C14.037 39.6087 13.7542 30.8179 22.6876 30.8179H37.5847C37.5847 30.8179 45.9543 30.9531 45.9543 22.7289V9.13067C45.9543 9.13067 47.2255 0.901123 30.7765 0.901123ZM22.4946 5.65658C22.8495 5.65626 23.201 5.72593 23.529 5.86161C23.8569 5.99729 24.1549 6.19631 24.4059 6.44728C24.6569 6.69826 24.8559 6.99626 24.9916 7.32423C25.1273 7.65221 25.1969 8.00372 25.1966 8.35865C25.1969 8.71358 25.1273 9.06509 24.9916 9.39306C24.8559 9.72104 24.6569 10.019 24.4059 10.27C24.1549 10.521 23.8569 10.72 23.529 10.8557C23.201 10.9914 22.8495 11.061 22.4946 11.0607C22.1396 11.061 21.7881 10.9914 21.4601 10.8557C21.1322 10.72 20.8342 10.521 20.5832 10.27C20.3322 10.019 20.1332 9.72104 19.9975 9.39306C19.8618 9.06509 19.7922 8.71358 19.7925 8.35865C19.7922 8.00372 19.8618 7.65221 19.9975 7.32423C20.1332 6.99626 20.3322 6.69826 20.5832 6.44728C20.8342 6.19631 21.1322 5.99729 21.4601 5.86161C21.7881 5.72593 22.1396 5.65626 22.4946 5.65658Z"
                fill="url(#paint0_linear_212_188)"
            />
            <path
                d="M31.2235 62.5789C46.963 62.5789 45.9803 55.7533 45.9803 55.7533L45.9628 48.682H30.9426V46.559H51.9283C51.9283 46.559 62 47.7012 62 31.8196C62 15.9383 53.2091 16.5016 53.2091 16.5016H47.9628V23.871C47.9628 23.871 48.2456 32.6618 39.3123 32.6618H24.4152C24.4152 32.6618 16.0455 32.5266 16.0455 40.7511V54.3496C16.0455 54.3496 14.7746 62.5789 31.2233 62.5789H31.2235ZM39.5055 57.8239C39.1506 57.8242 38.7991 57.7546 38.4711 57.6189C38.1431 57.4832 37.8451 57.2842 37.5941 57.0332C37.3432 56.7822 37.1442 56.4842 37.0085 56.1563C36.8728 55.8283 36.8031 55.4768 36.8034 55.1218C36.8031 54.7669 36.8727 54.4153 37.0084 54.0873C37.1441 53.7593 37.3431 53.4613 37.5941 53.2103C37.845 52.9593 38.143 52.7603 38.471 52.6246C38.799 52.4889 39.1506 52.4192 39.5055 52.4195C39.8604 52.4192 40.212 52.4889 40.5399 52.6245C40.8679 52.7602 41.1659 52.9593 41.4169 53.2102C41.6679 53.4612 41.8669 53.7592 42.0026 54.0872C42.1382 54.4152 42.2079 54.7667 42.2076 55.1216C42.2079 55.4765 42.1382 55.828 42.0026 56.156C41.8669 56.484 41.6679 56.782 41.4169 57.033C41.1659 57.2839 40.8679 57.483 40.5399 57.6186C40.212 57.7543 39.8604 57.824 39.5055 57.8237V57.8239Z"
                fill="url(#paint1_linear_212_188)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_212_188"
                    x1="5.95804"
                    y1="6.44866"
                    x2="36.6834"
                    y2="36.8675"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#387EB8" />
                    <stop offset="1" stopColor="#366994" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_212_188"
                    x1="24.8173"
                    y1="25.9818"
                    x2="57.8128"
                    y2="57.1736"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE052" />
                    <stop offset="1" stopColor="#FFC331" />
                </linearGradient>
            </defs>
        </svg>
    );
}
