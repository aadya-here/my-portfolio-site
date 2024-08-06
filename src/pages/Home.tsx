import React, { useState } from 'react';
import { folders } from '../data/folders';

import IconComp from '../components/iconComp';
import MyAvatar from './MyAvatar';
import FolderViewComp from '../components/folderView';

// Import images
import linkedInLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import emailLogo from '../assets/mail.png';
import folderIcon from '../assets/folder.png';

const Home: React.FC = () => {
    const [folderView, setFolderView] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

    const handleFolderDoubleClick = (folderName: string) => {
        console.log('Folder double click:', folderName);
        setSelectedFolder(folderName);
        setFolderView(true);
    };

    const handleCloseFolderView = () => {
        setFolderView(false);
        setSelectedFolder(null);
    };

    return (
        <div className='bg-blue-50 min-h-screen'>
            <div className=" p-5 m-0 flex flex-col justify-center items-center relative h-[90vh]">
                <MyAvatar />
                <h3 className="text-2xl font-bold mt-4">hi, i am aadya.</h3>
                <p className='text-xs'>hover on the hair area OR <br></br>double click on the folders</p>

                <div className="flex justify-center items-center w-full h-[82vh]">
                    <div className="absolute w-4/5 h-[88vh]">
                        {folders.map((folder, index) => {
                            const angle = (index / folders.length) * (2 * Math.PI);
                            const x = 450 * Math.cos(angle);
                            const y = 300 * Math.sin(angle);
                            return (
                                <div
                                    key={folder.name}
                                    className="absolute"
                                    style={{ transform: `translate(${x + 550}px, ${y + 50}px)` }}
                                >
                                    <div onDoubleClick={() => handleFolderDoubleClick(folder.name)}>
                                        <IconComp
                                            iconSrc={folderIcon} // Use the imported folder icon
                                            iconName={folder.name}
                                            iconDesc={folder.desc}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {folderView && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg w-11/12 h-5/6 overflow-hidden">
                            <FolderViewComp onClose={handleCloseFolderView} initialFolder={selectedFolder} />
                        </div>
                    </div>
                )}

                <div className="flex space-x-4 mt-5 absolute bottom-20">
                    <a href="https://www.linkedin.com/in/aadya-dewangan-6a76a0225/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedInLogo} alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/aadya-here/" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a href="mailto:aadyaxdewangan@gmail.com">
                        <img src={emailLogo} alt="Email" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
