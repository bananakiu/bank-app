import { withdraw } from '../../utils/accounts';

const WithdrawActionPage = ({
    accounts,
    setAccounts,

    action,
    setAction,
}) => {
    return <>
        <div className={`
        ${action==="withdraw" ? "" : "hidden"}
        `}>
            Withdraw Action Page
        </div>        
    </>
}

export default WithdrawActionPage;