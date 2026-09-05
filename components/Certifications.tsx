"use client";

import { useState } from "react";
import { X, ZoomIn, FileText } from "lucide-react";

const certifications = [
  {
    title: "Deep Learning with Python",
    date: "March 7, 2026",
    image: "/images/certifications/deep-learning-python.jpg",
    pdf: null,
  },
  {
    title: "Machine Learning for Data Classification",
    date: "January 10, 2026",
    image: "/images/certifications/machine-learning-classification.jpg",
    pdf: null,
  },
  {
    title: "Machine Learning for Regression Analysis",
    date: "February 7, 2026",
    image: "/images/certifications/machine-learning-regression.png",
    pdf: null,
  },
  {
    title: "Machine Learning with Python",
    date: "December 13, 2025",
    image: "/images/certifications/machine-learning-python.jpg",
    pdf: null,
  },
  {
    title: "Telkom University TOEFL / E-PrT",
    date: "Score: 473",
    image: null, // Set null jika tidak ada preview JPG/PNG
    pdf: "/images/certifications/telkom-toefl.pdf",
  },
];

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certifications)[number] | null
  >(null);

  return (
    <section id="certifications" className="py-28 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <p className="text-violet-400 text-sm mb-4">CERTIFICATIONS</p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Certifications & Achievements
        </h2>

        <p className="text-zinc-400 max-w-2xl mt-6">
          A collection of certifications and professional achievements obtained
          throughout my academic and professional journey.
        </p>

        {/* CERTIFICATE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {certifications.map((certificate) => (
            <button
              key={certificate.title}
              onClick={() => setSelectedCertificate(certificate)}
              className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-violet-500/50 transition duration-300"
            >
              {/* CERTIFICATE PREVIEW */}
              <div className="relative aspect-[4/3] bg-zinc-800/80 overflow-hidden flex items-center justify-center">
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  /* CARD FALLBACK UNTUK PDF (JIKA KERTAS/GAMBAR TIDAK ADA) */
                  <div className="flex flex-col items-center justify-center gap-3 text-zinc-500 group-hover:text-violet-400 transition duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition">
                      <FileText size={32} />
                    </div>
                    <span className="text-xs uppercase font-medium tracking-wider text-zinc-400">
                      PDF Document
                    </span>
                  </div>
                )}

                {/* OVERLAY HOVER */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition duration-300 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium shadow-lg">
                    <ZoomIn size={16} />
                    View Certificate
                  </div>
                </div>
              </div>

              {/* CERTIFICATE INFO */}
              <div className="p-6">
                <h3 className="font-semibold text-lg">{certificate.title}</h3>

                <p className="text-sm text-zinc-500 mt-3 font-medium">
                  {certificate.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedCertificate(null)}
        >
          {/* MODAL CONTENT */}
          <div
            className="relative w-full max-w-5xl h-[85vh] flex flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-12 right-0 md:right-2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
              aria-label="Close certificate"
            >
              <X size={22} />
            </button>

            {/* CERTIFICATE TITLE */}
            <div className="w-full mb-4">
              <h3 className="text-xl md:text-2xl font-bold">
                {selectedCertificate.title}
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                {selectedCertificate.date}
              </p>
            </div>

            {/* FULL DISPLAY (PDF / IMAGE) */}
            <div className="w-full h-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center">
              {selectedCertificate.pdf ? (
                <iframe
                  src={selectedCertificate.pdf}
                  title={selectedCertificate.title}
                  className="w-full h-full rounded-2xl"
                />
              ) : (
                <img
                  src={selectedCertificate.image!}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}