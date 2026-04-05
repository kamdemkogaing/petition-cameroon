import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function PetitionForm({
  formData,
  handleChange,
  handleSubmit,
  captchaChecked,
  setCaptchaChecked,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200 md:p-8"
    >
      <SectionTitle
        title="Signer la pétition"
        subtitle="Remplissez le formulaire ci-dessous pour ajouter votre soutien."
      />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Entrez votre nom"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#007a3d] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#ce1126] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Localité
          </label>
          <input
            type="text"
            name="localite"
            value={formData.localite}
            onChange={handleChange}
            placeholder="Votre localité"
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
              Je ne suis pas un robot
            </p>
            <p className="text-sm text-slate-500">
              Validation simulée de type reCAPTCHA
            </p>
          </div>

          <div className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-500 shadow-sm">
            reCAPTCHA
          </div>
        </label>

        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-[#007a3d] via-[#009246] to-[#ce1126] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.01] cursor-pointer"
        >
          Signer maintenant
        </button>
      </form>
    </motion.div>
  );
}
