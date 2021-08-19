const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP'
});

const RecordRow = ({
    id,
    name,
    email,
    type,
    amount,
    // accountType,

    // setIsActAccountModalOpen,
    // setActAccountName,
}) => {
    // handlers
    const handleRecordRowClick = () => {
        // setActAccountName(email);
        // setIsActAccountModalOpen(true);
    }

    // render
    return <div onClick={handleRecordRowClick} className={`
    flex justify-between align-center
    py-4 px-6 mb-4
    border-2 rounded-lg
    ${["initialize", "deposit", "transferTo"].includes(type) ? "border-green-300" : "border-red-300"}
    hover:shadow-md
    transition duration-200
    `}>
        <div className="flex flex-col justify-center items-start">
            <div className="font-bold">{name}</div>
            <div className="text-xs text-gray-600">{email}</div>
        </div>
        <div>
            {type==="deposit" && <><i className="fas fa-plus text-xs"/> <span>Deposit</span></>}
            {type==="withdraw" && <><i className="fas fa-minus text-xs"/> <span>Withdraw</span></>}
            {type==="transferTo" && <><i className="fas fa-exchange-alt text-xs"/> <span>Transfer to</span></>}
            {type==="transferFrom" && <><i className="fas fa-exchange-alt text-xs"/> <span>Transfer from</span></>}
            {type==="initialize" && <><i className="fas fa-plus text-xs"/> <span>Create account</span></>}
        </div>

        <div>{["initialize", "deposit", "transferTo"].includes(type) ?  "" : "-"} {formatter.format(amount)}</div>
        
    </div>
};

export default RecordRow;

