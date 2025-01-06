import { useNavigate } from "react-router-dom";

const DummyOverview = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is a dummy implementation.</h1>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        go back
      </button>
    </div>
  );
};

export default DummyOverview;
