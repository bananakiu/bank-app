import { useState } from 'react';
import bannerLogo from './../../assets/banner-logo-white.png';
import ProfileTab from './ProfileTab';

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
    isLandingOpen,
    setIsLandingOpen,
    loggedIn,
    setLoggedIn,
    loggedInUser,
    setLoggedInUser,
    adminAccounts
}) => {
    // states
    const [isProfileTabOpen, setIsProfileTabOpen] = useState(false);

    // handlers
    const switchPageTo = (page) => {
        return () => {
            setIsDashboardOpen(page==="dashboard" ? true : false);
            setIsAccountsOpen(page==="accounts" ? true : false);
            setIsRecordsOpen(page==="records" ? true : false);
            setIsLoginOpen(page==="login" ? true : false);
            setIsSignupOpen(page==="signup" ? true : false);
            setIsLandingOpen(page==="landing" ? true : false);
        }
    }

    const handleProfileClick = () => {
        setIsProfileTabOpen(!isProfileTabOpen);
        console.log(isProfileTabOpen);
    }

    return <>
        <nav className="
        fixed z-10
        flex justify-between items-center
        w-full py-0 
        text-white bg-blue-500
        ">
            <div id="navbar-left" className="flex justify-center items-center">
                <div id="logo" className="pl-3 cursor-pointer" onClick={switchPageTo(`${loggedIn === true ? "accounts" : "landing" }`)}> {/* change default home pages */}
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
                        <div className="flex-1 text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer select-none" onClick={switchPageTo("landing")}>Home</div>
                    </>}
                    {loggedIn && <>
                        {/* <a className="flex-1 text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer" onClick={switchPageTo("dashboard")}>Dashboard</a> */}
                        <div className="flex-1 text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer select-none" onClick={switchPageTo("accounts")}>Accounts</div>
                        <div className="flex-1 text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer select-none" onClick={switchPageTo("records")}>Records</div>
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
                        <div className="block text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer select-none" onClick={switchPageTo("login")}>Log In</div>
                        <div className="block text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer select-none" onClick={switchPageTo("signup")}>Sign Up</div>
                    </div>
                </>}
                {loggedIn && <>
                    <div id="nav-items-right" className="
                    flex
                    text-center
                    h-full
                    ">
                        {/* <a className="block text-lg hover:bg-blue-600 py-4 px-6 transition duration-200 cursor-pointer" onClick={handleLogOutClick}>Logout</a> */}
                        <div onClick={handleProfileClick} 
                        className="
                        flex justify-center items-center
                        hover:bg-blue-600
                        py-3 px-6
                        transition duration-200 cursor-pointer
                        ">
                            <i className="fas fa-user-circle block text-3xl" onClick={handleProfileClick}></i>
                            <div className="text-left pl-2">
                                <h1 className="text-sm select-none">
                                    <span>{adminAccounts.filter(account => account.username.toLowerCase()===loggedInUser.toLowerCase())[0].firstName} </span>
                                    <span>{adminAccounts.filter(account => account.username.toLowerCase()===loggedInUser.toLowerCase())[0].lastName}</span>
                                </h1>
                                <h2 className="text-xs select-none">
                                    {adminAccounts.filter(account => account.username.toLowerCase()===loggedInUser.toLowerCase())[0].email}
                                </h2>
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </nav>
        {/* navbar profile tab */}
        {
            isProfileTabOpen && <ProfileTab
                setIsProfileTabOpen={setIsProfileTabOpen} 
                setIsDashboardOpen={setIsDashboardOpen}
                setIsAccountsOpen={setIsAccountsOpen}
                setIsRecordsOpen={setIsRecordsOpen}
                setIsLoginOpen={setIsLoginOpen}
                setIsSignupOpen={setIsSignupOpen}
                setIsLandingOpen={setIsLandingOpen}
                setLoggedIn={setLoggedIn}
                setLoggedInUser={setLoggedInUser}
            />
        }
    </>
};

export default NavBar;

// TODO: make responsive (hamburger menu)