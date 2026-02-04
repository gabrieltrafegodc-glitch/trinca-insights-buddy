import { Phone, Target, FileText, Zap, Globe, CheckCircle, Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import logoAdhub from "@/assets/logo-adhub.jpeg";
import logoWinnie from "@/assets/logo-winnie.avif";

const PropostaWinnie = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="animate-fade-up">
          <div className="flex items-center justify-between flex-wrap gap-6 mb-8">
            {/* Logos */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center">
                <img 
                  src={logoWinnie} 
                  alt="Winnie Paludetto" 
                  className="w-full h-full object-contain"
                />
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

            {/* Date Info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>04 de Fevereiro de 2026</span>
            </div>
          </div>

          {/* Title Section */}
          <div className="text-center mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
              <span className="text-sm font-medium text-primary">Proposta Comercial</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="gradient-text">Proposta de Serviços de Marketing Digital</span>
            </h1>
            <p className="text-lg text-muted-foreground">para Winnie Paludetto - Psicóloga</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
              <User className="w-4 h-4" />
              <span>Preparado por: Gabriel Rodrigues - Estrategista Digital</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="glass mb-6 animate-fade-up-delay-1">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              Prezada <span className="text-foreground font-medium">Winnie</span>, nós da AdHubMarketing apresentamos esta proposta de marketing digital com foco em <span className="text-primary font-medium">gestão de tráfego e captação de leads</span> para terapia online no Brasil e exterior, visando maximizar seu retorno com leads qualificados.
            </p>
          </CardContent>
        </Card>

        {/* Services Section */}
        <Card className="glass mb-6 animate-fade-up-delay-2">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-primary" />
              Serviços Oferecidos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              {/* Service 1 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Gestão de Tráfego Pago</h4>
                    <p className="text-sm text-muted-foreground">
                      Gerar leads para terapia online no Brasil e exterior (EUA, falantes de português). 
                      <span className="text-foreground"> Google Ads R$ 1.500,00/mês</span> ou 
                      <span className="text-foreground"> Google + Meta Ads R$ 2.000,00/mês</span>. 
                      Segmentação precisa e remarketing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Landing Pages para Leads</h4>
                    <p className="text-sm text-muted-foreground">
                      Páginas otimizadas para conversão (terapia e e-book). 
                      <span className="text-foreground"> R$ 1.000,00 (individual)</span> ou 
                      <span className="text-foreground"> R$ 800,00/mês</span> (recorrente, 1 página/mês com testes A/B).
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Automação de Contato</h4>
                    <p className="text-sm text-muted-foreground">
                      Webhook para envio de dados de leads ao WhatsApp com formulário de qualificação, 
                      substituindo redirecionamento atual do site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Estratégia para E-book</h4>
                    <p className="text-sm text-muted-foreground">
                      Produto de entrada para leads não convertidos, com campanhas e landing pages 
                      específicas para captação de dados e remarketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card className="glass mb-6 animate-fade-up-delay-3">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <CheckCircle className="w-5 h-5 text-accent" />
              Benefícios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Leads qualificados com segmentação precisa (Brasil e exterior)",
                "Otimização de custos via testes A/B e análise de dados",
                "Automação para atendimento ágil de leads em tempo real",
                "Expansão internacional para brasileiros no exterior"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investment Table */}
        <Card className="glass mb-6 animate-fade-up-delay-3">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">💰 Investimento Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-foreground">Serviço</TableHead>
                    <TableHead className="text-foreground text-right">Valor Mensal</TableHead>
                    <TableHead className="text-foreground text-right">Valor Pontual</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Gestão Tráfego (Google Ads)</TableCell>
                    <TableCell className="text-right text-primary font-semibold">R$ 1.500,00</TableCell>
                    <TableCell className="text-right text-muted-foreground">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Gestão Tráfego (Google + Meta)</TableCell>
                    <TableCell className="text-right text-primary font-semibold">R$ 2.000,00</TableCell>
                    <TableCell className="text-right text-muted-foreground">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Landing Page (Recorrente)</TableCell>
                    <TableCell className="text-right text-primary font-semibold">R$ 800,00</TableCell>
                    <TableCell className="text-right text-muted-foreground">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Landing Page (Individual)</TableCell>
                    <TableCell className="text-right text-muted-foreground">-</TableCell>
                    <TableCell className="text-right text-primary font-semibold">R$ 1.000,00/página</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Webhook/Formulário</TableCell>
                    <TableCell className="text-right text-accent">Incluso na gestão</TableCell>
                    <TableCell className="text-right text-muted-foreground">-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              * Investimento em mídia não incluso, a ser definido em conjunto.
            </p>
          </CardContent>
        </Card>

        {/* Contract & Next Steps */}
        <div className="grid md:grid-cols-2 gap-6 mb-6 animate-fade-up-delay-4">
          <Card className="glass">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">📋 Contrato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contrato de <span className="text-foreground font-medium">6 meses</span>, com cancelamento sem multa 
                mediante aviso prévio por escrito de 30 dias.
              </p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">🚀 Próximos Passos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Aprovação da proposta para planejamento</li>
                <li>• Reunião de alinhamento sobre personas</li>
                <li>• Início das campanhas em 7-10 dias</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Final Considerations */}
        <Card className="glass mb-8 animate-fade-up-delay-4 border-l-4 border-l-primary">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm">
              Estamos comprometidos em trazer <span className="text-foreground font-medium">resultados concretos</span> para seu negócio. 
              Para dúvidas ou ajustes, estamos à disposição.
            </p>
          </CardContent>
        </Card>

        <Separator className="mb-8" />

        {/* Signature & Footer */}
        <div className="animate-fade-up-delay-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
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

            <div className="flex items-center gap-4">
              <img 
                src={logoAdhub} 
                alt="AdHub Marketing Inteligente" 
                className="h-12 w-auto rounded-lg"
              />
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border text-center">
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
