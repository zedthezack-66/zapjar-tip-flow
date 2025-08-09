import { useState } from "react";
import QRCode from "react-qr-code";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface QRCodePanelProps {
  lnurl: string;
  onTipped: (amountSat?: number) => void;
}

const QRCodePanel = ({ lnurl, onTipped }: QRCodePanelProps) => {
  const [amount, setAmount] = useState<string>("");

  const handleConfirm = () => {
    const amt = amount.trim() ? Number(amount) : undefined;
    onTipped(Number.isFinite(amt as number) ? (amt as number) : undefined);
    setAmount("");
  };

  return (
    <section aria-label="Lightning Tip" className="w-full">
      <div className="mx-auto max-w-md">
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-[var(--shadow-glow)]">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground mb-4">
              Scan this QR code with your Lightning wallet to tip any amount instantly.
            </p>
            <figure className="flex flex-col items-center gap-4">
              <div className="rounded-lg p-4 border bg-background">
                <QRCode value={lnurl} size={220} fgColor="currentColor" bgColor="transparent" />
              </div>
              <figcaption className="text-xs text-muted-foreground">Static LNURL‑pay QR</figcaption>
            </figure>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="amount">Tip amount (sats, optional)</Label>
                <Input
                  id="amount"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="e.g. 1000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
                />
              </div>
              <Button variant="hero" onClick={handleConfirm} className="w-full">
                I sent a tip
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QRCodePanel;
