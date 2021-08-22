const ProfileTab = ({
    setIsProfileTabOpen,
    setIsDashboardOpen,
    setIsAccountsOpen,
    setIsRecordsOpen,
    setIsLoginOpen,
    setIsSignupOpen,
    setLoggedIn,
}) => {
    // handlers/functions
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
        setIsProfileTabOpen(false);
    }

    // render
    return <div className="
    z-10 absolute right-0
    w-40
    rounded-md border-2 shadow-md
    bg-white
    
    " style={{
        top: "3.75rem",
    }}>
        <div className="
        hover:bg-gray-100
        w-full py-4 px-6
        text-lg text-center
        transition duration-200 cursor-pointer
        " onClick={handleLogOutClick}>
            Logout
        </div>
    </div>
};

export default ProfileTab;