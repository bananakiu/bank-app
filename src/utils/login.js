// SIGNUP
// add new admin account
export const addAdminAccount = (adminAccounts, firstName, lastName, email, username, password) => {
    // push to accounts
    adminAccounts.push(
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
        }
    );
    return adminAccounts;
};

// delete admin accounts
export const deleteAccount = (accounts, email) => {
    return accounts.filter(account => account.email.toLowerCase() !== email.toLowerCase());
};