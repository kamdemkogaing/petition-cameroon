import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroSection({ signatures, progress }) {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200"
    >
      <div className="relative flex min-h-[460px] items-center px-6 py-10 md:px-10 md:py-14">
        <div className="absolute inset-0 bg-[url('/maurice-kamto.jpg')] bg-no-repeat bg-[92%_center] bg-[length:auto_100%] md:bg-[100%_center] md:bg-[length:auto_100%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d2e]/95 via-[#0f6b45]/75 to-[#c59b16]/15" />

        <div className="relative z-10 max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
            {t("hero.badge")}
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("hero.title")}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="rounded-2xl bg-white px-5 py-3 shadow-lg">
              <p className="text-sm text-slate-500">{t("hero.initiatedBy")}</p>
              <p className="text-lg font-semibold text-slate-900">
                {t("hero.author")}
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 px-5 py-3 text-white backdrop-blur-md">
              <p className="text-sm text-white/80">{t("hero.mobilisation")}</p>
              <p className="text-lg font-semibold">{signatures} signatures</p>
            </div>
          </div>

          <div className="mt-8 max-w-xl rounded-2xl bg-white/12 p-4 backdrop-blur-md">
            <div className="mb-2 flex items-center justify-between text-sm text-white/90">
              <span>{t("hero.progress")}</span>
              <span>{progress}%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#007a3d] via-[#ce1126] to-[#fcd116] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-sm text-white/85">
              {t("hero.progressText")}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
