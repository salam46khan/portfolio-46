import { Link } from 'react-router-dom';
import aboutPic from '../../../assets/svg/Programming-amico.svg'
import MyBtn from '../../../shared/MyBtn/MyBtn';
import './AboutSection.css'
const AboutSection = () => {
    return (
        <div className="container flex flex-col md:flex-row justify-center items-center gap-5 p-3 text-darkColor">
            <div className="w-full md:w-1/2">
                <img className='w-full about-pic' src={aboutPic} alt="" />
            </div>
            <div className="w-full md:w-1/2">
                <h3 className="border-b-4 border-pinkColor inline-block pr-6 font-bold text-3xl mb-3 dark:text-lightColor">About Me</h3>
                <p className='text-2xl font-SubTitleText w-full md:w-5/6 text-skyBlueColor'>Hey, I'm Abdus Salam, a passionate front-end developer</p>
                <p className='dark:text-lightColor py-2'>
                    with expertise in HTML, CSS, SASS, and JavaScript. I thrive on creating seamless user experiences, and my toolkit includes technologies like React.js, Tailwind CSS, Firebase, Express.js, and MongoDB.
                </p>
                <div className='my-2'>
                    <Link className='inline-block' to={'/about'}>
                        <MyBtn>See More</MyBtn>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;