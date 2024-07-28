import './AboutBanner.css'
import 'animate.css';
const AboutBanner = () => {
    return (
        <div className="container p-3 w-full h-[40vh]">
            <div className="h-full w-full flex justify-center items-end py-10">
                <h2 className="font-TitleText font-bold uppercase text-4xl md:text-6xl text-pinkColor aboutTitle animate__animated animate__backInDown ">
                    About Me
                </h2>
            </div>
        </div>
    );
};

export default AboutBanner;