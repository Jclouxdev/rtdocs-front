import { InBeta } from "@/components/inBeta/InBeta";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Trash2, ALargeSmall, Bold } from 'lucide-react';

export const Editor = () => {
  const [document, setDocument] = useState<string>("");
  const { t } = useTranslation();

  useMemo(() => {
    setDocument(localStorage.getItem('document') || '');
  }, []);

  const handleDocumentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDocument(e.target.value);
    localStorage.setItem('document', e.target.value);
  }

  const eraseDocument = () => {
    setDocument("");
    localStorage.removeItem('document');
  }

  const actionButtonClasses = "bg-transparent p-1 border border-gray-300 rounded cursor-pointer hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="p-8">
      <InBeta variant="heading"/>
      <h1 className="text-3xl mb-6">{t("editor.title")}</h1>
      <div className="flex flex-row w-full items-center gap-1">
        <button 
          onClick={eraseDocument}
          className={actionButtonClasses}
          disabled={true}
        >
          <ALargeSmall width={16} height={16} />
        </button>
        <button 
          onClick={eraseDocument}
          className={actionButtonClasses}
          disabled={true}
        >
          <Bold width={16} height={16} />
        </button>
        <button 
          onClick={eraseDocument}
          className={actionButtonClasses + "justify-self-end ml-auto"}
        >
          <Trash2 width={16} height={16} />
        </button>
      </div>
      <textarea 
        className="w-full h-[400px] mt-1 p-2 border border-gray-300 dark:border-[#373737] dark:bg-[#151515] rounded-md" 
        placeholder="Start editing..."
        onChange={(e) => handleDocumentChange(e)}
        value={document}
        ></textarea>
    </div>
  )
};