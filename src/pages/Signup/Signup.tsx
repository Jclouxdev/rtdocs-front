import { O2auth } from "@/components/o2auth/O2auth";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { toast } from "sonner";
import z from "zod";
import { Check, Ellipsis } from "lucide-react";

type PasswordRules = {
  ruleName: string;
  ruleLabel: string;
  isValid: boolean;
};

export const Signup = () => {
  const { t } = useTranslation();
  const [passwordRules, setPasswordRules] = useState<PasswordRules[]>([]);

  useMemo(() => {
    setPasswordRules([
      {
        ruleName: "minLength",
        ruleLabel: t("signup.passwordRules.minLength", { min: 8 }),
        isValid: false,
      },
      {
        ruleName: "uppercase",
        ruleLabel: t("signup.passwordRules.uppercase"),
        isValid: false,
      },
      {
        ruleName: "symbol",
        ruleLabel: t("signup.passwordRules.symbol"),
        isValid: false,
      },
    ]);
    // TODO: Search for a way to clean recall validatePasswordRules()
    // validatePasswordRules()
  }, [t]);

  const validatePasswordRules = (password: string) => {
    const updatedRules = passwordRules.map((rule) => {
      switch (rule.ruleName) {
        case "minLength":
          return { ...rule, isValid: password.length >= 8 };
        case "uppercase":
          return { ...rule, isValid: /[A-Z]/.test(password) };
        case "symbol":
          return { ...rule, isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password) };
        default:
          return rule;
      }
    });
    setPasswordRules(updatedRules);
  }

  const signupFormSchema = z.object({
    email: z
      .email({ error: t("signup.emailInputsErrors.invalid") })
      .min(1, t("signup.emailInputsErrors.required"))
      .max(100, t("signup.emailInputsErrors.tooLong", { max: 100 })),
    username: z
      .string({ error: t("signup.usernameInputsErrors.required") })
      .min(3, { error: t("signup.usernameInputsErrors.tooShort", { min: 3 }) })
      .max(30, {
        error: t("signup.usernameInputsErrors.tooLong", { max: 30 }),
      }),
    password: z
      .string({ error: t("signup.passwordInputsErrors.required") })
      .min(8, { error: t("signup.passwordInputsErrors.tooShort", { min: 8 }) })
      .max(100, {
        error: t("signup.passwordInputsErrors.tooLong", { max: 100 }),
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: t("signup.passwordRules.uppercase"),
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: t("signup.passwordRules.symbol"),
      }),
    confirmPassword: z
      .string({ error: t("signup.confirmPasswordInputsErrors.required") })
      .min(8, {
        error: t("signup.confirmPasswordInputsErrors.tooShort", { min: 8 }),
      })
      .max(100, {
        error: t("signup.confirmPasswordInputsErrors.tooLong", { max: 100 }),
      }),
  }).superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: t("signup.confirmPasswordInputsErrors.noMatch"),
        path: ["confirmPassword"],
      });
    }
  });

  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onSubmit: signupFormSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success(
        t("signup.successfulSignupMessage", { email: value.email }),
        {
          classNames: {
            icon: "text-green-600 dark:text-green-400",
            content: "text-green-600 dark:text-green-400",
          },
        }
      );
    },
  });

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl mt-8">{t("signup.title")}</h1>
      <div className="flex">
        <div className="flex flex-col border-r px-5 gap-4 w-[360px]">
          <form
            id="signup-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} className="-mb-2">
                        {t("signup.emailLabel")}
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
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              <form.Field
                name="username"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} className="-mb-2">
                        {t("signup.usernameLabel")}
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        type="username"
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder={"SuperMan123"}
                        autoComplete="off"
                        className="bg-white"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
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
                        {t("signup.passwordLabel")}
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => {
                          field.handleChange(e.target.value)
                          validatePasswordRules(e.target.value)
                        }}
                        aria-invalid={isInvalid}
                        placeholder={"••••••••••••••••••"}
                        autoComplete="off"
                        className="bg-white"
                      />
                      <ul>
                        {passwordRules.map((rule) => (
                          <li
                            key={rule.ruleName}
                            className={`text-sm ${
                              rule.isValid ? "text-green-600 font-bold" : "text-gray-400"
                            }`}
                          >
                            {rule.isValid ? (
                              <Check className="inline-block w-4 h-4 mb-1 mr-2" />
                            ) : (
                              <Ellipsis className="inline-block w-4 h-4 mb-1 mr-2" />
                            )}
                            {rule.ruleLabel}
                          </li>
                        ))}
                      </ul>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              <form.Field
                name="confirmPassword"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} className="-mb-2">
                        {t("signup.confirmPasswordLabel")}
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
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>

          <Button
            className="mt-4 w-full font-bold"
            type="submit"
            form="signup-form"
          >
            {t("signup.submitButton")}
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4 w-[360px]">
          <div className="text-center">
            <p className="text-sm">{t("signup.footerNote")}</p>
            <NavLink
              className="text-blue-700 dark:text-blue-500 font-bold text-sm"
              to="/login"
            >
              {t("signup.footerNoteLink")}
            </NavLink>
          </div>
          <O2auth />
        </div>
      </div>
    </div>
  );
};
