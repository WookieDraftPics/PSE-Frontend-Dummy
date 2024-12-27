//no dynamic input because this button only exists as this version
import { useNavigate } from "react-router-dom";

const GuestButton = () => {
  const navigate = useNavigate();
  console.log("test 1");
  return (
    <span>
      <span>------ODER------</span>
      <br></br>
      <button
        className="bg-guestButton w-80 h-10 text-3xl text-textGrayish rounded-full border border-black "
        onClick={() => navigate("/overview")}
      >
        Weiter als Gast
      </button>
    </span>
  );
};

export default GuestButton;
