import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/ItNjv9hvxo3741JunKUi6n";

  function registrarClique() {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        origem: 'hero',
        botao: 'cta_principal',
      });
    }
  }

export default function HeroSection() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#202020] px-5 pb-8 pt-16 text-white sm:px-8 sm:pt-20">
      <div
        aria-hidden="true"
        className="hero-ambient pointer-events-none absolute inset-0 -z-10"
      />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/90 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-[#F27405] shadow-[0_0_12px_rgba(242,116,5,0.9)]" />
          <span>Ofertas reais e verificadas todos os dias</span>
        </div>

        <img
          src="/logo-branco.png"
          alt="Garimpei Shop"
          className="mt-6 h-auto  w-[min(53vw,280px)] sm:mt-10 sm:w-[min(52vw,340px)]"
        />

        <h1 className="mt-8 max-w-3xl text-[2rem] sm:text-[clamp(2rem,8.2vw,3.75rem)] font-extrabold leading-[1.14] tracking-[-0.045em] sm:mt-12">
          Chega de pagar caro
          <br className="hidden min-[390px]:block" /> em{" "}
          <span className="text-[#F27405]">produtos fitness</span>
        </h1>

        <p className="mt-4 max-w-2xl text-[0.688rem] leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
          Entre agora para o grupo e receba{" "}
          <span className="font-semibold text-white">cupons e ofertas imperdíveis</span>{" "}
          todos os dias em produtos fitness, calçados, eletrônicos e muito mais,
          de lojas confiáveis e verificadas!
        </p>

        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={registrarClique}
          className="animate-neon-pulse mt-8 inline-flex h-12 w-full max-w-[18rem] sm:max-w-[540px] items-center justify-center gap-[.5rem] rounded-[18px] bg-[#F27405] px-5 py-3 text-base font-semibold tracking-[-0.025em] text-white transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F27405] sm:mt-9 sm:min-h-[68px] sm:gap-3 sm:rounded-[22px] sm:text-2xl"
        >
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
            <MessageCircle aria-hidden="true" className="absolute h-8 w-8" strokeWidth={1.8} />
            <Phone aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <span>ENTRAR NO GRUPO AGORA</span>
        </a>

        <img
          src="/grupo-semluz-copia.png"
          alt="Ofertas, cupons exclusivos e produtos compartilhados no grupo Garimpei Shop"
          className="mt-4 h-auto w-full max-w-[440px] sm:mt-7 sm:max-w-[500px]"
        />

        <img
          src="/clientes.png"
          alt="Mais de 50.000 pessoas já economizam com a gente"
          className="mt-1 h-auto w-full max-w-[400px] sm:max-w-[700px] sm:mt-6"
        />
      </div>
    </main>
  );
}
