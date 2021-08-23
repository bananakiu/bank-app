import React, { useState } from 'react';

import DepositActionPage from './DepositActionPage';
import WithdrawActionPage from './WithdrawActionPage';
import TransferActionPage from './TransferActionPage';

import { deposit, withdraw, transfer } from '../../utils/accounts';

// TODO: x-button to close modal
// TODO: click out to close modal
// TODO: esc key to close modal
// TODO: understand what fixed [z-10 inset-0 overflow-y-auto] classes do in Tailwind CSS

const ActAccountModal = ({
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
    action,
    setAction,
    actAccountName,
    setActAccountName,
    actTransferToAccountName,
    setActTransferToAccountName,
    actDepositAmount,
    setActDepositAmount,
    actWithdrawAmount,
    setActWithdrawAmount,
    actTransferAmount,
    setActTransferAmount,

    // modal open
    isActAccountModalOpen,
    setIsActAccountModalOpen,
    
}) => {
    // states
    const [errors, setErrors] = useState([]);
    const [isErrorDisplayOpen, setIsErrorDisplayOpen] = useState(false);
    const [errorAction, setErrorAction] = useState("");

    // functions for the form
    const handleDepositTabOnClick = () => {
        setAction("deposit");
    }

    const handleWithdrawTabOnClick = () => {
        setAction("withdraw");
    }

    const handleTransferTabOnClick = () => {
        setAction("transfer");
    }

    const handleActAccountNameChange = (e) => {
        setActAccountName(e.target.value);
    }

    const handleEscDown = (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    const closeModal = () => {
        // reset inputs/states
        setActAccountName("");
        setActTransferToAccountName("");
        setActDepositAmount(0);
        setActWithdrawAmount(0);
        setActTransferAmount(0);
        setAction("deposit");
        setErrorAction("");
        
        // close modal
        setIsActAccountModalOpen(false);
    }

    const handleActAccountSubmit = (e) => {
        e.preventDefault();
        setIsErrorDisplayOpen(false);

        // validation
        let listOfErrors = handleValidation();
        setErrors(listOfErrors);

        if (listOfErrors.length===0) {
            // actions
            if (action==="deposit") {
                let [newAccounts, newRecords, newRecordsIdGenerator] = deposit(accounts, actAccountName, actDepositAmount, records, recordsIdGenerator);
                setAccounts(newAccounts);
                setRecords(newRecords);
                setRecordsIdGenerator(newRecordsIdGenerator);
            } else if (action==="withdraw") {
                let [newAccounts, newRecords, newRecordsIdGenerator] = withdraw(accounts, actAccountName, actWithdrawAmount, records, recordsIdGenerator);
                setAccounts(newAccounts);
                setRecords(newRecords);
                setRecordsIdGenerator(newRecordsIdGenerator);
            } else if (action==="transfer") {
                let [newAccounts, newRecords, newRecordsIdGenerator] = transfer(accounts, actAccountName, actTransferToAccountName, actTransferAmount, records, recordsIdGenerator);
                setAccounts(newAccounts);
                setRecords(newRecords);
                setRecordsIdGenerator(newRecordsIdGenerator);
            }
            
            // close modal
            closeModal();
        } else {
            // display errors
            setIsErrorDisplayOpen(true);
            setErrorAction(action);
        }
    }

    const handleValidation =  () => {
        let listOfErrors = [];

        // check if email belongs to an account that exists
        if (accounts.filter(account => account.email.toLowerCase() === actAccountName.toLowerCase()).length === 0) {
            listOfErrors.push("Account does not exist. Please pick an account that exists.");
        } else {
            // query account
            let checkAccount = accounts.filter(account => account.email.toLowerCase() !== actAccountName.toLowerCase())[0]; 

            // check transactions
            if (action === "deposit") {
                if (actDepositAmount < 0) {
                    listOfErrors.push("Deposit amount cannot be negative.");
                }
            } else if (action === "withdraw") {
                if (actWithdrawAmount < 0) {
                    listOfErrors.push("Withdraw amount cannot be negative.");
                }
                if (actWithdrawAmount > checkAccount.balance) {
                    listOfErrors.push("Cannot withdraw more than account's current balance.")
                }
            } else if (action === "transfer") {
                if (accounts.filter(account => account.email.toLowerCase() === actTransferToAccountName.toLowerCase()).length === 0) {
                    listOfErrors.push("Account to transfer to does not exist. Please pick an account that exists.");
                }
                if (actTransferAmount < 0) {
                    listOfErrors.push("Transfer amount cannot be negative.");
                }
                if (actTransferAmount > checkAccount.balance) {
                    listOfErrors.push("Cannot transfer more than account's current balance.")
                }
            }
        }

        return listOfErrors;
    }


    // render
    return <>
        <section onKeyDown={handleEscDown} tabIndex={0} className={`
        h-screen w-full fixed z-20 inset-0 overflow-y-auto
        flex justify-center items-center text-center
        bg-black bg-opacity-50
        `}>
            <form onSubmit={handleActAccountSubmit} className="
            py-4 px-6 mt-8 mb-4 mx-8
            border-gray-150 border-2 rounded-lg
            transition duration-200
            bg-white
            w-96 lg:w-5/12
            ">
                <h1 className="text-2xl font-bold mb-4">Add Record</h1>
                <ul className="
                flex flex-row justify-stretch items-stretch
                rounded-lg border-4 border-gray-300
                ">
                    <li onClick={handleDepositTabOnClick} className={`
                    w-full cursor-pointer
                    ${action==="deposit" ? "bg-gray-300 border-2 border-gray-300 hover:bg-gray-300" : "hover:bg-gray-100"}
                    `}>
                        <i className="fas fa-plus text-xs"></i> <span className="font-semibold">Deposit</span>
                    </li>
                    <li onClick={handleWithdrawTabOnClick} className={`
                    w-full cursor-pointer
                    border-l-4 border-gray-300 hover:bg-gray-100
                    ${action==="withdraw" ? "bg-gray-300 border-2 border-gray-300 hover:bg-gray-300" : "hover:bg-gray-100"}
                    `}>
                        <i className="fas fa-minus text-xs"></i> <span className="font-semibold">Withdraw</span>
                    </li>
                    <li onClick={handleTransferTabOnClick} className={`
                    w-full cursor-pointer
                    border-l-4 border-gray-300 hover:bg-gray-100
                    ${action==="transfer" ? "bg-gray-300 border-2 border-gray-300 hover:bg-gray-300" : "hover:bg-gray-100"}
                    `}>
                        <i className="fas fa-exchange-alt text-xs"></i> <span className="font-semibold">Transfer</span>
                    </li>
                </ul>

                {/* FORM */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mb-4">
                        {/* TODO: remove repetitive datalist dropdown icon */}
                        <label htmlFor="action-account">Account</label>
                        <input autoFocus
                            value={actAccountName}
                            onChange={handleActAccountNameChange}
                            list="action-account-list"
                            name="action-account"
                            id="action-account"
                            required
                            className="
                            form-select truncate rounded-lg
                            w-72
                        "/>
                        <datalist id="action-account-list">
                            {
                                accounts.map((account, index) => {
                                    return <option key={index} label={`${account.name} (${account.email})`} value={account.email}/>
                                })
                            }
                        </datalist>
                    </div>
                    {/* showing specific components depending on chosen action type */}
                    {action==="deposit" &&
                        <DepositActionPage 
                        accounts={accounts}
                        setAccounts={setAccounts}
                        records={records}
                        setRecords={setRecords}
                        recordsIdGenerator={recordsIdGenerator}
                        setRecordsIdGenerator={setRecordsIdGenerator}

                        action={action}
                        setAction={setAction}
                        actAccountName={actAccountName}
                        setActAccountName={setActAccountName}
                        actDepositAmount={actDepositAmount}
                        setActDepositAmount={setActDepositAmount}

                        errors={errors}
                        isErrorDisplayOpen={isErrorDisplayOpen}
                        errorAction={errorAction}
                        />
                    }
                    
                    {action==="withdraw" &&
                        <WithdrawActionPage
                        accounts={accounts}
                        setAccounts={setAccounts}
                        records={records}
                        setRecords={setRecords}
                        recordsIdGenerator={recordsIdGenerator}
                        setRecordsIdGenerator={setRecordsIdGenerator}

                        action={action}
                        setAction={setAction}
                        actAccountName={actAccountName}
                        setActAccountName={setActAccountName}
                        actWithdrawAmount={actWithdrawAmount}
                        setActWithdrawAmount={setActWithdrawAmount}

                        errors={errors}
                        isErrorDisplayOpen={isErrorDisplayOpen}
                        errorAction={errorAction}
                        />
                    }

                    {action==="transfer" && 
                        <TransferActionPage
                        accounts={accounts}
                        setAccounts={setAccounts}
                        records={records}
                        setRecords={setRecords}
                        recordsIdGenerator={recordsIdGenerator}
                        setRecordsIdGenerator={setRecordsIdGenerator}

                        action={action}
                        setAction={setAction}
                        actAccountName={actAccountName}
                        setActAccountName={setActAccountName}
                        actTransferToAccountName={actTransferToAccountName}
                        setActTransferToAccountName={setActTransferToAccountName}
                        actTransferAmount={actTransferAmount}
                        setActTransferAmount={setActTransferAmount}

                        errors={errors}
                        isErrorDisplayOpen={isErrorDisplayOpen}
                        errorAction={errorAction}
                        />
                    }
                    
                </div>
            </form>
        </section>
    </>
} 

export default ActAccountModal;