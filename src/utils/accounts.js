// ACCOUNTS

// add new account
export const addAccount = (accounts, idGenerator, holderName, email, initialValue, records, recordsIdGenerator) => {
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

    // add record
    let [newRecords, newRecordsIdGenerator] = addRecord(records, recordsIdGenerator, email, "initialize", initialValue);

    return [accounts, idGenerator, newRecords, newRecordsIdGenerator];
};

// delete accounts
export const deleteAccount = (accounts, email) => {
    return accounts.filter(account => account.email.toLowerCase() !== email.toLowerCase());
};  

// withdraw
export const withdraw = (accounts, email, amt, records, recordsIdGenerator) => {
    // update accounts
    let newAccounts = accounts.map(account => {
        if (account.email.toLowerCase() === email.toLowerCase()) {
            account.balance -= amt;
            return account;
        } else {
            return account;
        };
    });

    // update records
    let [newRecords, newRecordsIdGenerator] = addRecord(records, recordsIdGenerator, email, "withdraw", amt);

    return [newAccounts, newRecords, newRecordsIdGenerator];
};

// deposit
export const deposit = (accounts, email, amt, records, recordsIdGenerator) => { // ! email or account, not yet sure
    // update accounts
    let newAccounts = accounts.map(account => {
        if (account.email.toLowerCase() === email.toLowerCase()) {
            account.balance += parseFloat(amt);
            return account;
        } else {
            return account;
        };
    });

    // update records
    let [newRecords, newRecordsIdGenerator] = addRecord(records, recordsIdGenerator, email, "deposit", amt);
    return [newAccounts, newRecords, newRecordsIdGenerator];
};

// transfer
export const transfer = (accounts, emailFrom, emailTo, amt, records, recordsIdGenerator) => { // ! email or account, not yet sure
    accounts.map(account => {
        if (account.email.toLowerCase() === emailFrom.toLowerCase()) {
            account.balance -= parseFloat(amt);
            return account;
        } else {
            return account;
        };
    });
    
    accounts.map(account => {
        if (account.email.toLowerCase() === emailTo.toLowerCase()) {
            account.balance += parseFloat(amt);
            return account;
        } else {
            return account;
        };
    });

    // update records
    let [newRecords, newRecordsIdGenerator] = addRecord(records, recordsIdGenerator, emailFrom, "transferFrom", amt);
    let [newNewRecords, newNewRecordsIdGenerator] = addRecord(newRecords, newRecordsIdGenerator-1, emailTo, "transferTo", amt);

    return [accounts, newNewRecords, newNewRecordsIdGenerator];
}

// RECORDS

// add record
export const addRecord = (records, recordsIdGenerator, email, type, amount) => {
    console.log(recordsIdGenerator); // ! TEMP
    // push to accounts
    records.push(
        {
            id: recordsIdGenerator,
            email: email,
            type: type,
            amount: amount,
        }
    );

    // increment data
    recordsIdGenerator++;

    // ! TEMP
    console.log(records);

    return [records, recordsIdGenerator];
};