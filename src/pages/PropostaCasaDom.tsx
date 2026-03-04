import {
  Phone, Target, FileText, Zap, Globe, CheckCircle, Calendar, User,
  DollarSign, TrendingUp, BarChart3, Megaphone, PenTool, Layout,
  Bot, Eye, Rocket, ArrowUpRight, Handshake, Clock, Building2,
  Video, Image, Cpu, CalendarCheck, KeyRound, MonitorSmartphone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import logoAdhub from "@/assets/logo-adhub.jpeg";
import logoCasaDom from "@/assets/logo-casadom.avif";

const PropostaCasaDom = () => {
  document.title = "Proposta Casa DOM — AD HUB Marketing";
  return (
    <div className="min-h-screen bg-background relative">
      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="animate-fade-up">
          <div className="flex items-center justify-between flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center">
                <img src={logoCasaDom} alt="Casa DOM Imóveis" className="w-full h-full object-contain" />
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">
                  <span className="text-primary">ad</span>
                  <span className="text-foreground">*</span>
                  <span className="text-foreground">hub</span>
                </span>
                <span className="text-xs text-muted-foreground">Marketing Inteligente</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>04 de Março de 2026</span>
            </div>
          </div>

          <div className="text-center mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
              <span className="text-sm font-medium text-primary">Proposta de Parceria Estratégica</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="gradient-text">Alavancando o Pré-lançamento</span>
            </h1>
            <p className="text-lg text-foreground font-semibold">Forte de Athena — LBX Construtora</p>
            <p className="text-base text-muted-foreground">para Maycon — Casa DOM Imóveis</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
              <User className="w-4 h-4" />
              <span>Apresentado por: Gabriel Rodrigues — AD HUB MARKETING</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="glass mb-5 animate-fade-up-delay-1">
          <CardContent className="pt-5 pb-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Maycon</span>, é com grande entusiasmo que apresento esta proposta de parceria para impulsionar o pré-lançamento do empreendimento <span className="text-primary font-medium">Forte de Athena</span>, da construtora LBX, aqui em Maringá. A AD HUB MARKETING está pronta para aplicar estratégias digitais eficazes que maximizarão a <span className="text-primary font-medium">visibilidade e a captação de leads qualificados</span> para essa oportunidade única.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Nosso objetivo principal é apresentar a landing page que desenvolvemos e, a partir dela, <span className="text-foreground font-medium">testar e otimizar a performance das campanhas digitais</span>. Após os resultados iniciais, teremos uma base sólida para renegociar e expandir nossa parceria.
            </p>
          </CardContent>
        </Card>

        {/* Entregas AD HUB */}
        <Card className="glass mb-5 animate-fade-up-delay-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Rocket className="w-5 h-5 text-primary" />
              Entregas e Compromissos da AD HUB MARKETING
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {[
                { icon: MonitorSmartphone, label: "Landing Page Exclusiva", desc: "Página de alta conversão destacando financiamento 100% e juros de obra zero" },
                { icon: Megaphone, label: "Gestão de Tráfego Pago", desc: "Campanhas em Meta Ads e Google Ads direcionando público qualificado" },
                { icon: PenTool, label: "Planejamento de Conteúdo", desc: "Roteiros para vídeos e planejamento de artes estáticas impactantes" },
                { icon: Zap, label: "Automação de Leads", desc: "Integração com CRM ou agendamento automático no Google Agenda" },
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="p-1.5 rounded-md bg-primary/10 shrink-0">
                    <service.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{service.label}</p>
                    <p className="text-xs text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* O que precisamos da Casa DOM */}
        <Card className="glass mb-5 animate-fade-up-delay-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Handshake className="w-5 h-5 text-primary" />
              Para o Sucesso, Contamos com a Casa DOM
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1.5 text-sm">
              {[
                { icon: KeyRound, text: "Acesso ao Domínio: Subdomínio dedicado ao empreendimento (ex: forteathena.casadom.com.br)" },
                { icon: BarChart3, text: "Acesso às Contas de Anúncios: Meta Ads e Google Ads para gestão das campanhas" },
                { icon: Video, text: "Produção de Conteúdo Visual: Gravar e editar roteiros em vídeo + design das peças de campanha (ou a AD HUB internaliza com custo adicional)" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <item.icon className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Propostas de Investimento */}
        <div className="mb-5 animate-fade-up-delay-3">
          <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Propostas de Investimento
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Proposta 1 */}
            <Card className="glass border-border/50">
              <CardHeader className="pb-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 mb-2 w-fit">
                  <span className="text-xs font-semibold text-muted-foreground">PROPOSTA 1</span>
                </div>
                <CardTitle className="text-sm">Foco em Estratégia e Gestão</CardTitle>
                <p className="text-xs text-muted-foreground">Sem produção de vídeos e criativos</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-primary">R$ 1.500</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <p className="text-xs text-accent font-medium">+ Percentual sobre vendas (a alinhar)</p>
                <Separator />
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  {[
                    "Gestão de 1 Landing Page (Forte de Athena)",
                    "Gestão de Tráfego Pago (Meta e Google Ads)",
                    "Planejamento de roteiros para vídeos e artes",
                    "Automação de leads no CRM ou agendamento",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Proposta 2 */}
            <Card className="glass border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-lg">
                RECOMENDADA
              </div>
              <CardHeader className="pb-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2 w-fit">
                  <span className="text-xs font-semibold text-primary">PROPOSTA 2</span>
                </div>
                <CardTitle className="text-sm">Solução Completa com Produção</CardTitle>
                <p className="text-xs text-muted-foreground">Com vídeos e criativos inclusos</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-primary">R$ 3.000</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <p className="text-xs text-accent font-medium">+ Percentual sobre vendas (a alinhar)</p>
                <Separator />
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  {[
                    "Gestão de 1 Landing Page (Forte de Athena)",
                    "Gestão de Tráfego Pago (Meta e Google Ads)",
                    "Planejamento de roteiros para vídeos e artes",
                    "5 vídeos + 5 criativos estáticos por mês",
                    "Automação de leads no CRM ou agendamento",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Valores de Mercado (Ancoragem) */}
        <Card className="glass mb-5 animate-fade-up-delay-3">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Eye className="w-5 h-5 text-primary" />
              Transparência — Valores de Mercado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-foreground text-xs">Serviço</TableHead>
                    <TableHead className="text-foreground text-xs text-right">Valor de Mercado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { service: "Criação de Landing Page", value: "R$ 1.000,00" },
                    { service: "Pacote de 5 Artes Estáticas", value: "R$ 500,00" },
                    { service: "Pacote de 5 Vídeos", value: "R$ 1.500,00" },
                    { service: "Gestão de Tráfego Meta + Google Ads", value: "R$ 2.000,00" },
                    { service: "Automações de CRM", value: "Bônus incluso" },
                  ].map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-sm">{row.service}</TableCell>
                      <TableCell className="text-right text-sm text-primary font-semibold">{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Contrato + Visão de Futuro */}
        <div className="grid md:grid-cols-2 gap-4 mb-5 animate-fade-up-delay-4">
          <Card className="glass">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Condições Contratuais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contrato <span className="text-foreground font-medium">sem multa por cancelamento</span>, exigindo apenas aviso prévio de <span className="text-primary font-medium">30 dias</span>. Isso demonstra nossa confiança nos resultados que entregaremos.
              </p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Bot className="w-4 h-4 text-primary" />
                Visão de Futuro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Com resultados positivos, podemos integrar <span className="text-foreground font-medium">agentes de IA</span> para qualificação e agendamento via WhatsApp, escalando para <span className="text-primary font-medium">todos os lançamentos da Casa DOM</span>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final Considerations */}
        <Card className="glass mb-6 animate-fade-up-delay-4 border-l-4 border-l-primary">
          <CardContent className="pt-5 pb-4">
            <p className="text-muted-foreground text-sm">
              Acreditamos que esta parceria trará <span className="text-foreground font-medium">resultados expressivos</span> para o pré-lançamento do Forte de Athena. Estou à disposição para conversarmos e darmos o próximo passo.
            </p>
          </CardContent>
        </Card>

        <Separator className="mb-6" />

        {/* Signature & Footer */}
        <div className="animate-fade-up-delay-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <p className="text-sm text-muted-foreground">Atenciosamente,</p>
              <p className="font-semibold text-foreground">Gabriel Rodrigues</p>
              <p className="text-sm text-muted-foreground">AD HUB MARKETING</p>
              <a
                href="https://wa.me/5544999636056"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (44) 99963-6056
              </a>
            </div>
            <img src={logoAdhub} alt="AdHub Marketing Inteligente" className="h-12 w-auto rounded-lg" />
          </div>

          <div className="mt-6 pt-4 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              AD HUB MARKETING • Proposta válida por 15 dias • 04 de Março de 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropostaCasaDom;
