import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "./SectionTitle";

export default function PetitionForm({
  formData,
  handleChange,
  handleSubmit,
  captchaChecked,
  setCaptchaChecked,
}) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200 md:p-8"
    >
      <SectionTitle title={t("form.title")} subtitle={t("form.subtitle")} />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            {t("form.lastname")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder={t("form.lastnamePlaceholder")}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#007a3d] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            {t("form.firstname")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder={t("form.firstnamePlaceholder")}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#ce1126] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            {t("form.city")}
          </label>
          <input
            type="text"
            name="localite"
            value={formData.localite}
            onChange={handleChange}
            placeholder={t("form.cityPlaceholder")}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#fcd116] focus:bg-white"
          />
        </div>

        <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:bg-slate-100">
          <input
            type="checkbox"
            checked={captchaChecked}
            onChange={() => setCaptchaChecked(!captchaChecked)}
            className="h-5 w-5 accent-[#007a3d]"
          />

          <div className="flex-1">
            <p className="font-medium text-slate-800">
              {t("form.captchaTitle")}
            </p>
            <p className="text-sm text-slate-500">{t("form.captchaText")}</p>
          </div>

          <div className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-500 shadow-sm">
            reCAPTCHA
          </div>
        </label>

        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-[#007a3d] via-[#009246] to-[#ce1126] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.01] cursor-pointer"
        >
          {t("form.submit")}
        </button>
      </form>
    </motion.div>
  );
}
