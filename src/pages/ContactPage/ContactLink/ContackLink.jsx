import { Link } from 'react-router-dom';
import facebook from '../../../assets/icon/facebook.png'
import youtube from '../../../assets/icon/youtube.png'
import linkedin from '../../../assets/icon/linkedin.png'
import instagram from '../../../assets/icon/instagram.png'
import twitter from '../../../assets/icon/twitter.png'
import { TiArrowRight } from 'react-icons/ti';
const ContackLink = () => {
    return (
        <div className='container text-darkColor dark:text-lightColor py-10 p-3 z-10 relative'>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-3 ">
                <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="600"
                    data-aos-anchor-placement="center-bottom"
                    className='bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-3 rounded-md w-full md:w-1/5 shadow shadow-[#0005] dark:shadow-[#0009] max-w-[300px] group'>
                    <div className=''>
                        <img className='w-1/2 mx-auto group-hover:scale-110 duration-300' src={facebook} alt="" />
                    </div>
                    <div className='mt-5 flex justify-between items-center'>
                        <h4 className='text-xl font-bold text-pinkColor'>Facebook</h4>
                        <Link to={'https://www.facebook.com/profile.php?id=100059831626442'} target='_blank' className=' h-6 w-8 flex justify-center items-center rounded-md'>
                            <TiArrowRight className='text-2xl duration-200 group-hover:text-pinkColor group-hover:scale-125' />
                        </Link>
                    </div>
                </div>


                <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="800"
                    data-aos-anchor-placement="center-bottom"
                    className='bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-3 rounded-md w-full md:w-1/5 shadow shadow-[#0005] dark:shadow-[#0009] max-w-[300px] group'>
                    <div className=''>
                        <img className='w-1/2 mx-auto group-hover:scale-110 duration-300' src={youtube} alt="" />
                    </div>
                    <div className='mt-5 flex justify-between items-center'>
                        <h4 className='text-xl font-bold text-pinkColor'>Youtube</h4>
                        <Link to={"https://www.youtube.com/@ExplorewithSalam"} target='_blank' className=' h-6 w-8 flex justify-center items-center rounded-md'>
                            <TiArrowRight className='text-2xl duration-200 group-hover:text-pinkColor group-hover:scale-125' />
                        </Link>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="center-bottom"
                    className='bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-3 rounded-md w-full md:w-1/5 shadow shadow-[#0005] dark:shadow-[#0009] max-w-[300px] group'>
                    <div className=''>
                        <img className='w-1/2 mx-auto group-hover:scale-110 duration-300' src={linkedin} alt="" />
                    </div>
                    <div className='mt-5 flex justify-between items-center'>
                        <h4 className='text-xl font-bold text-pinkColor'>Linkedin</h4>
                        <Link to={'https://www.linkedin.com/in/abdus-salam-867371223/'} target='_blank' className=' h-6 w-8 flex justify-center items-center rounded-md'>
                            <TiArrowRight className='text-2xl duration-200 group-hover:text-pinkColor group-hover:scale-125' />
                        </Link>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1200"
                    data-aos-anchor-placement="center-bottom"
                    className='bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-3 rounded-md w-full md:w-1/5 shadow shadow-[#0005] dark:shadow-[#0009] max-w-[300px] group'>
                    <div className=''>
                        <img className='w-1/2 mx-auto group-hover:scale-110 duration-300' src={instagram} alt="" />
                    </div>
                    <div className='mt-5 flex justify-between items-center'>
                        <h4 className='text-xl font-bold text-pinkColor'>Instagram</h4>
                        <Link to={'https://www.instagram.com/salamkhan4646/'} target='_blank' className=' h-6 w-8 flex justify-center items-center rounded-md'>
                            <TiArrowRight className='text-2xl duration-200 group-hover:text-pinkColor group-hover:scale-125' />
                        </Link>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1400"
                    data-aos-anchor-placement="center-bottom"
                    className='bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-3 rounded-md w-full md:w-1/5 shadow shadow-[#0005] dark:shadow-[#0009] max-w-[300px] group'>
                    <div className=''>
                        <img className='w-1/2 mx-auto group-hover:scale-110 duration-300' src={twitter} alt="" />
                    </div>
                    <div className='mt-5 flex justify-between items-center'>
                        <h4 className='text-xl font-bold text-pinkColor'>Twitter</h4>
                        <Link to={'https://twitter.com/SalamKhan796109'} target='_blank' className=' h-6 w-8 flex justify-center items-center rounded-md'>
                            <TiArrowRight className='text-2xl duration-200 group-hover:text-pinkColor group-hover:scale-125' />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContackLink;