import NavBar from './components/common/navbar';
import DashboardPage from './components/dashboard/dashboardPage';
import AccountsPage from './components/accounts/accountsPage';
import RecordsPage from './components/records/recordsPage';
import LoginPage from './components/login/loginPage';
import { addAccount } from './utils/accounts';
import React, { useState } from 'react';
import Button from './components/common/button';

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

  const [newAccountName, setNewAccountName] = useState("");
  const [newEmail, setNewEmail] = useState();
  const [newAccountType, setNewAccountType] = useState();
  const [newInitialAmount, setNewInitialAmount] = useState();
  
  // functions (TEMP)
  const handleNewAccountNameChange = (event) => {
    setNewAccountName(event.target.value);
  }

  const handleNewEmailChange = (event) => {
    setNewEmail(event.target.value);
  }

  const handleNewAccountTypeChange = (event) => {
    setNewAccountType(event.target.value);
  }

  const handleNewInitialAmountChange = (event) => {
    setNewInitialAmount(event.target.value);
  }

  const handleNewAccountSubmit = (event) => {
    // prevent refresh
    event.preventDefault();

    // add accounts
    let [newAccounts, newIdGenerator] = addAccount(accounts, idGenerator, newAccountName, newEmail, newInitialAmount);
    setAccounts(newAccounts);
    setIdGenerator(newIdGenerator);

    // reset values
    setNewAccountName("");
    setNewEmail("");
    setNewAccountType("");
    setNewInitialAmount("");
  }
  

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
        {/* forms test */}
        <section className="
        flex justify-center items-start
        text-center
        w-full
        bg-smoke-light
        ">
          <form onSubmit={handleNewAccountSubmit} className="
          py-4 px-6 mt-8 mb-4 mx-8
          border-gray-150 border-2 rounded-lg
          transition duration-200
          flex flex-col justify-center
          ">
            <div className="flex flex-col mb-4">
              <label>Account Name</label>
              <input type="text" value={newAccountName} onChange={handleNewAccountNameChange} required className="form-input rounded-lg"/>
            </div>
            <div className="flex flex-col mb-4">
              <label>Email</label>
              <input type="email" value={newEmail} onChange={handleNewEmailChange} required className="form-input rounded-lg"/>
            </div>
            <div className="flex flex-col mb-4">
              <label>Account Type</label>
              <select value={newAccountType} onChange={handleNewAccountTypeChange} required className="form-select rounded-lg">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select> 
            </div>
            <div className="flex flex-col mb-6">
              <label>Starting Amount</label>
              <input type="number" value={newInitialAmount} required onChange={handleNewInitialAmountChange} className="form-input rounded-lg"/>
            </div>
            <div>
              <Button
                content={<>
                    <i className="fas fa-plus text-xs"></i> <span className="text-sm">Create</span>
                </>}
                color="bg-green-500"
                hoverColor="hover:bg-green-600"
                otherStyling="w-3/5"
              />
            </div>

          </form>
        </section>
        
        <DashboardPage isDashboardOpen={isDashboardOpen} />
        <AccountsPage
          accounts={accounts}
          setAccounts={setAccounts}
          idGenerator={idGenerator}
          setIdGenerator={setIdGenerator}
          isAccountsOpen={isAccountsOpen}
        />
        <RecordsPage isRecordsOpen={isRecordsOpen} />
        <LoginPage isLoginOpen={isLoginOpen} />
      </main>
    </>
  );
}

export default App;
