import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle, Sparkles } from "lucide-react";
import logo from "@/assets/school-logo.png";
import hero from "@/assets/hero-students.jpg";

const stats = [
  { label: "Tahun Berdiri", value: "1910" },
  { label: "Akreditasi", value: "B" },
  { label: "Guru & Staf", value: "10" },
  { label: "Ruang Kelas", value: "6" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden gradient-hero grain">
      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-40 -right-20 h-[360px] w-[360px] rounded-full bg-accent/25 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              SMART SCHOOL DASHBOARD · NPSN 10220784
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02]">
              <span className="block text-foreground">UPT SD Negeri</span>
              <span className="block text-gradient-red">060851 Medan</span>
              <span className="block text-2xl sm:text-3xl mt-4 font-semibold text-muted-foreground">
                Modern · Edukatif · Inspiratif · Berkarakter
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Platform digital sekolah dasar di Medan Perjuangan. Jelajahi profil, fasilitas,
              sejarah sejak <strong className="text-foreground">1910</strong>, dan tanyakan apa
              saja kepada asisten AI kami — semua dalam satu dashboard cerdas.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gradient-primary text-primary-foreground font-semibold shadow-glow-red hover:scale-[1.03] transition-transform">
                Jelajahi Sekolah <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#location" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass font-semibold text-foreground hover:bg-secondary transition">
                <MapPin className="h-4 w-4 text-primary" /> Lihat Lokasi
              </a>
              <a href="#chatbot" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition">
                <MessageCircle className="h-4 w-4" /> Chat dengan AI
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass rounded-2xl p-4 shadow-soft"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-gradient-red">{s.value}</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-6 gradient-primary opacity-30 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-border">
                <img
                  src={hero}
                  alt="Siswa SD berseragam merah putih di sekolah modern"
                  width={1600}
                  height={1100}
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Floating logo card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-5 left-5 glass rounded-2xl p-3 shadow-soft flex items-center gap-3"
                >
                  <img src={logo} alt="" width={44} height={44} className="h-11 w-11 rounded-full bg-white p-1" />
                  <div className="text-xs">
                    <p className="font-bold text-foreground">SD Negeri 060851</p>
                    <p className="text-muted-foreground">Sejak 1910 · Medan</p>
                  </div>
                </motion.div>

                {/* Floating live stat */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-5 right-5 glass rounded-2xl p-4 shadow-soft"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse-ring" />
                    LIVE
                  </div>
                  <p className="mt-1 text-sm font-bold text-foreground">07:00 – 13:00 WIB</p>
                  <p className="text-[11px] text-muted-foreground">Senin – Sabtu</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}