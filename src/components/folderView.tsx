import React, { useState, useEffect } from 'react';
import { Card, Button } from '@mui/joy';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { folders } from '../data/folders';
import IconComp from './iconComp';
import { modalData } from '../data/modalData';
import { Skills, MyJourney, Hobbies, Goals } from './about';

interface FolderViewCompProps {
    onClose: () => void;
    initialFolder: string | null;
}

interface ModalInfo {
    title: string;
    description: string;
    process?: string; // Made optional
    whatILearnt?: string;
    techStack?: string[];
    challengesFaced?: string[];
    listOfLinks?: string[];
    listOfImgs?: string[];
    pdf?: string;
}

interface FolderContent {
    name: string;
    desc: string;
    iconPath: string;
}

interface Folder {
    name: string;
    iconPath: string;
    contents: FolderContent[];
}

const FolderViewComp: React.FC<FolderViewCompProps> = ({ onClose, initialFolder }) => {
    const [currentPath, setCurrentPath] = useState<string>("aadya dewangan");
    const [selectedFolder, setSelectedFolder] = useState<string | null>(initialFolder);
    const [selectedItem, setSelectedItem] = useState<ModalInfo | null>(null);
    const [history, setHistory] = useState<string[]>([]);

    useEffect(() => {
        if (initialFolder) {
            setCurrentPath(`aadya dewangan > ${initialFolder}`);
            setHistory(["aadya dewangan"]);
        }
    }, [initialFolder]);

    const handleFolderClick = (folderName: string) => {
        setCurrentPath(`aadya dewangan > ${folderName}`);
        setSelectedFolder(folderName);
        setSelectedItem(null);
        setHistory(prev => [...prev, folderName]);
    };

    const handleIconDoubleClick = (itemName: string) => {
        if (selectedFolder) {
            const info = modalData.find(item => item.folderName === selectedFolder && item.title === itemName) || null;
            setSelectedItem(info);
        }
    };

    const handleBack = () => {
        if (history.length > 1) {
            const newHistory = history.slice(0, -1);
            setHistory(newHistory);
            setCurrentPath(newHistory.join(" > "));
            setSelectedFolder(newHistory[newHistory.length - 1] === "aadya dewangan" ? null : newHistory[newHistory.length - 1]);
            setSelectedItem(null);
        }
    };

    const renderInfo = () => {
        if (!selectedItem) return null;

        if (selectedItem.title === 'Skills') return <Skills />;
        if (selectedItem.title === 'MyJourney') return <MyJourney />;
        if (selectedItem.title === 'Hobbies') return <Hobbies />;
        if (selectedItem.title === 'Goals') return <Goals />;

        return (
            <Card variant="plain" className="p-4 m-4 w-[95%] overflow-auto">
                <h2 className="text-xl text-center font-bold mb-2 font-fira">{selectedItem.title}</h2>
                <p className="mb-1 text-left font-fira"><strong>Description:</strong></p>
                <p className="mb-4 text-left font-fira"> {selectedItem.description}</p>
                {selectedItem.process && (
                    <>
                        <p className="mb-1 text-left font-fira"><strong>What I did:</strong></p>
                        <p className="mb-4 text-left font-fira">{selectedItem.process}</p>
                    </>
                )}
                {selectedItem.whatILearnt && (
                    <>
                        <p className="mb-1 text-left font-fira"><strong>What I Learnt:</strong> </p>
                        <p className="mb-4 text-left font-fira">{selectedItem.whatILearnt}</p>
                    </>
                )}
                {selectedItem.techStack && selectedItem.techStack.length > 0 && (
                    <>
                        <p className="mb-1 text-left font-fira"><strong>Tech Stack:</strong></p>
                        <p className="mb-4 text-left font-fira">{selectedItem.techStack.join(' | ')}</p>
                    </>
                )}

                {selectedItem.challengesFaced && selectedItem.challengesFaced.length > 0 && (
                    <>
                        <p className="mb-1 text-left font-fira"><strong>Challenges Faced:</strong></p>
                        <ul className="mb-4 text-left list-disc list-inside font-fira">
                            {selectedItem.challengesFaced.map((challenge, index) => (
                                <li key={index} className='list-none'>{challenge}</li>
                            ))}
                        </ul>
                    </>
                )}

                {selectedItem.listOfLinks && selectedItem.listOfLinks.length > 0 && (
                    <>
                        <p className="mb-1 text-left font-fira"><strong>Links:</strong></p>
                        <ul className="mb-4 text-left list-disc list-inside font-fira">
                            {selectedItem.listOfLinks.map((link, index) => (
                                <li key={index} className='list-none font-fira'>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {selectedItem.listOfImgs && selectedItem.listOfImgs.length > 0 && (
                    <>
                        <p className="mb-1 text-left font-fira"><strong>Images:</strong></p>
                        <div className="mb-4 text-left grid grid-cols-2 gap-4">
                            {selectedItem.listOfImgs.map((img, index) => (
                                <img key={index} src={img} alt={`Image ${index + 1}`} className="w-full h-auto object-cover rounded" />
                            ))}
                        </div>
                    </>
                )}

                {selectedItem.pdf && (
                    <p className="mb-2 text-left font-fira">
                        <strong>PDF:</strong> <a href={selectedItem.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View PDF</a>
                    </p>
                )}
            </Card>
        );
    };

    const renderFolderContents = () => {
        const folder = folders.find(f => f.name === selectedFolder);
        if (!folder) return null;

        return (
            <>
                <div className="grid grid-cols-3 gap-3">
                    {folder.contents.map((content: FolderContent) => (
                        <div key={content.name} onDoubleClick={() => handleIconDoubleClick(content.name)}>
                            <IconComp
                                iconName={content.name}
                                iconDesc={content.desc}
                                iconSrc={content.iconPath}
                            />
                        </div>
                    ))}
                </div>
                <div className="text-center text-gray-500 mt-32 font-fira">Double click items to view</div>
            </>
        );
    };

    return (
        <div className="flex flex-col h-full font-fira">
            {/* Top bar */}
            <div className="flex items-center justify-between p-3 bg-gray-100 border-b">
                <div className="flex space-x-2">
                    <Button variant="plain" size="sm" onClick={handleBack} disabled={history.length <= 1}>
                        <ChevronLeftIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="plain" size="sm" disabled>
                        <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex-1 mx-4">
                    <input type="text" className="w-full px-2 py-1 border rounded font-fira" value={currentPath} readOnly />
                </div>
                <Button variant="plain" onClick={onClose} size="sm">
                    <XMarkIcon className="h-4 w-4" />
                </Button>
            </div>

            {/* Main content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left sidebar */}
                <div className="w-[20%] p-2 border-r overflow-auto z-0">
                    <h2 className="font-semibold mb-2 text-left font-fira">Folders</h2>
                    <div className="space-y-2">
                        {folders.map((folder: Folder) => (
                            <div
                                key={folder.name}
                                className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer font-fira"
                                onClick={() => handleFolderClick(folder.name)}
                            >
                                <img src={folder.iconPath} alt={folder.name} className="h-6 w-6" />
                                <span className="text-sm font-fira">{folder.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle content area */}
                <div className="flex-1 p-4 z-50 font-fira">
                    {selectedFolder ? renderFolderContents() : <div className="text-center text-gray-500 font-fira">Select a folder to view its contents</div>}
                </div>

                {/* Preview pane */}
                <div className="w-[52%] border-l overflow-auto">
                    {selectedItem && renderInfo()}
                </div>
            </div>

            {/* Status bar */}
            <div className="flex justify-between items-center p-2 bg-gray-100 text-sm border-t font-fira">
                <div>{folders.length} items</div>
            </div>
        </div>
    );
}

export default FolderViewComp;
