//no dynamic input because this button only exists as this version
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GuestButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <span>
      <span>------{t("or")}------</span>
      <br></br>
      <button
        className="bg-guestButton w-80 h-10 text-3xl text-textGrayish rounded-full border border-black "
        onClick={() => navigate("/overview")}
      >
        {t("continue_as_guest")}
      </button>
    </span>
  );
};

export default GuestButton;
