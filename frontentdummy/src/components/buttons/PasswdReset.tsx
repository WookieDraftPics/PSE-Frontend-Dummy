import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PasswdReset = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <button
      className="bg-backingGreenHigh text-linkBlue border border-grey shadow-sm rounded-full underline"
      onClick={() => navigate("recovery")}
    >
      {t("forgot_password")}
    </button>
  );
};

export default PasswdReset;
