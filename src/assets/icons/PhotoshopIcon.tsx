import React from "react";

type PhotoshopIconProps = {
    className?: string;
};

export default function PhotoshopIcon({ className }: PhotoshopIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 101 99"
            fill="none"
            className={`w-full h-full ${className}`}
        >
            <path
                d="M0.276123 0.427734H100.276V98.761H0.276123V0.427734Z"
                fill="url(#paint0_linear_25_466)"
            />
            <path
                d="M8.22913 8.24756H92.3237V90.9416H8.22913V8.24756Z"
                fill="url(#paint1_linear_25_466)"
            />
            <path
                d="M24.4421 28.1424C24.4421 28.1424 30.7648 27.9761 35.9694 27.9761C41.2288 27.9761 44.9788 29.2134 47.4964 31.3877C49.9028 33.4424 51.5254 36.9451 51.5254 40.9324C51.5254 44.9197 50.2941 48.1824 48.0554 50.4764C45.1458 53.4367 41.7551 55.1891 35.9694 55.4314C34.3711 55.4984 32.8918 55.5144 32.8918 55.5144V68.4757H24.4418L24.4421 28.1424ZM32.8914 48.3334C33.8094 48.4227 34.3848 48.3797 35.7454 48.3634C40.2781 48.3091 43.0751 45.5527 43.0751 41.3844C43.0751 37.6397 40.7688 34.5651 36.4174 34.4057C34.6831 34.3424 32.8914 34.4057 32.8914 34.4057V48.3334Z"
                fill="url(#paint2_linear_25_466)"
            />
            <path
                d="M54.7501 59.4461C56.4531 60.4911 60.4717 62.0561 63.2111 62.0561C66.0097 62.0561 67.1654 61.0698 67.1654 59.5321C67.1654 57.9924 66.2527 56.3751 62.7837 55.2058C56.6374 53.1128 54.2637 50.6074 54.3254 47.1008C54.3254 41.4371 59.0714 37.1904 66.4347 37.1904C69.9034 37.1904 72.6744 38.3244 74.4984 39.2471V46.0444C73.1584 45.3051 69.2947 43.6544 66.7394 43.6544C64.4864 43.6544 63.2094 44.5778 63.2094 46.1151C63.2094 47.5311 64.3664 48.2698 68.0174 49.5631C73.6757 51.5324 76.0494 54.4244 76.1094 58.8561C76.1094 64.4578 71.7914 68.9121 63.2094 68.6418C60.2641 68.5491 57.0011 67.3848 54.7494 66.1554L54.7501 59.4461Z"
                fill="url(#paint3_linear_25_466)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_25_466"
                    x1="24.5778"
                    y1="-4.7076"
                    x2="62.9111"
                    y2="76.2927"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A0CBFF" />
                    <stop offset="0.394" stopColor="#A0CBFE" />
                    <stop offset="0.583" stopColor="#8EC2FC" />
                    <stop offset="0.784" stopColor="#83BCFB" />
                    <stop offset="1" stopColor="#7FBAFB" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_25_466"
                    x1="38.1844"
                    y1="9.41289"
                    x2="59.8511"
                    y2="81.4136"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#090058" />
                    <stop offset="1" stopColor="#070033" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_25_466"
                    x1="12.6551"
                    y1="-0.397595"
                    x2="50.9881"
                    y2="80.6017"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A0CBFF" />
                    <stop offset="0.394" stopColor="#A0CBFE" />
                    <stop offset="0.583" stopColor="#8EC2FC" />
                    <stop offset="0.784" stopColor="#83BCFB" />
                    <stop offset="1" stopColor="#7FBAFB" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_25_466"
                    x1="34.4897"
                    y1="-10.9739"
                    x2="72.9747"
                    y2="70.3464"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A0CBFF" />
                    <stop offset="0.394" stopColor="#A0CBFE" />
                    <stop offset="0.583" stopColor="#8EC2FC" />
                    <stop offset="0.784" stopColor="#83BCFB" />
                    <stop offset="1" stopColor="#7FBAFB" />
                </linearGradient>
            </defs>
        </svg>
    );
}
