import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/joy';
import me from '../assets/me_no_eyes_sq.png';
import eye from '../assets/eye_cropped.png';

const MyAvatar: React.FC = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const anchor = document.getElementById('anchor') as HTMLImageElement;
        if (!anchor) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = anchor.getBoundingClientRect();
            const anchorX = rect.left + rect.width / 2;
            const anchorY = rect.top + rect.height / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const angleDeg = Math.atan2(mouseY - anchorY, mouseX - anchorX) * (180 / Math.PI);
            const distance = 3; // Adjust this value to control eye movement range

            const x = distance * Math.cos(angleDeg * Math.PI / 180);
            const y = distance * Math.sin(angleDeg * Math.PI / 180);

            setEyePosition({ x, y });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative inline-block">
            <div
                id="anchor"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={me}
                    alt="me"
                    className="h-[55vh] relative cursor-pointer"
                />
            </div>

            {isHovered && (
                <Box
                    className="absolute"
                    style={{
                        left: '50%', // Center tooltip horizontally below the image
                        top: 'calc(100% + 10px)', // Position it below the anchor with some margin
                        width: '500px', // Set a fixed width for the tooltip
                        transform: 'translate(-50%, 0)', // Center it
                        zIndex: 100
                    }}
                >
                    <div className="p-4 bg-white shadow-md rounded z-50">
                        <p className="text-left text-sm font-fira">
                            my superpower is that i can create my own challenges🙂
                            <br />
                            bugs. they are called bugs.😫
                            <br />
                            fortunately, <span style={{ textDecoration: 'line-through' }}>chatgpt</span> i can resolve most of them😎
                            <br />
                            and for the ones i can't, thank you stackoverflow🙏🏻
                        </p>
                        <p className="mt-2 text-left font-medium text-sm font-fira">
                            double click on the folders to know more about me
                        </p>
                    </div>
                </Box>
            )}

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <img
                    className="eye h-[32px] absolute top-[34.5%] left-[40%]"
                    src={eye}
                    alt="left eye"
                    style={{
                        transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                    }}
                />
                <img
                    className="eye h-[32px] absolute top-[34.5%] left-[52%]"
                    src={eye}
                    alt="right eye"
                    style={{
                        transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                    }}
                />
            </div>
        </div>
    );
};

export default MyAvatar;
