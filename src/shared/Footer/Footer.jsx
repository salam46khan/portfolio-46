import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '/logoo.png'
const Footer = () => {
    return (
        <div className="bg-lightColor dark:bg-darkColor py-5 px-3 text-darkColor dark:text-white">
            <hr className=' border-slate-300 dark:border-black border-2 opacity-20' />
            <div className="container mx-auto flex justify-center items-center py-5 pt-10 ">
                <div className='text-center flex gap-4 flex-col md:flex-row'>
                    <div className=' w-full md:w-5/12 md:pr-4'>
                        <img className='w-full md:w-1/2' src={logo} alt="" />
                        <p className='pt-2 md:text-start'>
                            I am front-end-developer. Expert with React, Javascript, Tailwind, MongoDB, Express Js, HTML and CSS
                        </p>
                    </div>
                    <div className='w-full md:w-2/12'>
                        <p className=' text-xl font-semibold text-pinkColor md:text-start pb-3 uppercase'>Quick Links</p>
                        <ul className='flex md:flex-col gap-2 justify-center text-start flex-wrap'>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                            <li><Link to={'/'}>Skill</Link></li>
                            <li><Link to={'/'}>Experiance</Link></li>
                            <li><Link to={'/'}>Education</Link></li>
                        </ul>
                    </div>

                    <div className='w-full md:w-5/12 md:text-end'>
                        <h3 className='text-xl font-semibold text-pinkColor'>FOLLOW ME</h3>
                        <div className='mt-2 flex-wrap flex justify-center md:justify-end gap-3'>

                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full hover:text-[#316FF6] duration-200 hover:scale-125 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md' target='_blank' to={'https://www.facebook.com/profile.php?id=100059831626442'}>
                                <FaFacebook></FaFacebook>
                            </Link>
                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full hover:text-[#333] duration-200 hover:scale-125 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md' target='_blank' to={'https://github.com/salam46khan'}>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full hover:text-[#0077B5] duration-200 hover:scale-125 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md' target='_blank' to={'https://www.linkedin.com/in/abdus-salam-867371223/'}>
                                <FaLinkedin></FaLinkedin>
                            </Link>
                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full hover:text-[#e1306c] duration-200 hover:scale-125
                            bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md' target='_blank' to={'https://www.instagram.com/salamkhan4646/'}>
                                <FaInstagram></FaInstagram>
                            </Link>

                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full hover:text-[#1DA1F2] duration-200 hover:scale-125 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md' target='_blank' to={'https://twitter.com/SalamKhan796109'}>
                                <FaTwitter></FaTwitter>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>
            <hr className=' border-slate-300 dark:border-black opacity-35' />
            <div className="container">
            <p className='text-start mt-2'>Copyright &#169; 2024, All Right Reserved salam-46-portfolio.netlify.app</p>
            </div>
        </div>
    );
};

export default Footer;