import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/school-logo.png";

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" width={56} height={56} className="h-14 w-14 rounded-full bg-background p-1.5" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] opacity-70">UPT SD Negeri</p>
                <p className="text-xl font-extrabold">060851 Medan</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-md leading-relaxed">
              Smart School Dashboard — platform digital resmi UPT SD Negeri 060851. Modern, edukatif,
              inspiratif, dan berkarakter sejak 1910.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="h-10 w-10 grid place-items-center rounded-xl bg-background/10 hover:bg-primary transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-4">Kontak</p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 opacity-70" /> Jl. Madong Lubis 1, Sei Kera Hilir II, Medan Perjuangan</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 opacity-70" /> (061) — Sekolah</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 opacity-70" /> info@sdn060851.sch.id</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-4">Navigasi</p>
            <ul className="space-y-2 text-sm">
              {["Beranda","Profil","Sejarah","Fasilitas","Galeri"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="opacity-80 hover:opacity-100 hover:text-primary transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-4">Identitas</p>
            <ul className="space-y-2 text-sm">
              <li>NPSN: <strong>10220784</strong></li>
              <li>Akreditasi: <strong>B</strong></li>
              <li>Berdiri: <strong>1910</strong></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-wrap items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} UPT SD Negeri 060851 Medan. All rights reserved.</p>
          <p>Built with ❤️ as a Smart School Dashboard.</p>
        </div>
      </div>
    </footer>
  );
}