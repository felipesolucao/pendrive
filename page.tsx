"use client";

import { useEffect, useState } from "react";

// ---------------------------------------------------------------
// CONFIG — troque aqui o link do WhatsApp e do checkout
// ---------------------------------------------------------------
const WHATSAPP_LINK = "https://wa.me/5500000000000";
const CHECKOUT_BASICO = "#";
const CHECKOUT_COMBO = "#";

function IconCheck() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M10 2l7 3v5c0 4.5-3 7.5-7 8-4-0.5-7-3.5-7-8V5l7-3z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M11 2L4 12h5l-1 6 7-10h-5l1-6z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFolder() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h3.5l1.5 2H16a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 16 16H4a1.5 1.5 0 0 1-1.5-1.5v-9z" strokeLinejoin="round" />
    </svg>
  );
}

function IconDevices() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="11" height="9" rx="1.2" />
      <path d="M6 16h3" strokeLinecap="round" />
      <rect x="15" y="6" width="3.2" height="10" rx="0.8" />
    </svg>
  );
}

function IconClean() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="10" cy="10" r="7.2" />
      <path d="M7 10l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.7l-5.3 2.9 1.1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 4v12M4 10h12" strokeLinecap="round" />
    </svg>
  );
}

// ---------------------------------------------------------------
// Signature visual: pen drive com equalizador (identidade da marca)
// ---------------------------------------------------------------
function PendriveGlyph() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="0" width="14" height="26" rx="3" fill="#5a97ff" />
      <rect x="20" y="4" width="10" height="6" rx="1.5" fill="#060a12" />
      <rect x="0" y="24" width="164" height="96" rx="16" fill="#0e1626" stroke="#2a3c5f" strokeWidth="2" />
      <rect x="14" y="40" width="136" height="64" rx="10" fill="#0b1220" />
      <circle cx="130" cy="72" r="10" fill="none" stroke="#33e6ff" strokeWidth="2" />
      <circle cx="130" cy="72" r="3" fill="#33e6ff" />
      <rect x="26" y="56" width="72" height="6" rx="3" fill="#2f6fed" />
      <rect x="26" y="70" width="52" height="6" rx="3" fill="#233355" />
      <rect x="26" y="84" width="60" height="6" rx="3" fill="#233355" />
    </svg>
  );
}

const FOLDERS = [
  { label: "Funk Automotivo Atualizado", count: "1.200+ faixas" },
  { label: "Funk RS & Funk SC", count: "800+ faixas" },
  { label: "Pancadão pra Som Grande", count: "650+ faixas" },
  { label: "Sertanejo Raiz e Universitário", count: "900+ faixas" },
  { label: "Sets de DJs Renomados", count: "40+ sets" },
  { label: "Clássicos Remasterizados", count: "500+ faixas" },
];

const BENEFITS = [
  {
    icon: <IconBolt />,
    title: "Atualização mensal",
    desc: "Todo mês entram faixas novas no catálogo, sem custo extra pra quem já comprou o combo.",
  },
  {
    icon: <IconDevices />,
    title: "Toca em qualquer lugar",
    desc: "Pendrive, central multimídia, celular ou computador — organizado pra funcionar de primeira.",
  },
  {
    icon: <IconClean />,
    title: "Sem vinheta de DJ",
    desc: "Faixas limpas, em até 320kbps, prontas pra tocar sem interromper o embalo.",
  },
  {
    icon: <IconFolder />,
    title: "Organização por pasta",
    desc: "Cada estilo na sua pasta, com nomes claros. Você acha a música em segundos.",
  },
  {
    icon: <IconShield />,
    title: "Entrega garantida",
    desc: "Acesso liberado na hora após a confirmação do PIX, direto no seu WhatsApp.",
  },
  {
    icon: <IconStar />,
    title: "Curadoria própria",
    desc: "Repertório escolhido a dedo pra quem realmente manda o som alto no carro.",
  },
];

const TESTIMONIALS = [
  {
    name: "Diego M.",
    loc: "Caxias do Sul, RS",
    text: "Pedi de manhã e à tarde já tava tudo no pendrive do carro. Organização por pasta ajuda demais a achar o que eu quero.",
  },
  {
    name: "Anderson R.",
    loc: "Joinville, SC",
    text: "Comprei o combo e valeu cada centavo. Tem música pra qualquer parada, do pancadão ao sertanejo pra ouvir em casa.",
  },
  {
    name: "Vinícius T.",
    loc: "Londrina, PR",
    text: "Já troquei de fornecedor umas três vezes até achar um catálogo bem atualizado de verdade. Esse tá sempre em dia.",
  },
  {
    name: "Kauê S.",
    loc: "Chapecó, SC",
    text: "Sem vinheta, sem propaganda no meio da música. Isso pra mim já vale a compra, fora que é bem baratinho.",
  },
  {
    name: "Everton P.",
    loc: "Pelotas, RS",
    text: "Atendimento respondeu rápido no WhatsApp quando tive uma dúvida pra baixar. Recomendo sem medo.",
  },
  {
    name: "Rodrigo A.",
    loc: "Cascavel, PR",
    text: "Melhor custo-benefício que já vi pra quem gosta de renovar o repertório do som automotivo com frequência.",
  },
];

const FAQS = [
  {
    q: "Como eu recebo o conteúdo depois de comprar?",
    a: "Assim que o pagamento via PIX é confirmado, você recebe um link de acesso direto no WhatsApp e no e-mail cadastrado. É só baixar pro celular, computador ou pendrive.",
  },
  {
    q: "Em qual formato e qualidade vêm as músicas?",
    a: "Todas as faixas são entregues em MP3, qualidade de até 320kbps, organizadas em pastas por estilo — sem vinheta e sem propaganda no meio.",
  },
  {
    q: "Funciona na central multimídia do meu carro?",
    a: "Sim. Basta copiar as pastas pra um pendrive comum e conectar na entrada USB da central. Também funciona em celular Android, iPhone e computador.",
  },
  {
    q: "O combo recebe atualização depois da compra?",
    a: "Sim, o Combo Completo dá direito a novas levas de atualização mensal sem custo adicional, enquanto a promoção estiver ativa.",
  },
  {
    q: "E se eu tiver algum problema pra baixar?",
    a: "É só chamar no WhatsApp que o suporte te ajuda a acessar o conteúdo — sem burocracia.",
  },
];

function Countdown() {
  const [time, setTime] = useState({ h: 5, m: 0, s: 0 });

  useEffect(() => {
    const end = Date.now() + (5 * 3600 + 0 * 60 + 0) * 1000;
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ h, m, s });
    };
    const id = setInterval(tick, 1000);
    tick();
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="countdown-wrap">
      <span className="countdown-label">OFERTA EXPIRA EM</span>
      <div className="countdown-blocks">
        <div className="countdown-block">
          <div className="val">{pad(time.h)}</div>
          <div className="lbl">HORAS</div>
        </div>
        <div className="countdown-block">
          <div className="val">{pad(time.m)}</div>
          <div className="lbl">MIN</div>
        </div>
        <div className="countdown-block">
          <div className="val">{pad(time.s)}</div>
          <div className="lbl">SEG</div>
        </div>
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {FAQS.map((item, i) => (
        <div className="faq-item" key={i}>
          <button
            className="faq-q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
            <span className="icon"><IconPlus /></span>
          </button>
          {open === i && <div className="faq-a">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      {/* HEADER */}
      <header className="header">
        <div className="wrap header-inner">
          <div className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 20 20" fill="none" stroke="#050912" strokeWidth="2">
                <path d="M11 2L4 12h5l-1 6 7-10h-5l1-6z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              PEN DRIVE ATUALIZADO
              <span className="logo-sub">2026 · SOM AUTOMOTIVO</span>
            </span>
          </div>
          <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <span className="badge">
              <IconBolt />
              Entrega imediata via WhatsApp
            </span>
            <h1>
              Os melhores <span className="accent">packs de</span>
              <br />
              <span className="accent">músicas</span> pro seu som
            </h1>
            <p className="lead">
              Repertórios atualizados, sem vinhetas e organizados por estilo.
              Escolha o seu e receba na hora.
            </p>

            <div className="hero-price-row">
              <span className="price-old">R$ 49,90</span>
              <span className="price-new">R$ 14<span className="cents">,90</span></span>
              <span className="price-tag">à vista no PIX</span>
            </div>

            <div className="hero-cta-row">
              <a className="btn btn-primary btn-lg" href={CHECKOUT_BASICO}>
                Quero meu catálogo agora
              </a>
              <a className="btn btn-ghost btn-lg" href="#planos">
                Ver planos
              </a>
            </div>

            <div className="trust-row">
              <span><IconCheck /> +50 mil clientes</span>
              <span><IconShield /> Compra 100% segura</span>
              <span><IconBolt /> PIX instantâneo</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="eq-bars" aria-hidden="true">
                <div className="bar" /><div className="bar" /><div className="bar" />
                <div className="bar" /><div className="bar" /><div className="bar" /><div className="bar" />
              </div>
              <div className="pendrive"><PendriveGlyph /></div>
              <span className="visual-caption">SINCRONIZANDO CATÁLOGO...</span>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-section">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, r) => (
            <div key={r} style={{ display: "flex", gap: "48px" }}>
              <span>+8.000 MÚSICAS NO CATÁLOGO</span>
              <span>ENTREGA VIA WHATSAPP E E-MAIL</span>
              <span>COMPATÍVEL COM PENDRIVE, CELULAR E PC</span>
              <span>SEM VINHETA DE DJ</span>
              <span>ATUALIZAÇÃO MENSAL NO COMBO</span>
            </div>
          ))}
        </div>
      </div>

      {/* BENEFITS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Por que escolher a gente</div>
            <h2 className="section-title">Tudo pensado pra quem vive de som alto no carro</h2>
            <p className="section-sub">
              Nada de arquivo bagunçado ou música repetida. Aqui o catálogo é organizado,
              atualizado e chega rápido no seu WhatsApp.
            </p>
          </div>
          <div className="benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="benefit-card" key={i}>
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLDERS */}
      <section className="section-tight">
        <div className="wrap">
          <div className="folders-panel">
            <div>
              <div className="eyebrow">O que vem incluso</div>
              <h2 className="section-title" style={{ marginBottom: "20px" }}>
                Pastas organizadas por estilo
              </h2>
              <div className="folders-list">
                {FOLDERS.map((f, i) => (
                  <div className="folder-item" key={i}>
                    <IconFolder />
                    {f.label}
                    <span className="folder-count">{f.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="folders-stat">
              <div className="num">+8.000</div>
              <div className="label">faixas atualizadas, prontas pra tocar</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="planos">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Planos</div>
            <h2 className="section-title">Escolha seu pacote</h2>
            <p className="section-sub">Pagamento único, sem assinatura. Acesso liberado na hora.</p>
          </div>

          <div className="pricing-grid">
            <div className="plan-card">
              <div className="plan-name">Pack Essencial</div>
              <div className="plan-desc">Pra quem quer só o catálogo de funk sempre em dia.</div>
              <div className="plan-price-row">
                <span className="old">R$ 49,90</span>
                <span className="off">-70% OFF</span>
              </div>
              <div className="plan-price">R$ 14<small>,90</small></div>
              <div className="plan-pix">pagamento único à vista no PIX</div>
              <ul className="plan-features">
                <li><IconCheck /> +5.000 faixas de funk atualizado</li>
                <li><IconCheck /> Sets de mais de 30 DJs</li>
                <li><IconCheck /> Qualidade até 320kbps</li>
                <li><IconCheck /> Sem vinheta de DJ</li>
                <li><IconCheck /> Entrega imediata via WhatsApp</li>
              </ul>
              <a className="btn btn-ghost btn-block btn-lg" href={CHECKOUT_BASICO}>
                Comprar por R$ 14,90
              </a>
            </div>

            <div className="plan-card featured">
              <span className="plan-ribbon">MAIS VENDIDO</span>
              <div className="plan-name">Combo Completo</div>
              <div className="plan-desc">Catálogo inteiro + atualização mensal inclusa.</div>
              <div className="plan-price-row">
                <span className="old">R$ 64,80</span>
                <span className="off">-62% OFF</span>
              </div>
              <div className="plan-price">R$ 24<small>,90</small></div>
              <div className="plan-pix">pagamento único à vista no PIX</div>
              <ul className="plan-features">
                <li><IconCheck /> +8.000 faixas: funk, sertanejo e mais</li>
                <li><IconCheck /> Todas as pastas do catálogo</li>
                <li><IconCheck /> Atualização mensal inclusa</li>
                <li><IconCheck /> Qualidade até 320kbps, sem vinheta</li>
                <li><IconCheck /> Suporte prioritário no WhatsApp</li>
              </ul>
              <a className="btn btn-primary btn-block btn-lg" href={CHECKOUT_COMBO}>
                Quero o Combo Completo
              </a>
            </div>
          </div>

          <Countdown />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Quem já comprou</div>
            <h2 className="section-title">Clientes com o som sempre atualizado</h2>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-stars">
                  <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
                </div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="testi-person">
                  <div className="testi-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="loc">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Dúvidas frequentes</div>
            <h2 className="section-title">Perguntas frequentes</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-tight">
        <div className="wrap">
          <div className="final-cta">
            <h2>Renove seu repertório agora mesmo</h2>
            <p>Acesso imediato após a confirmação do PIX, direto no seu WhatsApp.</p>
            <a className="btn btn-primary btn-lg" href={CHECKOUT_COMBO}>
              Garantir meu catálogo agora
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-inner">
            <div className="logo">
              <span className="logo-mark">
                <svg viewBox="0 0 20 20" fill="none" stroke="#050912" strokeWidth="2">
                  <path d="M11 2L4 12h5l-1 6 7-10h-5l1-6z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>PEN DRIVE ATUALIZADO 2026</span>
            </div>
            <div className="footer-links">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
              <a href="#planos">Ver planos</a>
            </div>
          </div>
          <p className="footer-note">
            Produto digital com acesso imediato após a confirmação do pagamento. ©{" "}
            {new Date().getFullYear()} Pen Drive Atualizado 2026. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
