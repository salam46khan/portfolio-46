import React, { useEffect, useState } from 'react';
import SkillItem from '../../../components/SkillItem';

const SkillSection = () => {
    const [skill, setSkill] = useState([]);
    useEffect(()=>{
        fetch('skills.json')
        .then(res => res.json())
        .then(data => setSkill(data))
    },[])

    // console.log(skill[0]._id);
    return (
        <div className='container text-darkColor dark:text-lightColor py-5 p-3'>
            <div className="container mx-auto text-center">
                <h3 className="border-b-4 border-pink-400 inline-block px-3 text-3xl mb-3 font-bold">
                    My Skills, {skill.length}
                </h3>
                <p className="md:w-2/3 mx-auto">
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