import { useTranslation } from "react-i18next";
import Github_Logo from "@/assets/github-mark.svg";
import Github_White_Logo from "@/assets/github-mark-white.svg";
import Google_Logo from "@/assets/google.png";
import { useTheme } from "../theme-provider";

export const O2auth = () => {
  const { t } = useTranslation();
  const theme = useTheme().theme;
  const isDarkTheme = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col gap-4 w-[320px]">
        {isDarkTheme ? (
          <button className="w-full bg-white dark:bg-[#151515] py-4 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-[#202020] flex items-center justify-center gap-6 cursor-pointer">
            <img src={Github_White_Logo} alt="GitHub Logo" className="w-8 h-8" />
            <span>{t("o2auth.github")}</span>
          </button>
        ) : (
          <button className="w-full bg-white dark:bg-[#151515] py-4 px-4 border rounded-lg hover:bg-gray-100  flex items-center justify-center gap-6 cursor-pointer">
            <img src={Github_Logo} alt="GitHub Logo" className="w-8 h-8" />
            <span>{t("o2auth.github")}</span>
          </button>
        )}
        <button className="w-full bg-white dark:bg-[#151515] py-4 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-[#202020] flex items-center justify-center gap-6 cursor-pointer">
          <img src={Google_Logo} alt="Google Logo" className="w-8 h-8" />
          <span>{t("o2auth.google")}</span>
        </button>
      </div>
    </div>
  );
};
