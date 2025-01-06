import GuestButton from "../buttons/GuestButton";
import InputField from "../buttons/input";
import PrimButton from "../buttons/PrimButton";
import { useTranslation } from "react-i18next";

const InteractionScreen = () => {
  const { t } = useTranslation();
  return (
    <div className="absolute öeft-8 top-10 w-6/12">
      <h1 className="text-3xl font-medium">{t("create_account")}</h1>
      <br></br>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <InputField type="text" identifier={"ruserName"} title={t("userName")} placeHolder="Tano" />
        <InputField type="email" identifier="remail" title={t("e-mail_adress")} placeHolder="tano@example.de" />
        <InputField type="password" identifier="rpasswd" title={t("password")} placeHolder="**********" />
        <InputField type="password" identifier="rforgot_passwd" title={t("repeat_password")} placeHolder="**********" />
      </div>
      <PrimButton content={t("register")} route="/overview" />
      <br></br>
      <br></br>
      <p className="text-center">
        <GuestButton />
      </p>
    </div>
  );
};

export default InteractionScreen;
