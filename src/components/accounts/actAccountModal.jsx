import React from 'react';
import './../../App.css';

import DepositActionPage from '../records/depositActionPage';
import WithdrawActionPage from '../records/withdrawActionPage';
import TransferActionPage from '../records/transferActionPage';

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

    // form states
    action,
    setAction,
    actAccountName,
    setActAccountName,
    actDepositAmount,
    setActDepositAmount,

    // modal open
    isActAccountModalOpen,
    setIsActAccountModalOpen,
    
}) => {
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
    const handleActAccountSubmit = (event) => {
        // prevent refresh
        event.preventDefault();
        
        // close modal
        setIsActAccountModalOpen(false);
    }

    // render
    return <>
        <section className={`
        h-screen w-full fixed z-10 inset-0 overflow-y-auto
        flex justify-center items-center text-center
        bg-black bg-opacity-50
        ${isActAccountModalOpen ? "" : "hidden"}
        `}>
            <form onSubmit={handleActAccountSubmit} className="
            py-4 px-6 mt-8 mb-4 mx-8
            border-gray-150 border-2 rounded-lg
            transition duration-200
            flex flex-col
            bg-white
            w-96 lg:w-5/12
            ">
                {/* select action type */}
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
                {/* showing specific components depending on chosen action type */}
                <DepositActionPage 
                    accounts={accounts}
                    setAccounts={setAccounts}

                    action={action}
                    setAction={setAction}
                    actAccountName={actAccountName}
                    setActAccountName={setActAccountName}
                    actDepositAmount={actDepositAmount}
                    setActDepositAmount={setActDepositAmount}
                />
                <WithdrawActionPage
                    accounts={accounts}
                    setAccounts={setAccounts}

                    action={action}
                    setAction={setAction}
                    actAccountName={actAccountName}
                    setActAccountName={setActAccountName}
                />
                <TransferActionPage
                    accounts={accounts}
                    setAccounts={setAccounts}

                    action={action}
                    setAction={setAction}
                    actAccountName={actAccountName}
                    setActAccountName={setActAccountName}
                />
            </form>
        </section>
    </>
} 

export default ActAccountModal;