import { transfer } from '../../utils/accounts';
import Button from '../common/button';

const TransferActionPage = ({
    accounts,
    setAccounts,
    
    action,
    setAction,
    actAccountName,
    setActAccountName,
    actTransferToAccountName,
    setActTransferToAccountName,
    actTransferAmount,
    setActTransferAmount
}) => {
    // handlers
    const handleButtonClick = () => {
        // perform action
        setAccounts(transfer(accounts, actAccountName, actTransferToAccountName, actTransferAmount));
    }
    
    const handleActTransferToAccountNameChange = (e) => {
        setActTransferToAccountName(e.target.value);
    }
    
    const handleActTransferAmountChange = (e) => {
        setActTransferAmount(e.target.value);
    }

    // render
    return <div className={`
    ${action==="transfer" ? "" : "hidden"}
    flex flex-col justify-center items-center
    `}>
        <div className="flex flex-col mb-4">
            {/* TODO: remove repetitive datalist dropdown icon */}
            <label htmlFor="transfer-to-account">Transfer to</label>
            <input
                onChange={handleActTransferToAccountNameChange}
                list="transfer-to-account-list"
                name="transfer-to-account"
                id="transfer-to-account"
                required
                className="
                form-select truncate rounded-lg
                w-72
            "/>
            <datalist id="transfer-to-account-list">
                {
                    accounts.map((account) => {
                        return <option label={`${account.name} (${account.email})`} value={account.email}/>
                    })
                }
            </datalist>
        </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="transfer-amount">Transfer Amount (Php)</label>
            <input value={actTransferAmount} onChange={handleActTransferAmountChange} type="number" id="transfer-amount" required className="form-input rounded-lg w-72"/>
        </div>
        
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