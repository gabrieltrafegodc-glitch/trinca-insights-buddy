import { useState, useEffect } from "react";
import {
  ChevronLeft, ChevronRight, TrendingUp, DollarSign, BarChart3, Zap,
  Target, CheckCircle, ArrowRight, Building2, Users, MessageSquare,
  Bot, Layers, ShieldCheck, Rocket, Globe, PieChart, Award, Briefcase,
  Monitor, Phone, ArrowUpRight, Eye, BookOpen, GraduationCap, Shield,
  Star, Cpu, Lock, AlertTriangle, Gift, UserPlus, Settings, Database,
  LayoutDashboard, Repeat, Coins
} from "lucide-react";
import logoAdhub from "@/assets/logo-adhub.jpeg";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart as RePieChart, Pie, Cell, Legend, LineChart, Line
} from "recharts";

/* ─── colour tokens scoped to this presentation ─── */
const c = {
  bg: "hsl(220 25% 6%)",
  bgCard: "hsl(220 25% 10%)",
  bgCardHover: "hsl(220 25% 13%)",
  border: "hsl(220 20% 18%)",
  accent: "hsl(265 85% 60%)",
  accentLight: "hsl(265 90% 72%)",
  accentGlow: "hsl(265 85% 60% / 0.15)",
  accentGlow2: "hsl(265 85% 60% / 0.25)",
  accentGlow3: "hsl(265 85% 60% / 0.08)",
  text: "hsl(0 0% 96%)",
  textMuted: "hsl(220 15% 55%)",
  green: "hsl(155 65% 48%)",
  greenGlow: "hsl(155 65% 48% / 0.15)",
  orange: "hsl(30 90% 55%)",
  orangeGlow: "hsl(30 90% 55% / 0.15)",
  gold: "hsl(45 90% 55%)",
  goldGlow: "hsl(45 90% 55% / 0.15)",
  red: "hsl(0 65% 55%)",
  blue: "hsl(210 90% 56%)",
  blueGlow: "hsl(210 90% 56% / 0.15)",
  pink: "hsl(340 75% 55%)",
  pinkGlow: "hsl(340 75% 55% / 0.15)",
};

/* ─── Slide wrapper ─── */
const Slide = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <div
    className={`absolute inset-0 transition-all duration-500 ${
      active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
    }`}
    style={{ background: c.bg }}
  >
    {children}
  </div>
);

/* ─── Metric pill ─── */
const Metric = ({ label, value, sub, color }: { label: string; value: string; sub?: string; color?: string }) => (
  <div
    className="rounded-xl p-4 border text-center"
    style={{
      background: c.bgCard,
      borderColor: color ? `${color}44` : c.border,
    }}
  >
    <p className="text-xs font-medium mb-1" style={{ color: c.textMuted }}>{label}</p>
    <p className="text-xl font-extrabold" style={{ color: color || c.text }}>{value}</p>
    {sub && <p className="text-[10px] mt-1" style={{ color: c.textMuted }}>{sub}</p>}
  </div>
);

/* ─── Bullet list ─── */
const BulletList = ({ items, icon: Icon = CheckCircle }: { items: string[]; icon?: any }) => (
  <ul className="space-y-2">
    {items.map((t, i) => (
      <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: c.text }}>
        <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: c.accent }} />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

/* ─── Section title ─── */
const SlideTitle = ({ num, title, sub }: { num: number; title: string; sub?: string }) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: c.accentGlow2, color: c.accentLight }}>
        {String(num).padStart(2, "0")}
      </span>
      {sub && <span className="text-xs" style={{ color: c.textMuted }}>{sub}</span>}
    </div>
    <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: c.text }}>{title}</h2>
  </div>
);

/* ─── Layer card ─── */
const LayerCard = ({ icon: Icon, title, desc, color, glow }: { icon: any; title: string; desc: string; color: string; glow: string }) => (
  <div className="rounded-xl p-4 border flex items-start gap-3" style={{ background: glow, borderColor: `${color}44` }}>
    <div className="p-2 rounded-lg shrink-0" style={{ background: `${color}22` }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <div>
      <p className="font-bold text-sm" style={{ color }}>{title}</p>
      <p className="text-xs mt-1" style={{ color: c.textMuted }}>{desc}</p>
    </div>
  </div>
);

/* ─── Flow step ─── */
const FlowStep = ({ num, text, icon: Icon }: { num: number; text: string; icon: any }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold" style={{ background: c.accentGlow2, color: c.accentLight }}>
      {num}
    </div>
    <Icon className="w-4 h-4 shrink-0" style={{ color: c.accent }} />
    <span className="text-sm" style={{ color: c.text }}>{text}</span>
  </div>
);

/* ─── Table ─── */
const DataTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="rounded-xl border overflow-hidden" style={{ borderColor: c.border }}>
    <table className="w-full text-sm">
      <thead>
        <tr style={{ background: c.bgCard }}>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-2.5 text-left font-semibold" style={{ color: c.accentLight, borderBottom: `1px solid ${c.border}` }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: i < rows.length - 1 ? `1px solid ${c.border}` : undefined }}>
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-2.5" style={{ color: j === 0 ? c.text : c.textMuted }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ─── Recharts colors ─── */
const COLORS = ["hsl(265 85% 60%)", "hsl(155 65% 48%)", "hsl(30 90% 55%)", "hsl(210 90% 56%)", "hsl(340 75% 55%)"];

/* ═══════════════════════════════════════════════ */
/*                    SLIDES                       */
/* ═══════════════════════════════════════════════ */

const slides = [
  /* ── SLIDE 1 — CAPA ── */
  () => (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[180px]" style={{ background: c.accentGlow }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[140px]" style={{ background: c.greenGlow }} />
      <img src={logoAdhub} alt="AD HUB" className="h-14 w-auto rounded-lg mb-8 relative z-10" />
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight relative z-10" style={{ color: c.text }}>
        Programa de Afiliados <span style={{ color: c.accent }}>AdHub</span>
      </h1>
      <p className="text-xl mt-3 font-bold relative z-10" style={{ color: c.accentLight }}>
        HubWebSite
      </p>
      <p className="text-base mt-4 max-w-xl relative z-10" style={{ color: c.textMuted }}>
        Implementação livre + comissão recorrente + prévia automática com IA
      </p>
      <div className="flex gap-3 mt-8 relative z-10 flex-wrap justify-center">
        {["Diretores", "Criadores de Curso", "Vendedores"].map((t) => (
          <span key={t} className="px-4 py-2 rounded-full text-sm font-semibold border" style={{ borderColor: c.accent, color: c.accentLight, background: c.accentGlow3 }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 2 — O PROBLEMA ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={2} title="O Problema do Mercado" sub="Contexto" />
      <div className="grid md:grid-cols-3 gap-5 mt-4">
        {[
          { icon: Globe, title: "Sem presença digital", desc: "Milhões de pequenas empresas não têm site profissional — perdem credibilidade e vendas todos os dias." },
          { icon: DollarSign, title: "Agência é caro e lento", desc: "Contratar agência custa R$ 3.000–R$ 15.000 + meses de espera. Inviável para PMEs." },
          { icon: AlertTriangle, title: "DIY é fraco", desc: "Ferramentas 'faça você mesmo' geram sites genéricos, sem SEO e sem conversão real." },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-5 border" style={{ background: c.bgCard, borderColor: c.border }}>
            <item.icon className="w-8 h-8 mb-3" style={{ color: c.accent }} />
            <p className="font-bold text-sm mb-2" style={{ color: c.text }}>{item.title}</p>
            <p className="text-xs" style={{ color: c.textMuted }}>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 rounded-xl border text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
        <p className="text-sm font-semibold" style={{ color: c.accentLight }}>
          Resultado: um oceano de clientes que precisam de site profissional, mas não têm solução acessível e rápida.
        </p>
      </div>
    </div>
  ),

  /* ── SLIDE 3 — A SOLUÇÃO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={3} title="A Solução: HubWebSite" sub="Produto" />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <BulletList items={[
            "Site profissional gerado com IA usando dados do Google Meu Negócio",
            "Publicação automática na Vercel (hospedagem rápida e segura)",
            "Painel de gestão intuitivo para o cliente",
            "Suporte técnico incluso na assinatura",
            "Entrega em minutos, não semanas",
            "SEO otimizado e design responsivo",
          ]} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-xl p-5 border" style={{ background: c.greenGlow, borderColor: `${c.green}44` }}>
            <Zap className="w-6 h-6 mb-2" style={{ color: c.green }} />
            <p className="font-bold text-sm" style={{ color: c.green }}>Resultado</p>
            <p className="text-xs mt-1" style={{ color: c.textMuted }}>
              Entrega rápida + aparência profissional + custo acessível = cliente satisfeito
            </p>
          </div>
          <div className="rounded-xl p-5 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
            <Cpu className="w-6 h-6 mb-2" style={{ color: c.accent }} />
            <p className="font-bold text-sm" style={{ color: c.accentLight }}>Automação Inteligente</p>
            <p className="text-xs mt-1" style={{ color: c.textMuted }}>
              IA puxa dados reais do negócio, gera código e publica — sem intervenção manual
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 4 — PRÉVIA MUDA O JOGO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={4} title='Como a "Prévia" Muda o Jogo' sub="Diferencial Competitivo" />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <BulletList icon={Eye} items={[
            "Vendedor gera um preview do site PRONTO antes do cliente comprar",
            "Cliente vê o resultado real — não uma promessa",
            "Reduz objeção e acelera o fechamento drasticamente",
            'Preview é ferramenta de VENDA, não o produto final',
          ]} />
          <div className="mt-5 p-4 rounded-xl border" style={{ background: c.bgCard, borderColor: c.border }}>
            <p className="text-xs font-semibold" style={{ color: c.orange }}>⚠ Custo operacional</p>
            <p className="text-xs mt-1" style={{ color: c.textMuted }}>
              Cada prévia custa <strong style={{ color: c.text }}>R$ 30</strong> — absorvido integralmente pela AdHub. Não é comissão de ninguém.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full rounded-xl border p-6 text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
            <Eye className="w-12 h-12 mx-auto mb-3" style={{ color: c.accent }} />
            <p className="text-lg font-extrabold" style={{ color: c.text }}>"Ver antes de comprar"</p>
            <p className="text-xs mt-2" style={{ color: c.textMuted }}>
              O cliente vê seu site funcionando antes de pagar. Isso muda completamente a taxa de conversão.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 5 — PREÇOS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={5} title="Preços Oficiais do HubWebSite" sub="Recorrência" />
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { plan: "Mensal", price: "R$ 297", per: "/mês", total: "R$ 297/mês", color: c.accent },
          { plan: "Semestral", price: "R$ 247", per: "/mês", total: "R$ 1.482 a cada 6 meses", color: c.green },
          { plan: "Anual", price: "R$ 197", per: "/mês", total: "R$ 2.364/ano", color: c.gold },
        ].map((p) => (
          <div key={p.plan} className="rounded-xl p-6 border text-center" style={{ background: c.bgCard, borderColor: `${p.color}44` }}>
            <p className="text-sm font-bold mb-3" style={{ color: p.color }}>{p.plan}</p>
            <p className="text-3xl font-extrabold" style={{ color: c.text }}>{p.price}<span className="text-sm font-normal" style={{ color: c.textMuted }}>{p.per}</span></p>
            <p className="text-xs mt-2" style={{ color: c.textMuted }}>{p.total}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 p-4 rounded-xl border text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
        <Lock className="w-4 h-4 inline-block mr-2" style={{ color: c.accent }} />
        <span className="text-sm font-semibold" style={{ color: c.accentLight }}>
          Sempre pago no checkout da AdHub — controle de marca, churn e comissões
        </span>
      </div>
    </div>
  ),

  /* ── SLIDE 6 — MODELO HÍBRIDO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={6} title="Modelo Híbrido: O que Torna Irresistível" sub="Estratégia" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl p-6 border" style={{ background: c.greenGlow, borderColor: `${c.green}44` }}>
          <DollarSign className="w-8 h-8 mb-3" style={{ color: c.green }} />
          <p className="font-extrabold text-lg mb-2" style={{ color: c.green }}>Dinheiro Rápido</p>
          <p className="text-sm mb-3" style={{ color: c.text }}>Implementação (setup) — preço LIVRE</p>
          <BulletList icon={ArrowRight} items={[
            "Reunião com o cliente, copy, ajustes",
            "Configuração inicial, fotos, domínio",
            "Páginas extras, integrações",
            "Cobre R$ 1.000, R$ 2.000, R$ 3.000+",
            "100% do setup fica com o vendedor",
          ]} />
        </div>
        <div className="rounded-xl p-6 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
          <Repeat className="w-8 h-8 mb-3" style={{ color: c.accent }} />
          <p className="font-extrabold text-lg mb-2" style={{ color: c.accentLight }}>Renda Recorrente</p>
          <p className="text-sm mb-3" style={{ color: c.text }}>Comissão sobre a assinatura (MRR)</p>
          <BulletList icon={ArrowRight} items={[
            "Cliente assina no checkout AdHub",
            "Vendedor ganha % enquanto o cliente estiver ativo",
            "Renda previsível e cumulativa",
            "Mais clientes = mais MRR = mais renda passiva",
            "Base cresce como bola de neve",
          ]} />
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 7 — PAPÉIS E CAMADAS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={7} title="Papéis e Camadas" sub="Estrutura da Rede" />
      <div className="space-y-4">
        <LayerCard icon={Building2} title="AdHub (CEO / DEV)" desc="Produto + operação + checkout + pagamento de comissão + suporte técnico + custo de prévias" color={c.accent} glow={c.accentGlow3} />
        <div className="flex justify-center"><ArrowRight className="w-5 h-5" style={{ color: c.textMuted }} /></div>
        <LayerCard icon={Award} title="Diretor de Afiliados" desc="Recruta e gerencia criadores de curso e toda a rede — override de 3% sobre MRR" color={c.gold} glow={c.goldGlow} />
        <div className="flex justify-center"><ArrowRight className="w-5 h-5" style={{ color: c.textMuted }} /></div>
        <LayerCard icon={GraduationCap} title="Afiliado Criador de Curso" desc="Grava curso, vende, forma vendedores — override de 5% sobre MRR dos alunos" color={c.green} glow={c.greenGlow} />
        <div className="flex justify-center"><ArrowRight className="w-5 h-5" style={{ color: c.textMuted }} /></div>
        <LayerCard icon={UserPlus} title="Sub-afiliado (Vendedor)" desc="Vende para o cliente final — cobra implementação (preço livre) + 20% de comissão recorrente" color={c.orange} glow={c.orangeGlow} />
      </div>
    </div>
  ),

  /* ── SLIDE 8 — FLUXO OPERACIONAL ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={8} title="Fluxo Operacional End-to-End" sub="Como Funciona" />
      <div className="space-y-3">
        <FlowStep num={1} icon={Target} text="Sub-afiliado prospecta usando a Ferramenta de Prospecção" />
        <FlowStep num={2} icon={Database} text="Coleta dados do negócio + link do Google Meu Negócio" />
        <FlowStep num={3} icon={Cpu} text="Gera prévia (automação → IA → código → Vercel)" />
        <FlowStep num={4} icon={Eye} text="Apresenta prévia ao cliente e fecha implementação (valor livre)" />
        <FlowStep num={5} icon={DollarSign} text="Cliente assina HubWebSite no checkout AdHub (mensal/semestral/anual)" />
        <FlowStep num={6} icon={Repeat} text="Comissões recorrentes distribuídas automaticamente" />
        <FlowStep num={7} icon={Settings} text="Suporte e ajustes leves via AdHub" />
      </div>
      <div className="mt-5 p-3 rounded-xl border text-center" style={{ background: c.bgCard, borderColor: c.border }}>
        <p className="text-xs" style={{ color: c.textMuted }}>
          GMB → IA → Vercel → Preview → Fechamento → Recorrência → Comissão Automática
        </p>
      </div>
    </div>
  ),

  /* ── SLIDE 9 — O QUE O SUB-AFILIADO VENDE ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={9} title="O Que o Sub-afiliado Vende" sub="Oferta na Ponta" />
      <div className="grid md:grid-cols-3 gap-5">
        <div className="rounded-xl p-5 border" style={{ background: c.greenGlow, borderColor: `${c.green}44` }}>
          <Settings className="w-7 h-7 mb-3" style={{ color: c.green }} />
          <p className="font-bold text-sm mb-2" style={{ color: c.green }}>Implementação (Setup)</p>
          <p className="text-xs" style={{ color: c.textMuted }}>
            Ele define o preço e a entrega. Reunião, copy, ajustes, domínio, páginas extras. Valor livre.
          </p>
        </div>
        <div className="rounded-xl p-5 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
          <Globe className="w-7 h-7 mb-3" style={{ color: c.accent }} />
          <p className="font-bold text-sm mb-2" style={{ color: c.accentLight }}>Assinatura HubWebSite</p>
          <p className="text-xs" style={{ color: c.textMuted }}>
            Preço oficial, cliente paga no checkout AdHub. Planos mensal, semestral ou anual.
          </p>
        </div>
        <div className="rounded-xl p-5 border" style={{ background: c.orangeGlow, borderColor: `${c.orange}44` }}>
          <Eye className="w-7 h-7 mb-3" style={{ color: c.orange }} />
          <p className="font-bold text-sm mb-2" style={{ color: c.orange }}>O Diferencial: Preview</p>
          <p className="text-xs" style={{ color: c.textMuted }}>
            "Ver antes de comprar" — o cliente vê o site pronto antes de assinar. Taxa de conversão muito maior.
          </p>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 10 — GOVERNANÇA ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={10} title="Regras para Proteger o Modelo" sub="Governança" />
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { icon: Shield, title: "Anti-abuso de Preview", desc: "Limite diário por afiliado, score de conversão, depósito inicial e KYC obrigatório" },
          { icon: ShieldCheck, title: "Regras de Marca", desc: "Não pode prometer fora do escopo. Uso de materiais oficiais apenas." },
          { icon: AlertTriangle, title: "Reembolso & Chargeback", desc: "Política clara de reembolso, prova de entrega documentada, janela de disputa definida" },
          { icon: Star, title: "Qualidade", desc: "Sites aprovados seguem padrões mínimos. Auditoria periódica de entregas." },
          { icon: Target, title: "Tracking & Atribuição", desc: "Cookie + ID de afiliado + CRM integrado para rastreamento preciso de vendas" },
          { icon: Lock, title: "Compliance", desc: "Contrato de afiliado com cláusulas de ética, não-concorrência e uso adequado" },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4 border flex items-start gap-3" style={{ background: c.bgCard, borderColor: c.border }}>
            <item.icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: c.accent }} />
            <div>
              <p className="font-bold text-sm" style={{ color: c.text }}>{item.title}</p>
              <p className="text-xs mt-1" style={{ color: c.textMuted }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 11 — PERCENTUAIS ── */
  () => {
    const pieData = [
      { name: "AdHub", value: 72 },
      { name: "Sub-afiliado", value: 20 },
      { name: "Criador", value: 5 },
      { name: "Diretor", value: 3 },
    ];
    return (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <SlideTitle num={11} title="Percentuais Sugeridos" sub="Modelo Saudável" />
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-bold mb-3" style={{ color: c.accentLight }}>A) Comissão Recorrente (HubWebSite)</p>
            <DataTable
              headers={["Camada", "%", "Regra"]}
              rows={[
                ["Sub-afiliado (ponta)", "20%", "Enquanto ativo ou 12 meses"],
                ["Criador de Curso", "5% override", "Sobre vendas dos alunos"],
                ["Diretor de Afiliados", "3% override", "Sobre toda a rede"],
                ["AdHub", "72%", "Produto + operação + prévias"],
              ]}
            />
            <p className="text-xs font-bold mt-4 mb-3" style={{ color: c.green }}>B) Implementação (Setup)</p>
            <div className="rounded-xl p-4 border" style={{ background: c.greenGlow, borderColor: `${c.green}44` }}>
              <p className="text-sm font-bold" style={{ color: c.green }}>100% fica com o sub-afiliado</p>
              <p className="text-xs mt-1" style={{ color: c.textMuted }}>Preço livre. O vendedor cobra e entrega. Forte atrativo para a ponta.</p>
            </div>
            <p className="text-xs font-bold mt-4 mb-3" style={{ color: c.orange }}>C) Upsells (HubVendas + Prospecção)</p>
            <DataTable
              headers={["Camada", "%"]}
              rows={[
                ["Sub-afiliado", "20%"],
                ["Criador", "10% override"],
                ["Diretor", "5% override"],
                ["AdHub", "restante"],
              ]}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xs font-bold mb-3" style={{ color: c.textMuted }}>Distribuição do MRR por Camada</p>
            <ResponsiveContainer width="100%" height={260}>
              <RePieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name} ${value}%`} labelLine={false}>
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  },

  /* ── SLIDE 12 — ECONOMIA UNITÁRIA ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={12} title="Economia Unitária" sub="Exemplo por Cliente" />
      <p className="text-sm mb-4" style={{ color: c.textMuted }}>Cliente típico no plano mensal (R$ 297/mês)</p>
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Metric label="Sub-afiliado (20%)" value="R$ 59,40" sub="/mês" color={c.orange} />
        <Metric label="Criador (5%)" value="R$ 14,85" sub="/mês" color={c.green} />
        <Metric label="Diretor (3%)" value="R$ 8,91" sub="/mês" color={c.gold} />
        <Metric label="AdHub (72%)" value="R$ 213,84" sub="/mês" color={c.accent} />
      </div>
      <div className="rounded-xl p-5 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
        <p className="text-sm font-bold mb-2" style={{ color: c.accentLight }}>💡 Isso ACUMULA com a base ativa (MRR)</p>
        <p className="text-xs" style={{ color: c.textMuted }}>
          Cada novo cliente entra na base. A comissão do mês 1 continua nos meses 2, 3, 4... enquanto o cliente estiver ativo. A renda recorrente cresce como bola de neve.
        </p>
      </div>
    </div>
  ),

  /* ── SLIDE 13 — GANHO RÁPIDO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={13} title="Exemplo de Ganho Rápido" sub="Implementação" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl p-6 border" style={{ background: c.greenGlow, borderColor: `${c.green}44` }}>
          <DollarSign className="w-8 h-8 mb-3" style={{ color: c.green }} />
          <p className="text-lg font-extrabold mb-3" style={{ color: c.green }}>3 sites fechados a R$ 2.000</p>
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2" style={{ borderColor: c.border }}>
              <span className="text-sm" style={{ color: c.textMuted }}>Receita imediata (setup)</span>
              <span className="text-sm font-bold" style={{ color: c.green }}>R$ 6.000</span>
            </div>
            <div className="flex justify-between border-b pb-2" style={{ borderColor: c.border }}>
              <span className="text-sm" style={{ color: c.textMuted }}>Tempo estimado</span>
              <span className="text-sm font-bold" style={{ color: c.text }}>1 semana</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm" style={{ color: c.textMuted }}>Investimento do vendedor</span>
              <span className="text-sm font-bold" style={{ color: c.text }}>R$ 0</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl p-6 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
          <Repeat className="w-8 h-8 mb-3" style={{ color: c.accent }} />
          <p className="text-lg font-extrabold mb-3" style={{ color: c.accentLight }}>+ Recorrência que começa</p>
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2" style={{ borderColor: c.border }}>
              <span className="text-sm" style={{ color: c.textMuted }}>3 × R$ 297 × 20%</span>
              <span className="text-sm font-bold" style={{ color: c.accentLight }}>R$ 178,20/mês</span>
            </div>
            <p className="text-xs" style={{ color: c.textMuted }}>
              Esses R$ 178,20/mês continuam entrando enquanto os clientes estiverem ativos. A cada semana com mais fechamentos, a recorrência cresce.
            </p>
          </div>
          <div className="mt-4 p-3 rounded-lg" style={{ background: c.bgCard }}>
            <p className="text-xs" style={{ color: c.textMuted }}>
              Em 12 meses fechando 3/semana = ~150 clientes<br />
              <strong style={{ color: c.accentLight }}>Recorrência: R$ 8.910/mês</strong> + implementações
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 14 — PROJEÇÕES MACRO ── */
  () => {
    const data = [
      { cenario: "5 vendas", clientes: 50000, mrr: 13850000, ponta: 2770000, criador: 692500, diretor: 415500, adhub: 9972000 },
      { cenario: "6 vendas", clientes: 60000, mrr: 16620000, ponta: 3324000, criador: 831000, diretor: 498600, adhub: 11966400 },
      { cenario: "7 vendas", clientes: 70000, mrr: 19390000, ponta: 3878000, criador: 969500, diretor: 581700, adhub: 13960800 },
      { cenario: "10 vendas", clientes: 100000, mrr: 27700000, ponta: 5540000, criador: 1385000, diretor: 831000, adhub: 19944000 },
    ];
    const chartData = data.map(d => ({
      name: d.cenario,
      "Sub-afiliados": d.ponta / 1e6,
      Criadores: d.criador / 1e6,
      Diretores: d.diretor / 1e6,
      AdHub: d.adhub / 1e6,
    }));
    return (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <SlideTitle num={14} title="Projeções Macro — 10.000 Vendedores" sub="Cenários" />
        <p className="text-xs mb-3" style={{ color: c.textMuted }}>
          MRR médio por cliente: R$ 277 (mix: 70% mensal + 20% semestral + 10% anual). Valores = <strong>novo MRR do mês</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <DataTable
            headers={["Cenário/mês", "Novos Clientes", "Novo MRR", "Ponta 20%", "Criador 5%", "Diretor 3%"]}
            rows={data.map(d => [
              d.cenario,
              d.clientes.toLocaleString("pt-BR"),
              `R$ ${(d.mrr / 1e6).toFixed(1)}M`,
              `R$ ${(d.ponta / 1e6).toFixed(1)}M`,
              `R$ ${(d.criador / 1e3).toFixed(0)}k`,
              `R$ ${(d.diretor / 1e3).toFixed(0)}k`,
            ])}
          />
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={c.border} />
              <XAxis dataKey="name" tick={{ fill: c.textMuted, fontSize: 11 }} />
              <YAxis tick={{ fill: c.textMuted, fontSize: 11 }} tickFormatter={v => `${v}M`} />
              <Tooltip formatter={(v: number) => `R$ ${v.toFixed(1)}M`} contentStyle={{ background: c.bgCard, border: `1px solid ${c.border}`, borderRadius: 8, color: c.text }} />
              <Bar dataKey="Sub-afiliados" fill={COLORS[2]} stackId="a" />
              <Bar dataKey="Criadores" fill={COLORS[1]} stackId="a" />
              <Bar dataKey="Diretores" fill={COLORS[3]} stackId="a" />
              <Bar dataKey="AdHub" fill={COLORS[0]} stackId="a" />
              <Legend wrapperStyle={{ fontSize: 11, color: c.textMuted }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[10px] mt-2 text-center" style={{ color: c.textMuted }}>
          ⚠ MRR acumulado cresce com a base ativa (menos churn). Esses valores representam apenas as novas vendas do mês.
        </p>
      </div>
    );
  },

  /* ── SLIDE 15 — PROJEÇÃO ANUAL ── */
  () => {
    const newMRR = 13850000; // cenário 5 vendas
    const churn = 0.03;
    const months: { mes: string; acumulado: number }[] = [];
    let acc = 0;
    for (let i = 1; i <= 12; i++) {
      acc = acc * (1 - churn) + newMRR;
      months.push({ mes: `M${i}`, acumulado: Math.round(acc / 1e6 * 10) / 10 });
    }
    return (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <SlideTitle num={15} title="Projeção Anual — Efeito Bola de Neve" sub="MRR Acumulado" />
        <p className="text-xs mb-4" style={{ color: c.textMuted }}>
          Cenário conservador: 5 vendas/vendedor/mês, 10.000 vendedores, churn de 3%/mês
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={months}>
            <CartesianGrid strokeDasharray="3 3" stroke={c.border} />
            <XAxis dataKey="mes" tick={{ fill: c.textMuted, fontSize: 11 }} />
            <YAxis tick={{ fill: c.textMuted, fontSize: 11 }} tickFormatter={v => `R$${v}M`} />
            <Tooltip formatter={(v: number) => `R$ ${v}M`} contentStyle={{ background: c.bgCard, border: `1px solid ${c.border}`, borderRadius: 8, color: c.text }} />
            <Line type="monotone" dataKey="acumulado" stroke={c.accent} strokeWidth={3} dot={{ fill: c.accent, r: 4 }} name="MRR Acumulado" />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Metric label="MRR Mês 1" value={`R$ ${(newMRR / 1e6).toFixed(1)}M`} color={c.accent} />
          <Metric label="MRR Mês 12 (acumulado)" value={`R$ ${months[11].acumulado}M`} sub="Menos churn 3%/mês" color={c.green} />
        </div>
      </div>
    );
  },

  /* ── SLIDE 16 — CUSTO DAS PRÉVIAS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={16} title="Custo das Prévias — Por que Não Quebra o Modelo" sub="Sustentabilidade" />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <BulletList icon={DollarSign} items={[
            "Cada preview custa R$ 30 (custo AdHub)",
            'Preview é o "CAC operacional" — custo de aquisição via demonstração',
            "Custo absorvido pela AdHub, não pela rede",
          ]} />
          <div className="mt-5 rounded-xl p-5 border" style={{ background: c.bgCard, borderColor: c.border }}>
            <p className="text-sm font-bold mb-3" style={{ color: c.text }}>Exemplo prático:</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm" style={{ color: c.textMuted }}>
                <span>Prévias para fechar 1 cliente</span>
                <span style={{ color: c.text }}>~5 prévias</span>
              </div>
              <div className="flex justify-between text-sm" style={{ color: c.textMuted }}>
                <span>Custo total</span>
                <span style={{ color: c.orange }}>5 × R$ 30 = R$ 150</span>
              </div>
              <div className="flex justify-between text-sm" style={{ color: c.textMuted }}>
                <span>MRR médio do cliente</span>
                <span style={{ color: c.green }}>R$ 277/mês</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t" style={{ borderColor: c.border, color: c.textMuted }}>
                <span>Payback</span>
                <span className="font-bold" style={{ color: c.accentLight }}>~1 mês</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-xl p-6 border text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
            <ShieldCheck className="w-10 h-10 mx-auto mb-3" style={{ color: c.accent }} />
            <p className="font-bold text-sm mb-2" style={{ color: c.text }}>Sustentável com regras</p>
            <p className="text-xs" style={{ color: c.textMuted }}>
              Limites diários, score de conversão e KYC garantem que prévias sejam usadas com responsabilidade. O custo é controlado e o retorno é alto.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 17 — DIRETOR GANHA EM VOLUME ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={17} title="Por que o Diretor Ganha Muito em Volume" sub="Override + Escala" />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <BulletList icon={TrendingUp} items={[
            "Override de 3% parece pequeno — mas o volume é gigante",
            "Diretor não precisa vender para cliente final",
            "Ele constrói, recruta e gerencia a rede",
            "Quanto maior a rede, maior a comissão",
          ]} />
          <div className="mt-5 rounded-xl p-5 border" style={{ background: c.goldGlow, borderColor: `${c.gold}44` }}>
            <p className="text-sm font-bold mb-3" style={{ color: c.gold }}>Exemplo de escala</p>
            <div className="space-y-2 text-sm">
              <p style={{ color: c.textMuted }}>Diretor influencia <strong style={{ color: c.text }}>50 criadores</strong></p>
              <p style={{ color: c.textMuted }}>Criadores geram <strong style={{ color: c.text }}>2.000 vendedores</strong></p>
              <p style={{ color: c.textMuted }}>Vendedores fecham <strong style={{ color: c.text }}>10.000 clientes ativos</strong></p>
              <div className="pt-2 border-t" style={{ borderColor: c.border }}>
                <p style={{ color: c.textMuted }}>MRR da rede: 10.000 × R$ 277 = <strong style={{ color: c.text }}>R$ 2.770.000</strong></p>
                <p className="font-extrabold mt-1" style={{ color: c.gold }}>
                  Override 3% = R$ 83.100/mês
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="space-y-4 w-full">
            <Metric label="50 Criadores" value="↓" color={c.gold} />
            <Metric label="2.000 Vendedores" value="↓" color={c.orange} />
            <Metric label="10.000 Clientes Ativos" value="↓" color={c.green} />
            <Metric label="Override do Diretor" value="R$ 83.100/mês" color={c.gold} />
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 18 — CRIADOR DE CURSO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={18} title="O que o Criador de Curso Ganha" sub="Modelo do Curso" />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-bold mb-3" style={{ color: c.green }}>Divisão de receita do curso</p>
          <div className="rounded-xl p-5 border mb-4" style={{ background: c.greenGlow, borderColor: `${c.green}44` }}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold" style={{ color: c.green }}>50% Criador</span>
              <span className="text-sm font-bold" style={{ color: c.accent }}>50% AdHub</span>
            </div>
            <p className="text-xs" style={{ color: c.textMuted }}>
              AdHub entrega: estrutura, funil, landing page, copy, automações, suporte e tráfego operacional
            </p>
            <p className="text-xs mt-1" style={{ color: c.textMuted }}>
              Criador grava e aparece — é a autoridade
            </p>
          </div>
          <p className="text-xs font-bold mb-3" style={{ color: c.accentLight }}>Override adicional</p>
          <BulletList items={[
            "5% do MRR dos clientes fechados pelos alunos dele",
            "Comissões sobre HubVendas e Ferramenta de Prospecção",
            "Receita do curso + override + upsells = múltiplas fontes",
          ]} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-xl p-5 border text-center" style={{ background: c.bgCard, borderColor: c.border }}>
            <GraduationCap className="w-10 h-10 mx-auto mb-3" style={{ color: c.green }} />
            <p className="font-bold text-sm" style={{ color: c.text }}>O Criador não vende direto</p>
            <p className="text-xs mt-2" style={{ color: c.textMuted }}>
              Ele forma vendedores, que vendem para clientes finais. Quanto mais vendedores bem treinados, maior o override.
            </p>
          </div>
          <div className="rounded-xl p-5 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
            <p className="text-xs font-bold mb-2" style={{ color: c.accentLight }}>Exemplo: 200 alunos-vendedores ativos</p>
            <p className="text-xs" style={{ color: c.textMuted }}>
              Se cada um tem 30 clientes ativos = 6.000 clientes<br />
              MRR: 6.000 × R$ 277 = R$ 1.662.000<br />
              <strong style={{ color: c.green }}>Override 5% = R$ 83.100/mês</strong> + receita do curso
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 19 — SUB-AFILIADO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={19} title="O que o Sub-afiliado Ganha" sub="Discurso de Venda" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="rounded-xl p-5 border" style={{ background: c.greenGlow, borderColor: `${c.green}44` }}>
            <DollarSign className="w-6 h-6 mb-2" style={{ color: c.green }} />
            <p className="font-bold text-sm" style={{ color: c.green }}>Dinheiro Rápido</p>
            <p className="text-xs mt-1" style={{ color: c.textMuted }}>Implementação (setup) com cobrança LIVRE — R$ 1k, R$ 2k, R$ 3k+</p>
          </div>
          <div className="rounded-xl p-5 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
            <Repeat className="w-6 h-6 mb-2" style={{ color: c.accent }} />
            <p className="font-bold text-sm" style={{ color: c.accentLight }}>Renda Recorrente</p>
            <p className="text-xs mt-1" style={{ color: c.textMuted }}>20% da assinatura HubWebSite enquanto o cliente estiver ativo</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold mb-3" style={{ color: c.gold }}>Potencial de longo prazo</p>
          <div className="rounded-xl p-5 border" style={{ background: c.goldGlow, borderColor: `${c.gold}44` }}>
            <div className="space-y-3">
              <div className="flex justify-between text-sm" style={{ color: c.textMuted }}>
                <span>100 clientes ativos</span>
                <span className="font-bold" style={{ color: c.text }}>R$ 5.540/mês</span>
              </div>
              <div className="flex justify-between text-sm" style={{ color: c.textMuted }}>
                <span>200 clientes ativos</span>
                <span className="font-bold" style={{ color: c.green }}>R$ 11.080/mês</span>
              </div>
              <div className="flex justify-between text-sm" style={{ color: c.textMuted }}>
                <span>300 clientes ativos</span>
                <span className="font-bold" style={{ color: c.gold }}>R$ 16.620/mês</span>
              </div>
            </div>
            <p className="text-[10px] mt-3" style={{ color: c.textMuted }}>
              Cálculo: clientes × R$ 277 (MRR médio) × 20% | + implementação cobrada à parte ao longo do ano
            </p>
          </div>
          <div className="mt-4 p-3 rounded-lg text-center" style={{ background: c.bgCard }}>
            <p className="text-xs" style={{ color: c.textMuted }}>
              <strong style={{ color: c.accentLight }}>200 clientes</strong> = renda mensal forte<br />
              + implementações ao longo do ano = potencial de <strong style={{ color: c.green }}>R$ 200k+/ano</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 20 — OPERAÇÃO E SUPORTE ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={20} title="Operação e Suporte — O que a AdHub Entrega" sub="Infraestrutura" />
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { icon: Cpu, title: "Automação Completa", items: ["GMB → IA → Vercel", "Geração de prévia automática", "Publicação e hospedagem"] },
          { icon: LayoutDashboard, title: "Painel & Métricas", items: ["Dashboard do afiliado", "Métricas de conversão", "Tracking de comissões"] },
          { icon: BookOpen, title: "Central de Materiais", items: ["Scripts de prospecção", "Templates de proposta", "Vídeos de treinamento", "Onboarding completo"] },
          { icon: Settings, title: "Infra de Pagamentos", items: ["Checkout Stripe integrado", "Comissões automáticas", "Relatórios financeiros"] },
        ].map((section, i) => (
          <div key={i} className="rounded-xl p-5 border" style={{ background: c.bgCard, borderColor: c.border }}>
            <section.icon className="w-6 h-6 mb-3" style={{ color: c.accent }} />
            <p className="font-bold text-sm mb-2" style={{ color: c.text }}>{section.title}</p>
            <ul className="space-y-1.5">
              {section.items.map((item, j) => (
                <li key={j} className="text-xs flex items-center gap-2" style={{ color: c.textMuted }}>
                  <CheckCircle className="w-3 h-3" style={{ color: c.green }} /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 21 — TIERS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={21} title="Regras de Entrada e Níveis (Tiers)" sub="Progressão" />
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { tier: "Starter", color: c.textMuted, icon: UserPlus, items: ["Acesso básico", "Limite de prévias/dia", "Comissão padrão (20%)", "Treinamento inicial"] },
          { tier: "Pro", color: c.green, icon: TrendingUp, items: ["Meta: 20+ vendas/mês", "Limite maior de prévias", "Bônus trimestral", "Suporte prioritário"] },
          { tier: "Elite", color: c.gold, icon: Award, items: ["Top performers", "Melhores taxas + bônus", "Acesso antecipado a features", "Mentorias exclusivas"] },
        ].map((t) => (
          <div key={t.tier} className="rounded-xl p-5 border" style={{ background: c.bgCard, borderColor: `${t.color}44` }}>
            <t.icon className="w-7 h-7 mb-3" style={{ color: t.color }} />
            <p className="font-extrabold text-lg mb-3" style={{ color: t.color }}>{t.tier}</p>
            <ul className="space-y-2">
              {t.items.map((item, i) => (
                <li key={i} className="text-xs flex items-center gap-2" style={{ color: c.textMuted }}>
                  <CheckCircle className="w-3 h-3" style={{ color: t.color }} /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 p-3 rounded-xl border text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
        <p className="text-xs" style={{ color: c.textMuted }}>
          Para entrar no <strong style={{ color: c.gold }}>grupo forte (Pro/Elite)</strong>: bater <strong style={{ color: c.text }}>20 vendas/mês</strong> + validar autoridade e método
        </p>
      </div>
    </div>
  ),

  /* ── SLIDE 22 — RISCOS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={22} title="Riscos e Como Mitigamos" sub="Transparência" />
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { risk: "Abuso de previews", solution: "Limites diários, KYC, score de conversão, depósito inicial", icon: Shield },
          { risk: "Qualidade das entregas", solution: "Padrões mínimos, auditoria periódica, feedback do cliente", icon: Star },
          { risk: "Promessas indevidas", solution: "Contrato, compliance, materiais oficiais obrigatórios", icon: AlertTriangle },
          { risk: "Chargebacks", solution: "Política de reembolso clara, prova de entrega, janela de disputa", icon: Lock },
          { risk: "Sustentabilidade financeira", solution: "Comissão saudável (72% AdHub), controle rigoroso do CAC de preview", icon: DollarSign },
          { risk: "Conflito entre afiliados", solution: "Atribuição por cookie + ID + CRM, regras claras de territorialidade", icon: Target },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4 border flex items-start gap-3" style={{ background: c.bgCard, borderColor: c.border }}>
            <item.icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: c.orange }} />
            <div>
              <p className="font-bold text-sm" style={{ color: c.text }}>{item.risk}</p>
              <p className="text-xs mt-1" style={{ color: c.textMuted }}>{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 23 — PRÓXIMOS PASSOS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={23} title="Próximos Passos" sub="CTA" />
      <div className="grid md:grid-cols-3 gap-5">
        <div className="rounded-xl p-6 border" style={{ background: c.goldGlow, borderColor: `${c.gold}44` }}>
          <Award className="w-8 h-8 mb-3" style={{ color: c.gold }} />
          <p className="font-extrabold text-lg mb-3" style={{ color: c.gold }}>Diretor</p>
          <ul className="space-y-2">
            {["Conversa de alinhamento estratégico", "Definição de metas e KPIs", "Contrato + estrutura de override", "Recrutamento dos primeiros criadores"].map((item, i) => (
              <li key={i} className="text-xs flex items-center gap-2" style={{ color: c.textMuted }}>
                <ArrowRight className="w-3 h-3" style={{ color: c.gold }} /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-6 border" style={{ background: c.greenGlow, borderColor: `${c.green}44` }}>
          <GraduationCap className="w-8 h-8 mb-3" style={{ color: c.green }} />
          <p className="font-extrabold text-lg mb-3" style={{ color: c.green }}>Criador de Curso</p>
          <ul className="space-y-2">
            {["Gravação do conteúdo", "Montagem do funil de vendas", "Lançamento e divulgação", "Recrutamento de vendedores"].map((item, i) => (
              <li key={i} className="text-xs flex items-center gap-2" style={{ color: c.textMuted }}>
                <ArrowRight className="w-3 h-3" style={{ color: c.green }} /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-6 border" style={{ background: c.orangeGlow, borderColor: `${c.orange}44` }}>
          <Rocket className="w-8 h-8 mb-3" style={{ color: c.orange }} />
          <p className="font-extrabold text-lg mb-3" style={{ color: c.orange }}>Sub-afiliado</p>
          <ul className="space-y-2">
            {["Treinamento rápido", "Acesso à Ferramenta de Prospecção", "Primeiras prévias geradas", "Primeiras vendas e implementações"].map((item, i) => (
              <li key={i} className="text-xs flex items-center gap-2" style={{ color: c.textMuted }}>
                <ArrowRight className="w-3 h-3" style={{ color: c.orange }} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 24 — RESUMO FINAL ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16">
      <SlideTitle num={24} title="Resumo dos Números" sub="Visão Geral" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-xs font-bold" style={{ color: c.accentLight }}>Planos & Comissões</p>
          <DataTable
            headers={["Plano", "Preço/mês", "Comissão Ponta (20%)"]}
            rows={[
              ["Mensal", "R$ 297", "R$ 59,40/mês"],
              ["Semestral", "R$ 247", "R$ 49,40/mês"],
              ["Anual", "R$ 197", "R$ 39,40/mês"],
            ]}
          />
          <p className="text-xs font-bold mt-2" style={{ color: c.green }}>Ganho Rápido (exemplo)</p>
          <div className="rounded-xl p-4 border" style={{ background: c.greenGlow, borderColor: `${c.green}44` }}>
            <p className="text-sm" style={{ color: c.textMuted }}>3 sites/semana × R$ 2.000 setup = <strong style={{ color: c.green }}>R$ 6.000</strong> imediatos</p>
          </div>
          <p className="text-xs font-bold" style={{ color: c.accentLight }}>Recorrência (exemplo)</p>
          <div className="rounded-xl p-4 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
            <p className="text-sm" style={{ color: c.textMuted }}>200 clientes ativos = <strong style={{ color: c.accentLight }}>R$ 11.080/mês</strong> de comissão recorrente</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-bold" style={{ color: c.gold }}>Macro Projeções (10k vendedores)</p>
          <DataTable
            headers={["Vendas/mês", "Novo MRR", "Ponta", "AdHub"]}
            rows={[
              ["5/vendedor", "R$ 13,8M", "R$ 2,7M", "R$ 9,9M"],
              ["6/vendedor", "R$ 16,6M", "R$ 3,3M", "R$ 11,9M"],
              ["7/vendedor", "R$ 19,3M", "R$ 3,8M", "R$ 13,9M"],
              ["10/vendedor", "R$ 27,7M", "R$ 5,5M", "R$ 19,9M"],
            ]}
          />
          <div className="rounded-xl p-5 border text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}33` }}>
            <Rocket className="w-8 h-8 mx-auto mb-2" style={{ color: c.accent }} />
            <p className="text-sm font-extrabold" style={{ color: c.text }}>
              Justo. Escalável. Previsível.
            </p>
            <p className="text-xs mt-1" style={{ color: c.textMuted }}>
              Implementação livre + recorrência + prévia com IA
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
];

/* ═══════════════════════════════════════════════ */
/*               MAIN COMPONENT                    */
/* ═══════════════════════════════════════════════ */

const ProgramaAfiliados = () => {
  const [cur, setCur] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); setCur((p) => Math.min(p + 1, total - 1)); }
      if (e.key === "ArrowLeft") { e.preventDefault(); setCur((p) => Math.max(p - 1, 0)); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [total]);

  return (
    <div className="relative w-full h-screen overflow-hidden select-none" style={{ background: c.bg }}>
      {/* slides */}
      <div className="absolute inset-0 overflow-y-auto">
        {slides.map((S, i) => (
          <Slide key={i} active={i === cur}><S /></Slide>
        ))}
      </div>

      {/* nav bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-50" style={{ background: `linear-gradient(transparent, ${c.bg})` }}>
        <button
          onClick={() => setCur((p) => Math.max(p - 1, 0))}
          disabled={cur === 0}
          className="p-2 rounded-lg transition-colors disabled:opacity-30"
          style={{ background: c.bgCard, color: c.text }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === cur ? c.accent : c.border, transform: i === cur ? "scale(1.4)" : "scale(1)" }}
            />
          ))}
        </div>

        <button
          onClick={() => setCur((p) => Math.min(p + 1, total - 1))}
          disabled={cur === total - 1}
          className="p-2 rounded-lg transition-colors disabled:opacity-30"
          style={{ background: c.bgCard, color: c.text }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* slide counter */}
      <div className="absolute top-4 right-6 z-50">
        <span className="text-xs font-mono px-3 py-1.5 rounded-full" style={{ background: c.bgCard, color: c.textMuted, border: `1px solid ${c.border}` }}>
          {cur + 1} / {total}
        </span>
      </div>
    </div>
  );
};

export default ProgramaAfiliados;
