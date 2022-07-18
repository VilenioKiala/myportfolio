import React from "react";

type WhatsAppIconProps = {
    className?: string;
};

export default function WhatsAppIcon({ className }: WhatsAppIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 41 40"
            fill="none"
            className={`${className}`}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.3333 40C9.28765 40 0.333344 31.0457 0.333344 20C0.333344 8.9543 9.28765 0 20.3333 0C31.379 0 40.3333 8.9543 40.3333 20C40.3333 31.0457 31.379 40 20.3333 40ZM20.9926 31.1271C27.5496 31.1244 32.8825 25.7902 32.8851 19.2346C32.8864 16.0569 31.6505 13.069 29.4052 10.8212C27.1599 8.57322 24.1739 7.33471 20.9925 7.33333C14.4374 7.33333 9.10233 12.6681 9.09972 19.2252C9.09883 21.3212 9.64645 23.3671 10.6872 25.1707L9.00001 31.3333L15.3045 29.6795C17.0415 30.627 18.9973 31.1264 20.9877 31.1271H20.9926Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5966 27.5266L11.8554 28.508L12.854 24.8604L12.619 24.4864C11.6295 22.9126 11.1069 21.0937 11.1077 19.2259C11.1098 13.7759 15.5441 9.34204 20.9965 9.34204C23.6367 9.34296 26.1185 10.3724 27.9847 12.2408C29.851 14.1092 30.8781 16.5927 30.8771 19.2339C30.8749 24.6843 26.4407 29.1186 20.9926 29.1186H20.9886C19.2148 29.1179 17.4752 28.6414 15.9575 27.7408L15.5966 27.5266ZM26.984 22.0626C26.9097 21.9387 26.7117 21.8643 26.4145 21.7155C26.1173 21.5668 24.6564 20.848 24.384 20.7487C24.1116 20.6496 23.9134 20.6001 23.7154 20.8975C23.5173 21.1949 22.9478 21.8643 22.7745 22.0626C22.6011 22.2609 22.4278 22.2858 22.1307 22.137C21.8336 21.9883 20.8761 21.6745 19.741 20.6621C18.8577 19.8741 18.2613 18.9011 18.0879 18.6036C17.9146 18.3061 18.0695 18.1453 18.2182 17.9971C18.3519 17.8639 18.5154 17.65 18.664 17.4765C18.8125 17.303 18.8621 17.179 18.9611 16.9808C19.0602 16.7824 19.0107 16.6089 18.9363 16.4602C18.8621 16.3114 18.2678 14.8488 18.0202 14.2538C17.7789 13.6743 17.534 13.7528 17.3516 13.7437C17.1784 13.735 16.9801 13.7331 16.782 13.7331C16.584 13.7331 16.262 13.8075 15.9896 14.105C15.7173 14.4025 14.9496 15.1214 14.9496 16.584C14.9496 18.0467 16.0144 19.4597 16.163 19.658C16.3115 19.8564 18.2583 22.8578 21.2393 24.1449C21.9482 24.4511 22.5017 24.6339 22.9333 24.7709C23.6451 24.9971 24.293 24.9652 24.8049 24.8886C25.3759 24.8033 26.563 24.1698 26.8108 23.4757C27.0583 22.7815 27.0583 22.1865 26.984 22.0626Z"
                fill="white"
            />
        </svg>
    );
}
