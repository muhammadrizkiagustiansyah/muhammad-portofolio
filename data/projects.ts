export interface ProjectFeature {
  role: string;
  items: string[];
}

export interface Screenshot {
  image: string;
  type: "desktop" | "mobile";
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  period: string;
  tools: string[];
  logo: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  screenshots: Screenshot[];
}

export const projects: Project[] = [
  {
    slug: "nyamanin",
    title: "Nyaman.In",
    role: "UI/UX Designer & Fullstack Developer",
    period: "Sep 2024 — Jan 2025",
    tools: ["Figma", "Laravel", "PHP", "MySQL", "XAMPP", "UI/UX Design", "User Flow", "Wireframing"],
    logo: "/images/projects/nyamanin/logo.png",
    description:
      "A web-based boarding house search platform designed to provide students with a simple, intuitive, and user-friendly experience for discovering and exploring accommodation options.",
    overview:
      "Nyaman.In is a web project focused on creating a straightforward boarding house search experience for students. The project involved designing user flows and wireframes in Figma, backed by a robust Laravel and MySQL database architecture.",
    problem:
      "Finding a suitable boarding house can be challenging when accommodation information is scattered and difficult to compare. Students may need to go through multiple sources before finding a place that matches their needs.",
    solution:
      "Designed a centralized and user-friendly boarding house search interface that organizes accommodation information into a clear and accessible experience.",
    features: [
      {
        role: "User (Pencari Kost)",
        items: [
          "Authentication (Login & Register)",
          "Eksplorasi & pencarian detail kost",
          "Pemesanan kamar kost",
          "Pembayaran sewa kost",
        ],
      },
      {
        role: "Mitra Kost (Pemilik)",
        items: [
          "Dashboard Manajemen",
          "Pasang & kelola properti kost",
          "Manajemen penghuni & status kamar",
        ],
      },
    ],
    screenshots: [
      { image: "/images/projects/nyamanin/1.png", type: "desktop" },
      { image: "/images/projects/nyamanin/2.png", type: "desktop" },
      { image: "/images/projects/nyamanin/3.png", type: "desktop" },
      { image: "/images/projects/nyamanin/4.png", type: "desktop" },
    ],
  },
  {
    slug: "telkomeat",
    title: "TelkomEat",
    role: "Frontend Developer & Project Manager",
    period: "Sep 2025 — Jan 2026",
    tools: ["Next.js", "Tailwind CSS", "Laravel", "PHP", "Node.js", "MySQL", "XAMPP", "REST API"],
    logo: "/images/projects/telkomeat/logo.jpeg",
    description:
      "A campus food ordering application designed to provide students with a responsive and interactive platform for browsing food options and placing orders conveniently.",
    overview:
      "TelkomEat is a web-based food ordering platform developed for a campus environment using Next.js, Tailwind CSS, and a Laravel backend running on a Node.js and XAMPP environment.",
    problem:
      "Students need a convenient way to discover available food options and place orders within the campus environment.",
    solution:
      "Developed a responsive web-based food ordering platform that provides an intuitive interface for browsing food options and managing orders.",
    features: [
      {
        role: "User (Mahasiswa / Dosen)",
        items: [
          "Authentication (Login & Register)",
          "Eksplorasi menu dari berbagai kantin",
          "Pemesanan & pemrosesan pesanan",
          "Transaksi QR / Tunai dengan upload bukti transfer",
        ],
      },
      {
        role: "Mitra Kantin & Admin",
        items: [
          "Dashboard analitik (Grafik Penjualan & Pendapatan)",
          "Manajemen Menu (CRUD, status Aktif/Habis)",
          "Manajemen Pesanan (Verifikasi bukti bayar & pembatalan)",
          "Pengaturan Operasional Kantin (Buka/Tutup Toko Realtime)",
        ],
      },
    ],
    screenshots: [
      { image: "/images/projects/telkomeat/1.jpeg", type: "desktop" },
      { image: "/images/projects/telkomeat/2.jpeg", type: "desktop" },
      { image: "/images/projects/telkomeat/3.jpeg", type: "desktop" },
      { image: "/images/projects/telkomeat/4.jpeg", type: "mobile" },
    ],
  },
  {
    slug: "room-booking",
    title: "Meeting Room Booking Portal",
    role: "Fullstack Developer & UI/UX Designer",
    period: "Jul 2025 — Aug 2025",
    tools: ["CodeIgniter 4", "PHP", "MySQL", "XAMPP", "JavaScript", "HTML/CSS", "Figma"],
    logo: "/images/projects/room-booking/logo.png",
    description:
      "A fullstack web portal developed for Diskominfotik KBB to streamline meeting room reservations, scheduling, and facility management for government employees.",
    overview:
      "Developed during an internship at Diskominfotik Kabupaten Bandung Barat, this web application simplifies meeting room availability tracking, scheduling, and user access control using a CodeIgniter 4 backend and MySQL database.",
    problem:
      "The meeting room reservation process needed a centralized digital system to avoid schedule overlaps, manage room capacities, and monitor reservation logs efficiently.",
    solution:
      "Designed UI/UX mockups in Figma and built a fullstack application using CodeIgniter 4 (PHP) and MySQL to deliver an intuitive reservation portal with real-time schedule checks and admin analytics.",
    features: [
      {
        role: "User (Pegawai)",
        items: [
          "Authentication (Login & Register)",
          "Dashboard jadwal rapat pribadi",
          "Pemasukan & pemesanan ruangan rapat",
          "Cek ketersediaan ruangan berdasarkan tanggal & jam",
          "Riwayat pemesanan ruangan",
        ],
      },
      {
        role: "Admin",
        items: [
          "Dashboard monitoring (Grafik pemesanan, pesanan terbaru & log aktivitas)",
          "User Access Control (Kelola akun pegawai)",
          "Manajemen Fasilitas & Ruangan Rapat",
        ],
      },
    ],
    screenshots: [
      { image: "/images/projects/room-booking/1.png", type: "desktop" },
      { image: "/images/projects/room-booking/2.png", type: "desktop" },
      { image: "/images/projects/room-booking/3.png", type: "desktop" },
      { image: "/images/projects/room-booking/4.png", type: "mobile" },
    ],
  },
  {
    slug: "washup",
    title: "WashUp Laundry App",
    role: "Fullstack Developer & Project Manager",
    period: "Feb 2025 — Jun 2025",
    tools: ["Flutter", "Dart", "Laravel API", "MySQL", "Gemini API", "AI Navigation Model", "Midtrans Payment"],
    logo: "/images/projects/washup/logo.jpeg",
    description:
      "An end-to-end mobile laundry service ecosystem integrated with AI route navigation for couriers, Gemini API chatbot assistance, and automated payment gateways.",
    overview:
      "WashUp is a multi-role mobile application connecting customers, administrators, and couriers. Built with Flutter for cross-platform mobile frontend and Laravel REST API for backend services, the application features an AI-powered delivery route optimization model and a Gemini-powered AI chatbot consultant.",
    problem:
      "Manual laundry operations suffer from inefficient courier dispatch routes, lack of real-time order tracking, and delayed customer support inquiries.",
    solution:
      "Architected a complete mobile solution featuring automated payment processing, real-time status tracking, an AI routing algorithm for couriers to minimize pickup time, and an AI customer service assistant powered by Google Gemini API.",
    features: [
      {
        role: "User (Pelanggan)",
        items: [
          "Authentication (Login & Register)",
          "Pemesanan layanan laundry & kalkulasi kuantitas",
          "Integrasi Payment Gateway",
          "Real-time Tracking Status Pesanan (Penjemputan, Pencucian, Pengantaran)",
          "AI Chatbot Assistant (Integrasi Gemini API) untuk konsultasi layanan",
        ],
      },
      {
        role: "Admin",
        items: [
          "Dashboard kelola pesanan & status operasional",
          "Manajemen Penugasan Kurir",
          "Manajemen User, Tarif, & Jenis Layanan",
          "Laporan Keuangan & Riwayat Transaksi",
        ],
      },
      {
        role: "Kurir (Courier)",
        items: [
          "Authentication Kurir",
          "Model AI Navigasi Rute optimal ke lokasi pelanggan",
          "Konfirmasi & pencatatan pembayaran tunai di tempat",
        ],
      },
    ],
    screenshots: [
      { image: "/images/projects/washup/1.png", type: "mobile" },
      { image: "/images/projects/washup/2.jpg", type: "mobile" },
      { image: "/images/projects/washup/3.jpg", type: "mobile" },
    ],
  },
];