import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();
  const {t} = useTranslation()

  return (
    <div className="mt-40 gap-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">{t("notFound.title")}</h1>
      <p>{t("notFound.message")}</p>
      <Button 
      className="cursor-pointer"
      onClick={() => {
        navigate('/');
      }}>{t("notFound.homeLink")}</Button>
    </div>
  );
};