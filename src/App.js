import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import CounterContextPage from "./pages/CounterContext";
import UseRefPage from "./pages/UseRef";
import UseAxiosPage from "./pages/UseAxios";
import CardPage from "./pages/Card";
import { DebouncedSearch } from "./pages/DebouncedSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter-context">Counter Context</Link>
          </li>
          <li>
            <Link to="/use-ref">Use Ref</Link>
          </li>
          <li>
            <Link to="/custom-hooks">Custom Hooks</Link>
          </li>
          <li>
            <Link to="/card">Card</Link>
          </li>
          <li>
            <Link to="/debounced-search">Debounced Search</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter-context" element={<CounterContextPage />} />
        <Route path="/use-ref" element={<UseRefPage />} />
        <Route path="/custom-hooks" element={<UseAxiosPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/debounced-search" element={<DebouncedSearch />} />
      </Routes>
    </div>
  );
}

export default App;
