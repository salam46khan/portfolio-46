import ExpPic from '../../../assets/svg/Coding workshop-amico.svg'
const Experience = () => {
    return (
        <div className='container text-darkColor dark:text-lightColor pb-14 p-3 z-10 relative flex flex-col md:flex-row gap-4 md:items-center'>
            <div className="w-full md:w-1/2 ">
                <img
                    data-aos="fade-up-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="600"
                    data-aos-anchor-placement="top-bottom"
                    className='w-full ' src={ExpPic} alt="" />
            </div>
            <div className="w-full md:w-1/2">
                <h3
                    data-aos="fade-up-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    data-aos-anchor-placement="bottom-bottom"
                    className="border-b-4 border-pinkColor inline-block pr-6 font-bold text-3xl mb-3 dark:text-lightColor">Experience</h3>
                <p
                    data-aos="fade-up-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="800"
                    data-aos-anchor-placement="bottom-bottom"
                    className='text-2xl font-SubTitleText w-full md:w-5/6 text-skyBlueColor'>
                    In my journey as a front-end developer, I have accumulated valuable experience and honed my skills in web development.
                </p>
                <p
                    data-aos="fade-up-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="900"
                    data-aos-anchor-placement="bottom-bottom"
                    className='dark:text-lightColor py-4'>
                    Working with HTML, CSS, and JavaScript, I've crafted visually striking and responsive interfaces. My expertise extends to utilizing frameworks like React JS for dynamic user experiences. I've seamlessly integrated MongoDB, Express JS, Tailwind CSS, and Firebase in projects, showcasing versatility and a commitment to staying at the forefront of innovative and efficient development practices.
                </p>
            </div>
        </div>
    );
};

export default Experience;