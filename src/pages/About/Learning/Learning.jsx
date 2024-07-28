import LearningItem from "./LearningItem";

const Learning = () => {
    return (
        <div className='container text-darkColor dark:text-lightColor py-14 p-3 z-10 relative'>
            <div className=" mx-auto text-center">
                <h3
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    data-aos-anchor-placement="bottom-bottom"
                    className="border-b-4 border-pink-400 inline-block px-3 text-3xl mb-3 font-bold">
                    Learning Experience
                </h3>
                <p
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="800"
                    data-aos-anchor-placement="center-bottom"
                    className="md:w-2/3 mx-auto">
                    My journey from a non-cse background to becoming a front-end developer has been marked by continuous learning, hands-on experience, and a commitment to growth.
                </p>
            </div>
            <div className="mt-6">
                <LearningItem></LearningItem>
            </div>
        </div>
    );
};

export default Learning;