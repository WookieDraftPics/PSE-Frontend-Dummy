import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  content: string;
}

function SwitchButton({ content }: Props) {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const value = currentLocation.pathname === "/" ? "register" : "/";
  return (
    <button
      className="bg-switchButton  inset-0 w-75 h-10 text-3xl rounded-full border border-black"
      onClick={() => navigate(value)}
    >
      {content}
    </button>
  );
}

export default SwitchButton;
