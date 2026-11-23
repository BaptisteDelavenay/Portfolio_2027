"use client";

import { useState, type SubmitEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-white/60 bg-white/40 px-4 py-3 backdrop-blur-md shadow-sm placeholder:text-muted focus:border-white focus:bg-white/60 focus:outline-none transition-colors disabled:opacity-60";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // avant le await
    const formData = new FormData(form);
    formData.append("access_key", "a6a2ae49-f078-4902-8a8d-2da7bc269508");

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!data.success) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-4xl flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Nom"
        required
        disabled={isSending}
        className={fieldClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        disabled={isSending}
        className={fieldClass}
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={6}
        disabled={isSending}
        className={`${fieldClass} resize-y`}
      />

      <div className="flex flex-wrap items-center justify-end gap-4">
        <AnimatePresence mode="wait">
          {(status === "success" || status === "error") && (
            <motion.p
              key={status}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className={`text-sm ${status === "success" ? "text-accent" : "text-red-600"}`}
            >
              {status === "success"
                ? "Message envoyé, merci !"
                : "Une erreur est survenue, réessayez plus tard."}
            </motion.p>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={isSending}
          className="flex items-center gap-2 rounded-lg bg-fg px-6 py-3 font-semibold text-white transition-all hover:bg-neutral-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          )}
          {isSending ? "Envoi…" : status === "success" ? "Envoyé ✓" : "Envoyer"}
        </button>
      </div>
    </form>
  );
}
