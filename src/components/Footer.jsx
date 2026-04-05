import { motion } from "framer-motion";

export default function Footer() {
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
            <h3 className="text-xl font-semibold mb-3">Pétition citoyenne</h3>
            <p className="text-sm text-white/70 leading-6">
              Plateforme de mobilisation citoyenne dédiée à l’expression libre,
              pacifique et démocratique des citoyens camerounais.
            </p>
          </div>

          {/* COL 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Engagement</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>✔ Participation citoyenne</li>
              <li>✔ Transparence</li>
              <li>✔ Respect des droits humains</li>
              <li>✔ Inclusion de toutes les voix</li>
            </ul>
          </div>

          {/* COL 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Droits & Inclusion</h3>
            <p className="text-sm text-white/70 leading-6">
              Cette plateforme respecte les principes d’égalité, de
              non-discrimination et d’inclusion. Toute personne, sans
              distinction d’origine, de genre, ou de condition sociale, peut
              exprimer librement son opinion.
            </p>
          </div>
        </div>

        {/* BAS FOOTER */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {year} — Pétition Cameroun. Tous droits réservés.
          </p>

          <p className="text-xs text-white/40 text-center md:text-right">
            Plateforme citoyenne indépendante • Respect • Inclusion • Liberté
            d’expression
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
