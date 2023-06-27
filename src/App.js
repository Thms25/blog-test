import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const myTitle = "Welcome to my blog";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>
            {myTitle}
          </h1>
        </header>
        <main>
          <Home />
        </main>
      </div>
    </Router>
  );
}

export default App;
