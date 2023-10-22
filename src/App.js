import "./App.css";
import HomePage from "./pages/home";
import {HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from "./pages/scrolltoTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
