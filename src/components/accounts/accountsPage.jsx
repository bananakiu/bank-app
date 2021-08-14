import AccountRow from "./accountRow";
import Button from "../common/button";
import {addAccount, deleteAccount, withdraw, deposit, transfer} from './../../utils/accounts';

const AccountsPage = ({accounts, setAccounts, idGenerator, setIdGenerator, isAccountsOpen}) => {
    // functions
    const addAccountOnClick = (holderName, email, initialValue) => {
        return () => {
            let [newAccounts, newIdGenerator] = addAccount(accounts, idGenerator, holderName, email, initialValue);
            setAccounts(newAccounts);
            setIdGenerator(newIdGenerator);
        }
    }

    // render
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
                    onClickFunction={addAccountOnClick("Leandre Noel Kiu", "lkiu@gmail.com", 100000)}
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

