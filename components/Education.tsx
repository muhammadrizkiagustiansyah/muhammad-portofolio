"use client";

import { useState } from "react";
import { FileText, X } from "lucide-react";

export default function Education() {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <section id="education" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-violet-400 text-sm mb-4">EDUCATION</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Academic Background
        </h2>

        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-zinc-900 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-violet-400">Sep 2022 — Jul 2026</p>

            <h3 className="text-3xl font-bold mt-4">
              Telkom University Purwokerto
            </h3>

            <p className="text-zinc-400 mt-3">
              Bachelor of Informatics Engineering
            </p>

            <div className="mt-8 inline-flex px-5 py-3 rounded-full bg-violet-500/10 text-violet-300 font-medium">
              GPA: 3.72 / 4.00
            </div>
          </div>

          {/* TOMBOL TRANSKRIP */}
          <div>
            <button
              onClick={() => setShowTranscript(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition duration-300"
            >
              <FileText size={18} className="text-violet-400" />
              View Transcript
            </button>
          </div>
        </div>
      </div>

      {/* MODAL TRANSKRIP PDF */}
      {showTranscript && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setShowTranscript(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowTranscript(false)}
              className="absolute -top-12 right-0 md:right-2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
              aria-label="Close transcript"
            >
              <X size={22} />
            </button>

            {/* HEADER MODAL */}
            <div className="w-full mb-4">
              <h3 className="text-xl md:text-2xl font-bold">
                Academic Transcript
              </h3>
              <p className="text-zinc-400 text-sm mt-1">
                Telkom University Purwokerto — Informatics Engineering
              </p>
            </div>

            {/* IFRAME PDF */}
            <div className="w-full h-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/10">
              <iframe
                src="/documents/2211102325_TS.pdf"
                title="Academic Transcript"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}