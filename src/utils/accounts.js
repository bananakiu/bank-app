// add accounts
export const addAccount = (accounts, idGenerator, holderName, email, initialValue) => {
    // TODO: check if email exists, check if balance is negative, name has to start with string
    // push to accounts
    accounts.push(
        {
            id: idGenerator,
            email: email,
            name: holderName,
            balance: initialValue
        }
    );

    // increment data
    idGenerator++;

    return [accounts, idGenerator];
};

// delete accounts
export const deleteAccount = (accounts, email) => {
    return accounts.filter(account => account.email.toLowerCase() !== email.toLowerCase());
};  

// withdraw
export const withdraw = (accounts, email, amt) => { // ! email or account, not yet sure
    return accounts.map(account => {
        if (account.email.toLowerCase() === email.toLowerCase()) {
            account.balance -= amt;
            return account;
        };
    });
};

// deposit
export const deposit = (accounts, email, amt) => { // ! email or account, not yet sure
    return accounts.map(account => {
        if (account.email.toLowerCase() === email.toLowerCase()) {
            account.balance += parseFloat(amt);
            return account;
        } else {
            return account;
        };
    });
};

// transfer
export const transfer = (accounts, emailFrom, emailTo, amt) => { // ! email or account, not yet sure
    accounts.map(account => {
        if (account.email.toLowerCase() === emailFrom.toLowerCase()) {
            account.balance -= parseFloat(amt);
            return account;
        };
    });
    
    accounts.map(account => {
        if (account.email.toLowerCase() === emailTo.toLowerCase()) {
            account.balance += parseFloat(amt);
            return account;
        };
    });

    return accounts;
}