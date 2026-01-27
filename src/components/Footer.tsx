import { Github, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/adrian08041", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/adrian-messias/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:adrianmessias62@gmail.com", label: "Email" },
];

const quickLinks = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contato", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-20 border-t border-border bg-card overflow-hidden">
      {/* Decorative massive text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[20vw] md:text-[15vw] font-bold leading-none text-foreground whitespace-nowrap lg:translate-x-10">
          ADRIAN MESSIAS
        </h1>
      </div>

      <div className="section-container relative z-10 px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-24 mb-12 md:mb-20">
          {/* Main CTA Section - Brutal Focus */}
          <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Tem um projeto <br />
              <span className="text-primary">em mente?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-center md:items-start">
              <a
                href="mailto:adrianmessias62@gmail.com"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 md:py-5 text-lg font-bold text-primary-foreground bg-primary overflow-hidden rounded-none skew-x-[-10deg] hover:bg-primary/90 transition-all duration-300 active:scale-95"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-x-[10deg]"></div>
                <span className="relative skew-x-[10deg] flex items-center gap-2">
                  INICIAR PROJETO{" "}
                  <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                </span>
              </a>

              <div className="flex items-center gap-6 px-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors hover:scale-125 duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="md:w-7 md:h-7" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">
              // sistema
            </h4>
            <ul className="space-y-4 font-mono text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-all flex items-center gap-2 hover:translate-x-2 duration-300"
                  >
                    <span className="text-primary opacity-0 hover:opacity-100 transition-opacity">
                      &gt;
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">
              // contato_direto
            </h4>
            <ul className="space-y-4 font-mono text-sm text-muted-foreground">
              <li className="flex flex-col gap-1">
                <span className="text-xs text-white/30">EMAIL</span>
                <a
                  href="mailto:adrianmessias62@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  adrianmessias62@gmail.com
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs text-white/30">PHONE</span>
                <a
                  href="tel:+553899982176"
                  className="hover:text-primary transition-colors"
                >
                  +55 (38) 9 9998-2176
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs text-white/30">LOCATION</span>
                <span>Patos de Minas - MG, BR</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Brutal Divider */}
        <div className="border-t-2 border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-white/40">
          <p>© {currentYear} ADRIAN_MESSIAS. ALL_RIGHTS_RESERVED.</p>
          <div className="flex gap-4">
            <span>V.2.0.24</span>
            <span>BUILD_ID: 8X92</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
