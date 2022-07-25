import React from "react";

type ToggleIconProps = {
    className?: string;
};

export default function ToggleIcon({ className }: ToggleIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                d="M0.78125 9.375H21.0938C21.301 9.375 21.4997 9.29269 21.6462 9.14618C21.7927 8.99966 21.875 8.80095 21.875 8.59375V7.03125C21.875 6.82405 21.7927 6.62534 21.6462 6.47882C21.4997 6.33231 21.301 6.25 21.0938 6.25H0.78125C0.57405 6.25 0.375336 6.33231 0.228823 6.47882C0.0823101 6.62534 0 6.82405 0 7.03125L0 8.59375C0 8.80095 0.0823101 8.99966 0.228823 9.14618C0.375336 9.29269 0.57405 9.375 0.78125 9.375ZM21.0938 18.75H0.78125C0.57405 18.75 0.375336 18.8323 0.228823 18.9788C0.0823101 19.1253 0 19.324 0 19.5312L0 21.0938C0 21.301 0.0823101 21.4997 0.228823 21.6462C0.375336 21.7927 0.57405 21.875 0.78125 21.875H21.0938C21.301 21.875 21.4997 21.7927 21.6462 21.6462C21.7927 21.4997 21.875 21.301 21.875 21.0938V19.5312C21.875 19.324 21.7927 19.1253 21.6462 18.9788C21.4997 18.8323 21.301 18.75 21.0938 18.75ZM21.2485 1.90604e-07H8.43896C8.35668 -6.40206e-05 8.27519 0.0160961 8.19915 0.0475561C8.12312 0.0790162 8.05403 0.125159 7.99584 0.183344C7.93766 0.24153 7.89152 0.310616 7.86006 0.386651C7.8286 0.462687 7.81244 0.544179 7.8125 0.626465V2.49854C7.81244 2.58082 7.8286 2.66231 7.86006 2.73835C7.89152 2.81438 7.93766 2.88347 7.99584 2.94166C8.05403 2.99984 8.12312 3.04598 8.19915 3.07744C8.27519 3.1089 8.35668 3.12506 8.43896 3.125H21.2485C21.3308 3.12506 21.4123 3.1089 21.4883 3.07744C21.5644 3.04598 21.6335 2.99984 21.6917 2.94166C21.7498 2.88347 21.796 2.81438 21.8274 2.73835C21.8589 2.66231 21.8751 2.58082 21.875 2.49854V0.626465C21.8751 0.544179 21.8589 0.462687 21.8274 0.386651C21.796 0.310616 21.7498 0.24153 21.6917 0.183344C21.6335 0.125159 21.5644 0.0790162 21.4883 0.0475561C21.4123 0.0160961 21.3308 -6.40206e-05 21.2485 1.90604e-07ZM21.2485 12.5H8.43896C8.35668 12.4999 8.27519 12.5161 8.19915 12.5476C8.12312 12.579 8.05403 12.6252 7.99584 12.6833C7.93766 12.7415 7.89152 12.8106 7.86006 12.8867C7.8286 12.9627 7.81244 13.0442 7.8125 13.1265V14.9985C7.81244 15.0808 7.8286 15.1623 7.86006 15.2383C7.89152 15.3144 7.93766 15.3835 7.99584 15.4417C8.05403 15.4998 8.12312 15.546 8.19915 15.5774C8.27519 15.6089 8.35668 15.6251 8.43896 15.625H21.2485C21.3308 15.6251 21.4123 15.6089 21.4883 15.5774C21.5644 15.546 21.6335 15.4998 21.6917 15.4417C21.7498 15.3835 21.796 15.3144 21.8274 15.2383C21.8589 15.1623 21.8751 15.0808 21.875 14.9985V13.1265C21.8751 13.0442 21.8589 12.9627 21.8274 12.8867C21.796 12.8106 21.7498 12.7415 21.6917 12.6833C21.6335 12.6252 21.5644 12.579 21.4883 12.5476C21.4123 12.5161 21.3308 12.4999 21.2485 12.5Z"
                fill="white"
            />
        </svg>
    );
}
