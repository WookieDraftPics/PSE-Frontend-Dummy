import { useState } from "react";

const defaultLocale = localStorage["locale"] ? localStorage["locale"] : "en"; // English is default locale if none is set
const localeList = [
  { name: "English", code: "en", lang: "English" },
  { name: "中文", code: "zh", lang: "Chinese" },
  { name: "русский", code: "ru", lang: "Russian" },
  { name: "Française", code: "fr", lang: "French" },
];

function LanguageMenu() {
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  const onChangeLanguage = (e: { target: { value: any } }) => {
    const selectedLocale = e.target.value;
    setCurrentLocale(selectedLocale);
    localStorage.setItem("locale", selectedLocale);
  };

  return (
    <p className="text-right">
      <select
        onChange={onChangeLanguage}
        defaultValue={currentLocale}
        className="bg-backingGreen border border-black rounded shadow"
      >
        {localeList.map((locale, index) => (
          <option
            key={index}
            value={locale.code}
            className="bg-backingGreen,
"
          >
            {locale.name}
          </option>
        ))}
      </select>
    </p>
  );
}

export default LanguageMenu;
