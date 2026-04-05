import { useMemo, useState } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PetitionContent from "./components/PetitionContent";
import PetitionForm from "./components/PetitionForm";
import PetitionStats from "./components/PetitionStats";
import petitionText from "./data/petitionText";

export default function App() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    localite: "",
  });

  const [signatures, setSignatures] = useState(5460);
  const [joursRestants] = useState(5);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const objectif = 10000;

  const progress = useMemo(() => {
    return Math.min(Math.round((signatures / objectif) * 100), 100);
  }, [signatures, objectif]);

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
        <HeroSection signatures={signatures} progress={progress} />

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <PetitionContent petitionText={petitionText} />

          <PetitionForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            captchaChecked={captchaChecked}
            setCaptchaChecked={setCaptchaChecked}
          />
        </section>

        <PetitionStats
          signatures={signatures}
          joursRestants={joursRestants}
          objectif={objectif}
        />

        <Footer />
      </div>
    </div>
  );
}
