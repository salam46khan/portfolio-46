import './Contact.css';
import contactPic from '../../../assets/contact.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import MyBtn from '../../../shared/MyBtn/MyBtn';
const ContactProfile = () => {
    return (
        <div className="contactProfile py-10 p-3 rounded-md    bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md w-full shadow shadow-[#0005] dark:shadow-[#0009] ">
            <div className="imgBox">
                <img src={contactPic} alt="" />
            </div>
            <div className='text-center mt-6 mb-10'>
                <h4 className='text-3xl myName text-pinkColor font-bold'>
                    Abdus Salam
                </h4>
                <p className='font-SubTitleText text-xl text-skyBlueColor'>
                    Front-end Developer
                </p>
            </div>
            <div className='mt-2 flex-wrap flex justify-center gap-3'>

                <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full hover:text-[#316FF6] duration-200 hover:scale-125 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md' target='_blank' to={'https://www.facebook.com/profile.php?id=100059831626442'}>
                    <FaFacebook></FaFacebook>
                </Link>

                <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full hover:text-[#0077B5] duration-200 hover:scale-125 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md' target='_blank' to={'https://www.linkedin.com/in/abdus-salam-867371223/'}>
                    <FaLinkedin></FaLinkedin>
                </Link>
                <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full hover:text-[#e1306c] duration-200 hover:scale-125 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md' target='_blank' to={'https://www.instagram.com/salamkhan4646/'}>
                    <FaInstagram></FaInstagram>
                </Link>

                <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full hover:text-[#1DA1F2] duration-200 hover:scale-125 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md' target='_blank' to={'https://twitter.com/SalamKhan796109'}>
                    <FaTwitter></FaTwitter>
                </Link>
            </div>

            <div className='mt-5 text-center'>
                <Link to={'https://drive.google.com/file/d/1r5lu1AEG3pxBODb01fN69EF1_gDnj0b7/view?usp=sharing'} target='_blank'>
                    <MyBtn>Download CV</MyBtn>
                </Link>
            </div>
        </div>
    );
};

export default ContactProfile;