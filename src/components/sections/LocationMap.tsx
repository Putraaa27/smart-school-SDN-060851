import { motion } from "framer-motion";
import { ExternalLink, MapPin, Navigation } from "lucide-react";

const ADDRESS = "Jl. Madong Lubis 1, Sei Kera Hilir II, Medan Perjuangan, Medan, Sumatera Utara";
const MAPS_QUERY = encodeURIComponent("UPT SD Negeri 060851 Medan");
const EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const DIRECT = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

export function LocationMap() {
  return (
    <section id="location" className="relative py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Lokasi Sekolah</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Temukan kami di <span className="text-gradient-red">Medan Perjuangan</span>
            </h2>
            <div className="rounded-3xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl gradient-primary text-primary-foreground grid place-items-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{ADDRESS}</p>
              </div>
            </div>
            <a
              href={DIRECT}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-primary text-primary-foreground font-semibold shadow-glow-red hover:scale-[1.03] transition-transform"
            >
              <Navigation className="h-4 w-4" /> Buka Google Maps <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="lg:col-span-8 rounded-3xl overflow-hidden border border-border shadow-elegant min-h-[420px]"
          >
            <iframe
              title="Lokasi UPT SD Negeri 060851"
              src={EMBED}
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}