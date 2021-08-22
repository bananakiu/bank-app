import bannerLogo from './../../assets/banner-logo-white.png';

const NavBar = ({
    isDashboardOpen,
    setIsDashboardOpen,
    isAccountsOpen,
    setIsAccountsOpen,
    isRecordsOpen,
    setIsRecordsOpen,
    isLoginOpen,
    setIsLoginOpen,
    isSignupOpen,
    setIsSignupOpen,
    loggedIn,
    setLoggedIn,
}) => {
    const switchPageTo = (page) => {
        return () => {
            setIsDashboardOpen(page==="dashboard" ? true : false);
            setIsAccountsOpen(page==="accounts" ? true : false);
            setIsRecordsOpen(page==="records" ? true : false);
            setIsLoginOpen(page==="login" ? true : false);
            setIsSignupOpen(page==="signup" ? true : false);
        }
    }

    const handleLogOutClick = () => {
        setLoggedIn(false);
        switchPageTo("login")();
    }

    return <>
        <nav className="
        fixed z-10
        flex justify-between items-center
        w-full py-0 
        text-white bg-blue-500
        ">
            <div id="navbar-left" className="flex justify-center items-center">
                <div id="logo" className="pl-3 cursor-pointer" onClick={switchPageTo(`${loggedIn === true ? "accounts" : "login" }`)}> {/* change default home pages */}
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
                    {!loggedIn && <>
                        <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer" onClick={switchPageTo("landing")}>Home</a>
                    </>}
                    {loggedIn && <>
                        {/* <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer" onClick={switchPageTo("dashboard")}>Dashboard</a> */}
                        <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer" onClick={switchPageTo("accounts")}>Accounts</a>
                        <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer" onClick={switchPageTo("records")}>Records</a>
                    </>}
                </div>
            </div>
            <div id="navbar-right" className="flex items-center justify-center">
                {!loggedIn && <>
                    <div id="nav-items-right" className="
                    flex
                    text-center
                    h-full
                    ">
                        <a className="block text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer" onClick={switchPageTo("login")}>Log In</a>
                        <a className="block text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer" onClick={switchPageTo("signup")}>Sign Up</a>
                    </div>
                </>}
                {loggedIn && <>
                    <div id="nav-items-right" className="
                    flex
                    text-center
                    h-full
                    ">
                        <a className="block text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer" onClick={handleLogOutClick}>Logout</a>
                        <i className="block fas fa-user-circle text-3xl hover:bg-blue-600 py-3 px-6 transition duration-200 cursor-pointer"></i>
                    </div>
                </>}
            </div>
            
                
        </nav>
    </>
};

export default NavBar;

// TODO: make responsive (hamburger menu)