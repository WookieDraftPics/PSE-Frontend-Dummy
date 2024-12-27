import { useNavigate } from "react-router-dom";

const PasswdReset = () => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-backingGreenHigh text-linkBlue border border-grey shadow-sm rounded-full underline"
      onClick={() => navigate("recovery")}
    >
      Forgot Password
    </button>
  );
};

export default PasswdReset;
