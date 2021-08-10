import './App.css';
import LoginPage from './components/login/index'

function App() {
  return (
    <>
      <header>
        {/* turn into component */}
        <nav>Navbar here</nav> 
      </header>
      <main>
        <LoginPage />
      </main>
    </>
  );
}

export default App;