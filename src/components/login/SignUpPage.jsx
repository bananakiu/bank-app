import bgImage from './../../assets/bg-02.jpg'
import { useState } from 'react';
import { addAdminAccount } from '../../utils/login';
import ErrorDisplay from '../common/ErrorDisplay';

const SignUpPage = ({
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
    // form control states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isErrorDisplayOpen, setIsErrorDisplayOpen] = useState(false);

    // handlers
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        setIsErrorDisplayOpen(false);

        // validation
        let listOfErrors = handleValidation();
        setErrors(listOfErrors);

        // update
        if (listOfErrors.length===0) {
            // add new admin account
            setAdminAccounts(addAdminAccount(adminAccounts, firstName, lastName, email, username, password));

            // empty forms
            setFirstName("");
            setLastName("");
            setEmail("");
            setUsername("");
            setPassword("");
            setConfirmPassword("");

            // show accounts page
            setIsSignupOpen(false);
            setIsAccountsOpen(true);

            // set state loggedIn
            setLoggedIn(true);
            setLoggedInUser(username);
        } else {
            // display errors
            setIsErrorDisplayOpen(true);
        }
    }

    const handleValidation =  () => {
        let listOfErrors = [];

        // check if email already exists
        if (adminAccounts.filter(account => account.email.toLowerCase() === email.toLowerCase()).length !== 0) {
            listOfErrors.push("Email was already registered previously. Please register with a different one.");
        }
        // check if username already exists
        if (adminAccounts.filter(account => account.username.toLowerCase() === username.toLowerCase()).length !== 0) {
            listOfErrors.push("Username was already registered previously. Please register with a different one.");
        }
        // password and confirmPassword should match
        if (password !== confirmPassword) {
            listOfErrors.push("Password and confirm password do not match.");
        }

        return listOfErrors;
    }

    const handleLoginClick = (e) => {
        e.preventDefault();

        // show sign up page
        setIsSignupOpen(false);
        setIsLoginOpen(true);
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
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
                <input value={firstName} onChange={handleFirstNameChange} required id="first-name-signup" type="text" placeholder="First Name" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name-signup">
                    Last Name
                </label>
                <input value={lastName} onChange={handleLastNameChange} required id="last-name-signup" type="text" placeholder="Last Name" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-signup">
                    Email
                </label>
                <input value={email} onChange={handleEmailChange} required id="email-signup" type="email" placeholder="Email" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username-signup">
                    Username
                </label>
                <input value={username} onChange={handleUsernameChange} required id="username-signup" type="text" placeholder="Username" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-signup">
                    Password
                </label>
                <input value={password} onChange={handlePasswordChange} required id="password-signup" type="password" placeholder="*********" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password-signup">
                    Confirm Password
                </label>
                <input value={confirmPassword} onChange={handleConfirmPasswordChange} required id="confirm-password-signup" type="password" placeholder="*********" className="
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                "/>
            </div>

            {isErrorDisplayOpen &&
                <ErrorDisplay errors={errors} />
            }

            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200">
                    Register
                </button>
                <div className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer" onClick={handleLoginClick}>
                    Already have an account?
                </div>
            </div>
        </form>
    </div>
    </>
};

export default SignUpPage;