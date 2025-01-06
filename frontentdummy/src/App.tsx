import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import DummyOverview from "./pages/DummyOverview";
import Editor from "./pages/Editor";
import PasswdRecovery from "./pages/PasswdRecovery";

function chooseIndexPath() {
  return <LoginPage />;
}
//password reset extra route or component reload? -> extra route for now
//TODO: when routing with guest button => show random guest user id
//TODO: when routing with valid(default) login => show user data
//TODO: finish account creation
//TODO: add state for routing
//TODO: put everything into a component diagram
//TODO: fix hooks apparently => console in browser

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={chooseIndexPath()} />
        <Route index element={chooseIndexPath()} />
        <Route path="/register" element={<Register />} />
        <Route path="/overview" element={<DummyOverview />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/recovery" element={<PasswdRecovery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
