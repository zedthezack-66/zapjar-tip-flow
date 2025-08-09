import { Bolt, Bitcoin } from "lucide-react";

const Logo = () => {
  return (
    <div className="inline-flex items-center gap-2 select-none">
      <div className="relative grid place-items-center">
        <Bitcoin className="text-brand-yellow" size={22} />
        <Bolt className="absolute text-brand-blue" size={16} />
      </div>
      <span className="text-lg font-semibold tracking-tight">ZapJar</span>
    </div>
  );
};

export default Logo;
