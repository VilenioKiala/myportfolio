import React from "react";

type WhatsAppIconStrokeProps = {
    className?: string;
};

export default function WhatsAppIconStroke({
    className,
}: WhatsAppIconStrokeProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            fill="none"
            className={`${className}`}
        >
            <path
                d="M30.0944 8.22583C17.744 8.22583 7.69306 17.9066 7.68871 29.8041C7.68581 33.6087 8.71935 37.322 10.679 40.5924L7.5 51.7742L19.3785 48.7737C22.6827 50.5021 26.3567 51.4037 30.0856 51.4012H30.0944C42.4447 51.4012 52.4956 41.7189 52.5 29.8215C52.5029 24.0586 50.1745 18.6339 45.9431 14.5563C41.7131 10.4773 36.0881 8.22728 30.0944 8.22583ZM30.0944 47.7562H30.0871C26.7455 47.7562 23.4677 46.891 20.6081 45.2565L19.9258 44.8674L12.8797 46.6471L14.761 40.0278L14.3182 39.3499C12.4586 36.5136 11.4686 33.1956 11.4702 29.8041C11.4745 19.9142 19.83 11.8708 30.1016 11.8708C35.0748 11.8723 39.7505 13.7405 43.2677 17.13C46.785 20.5195 48.72 25.0268 48.7171 29.82C48.7127 39.7099 40.3587 47.7562 30.0929 47.7562H30.0944ZM40.3094 34.3215C39.749 34.0529 36.9968 32.7479 36.4829 32.5665C35.9705 32.3879 35.5974 32.295 35.2244 32.835C34.8527 33.375 33.7785 34.59 33.4534 34.9486C33.1253 35.3086 32.7987 35.3521 32.2384 35.0836C31.6781 34.8136 29.8737 34.2445 27.7369 32.4068C26.0719 30.9784 24.9484 29.2132 24.6218 28.6718C24.2952 28.1332 24.5869 27.8415 24.8671 27.5729C25.1182 27.3334 25.4274 26.9444 25.7061 26.6294C25.9848 26.3144 26.0777 26.0894 26.2665 25.7294C26.4523 25.3708 26.3594 25.0544 26.2185 24.7858C26.0777 24.5144 24.96 21.8608 24.4911 20.7823C24.0382 19.7313 23.5766 19.8721 23.2326 19.8547C22.906 19.8402 22.5344 19.8358 22.1584 19.8358C21.7882 19.8358 21.18 19.9708 20.6661 20.5108C20.1537 21.0508 18.7065 22.3544 18.7065 25.0079C18.7065 27.6629 20.7126 30.2265 20.9927 30.5865C21.2729 30.945 24.9411 36.3929 30.5574 38.73C31.8929 39.2831 32.9352 39.6155 33.7495 39.8652C35.0908 40.276 36.3116 40.2165 37.2755 40.0786C38.3497 39.9233 40.5881 38.775 41.0526 37.5165C41.52 36.2579 41.52 35.1779 41.3806 34.9529C41.2442 34.7279 40.8697 34.5929 40.3094 34.3215Z"
                fill="white"
            />
        </svg>
    );
}
