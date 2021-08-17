import { transfer } from '../../utils/accounts';

const TransferActionPage = ({
    accounts,
    setAccounts,
    
    action,
    setAction,
}) => {
    return <>
        <div className={`
        ${action==="transfer" ? "" : "hidden"}
        `}>
            Transfer Action Page
        </div>        
    </>
}

export default TransferActionPage;