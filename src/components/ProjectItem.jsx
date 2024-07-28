import React from 'react';
import './componentsStyle/ProjectItem.css'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaVideo } from 'react-icons/fa';
const ProjectItem = ({ project }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
            data-aos-anchor-placement="center-bottom"
            className='project-card bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md p-3 rounded-md w-full shadow shadow-[#0005] dark:shadow-[#0009] flex flex-col md:flex-row gap-3'>
            <div className="shadow-line"></div>
            <div className='w-full md:w-[48%] overflow-hidden rounded'>
                <img className='w-full h-full object-cover rounded' src={project?.cover_photo} alt="" />
            </div>
            <div className='w-full md:w-[52%] flex flex-col gap-2'>
                <div className='flex-grow'>
                    <h2 className='font-semibold text-2xl text-pinkColor'>
                        {project?.project_name}
                    </h2>
                    <p className='font-SubTitleText text-skyBlueColor text-[17px]'>
                        {project?.description}
                    </p>
                    <p className='text-xs py-2'>
                        <span className='font-semibold'>Technologies used: </span>
                        {project?.technology}
                    </p>
                </div>
                <div className='flex justify-between items-center'>
                    <Link to={project?.live_link} target='_blank' className=' flex justify-around items-center'>
                        <button className='round-btn duration-300 hover:bg-pinkColor'>
                            <FaExternalLinkAlt />
                        </button>
                    </Link>
                    <Link to={project?.github_link} target='_blank' className='flex justify-around items-center'>
                        <button className='round-btn duration-300 hover:bg-pinkColor'>
                            <FaGithub />
                        </button>
                    </Link>
                    <Link to={project?.video_link} target='_blank' className=' flex justify-around items-center'>
                        <button className='round-btn duration-300 hover:bg-pinkColor'>
                            <FaVideo />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;