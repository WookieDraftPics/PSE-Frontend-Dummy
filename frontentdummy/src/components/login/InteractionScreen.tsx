import GuestButton from "../buttons/GuestButton";
import PasswdReset from "../buttons/PasswdReset";
import PrimButton from "../buttons/PrimButton";
import InputField from "../buttons/input";

import LingoLinkIcon from "/assets/LingoLinkIcon.svg";
import LocaleSwitcher from "../../i18n/LocaleSwitcher";
import { useTranslation } from "react-i18next";

const InteractionScreen = () => {
  const { t } = useTranslation();
  return (
    <div className="absolute right-8 top-10 w-6/12">
      <LocaleSwitcher />
      <div className="grid grid-cols-6 gap-1 relative h-1/12 top-10">
        <div className="border border-switchGreen">
          <img src={LingoLinkIcon} alt="Logo" className="object-fill"></img>
        </div>
        <div className="col-span-5">
          <h1 className="text-left text-5xl">{t("login")}</h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="grid gap-6 mb-6 md:grid-cols-1 noto-sans">
        <InputField type="text" identifier="luserName" title={t("userName")} placeHolder="Tano/tano@email.de" />
        <InputField type="password" identifier="lpasswd" title={t("password")} placeHolder="**********" />
      </div>
      <div>
        <PasswdReset />
      </div>
      <br></br>
      <br></br>
      <p className="text-center">
        <PrimButton content={t("login")} route="/overview" />
      </p>
      <br></br>
      <p className="text-center">
        <GuestButton />
      </p>
    </div>
  );
};

export default InteractionScreen;
