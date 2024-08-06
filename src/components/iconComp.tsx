import React, { useState } from 'react';

interface IconCompProps {
    iconName: string;
    iconDesc: string;
    iconSrc: string;
}


const IconComp: React.FC<IconCompProps> = ({ iconName, iconDesc, iconSrc }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative inline-block text-center p-4 transition-transform transform hover:animate-wiggle cursor-pointer"
            style={{ zIndex: 100 }} // Ensure this component is above others
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={iconSrc} alt={iconName} className="mx-auto mb-2 h-12 w-auto" />
            <p className="font-semibold text-sm ">{iconName}</p>

            {isHovered && (
                <div className="w-40 absolute left-1/2 bottom-full mb-2 p-2 bg-white shadow-md border rounded transform -translate-x-1/2  translate-y-full z-50">
                    <p className='text-sm'>{iconDesc}</p>
                </div>
            )}
        </div>
    );

};
export default IconComp;
