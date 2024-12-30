import { useNavigate } from "react-router-dom";

interface Props {
  content: string;
  route: string;
  clickHandler: CallableFunction;
}

const PrimButton = ({ content, route }: Props) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-primButton w-40 border border-black rounded-full text-xl"
      onClick={() => navigate(route)}
    >
      {content}
    </button>
  );
};

export default PrimButton;
