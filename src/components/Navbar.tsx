import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import logo from "@/assets/school-logo.png";

const links = [
  { href: "#hero", label: "Beranda" },
  { href: "#about", label: "Profil" },
  { href: "#timeline", label: "Sejarah" },
  { href: "#facilities", label: "Fasilitas" },
  { href: "#academic", label: "Akademik" },
  { href: "#gallery", label: "Galeri" },
  { href: "#location", label: "Lokasi" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`glass rounded-2xl shadow-soft transition-all ${scrolled ? "px-4 py-2" : "px-5 py-3"}`}>
          <div className="flex items-center justify-between gap-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full gradient-primary blur-md opacity-40 group-hover:opacity-70 transition" />
                <img src={logo} alt="UPT SD Negeri 060851" width={40} height={40} className="relative h-10 w-10 rounded-full bg-white p-1 shadow-soft" />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">UPT SD Negeri</p>
                <p className="text-sm font-bold text-foreground">060851 · Medan</p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-lg hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle theme"
                className="h-10 w-10 grid place-items-center rounded-xl bg-secondary text-secondary-foreground hover:bg-muted transition"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <a
                href="#chatbot"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold shadow-glow-red hover:scale-[1.03] transition-transform"
              >
                AI Chat
              </a>
              <button
                className="lg:hidden h-10 w-10 grid place-items-center rounded-xl bg-secondary"
                onClick={() => setOpen((o) => !o)}
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="lg:hidden mt-3 grid grid-cols-2 gap-1 pt-3 border-t border-border"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-lg hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
            </motion.nav>
          )}
        </div>
      </div>
    </motion.header>
  );
}