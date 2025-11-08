import { NavLink, useNavigate } from "react-router"
import { ModeToggle } from "../mode-toggle"
import { LanguageToggle } from "../language-toggle";
import { useTranslation } from "react-i18next";

export const MainNav = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
  <nav className="flex items-center gap-2 p-4">
    <button onClick={() => navigate('/')} className="cursor-pointer">
      <h4 className="text-2xl">RTDocs</h4>
    </button>
    <div className="ml-auto flex items-center gap-2">
      <NavLink to="/login" className="mr-6">{t("mainNav.login")}</NavLink>
      <ModeToggle />
      <LanguageToggle />
    </div>
  </nav>
  )
}