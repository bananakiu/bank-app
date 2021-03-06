import NavBar from './components/common/Navbar';
import DashboardPage from './components/dashboard/DashboardPage';
import AccountsPage from './components/accounts/AccountsPage';
import RecordsPage from './components/records/RecordsPage';
import LoginPage from './components/login/LoginPage';
import SignUpPage from './components/login/SignUpPage';
import LandingPage from './components/login/LandingPage';
import React, { useEffect, useState } from 'react';
import './App.css';

// App
const App = () => {
  // data
  const [adminAccounts, setAdminAccounts] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("adminAccounts"));
    const initialValue = [
      {
        firstName: "Jordan",
        lastName: "Belfort",
        email: "jbelfort@gmail.com",
        username: "wolfOfWallStreet",
        password: "password",
      }
    ]
    return savedValue || initialValue;
  });
  const [accounts, setAccounts] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("accounts"));
    const initialValue = [
      {
        id: 0,
        email: "lbj@gmail.com",
        name: "LeBron James",
        balance: 1000000,
      },
      {
        id: 1,
        email: "halimauCoder@gmail.com",
        name: "Maurus Vitor",
        balance: 2000000,
      },
      {
        id: 2,
        email: "elonmusk@gmail.com",
        name: "Elon Musk",
        balance: 3000000,
      },
    ];
    return savedValue || initialValue;
  });
  const [idGenerator, setIdGenerator] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("idGenerator"));
    const initialValue = accounts.length;
    return savedValue || initialValue;
  });
  const [records, setRecords] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("records"));
    const initialValue = [];
    return savedValue || initialValue;
  });
  const [recordsIdGenerator, setRecordsIdGenerator] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("recordsIdGenerator"));
    const initialValue = 0;
    return savedValue || initialValue;
  });
  
  // pages
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);
  const [isRecordsOpen, setIsRecordsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLandingOpen, setIsLandingOpen] = useState(true);

  // modals
  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
  const [isActAccountModalOpen, setIsActAccountModalOpen] = useState(false);

  // TODO: states to move down
  const [newAccountName, setNewAccountName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAccountType, setNewAccountType] = useState("");
  const [newInitialAmount, setNewInitialAmount] = useState(0);

  const [action, setAction] = useState("deposit");
  const [actAccountName, setActAccountName] = useState("");
  const [actTransferToAccountName, setActTransferToAccountName] = useState("")
  const [actDepositAmount, setActDepositAmount] = useState(0);
  const [actWithdrawAmount, setActWithdrawAmount] = useState(0);
  const [actTransferAmount, setActTransferAmount] = useState(0);

  // login
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  
  // local storage
  useEffect(() => {
    localStorage.setItem('adminAccounts', JSON.stringify([...adminAccounts]));
  }, [JSON.stringify(adminAccounts)]);

  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify([...accounts]));
  }, [JSON.stringify(accounts)]);

  useEffect(() => {
    localStorage.setItem('idGenerator', JSON.stringify(idGenerator));
  }, [idGenerator]);

  useEffect(() => {
    localStorage.setItem('records', JSON.stringify([...records]));
  }, [JSON.stringify(records)]);

  useEffect(() => {
    localStorage.setItem('recordsIdGenerator', JSON.stringify(recordsIdGenerator));
  }, [recordsIdGenerator]);


  // render page
  return (
    <>
      <header>
        {/* turn into component */}
        <NavBar
          isDashboardOpen={isDashboardOpen}
          setIsDashboardOpen={setIsDashboardOpen}

          isAccountsOpen={isAccountsOpen}
          setIsAccountsOpen={setIsAccountsOpen}

          isRecordsOpen={isRecordsOpen}
          setIsRecordsOpen={setIsRecordsOpen}

          isLoginOpen={isLoginOpen}
          setIsLoginOpen={setIsLoginOpen}

          isSignupOpen={isSignupOpen}
          setIsSignupOpen={setIsSignupOpen}

          isLandingOpen={isLandingOpen}
          setIsLandingOpen={setIsLandingOpen}

          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}

          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}

          adminAccounts={adminAccounts}
        />
      </header>
      <main className="pt-14">
        
        {isDashboardOpen &&
          <DashboardPage isDashboardOpen={isDashboardOpen} />
        }

        {isAccountsOpen && 
          <AccountsPage
          isAccountsOpen={isAccountsOpen}

          accounts={accounts}
          setAccounts={setAccounts}
          idGenerator={idGenerator}
          setIdGenerator={setIdGenerator}
          records={records}
          setRecords={setRecords}
          recordsIdGenerator={recordsIdGenerator}
          setRecordsIdGenerator={setRecordsIdGenerator}

          newAccountName={newAccountName}
          setNewAccountName={setNewAccountName}
          newEmail={newEmail}
          setNewEmail={setNewEmail}
          newAccountType={newAccountType}
          setNewAccountType={setNewAccountType}
          newInitialAmount={newInitialAmount}
          setNewInitialAmount={setNewInitialAmount}

          isAddAccountModalOpen={isAddAccountModalOpen}
          setIsAddAccountModalOpen={setIsAddAccountModalOpen}
          isActAccountModalOpen={isActAccountModalOpen}
          setIsActAccountModalOpen={setIsActAccountModalOpen}

          action={action}
          setAction={setAction}
          actAccountName={actAccountName}
          setActAccountName={setActAccountName}
          actTransferToAccountName={actTransferToAccountName}
          setActTransferToAccountName={setActTransferToAccountName}
          actDepositAmount={actDepositAmount}
          setActDepositAmount={setActDepositAmount}
          actWithdrawAmount={actWithdrawAmount}
          setActWithdrawAmount={setActWithdrawAmount}
          actTransferAmount={actTransferAmount}
          setActTransferAmount={setActTransferAmount}
        />
        }
        {isRecordsOpen &&
          <RecordsPage
            isRecordsOpen={isRecordsOpen}

            accounts={accounts}
            setAccounts={setAccounts}
            idGenerator={idGenerator}
            setIdGenerator={setIdGenerator}
            records={records}
            setRecords={setRecords}
            recordsIdGenerator={recordsIdGenerator}
            setRecordsIdGenerator={setRecordsIdGenerator}

            isActAccountModalOpen={isActAccountModalOpen}
            setIsActAccountModalOpen={setIsActAccountModalOpen}
  
            action={action}
            setAction={setAction}
            actAccountName={actAccountName}
            setActAccountName={setActAccountName}
            actTransferToAccountName={actTransferToAccountName}
            setActTransferToAccountName={setActTransferToAccountName}
            actDepositAmount={actDepositAmount}
            setActDepositAmount={setActDepositAmount}
            actWithdrawAmount={actWithdrawAmount}
            setActWithdrawAmount={setActWithdrawAmount}
            actTransferAmount={actTransferAmount}
            setActTransferAmount={setActTransferAmount}
          />
        }
        {isLoginOpen &&
          <LoginPage
            setIsLoginOpen={setIsLoginOpen}
            setIsSignupOpen={setIsSignupOpen}
            setIsDashboardOpen={setIsDashboardOpen}
            setIsAccountsOpen={setIsAccountsOpen}
            setIsRecordsOpen={setIsRecordsOpen}

            adminAccounts={adminAccounts}
            setAdminAccounts={setAdminAccounts}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        }
        {isSignupOpen &&
          <SignUpPage
            setIsLoginOpen={setIsLoginOpen}
            setIsSignupOpen={setIsSignupOpen}
            setIsDashboardOpen={setIsDashboardOpen}
            setIsAccountsOpen={setIsAccountsOpen}
            setIsRecordsOpen={setIsRecordsOpen}

            adminAccounts={adminAccounts}
            setAdminAccounts={setAdminAccounts}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        }

        {isLandingOpen &&
          <LandingPage
            setIsLandingOpen={setIsLandingOpen}
            setIsLoginOpen={setIsLoginOpen}
            setIsSignupOpen={setIsSignupOpen}
          />
        }

        
      </main>
    </>
  );
}

export default App;
