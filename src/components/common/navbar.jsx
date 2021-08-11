import React from 'react';
import bannerLogo from './../../assets/banner-logo-white.png';

const NavBar = () => {
    return <>
        <nav class="
        flex justify-between items-center w-full px-3 py-0 text-white
        bg-blue-500
        ">
            <div id="logo">
                <img src={bannerLogo} alt="NextBank logo" class="
                h-10 my-0
                "/>
            </div>
            <div id="nav-items" class="
            flex
            text-center
            ">
                <a class="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Item 1</a>
                <a class="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Item 1</a>
                <a class="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Item 1</a>
            </div>
        </nav>
    </>
};

export default NavBar;

