import { FaCode, FaProjectDiagram } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import './Learning.css';

const LearningItem = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center">
            <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="600"
                data-aos-anchor-placement="center-bottom"
                className="w-full md:w-1/3  bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-5 rounded-md shadow shadow-[#0005] dark:shadow-[#0009 text-center py-8 learningIteam hover:-translate-y-1 hover:shadow-md">
                <div className="h-20 w-20 mx-auto flex justify-center items-center rounded-full bg-opacity-15 bg-pinkColor ">
                    <HiAcademicCap className="text-4xl text-pinkColor icon duration-300" />
                </div>
                <h4 className="font-bold text-2xl text-pinkColor py-4 title">
                    Self-Taught Learning
                </h4>
                <p>
                    From a non-CS background, I self-taught front-end development using YouTube and W3Schools for HTML, CSS, and JavaScript.
                </p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
                data-aos-anchor-placement="center-bottom"
                className="w-full md:w-1/3  bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-5 rounded-md shadow shadow-[#0005] dark:shadow-[#0009 text-center py-8 learningIteam hover:-translate-y-1 hover:shadow-md">
                <div className="h-20 w-20 mx-auto flex justify-center items-center rounded-full bg-opacity-15 bg-pinkColor">
                    <FaCode className="text-4xl text-pinkColor icon duration-300" />
                </div>
                <h4 className="font-bold text-2xl text-pinkColor py-4 title">
                    Programming Hero
                </h4>
                <p>
                    Finding Programming Hero was pivotal. I gained proficiency in React.js, Express.js, MongoDB, Next.js, Tailwind CSS, and Bootstrap through their curriculum.
                </p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
                className="w-full md:w-1/3  bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-5 learningIteam rounded-md shadow shadow-[#0005] dark:shadow-[#0009 text-center py-8 hover:-translate-y-1 hover:shadow-md">
                <div className="h-20 w-20 mx-auto flex justify-center items-center rounded-full bg-opacity-15 bg-pinkColor">
                    <FaProjectDiagram className="text-4xl text-pinkColor icon duration-300" />
                </div>
                <h4 className="font-bold text-2xl text-pinkColor py-4 title">
                    Hands-On Experience
                </h4>
                <p>
                    With a solid front-end foundation, I built full-stack applications, creating dynamic, responsive web experiences.
                </p>
            </div>
        </div>
    );
};

export default LearningItem;