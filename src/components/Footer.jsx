import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-xl"
    >
      <div className="relative px-6 py-10 md:px-10">
        {/* LIGNE COULEURS CAMEROUN */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#007a3d] via-[#ce1126] to-[#fcd116]" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* COL 1 */}
          <div>
            <h3 className="mb-3 text-xl font-semibold">{t("footer.title")}</h3>
            <p className="text-sm leading-6 text-white/70">
              {t("footer.description")}
            </p>
          </div>

          {/* COL 2 */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              {t("footer.engagement")}
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>✔ {t("footer.items.one")}</li>
              <li>✔ {t("footer.items.two")}</li>
              <li>✔ {t("footer.items.three")}</li>
              <li>✔ {t("footer.items.four")}</li>
            </ul>
          </div>

          {/* COL 3 */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">{t("footer.rights")}</h3>
            <p className="text-sm leading-6 text-white/70">
              {t("footer.rightsText")}
            </p>
          </div>
        </div>

        {/* BAS FOOTER */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-white/60">
            {t("footer.copyright", { year })}
          </p>

          <p className="text-center text-xs text-white/40 md:text-right">
            {t("footer.bottom")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
