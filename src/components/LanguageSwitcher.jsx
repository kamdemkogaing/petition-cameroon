import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage("fr")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
          i18n.language === "fr"
            ? "bg-slate-900 text-white"
            : "bg-white text-slate-700 hover:bg-slate-100"
        }`}
      >
        {t("language.fr")}
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
          i18n.language === "en"
            ? "bg-slate-900 text-white"
            : "bg-white text-slate-700 hover:bg-slate-100"
        }`}
      >
        {t("language.en")}
      </button>
    </div>
  );
}
