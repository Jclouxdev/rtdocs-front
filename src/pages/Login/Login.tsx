import { AppInput } from "@/components/input/AppInput";
import { O2auth } from "@/components/o2auth/O2auth";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export const Login = () => {
  const {t} = useTranslation();

  return (
  <div className="flex flex-col justify-center items-center gap-6">
    <h1 className="text-3xl mt-8">{t("login.title")}</h1>
    <form
      className="w-[320px]"
    >
      <O2auth />

      <hr className="my-6"></hr>

      <div className="grid gap-4">
        <AppInput 
          inputName="email"
          type="email"
          placeholder="email.example@gmail.com"
          inputLabel={t("login.email")}
        />
        <AppInput 
          inputName="password"
          type="password"
          placeholder="••••••••••••••••••"
          inputLabel={t("login.password")}
        />
      </div>
      <Button className="mt-6 w-full font-bold">{t("login.submit")}</Button>

      <hr className="my-6"></hr>

      <div className="flex flex-col items-center justify-center text-sm">
        <p>{t("login.footerNote")}</p>
        <NavLink className="text-blue-700 dark:text-blue-500 font-bold" to="/signup">{t("login.footerNoteLink")}</NavLink>
      </div>
    </form>
  </div>
  );
};