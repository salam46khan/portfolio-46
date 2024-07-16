import React from 'react';
import Banner from './Banner/Banner';
import AboutSection from './AboutSection/AboutSection';
import SkillSection from './SkillSection/SkillSection';

const Home = () => {
    return (
        <div className='bg-lightColor dark:bg-darkColor'>
            <div className='relative overflow-hidden'>
                <div className="blur-bg top-5 right-0 translate-x-10"></div>
                <Banner></Banner>
                <AboutSection></AboutSection>
                <div className="blur-bg bottom-32 left-0 translate-x-10"></div>
            </div>
            <div>
                <SkillSection></SkillSection>
            </div>
        </div>
    );
};

export default Home;