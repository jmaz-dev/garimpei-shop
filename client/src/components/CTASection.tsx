import { MessageCircle, ArrowRight } from "lucide-react";

/**
 * CTA Section Component
 * Design Philosophy: Bold call-to-action with visual hierarchy and urgency
 * Focuses on WhatsApp community engagement
 */
export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-pink-500/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Main CTA Card */}
        <div className="rounded-3xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-sm p-12 md:p-16 text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-xl animate-pulse" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Não fique de fora das melhores ofertas
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Acesse nosso canal do WhatsApp e receba notificações em tempo real
              sobre as promoções e cupons exclusivos. Economize todos os dias!
            </p>
          </div>

          {/* Stats before CTA */}
          <div className="grid grid-cols-3 gap-4 py-8 border-y border-orange-500/20">
            <div>
              <p className="text-2xl font-bold text-orange-500">1000+</p>
              <p className="text-sm text-foreground/60">Membros</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">50+</p>
              <p className="text-sm text-foreground/60">Ofertas/mês</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">100%</p>
              <p className="text-sm text-foreground/60">Gratuito</p>
            </div>
          </div>

          {/* Primary CTA Button */}
          <button className="group w-full md:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-smooth hover:scale-105 glow-orange flex items-center justify-center gap-3 mx-auto">
            <span>📱 Entrar no WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
          </button>

          {/* Secondary text */}
          <p className="text-sm text-foreground/60">
            Cadastro gratuito • Sem compromisso • Cancele a qualquer momento
          </p>
        </div>

        {/* Bottom section with Instagram */}
        <div className="mt-12 text-center space-y-6">
          <div className="border-t border-border/50 pt-8">
            <p className="text-foreground/70 mb-4">Siga-nos também nas redes sociais</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#instagram"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-pink-500/30 text-pink-500 font-semibold hover:bg-pink-500/10 transition-smooth hover:border-pink-500/60"
              >
                <span>📸</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
