import { useTranslation } from "react-i18next";

const Proyects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3
        className="text-3xl font-bold text-center mb-2 transition-all duration-500 opacity-0 animate-fade-in text-accent"
        style={{
          color: "var(--color-accent)",
          animationDelay: "0.2s",
          animationFillMode: "forwards",
        }}
      >
        {t("proyects.title")}
      </h3>
    </div>
  );
};

export default Proyects;
