import './App.css';
import { Heading } from './components/Heading';
import { Balance } from './components/Balance';
import { History } from './components/History';
import { NewTransaction } from './components/Transaction';
import { GlobalProvider } from './context/globalState';
function App() {
  return (
    <GlobalProvider>
      <div className="App container">
        <div className="sub-App">
          <Heading />
          <Balance />
          <History />
          <NewTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
