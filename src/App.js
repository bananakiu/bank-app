import NavBar from './components/common/navbar';
import LoginPage from './components/login/loginpage';
import AccountsDisplay from './components/accounts/accountsDisplay';
import {addAccount, deleteAccount, withdraw, deposit, transfer} from './utilities/accounts'
import React, { useState } from 'react';


// App
const App = () => {
  // states
  const [idGenerator, setIdGenerator] = useState(3);
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
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(true);
  const [isRecordsOpen, setIsRecordsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  
  console.log(accounts);

  // return/render page
  return (
    <>
      <header>
        {/* turn into component */}
        <NavBar/>
      </header>
      <main>
        <LoginPage isOpen={loginIsOpen} />
        <AccountsDisplay accounts={accounts} setAccounts={setAccounts} />
      </main>
    </>
  );
}

export default App;
