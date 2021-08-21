import bgImage from './../../assets/bg-02.jpg'

const LoginPage = ({
    // setIsSignUpOpen,
    setIsLoginOpen,
    setIsDashboardOpen,
    setIsAccountsOpen,
    setIsRecordsOpen,
    loggedIn,
    setLoggedIn,
}) => {
    // handlers
    const handleLogInSubmit = (e) => {
        e.preventDefault();

        // TODO: add validation

        // show accounts page
        setIsLoginOpen(false);
        setIsAccountsOpen(true);

        // set state loggedIn
        setLoggedIn(true);
    }


    // render
    return <>
    <div className={`
    flex justify-center items-center
    border-2
    `} style={{
        height: "calc(100vh - 3.5rem)",
        background: `url(${bgImage}) no-repeat center center fixed`,
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover",
    }}>        
        <form onSubmit={handleLogInSubmit} className="
        bg-white shadow-md rounded px-8 pt-6 pb-8
        w-96
        ">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input id="username" type="text" placeholder="Username" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input id="password" type="password" placeholder="*********" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Don't have an account?
                </a>
            </div>
        </form>
    </div>
    </>
};

export default LoginPage;

