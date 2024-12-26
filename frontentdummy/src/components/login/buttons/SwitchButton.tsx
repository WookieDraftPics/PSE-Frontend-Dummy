import { useLocation, useNavigate } from "react-router-dom";

function SwitchButton() {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const value = currentLocation.pathname === "/" ? "register" : "/";
  return (
    <button
      className="bg-switchButton  inset-0 w-75 h-10 text-3xl rounded-full border border-black"
      onClick={() => navigate(value)}
    >
      Registrieren
    </button>
  );
}

export default SwitchButton;
