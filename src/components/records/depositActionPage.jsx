import { deposit } from '../../utils/accounts';
import Button from '../common/Button';

const DepositActionPage = ({
    accounts,
    setAccounts,
    
    action,
    setAction,
    actAccountName,
    setActAccountName,
    actDepositAmount,
    setActDepositAmount
}) => {
    // handlers
    const handleButtonClick = () => {
        // perform action
        // console.log(deposit(accounts, actAccountName, actDepositAmount));
        setAccounts(deposit(accounts, actAccountName, actDepositAmount));
    }

    const handleActAccountNameChange = (e) => {
        setActAccountName(e.target.value);
    }

    const handleActDepositAmountChange = (e) => {
        setActDepositAmount(e.target.value);
    }

    // render
    return <div className={`
    ${action==="deposit" ? "" : "hidden"}
    flex flex-col justify-center items-center
    `}>
        <div className="flex flex-col mb-4">
            <label htmlFor="deposit-amount">Deposit Amount (Php)</label>
            <input value={actDepositAmount} onChange={handleActDepositAmountChange} type="number" id="deposit-amount" required={action==="deposit" ? true : false} className="form-input rounded-lg w-72"/>
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