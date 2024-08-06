// src/data/folders.js
import { icons } from './icons';
import { modalData } from './modalData';

export const folders = [
    // {
    //     name: "about",
    //     desc: "Know more about me and what my journey has been",
    //     iconPath: icons.folder,
    //     isFolder: true,
    //     contents: [
    //         { name: "MyJourney", desc: "A short biography about me", iconPath: icons.me, isFolder: false },
    //         { name: "Goals", desc: "My goals and aspirations", iconPath: icons.goals, isFolder: false },
    //         { name: "Hobbies", desc: "What I do in my free time.", iconPath: icons.hobbies, isFolder: false },

    //     ],
    // },
    ...Array.from(
        modalData.reduce((acc, { folderName, title, description, iconPath }) => {
            if (!acc.has(folderName)) {
                acc.set(folderName, {
                    name: folderName,
                    desc: `see info related to ${folderName.split(" ").map(w => w[0] + w.slice(1)).join(" ")} here!`,
                    iconPath: icons.folder,
                    isFolder: true,
                    contents: []
                });
            }
            acc.get(folderName).contents.push({
                name: title,
                desc: description,
                iconPath: iconPath,
                isFolder: false
            });
            return acc;
        }, new Map()).values()
    )
];


