import { useState, useEffect } from "react";
import {
  ChevronLeft, ChevronRight, TrendingUp, DollarSign, Zap,
  Target, CheckCircle, ArrowRight, Building2, Users,
  Layers, ShieldCheck, Rocket, Globe, Award, Briefcase,
  Eye, BookOpen, GraduationCap, Shield,
  Star, Cpu, Lock, AlertTriangle, UserPlus, Settings,
  LayoutDashboard, Repeat, ArrowDown
} from "lucide-react";
import logoAdhub from "@/assets/logo-adhub.jpeg";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart as RePieChart, Pie, Cell, Legend, LineChart, Line
} from "recharts";

/* ─── Apple-inspired dark palette ─── */
const c = {
  bg: "hsl(220 20% 4%)",
  bgAlt: "hsl(220 18% 7%)",
  bgCard: "hsl(220 18% 9%)",
  bgCardHover: "hsl(220 18% 12%)",
  border: "hsl(220 15% 14%)",
  borderLight: "hsl(220 15% 20%)",
  accent: "hsl(340 75% 55%)",         // adhub pink
  accentLight: "hsl(340 80% 68%)",
  accentGlow: "hsl(340 75% 55% / 0.12)",
  accentGlow2: "hsl(340 75% 55% / 0.20)",
  accentGlow3: "hsl(340 75% 55% / 0.06)",
  teal: "hsl(195 80% 45%)",
  tealGlow: "hsl(195 80% 45% / 0.10)",
  text: "hsl(0 0% 98%)",
  textSecondary: "hsl(0 0% 80%)",
  textMuted: "hsl(220 10% 45%)",
  green: "hsl(155 65% 48%)",
  greenGlow: "hsl(155 65% 48% / 0.08)",
  orange: "hsl(30 90% 55%)",
  orangeGlow: "hsl(30 90% 55% / 0.08)",
  gold: "hsl(45 90% 55%)",
  goldGlow: "hsl(45 90% 55% / 0.08)",
  blue: "hsl(210 90% 56%)",
  blueGlow: "hsl(210 90% 56% / 0.08)",
};

/* ─── Percentuais ajustados: Diretor > Criador > Sub ─── */
const COMISSOES = {
  sub: 15,       // Sub-afiliado
  criador: 5,    // Criador de Curso (override)
  diretor: 8,    // Diretor (override) — ganha MAIS que criador
  adhub: 72,     // AdHub
};

const MRR_MEDIO = 277;
const CUSTO_PREVIA = 30;

/* ─── Slide wrapper ─── */
const Slide = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <div
    className={`absolute inset-0 transition-all duration-700 ease-out ${
      active ? "opacity-100 scale-100" : "opacity-0 scale-[0.98] pointer-events-none"
    }`}
    style={{ background: c.bg }}
  >
    {children}
  </div>
);

/* ─── Section title (Apple-style large type) ─── */
const SlideTitle = ({ num, title, sub }: { num: number; title: string; sub?: string }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
        style={{ background: c.accentGlow2, color: c.accentLight, letterSpacing: "0.1em" }}>
        {String(num).padStart(2, "0")}
      </span>
      {sub && <span className="text-[11px] tracking-widest uppercase" style={{ color: c.textMuted, letterSpacing: "0.1em" }}>{sub}</span>}
    </div>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight" style={{ color: c.text }}>{title}</h2>
  </div>
);

/* ─── Metric card ─── */
const Metric = ({ label, value, sub, color, large }: { label: string; value: string; sub?: string; color?: string; large?: boolean }) => (
  <div className="rounded-2xl p-5 border" style={{ background: c.bgCard, borderColor: color ? `${color}22` : c.border }}>
    <p className="text-[11px] font-medium tracking-wide uppercase mb-2" style={{ color: c.textMuted }}>{label}</p>
    <p className={`${large ? "text-3xl" : "text-2xl"} font-bold tracking-tight`} style={{ color: color || c.text }}>{value}</p>
    {sub && <p className="text-[11px] mt-1.5" style={{ color: c.textMuted }}>{sub}</p>}
  </div>
);

/* ─── Bullet list ─── */
const BulletList = ({ items, icon: Icon = CheckCircle, color }: { items: string[]; icon?: any; color?: string }) => (
  <ul className="space-y-3">
    {items.map((t, i) => (
      <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: c.textSecondary }}>
        <Icon className="w-4 h-4 mt-1 shrink-0" style={{ color: color || c.accent }} />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

/* ─── Layer card ─── */
const LayerCard = ({ icon: Icon, title, desc, color, badge }: { icon: any; title: string; desc: string; color: string; badge?: string }) => (
  <div className="rounded-2xl p-5 border flex items-start gap-4 transition-all hover:scale-[1.01]"
    style={{ background: c.bgCard, borderColor: `${color}22` }}>
    <div className="p-2.5 rounded-xl shrink-0" style={{ background: `${color}15` }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <p className="font-bold text-[15px]" style={{ color }}>{title}</p>
        {badge && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${color}20`, color }}>{badge}</span>}
      </div>
      <p className="text-[13px] mt-1 leading-relaxed" style={{ color: c.textMuted }}>{desc}</p>
    </div>
  </div>
);

/* ─── Flow step ─── */
const FlowStep = ({ num, text, icon: Icon }: { num: number; text: string; icon: any }) => (
  <div className="flex items-center gap-4">
    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
      style={{ background: c.accentGlow2, color: c.accentLight }}>
      {num}
    </div>
    <Icon className="w-4 h-4 shrink-0" style={{ color: c.accent }} />
    <span className="text-[15px]" style={{ color: c.textSecondary }}>{text}</span>
  </div>
);

/* ─── Table ─── */
const DataTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="rounded-2xl border overflow-hidden" style={{ borderColor: c.border }}>
    <table className="w-full text-[13px]">
      <thead>
        <tr style={{ background: c.bgCard }}>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 text-left font-semibold tracking-wide"
              style={{ color: c.accentLight, borderBottom: `1px solid ${c.border}`, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: i < rows.length - 1 ? `1px solid ${c.border}` : undefined }}>
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3" style={{ color: j === 0 ? c.text : c.textSecondary }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ─── Recharts colors ─── */
const COLORS = [c.accent, c.teal, c.gold, c.green, c.orange, c.blue];

/* ═══════════════════════════════════════════════ */
/*                    SLIDES                       */
/* ═══════════════════════════════════════════════ */

const slides = [
  /* ── SLIDE 1 — CAPA ── */
  () => (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-[200px] opacity-30"
        style={{ background: "radial-gradient(ellipse, hsl(340 75% 55% / 0.3), transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full blur-[180px] opacity-20"
        style={{ background: "radial-gradient(ellipse, hsl(195 80% 45% / 0.3), transparent 70%)" }} />

      <img src={logoAdhub} alt="AD HUB Marketing" className="h-20 md:h-24 w-auto rounded-2xl mb-10 relative z-10 shadow-2xl" />

      <p className="text-[13px] tracking-[0.3em] uppercase font-semibold mb-6 relative z-10" style={{ color: c.accentLight }}>
        Programa de Afiliados
      </p>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] relative z-10 max-w-4xl" style={{ color: c.text }}>
        Hub<span style={{ color: c.accent }}>Web</span>Site
      </h1>

      <p className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed relative z-10" style={{ color: c.textMuted }}>
        Implementação livre + comissão recorrente + prévia automática com IA
      </p>

      <div className="flex gap-3 mt-10 relative z-10 flex-wrap justify-center">
        {[
          { label: "Diretores", color: c.gold },
          { label: "Criadores de Curso", color: c.green },
          { label: "Vendedores", color: c.orange },
        ].map((t) => (
          <span key={t.label} className="px-5 py-2.5 rounded-full text-[13px] font-semibold border"
            style={{ borderColor: `${t.color}33`, color: t.color, background: `${t.color}08` }}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 2 — O PROBLEMA ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={2} title="O Problema do Mercado" sub="Contexto" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Globe, title: "Sem presença digital", desc: "Milhões de pequenas empresas não têm site profissional — perdem credibilidade e vendas todos os dias.", color: c.accent },
          { icon: DollarSign, title: "Agência é caro e lento", desc: "Contratar agência custa R$ 3k–R$ 15k + meses de espera. Inviável para PMEs.", color: c.orange },
          { icon: AlertTriangle, title: "DIY é fraco", desc: "Ferramentas 'faça você mesmo' geram sites genéricos, sem SEO e sem conversão real.", color: c.gold },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl p-6 border group hover:scale-[1.02] transition-transform"
            style={{ background: c.bgCard, borderColor: c.border }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}12` }}>
              <item.icon className="w-6 h-6" style={{ color: item.color }} />
            </div>
            <p className="font-bold text-[15px] mb-2" style={{ color: c.text }}>{item.title}</p>
            <p className="text-[13px] leading-relaxed" style={{ color: c.textMuted }}>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-5 rounded-2xl border text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
        <p className="text-[15px] font-medium" style={{ color: c.textSecondary }}>
          Um oceano de clientes que <strong style={{ color: c.accent }}>precisam de site profissional</strong>, mas não têm solução acessível e rápida.
        </p>
      </div>
    </div>
  ),

  /* ── SLIDE 3 — A SOLUÇÃO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={3} title="A Solução: HubWebSite" sub="Produto" />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <BulletList items={[
            "Site profissional gerado com IA usando dados do Google Meu Negócio",
            "Publicação automática na Vercel — rápida e segura",
            "Painel de gestão intuitivo para o cliente",
            "Suporte técnico incluso na assinatura",
            "Entrega em minutos, não semanas",
            "SEO otimizado e design responsivo",
          ]} />
        </div>
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl p-6 border" style={{ background: c.greenGlow, borderColor: `${c.green}18` }}>
            <Zap className="w-6 h-6 mb-3" style={{ color: c.green }} />
            <p className="font-bold text-[15px] mb-1" style={{ color: c.green }}>Resultado</p>
            <p className="text-[13px] leading-relaxed" style={{ color: c.textMuted }}>
              Entrega rápida + aparência profissional + custo acessível
            </p>
          </div>
          <div className="rounded-2xl p-6 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
            <Cpu className="w-6 h-6 mb-3" style={{ color: c.accent }} />
            <p className="font-bold text-[15px] mb-1" style={{ color: c.accentLight }}>Automação Inteligente</p>
            <p className="text-[13px] leading-relaxed" style={{ color: c.textMuted }}>
              IA puxa dados reais do negócio, gera código e publica — sem intervenção manual
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 4 — PRÉVIA MUDA O JOGO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={4} title='Como a "Prévia" Muda o Jogo' sub="Diferencial Competitivo" />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <BulletList icon={Eye} items={[
            "Vendedor gera um preview do site PRONTO antes do cliente comprar",
            "Cliente vê o resultado real — não uma promessa",
            "Reduz objeção e acelera o fechamento drasticamente",
            'Preview é ferramenta de VENDA, não o produto final',
          ]} />
          <div className="mt-6 p-5 rounded-2xl border" style={{ background: c.bgCard, borderColor: c.border }}>
            <p className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: c.orange }}>Custo operacional</p>
            <p className="text-[13px] mt-2 leading-relaxed" style={{ color: c.textMuted }}>
              Cada prévia custa <strong style={{ color: c.text }}>R$ {CUSTO_PREVIA}</strong> (tokens de geração) — <strong style={{ color: c.orange }}>pago pelo sub-afiliado</strong>.
              Este custo cobre os tokens de IA usados na geração automática do site.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full rounded-2xl border p-8 text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
            <Eye className="w-14 h-14 mx-auto mb-4" style={{ color: c.accent }} />
            <p className="text-2xl font-bold tracking-tight" style={{ color: c.text }}>"Ver antes de comprar"</p>
            <p className="text-[13px] mt-3 leading-relaxed" style={{ color: c.textMuted }}>
              O cliente vê seu site funcionando antes de pagar. Isso muda completamente a taxa de conversão.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 5 — PREÇOS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={5} title="Preços Oficiais" sub="Recorrência" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { plan: "Mensal", price: "R$ 297", per: "/mês", total: "R$ 297/mês", color: c.accent, popular: false },
          { plan: "Semestral", price: "R$ 247", per: "/mês", total: "R$ 1.482 a cada 6 meses", color: c.teal, popular: true },
          { plan: "Anual", price: "R$ 197", per: "/mês", total: "R$ 2.364/ano", color: c.gold, popular: false },
        ].map((p) => (
          <div key={p.plan} className={`rounded-2xl p-7 border text-center relative ${p.popular ? "scale-105" : ""}`}
            style={{ background: c.bgCard, borderColor: p.popular ? `${p.color}44` : c.border }}>
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 rounded-full"
                style={{ background: p.color, color: c.bg }}>POPULAR</span>
            )}
            <p className="text-[12px] font-semibold tracking-widest uppercase mb-4" style={{ color: p.color }}>{p.plan}</p>
            <p className="text-4xl font-bold tracking-tight" style={{ color: c.text }}>
              {p.price}<span className="text-[14px] font-normal" style={{ color: c.textMuted }}>{p.per}</span>
            </p>
            <p className="text-[12px] mt-3" style={{ color: c.textMuted }}>{p.total}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 rounded-2xl border text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
        <Lock className="w-4 h-4 inline-block mr-2 -mt-0.5" style={{ color: c.accent }} />
        <span className="text-[13px] font-medium" style={{ color: c.textSecondary }}>
          Sempre pago no checkout da AdHub — controle de marca, churn e comissões
        </span>
      </div>
    </div>
  ),

  /* ── SLIDE 6 — MODELO HÍBRIDO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={6} title="Modelo Híbrido" sub="O que Torna Irresistível" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl p-7 border" style={{ background: c.greenGlow, borderColor: `${c.green}18` }}>
          <DollarSign className="w-8 h-8 mb-4" style={{ color: c.green }} />
          <p className="font-bold text-xl mb-2 tracking-tight" style={{ color: c.green }}>Dinheiro Rápido</p>
          <p className="text-[14px] mb-4" style={{ color: c.textSecondary }}>Implementação (setup) — preço LIVRE</p>
          <BulletList icon={ArrowRight} color={c.green} items={[
            "Reunião, copy, ajustes, domínio",
            "Cobre R$ 1.000, R$ 2.000, R$ 3.000+",
            "100% do setup fica com o vendedor",
          ]} />
        </div>
        <div className="rounded-2xl p-7 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
          <Repeat className="w-8 h-8 mb-4" style={{ color: c.accent }} />
          <p className="font-bold text-xl mb-2 tracking-tight" style={{ color: c.accentLight }}>Renda Recorrente</p>
          <p className="text-[14px] mb-4" style={{ color: c.textSecondary }}>Comissão sobre a assinatura (MRR)</p>
          <BulletList icon={ArrowRight} items={[
            "Vendedor ganha % enquanto o cliente estiver ativo",
            "Renda previsível e cumulativa",
            "Base cresce como bola de neve",
          ]} />
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 7 — PAPÉIS E CAMADAS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={7} title="Papéis e Camadas" sub="Estrutura da Rede" />
      <div className="space-y-4">
        <LayerCard icon={Building2} title="AdHub (CEO / DEV)" desc="Produto + operação + checkout + pagamento de comissão + suporte técnico" color={c.accent} badge={`${COMISSOES.adhub}%`} />
        <div className="flex justify-center"><ArrowDown className="w-5 h-5" style={{ color: c.textMuted }} /></div>
        <LayerCard icon={Award} title="Diretor de Afiliados" desc="Recruta e gerencia criadores de curso e toda a rede — override sobre todo MRR gerado" color={c.gold} badge={`${COMISSOES.diretor}% override`} />
        <div className="flex justify-center"><ArrowDown className="w-5 h-5" style={{ color: c.textMuted }} /></div>
        <LayerCard icon={GraduationCap} title="Afiliado Criador de Curso" desc="Grava curso, vende, forma vendedores — override sobre MRR dos alunos" color={c.green} badge={`${COMISSOES.criador}% override`} />
        <div className="flex justify-center"><ArrowDown className="w-5 h-5" style={{ color: c.textMuted }} /></div>
        <LayerCard icon={UserPlus} title="Sub-afiliado (Vendedor)" desc="Vende para o cliente final — cobra implementação (preço livre) + comissão recorrente" color={c.orange} badge={`${COMISSOES.sub}%`} />
      </div>
    </div>
  ),

  /* ── SLIDE 8 — FLUXO OPERACIONAL ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={8} title="Fluxo Operacional" sub="End-to-End" />
      <div className="space-y-4">
        <FlowStep num={1} icon={Target} text="Sub-afiliado prospecta usando a Ferramenta de Prospecção" />
        <FlowStep num={2} icon={Globe} text="Coleta dados do negócio + link do Google Meu Negócio" />
        <FlowStep num={3} icon={Cpu} text="Gera prévia (automação → IA → código → Vercel) — custo R$ 30 por prévia" />
        <FlowStep num={4} icon={Eye} text="Apresenta prévia ao cliente e fecha implementação (valor livre)" />
        <FlowStep num={5} icon={DollarSign} text="Cliente assina HubWebSite no checkout AdHub" />
        <FlowStep num={6} icon={Repeat} text="Comissões recorrentes distribuídas automaticamente" />
        <FlowStep num={7} icon={Settings} text="Suporte e ajustes leves via AdHub" />
      </div>
      <div className="mt-6 p-4 rounded-2xl border" style={{ background: c.bgCard, borderColor: c.border }}>
        <p className="text-[12px] text-center tracking-wide" style={{ color: c.textMuted }}>
          GMB → IA → Vercel → Preview → Fechamento → Recorrência → Comissão Automática
        </p>
      </div>
    </div>
  ),

  /* ── SLIDE 9 — O QUE O SUB-AFILIADO VENDE ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={9} title="O Que o Sub-afiliado Vende" sub="Oferta na Ponta" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Settings, title: "Implementação (Setup)", desc: "Preço livre. Reunião, copy, ajustes, domínio, páginas extras.", color: c.green },
          { icon: Globe, title: "Assinatura HubWebSite", desc: "Preço oficial, cliente paga no checkout AdHub. Mensal, semestral ou anual.", color: c.accent },
          { icon: Eye, title: 'Diferencial: Preview', desc: '"Ver antes de comprar" — o cliente vê o site pronto antes de assinar.', color: c.orange },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl p-6 border hover:scale-[1.02] transition-transform"
            style={{ background: c.bgCard, borderColor: `${item.color}18` }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}12` }}>
              <item.icon className="w-5 h-5" style={{ color: item.color }} />
            </div>
            <p className="font-bold text-[15px] mb-2" style={{ color: item.color }}>{item.title}</p>
            <p className="text-[13px] leading-relaxed" style={{ color: c.textMuted }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 10 — GOVERNANÇA ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={10} title="Governança e Proteção" sub="Regras" />
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { icon: Shield, title: "Controle de Prévias", desc: "Sub-afiliado paga R$ 30/prévia (tokens). Limite diário, score de conversão." },
          { icon: ShieldCheck, title: "Regras de Marca", desc: "Materiais oficiais obrigatórios. Não pode prometer fora do escopo." },
          { icon: AlertTriangle, title: "Reembolso & Chargeback", desc: "Política clara, prova de entrega documentada, janela de disputa definida." },
          { icon: Star, title: "Qualidade", desc: "Sites aprovados seguem padrões mínimos. Auditoria periódica de entregas." },
          { icon: Target, title: "Tracking & Atribuição", desc: "Cookie + ID de afiliado + CRM integrado para rastreamento preciso." },
          { icon: Lock, title: "Compliance", desc: "Contrato com cláusulas de ética, não-concorrência e uso adequado." },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl p-5 border flex items-start gap-4"
            style={{ background: c.bgCard, borderColor: c.border }}>
            <item.icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: c.accent }} />
            <div>
              <p className="font-bold text-[14px]" style={{ color: c.text }}>{item.title}</p>
              <p className="text-[12px] mt-1 leading-relaxed" style={{ color: c.textMuted }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 11 — PERCENTUAIS ── */
  () => {
    const pieData = [
      { name: "AdHub", value: COMISSOES.adhub },
      { name: "Sub-afiliado", value: COMISSOES.sub },
      { name: "Diretor", value: COMISSOES.diretor },
      { name: "Criador", value: COMISSOES.criador },
    ];
    return (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
        <SlideTitle num={11} title="Percentuais de Comissão" sub="Modelo Saudável" />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: c.accentLight }}>
              Comissão Recorrente — HubWebSite
            </p>
            <DataTable
              headers={["Camada", "%", "Regra"]}
              rows={[
                ["Diretor de Afiliados", `${COMISSOES.diretor}% override`, "Sobre toda a rede"],
                ["Criador de Curso", `${COMISSOES.criador}% override`, "Sobre vendas dos alunos"],
                ["Sub-afiliado (ponta)", `${COMISSOES.sub}%`, "Enquanto ativo ou 12 meses"],
                ["AdHub", `${COMISSOES.adhub}%`, "Produto + operação"],
              ]}
            />
            <div className="mt-5 rounded-2xl p-4 border" style={{ background: c.greenGlow, borderColor: `${c.green}18` }}>
              <p className="text-[13px] font-bold" style={{ color: c.green }}>Implementação: 100% fica com o sub-afiliado</p>
              <p className="text-[12px] mt-1" style={{ color: c.textMuted }}>Preço livre. Forte atrativo para a ponta.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: c.textMuted }}>
              Distribuição do MRR
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <RePieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} innerRadius={55} dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`} labelLine={false} strokeWidth={0}>
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: c.bgCard, border: `1px solid ${c.border}`, borderRadius: 12, color: c.text }} />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  },

  /* ── SLIDE 12 — ECONOMIA UNITÁRIA ── */
  () => {
    const mensal = 297;
    const sub = mensal * COMISSOES.sub / 100;
    const criador = mensal * COMISSOES.criador / 100;
    const diretor = mensal * COMISSOES.diretor / 100;
    const adhub = mensal * COMISSOES.adhub / 100;
    return (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
        <SlideTitle num={12} title="Economia Unitária" sub="Por Cliente — Plano Mensal R$ 297" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          <Metric label="Diretor (8%)" value={`R$ ${diretor.toFixed(2)}`} sub="/mês por cliente" color={c.gold} />
          <Metric label="Criador (5%)" value={`R$ ${criador.toFixed(2)}`} sub="/mês por cliente" color={c.green} />
          <Metric label="Sub-afiliado (15%)" value={`R$ ${sub.toFixed(2)}`} sub="/mês por cliente" color={c.orange} />
          <Metric label="AdHub (72%)" value={`R$ ${adhub.toFixed(2)}`} sub="/mês por cliente" color={c.accent} />
        </div>
        <div className="rounded-2xl p-6 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
          <p className="text-[15px] font-bold mb-2" style={{ color: c.accentLight }}>💡 Isso ACUMULA com a base ativa (MRR)</p>
          <p className="text-[13px] leading-relaxed" style={{ color: c.textMuted }}>
            Cada novo cliente entra na base. A comissão do mês 1 continua nos meses seguintes enquanto o cliente estiver ativo. A renda recorrente cresce como bola de neve.
          </p>
        </div>
      </div>
    );
  },

  /* ── SLIDE 13 — GANHO RÁPIDO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={13} title="Exemplo de Ganho Rápido" sub="Implementação" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl p-7 border" style={{ background: c.greenGlow, borderColor: `${c.green}18` }}>
          <DollarSign className="w-8 h-8 mb-4" style={{ color: c.green }} />
          <p className="text-xl font-bold mb-4 tracking-tight" style={{ color: c.green }}>3 sites × R$ 2.000</p>
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-3" style={{ borderColor: c.border }}>
              <span className="text-[14px]" style={{ color: c.textMuted }}>Receita imediata (setup)</span>
              <span className="text-[14px] font-bold" style={{ color: c.green }}>R$ 6.000</span>
            </div>
            <div className="flex justify-between border-b pb-3" style={{ borderColor: c.border }}>
              <span className="text-[14px]" style={{ color: c.textMuted }}>Custo prévias (~5 por venda)</span>
              <span className="text-[14px] font-bold" style={{ color: c.orange }}>-R$ 450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px]" style={{ color: c.textMuted }}>Lucro líquido</span>
              <span className="text-[14px] font-bold" style={{ color: c.green }}>R$ 5.550</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-7 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
          <Repeat className="w-8 h-8 mb-4" style={{ color: c.accent }} />
          <p className="text-xl font-bold mb-4 tracking-tight" style={{ color: c.accentLight }}>+ Recorrência que começa</p>
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-3" style={{ borderColor: c.border }}>
              <span className="text-[14px]" style={{ color: c.textMuted }}>3 × R$ 297 × {COMISSOES.sub}%</span>
              <span className="text-[14px] font-bold" style={{ color: c.accentLight }}>R$ {(3 * 297 * COMISSOES.sub / 100).toFixed(2)}/mês</span>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: c.textMuted }}>
              Esses R$ {(3 * 297 * COMISSOES.sub / 100).toFixed(2)}/mês continuam entrando enquanto os clientes estiverem ativos.
            </p>
          </div>
          <div className="mt-5 p-4 rounded-xl" style={{ background: c.bgCard }}>
            <p className="text-[12px]" style={{ color: c.textMuted }}>
              Em 12 meses fechando 3/semana ≈ 150 clientes<br />
              <strong style={{ color: c.accentLight }}>Recorrência: R$ {(150 * 277 * COMISSOES.sub / 100).toFixed(0)}/mês</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 14 — QUANTO 1 PESSOA GANHA (INDIVIDUAL) ── */
  () => {
    const subClientes = [10, 30, 50, 100, 200];
    const criadorAlunos = [20, 50, 100, 200];
    const diretorCriadores = [5, 10, 20, 50];

    return (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
        <SlideTitle num={14} title="Quanto Cada Um Pode Ganhar" sub="Visão Individual" />
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sub-afiliado */}
          <div className="rounded-2xl p-6 border" style={{ background: c.bgCard, borderColor: `${c.orange}18` }}>
            <UserPlus className="w-6 h-6 mb-3" style={{ color: c.orange }} />
            <p className="font-bold text-[14px] mb-4" style={{ color: c.orange }}>1 Sub-afiliado</p>
            <div className="space-y-2.5">
              {subClientes.map(n => (
                <div key={n} className="flex justify-between text-[13px]" style={{ color: c.textMuted }}>
                  <span>{n} clientes ativos</span>
                  <span className="font-bold" style={{ color: n >= 100 ? c.green : c.text }}>
                    R$ {(n * MRR_MEDIO * COMISSOES.sub / 100).toLocaleString("pt-BR")}/mês
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t text-[11px]" style={{ borderColor: c.border, color: c.textMuted }}>
              + implementação cobrada à parte
            </div>
          </div>

          {/* Criador */}
          <div className="rounded-2xl p-6 border" style={{ background: c.bgCard, borderColor: `${c.green}18` }}>
            <GraduationCap className="w-6 h-6 mb-3" style={{ color: c.green }} />
            <p className="font-bold text-[14px] mb-4" style={{ color: c.green }}>1 Criador de Curso</p>
            <p className="text-[11px] mb-3" style={{ color: c.textMuted }}>Assumindo 30 clientes/aluno</p>
            <div className="space-y-2.5">
              {criadorAlunos.map(n => {
                const clientes = n * 30;
                return (
                  <div key={n} className="flex justify-between text-[13px]" style={{ color: c.textMuted }}>
                    <span>{n} alunos</span>
                    <span className="font-bold" style={{ color: clientes >= 3000 ? c.green : c.text }}>
                      R$ {(clientes * MRR_MEDIO * COMISSOES.criador / 100).toLocaleString("pt-BR")}/mês
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-3 border-t text-[11px]" style={{ borderColor: c.border, color: c.textMuted }}>
              + receita do curso (50/50)
            </div>
          </div>

          {/* Diretor */}
          <div className="rounded-2xl p-6 border" style={{ background: c.bgCard, borderColor: `${c.gold}18` }}>
            <Award className="w-6 h-6 mb-3" style={{ color: c.gold }} />
            <p className="font-bold text-[14px] mb-4" style={{ color: c.gold }}>1 Diretor</p>
            <p className="text-[11px] mb-3" style={{ color: c.textMuted }}>Assumindo 200 vendedores × 30 clientes/vendedor por criador</p>
            <div className="space-y-2.5">
              {diretorCriadores.map(n => {
                const vendedores = n * 40;
                const clientes = vendedores * 25;
                return (
                  <div key={n} className="flex justify-between text-[13px]" style={{ color: c.textMuted }}>
                    <span>{n} criadores</span>
                    <span className="font-bold" style={{ color: clientes >= 10000 ? c.gold : c.text }}>
                      R$ {(clientes * MRR_MEDIO * COMISSOES.diretor / 100).toLocaleString("pt-BR")}/mês
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-3 border-t text-[11px]" style={{ borderColor: c.border, color: c.textMuted }}>
              Override sobre toda a rede
            </div>
          </div>
        </div>
      </div>
    );
  },

  /* ── SLIDE 15 — PROJEÇÕES REALISTAS (Curto Prazo) ── */
  () => {
    const nearTermData = [
      { cenario: "50 vendedores", vendedores: 50, vendasMes: 5 },
      { cenario: "100 vendedores", vendedores: 100, vendasMes: 5 },
      { cenario: "200 vendedores", vendedores: 200, vendasMes: 5 },
      { cenario: "500 vendedores", vendedores: 500, vendasMes: 5 },
    ].map(d => {
      const clientes = d.vendedores * d.vendasMes;
      const mrr = clientes * MRR_MEDIO;
      return {
        ...d, clientes, mrr,
        ponta: mrr * COMISSOES.sub / 100,
        criador: mrr * COMISSOES.criador / 100,
        diretor: mrr * COMISSOES.diretor / 100,
        adhub: mrr * COMISSOES.adhub / 100,
      };
    });

    const chartData = nearTermData.map(d => ({
      name: d.cenario.replace(" vendedores", ""),
      "Sub-afiliados": +(d.ponta / 1e3).toFixed(0),
      Diretores: +(d.diretor / 1e3).toFixed(0),
      Criadores: +(d.criador / 1e3).toFixed(0),
      AdHub: +(d.adhub / 1e3).toFixed(0),
    }));

    return (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
        <SlideTitle num={15} title="Projeções Realistas — Curto Prazo" sub="Primeiros 6–12 Meses" />
        <p className="text-[12px] mb-4" style={{ color: c.textMuted }}>
          MRR médio: R$ {MRR_MEDIO}/cliente · 5 vendas/vendedor/mês · Valores = <strong style={{ color: c.text }}>novo MRR mensal</strong>
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <DataTable
            headers={["Rede", "Novos Clientes/mês", "Novo MRR", `Diretor ${COMISSOES.diretor}%`, `Ponta ${COMISSOES.sub}%`]}
            rows={nearTermData.map(d => [
              d.cenario,
              d.clientes.toLocaleString("pt-BR"),
              `R$ ${(d.mrr / 1e3).toFixed(0)}K`,
              `R$ ${(d.diretor / 1e3).toFixed(0)}K`,
              `R$ ${(d.ponta / 1e3).toFixed(0)}K`,
            ])}
          />
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={c.border} />
              <XAxis dataKey="name" tick={{ fill: c.textMuted, fontSize: 11 }} />
              <YAxis tick={{ fill: c.textMuted, fontSize: 11 }} tickFormatter={v => `R$${v}K`} />
              <Tooltip formatter={(v: number) => `R$ ${v}K`}
                contentStyle={{ background: c.bgCard, border: `1px solid ${c.border}`, borderRadius: 12, color: c.text }} />
              <Bar dataKey="Diretores" fill={c.gold} stackId="a" />
              <Bar dataKey="Criadores" fill={c.green} stackId="a" />
              <Bar dataKey="Sub-afiliados" fill={c.orange} stackId="a" />
              <Bar dataKey="AdHub" fill={c.accent} stackId="a" />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  },

  /* ── SLIDE 16 — PROJEÇÃO ANUAL REALISTA ── */
  () => {
    const newMRR = 500 * 5 * MRR_MEDIO; // 500 vendedores × 5 vendas = 2500 clientes/mês
    const churn = 0.03;
    const months: { mes: string; acumulado: number }[] = [];
    let acc = 0;
    for (let i = 1; i <= 12; i++) {
      acc = acc * (1 - churn) + newMRR;
      months.push({ mes: `M${i}`, acumulado: Math.round(acc / 1e3) });
    }
    return (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
        <SlideTitle num={16} title="Efeito Bola de Neve" sub="MRR Acumulado — 12 Meses (500 vendedores)" />
        <p className="text-[12px] mb-4" style={{ color: c.textMuted }}>
          Cenário: 500 vendedores × 5 vendas/mês, churn 3%/mês — <strong style={{ color: c.text }}>crescimento progressivo e sustentável</strong>
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={months}>
            <CartesianGrid strokeDasharray="3 3" stroke={c.border} />
            <XAxis dataKey="mes" tick={{ fill: c.textMuted, fontSize: 11 }} />
            <YAxis tick={{ fill: c.textMuted, fontSize: 11 }} tickFormatter={v => `R$${v}K`} />
            <Tooltip formatter={(v: number) => `R$ ${v}K`}
              contentStyle={{ background: c.bgCard, border: `1px solid ${c.border}`, borderRadius: 12, color: c.text }} />
            <Line type="monotone" dataKey="acumulado" stroke={c.accent} strokeWidth={3}
              dot={{ fill: c.accent, r: 4 }} name="MRR Acumulado" />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-6 grid grid-cols-3 gap-5">
          <Metric label="MRR Mês 1" value={`R$ ${(newMRR / 1e3).toFixed(0)}K`} color={c.accent} />
          <Metric label="MRR Mês 12" value={`R$ ${months[11].acumulado}K`} sub="Acumulado (– churn 3%)" color={c.green} />
          <Metric label="Clientes ativos M12" value={`~${Math.round(months[11].acumulado * 1000 / MRR_MEDIO).toLocaleString("pt-BR")}`} sub="Base ativa estimada" color={c.teal} />
        </div>
      </div>
    );
  },

  /* ── SLIDE 16B — VISÃO DE LONGO PRAZO (10K+) ── */
  () => {
    const longTermData = [
      { fase: "Ano 1", vendedores: 500, clientes: 15000, mrr: 15000 * MRR_MEDIO },
      { fase: "Ano 2", vendedores: 2000, clientes: 50000, mrr: 50000 * MRR_MEDIO },
      { fase: "Ano 3 (LATAM)", vendedores: 5000, clientes: 120000, mrr: 120000 * MRR_MEDIO },
      { fase: "Ano 4 (Global)", vendedores: 10000, clientes: 250000, mrr: 250000 * MRR_MEDIO },
    ];

    const chartData = longTermData.map(d => ({
      name: d.fase,
      MRR: +(d.mrr / 1e6).toFixed(1),
    }));

    return (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
        <SlideTitle num={17} title="Visão de Longo Prazo" sub="Roadmap de Escala + Internacionalização" />
        <p className="text-[12px] mb-5" style={{ color: c.textMuted }}>
          Projeção de crescimento progressivo — cenário de <strong style={{ color: c.text }}>expansão com internacionalização</strong> a partir do Ano 3.
          Estes números são <strong style={{ color: c.accent }}>potencial de longo prazo</strong>, não metas imediatas.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <DataTable
            headers={["Fase", "Vendedores", "Clientes Ativos", "MRR Estimado"]}
            rows={longTermData.map(d => [
              d.fase,
              d.vendedores.toLocaleString("pt-BR"),
              d.clientes.toLocaleString("pt-BR"),
              `R$ ${(d.mrr / 1e6).toFixed(1)}M`,
            ])}
          />
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={c.border} />
              <XAxis dataKey="name" tick={{ fill: c.textMuted, fontSize: 11 }} />
              <YAxis tick={{ fill: c.textMuted, fontSize: 11 }} tickFormatter={v => `R$${v}M`} />
              <Tooltip formatter={(v: number) => `R$ ${v.toFixed(1)}M`}
                contentStyle={{ background: c.bgCard, border: `1px solid ${c.border}`, borderRadius: 12, color: c.text }} />
              <Bar dataKey="MRR" fill={c.accent} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 rounded-xl p-4 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
          <p className="text-[12px] text-center" style={{ color: c.textMuted }}>
            <Globe className="w-4 h-4 inline mr-2" style={{ color: c.teal }} />
            A escala de 10.000+ vendedores é viável com <strong style={{ color: c.text }}>internacionalização (LATAM e global)</strong> — o mercado brasileiro isolado comporta crescimento expressivo nos primeiros anos.
          </p>
        </div>
      </div>
    );
  },

  /* ── SLIDE 18 — CUSTO DAS PRÉVIAS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={18} title="Custo das Prévias" sub="Sustentabilidade" />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <BulletList icon={DollarSign} items={[
            `Cada preview custa R$ ${CUSTO_PREVIA} (tokens de geração de IA)`,
            "Custo pago pelo sub-afiliado como investimento no fechamento",
            "É o CAC operacional — custo de aquisição via demonstração",
          ]} />
          <div className="mt-6 rounded-2xl p-6 border" style={{ background: c.bgCard, borderColor: c.border }}>
            <p className="text-[14px] font-bold mb-4" style={{ color: c.text }}>Exemplo prático</p>
            <div className="space-y-3">
              <div className="flex justify-between text-[13px]" style={{ color: c.textMuted }}>
                <span>Prévias para 1 venda</span>
                <span style={{ color: c.text }}>~5 prévias</span>
              </div>
              <div className="flex justify-between text-[13px]" style={{ color: c.textMuted }}>
                <span>Custo</span>
                <span style={{ color: c.orange }}>5 × R$ 30 = R$ 150</span>
              </div>
              <div className="flex justify-between text-[13px]" style={{ color: c.textMuted }}>
                <span>Setup cobrado (ex.)</span>
                <span style={{ color: c.green }}>R$ 2.000</span>
              </div>
              <div className="flex justify-between text-[13px] pt-3 border-t" style={{ borderColor: c.border }}>
                <span style={{ color: c.textMuted }}>ROI do sub-afiliado</span>
                <span className="font-bold" style={{ color: c.green }}>13x no setup</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-2xl p-8 border text-center" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
            <ShieldCheck className="w-12 h-12 mx-auto mb-4" style={{ color: c.accent }} />
            <p className="font-bold text-[15px] mb-2" style={{ color: c.text }}>Modelo sustentável</p>
            <p className="text-[13px] leading-relaxed" style={{ color: c.textMuted }}>
              O sub-afiliado investe R$ 150 em prévias e pode fechar R$ 2.000+ de setup + comissão recorrente. O retorno é imediato.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 19 — DIRETOR GANHA EM VOLUME ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={19} title="Por que o Diretor Ganha Mais" sub="Volume e Escala" />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <BulletList icon={TrendingUp} color={c.gold} items={[
            `Override de ${COMISSOES.diretor}% é MAIOR que o do criador — recompensa pela gestão`,
            "Diretor não precisa vender para o cliente final",
            "Ele constrói e gerencia a rede de criadores e vendedores",
            "Override pequeno em % vira gigante em base e escala",
          ]} />
        </div>
        <div className="space-y-5">
          <Metric label="10 Criadores sob gestão" value="↓" color={c.gold} />
          <Metric label="200 Vendedores na rede" value="↓" color={c.orange} />
          <Metric label="5.000 Clientes ativos" value="↓" color={c.green} />
          <Metric label="Override do Diretor" value={`R$ ${(5000 * MRR_MEDIO * COMISSOES.diretor / 100).toLocaleString("pt-BR")}/mês`} color={c.gold} large />
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 20 — CRIADOR DE CURSO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={20} title="O que o Criador de Curso Ganha" sub="Modelo do Curso" />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: c.green }}>Divisão do curso</p>
          <div className="rounded-2xl p-6 border mb-5" style={{ background: c.greenGlow, borderColor: `${c.green}18` }}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-[15px] font-bold" style={{ color: c.green }}>50% Criador</span>
              <span className="text-[15px] font-bold" style={{ color: c.accent }}>50% AdHub</span>
            </div>
            <p className="text-[12px]" style={{ color: c.textMuted }}>
              AdHub: estrutura, funil, landing, copy, automações, suporte, tráfego
            </p>
          </div>
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: c.accentLight }}>Override adicional</p>
          <BulletList items={[
            `${COMISSOES.criador}% do MRR dos clientes fechados pelos alunos`,
            "Comissões sobre HubVendas e Ferramenta de Prospecção",
            "Curso + override + upsells = múltiplas fontes de renda",
          ]} />
        </div>
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl p-6 border text-center" style={{ background: c.bgCard, borderColor: c.border }}>
            <GraduationCap className="w-10 h-10 mx-auto mb-3" style={{ color: c.green }} />
            <p className="font-bold text-[15px]" style={{ color: c.text }}>O Criador forma vendedores</p>
            <p className="text-[12px] mt-2 leading-relaxed" style={{ color: c.textMuted }}>
              Quanto mais vendedores bem treinados, maior o override recorrente.
            </p>
          </div>
          <div className="rounded-2xl p-6 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
            <p className="text-[12px] font-bold mb-2" style={{ color: c.accentLight }}>Exemplo: 200 alunos-vendedores</p>
            <p className="text-[12px] leading-relaxed" style={{ color: c.textMuted }}>
              200 alunos × 30 clientes = 6.000 clientes ativos<br />
              MRR: 6.000 × R$ {MRR_MEDIO} = R$ {(6000 * MRR_MEDIO).toLocaleString("pt-BR")}<br />
              <strong style={{ color: c.green }}>Override {COMISSOES.criador}% = R$ {(6000 * MRR_MEDIO * COMISSOES.criador / 100).toLocaleString("pt-BR")}/mês</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 21 — SUB-AFILIADO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={21} title="O que o Sub-afiliado Ganha" sub="Vendedor na Ponta" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="rounded-2xl p-6 border" style={{ background: c.greenGlow, borderColor: `${c.green}18` }}>
            <DollarSign className="w-6 h-6 mb-3" style={{ color: c.green }} />
            <p className="font-bold text-[15px]" style={{ color: c.green }}>Dinheiro Rápido</p>
            <p className="text-[13px] mt-2" style={{ color: c.textMuted }}>Setup com cobrança LIVRE — R$ 1k, R$ 2k, R$ 3k+</p>
          </div>
          <div className="rounded-2xl p-6 border" style={{ background: c.accentGlow3, borderColor: `${c.accent}15` }}>
            <Repeat className="w-6 h-6 mb-3" style={{ color: c.accent }} />
            <p className="font-bold text-[15px]" style={{ color: c.accentLight }}>Renda Recorrente</p>
            <p className="text-[13px] mt-2" style={{ color: c.textMuted }}>{COMISSOES.sub}% da assinatura enquanto ativo</p>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: c.gold }}>Potencial de longo prazo</p>
          <div className="rounded-2xl p-6 border" style={{ background: c.bgCard, borderColor: `${c.gold}18` }}>
            <div className="space-y-3">
              {[50, 100, 200, 300].map(n => (
                <div key={n} className="flex justify-between text-[13px]" style={{ color: c.textMuted }}>
                  <span>{n} clientes ativos</span>
                  <span className="font-bold" style={{ color: n >= 200 ? c.green : c.text }}>
                    R$ {(n * MRR_MEDIO * COMISSOES.sub / 100).toLocaleString("pt-BR")}/mês
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t text-[11px]" style={{ borderColor: c.border, color: c.textMuted }}>
              + implementação cobrada à parte ao longo do ano
            </div>
          </div>
          <div className="mt-4 p-4 rounded-xl text-center" style={{ background: c.bgCard }}>
            <p className="text-[12px]" style={{ color: c.textMuted }}>
              <strong style={{ color: c.accentLight }}>200 clientes</strong> = R$ {(200 * MRR_MEDIO * COMISSOES.sub / 100).toLocaleString("pt-BR")}/mês<br />
              + implementações = potencial de <strong style={{ color: c.green }}>R$ 150k+/ano</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  /* ── SLIDE 22 — OPERAÇÃO E SUPORTE ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={22} title="O que a AdHub Entrega" sub="Operação & Suporte" />
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { icon: Cpu, title: "Automação Completa", items: ["GMB → IA → Vercel", "Geração de prévia automática", "Publicação e hospedagem"] },
          { icon: LayoutDashboard, title: "Painel & Métricas", items: ["Dashboard do afiliado", "Métricas de conversão", "Tracking de comissões"] },
          { icon: BookOpen, title: "Central de Materiais", items: ["Scripts de prospecção", "Templates de proposta", "Vídeos de treinamento"] },
          { icon: Settings, title: "Infra de Pagamentos", items: ["Checkout Stripe integrado", "Comissões automáticas", "Relatórios financeiros"] },
        ].map((section, i) => (
          <div key={i} className="rounded-2xl p-6 border" style={{ background: c.bgCard, borderColor: c.border }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${c.accent}12` }}>
              <section.icon className="w-5 h-5" style={{ color: c.accent }} />
            </div>
            <p className="font-bold text-[14px] mb-3" style={{ color: c.text }}>{section.title}</p>
            <ul className="space-y-2">
              {section.items.map((item, j) => (
                <li key={j} className="text-[12px] flex items-center gap-2" style={{ color: c.textMuted }}>
                  <CheckCircle className="w-3 h-3" style={{ color: c.green }} /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 23 — TIERS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={23} title="Níveis de Progressão" sub="Tiers" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { tier: "Starter", color: c.textMuted, icon: UserPlus, items: ["Acesso básico", "Limite de prévias/dia", `Comissão padrão (${COMISSOES.sub}%)`, "Treinamento inicial"] },
          { tier: "Pro", color: c.teal, icon: TrendingUp, items: ["Meta: 20+ vendas/mês", "Limite maior de prévias", "Bônus trimestral", "Suporte prioritário"] },
          { tier: "Elite", color: c.gold, icon: Award, items: ["Top performers", "Melhores taxas + bônus", "Acesso antecipado a features", "Mentorias exclusivas"] },
        ].map((t) => (
          <div key={t.tier} className="rounded-2xl p-6 border hover:scale-[1.02] transition-transform"
            style={{ background: c.bgCard, borderColor: `${t.color}22` }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${t.color}12` }}>
              <t.icon className="w-5 h-5" style={{ color: t.color }} />
            </div>
            <p className="font-bold text-xl mb-4 tracking-tight" style={{ color: t.color }}>{t.tier}</p>
            <ul className="space-y-2.5">
              {t.items.map((item, i) => (
                <li key={i} className="text-[12px] flex items-center gap-2" style={{ color: c.textMuted }}>
                  <CheckCircle className="w-3 h-3" style={{ color: t.color }} /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 24 — RISCOS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={24} title="Riscos e Mitigações" sub="Transparência" />
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { risk: "Abuso de previews", solution: "Sub-afiliado paga R$ 30/prévia — controle natural + limites diários", icon: Shield },
          { risk: "Qualidade", solution: "Padrões mínimos, auditoria periódica, feedback do cliente", icon: Star },
          { risk: "Promessas indevidas", solution: "Contrato, compliance, materiais oficiais obrigatórios", icon: AlertTriangle },
          { risk: "Chargebacks", solution: "Política clara de reembolso, prova de entrega, janela de disputa", icon: Lock },
          { risk: "Sustentabilidade", solution: `AdHub retém ${COMISSOES.adhub}% — margem saudável para operar e escalar`, icon: DollarSign },
          { risk: "Conflitos", solution: "Cookie + ID + CRM para atribuição precisa de vendas", icon: Target },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl p-5 border flex items-start gap-4"
            style={{ background: c.bgCard, borderColor: c.border }}>
            <item.icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: c.orange }} />
            <div>
              <p className="font-bold text-[14px]" style={{ color: c.text }}>{item.risk}</p>
              <p className="text-[12px] mt-1 leading-relaxed" style={{ color: c.textMuted }}>{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 24 — PRÓXIMOS PASSOS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto">
      <SlideTitle num={24} title="Próximos Passos" sub="CTA" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Award, title: "Diretor", color: c.gold, items: ["Alinhamento estratégico", "Metas e KPIs", "Contrato + override", "Recrutar criadores"] },
          { icon: GraduationCap, title: "Criador de Curso", color: c.green, items: ["Gravação de conteúdo", "Funil de vendas", "Lançamento", "Recrutar vendedores"] },
          { icon: Rocket, title: "Sub-afiliado", color: c.orange, items: ["Treinamento rápido", "Ferramenta de Prospecção", "Primeiras prévias", "Primeiras vendas"] },
        ].map((r) => (
          <div key={r.title} className="rounded-2xl p-7 border hover:scale-[1.02] transition-transform"
            style={{ background: c.bgCard, borderColor: `${r.color}22` }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${r.color}12` }}>
              <r.icon className="w-5 h-5" style={{ color: r.color }} />
            </div>
            <p className="font-bold text-xl mb-4 tracking-tight" style={{ color: r.color }}>{r.title}</p>
            <ul className="space-y-2.5">
              {r.items.map((item, i) => (
                <li key={i} className="text-[13px] flex items-center gap-2.5" style={{ color: c.textMuted }}>
                  <ArrowRight className="w-3 h-3 shrink-0" style={{ color: r.color }} /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── SLIDE 25 — RESUMO FINAL ── */
  () => (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-20 max-w-5xl mx-auto text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[200px] opacity-20"
        style={{ background: "radial-gradient(ellipse, hsl(340 75% 55% / 0.4), transparent 70%)" }} />

      <img src={logoAdhub} alt="AD HUB Marketing" className="h-16 md:h-20 w-auto rounded-2xl mb-8 relative z-10 shadow-2xl" />

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 relative z-10" style={{ color: c.text }}>
        Justo. Escalável. <span style={{ color: c.accent }}>Previsível.</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 relative z-10 w-full">
        <Metric label="Sub-afiliado" value={`${COMISSOES.sub}%`} sub="+ setup livre" color={c.orange} />
        <Metric label="Criador" value={`${COMISSOES.criador}%`} sub="override" color={c.green} />
        <Metric label="Diretor" value={`${COMISSOES.diretor}%`} sub="override" color={c.gold} />
        <Metric label="AdHub" value={`${COMISSOES.adhub}%`} sub="operação" color={c.accent} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 relative z-10 w-full">
        <div className="rounded-2xl p-5 border" style={{ background: c.bgCard, borderColor: c.border }}>
          <p className="text-[11px] uppercase tracking-widest mb-2" style={{ color: c.textMuted }}>Ganho Rápido</p>
          <p className="text-[14px] font-bold" style={{ color: c.green }}>3 sites × R$ 2k = R$ 6.000</p>
        </div>
        <div className="rounded-2xl p-5 border" style={{ background: c.bgCard, borderColor: c.border }}>
          <p className="text-[11px] uppercase tracking-widest mb-2" style={{ color: c.textMuted }}>Recorrência</p>
          <p className="text-[14px] font-bold" style={{ color: c.accentLight }}>200 clientes = R$ {(200 * MRR_MEDIO * COMISSOES.sub / 100).toLocaleString("pt-BR")}/mês</p>
        </div>
        <div className="rounded-2xl p-5 border" style={{ background: c.bgCard, borderColor: c.border }}>
          <p className="text-[11px] uppercase tracking-widest mb-2" style={{ color: c.textMuted }}>Escala 10k</p>
          <p className="text-[14px] font-bold" style={{ color: c.gold }}>MRR R$ 13,8M+/mês</p>
        </div>
      </div>

      <p className="text-[14px] mt-8 relative z-10" style={{ color: c.textMuted }}>
        Implementação livre + comissão recorrente + prévia automática com IA
      </p>
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
    document.title = "Programa de Afiliados — AdHub Marketing";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); setCur((p) => Math.min(p + 1, total - 1)); }
      if (e.key === "ArrowLeft") { e.preventDefault(); setCur((p) => Math.max(p - 1, 0)); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [total]);

  return (
    <div className="relative w-full h-screen overflow-hidden select-none" style={{ background: c.bg, fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Logo top-left */}
      <div className="absolute top-5 left-6 z-50">
        <img src={logoAdhub} alt="AD HUB" className="h-9 w-auto rounded-lg opacity-80" />
      </div>

      {/* Slide counter top-right */}
      <div className="absolute top-5 right-6 z-50">
        <span className="text-[11px] font-mono px-3 py-1.5 rounded-full"
          style={{ background: c.bgCard, color: c.textMuted, border: `1px solid ${c.border}` }}>
          {cur + 1} / {total}
        </span>
      </div>

      {/* Slides */}
      <div className="absolute inset-0 overflow-y-auto">
        {slides.map((S, i) => (
          <Slide key={i} active={i === cur}><S /></Slide>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-50"
        style={{ background: `linear-gradient(transparent, ${c.bg} 60%)` }}>
        <button onClick={() => setCur((p) => Math.max(p - 1, 0))} disabled={cur === 0}
          className="p-2.5 rounded-xl transition-all disabled:opacity-20 hover:scale-105"
          style={{ background: c.bgCard, color: c.text, border: `1px solid ${c.border}` }}>
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCur(i)}
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{
                background: i === cur ? c.accent : c.border,
                width: i === cur ? 20 : 6,
                height: 6,
                borderRadius: 3,
              }} />
          ))}
        </div>

        <button onClick={() => setCur((p) => Math.min(p + 1, total - 1))} disabled={cur === total - 1}
          className="p-2.5 rounded-xl transition-all disabled:opacity-20 hover:scale-105"
          style={{ background: c.bgCard, color: c.text, border: `1px solid ${c.border}` }}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProgramaAfiliados;
