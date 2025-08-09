import { Github, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";

const FooterBrand = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto max-w-4xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} ZapJar Inc.</span>
        </div>
        <nav aria-label="Social" className="flex items-center gap-3">
          <a className="p-2 rounded-md hover:bg-accent" href="https://twitter.com/zapjar" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter />
          </a>
          <a className="p-2 rounded-md hover:bg-accent" href="https://github.com/zapjar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a className="p-2 rounded-md hover:bg-accent" href="https://www.linkedin.com/company/zapjar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default FooterBrand;
