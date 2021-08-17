import { withdraw } from '../../utils/accounts';
import Button from '../common/button';

const WithdrawActionPage = ({
    accounts,
    setAccounts,
    
    action,
    setAction,
    actAccountName,
    setActAccountName,
    actWithdrawAmount,
    setActWithdrawAmount
}) => {
    // handlers
    const handleButtonClick = () => {
        // perform action
        setAccounts(withdraw(accounts, actAccountName, actWithdrawAmount));
    }
    
    const handleActWithdrawAmountChange = (e) => {
        setActWithdrawAmount(e.target.value);
    }

    // render
    return <div className={`
    ${action==="withdraw" ? "" : "hidden"}
    flex flex-col justify-center items-center
    `}>
        <div className="flex flex-col mb-4">
            <label htmlFor="withdraw-amount">Withdraw Amount (Php)</label>
            <input value={actWithdrawAmount} onChange={handleActWithdrawAmountChange} type="number" id="withdraw-amount" required className="form-input rounded-lg w-72"/>
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

export default WithdrawActionPage;