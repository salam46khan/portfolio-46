import React, { useEffect, useState } from 'react';
import { FiMoon } from 'react-icons/fi';
import { ImSun } from 'react-icons/im';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../public/logoo.png'
import { HiMiniBars3 } from 'react-icons/hi2';

const Header = () => {
    const [mood, setMood] = useState('light')

    // for dark mood -----------
    const html = document.documentElement;
    const handleMood = () => {
        if (mood == 'light') {
            html.classList.remove('light')
            html.classList.add('dark')
            setMood('dark')
            localStorage.setItem('mood', 'dark')
        } else {
            html.classList.remove('dark')
            html.classList.add('light')
            setMood('light')
            localStorage.setItem('mood', 'light')
        }
    }
    useEffect(() => {
        const currentMood = localStorage.getItem('mood') || 'light';
        setMood(currentMood)
        html.classList.add(currentMood)
    }, [html])

    // nav links here ----------
    const navItem = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About Me</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Me</NavLink></li>
        
    </>
    return (
        <div className='fixed w-full top-2 left-0 z-50' id='nav'>
            <div className="container">
                <div className="navbar nav-style rounded-full bg-darkColor backdrop-blur-sm dark:bg-lightColor dark:bg-opacity-35 bg-opacity-15 shadow-[#0005] shadow-md">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <div className=" bg-pink-400 w-10 h-10 flex justify-center items-center text-xl rounded-full relative -mx-3">
                                <HiMiniBars3 />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 min-w-[200px] bg-darkColor dark:bg-lightColor dark:bg-opacity-35 bg-opacity-15 backdrop-blur-lg dark:text-lightColor">
                                {navItem}
                            </ul>
                        </div>
                        <div className="logo h-12">
                            <Link to={'/'}>
                                <img className='h-full' src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal dark:text-lightColor">
                            {navItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button onClick={handleMood} className=" bg-pink-400 w-10 h-10 text-xl flex justify-center items-center rounded-full m-1">
                            {
                                mood == "light" ? <FiMoon></FiMoon> : <ImSun></ImSun>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;