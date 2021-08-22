import Button from '../common/Button';
import ErrorDisplay from '../common/ErrorDisplay';

const DepositActionPage = ({
    accounts,
    setAccounts,
    
    action,
    setAction,
    actAccountName,
    setActAccountName,
    actDepositAmount,
    setActDepositAmount,
    records,
    setRecords,
    recordsIdGenerator,
    setRecordsIdGenerator,

    errors,
    isErrorDisplayOpen,
    errorAction,
}) => {
    // 
    // handlers
    const handleActAccountNameChange = (e) => {
        setActAccountName(e.target.value);
    }

    const handleActDepositAmountChange = (e) => {
        setActDepositAmount(e.target.value);
    }

    // render
    return <div className={`
    flex flex-col justify-center items-center
    `}>
        <div className="flex flex-col mb-4">
            <label htmlFor="deposit-amount">Deposit Amount (Php)</label>
            <input value={actDepositAmount} onChange={handleActDepositAmountChange} type="number" id="deposit-amount" required={action==="deposit" ? true : false} className="form-input rounded-lg w-72"/>
        </div>
        
        {isErrorDisplayOpen && errorAction === "deposit" &&
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

export default DepositActionPage;