import { motion } from "framer-motion";
import { BookOpen, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Pendidikan Berkarakter", text: "Membentuk siswa cerdas, jujur, dan mandiri sejak usia dini." },
  { icon: BookOpen, title: "Kurikulum 2013", text: "Pembelajaran tematik integratif yang aktif dan menyenangkan." },
  { icon: ShieldCheck, title: "Lingkungan Aman", text: "Sekolah bersih, ramah anak, dan mengutamakan keselamatan siswa." },
  { icon: Sparkles, title: "Inspiratif", text: "Mendorong potensi, kreativitas, dan cita-cita tinggi setiap siswa." },
];

const profile = [
  ["NPSN", "10220784"],
  ["Akreditasi", "B"],
  ["Status", "Negeri"],
  ["Kurikulum", "Kurikulum 2013"],
  ["Berdiri", "1910"],
  ["Luas Lahan", "2.926 m²"],
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Tentang Sekolah</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Sekolah Dasar <span className="text-gradient-red">bersejarah</span> di jantung Kota Medan
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              UPT SD Negeri 060851 telah berdiri sejak tahun <strong className="text-foreground">1910</strong>
              dan berlokasi di Jl. Madong Lubis 1, Sei Kera Hilir II, Medan Perjuangan. Kami berkomitmen
              memberikan pendidikan dasar yang berkualitas, modern, dan berkarakter Indonesia.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {profile.map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{k}</p>
                  <p className="mt-1 text-base font-bold text-foreground">{v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-3xl gradient-card opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-2xl gradient-primary text-primary-foreground grid place-items-center shadow-glow-red">
                    <it.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}