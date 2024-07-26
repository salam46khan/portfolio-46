import React from 'react';
import Banner from './Banner/Banner';
import AboutSection from './AboutSection/AboutSection';
import SkillSection from './SkillSection/SkillSection';
import ProjectSection from './ProjectSection/ProjectSection';
import Education from './Education/Education';
import Choose from './Choose/Choose';

const Home = () => {
    return (
        <div className='bg-lightColor dark:bg-darkColor'>
            <div className='relative overflow-hidden'>
                <div className="blur-bg top-5 right-0 translate-x-10"></div>
                <Banner></Banner>
                <AboutSection></AboutSection>
                <div className="blur-bg bottom-36 left-0 translate-x-10"></div>
            </div>
            <div className='relative overflow-hidden'>
                <div className="blur-bg top-36 right-0 translate-x-10"></div>
                <SkillSection></SkillSection>
                <ProjectSection></ProjectSection>
                <div className="blur-bg bottom-36 left-0 translate-x-10"></div>
            </div>
            <div className='relative overflow-hidden'>
                <div className="blur-bg top-56 right-0 translate-x-10"></div>
                <Education></Education>
                <Choose></Choose>
                <div className="blur-bg bottom-[30%] left-0 translate-x-10 "></div>
                <div className="blur-bg bottom-36 right-0 translate-x-10"></div>
            </div>
        </div>
    );
};

export default Home;