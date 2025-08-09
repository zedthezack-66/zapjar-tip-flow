import { Bitcoin } from "lucide-react";

const BackgroundBitcoin = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-20">
        <Bitcoin
          className="animate-spin-slower"
          size={560}
          strokeWidth={1}
        />
      </div>
    </div>
  );
};

export default BackgroundBitcoin;
