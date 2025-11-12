import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  

  const redirectToEditorOrLogin = () => {
    if (isAuthenticated) {
      navigate('/editor');
    } else {
      navigate('/login');
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl">{t("homepage.welcomeMessage")}</h1>
      <p>{t("homepage.description")}</p>
      <Button className="mt-4" onClick={redirectToEditorOrLogin}>
        {t("homepage.getStartedButton")}
      </Button>
    </div>
  );
};