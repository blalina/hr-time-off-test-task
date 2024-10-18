import React from "react";

type IconProps = {
    width?: string;
    height?: string;
    className?: string;
};

export const PiggyBankIcon: React.FC<IconProps> = ({
    width,
    height,
    className,
}) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M30.3335 23.8753C29.4935 25.5253 28.0968 26.9603 26.3185 28.0437L27.1268 30.7103C27.1721 30.8597 27.1818 31.0176 27.1551 31.1714C27.1284 31.3252 27.066 31.4706 26.973 31.596C26.88 31.7214 26.759 31.8233 26.6196 31.8935C26.4802 31.9637 26.3263 32.0003 26.1702 32.0003H23.2302C23.0138 32.0003 22.8033 31.9301 22.6302 31.8003L20.3052 30.0553H16.2435L13.9185 31.8003C13.7454 31.9301 13.5349 32.0003 13.3185 32.0003H10.3785C10.2224 32.0003 10.0685 31.9637 9.92907 31.8935C9.78965 31.8233 9.66861 31.7214 9.57563 31.596C9.48265 31.4706 9.42031 31.3252 9.3936 31.1714C9.36689 31.0176 9.37656 30.8597 9.42183 30.7103L10.2302 28.0437C7.24683 26.2253 5.3335 23.4153 5.3335 20.2637C5.3335 14.7803 11.1268 10.3337 18.2752 10.3337C19.7235 10.3337 21.5335 10.8303 22.8335 11.167L30.3335 8.66699L30.1935 14.7137L33.6668 16.167V22.0003L30.4568 23.667"
                stroke="#1C3144"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M24.5 18.6667C24.279 18.6667 24.067 18.5789 23.9107 18.4226C23.7545 18.2663 23.6667 18.0543 23.6667 17.8333C23.6667 17.6123 23.7545 17.4004 23.9107 17.2441C24.067 17.0878 24.279 17 24.5 17C24.721 17 24.933 17.0878 25.0892 17.2441C25.2455 17.4004 25.3333 17.6123 25.3333 17.8333C25.3333 18.0543 25.2455 18.2663 25.0892 18.4226C24.933 18.5789 24.721 18.6667 24.5 18.6667Z"
                stroke="#1C3144"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M2 13.667C2 13.667 2 17.667 5.33333 18.667"
                stroke="#1C3144"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M20 9.92167C20.2167 9.30167 20.3333 8.635 20.3333 7.94167C20.3333 4.66 17.7217 2 14.5 2C11.2783 2 8.66666 4.66 8.66666 7.94167C8.66666 9.51 9.26332 10.9383 10.24 12"
                stroke="#1C3144"
                stroke-width="2.5"
                stroke-linejoin="round"
            />
        </svg>
    );
};
