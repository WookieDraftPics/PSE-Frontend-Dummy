import SwitchButton from "../buttons/SwitchButton";
import { useTranslation } from "react-i18next";

const SwitchScreen = () => {
  const { t } = useTranslation();
  return (
    <div className="absolute inset-x-0 bottom-0 left-16 w-4/6 h-2/3">
      <h1 className="text-center text-4xl">{t("already_registered")}</h1>
      <br></br>
      <br></br>
      <br></br>
      <p className="text-center">
        <SwitchButton content={t("login")} />
      </p>
    </div>
  );
};

export default SwitchScreen;
