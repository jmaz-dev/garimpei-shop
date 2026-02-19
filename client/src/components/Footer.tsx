import { Heart } from "lucide-react";

/**
 * Footer Component
 * Design Philosophy: Clean, minimal footer with contact info and social links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-card border-t border-border py-12 px-4 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <div>
                <p className="font-display font-bold text-foreground">Garimpei</p>
                <p className="text-xs text-foreground/60">Shop</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Sua comunidade de economia e promoções exclusivas. Garimpe as
              melhores ofertas com a gente!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-foreground/70 hover:text-orange-500 transition-smooth"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#cta"
                  className="text-sm text-foreground/70 hover:text-orange-500 transition-smooth"
                >
                  Comunidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/70 hover:text-orange-500 transition-smooth"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/70 hover:text-orange-500 transition-smooth"
                >
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Conecte-se</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-green-500 transition-smooth"
              >
                <span>📱</span>
                <span>WhatsApp</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-pink-500 transition-smooth"
              >
                <span>📸</span>
                <span>Instagram</span>
              </a>
              <a
                href="mailto:contato@garimpei.shop"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-orange-500 transition-smooth"
              >
                <span>📧</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 py-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>
            © {currentYear} Garimpei Shop. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>para economizar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
