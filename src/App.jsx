import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LanguageSwitcher from "./components/LanguageSwitcher";
import PetitionContent from "./components/PetitionContent";
import PetitionForm from "./components/PetitionForm";
import PetitionStats from "./components/PetitionStats";
import petitionText from "./data/petitionText";
import { getOrCreateVisitorId } from "./utils/visitorId";

export default function App() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    locality: "",
  });

  const [signatures, setSignatures] = useState(100000);
  const [joursRestants] = useState(8);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const objectif = 1000000;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.lastName || !formData.firstName) {
      alert(t("form.requiredAlert"));
      return;
    }

    if (!captchaChecked) {
      alert(t("form.captchaAlert"));
      return;
    }

    try {
      setIsSubmitting(true);

      const uuid = getOrCreateVisitorId();

      const response = await fetch(
        "https://test-tools.mrc-europe.com/v1/api/data/petitions/sign",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            locality: formData.locality,
            uuid,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Une erreur est survenue.");
        return;
      }

      setSignatures((prev) => prev + 1);

      alert(
        data.message ||
          t("form.success", {
            firstName: formData.firstName,
            lastName: formData.lastName,
          }),
      );

      setFormData({
        firstName: "",
        lastName: "",
        locality: "",
      });

      setCaptchaChecked(false);
    } catch (error) {
      console.error(error);
      alert("Impossible d'envoyer la signature au serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex justify-end">
          <LanguageSwitcher />
        </div>

        <HeroSection signatures={signatures} progress={progress} />

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <PetitionContent petitionText={petitionText} />

          <PetitionForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            captchaChecked={captchaChecked}
            setCaptchaChecked={setCaptchaChecked}
            isSubmitting={isSubmitting}
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
