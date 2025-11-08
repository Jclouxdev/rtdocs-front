import { AppInput } from "@/components/input/AppInput";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const {t} = useTranslation();

  return (
  <div className="flex flex-col justify-center items-center gap-6">
    <h1 className="text-3xl">{t("login.title")}</h1>
    <form
      className="w-[320px]"
    >
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
      <Button className="mt-6 w-full">{t("login.submit")}</Button>
    </form>
  </div>
  );
};