import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function PetitionContent({ petitionText }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200 md:p-8"
    >
      <SectionTitle
        title="Texte de la pétition"
        subtitle="Prenez un moment pour lire le contenu avant de signer."
      />

      <div className="h-[420px] overflow-y-auto rounded-2xl bg-slate-50 p-5 text-[15px] leading-8 text-slate-700 md:p-6">
        {petitionText.split("\n").map((line, index) => (
          <p key={index} className="mb-3 whitespace-pre-line">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
