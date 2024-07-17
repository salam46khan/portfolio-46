import { useEffect, useState } from "react";
import ProjectItem from "../../../components/ProjectItem";

const ProjectSection = () => {
    const [project, setProject] = useState([])
    useEffect(()=>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProject(data))
    },[])
    return (
        <div className='container text-darkColor dark:text-lightColor py-10 p-3 z-10 relative'>
            <div className="container mx-auto text-center">
                <h3 className="border-b-4 border-pink-400 inline-block px-3 text-3xl mb-3 font-bold">
                    My Project
                </h3>
                <p className="md:w-2/3 mx-auto">
                    Code that speaks, designs that resonate. My projects marry functionality with flair for memorable digital experiences.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                {
                    project.map(project => <ProjectItem key={project?._id} project={project}></ProjectItem>)
                }
            </div>
        </div>
    );
};

export default ProjectSection;