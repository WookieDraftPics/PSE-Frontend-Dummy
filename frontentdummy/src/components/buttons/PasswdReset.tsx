import React from "react";
import { useNavigate } from "react-router-dom";

const PasswdReset = () => {
  const navigate = useNavigate();
  return (
    <button className="btn btn-link" onClick={() => navigate("recovery")}>
      Forgot Password
    </button>
  );
};

export default PasswdReset;
