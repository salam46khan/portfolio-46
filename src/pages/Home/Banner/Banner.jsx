import './Banner.css'
import MyPhoto from '../../../assets/salam.png'
import { MdStarRate } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container h-full">
                <div className='flex flex-col md:flex-row-reverse justify-center items-center h-full gap-8'>
                    <div className='md:w-1/2 w-full relative py-5'>
                        <div className="star">
                            <div className="star-item">
                                <MdStarRate />
                            </div>
                            <div className="star-item">
                                <MdStarRate />
                            </div>
                            <div className="star-item">
                                <MdStarRate />
                            </div>
                            <div className="star-item">
                                <MdStarRate />
                            </div>
                            <div className="star-item">
                                <MdStarRate />
                            </div>
                            <div className="star-item">
                                <MdStarRate />
                            </div>
                        </div>
                        <div className="img-cercle m-auto border-4 border-[#FF66C4] flex justify-center items-center">
                            <img className='w-[95%] z-50 rounded-full' src={MyPhoto} alt="" />
                        </div>
                        <div className="round"></div>
                        <div className="round-2"></div>

                    </div>
                    <div className='md:w-1/2 w-full'>
                        <div className='text-white banner-content text-center md:text-start'>
                            <p className='font-NormalText text-xl md:text-2xl font-semibold'>Hi, There! I'm</p>
                            <h1 className='font-TitleText text-3xl text-pinkColor md:text-5xl'>ABDUS SALAM</h1>
                            <div className='font-SubTitleText text-2xl md:text-3xl py-3 md:py-4 text-lightBlueColor'>

                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        "I'm a front-end developer",
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        "I'm a jr. React developer",
                                        1000,
                                        "I'm a MERN Stack developer",
                                        1000,
                                        "I'm a web designer",
                                        1000
                                    ]}
                                    wrapper="h3"
                                    speed={50}
                                    style={{ display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                            </div>
                            <p className='font-NormalText w-full  pb-3 md:pb-6'>Expert with HTML, CSS, SASS, Javascript, Bootstrap, tailwind CSS, React JS, Express JS, and MongoDB </p>
                            <div className='hero-btn-group'>
                                <button>
                                    Visit Github
                                </button>
                                <div className="bridge">
                                    <div className="top bg-[#1f2129]"></div>
                                    <div className="bottom bg-[#1f2129]"></div>
                                </div>
                                <button className=' bg-[#1f2129]'>
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;