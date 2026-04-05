import { motion } from "framer-motion";

export default function PetitionStats({ signatures, joursRestants, objectif }) {
  const cards = [
    {
      label: "Signatures",
      value: signatures,
      accent: "from-[#007a3d] to-[#0f6b45]",
    },
    {
      label: "Jours restants",
      value: joursRestants,
      accent: "from-[#ce1126] to-[#a50d20]",
    },
    {
      label: "Objectif",
      value: objectif.toLocaleString("fr-FR"),
      accent: "from-[#f0c400] to-[#c59b16]",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {cards.map((card, index) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200"
        >
          <div
            className={`mb-4 h-2 w-20 rounded-full bg-gradient-to-r ${card.accent}`}
          />
          <p className="text-sm font-medium text-slate-500">{card.label}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {card.value}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}
