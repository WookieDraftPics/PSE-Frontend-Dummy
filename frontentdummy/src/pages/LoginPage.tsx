import InteractionScreen from "../components/login/interactionScreen/InteractionScreen";
import SwitchScreen from "../components/login/SwitchScreen";

import { useTranslation } from "react-i18next";

function LoginPage() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-screen">
      <h2>{t("hello_world")}</h2>
      <div className="relative bg-backingGreen rounded-lg shadow w-50 h-2/3 p-12">
        <div className="absolute rounded-lg inset-y-0 left-0 w-5/12 bg-switchGreen shadow">
          <SwitchScreen />
        </div>
        <div>
          <InteractionScreen />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
