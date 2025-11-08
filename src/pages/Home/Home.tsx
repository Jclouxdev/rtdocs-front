import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="p-10">
      <h1 className="text-4xl">{t("homepage.welcomeMessage")}</h1>
      <p>{t("homepage.description")}</p>
    </div>
  );
};