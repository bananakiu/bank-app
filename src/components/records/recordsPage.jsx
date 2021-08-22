import RecordRow from "./RecordRow";
import Button from "../common/Button";
import ActAccountModal from "./ActAccountModal";
import { getAccount } from "./../../utils/accounts"

const RecordsPage = ({
    isRecordsOpen,

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

    // modals
    isActAccountModalOpen,
    setIsActAccountModalOpen,

}) => {
    // functions
    const handleActAccountOnClick = () => {
        setIsActAccountModalOpen(true);
    }

    // render
    return <>
        <div className={`
        flex justify-center items-start text-center my-4 mx-8 mt-10
        `}>
            <div id="records-utility-panel" className="
            w-80 mr-4 px-4 py-8
            bg-white
            border-gray-150 border-2 rounded-lg
            flex flex-col justify-start align-center
            ">
                <h1 className="
                mb-4 mx-4
                text-2xl font-bold
                ">Records</h1>
                <Button
                    content={<>
                        <i className="fas fa-plus text-xs"></i> <span className="text-sm">Add</span>
                    </>}
                    color="bg-green-500"
                    hoverColor="hover:bg-green-600"
                    otherStyling="mx-4"
                    onClickFunction={handleActAccountOnClick}
                />
            </div>
            <div id="records-list" className="
            flex flex-col-reverse flex-auto
            bg-white
            ">
                {records.length===0 &&
                    <div className="text-gray-400 text-lg mt-16">
                        <div><i className="far fa-frown"></i></div>
                        <p> No records here yet.</p>
                    </div>
                }
                {records.map((record, index) => <RecordRow
                    key={index}
                    id={record.id}
                    name={getAccount(accounts, record.email).name}
                    email={record.email}
                    type={record.type}
                    amount={record.amount}
                    // accountType={account.type}
                    
                    // setIsActAccountModalOpen={setIsActAccountModalOpen}
                    // setActAccountName={setActAccountName}
                />)}
            </div>
        </div>

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

export default RecordsPage;

