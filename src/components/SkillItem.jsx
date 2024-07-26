import React from 'react';
import html from '../assets/html.png'
import ProgressBar from '@ramonak/react-progress-bar';
import Tilt from 'react-parallax-tilt';
// import Tilt from 'index';
// import './ParallaxEffect.demozap.css';


const SkillItem = ({ skill }) => {
    return (
        <div>
            <Tilt
                className="background-stripes parallax-effect rounded-md overflow-hidden"
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.65}
                scale={1.03}
            >
                <div className='bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-3 rounded-md w-full shadow shadow-[#0005] dark:shadow-[#0009] '>
                    <div className='flex justify-start'>
                        <div className="img h-12 py-1 pr-1 w-12">
                            <img className='w-full' src={skill?.icon} alt="" />
                        </div>
                        <div className="title">
                            <h5 className='text-xl font-semibold text-pinkColor'>
                                {skill?.technology}
                            </h5>
                            <p className='text-xs'>{skill?.sub_title}</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <ProgressBar
                            completed={skill?.process_length}
                            className="wrapper"
                            labelSize='10px'
                            bgColor="#ff66cf"
                            baseBgColor="#ff66cf30"
                            animateOnRender={true}
                            height="12px"
                        />
                    </div>
                </div>
            </Tilt>
        </div>

    );
};

export default SkillItem;