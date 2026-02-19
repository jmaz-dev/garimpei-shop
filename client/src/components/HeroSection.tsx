import { ArrowRight } from "lucide-react";

/** Link do grupo do WhatsApp — preencha quando tiver o link */
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KDj6CUZTWUVAoQPyfnzg8h?mode=gi_t";

/**
 * Redireciona para o link do grupo do WhatsApp (abre em nova aba).
 * Quando WHATSAPP_GROUP_LINK estiver preenchido, o usuário será redirecionado.
 */
function goToWhatsAppGroup() {
  const url = WHATSAPP_GROUP_LINK || "#";
  if (url.startsWith("http")) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }
}

/**
 * Hero Section Component
 * Design Philosophy: Bold typography, gradient text, playful emojis
 * Responsive layout with clear hierarchy and strong CTA
 */
export default function HeroSection() {
  return (
    <section className="min-h-screen px-4 flex flex-col bg-background relative overflow-hidden">
      {/* Badge fixo no topo */}
      <div className="flex justify-center mt-18 md:mt-32 shrink-0 fixed top-0 left-0 right-0 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          Bem-vindo ao Garimpei Shop
        </div>
      </div>

      {/* Conteúdo do hero centralizado no restante da página */}
      <div className="flex-1 flex items-center justify-center ">
        <div className="container mx-auto max-w-4xl relative z-1 ">
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-foreground flex items-center justify-center">
                <img src="/public/logo-branco.png" alt="Garimpei Shop" className="h-22  md:h-32 mx-auto mb-10" />
              </h1>

              {/* Subtitle with emojis */}
              <div className="space-y-0 text-lg md:text-xl text-foreground/80 font-medium">
                <p className="flex items-center justify-center">
                  <span className="text-xl font-bold uppercase">Pare de pagar caro.</span>
                </p>
                <p className="flex text-base items-center justify-center">
                  <span>Receba cupons de até 80% de desconto</span>
                </p>
                <p className="flex text-base items-center justify-center">
                  <span>direto no seu WhatsApp.</span>
                </p>
                {/* <p className="flex items-center justify-center gap-2">
                <span>🎉</span>
                <span>As ofertas relâmpago saem primeiro no WhatsApp</span>
              </p> */}
              </div>
            </div>

            {/* Description */}
            {/* <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Acesse o canal do WhatsApp e economize com as melhores promoções e
            cupons exclusivos. Somos uma comunidade dedicada a encontrar as
            melhores ofertas para você.
          </p> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                type="button"
                onClick={goToWhatsAppGroup}
                className="group px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-xl hover:shadow-lg hover:shadow-orange-500/40 transition-smooth hover:scale-105 glow-orange flex items-center justify-center gap-2"
              >
                <span>GRUPO DO WHATSAPP</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </button>

              {/* <button className="px-8 py-4 rounded-lg border-2 border-orange-500/30 text-orange-500 font-semibold text-base hover:bg-orange-500/10 transition-smooth hover:border-orange-500/60">
              Saiba Mais
            </button> */}
            </div>

            {/* Social Proof */}
            {/* <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-foreground/60 mb-4">Junte-se a nossa comunidade</p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">1000+</p>
                <p className="text-xs text-foreground/60">Membros ativos</p>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">50+</p>
                <p className="text-xs text-foreground/60">Ofertas/mês</p>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">24/7</p>
                <p className="text-xs text-foreground/60">Suporte</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
