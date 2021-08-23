import { useState } from 'react';
import bgImage from './../../assets/bg-02.jpg'
import ErrorDisplay from '../common/ErrorDisplay';

const LoginPage = ({
    setIsLoginOpen,
    setIsSignupOpen,
    setIsDashboardOpen,
    setIsAccountsOpen,
    setIsRecordsOpen,
    adminAccounts,
    setAdminAccounts,
    loggedIn,
    setLoggedIn,
    loggedInUser,
    setLoggedInUser,
}) => {
    // form states
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [errors, setErrors] = useState([]);
    const [isErrorDisplayOpen, setIsErrorDisplayOpen] = useState(false);

    // handlers
    const handleLogInSubmit = (e) => {
        e.preventDefault();
        setIsErrorDisplayOpen(false);
        let listOfErrors=[];

        // validation
        let queriedAccount = adminAccounts.filter(account => account.username.toLowerCase() === usernameLogin.toLowerCase()); // not case sensitive

        if (queriedAccount.length===0) {
            listOfErrors.push("User does not exist.");
        } else if (
            (queriedAccount.length===1) &&
            (queriedAccount[0].password !== passwordLogin)
        ) {
            listOfErrors.push("Incorrect password");
        }
        setErrors(listOfErrors);

        // login
        if (listOfErrors.length===0) {
            // show accounts page
            setIsLoginOpen(false);
            setIsAccountsOpen(true);

            // set state loggedIn
            setLoggedIn(true);
            setLoggedInUser(usernameLogin);

            // empty forms
            setUsernameLogin("");
            setPasswordLogin("");
        } else {
            // display errors
            setIsErrorDisplayOpen(true);
        }

        // TODO: add login successful message
    }

    const handleSignUpClick = (e) => {
        e.preventDefault();

        // show sign up page
        setIsLoginOpen(false);
        setIsSignupOpen(true);
    }

    const handleUsernameLoginChange = (e) => {
        setUsernameLogin(e.target.value);
    }

    const handlePasswordLoginChange = (e) => {
        setPasswordLogin(e.target.value);
    }


    // render
    return <>
    <div className={`
    flex justify-center items-center
    pt-10 pb-10
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
            {isErrorDisplayOpen &&
                <ErrorDisplay errors={errors} />
            }

            <div className="mb-4 mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username-login">
                    Username
                </label>
                <input value={usernameLogin} onChange={handleUsernameLoginChange} id="username-login" type="text" placeholder="Username" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-login">
                    Password
                </label>
                <input value={passwordLogin} onChange={handlePasswordLoginChange} id="password-login" type="password" placeholder="*********" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>

            <div className="flex items-center justify-between mt-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200">
                    Sign In
                </button>
                <div className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer" onClick={handleSignUpClick}>
                    Don't have an account?
                </div>
            </div>
        </form>
    </div>
    </>
};

export default LoginPage;

