import NavBar from './components/common/Navbar';
import DashboardPage from './components/dashboard/DashboardPage';
import AccountsPage from './components/accounts/AccountsPage';
import RecordsPage from './components/records/RecordsPage';
import LoginPage from './components/login/LoginPage';
import React, { useState } from 'react';
import './App.css';

// App
const App = () => {
  // data
  const [adminAccounts, setAdminAccounts] = useState(
    [
      {
        firstName: "Jordan",
        lastName: "Belfort",
        email: "jbelfort@gmail.com",
        username: "wolfOfWallStreet",
        password: "password",
      }
    ]
  )
  const [accounts, setAccounts] = useState(
    [
      {
        id: 0,
        email: "lbj@gmail.com",
        name: "LeBron James",
        balance: 1000000,
        // access: ["jbelfort@gmail.com"], 
      },
      {
        id: 1,
        email: "halimauCoder@gmail.com",
        name: "Maurus Vitor",
        balance: 2000000,
        // access: ["jbelfort@gmail.com"], 
      },
      {
        id: 2,
        email: "elonmusk@gmail.com",
        name: "Elon Musk",
        balance: 3000000,
        // access: ["jbelfort@gmail.com"],
      },
    ]
  );
  const [idGenerator, setIdGenerator] = useState(accounts.length);
  const [records, setRecords] = useState([]);
  const [recordsIdGenerator, setRecordsIdGenerator] = useState(0);
  
  // pages
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);
  const [isRecordsOpen, setIsRecordsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

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
  
  // return/render page
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
            setIsDashboardOpen={setIsDashboardOpen}
            setIsAccountsOpen={setIsAccountsOpen}
            setIsRecordsOpen={setIsRecordsOpen}
            setLoggedIn={setLoggedIn}
          />
        }
      </main>
    </>
  );
}

export default App;
