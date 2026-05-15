import { motion } from "framer-motion";
import { CalendarDays, Clock, GraduationCap, ScrollText } from "lucide-react";

const cards = [
  { icon: GraduationCap, title: "Jenjang", value: "Sekolah Dasar (SD)", sub: "Kelas 1 – 6" },
  { icon: ScrollText, title: "Kurikulum", value: "Kurikulum 2013", sub: "Tematik Integratif" },
  { icon: CalendarDays, title: "Hari Operasional", value: "Senin – Sabtu", sub: "6 hari belajar" },
  { icon: Clock, title: "Jam Belajar", value: "07:00 – 13:00", sub: "WIB" },
];

const schedule = [
  ["Senin", "Upacara · Tematik · PJOK"],
  ["Selasa", "Tematik · Bahasa Indonesia · Matematika"],
  ["Rabu", "Tematik · IPA · Seni Budaya"],
  ["Kamis", "Tematik · IPS · PPKn"],
  ["Jumat", "Tematik · Bahasa Inggris · Pramuka"],
  ["Sabtu", "Ekstrakurikuler · Pengembangan Diri"],
];

export function Academic() {
  return (
    <section id="academic" className="relative py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Informasi Akademik</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">Belajar dengan <span className="text-gradient-red">terstruktur</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant transition"
            >
              <div className="h-11 w-11 rounded-xl gradient-accent text-accent-foreground grid place-items-center shadow-glow-blue">
                <c.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
              <p className="text-lg font-bold text-foreground">{c.value}</p>
              <p className="text-xs text-muted-foreground">{c.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-soft">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-foreground">Jadwal Mingguan</h3>
            <span className="text-xs text-muted-foreground">Tahun Pelajaran 2025/2026</span>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {schedule.map(([day, content], i) => (
                <tr key={day} className={i % 2 ? "bg-secondary/40" : ""}>
                  <td className="px-6 py-4 font-bold text-foreground w-32">{day}</td>
                  <td className="px-6 py-4 text-muted-foreground">{content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}