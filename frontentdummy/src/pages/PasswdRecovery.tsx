import { useNavigate } from "react-router-dom";

const PasswdRecovery = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Not implemented</h1>
      <button className="btn btn-primary" onClick={() => navigate("/")} />
    </div>
  );
};

export default PasswdRecovery;
