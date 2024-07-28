import React, { useEffect, useState } from 'react';
import SkillItem from '../../../components/SkillItem';

const SkillSection = () => {
    const [skill, setSkill] = useState([]);
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkill(data))
    }, [])

    return (
        <div className='container relative z-10 text-darkColor dark:text-lightColor py-14 p-3'>
            <div className="container mx-auto text-center">
                <h3
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    data-aos-anchor-placement="bottom-bottom"
                    className="border-b-4 border-pink-400 inline-block px-3 text-3xl mb-3 font-bold">
                    My Skills
                </h3>
                <p 
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
                data-aos-anchor-placement="center-bottom"
                className="md:w-2/3 mx-auto">
                    Skill is the seed, practice is the water, and dedication is the sunlight. Nurture your abilities, and watch your potential grow
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>

                {
                    skill?.map(skills => <SkillItem key={skills?._id} skill={skills}></SkillItem>)
                }
            </div>
        </div>
    );
};

export default SkillSection;