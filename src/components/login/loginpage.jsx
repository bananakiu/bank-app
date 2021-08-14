const LoginPage = ({isLoginOpen}) => {
    return <>
    <div className={`
    flex justify-center items-center
    ${isLoginOpen ? "" : "hidden"}
    `}>
        {/* Login Menu */}
        <form action="" className="
        bg-white shadow-md rounded px-8 pt-6 pb-8
        w-72 md:w-80
        ">
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>


        </form>
    </div>
    </>
};

export default LoginPage;

