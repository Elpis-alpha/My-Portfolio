"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { ArrowRight, Check } from "lucide-react";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, SOCIAL } from "@/source/config";

const EMPTY = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all three fields.");
      return;
    }
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error(`The form isn't configured here. Please email ${SOCIAL.email} instead.`, { duration: 6000 });
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSent(true);
      setForm(EMPTY);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(`That didn't send. Please try again, or email ${SOCIAL.email}.`, { duration: 6000 });
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="flex min-h-[26rem] flex-col items-start justify-center" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-ok/15 text-ok">
          <Check size={22} />
        </span>
        <h2 className="display mt-6 text-5xl">Message received.</h2>
        <p className="prose-body mt-4 max-w-sm text-lg">
          Thank you for writing. I&rsquo;ll reply from {SOCIAL.email}.
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn btn-ghost mt-8">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate={false}>
      <div>
        <label htmlFor="contact-name" className="label">Your name</label>
        <input id="contact-name" name="name" required type="text" autoComplete="name" placeholder="Ada Lovelace" value={form.name} onChange={set("name")} className="field" />
      </div>
      <div>
        <label htmlFor="contact-email" className="label">Email</label>
        <input id="contact-email" name="email" required type="email" autoComplete="email" placeholder="ada@company.com" value={form.email} onChange={set("email")} className="field" />
      </div>
      <div>
        <label htmlFor="contact-message" className="label">What are you working on?</label>
        <textarea id="contact-message" name="message" required rows={5} placeholder="The team, the problem, and where I might fit." value={form.message} onChange={set("message")} className="field resize-none" />
      </div>
      <button type="submit" disabled={sending} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
        {sending ? "Sending…" : "Send message"} <ArrowRight size={16} className="nudge-x" />
      </button>
    </form>
  );
};

export default ContactForm;
