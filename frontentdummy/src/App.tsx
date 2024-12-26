import { useState } from "react";
import "./App.css";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <div className="dark:bg-darkmodeBackground">
      <LoginPage />
    </div>
  );
}

export default App;
