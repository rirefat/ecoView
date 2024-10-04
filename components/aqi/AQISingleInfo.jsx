import Image from 'next/image';
import React from 'react';

const AQISingleInfo = ({title, value, unit }) => {
    return (
        <div className="flex items-center justify-between gap-4">
            <div
                className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
            >
                <Image
                    height={80}
                    width={80}
                    className="max-w-[18px]"
                    src="/icons/icon_air_element.png"
                    alt="icon"
                />
                {title}
            </div>
            <span className="text-right text-sm text-white lg:text-base">
                {value} {unit && unit}
            </span>
        </div>
    );
};

export default AQISingleInfo;