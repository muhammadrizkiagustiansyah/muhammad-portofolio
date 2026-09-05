import { Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-violet-400 text-sm">CONTACT</p>

        <h2 className="text-5xl md:text-7xl font-bold mt-5">
          Let's work
          <br />
          together.
        </h2>

        <p className="text-zinc-400 max-w-xl mx-auto mt-8">
          Have a project in mind or want to collaborate? Feel free to get in
          touch with me.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {/* EMAIL */}
          <a
            href="mailto:riskydesta35@gmail.com"
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition flex items-center gap-2"
          >
            <Mail size={18} />
            Email Me
          </a>

          {/* WHATSAPP (Ubah nomor sesuai format 628xxx) */}
          <a
            href="https://wa.me/6281238967780"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition flex items-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/muhammad-rizki-agustiansyah-146213248/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition flex items-center gap-2"
          >
            <FaLinkedinIn size={18} />
            LinkedIn
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/muhammadrizkiagustiansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition flex items-center gap-2"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}