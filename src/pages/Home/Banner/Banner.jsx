import './Banner.css'
import MyPhoto from '../../../assets/salam-004.png'
import { MdStarRate } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner z-10 text-darkColor">
            <div className="container h-full px-4">
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
                        <div
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="500"
                            className="img-cercle m-auto border-4 border-slate-200 dark:border-slate-700 flex justify-center items-center">

                            <div className='w-[95%] z-40 rounded-full bannerImg'>
                                <img className=' rounded-full' src={MyPhoto} alt="" />
                                <div className="imgOverShadow z-50"></div>
                            </div>
                        </div>
                        <div className="round"></div>
                        <div className="round-2"></div>

                    </div>
                    <div className='md:w-1/2 w-full'>
                        <div
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="500"
                            className='text-darkColor dark:text-lightColor banner-content text-center md:text-start '>

                            <p className='font-NormalText text-xl md:text-2xl font-semibold'>Hi, There! I'm</p>
                            <h1 className='font-TitleText text-3xl text-pinkColor md:text-5xl animate__animated animate__pulse'>ABDUS SALAM</h1>

                            <div className=''>
                                <div className='font-SubTitleText text-2xl md:text-3xl py-3 md:py-4 text-skyBlueColor'>

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
                                <p className='font-NormalText w-full z-50 pb-3 md:pb-6'>
                                    Expert with HTML, CSS, SASS, Javascript, Bootstrap, tailwind CSS, React JS, Express JS, and MongoDB
                                </p>
                            </div>
                            <div className='hero-btn-group'>
                                <Link to={'https://github.com/salam46khan'} target='_blank' className=' bg-pinkColor links'>
                                    Visit Github
                                </Link>
                                <div className="bridge z-10">
                                    <div className="top bg-lightColor dark:bg-darkColor"></div>
                                    <div className="bottom bg-lightColor dark:bg-darkColor"></div>
                                </div>
                                <Link to={'https://drive.google.com/file/d/1r5lu1AEG3pxBODb01fN69EF1_gDnj0b7/view?usp=sharing'} target='_blank' className='links dark:bg-darkColor bg-lightColor hover:bg-pinkColor dark:hover:bg-pinkColor duration-300'>
                                    Download CV
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;