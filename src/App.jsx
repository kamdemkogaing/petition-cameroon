import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    localite: "",
  });

  const [signatures, setSignatures] = useState(5460);
  const [joursRestants] = useState(5);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const petitionText = `
Le peuple camerounais mérite une gouvernance plus juste, plus transparente
et plus proche de ses réalités quotidiennes.

Par cette pétition, nous exprimons notre volonté de soutenir une vision
nationale portée par le Président National Maurice Kamto.

Nous demandons :
- un meilleur respect des droits citoyens,
- une amélioration des conditions de vie,
- une gouvernance équitable,
- un engagement clair pour l'avenir du Cameroun.

En signant cette pétition, chaque citoyen apporte sa voix à une mobilisation
pacifique, républicaine et constructive pour le changement.

Votre signature compte.
`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nom || !formData.prenom) {
      alert("Veuillez remplir le nom et le prénom.");
      return;
    }

    if (!captchaChecked) {
      alert("Veuillez cocher la case reCAPTCHA.");
      return;
    }

    setSignatures((prev) => prev + 1);

    alert(
      `Merci ${formData.prenom} ${formData.nom}, votre signature a été enregistrée.`,
    );

    setFormData({
      nom: "",
      prenom: "",
      localite: "",
    });

    setCaptchaChecked(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* HERO */}
        <section className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200">
          <div className="relative min-h-[420px] flex items-center px-6 py-10 md:px-10 md:py-14">
            {/* IMAGE DROITE */}
            <div className="absolute inset-0 bg-[url('/maurice-kamto.jpg')] bg-no-repeat bg-[100%_center] bg-[length:auto_100%]"></div>

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-800/80 to-yellow-500/60"></div>

            {/* CONTENU */}
            <div className="relative z-10">
              <div className="max-w-3xl">
                <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                  Pétition citoyenne
                </span>

                <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                  Soutien national pour une vision nouvelle du Cameroun
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                  Exprimez votre engagement en signant cette pétition en ligne.
                  Chaque signature renforce une mobilisation citoyenne pacifique
                  pour le changement.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="rounded-2xl bg-white px-5 py-3 shadow-lg">
                    <p className="text-sm text-slate-500">Initiée par</p>
                    <p className="text-lg font-semibold text-slate-900">
                      Maurice Kamto — Président National du MRC
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/15 px-5 py-3 text-white backdrop-blur-md">
                    <p className="text-sm text-white/80">
                      Mobilisation en cours
                    </p>
                    <p className="text-lg font-semibold">
                      {signatures} signatures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENU */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          {/* TEXTE */}
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Texte de la pétition
              </h2>
              <p className="mt-2 text-slate-600">
                Prenez un moment pour lire le contenu avant de signer.
              </p>
            </div>

            <div className="h-[420px] overflow-y-auto rounded-2xl bg-slate-50 p-5 text-[15px] leading-8 text-slate-700 md:p-6">
              {petitionText.split("\n").map((line, index) => (
                <p key={index} className="mb-3 whitespace-pre-line">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Signer la pétition
              </h2>
              <p className="mt-2 text-slate-600">
                Remplissez le formulaire ci-dessous pour ajouter votre soutien.
              </p>
            </div>

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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-600 focus:bg-white"
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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-600 focus:bg-white"
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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-600 focus:bg-white"
                />
              </div>

              {/* CHECKBOX reCAPTCHA */}
              <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 hover:bg-slate-100">
                <input
                  type="checkbox"
                  checked={captchaChecked}
                  onChange={() => setCaptchaChecked(!captchaChecked)}
                  className="h-5 w-5 accent-green-700"
                />

                <div className="flex-1">
                  <p className="font-medium text-slate-800">
                    Je ne suis pas un robot
                  </p>
                  <p className="text-sm text-slate-500">
                    Validation simulée de type reCAPTCHA
                  </p>
                </div>

                <div className="rounded-xl bg-white px-3 py-2 text-xs text-slate-500 shadow-sm">
                  reCAPTCHA
                </div>
              </label>

              <button
                type="submit"
                className="w-full rounded-2xl bg-green-700 px-6 py-4 text-lg font-semibold text-white hover:bg-green-800 cursor-pointer"
              >
                Signer maintenant
              </button>
            </form>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-slate-500">Signatures</p>
            <h3 className="mt-2 text-3xl font-bold">{signatures}</h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-slate-500">Jours restants</p>
            <h3 className="mt-2 text-3xl font-bold">{joursRestants}</h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-slate-500">Objectif</p>
            <h3 className="mt-2 text-3xl font-bold">10 000</h3>
          </div>
        </section>
      </div>
    </div>
  );
}
