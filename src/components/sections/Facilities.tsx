import { motion } from "framer-motion";
import {
  Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { BookOpen, Droplets, School, Users, Wifi, Zap } from "lucide-react";

const pieData = [
  { name: "Ruang Kelas", value: 6 },
  { name: "Perpustakaan", value: 1 },
  { name: "Toilet Guru", value: 4 },
  { name: "Toilet Siswa", value: 10 },
];
const COLORS = [
  "oklch(0.58 0.22 27)",
  "oklch(0.55 0.18 255)",
  "oklch(0.78 0.14 80)",
  "oklch(0.25 0.08 260)",
];

const barData = [
  { name: "Guru", value: 8 },
  { name: "Staf", value: 2 },
  { name: "Kelas", value: 6 },
  { name: "Perpus", value: 1 },
  { name: "Toilet G.", value: 4 },
  { name: "Toilet S.", value: 10 },
];

const utilities = [
  { icon: Wifi, label: "Internet", status: "Tersedia", ok: true },
  { icon: Zap, label: "Listrik", status: "Tersedia", ok: true },
  { icon: BookOpen, label: "Perpustakaan", status: "1 Ruang", ok: true },
  { icon: School, label: "Laboratorium", status: "Belum Tersedia", ok: false },
  { icon: Users, label: "Guru & Staf", status: "10 Orang", ok: true },
  { icon: Droplets, label: "Sanitasi", status: "14 Toilet", ok: true },
];

export function Facilities() {
  return (
    <section id="facilities" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Dashboard Fasilitas</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
            Infrastruktur sekolah, <span className="text-gradient-blue">divisualisasikan</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Analitik fasilitas real-time dengan pendekatan data science modern.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Pie chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft"
          >
            <h3 className="font-bold text-foreground">Distribusi Ruangan</h3>
            <p className="text-xs text-muted-foreground mb-4">Total 21 ruang</p>
            <div className="h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" innerRadius={50} outerRadius={90} paddingAngle={4}>
                    {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", background: "var(--card)" }} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 rounded-3xl border border-border bg-card p-6 shadow-soft"
          >
            <h3 className="font-bold text-foreground">Analitik Infrastruktur</h3>
            <p className="text-xs text-muted-foreground mb-4">Sumber daya & ruang</p>
            <div className="h-64">
              <ResponsiveContainer>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} />
                  <Tooltip cursor={{ fill: "oklch(0.55 0.18 255 / 0.08)" }} contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", background: "var(--card)" }} />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {barData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {utilities.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4 shadow-soft hover:shadow-elegant transition"
            >
              <div className={`h-12 w-12 rounded-xl grid place-items-center ${u.ok ? "gradient-primary text-primary-foreground shadow-glow-red" : "bg-muted text-muted-foreground"}`}>
                <u.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{u.label}</p>
                <p className="text-sm font-bold text-foreground">{u.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}