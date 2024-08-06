import { Card, Typography } from '@mui/joy';
import html from '../assets/about/skills/html-5.png';
import css from '../assets/about/skills/css-3.png';
import js from '../assets/about/skills/js.png';
import ts from '../assets/about/skills/ts.png';
import react from '../assets/about/skills/react-png.png';
import postman from '../assets/about/skills/postman-png.png';
import flask from '../assets/about/skills/flask.png';
import django from '../assets/about/skills/django-png.png';
import node from '../assets/about/skills/nodejs.png';
import express from '../assets/about/skills/express-js.png';
import python from '../assets/about/skills/python.png';
import tensorflow from '../assets/about/skills/tensorflow.png';
import pytorch from '../assets/about/skills/pytorch.png';
import fastapi from '../assets/about/skills/fastapi.png';
import collab from '../assets/about/skills/collab.png';
import openai from '../assets/about/skills/openai.png';
import opencv from '../assets/about/skills/opencv.png';
import sklearn from '../assets/about/skills/sklearn-png.png';
import seaborn from '../assets/about/skills/seaborn.png';
import pandas from '../assets/about/skills/pandas.png';
import numpy from '../assets/about/skills/numpy.png';
import tableau from '../assets/about/skills/tableau.png';
import excel from '../assets/about/skills/excel.png';
import git from '../assets/about/skills/git.png';
import figma from '../assets/about/skills/figma.png';
import vscode from '../assets/about/skills/vscode.jpg';
import supabase from '../assets/about/skills/supabase.png';
import postgres from '../assets/about/skills/postgres.png';
import matplotlib from '../assets/about/skills/matplotlib.png';

import girl_window from '../assets/about/hobbies/girl_by_the_window.jpg'
import advaya_poster from '../assets/about/hobbies/advaya_poster.png'

interface Logo {
    src: string;
    alt: string;
}

// SkillsLogos Component
const SkillsLogos: React.FC<{ logos: Logo[] }> = ({ logos }) => (
    <div className="flex flex-wrap m-3 mb-5">
        {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="h-10 m-2" />
        ))}
    </div>
);

const Skills: React.FC = () => {
    const web_development: Logo[] = [
        { src: html, alt: 'HTML' },
        { src: css, alt: 'CSS' },
        { src: js, alt: 'Javascript' },
        { src: ts, alt: 'Typescript' },
        { src: react, alt: 'React JS' },
        { src: postman, alt: 'Postman' },
        { src: flask, alt: 'Flask' },
        { src: django, alt: 'Django' },
        { src: node, alt: 'Node JS' },
        { src: express, alt: 'Express JS' },
    ];
    const data_science: Logo[] = [
        { src: python, alt: 'Python' },
        { src: tensorflow, alt: 'Tensorflow' },
        { src: pytorch, alt: 'PyTorch' },
        { src: fastapi, alt: 'FastAPI' },
        { src: collab, alt: 'Collab' },
        { src: openai, alt: 'Open AI' },
        { src: opencv, alt: 'Open CV' },
        { src: sklearn, alt: 'Sklearn' },
    ];

    const data_analysis: Logo[] = [
        { src: seaborn, alt: 'Seaborn' },
        { src: matplotlib, alt: 'MatPlotLib' },

        { src: pandas, alt: 'Pandas' },
        { src: numpy, alt: 'Numpy' },
        { src: tableau, alt: 'Tableau' },
        { src: excel, alt: 'Excel' },
    ];

    const others: Logo[] = [
        { src: git, alt: 'GitHub' },
        { src: figma, alt: 'Figma' },
        { src: vscode, alt: 'VS Code' },
        { src: supabase, alt: 'Supabase' },
        { src: postgres, alt: 'PostgreSQL' },
    ];

    return (
        <Card variant="plain" className="p-4 m-4 w-[95%] border-none shadow-none overflow-auto">
            <h2 className="text-xl text-center font-bold mb-2 font-fira">My Skills</h2>

            <Typography level="h3" className="font-semibold text-left font-fira">Web Development:</Typography>
            <SkillsLogos logos={web_development} />
            <Typography level="h3" className="font-semibold text-left font-fira">Data Science:</Typography>
            <SkillsLogos logos={data_science} />
            <Typography level="h3" className="font-semibold text-left font-fira">Data Analysis:</Typography>
            <SkillsLogos logos={data_analysis} />
            <Typography level="h3" className="font-semibold text-left font-fira">Others:</Typography>
            <SkillsLogos logos={others} />
        </Card>
    );
};

// MyJourney Component
const MyJourney: React.FC = () => (
    <Card variant="plain" className="p-4 m-4 w-[95%] border-none shadow-none overflow-auto">
        <h2 className="text-xl text-center font-bold mb-2 font-fira">My Journey</h2>
        <h3 className="font-bold text-left font-fira">Schools:</h3>
        <p className="text-left m-3 font-fira">
            I have travelled a lot, like seriously a lot! I have lived in 3 countries as a kid - India, USA and Singapore so my schooling has been across 7 schools ranging from 4-5 different boards/patterns..so needless to say it has been quite a rollercoaster. I learnt a lot from it though, which makes me quite adaptable and also fun and easy to talk to too!
            <br /> Also, I was in Girl Guides when I was in Singapore, where I learnt a lot of stuff too like making stuff out of wood, camping, and a whole lot of other things for badges.
            <br /> I did my 10th grade from Queenstown Secondary School in Singapore and my 12th grade from St Patrick's Academy Bengaluru.
        </p>

        <h3 className="font-bold text-left font-fira">College:</h3>
        <h4 className="font-semibold text-left font-fira">Year 1:</h4>
        <p className="text-left m-3 font-fira">The first year of college was spent on exploring things like college clubs (I somehow managed to get into quite a few, although left most of them later), picking up skills like designing and video editing and in general making friends and exploring college life.
        </p>
        <h4 className="font-semibold text-left font-fira">Year 2:</h4>
        <p className="text-left m-3 font-fira">I co-founded a merchandising solution with a friend for our college as we felt the quality of clothes given during fests and from clubs was not up to the mark. We did good business and supplied to about 7-8 clubs and 3 events.
        </p>
        <h4 className="font-semibold text-left font-fira">Year 3:</h4>
        <p className="text-left m-3 font-fira">Recruitment for internships begins in the third year and we realised we were not able to make time to do anything else, especially in terms of skilling up so we closed down our business to focus on ourselves.
            <br />
            I learnt Data Analysis and Machine Learning, worked in some remote internships, and also secured a summer internship with Tata Steel.
        </p>
        <h4 className="font-semibold text-left font-fira">Year 4:</h4>
        <p className="text-left m-3 font-fira">Final year has just begun, let's see where this year goes. Right now, we have restarted E Cell too!
        </p>
    </Card>
);

// Hobbies Component
const Hobbies: React.FC = () => {
    const artImages: Logo[] = [
        { src: girl_window, alt: 'girl by the window' },
        { src: advaya_poster, alt: 'poster for a friend' },
        // Add more images as needed
    ];

    return (
        <Card variant="plain" className="p-4 m-4 w-[95%] overflow-auto">
            <h2 className="text-xl text-center font-bold mb-2 font-fira">My Hobbies</h2>

            <Typography level="h3" className=" text-left font-fira">Digital Art:</Typography>
            <div className="flex flex-wrap justify-center">
                {artImages.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} className="h-200 m-2" />
                ))}
            </div>
        </Card>
    );
};

// Goals Component
const Goals: React.FC = () => (
    <Card variant="plain" className="p-4 m-4 w-[95%] border-none shadow-none overflow-auto">
        <h2 className="text-xl text-center font-bold mb-2 font-fira">My Goals</h2>
        <p className="text-left mb-5 font-fira">Goals change over time but some of my constant ones are:</p>
        <ul className="list-disc pl-5 text-left font-fira">
            <li>Have an impact on the world</li>
            <li>Solve a problem that matters to me</li>
            <li>Build my own SaaS product</li>
            <li>Build something that gets recognized by Y Combinator</li>
        </ul>
        <br />
        <p className="text-left mb-5 font-fira">These may end up working out together or separately; the important thing is that it happens✌🏻.</p>
    </Card>
);

export { Skills, MyJourney, Hobbies, Goals };
