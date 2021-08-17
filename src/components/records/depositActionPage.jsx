import { deposit } from '../../utils/accounts';
import Button from '../common/button';

const DepositActionPage = ({
    accounts,
    setAccounts,

    // depositAmount,
    // setDepositAmount,
    
    action,
    setAction
}) => {
    // handlers
    const handleButtonClick = () => {
        alert("deposit button clicked!");
    }

    // render
    return <div className={`
    ${action==="deposit" ? "" : "hidden"}
    flex flex-col justify-center items-center
    `}>
        <div className="flex flex-col mb-4">
            {/* TODO: remove repetitive datalist dropdown icon */}
            <label htmlFor="deposit-account">Account Name</label>
            <input list="deposit-account-list" name="deposit-account" id="deposit-account" required className="
            form-select truncate rounded-lg
            w-72
            "/>
            <datalist id="deposit-account-list">
                {
                    accounts.map((account) => {
                        return <option>{account.name} ({account.email})</option>
                    })
                }
            </datalist>
        </div>
        <div className="flex flex-col mb-4">
            <label htmlFor="deposit-amount">Deposit Amount (Php)</label>
            <input type="number" id="deposit-amount" required className="form-input rounded-lg w-72"/>
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

export default DepositActionPage;