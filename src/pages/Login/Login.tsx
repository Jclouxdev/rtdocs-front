import { O2auth } from "@/components/o2auth/O2auth";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import z from "zod";
import { useMutation } from "@tanstack/react-query";
import { AuthEndpoints } from "@/utils/endpoints";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { Ban } from 'lucide-react';

export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login: authLogin, isAuthenticated } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/editor');
    };
  }, [isAuthenticated, navigate]);

  const loginMutation = useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      const response = await fetch(AuthEndpoints.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      return await response.json();
    },
    onSuccess: (data) => {
      const token = data.access_token;
      const payload = JSON.parse(atob(token.split('.')[1]));
      
      authLogin(token, {
        email: payload.email,
        username: payload.username,
      });
      
      toast.success(t("login.successfulLoginMessage", { email: payload.email }), {
        classNames: {
          icon: "text-green-600 dark:text-green-400",
          content: "text-green-600 dark:text-green-400",
        },
      });

      navigate('/editor');
    },
    onError: () => {
      setError(t("login.unauthorizedMessage"));
    },
  });

  const loginFormSchema = z.object({
    email: z
      .email({ error: t("login.emailInputsErrors.invalid") })
      .min(1, t("login.emailInputsErrors.required"))
      .max(100, t("login.emailInputsErrors.tooLong", { max: 100 })),
    password: z
      .string({ error: t("login.passwordInputsErrors.required") })
      .min(1, t("login.passwordInputsErrors.required"))
      .max(100, t("login.passwordInputsErrors.tooLong", { max: 100 })),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginFormSchema,
    },
    onSubmit: async ({ value }) => {
      loginMutation.mutate(value);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl mt-8">{t("login.title")}</h1>
      <form
        id="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="w-[320px]"
      >
        <O2auth />

        <hr className="my-6"></hr>

        {error && (
          <div className="flex items-center gap-2 mb-4 px-4 py-2 text-red-600 dark:text-red-400 bg-red-100 dark:bg-[#170101] border border-red-600 dark:border-red-400 rounded-md text-sm">
            <Ban />
            <strong className="max-w-40">{error}</strong>
          </div>
        )}

        <FieldGroup>
          <form.Field
            name="email"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className="-mb-2">
                    {t("login.email")}
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    type="email"
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder={"email.example@gmail.com"}
                    autoComplete="off"
                    className="bg-white"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
          <form.Field
            name="password"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className="-mb-2">
                    {t("login.password")}
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="password"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder={"••••••••••••••••••"}
                    autoComplete="off"
                    className="bg-white"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>

        <Button
          className="mt-8 w-full font-bold"
          type="submit"
          form="login-form"
        >
          {t("login.submitButton")}
        </Button>

        <hr className="my-6"></hr>

        <div className="flex flex-col items-center justify-center text-sm">
          <p>{t("login.footerNote")}</p>
          <NavLink
            className="text-blue-700 dark:text-blue-500 font-bold"
            to="/signup"
          >
            {t("login.footerNoteLink")}
          </NavLink>
        </div>
      </form>
    </div>
  );
};
