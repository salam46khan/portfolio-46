import AboutBanner from "./AboutBanner/AboutBanner";
import Experience from "./Experience/Experience";
import Introduction from "./Introduction/Introduction";
import Learning from "./Learning/Learning";

const About = () => {
    return (
        <div className='bg-lightColor dark:bg-darkColor relative overflow-hidden'>
            <div className="blur-bg top-5 right-0 translate-x-10"></div>
            <AboutBanner></AboutBanner>
            <Introduction></Introduction>
            <div className="blur-bg bottom-[40%] left-0 translate-x-10 "></div>
            <Experience></Experience>
            <Learning></Learning>
            <div className="blur-bg bottom-36 right-0 translate-x-10"></div>
        </div>
    );
};

export default About;