import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/school-logo.png";

export function SplashScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center gradient-hero"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full gradient-primary blur-2xl opacity-50 animate-pulse" />
              <img src={logo} alt="UPT SD Negeri 060851" width={120} height={120} className="relative h-28 w-28 rounded-full bg-white p-2 shadow-elegant" />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">UPT SD Negeri</p>
              <p className="text-2xl font-extrabold text-foreground mt-1">060851 · Medan</p>
            </div>
            <div className="mt-2 h-1 w-32 rounded-full bg-secondary overflow-hidden">
              <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 1.4, ease: "easeInOut" }} className="h-full w-1/2 gradient-primary" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}