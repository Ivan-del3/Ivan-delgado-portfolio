import { useEffect, useState } from "react";

export default function SubmitButton() {
  const [enabled, setEnabled] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (window.__recaptchaVerified) {
      setEnabled(true);
      return;
    }

    const onVerified = () => setEnabled(true);
    window.addEventListener("recaptcha:verified", onVerified);

    return () => {
      window.removeEventListener("recaptcha:verified", onVerified);
    };
  }, []);

  useEffect(() => {
    const onSubmit = () => setSubmitting(true);
    document.addEventListener("submit", onSubmit);
    return () => document.removeEventListener("submit", onSubmit);
  }, []);

  return (
    <button
      type="submit"
      disabled={!enabled || submitting}
      className={`
        mt-6 px-5 py-2.5 rounded-full
        font-semibold tracking-wide text-sm
        transition-all duration-200
        shadow-sm

        ${
          enabled && !submitting
            ? `
              bg-[#1E1F30] text-[#f0ece9]
              hover:bg-[#6366F1]
              hover:shadow-md
              active:scale-[0.98]
              cursor-pointer
            `
            : `
              bg-[#d6d3cf]
              text-[#2b2b2b]/60
              cursor-not-allowed
              shadow-none
            `
        }
      `}
    >
      {submitting ? "Enviando…" : "Enviar mensaje"}
    </button>
  );
}
