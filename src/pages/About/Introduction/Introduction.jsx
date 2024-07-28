import introPic from '../../../assets/svg/Hand coding-amico.svg'
const Introduction = () => {
    return (
        <div className='container text-darkColor dark:text-lightColor pb-14 p-3 z-10 relative flex flex-col md:flex-row-reverse gap-4 md:items-center'>
            <div className="w-full md:w-1/2 ">
                <img
                    data-aos="fade-up-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="600"
                    data-aos-anchor-placement="top-bottom"
                    className='w-full ' src={introPic} alt="" />
            </div>
            <div className="w-full md:w-1/2">
                <h3
                    data-aos="fade-up-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    data-aos-anchor-placement="top-bottom"
                    className="border-b-4 border-pinkColor inline-block pr-6 font-bold text-3xl mb-3 dark:text-lightColor">Introduction</h3>
                <p
                    data-aos="fade-up-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="800"
                    data-aos-anchor-placement="top-bottom"
                    className='text-2xl font-SubTitleText w-full md:w-5/6 text-skyBlueColor'>
                    Hello, I'm Abdus Salam, a dedicated front-end developer passionate about crafting immersive
                </p>
                <p
                    data-aos="fade-up-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="900"
                    data-aos-anchor-placement="top-bottom"
                    className='dark:text-lightColor py-4'>
                    and visually appealing web experiences. With expertise in HTML, CSS, and JavaScript, and proficiency in frameworks like React JS, I specialize in creating dynamic and user-friendly interfaces. <br />
                    My commitment to excellence extends to utilizing technologies such as MongoDB, Express JS, Tailwind CSS, and Firebase to ensure innovative and seamless digital solutions.
                </p>
            </div>

        </div>
    );
};

export default Introduction;