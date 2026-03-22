"use client";

import { useEffect, useRef } from "react";

export default function Presentation() {
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let deck: any;

    // Dynamic import to avoid SSR issues with Reveal.js accessing window
    const initReveal = async () => {
      const Reveal = (await import("reveal.js")).default;
      if (deckRef.current) {
        deck = new Reveal(deckRef.current, {
          hash: true,
          transition: 'slide',
          backgroundTransition: 'fade',
          controls: true,
          progress: true,
          center: true,
          margin: 0.1,
          disableLayout: false,
        });
        deck.initialize();
      }
    };

    initReveal();

    return () => {
      if (deck && typeof deck.destroy === 'function') {
        try { deck.destroy(); } catch (_) { }
      }
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.css');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap');
        
        /* BRB Seguros Design System Overrides */
        :root {
          --color-deep-blue: #002d59;
          --color-brand-blue: #003e7e;
          --color-primary-cyan: #00aeef;
          --color-light-cyan: #b9ebfe;
          --color-white: #ffffff;
          --color-gray-dark: #57564d;
          --color-gray-light: #f4f6f9;
          
          --font-primary: 'Montserrat', sans-serif;
          --gradient-action: linear-gradient(176.25deg, #003e7e 10%, #00aeef 100%);
          --gradient-dark: linear-gradient(111deg, rgba(0,45,89,1) 0%, rgba(0,20,50,0.95) 100%);
        }

        body {
          margin: 0;
          padding: 0;
        }

        .reveal {
          font-family: var(--font-primary) !important;
          background-color: var(--color-gray-light);
          color: var(--color-gray-dark);
        }

        /* Typography */
        .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
          font-family: var(--font-primary) !important;
          font-weight: 900 !important;
          font-style: italic !important;
          text-transform: uppercase !important;
          color: var(--color-deep-blue);
          margin-bottom: 1rem;
        }

        .reveal h1 { font-size: 3rem; text-shadow: 0px 4px 15px rgba(0,45,89,0.15); }
        .reveal h2 { font-size: 2.25rem; color: var(--color-brand-blue); }
        .reveal h3 { font-size: 1.8rem; color: var(--color-primary-cyan); }
        
        .reveal p, .reveal li {
          font-size: 1.1rem;
          color: var(--color-gray-dark);
          line-height: 1.5;
        }

        .reveal strong {
          color: var(--color-brand-blue);
          font-weight: 800;
        }

        .reveal ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .reveal ul li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1rem;
          text-align: left;
        }

        .reveal ul li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--color-primary-cyan);
          font-weight: 900;
          font-size: 1.2rem;
        }

        /* Dark Theme Background */
        .reveal .slide-background {
          background-color: var(--color-gray-light);
        }
        
        .bg-dark h1, .bg-dark h2, .bg-dark h3, .bg-dark p, .bg-dark li {
          color: var(--color-white);
          text-shadow: 0px 2px 10px rgba(0,0,0,0.5);
        }

        /* Components */
        .badge {
          display: inline-block;
          background: var(--gradient-action);
          color: var(--color-white);
          padding: 0.4rem 1.2rem;
          border-radius: 9999px;
          font-weight: 800;
          font-style: italic;
          font-size: 0.9rem;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          box-shadow: 0px 4px 10px rgba(0,174,239,0.3);
        }

        .card {
          background: var(--color-white);
          border-radius: 19px;
          padding: 2.5rem;
          box-shadow: 0px 12px 24px rgba(0, 45, 89, 0.15);
          border: 2px solid transparent;
          text-align: left;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          transition: all 0.3s ease;
        }
        
        .card:hover {
          border-color: var(--color-light-cyan);
          transform: translateY(-5px);
        }

        .card h2 {
          color: var(--color-primary-cyan);
          border-bottom: 3px solid var(--color-light-cyan);
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stat-card {
          background: var(--color-gray-light);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          border-left: 4px solid var(--color-primary-cyan);
        }

        .stat-card strong {
          display: block;
          font-size: 2rem;
          color: var(--color-brand-blue);
          font-weight: 900;
          font-style: italic;
          margin-bottom: 0.5rem;
        }

        .highlight-box {
          background: var(--color-light-cyan);
          padding: 1rem;
          border-radius: 12px;
          color: var(--color-deep-blue);
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .reveal .controls, .reveal .progress {
          color: var(--color-primary-cyan) !important;
        }
      `}} />

      <div className="reveal" ref={deckRef} style={{ height: "100vh" }}>
        <div className="slides">

          {/* Slide 1 - Capa */}
          <section data-transition="zoom" data-background-gradient="linear-gradient(111deg, rgba(0,45,89,1) 0%, rgba(0,20,50,0.95) 100%)" className="bg-dark">
            <span className="badge fragment fade-up">Muntz Martech • Março 2026</span>
            <h1 className="fragment fade-up">BRB Seguros Conecta</h1>
            <h2 className="fragment fade-up" style={{ color: "var(--color-primary-cyan)" }}>CRM de Alta Conversão<br />Para Seguro Pessoal (Vida)</h2>
            <p className="fragment fade-up" style={{ marginTop: "2rem", fontSize: "1.3rem", fontWeight: "500" }}>Transformando dados em apólices — com IA, automação e resultado mensurável.</p>
          </section>

          {/* Slide 2 - Objetivo */}
          <section data-transition="slide">
            <div className="card fragment fade-up">
              <h2>Seguro Pessoal: BRB Vida Super Premiada</h2>
              <div className="highlight-box">Foco na conversão do servidor / cliente consignado.</div>

              <ul>
                <li className="fragment fade-right"><strong>Gatilho (Trigger):</strong> Cliente consignado → Lead qualificado</li>
                <li className="fragment fade-right"><strong>Jornada em 4 etapas:</strong> Boas-vindas, benefícios, oferta e urgência</li>
                <li className="fragment fade-right"><strong>Upsell:</strong> BRB AP / Crédito Protegido</li>
              </ul>

              <div className="stat-grid fragment fade-up">
                <div className="stat-card">
                  <strong>+15%</strong>
                  Conversão (Vida)
                </div>
                <div className="stat-card">
                  <strong>+5%</strong>
                  Cross-sell (Auto)
                </div>
                <div className="stat-card">
                  <strong>+10%</strong>
                  Retenção (Vida)
                </div>
              </div>
            </div>
          </section>

          {/* Slide 3 - Jornada 1 */}
          <section data-transition="convex">
            <div className="card">
              <h2>1. Jornada de Ativação</h2>
              <p><span className="badge">Gatilho:</span> <strong>Cadastrou interesse em Vida mas não contratou.</strong></p>

              <ul>
                <li className="fragment fade-up"><strong>Boas-vindas:</strong> O que é BRB Vida Super Premiada e seus diferenciais.</li>
                <li className="fragment fade-up"><strong>Benefícios:</strong> Assistências reais, sorteios e cobertura em vida.</li>
                <li className="fragment fade-up"><strong>Oferta Personalizada:</strong> 10% off na 1ª parcela para servidores BRB.</li>
                <li className="fragment fade-up" style={{ color: "var(--color-primary-cyan)" }}><strong>Urgência (Último aviso):</strong> &quot;Sua proteção familiar ainda está esperando por você.&quot;</li>
              </ul>
            </div>
          </section>

          {/* Slide 4 - Jornada 2 */}
          <section data-transition="convex">
            <div className="card">
              <h2>2. Jornada de Recuperação</h2>
              <p><span className="badge" style={{ background: "var(--color-brand-blue)" }}>Gatilho:</span> <strong>Gerou cotação de Vida e não assinou (Carrinho Abandonado).</strong></p>

              <ul>
                <li className="fragment fade-up"><strong>Recuperação:</strong> &quot;Sua cotação BRB Vida está salva — finalize agora.&quot;</li>
                <li className="fragment fade-up"><strong>Quebra de objeção:</strong> &quot;Tem dúvidas? Veja as perguntas mais comuns.&quot;</li>
                <li className="fragment fade-up"><strong>Prova social:</strong> Depoimento de servidor que ativou o seguro e usou.</li>
                <li className="fragment fade-up" style={{ color: "var(--color-primary-cyan)" }}><strong>Oferta de saída:</strong> Desconto exclusivo de 15% válido por 24h.</li>
              </ul>
            </div>
          </section>

          {/* Slide 5 - Jornada 3 */}
          <section data-transition="convex">
            <div className="card">
              <h2>3. Jornada de Expansão (Cross-Sell)</h2>
              <p><span className="badge">Gatilho:</span> <strong>Tem Vida ativo → Oportunidade de ofertar Auto.</strong></p>

              <ul>
                <li className="fragment fade-up"><strong>Reconhecimento:</strong> Parabéns por 1 mês de proteção! Você conhece o BRB AUTO?</li>
                <li className="fragment fade-up"><strong>Benefício Exclusivo:</strong> 15% off no Auto para quem já tem Vida BRB.</li>
                <li className="fragment fade-up"><strong>Combo Completo:</strong> Proteja a família e o carro em um só banco.</li>
                <li className="fragment fade-up" style={{ color: "var(--color-primary-cyan)" }}><strong>Facilidade:</strong> Cotação em 1 clique com dados já preenchidos.</li>
              </ul>
            </div>
          </section>

          {/* Slide 6 - Jornada 4 */}
          <section data-transition="convex">
            <div className="card">
              <h2>4. Jornada de Retenção</h2>
              <p><span className="badge" style={{ background: "var(--color-brand-blue)" }}>Gatilho:</span> <strong>Apólice de Vida vence em 60 dias.</strong></p>

              <ul>
                <li className="fragment fade-up"><strong>Aviso Amigo:</strong> &quot;Sua proteção de Vida renova em 2 meses — tudo certo?&quot;</li>
                <li className="fragment fade-up"><strong>Benefício de Renovação:</strong> 10% off + manutenção das coberturas atuais.</li>
                <li className="fragment fade-up"><strong>Lembrete Urgente:</strong> Resumo das assistências usadas no ano.</li>
                <li className="fragment fade-up" style={{ color: "var(--color-primary-cyan)" }}><strong>Praticidade:</strong> Renovação com 1 clique (&quot;Confirme agora e não perca nenhum dia&quot;).</li>
              </ul>
            </div>
          </section>

          {/* Slide 7 - Resultados */}
          <section data-transition="zoom" data-background-gradient="linear-gradient(176.25deg, #003e7e 10%, #00aeef 100%)" className="bg-dark">
            <h1 className="fragment fade-up" style={{ color: "white", textShadow: "0px 4px 20px rgba(0,0,0,0.5)" }}>Meta Oficial</h1>
            <div className="fragment fade-up" style={{ display: "inline-block", background: "white", color: "var(--color-primary-cyan)", padding: "1rem 3rem", borderRadius: "999px", fontSize: "2.5rem", fontWeight: "900", fontStyle: "italic", margin: "2rem 0", boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}>
              +45% Conversão de Vida
            </div>

            <div className="fragment fade-up" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "19px", padding: "2rem", backdropFilter: "blur(10px)", textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
              <h3 style={{ color: "white", marginBottom: "1rem" }}>Próximos Passos:</h3>
              <ul style={{ color: "white" }}>
                <li><strong>Reunião Diagnóstico:</strong> Mapeamento da jornada atual e demonstração do CRM.</li>
                <li><strong>Piloto:</strong> Implementação do produto Vida com fluxos completos e relatórios.</li>
                <li><strong>Proposta Comercial:</strong> Pacotes Básico, Pro ou Enterprise, com SLA e métricas claras.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
