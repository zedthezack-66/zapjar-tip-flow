import { useCallback, useEffect, useMemo, useState } from "react";
import Confetti from "react-confetti";
import BackgroundBitcoin from "@/components/BackgroundBitcoin";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import QRCodePanel from "@/components/QRCodePanel";
import RecentTipsFeed, { Tip } from "@/components/RecentTipsFeed";
import FooterBrand from "@/components/FooterBrand";
import { toast } from "@/hooks/use-toast";

const LNURL = "lnurl1dp68gurn8ghj7mrww4exctnv9hxymrww4jhyctnv9hxymrww4jhyctnv9hxymrwvdhk6tmvde6x2ctv9skx7un0w4exctn";

const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
};

const Index = () => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleTipped = useCallback((amount?: number) => {
    const entry: Tip = {
      id: crypto.randomUUID(),
      amount,
      timestamp: new Date().toISOString(),
    };
    setTips((prev) => [entry, ...prev].slice(0, 20));
    setShowConfetti(true);
    toast({ title: "Thank you for your tip!", description: "We appreciate your support." });
    const t = setTimeout(() => setShowConfetti(false), 3200);
    return () => clearTimeout(t);
  }, []);

  // Simulate occasional anonymous tips to keep the feed lively
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random > 0.7) {
        const amt = Math.floor(100 * (1 + Math.random() * 49)); // 100-5000 sats
        handleTipped(amt);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [handleTipped]);

  const confettiColors = useMemo(
    () => [
      getComputedStyle(document.documentElement).getPropertyValue('--brand-yellow').trim(),
      getComputedStyle(document.documentElement).getPropertyValue('--brand-blue').trim(),
      getComputedStyle(document.documentElement).getPropertyValue('--brand-purple').trim(),
    ].map(hsl => `hsl(${hsl})`),
    []
  );

  return (
    <div className="relative min-h-screen">
      <BackgroundBitcoin />
      <header className="relative z-10">
        <div className="container mx-auto max-w-4xl px-4 py-6 flex items-center justify-between">
          <a href="#" aria-label="ZapJar Home" className="story-link">
            <Logo />
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10">
        <section className="container mx-auto max-w-3xl px-4 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in">
            ZapJar — Lightning Tip Jar
          </h1>
          <p className="mt-3 text-lg text-muted-foreground animate-fade-in">
            Tip any amount instantly via LNURL‑pay. No account, no hassle.
          </p>
        </section>

        <section className="px-4">
          <QRCodePanel lnurl={LNURL} onTipped={handleTipped} />
        </section>

        <div className="mt-10 px-4">
          <RecentTipsFeed tips={tips} />
        </div>
      </main>

      <FooterBrand />

      {showConfetti && width > 0 && height > 0 && (
        <Confetti width={width} height={height} numberOfPieces={220} recycle={false} colors={confettiColors} />
      )}
    </div>
  );
};

export default Index;
