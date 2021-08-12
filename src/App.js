import LoginPage from './components/login/loginpage'
import NavBar from './components/common/navbar';

// js logic
// initialize
let idGenerator = 3;
let accounts = [
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

// add accounts
const addAccount = (holderName, email, initialValue) => {
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
};

  // test add accounts
console.log(accounts);
addAccount("Leandre Kiu", "lkiu@gmail.com", 0);
addAccount("Steve Jobs", "sjobs@icloud.com", 123);
console.log(accounts);

// delete accounts
const deleteAccount = (email) => {
  accounts = accounts.filter(account => account.email.toLowerCase() !== email.toLowerCase())
};

  // test delete accounts
deleteAccount("lbj@gmail.com");
console.log(accounts);

// withdraw
const withdraw = (email, withdrawAmt) => { // ! email or account, not yet sure
  accounts.map(account => {
    if (account.email.toLowerCase() === email.toLowerCase()) {
      account.balance -= withdrawAmt;
      return account;
    };
  });
}

  // test withdraw
withdraw("lkiu@gmail.com", 1);
console.log(accounts);


// deposit

// transfer



const App = () => {
  // 

  // return/render page
  return (
    <>
      <header>
        {/* turn into component */}
        <NavBar/>
      </header>
      <main>
        <LoginPage />
      </main>
    </>
  );
}

export default App;
