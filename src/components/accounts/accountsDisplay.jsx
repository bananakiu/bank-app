import AccountRow from "./accountRow";

const AccountsDisplay = ({accounts, setAccounts}) => {
    return <>
        <div className="
        flex justify-center items-start text-center my-4 mx-8
        pt-6
        ">
            <div id="accounts-utility-panel" className="
            w-80 h-96 mr-4
            bg-white
            border-gray-150 border-2 rounded-lg
            ">
                Accounts Utility Panel
            </div>
            <div id="accounts-list" className="
            flex-auto
            bg-white
            ">
                <h1 className="mb-4">Accounts List</h1>
                {accounts.map(account => <AccountRow name={account.name} email={account.email} balance={account.balance} />)};
            </div>
        </div>
    </>
};

export default AccountsDisplay;

