import { 
  Phone, Target, FileText, Zap, Globe, CheckCircle, Calendar, User, 
  DollarSign, TrendingUp, BarChart3, Megaphone, PenTool, Layout, 
  Bot, Eye, Rocket, ShoppingBag, BookOpen, CalendarCheck, ArrowUpRight,
  Handshake, Clock, Mail
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import logoAdhub from "@/assets/logo-adhub.jpeg";
import logoWinnie from "@/assets/logo-winnie.avif";

const PropostaWinnie = () => {
  document.title = "Proposta Winnie — AD HUB Marketing";
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
                <img src={logoWinnie} alt="Winnie Paludetto" className="w-full h-full object-contain" />
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
              <span>04 de Fevereiro de 2026</span>
            </div>
          </div>

          <div className="text-center mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
              <span className="text-sm font-medium text-primary">Proposta de Parceria Estratégica</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="gradient-text">Parceria Estratégica de Marketing Digital</span>
            </h1>
            <p className="text-lg text-muted-foreground">para Winnie Paludetto — Psicóloga</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
              <User className="w-4 h-4" />
              <span>Apresentado por: Gabriel Rodrigues — Estrategista Digital</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="glass mb-5 animate-fade-up-delay-1">
          <CardContent className="pt-5 pb-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Winnie</span>, nós da AdHubMarketing apresentamos esta parceria estratégica para <span className="text-primary font-medium">lotar sua agenda de atendimentos</span>, aumentar seus preços gradativamente, vender sessões emergenciais de alto ticket e infoprodutos de baixo ticket, com todo o suporte de marketing e automação.
            </p>
          </CardContent>
        </Card>

        {/* Section 1: Pricing Structure */}
        <Card className="glass mb-5 animate-fade-up-delay-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <DollarSign className="w-5 h-5 text-primary" />
              Estrutura de Preços e Remuneração
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-foreground text-xs">Serviço</TableHead>
                    <TableHead className="text-foreground text-xs text-right">Atual</TableHead>
                    <TableHead className="text-foreground text-xs text-right">Novo</TableHead>
                    <TableHead className="text-foreground text-xs text-right">Acréscimo AdHub</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-sm">Consulta Individual</TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">R$ 150,00</TableCell>
                    <TableCell className="text-right text-sm text-primary font-semibold">R$ 200,00</TableCell>
                    <TableCell className="text-right text-sm text-accent font-semibold">R$ 50,00 (25%)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-sm">Pacote 4 Sessões</TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">R$ 520,00</TableCell>
                    <TableCell className="text-right text-sm text-primary font-semibold">R$ 720,00</TableCell>
                    <TableCell className="text-right text-sm text-accent font-semibold">R$ 180,00 (25%)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-sm">Atendimento Emergencial</TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">—</TableCell>
                    <TableCell className="text-right text-sm text-primary font-semibold">R$ 500,00</TableCell>
                    <TableCell className="text-right text-sm text-accent font-semibold">R$ 125,00 (25%)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="flex flex-col gap-1.5 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Mensalidade fixa:</span> R$ 1.000,00/mês + <span className="text-primary font-medium">25%</span> sobre o acréscimo entre valores antigos e novos + novos produtos</span>
              </div>
              <div className="flex items-start gap-2">
                <Eye className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Transparência:</span> Controle financeiro conjunto de vendas e comissões</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Traffic Investment */}
        <Card className="glass mb-5 animate-fade-up-delay-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingUp className="w-5 h-5 text-primary" />
              Investimento em Tráfego
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1.5 text-sm">
              <div className="flex items-start gap-2">
                <ArrowUpRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Inicial:</span> R$ 1.500,00/mês, por conta da cliente</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowUpRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Reinvestimento:</span> 10% a 25% do faturamento mensal reinvestido em tráfego no mês seguinte</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Services */}
        <Card className="glass mb-5 animate-fade-up-delay-3">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Rocket className="w-5 h-5 text-primary" />
              Serviços Oferecidos pela AdHubMarketing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {[
                { icon: Target, label: "Estratégia de Marketing", desc: "Planejamento para captação e vendas" },
                { icon: PenTool, label: "Redação/Copywriting", desc: "Textos persuasivos para anúncios e páginas" },
                { icon: Globe, label: "Site Institucional", desc: "Novo site com agendamento e checkout (Stripe/PIX)" },
                { icon: Layout, label: "Landing Pages Segmentadas", desc: "Páginas por dor com infoprodutos e sessões" },
                { icon: Zap, label: "Automação", desc: "Webhooks, prospecção e nutrição de leads" },
                { icon: BarChart3, label: "Trackeamento", desc: "Monitoramento de campanhas" },
                { icon: Megaphone, label: "Gestão de Tráfego", desc: "Google Ads e Meta Ads para leads qualificados" },
                { icon: Bot, label: "Futuro com IA", desc: "Agentes de IA para atendimento inicial" },
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

        {/* Section 4: Winnie's Functions */}
        <Card className="glass mb-5 animate-fade-up-delay-3">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <User className="w-5 h-5 text-primary" />
              Funções da Winnie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1.5 text-sm">
              {[
                { icon: DollarSign, text: "Mensalidade: R$ 1.000,00/mês para serviços AdHubMarketing" },
                { icon: TrendingUp, text: "Investimento em Tráfego: R$ 1.500,00 inicial + reinvestimento de 10-25% do faturamento" },
                { icon: FileText, text: "Gravação/Edição: Produção de conteúdos para infoprodutos e marketing" },
                { icon: Phone, text: "Atendimento de Leads: Fechamento de vendas com roteiro fornecido (futuramente automatizado com IA)" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <item.icon className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Objectives */}
        <Card className="glass mb-5 animate-fade-up-delay-3">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Target className="w-5 h-5 text-accent" />
              Objetivos da Parceria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {[
                { icon: CalendarCheck, label: "Lotar Agenda", desc: "Preencher todos os horários disponíveis" },
                { icon: TrendingUp, label: "Subir Preços", desc: "Aumentar valores gradativamente com agenda cheia" },
                { icon: Zap, label: "Sessões Emergenciais", desc: "Vendas de alto ticket para urgências" },
                { icon: BookOpen, label: "Infoprodutos", desc: "Vendas de baixo ticket como porta de entrada" },
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg border border-primary/20 bg-primary/5">
                  <obj.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{obj.label}</p>
                    <p className="text-xs text-muted-foreground">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Strategy */}
        <Card className="glass mb-5 animate-fade-up-delay-4">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <ShoppingBag className="w-5 h-5 text-primary" />
              Estratégia de Produtos e Captação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Criação de <span className="text-foreground font-medium">infoprodutos e landing pages segmentadas</span> por dores (ex.: relacionamentos, depressão), com upsell (sessões/pacotes) e downsell (material gratuito). Captação direta para consultas e testes contínuos para otimização. Temas serão levantados em <span className="text-primary font-medium">reuniões colaborativas</span>.
            </p>
          </CardContent>
        </Card>

        {/* Section 7: Benefits */}
        <Card className="glass mb-5 animate-fade-up-delay-4">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle className="w-5 h-5 text-accent" />
              Benefícios da Parceria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Agenda lotada e maior receita",
                "Diversificação com sessões emergenciais e infoprodutos",
                "Infraestrutura digital completa (site, automações, pagamentos)",
                "Crescimento sustentável com suporte estratégico",
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sections 8 & 9: Contract + Next Steps */}
        <div className="grid md:grid-cols-2 gap-4 mb-5 animate-fade-up-delay-4">
          <Card className="glass">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Contrato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contrato de <span className="text-foreground font-medium">6 meses com renovação automática</span>, cancelamento sem multa com aviso prévio de 30 dias. Toda a infraestrutura digital (site, landing pages, automações) é <span className="text-primary font-medium">propriedade da AdHubMarketing</span>.
              </p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Rocket className="w-4 h-4 text-primary" />
                Próximos Passos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-1.5"><span className="text-primary">•</span> Aprovação da parceria e estrutura de custos</li>
                <li className="flex items-start gap-1.5"><span className="text-primary">•</span> Reunião para temas e prioridades de infoprodutos</li>
                <li className="flex items-start gap-1.5"><span className="text-primary">•</span> Início de site e campanhas em 7-10 dias</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Final Considerations */}
        <Card className="glass mb-6 animate-fade-up-delay-4 border-l-4 border-l-primary">
          <CardContent className="pt-5 pb-4">
            <p className="text-muted-foreground text-sm">
              Estamos comprometidos em <span className="text-foreground font-medium">transformar sua presença digital e resultados</span>. Contate-nos para ajustes ou próximos passos.
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
              <p className="text-sm text-muted-foreground">AdHubMarketing</p>
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
              AdHubMarketing • Proposta válida por 15 dias • 04 de Fevereiro de 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropostaWinnie;
