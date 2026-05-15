import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g1, title: "Bangunan Sekolah", h: "h-80" },
  { src: g2, title: "Ruang Kelas", h: "h-64" },
  { src: g3, title: "Perpustakaan", h: "h-64" },
  { src: g4, title: "Upacara Bendera", h: "h-80" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Galeri Sekolah</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">Momen <span className="text-gradient-red">terbaik</span> kami</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Suasana belajar, kegiatan sekolah, dan semangat siswa-siswi UPT SD Negeri 060851.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.figure
              key={it.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-elegant transition ${it.h}`}
            >
              <img src={it.src} alt={it.title} loading="lazy" width={800} height={600} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 text-background">
                <p className="text-xs uppercase tracking-wider opacity-80">UPT SD Negeri 060851</p>
                <p className="text-lg font-bold">{it.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}