import { Clock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export type Tip = {
  id: string;
  amount?: number; // sats
  timestamp: string; // ISO
};

interface RecentTipsFeedProps {
  tips: Tip[];
}

const RecentTipsFeed = ({ tips }: RecentTipsFeedProps) => {
  return (
    <section aria-label="Recent tips" className="w-full">
      <div className="mx-auto max-w-md">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold mb-3">Recent tips</h2>
            <div className="grid gap-3">
              {tips.length === 0 && (
                <p className="text-sm text-muted-foreground">No tips yet — be the first to zap!</p>
              )}
              {tips.map((t) => (
                <div key={t.id} className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-2">
                    <Zap className="text-brand-purple" />
                    <span className="font-medium">{t.amount ? `${t.amount.toLocaleString()} sats` : `Anonymous tip`}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={14} />
                    <time dateTime={t.timestamp}>{new Date(t.timestamp).toLocaleTimeString()}</time>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RecentTipsFeed;
