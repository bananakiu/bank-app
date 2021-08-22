import { transfer } from '../../utils/accounts';
import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';


const TransferActionPage = ({
    accounts,
    setAccounts,
    records,
    setRecords,
    recordsIdGenerator,
    setRecordsIdGenerator,
    
    action,
    setAction,
    actAccountName,
    setActAccountName,
    actTransferToAccountName,
    setActTransferToAccountName,
    actTransferAmount,
    setActTransferAmount,

    errors,
    isErrorDisplayOpen,
}) => {
    // handlers
    const handleButtonClick = () => {
        // perform action
        let [newAccounts, newRecords, newRecordsIdGenerator] = transfer(accounts, actAccountName, actTransferToAccountName, actTransferAmount, records, recordsIdGenerator);
        setAccounts(newAccounts);
        setRecords(newRecords);
        setRecordsIdGenerator(newRecordsIdGenerator);
    }
    
    const handleActTransferToAccountNameChange = (e) => {
        setActTransferToAccountName(e.target.value);
    }
    
    const handleActTransferAmountChange = (e) => {
        setActTransferAmount(e.target.value);
    }

    // render
    return <div className={`
    flex flex-col justify-center items-center
    `}>
        <div className="flex flex-col mb-4">
            {/* TODO: remove repetitive datalist dropdown icon */}
            <label htmlFor="transfer-to-account">Transfer to</label>
            <input
                value={actTransferToAccountName}
                onChange={handleActTransferToAccountNameChange}
                list="transfer-to-account-list"
                name="transfer-to-account"
                id="transfer-to-account"
                required={action==="transfer" ? true : false}
                className="
                form-select truncate rounded-lg
                w-72
            "/>
            <datalist id="transfer-to-account-list">
                {
                    accounts.map((account, index) => {
                        return <option key={index} label={`${account.name} (${account.email})`} value={account.email}/>
                    })
                }
            </datalist>
        </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="transfer-amount">Transfer Amount (Php)</label>
            <input value={actTransferAmount} onChange={handleActTransferAmountChange} type="number" id="transfer-amount" required={action==="transfer" ? true : false} className="form-input rounded-lg w-72"/>
        </div>

        {isErrorDisplayOpen &&
            <ErrorDisplay errors={errors} />
        }

        
        {/* submit button */}
        <div>
            <Button
                content="Add record"
                color="bg-green-500"
                hoverColor="hover:bg-green-600"
                otherStyling="w-60"
                onClickFunction={handleButtonClick}
            />
        </div>
    </div>
}

export default TransferActionPage;