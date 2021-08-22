import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';

const WithdrawActionPage = ({
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
    actWithdrawAmount,
    setActWithdrawAmount,

    errors,
    isErrorDisplayOpen,
    errorAction,
}) => {
    // handlers
    const handleActWithdrawAmountChange = (e) => {
        setActWithdrawAmount(e.target.value);
    }

    // render
    return <div className={`
    flex flex-col justify-center items-center
    `}>
        <div className="flex flex-col mb-4">
            <label htmlFor="withdraw-amount">Withdraw Amount (Php)</label>
            <input value={actWithdrawAmount} onChange={handleActWithdrawAmountChange} type="number" id="withdraw-amount" required={action==="withdraw" ? true : false} className="form-input rounded-lg w-72"/>
        </div>

        {isErrorDisplayOpen && errorAction === "withdraw" &&
            <ErrorDisplay errors={errors} />
        }
        
        {/* submit button */}
        <div>
            <Button
                content="Add record"
                color="bg-green-500"
                hoverColor="hover:bg-green-600"
                otherStyling="w-60"
            />
        </div>
    </div>
}

export default WithdrawActionPage;