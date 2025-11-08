import { useNavigate } from "react-router"
import { ModeToggle } from "../mode-toggle"
import { LanguageToggle } from "../language-toggle";

export const MainNav = () => {
  const navigate = useNavigate();

  return (
  <nav className="flex items-center gap-2 p-4">
    <button onClick={() => navigate('/')} className="cursor-pointer">
      <h4 className="text-2xl">RTDocs</h4>
    </button>
    <div className="ml-auto flex items-center gap-2">
      <ModeToggle />
      <LanguageToggle />
    </div>
  </nav>
  )
}