import SwitchButton from "../buttons/SwitchButton";
import { useTranslation } from "react-i18next";

//TODO: make text dynamic with languages

function SwitchScreen() {
  const { t } = useTranslation();
  return (
    <div className="absolute inset-x-0 bottom-0 left-16 w-4/6 h-2/3">
      <h1 className="text-center text-4xl">{t("new_here")}</h1>
      <br></br>
      <h2 className="whitespace-normal white-space: pre-line text-center text-xl">
        {t("switch_screen_text")}
      </h2>
      <br></br>
      <br></br>
      <p className="text-center">
        <SwitchButton content={t("register")} />
      </p>
    </div>
  );
}

export default SwitchScreen;
