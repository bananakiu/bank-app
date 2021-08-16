import { addAccount } from './../../utils/accounts';
import Button from './../common/button';

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
    // functions for the form
    const handleNewAccountNameChange = (event) => {
        setNewAccountName(event.target.value);
    }

    const handleNewEmailChange = (event) => {
        setNewEmail(event.target.value);
    }

    const handleNewAccountTypeChange = (event) => {
        setNewAccountType(event.target.value);
    }

    const handleNewInitialAmountChange = (event) => {
        setNewInitialAmount(event.target.value);
    }

    const handleNewAccountSubmit = (event) => {
        // prevent refresh
        event.preventDefault();

        // add accounts
        let [newAccounts, newIdGenerator] = addAccount(accounts, idGenerator, newAccountName, newEmail, newInitialAmount);
        setAccounts(newAccounts);
        setIdGenerator(newIdGenerator);

        // reset values
        setNewAccountName("");
        setNewEmail("");
        setNewAccountType("");
        setNewInitialAmount("");

        // close modal
        setIsAddAccountModalOpen(false)
    }

    // render
    return <>
        <section className={`
        h-screen w-full fixed z-10 inset-0 overflow-y-auto
        flex justify-center items-center text-center
        bg-black bg-opacity-50
        ${isAddAccountModalOpen ? "" : "hidden"}
        `}>
            <form onSubmit={handleNewAccountSubmit} className="
            py-4 px-6 mt-8 mb-4 mx-8
            border-gray-150 border-2 rounded-lg
            transition duration-200
            flex flex-col justify-center
            bg-white
            w-96
            ">
                <div className="flex flex-col mb-4">
                    <label>Account Name</label>
                    <input type="text" value={newAccountName} onChange={handleNewAccountNameChange} required className="form-input rounded-lg"/>
                </div>
                <div className="flex flex-col mb-4">
                    <label>Email</label>
                    <input type="email" value={newEmail} onChange={handleNewEmailChange} required className="form-input rounded-lg"/>
                </div>
                <div className="flex flex-col mb-4">
                    <label>Account Type</label>
                    <select value={newAccountType} onChange={handleNewAccountTypeChange} required className="form-select rounded-lg">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select> 
                </div>
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