import { FaBookReader, FaCode, FaUserGraduate } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
    return (
        <div className="container text-darkColor dark:text-lightColor py-10 p-3 z-10 relative">

            <div className=" mx-auto text-center">
                <h3 className="border-b-4 border-pink-400 inline-block px-3 text-3xl mb-3 font-bold">
                    Education
                </h3>
                <p className="md:w-2/3 mx-auto">
                    Educate minds, ignite potential, shape destinies—a beacon of knowledge lighting the path to a brighter future.
                </p>
            </div>
            <div className=" mt-5">

                <VerticalTimeline lineColor='#FF69CD' >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        date="2014"
                        iconStyle={{ background: '#FF69CD', color: '#fff' }}
                        icon={<FaBookReader />}
                        contentStyle={{ background: '#F574B520', }}
                        contentArrowStyle={{ borderRight: '7px solid #F574B520' }}
                    >
                        <h3 className=" vertical-timeline-element-title font-SubTitleText text-2xl text-pinkColor">
                            Secondary School Certificate (SSC)
                        </h3>

                        <h4 className=" vertical-timeline-element-subtitle text-xs text-skyBlueColor">
                            Bhadrakhali High School
                        </h4>
                        <h4 className=' vertical-timeline-element-subtitle'>
                            Kaliganj, Satkhira
                        </h4>

                        <h6 className=' vertical-timeline-element-subtitle font-normal text-xs pt-2'>
                            In 2014, I successfully completed my Secondary School Certificate (SSC) exams with distinction, earning a GPA of 4.00 out of 5.00 in the Humanities subject.
                        </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016"
                        iconStyle={{ background: '#FF69CD', color: '#fff' }}
                        icon={<GrCertificate />}
                        contentStyle={{ background: '#F574B520', backdropFilter: 'blur(20px)',}}
                        contentArrowStyle={{ borderRight: '7px solid #F574B520' }}
                    >
                        <h3 className=" vertical-timeline-element-title font-SubTitleText text-pinkColor text-2xl">
                            Higher Secondary Certificate (HSC)
                        </h3>

                        <h4 className=" vertical-timeline-element-subtitle font-normal text-skyBlueColor text-xs">
                            Kaliganj Govt. Collage
                        </h4>
                        <h4 className=' vertical-timeline-element-subtitle'>
                            Kaliganj, Satkhira
                        </h4>
                        <h6 className=' vertical-timeline-element-subtitle font-normal text-xs pt-2'>
                            In 2016, I excelled in the Higher Secondary Certificate (HSC) exams, achieving a commendable GPA of 3.68 in the Humanities subject.
                        </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020"
                        iconStyle={{ background: '#FF69CD', color: '#fff' }}
                        icon={<FaUserGraduate />}
                        contentStyle={{ background: '#F574B520', }}
                        contentArrowStyle={{ borderRight: '7px solid #F574B520' }}
                    >
                        <h3 className=" vertical-timeline-element-title font-SubTitleText text-pinkColor text-2xl">
                            Bachelor of Social Science (BSS Hon&apos;s)
                        </h3>

                        <h4 className=" vertical-timeline-element-subtitle font-normal text-skyBlueColor text-xs">
                            National University
                        </h4>
                        <h4 className=' vertical-timeline-element-subtitle'>
                            Bangladesh
                        </h4>
                        <h6 className=' vertical-timeline-element-subtitle font-normal text-xs pt-2'>
                            I graduated with a Bachelor of Social Science from the National University, securing a Second Division.
                        </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023"
                        iconStyle={{ background: '#FF69CD', color: '#fff' }}
                        icon={<FaCode />}
                        contentStyle={{ background: '#F574B520', }}
                        contentArrowStyle={{ borderRight: '7px solid #F574B520' }}
                    >
                        <h3 className=" vertical-timeline-element-title font-SubTitleText text-pinkColor text-2xl">
                            Complete Web Development Course With Jhankar Mahbub
                        </h3>

                        <h4 className=" vertical-timeline-element-subtitle font-normal text-skyBlueColor text-xs">
                            Programming Hero
                        </h4>
                        <h4 className=' vertical-timeline-element-subtitle'>
                            Dhaka, Bangladesh
                        </h4>
                        <h6 className=' vertical-timeline-element-subtitle font-normal text-xs pt-2'>
                            In 2023, I successfully completed the Complete Web Development Course with Jhankar Mahbub through Programming Hero. This comprehensive program equipped me with the skills needed to thrive as a front-end developer.
                        </h6>
                    </VerticalTimelineElement>

                </VerticalTimeline>

            </div>
        </div>
    );
};

export default Education;