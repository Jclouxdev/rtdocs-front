import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const {t} = useTranslation();

  return (
  <div>
    <h1>{t("login.title")}</h1>
    <Button>{t("login.submit")}</Button>
  </div>
  );
};