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
export const deleteAdminAccount = (adminAccounts, email) => {
    return adminAccounts.filter(account => account.email.toLowerCase() !== email.toLowerCase());
};