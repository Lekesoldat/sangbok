import React from "react";
import { useTranslation } from "react-i18next";

const SettingsView = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div>{t("settingsHeader")}</div>
      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>
      <button type="button" onClick={() => changeLanguage("no")}>
        no
      </button>
    </div>
  );
};

export default SettingsView;
