import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import DummyOverview from "./pages/DummyOverview";
import DummyEditor from "./pages/DummyEditor";
import PasswdRecovery from "./pages/PasswdRecovery";

import { useTranslation } from "react-i18next";

function chooseIndexPath() {
  return <LoginPage />;
}
//TODO: password reset extra route or component reload?
//TODO: when routing with guest button => show random guest user id
//TODO: when routing with valid(default) login => show user data
//TODO: finish account creation
//TODO: add state for routing
//TODO: put everything into a component diagram
//TODO: fix hooks apparently => console in browser

function App() {
  const { t } = useTranslation();
  return (
    <div className="...">
      {/* We pass the key we provided under
          `resources.translation` in 
          src/i18n/config.ts */}
      <h2>{t("hello_world")}</h2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={chooseIndexPath()} />
          <Route index element={chooseIndexPath()} />
          <Route path="/register" element={<Register />} />
          <Route path="/overview" element={<DummyOverview />} />
          <Route path="/editor" element={<DummyEditor />} />
          <Route path="/recovery" element={<PasswdRecovery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
