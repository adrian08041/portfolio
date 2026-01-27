import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "adrianmessias62@gmail.com",
    href: "mailto:adrianmessias62@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (38) 9 9998-2176",
    href: "tel:+553899982176",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Patos de Minas - MG, Brasil",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/adrian08041", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/adrian-messias/",
    label: "LinkedIn",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "✓ Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-0.5 bg-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              // contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Tem um projeto em mente? Vamos conversar e transformar sua ideia em
            realidade
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.2,
            }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Vamos trabalhar juntos
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Estou sempre aberto a novos projetos e oportunidades. Se você tem
              uma ideia que gostaria de discutir, não hesite em entrar em
              contato.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="contact-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border-2 border-transparent flex items-center justify-center group-hover:border-primary/30 transition-all">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    <div className="font-medium text-foreground truncate">
                      {item.value}
                    </div>
                  </div>
                  {item.href !== "#" && (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-4">
                // social
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.3,
            }}
          >
            <form onSubmit={handleSubmit} className="solid-card p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-muted-foreground uppercase tracking-wide mb-2"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Seu nome completo"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-muted-foreground uppercase tracking-wide mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-muted-foreground uppercase tracking-wide mb-2"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Conte-me sobre seu projeto..."
                    rows={5}
                    required
                    className="form-input resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary h-auto"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
