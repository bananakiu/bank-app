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
                    min-w-min
                    "/>
                </div>
                <div id="nav-items-left" className="
                flex
                text-center
                h-full
                ">
                    <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Dashboard</a>
                    <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Accounts</a>
                    <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6">Records</a>
                </div>
            </div>
            <div id="navbar-right" className="flex items-center justify-center h-full">
                <div id="nav-items-right">
                    <a className="block text-lg hover:bg-blue-600 py-4 px-6">Logout</a>
                </div>
                <div id="account">
                    <i className="block fas fa-user-circle text-3xl hover:bg-blue-600 py-3 px-6"></i>
                </div>
            </div>
            
                
        </nav>
    </>
};

export default NavBar;

// TODO: make responsive (hamburger menu)