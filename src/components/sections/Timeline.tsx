import { motion } from "framer-motion";

const events = [
  { year: "1910", title: "Pendirian Sekolah", text: "UPT SD Negeri 060851 didirikan pada masa awal abad ke-20 di Medan." },
  { year: "1945", title: "Era Kemerdekaan", text: "Menjadi bagian dari sistem pendidikan dasar Republik Indonesia." },
  { year: "1985", title: "Modernisasi Fasilitas", text: "Penambahan ruang kelas dan perpustakaan untuk menunjang pembelajaran." },
  { year: "2013", title: "Kurikulum 2013", text: "Mulai menerapkan kurikulum tematik integratif berbasis karakter." },
  { year: "2020", title: "Akreditasi B", text: "Memperoleh akreditasi B sebagai pengakuan mutu pendidikan." },
  { year: "2026", title: "Smart School Era", text: "Hadir secara digital melalui platform Smart School Dashboard." },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Perjalanan Kami</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
            Lebih dari <span className="text-gradient-red">115 tahun</span> mendidik generasi
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />
          <div className="space-y-10">
            {events.map((e, i) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex sm:items-center gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                <div className="hidden sm:block w-1/2" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full gradient-primary shadow-glow-red ring-4 ring-background" />
                <div className="flex-1 pl-12 sm:pl-0 sm:px-8">
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant transition">
                    <p className="text-3xl font-extrabold text-gradient-red">{e.year}</p>
                    <h3 className="mt-2 text-lg font-bold text-foreground">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}