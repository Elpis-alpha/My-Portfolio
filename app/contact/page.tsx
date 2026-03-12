"use client";
import PageTransition from "@/source/components/reusables/PageTransition";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  SOCIAL,
} from "@/source/config";
import { motion, Variants } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Monitor,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Home() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("Email service is not configured properly.", {
        duration: 4000,
      });
      setIsSubmitting(false);
      return;
    } 
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill in all fields before submitting.", {
        duration: 4000,
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formState.name,
          message: formState.message,
          email: formState.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        toast.error("Failed to send message. Please try again later.", {
          duration: 4000,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              {"Let's "} <span className="text-brand-primary">Talk</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/60 mb-12 leading-relaxed"
            >
              Have a project in mind or just want to say hello? {" I'm "} always
              open to discussing new opportunities and innovative ideas.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail />,
                  label: "Email",
                  value: SOCIAL.email,
                  href: `mailto:${SOCIAL.email}`,
                },
                {
                  icon: <Phone />,
                  label: "Phone",
                  value: SOCIAL.phoneLine,
                  href: `tel:${SOCIAL.phoneLine}`,
                },
                {
                  icon: <MessageSquare />,
                  label: "WhatsApp",
                  value: "Chat on WhatsApp",
                  href: SOCIAL.whatsapp,
                },
                {
                  icon: <Send />,
                  label: "Telegram",
                  value: "@mr_elpis",
                  href: SOCIAL.telegram,
                },
                {
                  icon: <Monitor />,
                  label: "Binance Pay",
                  value: "Support via Crypto",
                  href: SOCIAL.binance,
                },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.01 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-card-dark border border-white/5 hover:border-brand-primary/30 transition-all group"
                >
                  <div className="p-4 rounded-2xl bg-white/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-bg-dark transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-12 flex gap-4">
              {[
                { icon: <Github />, href: SOCIAL.github },
                { icon: <Linkedin />, href: SOCIAL.linkedin },
                { icon: <Twitter />, href: SOCIAL.twitter },
                { icon: <Instagram />, href: SOCIAL.instagram },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:text-brand-primary hover:border-brand-primary/50 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card-dark p-10 rounded-[40px] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary to-transparent" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-white/60 mb-8">
                  Thank you for reaching out.{" I'll "}get back to you as soon
                  as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 bg-white text-bg-dark rounded-full font-bold hover:bg-brand-primary transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-2"
                >
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-2">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2"
                >
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-2"
                >
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-2">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                  />
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  disabled={isSubmitting}
                  className="w-full py-5 bg-brand-primary cursor-pointer text-bg-dark rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <Send size={20} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
