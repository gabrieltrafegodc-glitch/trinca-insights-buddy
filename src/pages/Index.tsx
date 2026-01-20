import { 
  DollarSign, 
  Users, 
  Eye, 
  MousePointer, 
  UserCheck,
  TrendingDown
} from "lucide-react";
import MetricCard from "@/components/MetricCard";
import ReportHeader from "@/components/ReportHeader";
import AnalysisSection from "@/components/AnalysisSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="container max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <ReportHeader />

        {/* Investment Highlight */}
        <div className="mt-12">
          <MetricCard
            icon={DollarSign}
            label="Investimento em Anúncios"
            value="R$ 99,92"
            subValue="Meta Ads"
            variant="highlight"
            delay={1}
          />
        </div>

        {/* Metrics Grid */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-muted-foreground mb-4 animate-fade-up-delay-1">
            📈 Desempenho da Campanha
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <MetricCard
              icon={Users}
              label="Alcance"
              value="21.492"
              subValue="pessoas atingidas"
              delay={2}
            />
            <MetricCard
              icon={Eye}
              label="Impressões"
              value="34.967"
              subValue="vezes exibido"
              delay={2}
            />
            <MetricCard
              icon={MousePointer}
              label="Cliques"
              value="150"
              subValue="interações"
              delay={2}
            />
            <MetricCard
              icon={UserCheck}
              label="Visitas no Perfil"
              value="656"
              subValue="usuários visitaram"
              variant="accent"
              delay={3}
            />
            <MetricCard
              icon={TrendingDown}
              label="CPM"
              value="R$ 2,85"
              subValue="custo por mil impressões"
              delay={3}
            />
            <MetricCard
              icon={TrendingDown}
              label="CPC"
              value="R$ 0,67"
              subValue="custo por clique"
              delay={3}
            />
          </div>
        </div>

        {/* Cost per Profile Visit - Highlighted */}
        <div className="mt-6 animate-fade-up-delay-3">
          <div className="glass rounded-xl p-6 border-emerald/30 bg-emerald/5">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald/10">
                  <UserCheck className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Custo por visita no perfil</p>
                  <p className="text-3xl font-bold text-emerald">R$ 0,15</p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20">
                <span className="text-sm font-medium text-emerald">Excelente Performance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="mt-12">
          <AnalysisSection />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center animate-fade-up-delay-4">
          <p className="text-sm text-muted-foreground">
            Relatório gerado para <span className="font-medium text-foreground">Trinca Bar</span> • Janeiro 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
