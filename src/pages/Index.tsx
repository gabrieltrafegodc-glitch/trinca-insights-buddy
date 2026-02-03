import { AlertCircle, Wallet } from "lucide-react";
import ReportHeader from "@/components/ReportHeader";
import CampaignAccordion from "@/components/CampaignAccordion";
import { campaigns } from "@/data/campaigns";
import logoAdhub from "@/assets/logo-adhub.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="container max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <ReportHeader />

        {/* Campaigns Accordion */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-muted-foreground mb-6 animate-fade-up">
            📊 Campanhas do Período
          </h2>
          <CampaignAccordion campaigns={campaigns} />
        </div>

        {/* Observation Card */}
        <div className="mt-12 animate-fade-up-delay-4">
          <div className="glass rounded-xl p-6 border-l-4 border-l-gold">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gold/10">
                <AlertCircle className="w-6 h-6 text-gold" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Observação Importante</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A campanha de <span className="text-foreground font-medium">Quarta-feira – Roda de Samba</span> não 
                  saiu da fase de aprendizado, pois a verba entrou muito tarde na quarta-feira, 
                  o que limitou a entrega e o tempo de otimização.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="mt-6 animate-fade-up-delay-4">
          <div className="glass rounded-xl p-6 glow-pink border-primary/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Saldo remanescente em conta</p>
                  <p className="text-2xl font-bold gradient-text">R$ 86,37</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with AdHub branding */}
        <div className="mt-16 pt-8 border-t border-border animate-fade-up-delay-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img 
                src={logoAdhub} 
                alt="AdHub Marketing Inteligente" 
                className="h-12 w-auto rounded-lg"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center sm:text-right">
              Relatório gerado para <span className="font-medium text-foreground">Trinca Bar</span>
              <br />
              <span className="text-primary">Janeiro 2025</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
