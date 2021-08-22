import AccountRow from "./AccountRow";
import Button from "../common/Button";
import AddAccountModal from "./AddAccountModal";
import ActAccountModal from "../records/ActAccountModal";

const AccountsPage = ({
    accounts,
    setAccounts,
    idGenerator,
    setIdGenerator,
    records,
    setRecords,
    recordsIdGenerator,
    setRecordsIdGenerator,
    isAccountsOpen,

    // form states
    newAccountName,
    setNewAccountName,
    newEmail,
    setNewEmail,
    newAccountType,
    setNewAccountType,
    newInitialAmount,
    setNewInitialAmount,

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

    // modals
    isAddAccountModalOpen,
    setIsAddAccountModalOpen,
    isActAccountModalOpen,
    setIsActAccountModalOpen,

    // login
    loggedIn,

}) => {
    // functions
    const handleAddAccountOnClick = () => {
        setIsAddAccountModalOpen(true);
    }

    // render
    return <>
        {/* accounts page */}
        <div className={`
        flex justify-center items-start text-center my-4 mx-8 mt-8
        `}>
            <div id="accounts-utility-panel" className="
            w-80 mr-4 px-4 py-8
            bg-white
            border-gray-150 border-2 rounded-lg
            flex flex-col justify-start align-center
            ">
                <h1 className="
                mb-4 mx-4
                text-2xl font-bold
                ">Accounts</h1>
                <Button
                    content={<>
                        <i className="fas fa-plus text-xs"></i> <span className="text-sm">Add</span>
                    </>}
                    color="bg-green-500"
                    hoverColor="hover:bg-green-600"
                    otherStyling="mx-4"
                    onClickFunction={handleAddAccountOnClick}
                />
            </div>
            <div id="accounts-list" className="
            flex-auto
            bg-white
            ">
                {accounts.length===0 &&
                    <div className="text-gray-400 text-lg mt-16">
                        <div><i class="far fa-frown"></i></div>
                        <p> No accounts here yet.</p>
                    </div>
                }
                {accounts.map((account, index) => <AccountRow
                    key={index}
                    name={account.name}
                    email={account.email}
                    balance={account.balance}
                    // accountType={account.type}
                    
                    setIsActAccountModalOpen={setIsActAccountModalOpen}
                    setActAccountName={setActAccountName}
                />)}
            </div>
        </div>

        {/* add account modal */}
        {isAddAccountModalOpen &&
            <AddAccountModal
            accounts={accounts}
            setAccounts={setAccounts}
            idGenerator={idGenerator}
            setIdGenerator={setIdGenerator}
            records={records}
            setRecords={setRecords}
            recordsIdGenerator={recordsIdGenerator}
            setRecordsIdGenerator={setRecordsIdGenerator}

            newAccountName={newAccountName}
            setNewAccountName={setNewAccountName}
            newEmail={newEmail}
            setNewEmail={setNewEmail}
            newAccountType={newAccountType}
            setNewAccountType={setNewAccountType}
            newInitialAmount={newInitialAmount}
            setNewInitialAmount={setNewInitialAmount}

            isAddAccountModalOpen={isAddAccountModalOpen}
            setIsAddAccountModalOpen={setIsAddAccountModalOpen}
            />
        }
        

        {/* act account modal */}
        {isActAccountModalOpen && 
            <ActAccountModal
            accounts={accounts}
            setAccounts={setAccounts}
            idGenerator={idGenerator}
            setIdGenerator={setIdGenerator}
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
            actDepositAmount={actDepositAmount}
            setActDepositAmount={setActDepositAmount}
            actWithdrawAmount={actWithdrawAmount}
            setActWithdrawAmount={setActWithdrawAmount}
            actTransferAmount={actTransferAmount}
            setActTransferAmount={setActTransferAmount}

            isActAccountModalOpen={isActAccountModalOpen}
            setIsActAccountModalOpen={setIsActAccountModalOpen}
        />
        }
    </>
};

export default AccountsPage;

