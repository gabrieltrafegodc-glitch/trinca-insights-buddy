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
