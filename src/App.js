import NavBar from './components/common/navbar';
import LoginPage from './components/login/loginpage';
import AccountsDisplay from './components/accounts/accountsDisplay';

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
        {/* <LoginPage /> */}
        <AccountsDisplay />
      </main>
    </>
  );
}

export default App;
