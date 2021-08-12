import React from 'react';
import bannerLogo from './../../assets/banner-logo-white.png';

const NavBar = () => {
    return <>
        <nav className="
        flex justify-between items-center
        w-full px-3 py-0 
        text-white bg-blue-500
        ">
            <div id="navbar-left" className="flex justify-center items-center">
                <div id="logo">
                    <img src={bannerLogo} alt="NextBank logo" className="
                    h-10 my-0 mr-4
                    "/>
                </div>
                <div id="nav-items" className="
                flex
                text-center
                ">
                    <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Dashboard</a>
                    <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Accounts</a>
                    <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Records</a>
                </div>
            </div>
            <div id="navbar-right">
                <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Logout</a>
                <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Profile (settings,profile, acc image)</a>
            </div>
            
                
        </nav>
    </>
};

export default NavBar;

