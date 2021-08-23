import { useState } from 'react';
import { addAccount } from '../../utils/accounts';
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';


// TODO: x-button to close modal
// TODO: click out to close modal
// TODO: esc key to close modal
// TODO: understand what fixed [z-10 inset-0 overflow-y-auto] classes do in Tailwind CSS

const AddAccountModal = ({
    // data states
    accounts,
    setAccounts,
    idGenerator,
    setIdGenerator,
    records,
    setRecords,
    recordsIdGenerator,
    setRecordsIdGenerator,

    // form states
    newAccountName,
    setNewAccountName,
    newEmail,
    setNewEmail,
    newAccountType,
    setNewAccountType,
    newInitialAmount,
    setNewInitialAmount,

    // modal open
    isAddAccountModalOpen,
    setIsAddAccountModalOpen,
}) => {
    // states
    const [errors, setErrors] = useState([]);
    const [isErrorDisplayOpen, setIsErrorDisplayOpen] = useState(false);

    // functions for the form
    const handleNewAccountNameChange = (e) => {
        setNewAccountName(e.target.value);
    }

    const handleNewEmailChange = (e) => {
        setNewEmail(e.target.value);
    }

    // const handleNewAccountTypeChange = (e) => {
    //     setNewAccountType(e.target.value);
    // }

    const handleNewInitialAmountChange = (e) => {
        setNewInitialAmount(e.target.value);
    }

    const handleEscDown = (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    const handleClickFocus = (e) => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    }

    const closeModal = () => {
        // reset values
        setNewAccountName("");
        setNewEmail("");
        setNewAccountType("");
        setNewInitialAmount(0);

        // close modal
        setIsAddAccountModalOpen(false);
        
    }

    const handleNewAccountSubmit = (e) => {
        // prevent refresh
        e.preventDefault();
        setIsErrorDisplayOpen(false);

        // validation
        let listOfErrors = handleValidation();
        setErrors(listOfErrors);

        if (listOfErrors.length===0) {
            // add accounts
            let [newAccounts, newIdGenerator, newRecords, newRecordsIdGenerator] = addAccount(accounts, idGenerator, newAccountName, newEmail, newInitialAmount, records, recordsIdGenerator);
            setAccounts(newAccounts);
            setIdGenerator(newIdGenerator);
            setRecords(newRecords);
            setRecordsIdGenerator(newRecordsIdGenerator);

            // close modal
            closeModal();

        } else {
            // display errors
            setIsErrorDisplayOpen(true);
        }
    }

    const handleValidation =  () => {
        let listOfErrors = [];
        // check if name starts with number
        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(newAccountName[0])) {
            listOfErrors.push("Account name cannot start with number.")
        }

        // check if email already exists
        if (accounts.filter(account => account.email.toLowerCase() === newEmail.toLowerCase()).length !== 0) {
            listOfErrors.push("Email already associated with another account.");
        }

        // check if intial balance is negative
        if (newInitialAmount < 0) {
            listOfErrors.push("Initial balance cannot be negative.");
        }

        return listOfErrors;
    }

    // render
    return <>
        <section onFocus={handleClickFocus} tabIndex="-1" onKeyDown={handleEscDown} className={`
        h-screen w-full fixed z-20 inset-0 overflow-y-auto
        flex justify-center items-center text-center
        bg-black bg-opacity-50
        `}>
            <form onSubmit={handleNewAccountSubmit} tabIndex="-1" className="
            py-4 px-6 mt-8 mb-4 mx-8
            border-gray-150 border-2 rounded-lg
            transition duration-200
            flex flex-col justify-center
            bg-white
            w-96
            ">
                <h1 className="text-2xl font-bold mb-4">Add Account</h1>
                {isErrorDisplayOpen &&
                    <ErrorDisplay errors={errors} />
                }
                <div className="flex flex-col mb-4">
                    <label>Account Name</label>
                    <input autoFocus type="text" value={newAccountName} onChange={handleNewAccountNameChange} required className="form-input rounded-lg"/>
                </div>
                <div className="flex flex-col mb-4">
                    <label>Email</label>
                    <input type="email" value={newEmail} onChange={handleNewEmailChange} required className="form-input rounded-lg"/>
                </div>
                {/* <div className="flex flex-col mb-4">
                    <label>Account Type</label>
                    <select value={newAccountType} onChange={handleNewAccountTypeChange} required className="form-select rounded-lg">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select> 
                </div> */}
                <div className="flex flex-col mb-6">
                    <label>Starting Amount</label>
                    <input type="number" value={newInitialAmount} required onChange={handleNewInitialAmountChange} className="form-input rounded-lg"/>
                </div>

                <div>
                    <Button
                        content={<>
                            <i className="fas fa-plus text-xs"></i> <span className="text-sm">Create</span>
                        </>}
                        color="bg-green-500"
                        hoverColor="hover:bg-green-600"
                        otherStyling="w-3/5"
                    />
                </div>
            </form>
        </section>
    </>
} 

export default AddAccountModal;