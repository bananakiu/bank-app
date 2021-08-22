import bgImage from './../../assets/bg-02.jpg'
import { useState } from 'react';
import { addAdminAccount } from '../../utils/login';

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
        setErrors([]); // reset errors
        let errorsCopy = [];
        
            // check if email already exists
        if (adminAccounts.filter(account => account.email.toLowerCase() === email.toLowerCase()).length !== 0) {
            errorsCopy.push("Email was already registered previously. Please register with a different one.");
            setErrors(errorsCopy);
        }
            // check if username already exists
        if (adminAccounts.filter(account => account.username.toLowerCase() === username.toLowerCase()).length !== 0) {
            errorsCopy.push("Username was already registered previously. Please register with a different one.");
            setErrors(errorsCopy);
        }
            // password and confirmPassword should match
        if (password !== confirmPassword) {
            errorsCopy.push("Password and confirm password do not match.");
            setErrors(errorsCopy);
        }

        // update
        if (errors.length===0) {
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
        } else {
            // display errors
            console.log(errors);
            setIsErrorDisplayOpen(true);
        }
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
                <div id="errors-display" className="border-2 rounded-md border-red-600 py-2 px-3 text-red-600 ">
                    <h1 className="text-lg font-bold">Errors</h1>
                    <ol className="text-sm text-justify">
                        {errors.map((error, index) =>
                            <li key={index} className="pt-2">{error}</li>
                        )}
                    </ol>
                </div>
            }

            <div className="flex items-center justify-between mt-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200">
                    Register
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer" onClick={handleLoginClick}>
                    Already have an account?
                </a>
            </div>
        </form>
    </div>
    </>
};

export default SignUpPage;