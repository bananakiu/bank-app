const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP'
});

const AccountRow = ({name, email, balance}) => {
    return <div className="
    flex justify-between align-center
    py-4 px-6 mb-4
    border-gray-150 border-2 rounded-lg
    ">
        <div className="font-bold">{name}</div>
        <div>{email}</div>
        <div>{formatter.format(balance)}</div>
    </div>
};

export default AccountRow;

