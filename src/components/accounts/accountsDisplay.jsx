import AccountRow from "./accountRow";

const AccountsDisplay = () => {
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
                Accounts List
                <AccountRow name="Leandre" email="leandrenoelkiu@gmail.com" balance={123} />
                <AccountRow name="Leandre" email="leandrenoelkiu@gmail.com" balance={1234} />
                <AccountRow name="Leandre" email="leandrenoelkiu@gmail.com" balance={12345} />
            </div>
        </div>
    </>
};

export default AccountsDisplay;

