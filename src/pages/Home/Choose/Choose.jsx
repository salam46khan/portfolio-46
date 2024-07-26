import { IoAccessibilitySharp } from "react-icons/io5";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { GiConfirmed, GiSkills } from "react-icons/gi";
import './Choose.css'

const Choose = () => {
    return (
        <div className='container text-darkColor dark:text-lightColor py-10 p-3 z-10 relative'>
            <div className=" flex justify-center text-center mb-3">
                <div className=" mx-auto text-center">
                    <h3 className="border-b-4 border-pink-400 inline-block px-3 text-3xl mb-3 font-bold">
                        Why Choose This Profession
                    </h3>
                    <p className="md:w-2/3 mx-auto">
                        Choosing front-end development isn't just about code. It's about blending my tech passion with a drive to make a difference.
                    </p>
                </div>
            </div>
            <div className=" w-full max-w-6xl mx-auto choose-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ">
                    <div className="bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md px-4 py-8 rounded-md w-full shadow shadow-[#0005] dark:shadow-[#0009] chooseCard">
                        <IoAccessibilitySharp className="text-4xl text-pink-400 chooseIcon" />
                        <h4 className="text-pink-400 font-bold text-xl mt-5 bounce">Accessible Entry Point</h4>
                        <p className="text-xs mt-2">
                            Front-end development offers a welcoming entry point for individuals from diverse educational backgrounds
                        </p>
                    </div>
                    <div className="bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md px-4 py-8 rounded-md w-full shadow shadow-[#0005] dark:shadow-[#0009] chooseCard">
                        <FaUserGraduate className="text-4xl text-pink-400 chooseIcon" />
                        <h4 className="text-pink-400 font-bold text-xl mt-5 bounce">Self-Directed Learning</h4>
                        <p className="text-xs mt-2">
                            As a self-taught front-end developer, you value the effectiveness of online learning tools such as YouTube and W3Schools.
                        </p>
                    </div>
                    <div className="bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md px-4 py-8 rounded-md w-full shadow shadow-[#0005] dark:shadow-[#0009]chooseCard chooseCard">
                        <FaUsers className="text-4xl text-pink-400 chooseIcon" />
                        <h4 className="text-pink-400 font-bold text-xl mt-5 bounce">Community Support</h4>
                        <p className="text-xs mt-2">
                            Front-end devs are super welcoming to newcomers, offering lots of help and resources for learning and making connections.
                        </p>
                    </div>
                    <div className="bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md px-4 py-8 rounded-md w-full shadow shadow-[#0005] dark:shadow-[#0009]chooseCard chooseCard">
                        <MdLocalOffer className="text-4xl text-pink-400 chooseIcon" />
                        <h4 className="text-pink-400 font-bold text-xl mt-5 bounce">Job Satisfaction and Fulfillment</h4>
                        <p className="text-xs mt-2">
                            Front-end dev rocks for creativity and personal growth, leading to a fulfilling career journey.
                        </p>
                    </div>
                    <div className="bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md px-4 py-8 rounded-md w-full shadow shadow-[#0005] dark:shadow-[#0009]chooseCard chooseCard">
                        <GiSkills className="text-4xl text-pink-400 chooseIcon" />
                        <h4 className="text-pink-400 font-bold text-xl mt-5 bounce">Future-Proof Skills</h4>
                        <p className="text-xs mt-2">
                            In an increasingly digital world, front-end development skills are in high demand across industries.
                        </p>
                    </div>
                    <div className="bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md px-4 py-8 rounded-md w-full shadow shadow-[#0005] dark:shadow-[#0009]chooseCard chooseCard">
                        <GiConfirmed className="text-4xl text-pink-400 chooseIcon" />
                        <h4 className="bounce text-pink-400 font-bold text-xl mt-5">Adaptability and Versatility</h4>
                        <p className="text-xs mt-2">
                            Front-end skills are super adaptable and versatile, making them valuable across different industries and sectors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;