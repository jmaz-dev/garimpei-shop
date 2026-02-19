import { Zap, Users, Gift } from "lucide-react";

/**
 * Features Section Component
 * Design Philosophy: Card-based layout with hover effects and clear hierarchy
 * Showcases three main benefits with icons and descriptions
 */
export default function FeaturesSection() {
  const features = [
    {
      icon: "💰",
      title: "Economize Todos os Dias",
      description:
        "Acesso exclusivo a cupons e promoções que não encontra em lugar nenhum. Nossas ofertas relâmpago chegam primeiro aqui.",
      color: "from-orange-500/20 to-orange-600/10",
      borderColor: "border-orange-500/20",
    },
    {
      icon: "📱",
      title: "Comunidade WhatsApp",
      description:
        "Faça parte de uma comunidade ativa onde compartilhamos as melhores oportunidades de compra e economia.",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: "🎁",
      title: "Ofertas Exclusivas",
      description:
        "Receba notificações em tempo real sobre as melhores ofertas. Não perca nenhuma promoção importante.",
      color: "from-pink-500/20 to-pink-600/10",
      borderColor: "border-pink-500/20",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Por que se juntar ao Garimpei Shop?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Descubra os benefícios exclusivos de fazer parte da nossa comunidade
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border-2 ${feature.borderColor} bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:border-orange-500/40 transition-smooth hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-smooth" />

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="text-5xl">{feature.icon}</div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow indicator */}
                <div className="pt-4 flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-smooth">
                  <span>Saiba mais</span>
                  <span className="group-hover:translate-x-1 transition-smooth">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">
            Pronto para começar a economizar?
          </p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/40 transition-smooth hover:scale-105 glow-orange">
            Acessar Comunidade
          </button>
        </div>
      </div>
    </section>
  );
}
