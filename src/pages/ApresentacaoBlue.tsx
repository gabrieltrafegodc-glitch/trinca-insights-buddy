import { useState, useEffect } from "react";
import {
  ChevronLeft, ChevronRight, TrendingUp, DollarSign, BarChart3, Zap,
  Target, CheckCircle, ArrowRight, Building2, Users, MessageSquare,
  Bot, Layers, ShieldCheck, Rocket, Globe, PieChart, Award, Briefcase,
  Monitor, Phone, Mail, Clock, ArrowUpRight, Minus, PenTool
} from "lucide-react";
import logoAdhub from "@/assets/logo-adhub.jpeg";
import logoBlue from "@/assets/logo-blue.png";

/* ─── colour tokens scoped to this presentation ─── */
const blue = {
  bg: "hsl(210 60% 8%)",
  bgCard: "hsl(210 50% 12%)",
  bgCardHover: "hsl(210 50% 15%)",
  border: "hsl(210 40% 20%)",
  accent: "hsl(210 90% 56%)",
  accentLight: "hsl(200 90% 65%)",
  accentGlow: "hsl(210 90% 56% / 0.15)",
  accentGlow2: "hsl(210 90% 56% / 0.25)",
  text: "hsl(0 0% 96%)",
  textMuted: "hsl(210 15% 55%)",
  green: "hsl(160 60% 45%)",
  red: "hsl(0 65% 55%)",
  gold: "hsl(45 90% 55%)",
};

/* ─── Slide wrapper ─── */
const Slide = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <div
    className={`absolute inset-0 transition-all duration-500 ${
      active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
    }`}
    style={{ background: blue.bg }}
  >
    {children}
  </div>
);

/* ─── Metric pill ─── */
const Metric = ({ label, value, sub, accent = false }: { label: string; value: string; sub?: string; accent?: boolean }) => (
  <div
    className="rounded-xl p-5 border text-center"
    style={{
      background: accent ? blue.accentGlow2 : blue.bgCard,
      borderColor: accent ? blue.accent : blue.border,
    }}
  >
    <p className="text-sm font-medium mb-1" style={{ color: blue.textMuted }}>{label}</p>
    <p className="text-3xl font-extrabold" style={{ color: accent ? blue.accentLight : blue.text }}>{value}</p>
    {sub && <p className="text-xs mt-1" style={{ color: blue.textMuted }}>{sub}</p>}
  </div>
);

/* ─── Bullet list ─── */
const BulletList = ({ items, icon: Icon = CheckCircle }: { items: string[]; icon?: any }) => (
  <ul className="space-y-2.5">
    {items.map((t, i) => (
      <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: blue.text }}>
        <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: blue.accent }} />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

/* ─── Comparison bar ─── */
const CompareRow = ({ label, impulsefy, eco }: { label: string; impulsefy: string; eco: string }) => (
  <div className="grid grid-cols-3 gap-4 py-3 border-b" style={{ borderColor: blue.border }}>
    <span className="text-sm font-medium" style={{ color: blue.textMuted }}>{label}</span>
    <span className="text-sm text-center font-semibold" style={{ color: blue.red }}>{impulsefy}</span>
    <span className="text-sm text-center font-semibold" style={{ color: blue.green }}>{eco}</span>
  </div>
);

/* ═══════════════════════════════════════════════ */
/*                    SLIDES                       */
/* ═══════════════════════════════════════════════ */

const slides = [
  /* ── 1  CAPA ── */
  () => (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[160px]" style={{ background: blue.accentGlow }} />
      <div className="flex items-center gap-6 mb-10 relative z-10">
        <img src={logoBlue} alt="Blue Saúde" className="h-16 w-auto" />
        <div className="h-10 w-px" style={{ background: blue.border }} />
        <img src={logoAdhub} alt="AD HUB" className="h-12 w-auto rounded-lg" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight relative z-10" style={{ color: blue.text }}>
        Parceria <span style={{ color: blue.accent }}>Estratégica</span>
      </h1>
      <p className="text-xl mt-3 font-medium relative z-10" style={{ color: blue.textMuted }}>
        Blue Saúde + AD HUB Marketing
      </p>
      <p className="text-base mt-6 max-w-lg relative z-10" style={{ color: blue.textMuted }}>
        Estruturação de Marketing, Automação Comercial e Expansão Digital
      </p>
    </div>
  ),

  /* ── 2  CONTEXTO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 02</p>
      <h2 className="text-3xl font-extrabold mb-6" style={{ color: blue.text }}>Contexto da Parceria</h2>
      <p className="text-sm mb-6 leading-relaxed" style={{ color: blue.textMuted }}>
        A AD HUB já atua na estrutura digital da Blue Saúde. A <span style={{ color: blue.accent }}>primeira versão das automações</span> já foi implementada e está em operação.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl p-5 border" style={{ background: blue.bgCard, borderColor: blue.border }}>
          <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: blue.accent }}>
            <Zap className="w-4 h-4" /> Automação V1 Entregue
          </h3>
          <BulletList items={[
            "Captura de leads",
            "Disparo imediato no WhatsApp",
            "Qualificação com agente de IA",
            "Nutrição e reativação de leads",
          ]} />
        </div>
        <div className="rounded-xl p-5 border" style={{ background: blue.bgCard, borderColor: blue.border }}>
          <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: blue.accent }}>
            <Layers className="w-4 h-4" /> Estrutura Atual
          </h3>
          <BulletList items={[
            "CRM RD Station configurado",
            "Integrações de automação ativas",
            "Campanhas de tráfego rodando",
            "Fluxos de WhatsApp operacionais",
          ]} />
        </div>
      </div>
    </div>
  ),

  /* ── 3  RESULTADOS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 03</p>
      <h2 className="text-3xl font-extrabold mb-2" style={{ color: blue.text }}>Resultados Já Gerados</h2>
      <p className="text-sm mb-6" style={{ color: blue.textMuted }}>Em apenas 3 meses de operação</p>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <Metric label="Investimento em Tráfego" value="R$ 15k" />
        <Metric label="Faturamento Gerado" value="R$ 90k" accent />
        <Metric label="ROI" value="6x" accent />
      </div>
      <div className="rounded-xl p-5 border" style={{ background: blue.accentGlow, borderColor: blue.accent }}>
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-5 h-5" style={{ color: blue.accent }} />
          <span className="text-sm font-bold" style={{ color: blue.text }}>Valor total gerado: R$ 105.000</span>
        </div>
        <p className="text-xs" style={{ color: blue.textMuted }}>
          Inclui R$ 15.000 em receita recorrente estimada de contratos PJ com comissão mensal.
        </p>
      </div>
      <div className="mt-4 rounded-lg px-4 py-3 text-center" style={{ background: blue.bgCard, borderColor: blue.border }}>
        <p className="text-sm font-semibold" style={{ color: blue.green }}>✦ A estratégia já se mostrou altamente lucrativa.</p>
      </div>
    </div>
  ),

  /* ── 4  PROJEÇÃO DE ESCALA ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 04</p>
      <h2 className="text-3xl font-extrabold mb-2" style={{ color: blue.text }}>Projeção de Escala</h2>
      <p className="text-sm mb-3 leading-relaxed" style={{ color: blue.textMuted }}>
        Com os custos iniciais já conseguimos esse resultado. Ao decorrer, vamos <span style={{ color: blue.accent }}>otimizando e maximizando</span> o Retorno sobre o Investimento.
      </p>
      <p className="text-sm mb-6" style={{ color: blue.textMuted }}>
        Com base no ROI comprovado de 6x, segue uma projeção com escala de verba:
      </p>
      <div className="space-y-4">
        {[
          { invest: "R$ 20k", fat: "R$ 120k", note: "Escala inicial" },
          { invest: "R$ 50k", fat: "R$ 300k", note: "Crescimento acelerado" },
          { invest: "R$ 100k", fat: "R$ 600k", note: "Abrir novas regiões e fechar novas parcerias" },
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 items-center gap-4 rounded-xl p-4 border" style={{ background: i === 2 ? blue.accentGlow2 : blue.bgCard, borderColor: i === 2 ? blue.accent : blue.border }}>
            <div>
              <p className="text-xs" style={{ color: blue.textMuted }}>Investimento/mês</p>
              <p className="text-xl font-extrabold" style={{ color: blue.text }}>{row.invest}</p>
            </div>
            <div className="text-center">
              <p className="text-xs" style={{ color: blue.textMuted }}>Faturamento estimado</p>
              <p className="text-xl font-extrabold" style={{ color: blue.green }}>{row.fat}</p>
            </div>
            <div className="text-right">
              <p className="text-xs" style={{ color: i === 2 ? blue.accent : blue.textMuted }}>{row.note}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg px-4 py-3 text-center" style={{ background: blue.bgCard }}>
        <p className="text-sm font-semibold" style={{ color: blue.green }}>✦ Quanto maior a verba, maior o retorno — com otimização contínua.</p>
      </div>
    </div>
  ),

  /* ── 5  NOVA NECESSIDADE ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 05</p>
      <h2 className="text-3xl font-extrabold mb-2" style={{ color: blue.text }}>Nova Necessidade da Blue</h2>
      <p className="text-sm mb-6" style={{ color: blue.textMuted }}>Desafios atuais da operação comercial</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { icon: Building2, text: "Dois escritórios com ~100 mil disparos/mês (Custo de API oficial fica inviável)" },
          { icon: MessageSquare, text: "WhatsApp unificado para toda operação" },
          { icon: Target, text: "Prospecção ativa para empresas" },
          { icon: Layers, text: "Integração de setores internos" },
          { icon: BarChart3, text: "Relatórios de performance v2 com performance por corretor" },
          { icon: Users, text: "Gestão estruturada de leads e corretores" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg p-3 border" style={{ background: blue.bgCard, borderColor: blue.border }}>
            <item.icon className="w-4 h-4 shrink-0" style={{ color: blue.accent }} />
            <span className="text-sm" style={{ color: blue.text }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── 5  ESTRUTURA ATUAL ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 06</p>
      <h2 className="text-3xl font-extrabold mb-2" style={{ color: blue.text }}>Estrutura Atual</h2>
      <p className="text-sm mb-6" style={{ color: blue.textMuted }}>Continuará funcionando durante a evolução do sistema</p>
      <div className="rounded-xl p-6 border mb-4" style={{ background: blue.bgCard, borderColor: blue.border }}>
        <h3 className="text-sm font-bold mb-4" style={{ color: blue.accent }}>Durante os próximos meses:</h3>
        <BulletList items={[
          "Manter automações existentes",
          "Manter campanhas de tráfego",
          "Ativar operação da Unimed Maringá",
          "Expandir marketing digital",
        ]} />
      </div>
      <div className="flex items-center gap-3 rounded-xl px-5 py-4 border" style={{ background: blue.accentGlow, borderColor: blue.accent }}>
        <Clock className="w-5 h-5" style={{ color: blue.accent }} />
        <span className="text-sm font-semibold" style={{ color: blue.text }}>
          Tempo estimado para evolução: <span style={{ color: blue.accent }}>até 4 meses</span>
        </span>
      </div>
    </div>
  ),

  /* ── 6  CENÁRIO 1 ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 07</p>
      <h2 className="text-3xl font-extrabold mb-2" style={{ color: blue.text }}>Cenário 1</h2>
      <p className="text-lg font-semibold mb-6" style={{ color: blue.textMuted }}>Manter Estrutura Atual</p>
      <div className="rounded-xl p-6 border mb-6" style={{ background: blue.bgCard, borderColor: blue.border }}>
        <p className="text-sm mb-1" style={{ color: blue.textMuted }}>Mensalidade atual</p>
        <p className="text-4xl font-extrabold" style={{ color: blue.text }}>R$ 1.000<span className="text-lg font-normal" style={{ color: blue.textMuted }}>/mês</span></p>
      </div>
      <div className="rounded-xl p-5 border" style={{ background: "hsl(0 60% 12%)", borderColor: "hsl(0 40% 25%)" }}>
        <h3 className="text-sm font-bold mb-3" style={{ color: blue.red }}>Limitações</h3>
        <ul className="space-y-2">
          {[
            "Não resolve disparos massivos",
            "Não integra todos os canais",
            "Não cria um sistema comercial escalável",
            "Não resolve prospecção ativa",
          ].map((t, i) => (
            <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "hsl(0 30% 70%)" }}>
              <Minus className="w-3.5 h-3.5" style={{ color: blue.red }} />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),

  /* ── 7  CENÁRIO 2: IMPULSEFY ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 08</p>
      <h2 className="text-3xl font-extrabold mb-2" style={{ color: blue.text }}>Cenário 2</h2>
      <p className="text-lg font-semibold mb-6" style={{ color: blue.textMuted }}>Migração para Impulsefy</p>
      <p className="text-sm mb-5" style={{ color: blue.textMuted }}>Alternativa com ferramenta externa</p>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Metric label="Setup de Implementação" value="R$ 10k" sub="ou R$ 15k com API oficial" />
        <Metric label="Mensalidade Total" value="R$ 4k" sub="R$ 3k plataforma + R$ 1k gestão" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 border text-center" style={{ background: blue.bgCard, borderColor: blue.border }}>
          <p className="text-xs" style={{ color: blue.textMuted }}>Custo anual</p>
          <p className="text-2xl font-bold" style={{ color: blue.red }}>R$ 48.000</p>
        </div>
        <div className="rounded-xl p-4 border text-center" style={{ background: blue.bgCard, borderColor: blue.border }}>
          <p className="text-xs" style={{ color: blue.textMuted }}>Custo em 5 anos</p>
          <p className="text-2xl font-bold" style={{ color: blue.red }}>R$ 240.000</p>
        </div>
      </div>
    </div>
  ),

  /* ── 8  CENÁRIO 3: ECOSSISTEMA ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 09</p>
      <h2 className="text-3xl font-extrabold mb-1" style={{ color: blue.text }}>Cenário 3 <span style={{ color: blue.accent }}>— Recomendado</span></h2>
      <p className="text-lg font-semibold mb-5" style={{ color: blue.textMuted }}>Ecossistema Próprio Blue Saúde</p>
      <div className="grid sm:grid-cols-2 gap-2.5">
        {[
          "CRM Kanban próprio",
          "WhatsApp unificado",
          "Integração Instagram e Facebook",
          "Gestão de setores da empresa",
          "Relatórios de performance v2 por corretor",
          "Disparador para prospecção ativa",
          "Automação de atendimento",
          "Nutrição de leads",
          "Pós-venda e feedback",
          "Distribuição de leads para corretores",
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg p-2.5 border text-sm" style={{ background: blue.bgCard, borderColor: blue.border, color: blue.text }}>
            <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: blue.green }} />
            {t}
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── 9  INVESTIMENTO ECOSSISTEMA ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto text-center">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 10</p>
      <h2 className="text-3xl font-extrabold mb-8" style={{ color: blue.text }}>Investimento — Ecossistema Blue</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <Metric label="Implementação" value="R$ 8k" accent />
        <Metric label="Mensalidade" value="R$ 3k" accent />
        <Metric label="Prazo" value="4 meses" />
      </div>
      <div className="rounded-xl px-5 py-4 border" style={{ background: blue.accentGlow, borderColor: blue.accent }}>
        <p className="text-sm" style={{ color: blue.text }}>
          Durante o período de implementação, a <span style={{ color: blue.accent }}>estrutura atual continua funcionando</span> normalmente.
        </p>
      </div>
    </div>
  ),

  /* ── 10  COMPARAÇÃO ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 11</p>
      <h2 className="text-3xl font-extrabold mb-6" style={{ color: blue.text }}>Comparação Financeira</h2>
      <div className="rounded-xl border overflow-hidden" style={{ background: blue.bgCard, borderColor: blue.border }}>
        {/* header */}
        <div className="grid grid-cols-3 gap-4 px-5 py-3 border-b" style={{ borderColor: blue.border }}>
          <span />
          <span className="text-xs text-center font-bold" style={{ color: blue.red }}>Impulsefy</span>
          <span className="text-xs text-center font-bold" style={{ color: blue.green }}>Ecossistema Blue</span>
        </div>
        <div className="px-5">
          <CompareRow label="Setup" impulsefy="R$ 10.000" eco="R$ 8.000" />
          <CompareRow label="Mensal" impulsefy="R$ 4.000" eco="R$ 3.000" />
          <CompareRow label="Custo 5 anos" impulsefy="R$ 240.000" eco="R$ 180.000" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-6 rounded-xl px-5 py-4 border" style={{ background: blue.accentGlow, borderColor: blue.accent }}>
        <DollarSign className="w-5 h-5" style={{ color: blue.green }} />
        <span className="font-bold" style={{ color: blue.green }}>Economia estimada: R$ 60.000</span>
        <span className="text-sm" style={{ color: blue.textMuted }}>+ controle total da infraestrutura</span>
      </div>
    </div>
  ),

  /* ── 11  ONDE INVESTIR ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto text-center">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 12</p>
      <h2 className="text-3xl font-extrabold mb-2" style={{ color: blue.text }}>Onde Esse Dinheiro Poderia Estar?</h2>
      <p className="text-sm mb-8" style={{ color: blue.textMuted }}>Se os R$ 60k de economia forem investidos em tráfego (ROI comprovado ≈ 6x)</p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto mb-6">
        <Metric label="Investimento" value="R$ 60k" />
        <Metric label="Faturamento Estimado" value="R$ 360k" accent />
      </div>
      <div className="rounded-xl px-5 py-4 border" style={{ background: blue.accentGlow, borderColor: blue.accent }}>
        <p className="text-sm font-semibold" style={{ color: blue.accent }}>
          ✦ Investir em crescimento gera muito mais retorno do que investir em ferramentas.
        </p>
      </div>
    </div>
  ),

  /* ── 12  EXPANSÃO UNIMED ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 13</p>
      <h2 className="text-3xl font-extrabold mb-6" style={{ color: blue.text }}>Expansão de Marketing — Unimed</h2>
      <div className="rounded-xl p-5 border mb-4" style={{ background: blue.bgCard, borderColor: blue.border }}>
        <p className="text-xs mb-1" style={{ color: blue.textMuted }}>Estrutura atual</p>
        <p className="text-2xl font-extrabold" style={{ color: blue.text }}>R$ 7.999<span className="text-sm font-normal" style={{ color: blue.textMuted }}>/mês</span></p>
      </div>
      <div className="flex items-center gap-4 justify-center mb-4">
        <div className="rounded-xl px-5 py-3 border text-center" style={{ background: blue.bgCard, borderColor: blue.border }}>
          <p className="text-xs" style={{ color: blue.textMuted }}>Upgrade Unimed Instagram</p>
          <p className="text-xs mt-1" style={{ color: blue.textMuted }}>Tudo que fazemos para Humana</p>
        </div>
        <ArrowRight className="w-5 h-5" style={{ color: blue.accent }} />
        <div className="rounded-xl px-5 py-3 border text-center" style={{ background: blue.accentGlow2, borderColor: blue.accent }}>
          <p className="text-xs" style={{ color: blue.textMuted }}>Novo total mensal</p>
          <p className="text-2xl font-bold" style={{ color: blue.accent }}>R$ 11.999</p>
        </div>
      </div>
      <div className="rounded-xl p-5 border mb-4" style={{ background: blue.bgCard, borderColor: blue.border }}>
        <div className="flex items-center gap-2 mb-2">
          <Rocket className="w-4 h-4" style={{ color: blue.accent }} />
          <span className="text-sm font-bold" style={{ color: blue.accent }}>Upgrade V2 Sistema</span>
        </div>
        <p className="text-sm" style={{ color: blue.text }}>
          Setup: <span className="font-bold" style={{ color: blue.accent }}>R$ 8.000</span> em até 4 meses de implementação
        </p>
        <p className="text-xs mt-2" style={{ color: blue.textMuted }}>
          A mensalidade de R$ 3.000 começa somente a partir da entrega da V2 completa.
        </p>
        <p className="text-xs mt-1" style={{ color: blue.textMuted }}>
          Caso finalize antes do 3º ou 4º mês, inicia-se antes — após aprovação do Valdir e Clodoaldo.
        </p>
      </div>
    </div>
  ),

  /* ── 13  ENTREGAS MARKETING ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 14</p>
      <h2 className="text-3xl font-extrabold mb-2" style={{ color: blue.text }}>Entregas de Marketing</h2>
      <p className="text-sm mb-6" style={{ color: blue.textMuted }}>Para duas operações: <span style={{ color: blue.accent }}>Humana Saúde</span> e <span style={{ color: blue.accent }}>Unimed Maringá</span></p>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { icon: BarChart3, text: "Gestão de tráfego Google Ads e Meta Ads" },
          { icon: Monitor, text: "5 motion reels por mês" },
          { icon: PieChart, text: "10 posts de feed" },
          { icon: Globe, text: "Stories derivados" },
          { icon: Users, text: "5 vídeos captados e editados com corretores" },
          { icon: Rocket, text: "1 landing page/mês para cada marca" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg p-3 border" style={{ background: blue.bgCard, borderColor: blue.border }}>
            <item.icon className="w-4 h-4 shrink-0" style={{ color: blue.accent }} />
            <span className="text-sm" style={{ color: blue.text }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── 14  BÔNUS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto text-center">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 15</p>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 mx-auto" style={{ background: blue.accentGlow, borderColor: blue.accent }}>
        <Award className="w-4 h-4" style={{ color: blue.gold }} />
        <span className="text-sm font-bold" style={{ color: blue.gold }}>Bônus Estratégico</span>
      </div>
      <h2 className="text-3xl font-extrabold mb-8" style={{ color: blue.text }}>Bônus da Parceria</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {[
          { icon: Globe, title: "YouTube", desc: "Desdobramento dos vídeos para o canal" },
          { icon: Monitor, title: "Captação Longa", desc: "Conteúdo mensal para redes e institucional" },
          { icon: PenTool, title: "Blog Blue Saúde", desc: "Estrutura de blog para autoridade digital" },
        ].map((b, i) => (
          <div key={i} className="rounded-xl p-5 border text-center" style={{ background: blue.bgCard, borderColor: blue.border }}>
            <b.icon className="w-6 h-6 mx-auto mb-2" style={{ color: blue.accent }} />
            <p className="text-sm font-bold mb-1" style={{ color: blue.text }}>{b.title}</p>
            <p className="text-xs" style={{ color: blue.textMuted }}>{b.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-sm" style={{ color: blue.textMuted }}>
        Possibilitando: <span style={{ color: blue.accent }}>autoridade digital</span>, geração orgânica de leads e conteúdo institucional.
      </p>
    </div>
  ),

  /* ── 15  PRÓXIMOS PASSOS ── */
  () => (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: blue.accent }}>SLIDE 16</p>
      <h2 className="text-3xl font-extrabold mb-8" style={{ color: blue.text }}>Próximos Passos</h2>
      <div className="space-y-4 mb-6">
        {[
          "Aprovação da estrutura proposta",
          "Início da implementação do ecossistema Blue (V2)",
          "Ativação do marketing da Unimed",
          "Evolução da infraestrutura comercial nos próximos meses",
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-4 rounded-xl p-4 border" style={{ background: blue.bgCard, borderColor: blue.border }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm" style={{ background: blue.accentGlow2, color: blue.accent }}>
              {i + 1}
            </div>
            <span className="text-sm font-medium" style={{ color: blue.text }}>{step}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl px-5 py-3 border mb-4" style={{ background: blue.bgCard, borderColor: blue.border }}>
        <p className="text-xs font-bold mb-1" style={{ color: blue.gold }}>V3 — Futuro</p>
        <p className="text-xs" style={{ color: blue.textMuted }}>Geração automática de propostas e fechamento — previsto para uma fase futura devido à complexidade e inúmeras tabelas.</p>
      </div>
      <div className="rounded-xl px-6 py-5 border text-center" style={{ background: blue.accentGlow, borderColor: blue.accent }}>
        <p className="text-lg font-bold" style={{ color: blue.accent }}>
          Criar um sistema comercial escalável e altamente lucrativo para a Blue Saúde.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <img src={logoBlue} alt="Blue Saúde" className="h-10 w-auto" />
        <div className="h-6 w-px" style={{ background: blue.border }} />
        <img src={logoAdhub} alt="AD HUB" className="h-8 w-auto rounded-lg" />
      </div>
    </div>
  ),
];

/* ─── Import PenTool at top (already imported) ─── */

/* ═══════════════════════════════════════════════ */
/*               MAIN COMPONENT                    */
/* ═══════════════════════════════════════════════ */

const ApresentacaoBlue = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    document.title = "Apresentação Blue Saúde — AD HUB Marketing";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrent((p) => Math.min(p + 1, total - 1));
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrent((p) => Math.max(p - 1, 0));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const SlideContent = slides[current];

  return (
    <div className="h-screen w-screen overflow-hidden relative select-none" style={{ background: blue.bg }}>
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((S, i) => (
          <Slide key={i} active={i === current}>
            <S />
          </Slide>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-50">
        <button
          onClick={() => setCurrent((p) => Math.max(p - 1, 0))}
          disabled={current === 0}
          className="p-2 rounded-lg transition-colors disabled:opacity-20"
          style={{ color: blue.text, background: current > 0 ? blue.bgCard : "transparent" }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Progress */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono" style={{ color: blue.textMuted }}>
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="w-32 h-1 rounded-full overflow-hidden" style={{ background: blue.border }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${((current + 1) / total) * 100}%`, background: blue.accent }}
            />
          </div>
        </div>

        <button
          onClick={() => setCurrent((p) => Math.min(p + 1, total - 1))}
          disabled={current === total - 1}
          className="p-2 rounded-lg transition-colors disabled:opacity-20"
          style={{ color: blue.text, background: current < total - 1 ? blue.bgCard : "transparent" }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ApresentacaoBlue;
