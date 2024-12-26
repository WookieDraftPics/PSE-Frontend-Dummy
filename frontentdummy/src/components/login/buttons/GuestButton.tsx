//no dynamic input because this button only exists as this version
import { useNavigate } from "react-router-dom";

const GuestButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>------ODER------</h3>
      <br></br>
      <button
        className="bg-guestButton w-80 h-10 text-3xl text-textGrayish rounded-full border border-black "
        onClick={() => navigate("overview")}
      >
        Weiter als Gast
      </button>
    </div>
  );
};

export default GuestButton;
