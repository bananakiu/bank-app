import NavBar from './components/common/Navbar';
import DashboardPage from './components/dashboard/DashboardPage';
import AccountsPage from './components/accounts/AccountsPage';
import RecordsPage from './components/records/RecordsPage';
import LoginPage from './components/login/LoginPage';
import React, { useState } from 'react';
import './App.css';

// App
const App = () => {
  // states
  const [accounts, setAccounts] = useState(
    [
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
    ]
  );
  const [idGenerator, setIdGenerator] = useState(accounts.length);

  const [records, setRecords] = useState([]);
  const [recordsIdGenerator, setRecordsIdGenerator] = useState(0);

  
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(true);
  const [isRecordsOpen, setIsRecordsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
  const [isActAccountModalOpen, setIsActAccountModalOpen] = useState(false);

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
      <main>
        
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
          <LoginPage isLoginOpen={isLoginOpen} />
        }
      </main>
    </>
  );
}

export default App;
