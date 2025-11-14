import { useTranslation } from "react-i18next";

type Variants = "heading" | "bottomFixed";
type InBetaProps = {
  variant: Variants;
};

export const InBeta = ({ variant }: InBetaProps) => {
  const { t } = useTranslation();

  if (variant === "heading") {
    return (
      <div className="inline-block bg-yellow-100 dark:bg-[#281C02] text-yellow-900 dark:text-yellow-500 px-4 py-2 rounded-md border border-yellow-300 dark:border-yellow-500 border- mb-6">
        <p className="text-sm font-medium">{`🚧 ${t(
          "beta.warningMessage"
        )} 🚧`}</p>
      </div>
    );
  }
  if (variant === "bottomFixed") {
    return (
      <div className="fixed bottom-4 right-4 max-w-[320px] bg-yellow-100 dark:bg-[#281C02] text-yellow-900 border border-yellow-300 px-4 py-2 rounded-md z-50">
        <p className="text-sm font-medium">{`🚧 ${t(
          "beta.warningMessage"
        )} 🚧`}</p>
      </div>
    );
  }
};
