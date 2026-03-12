import { SOCIAL } from "@/source/config";
import Link from "next/link";
import Logo from "../reusables/Logo";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-white/5">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <Logo className="w-6 h-6" />
        <span className="font-mono font-bold tracking-tighter text-sm">ELPIS</span>
      </div>

      <div className="flex gap-6 text-sm">
        <Link href="/" className="max-sm:hidden text-white/20 hover:text-brand-primary transition-colors">Home</Link>
        <Link href="/about" className="text-white/20 hover:text-brand-primary transition-colors">About</Link>
        <Link href="/projects" className="text-white/20 hover:text-brand-primary transition-colors">Projects</Link>
        <Link href="/skills" className="text-white/20 hover:text-brand-primary transition-colors">Skills</Link>
        <Link href="/contact" className="text-white/20 hover:text-brand-primary transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        <a href={SOCIAL.github} target="_blank" className="text-white/20 hover:text-brand-primary transition-colors">
          <Github size={14} />
        </a>
        <a href={SOCIAL.linkedin} target="_blank" className="text-white/20 hover:text-brand-primary transition-colors">
          <Linkedin size={14} />
        </a>
        <a href={SOCIAL.twitter} target="_blank" className="text-white/20 hover:text-brand-primary transition-colors">
          <Twitter size={14} />
        </a>
      </div>

      <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest">
        &copy; {new Date().getFullYear()} FESTUS GBOLADE
      </p>
    </div>
  </footer>
);

export default Footer;