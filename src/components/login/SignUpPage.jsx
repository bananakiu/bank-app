import bgImage from './../../assets/bg-02.jpg'

const SignUpPage = ({
    setIsLoginOpen,
    setIsSignupOpen,
    setIsDashboardOpen,
    setIsAccountsOpen,
    setIsRecordsOpen,
    loggedIn,
    setLoggedIn,
}) => {
    // handlers
    const handleSignupSubmit = (e) => {
        e.preventDefault();

        // show accounts page
        setIsLoginOpen(false);
        setIsAccountsOpen(true);

        // set state loggedIn
        setLoggedIn(true);
    }

    const handleLoginClick = (e) => {
        e.preventDefault();

        // show sign up page
        setIsSignupOpen(false);
        setIsLoginOpen(true);

    }


    // render
    return <>
    <div className={`
    flex justify-center items-center
    pt-10 pb-10
    `} style={{
        background: `url(${bgImage}) no-repeat center center fixed`,
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover",
    }}>        
        <form onSubmit={handleSignupSubmit} className="
        bg-white shadow-md rounded px-8 pt-6 pb-8
        w-96
        ">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name-signup">
                    First Name
                </label>
                <input id="first-name-signup" type="text" placeholder="First Name" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name-signup">
                    Last Name
                </label>
                <input id="last-name-signup" type="text" placeholder="Last Name" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-signup">
                    Email
                </label>
                <input id="email-signup" type="email" placeholder="Email" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username-signup">
                    Username
                </label>
                <input id="username-signup" type="text" placeholder="Username" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-signup">
                    Password
                </label>
                <input id="password-signup" type="password" placeholder="*********" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password-signup">
                    Confirm Password
                </label>
                <input id="confirm-password-signup" type="password" placeholder="*********" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>

            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200">
                    Register
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={handleLoginClick}>
                    Already have an account?
                </a>
            </div>
        </form>
    </div>
    </>
};

export default SignUpPage;

