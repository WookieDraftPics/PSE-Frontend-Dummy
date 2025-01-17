import { useTranslation } from "react-i18next";
import { supportedLngs } from "./config";

function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="text-right">
      <div className="...">
        <select
          className="bg-backingGreen border border-black rounded shadow"
          value={i18n.resolvedLanguage}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.entries(supportedLngs).map(([code, name]) => (
            <option
              value={code}
              key={code}
              className="bg-backingGreen,
            "
            >
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LocaleSwitcher;
