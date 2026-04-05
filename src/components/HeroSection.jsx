import { motion } from "framer-motion";

export default function HeroSection({ signatures, progress }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200"
    >
      <div className="relative flex min-h-[460px] items-center px-6 py-10 md:px-10 md:py-14">
        {/* IMAGE */}
        <div className="absolute inset-0 bg-[url('/maurice-kamto.jpg')] bg-no-repeat bg-[92%_center] bg-[length:auto_100%] md:bg-[100%_center] md:bg-[length:auto_100%]" />

        {/* COUCHES COULEURS CAMEROUN */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d2e]/95 via-[#0f6b45]/75 to-[#c59b16]/55" />

        <div className="relative z-10 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm"
          >
            Pétition citoyenne
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            Soutien national pour une vision nouvelle du Cameroun
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-4 max-w-2xl text-base leading-7 text-white/90 md:text-lg"
          >
            Exprimez votre engagement en signant cette pétition en ligne. Chaque
            signature renforce une mobilisation citoyenne pacifique pour le
            changement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <div className="rounded-2xl bg-white px-5 py-3 shadow-lg">
              <p className="text-sm text-slate-500">Initiée par</p>
              <p className="text-lg font-semibold text-slate-900">
                Maurice Kamto — Président National
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 px-5 py-3 text-white backdrop-blur-md">
              <p className="text-sm text-white/80">Mobilisation en cours</p>
              <p className="text-lg font-semibold">{signatures} signatures</p>
            </div>
          </motion.div>

          {/* BARRE DE PROGRESSION */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-8 max-w-xl rounded-2xl bg-white/12 p-4 backdrop-blur-md"
          >
            <div className="mb-2 flex items-center justify-between text-sm text-white/90">
              <span>Progression de la pétition</span>
              <span>{progress}%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#007a3d] via-[#ce1126] to-[#fcd116] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-sm text-white/85">
              Ensemble, avançons vers l’objectif citoyen.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
