import AccountRow from "./accountRow";
import Button from "../common/button";

const AccountsPage = ({accounts, setAccounts, isAccountsOpen}) => {
    return <>
        <div className={`
        flex justify-center items-start text-center my-4 mx-8
        pt-6 ${isAccountsOpen ? "" : "hidden"}
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
                        <i class="fas fa-plus text-xs"></i> <span className="text-sm">Add</span>
                    </>}
                    color="bg-green-500"
                    hoverColor="hover:bg-green-600"
                    otherStyling="mx-4"
                />
            </div>
            <div id="accounts-list" className="
            flex-auto
            bg-white
            ">
                {accounts.map(account => <AccountRow name={account.name} email={account.email} balance={account.balance} />)}
            </div>
        </div>
    </>
};

export default AccountsPage;

