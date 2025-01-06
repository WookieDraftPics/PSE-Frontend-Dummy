import { useNavigate } from "react-router-dom";

const EscapeButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="rounded-full shadow bg-backingGreen border border-textGrayish hover:bg-switchGreen w-5"
        onClick={() => navigate(-1)}
      >
        x
      </button>
    </div>
  );
};

export default EscapeButton;
