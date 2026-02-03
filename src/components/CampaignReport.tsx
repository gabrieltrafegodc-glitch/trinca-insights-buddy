import { 
  DollarSign, 
  Users, 
  Eye, 
  MousePointer, 
  UserCheck,
  TrendingDown,
  TrendingUp,
  Calendar,
  Target,
  LucideIcon
} from "lucide-react";
import MetricCard from "./MetricCard";

export interface CampaignData {
  eventName: string;
  eventIcon: LucideIcon;
  eventDate: string;
  campaignType: string;
  investment: string;
  metrics: {
    reach: string;
    impressions: string;
    clicks: string;
    profileVisits: string;
    cpm: string;
    cpc: string;
    costPerVisit: string;
  };
  analysis: string;
  performanceLabel: string;
}

interface CampaignReportProps {
  campaign: CampaignData;
  index: number;
}

const CampaignReport = ({ campaign, index }: CampaignReportProps) => {
  const EventIcon = campaign.eventIcon;
  
  return (
    <div className="space-y-6 pt-8 first:pt-0">
      {/* Campaign Header */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass">
          <EventIcon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{campaign.eventName}</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{campaign.eventDate}</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass">
          <Target className="w-4 h-4 text-emerald" />
          <span className="text-sm text-emerald font-medium">{campaign.campaignType}</span>
        </div>
      </div>

      {/* Investment */}
      <MetricCard
        icon={DollarSign}
        label="Investimento em Anúncios"
        value={campaign.investment}
        subValue="Meta Ads"
        variant="highlight"
        delay={1}
      />

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard
          icon={Users}
          label="Alcance"
          value={campaign.metrics.reach}
          subValue="pessoas atingidas"
          delay={2}
        />
        <MetricCard
          icon={Eye}
          label="Impressões"
          value={campaign.metrics.impressions}
          subValue="vezes exibido"
          delay={2}
        />
        <MetricCard
          icon={MousePointer}
          label="Cliques"
          value={campaign.metrics.clicks}
          subValue="interações"
          delay={2}
        />
        <MetricCard
          icon={UserCheck}
          label="Visitas no Perfil"
          value={campaign.metrics.profileVisits}
          subValue="usuários visitaram"
          variant="accent"
          delay={3}
        />
        <MetricCard
          icon={TrendingDown}
          label="CPM"
          value={campaign.metrics.cpm}
          subValue="custo por mil impressões"
          delay={3}
        />
        <MetricCard
          icon={TrendingDown}
          label="CPC"
          value={campaign.metrics.cpc}
          subValue="custo por clique"
          delay={3}
        />
      </div>

      {/* Cost per Profile Visit */}
      <div className="glass rounded-xl p-6 border-emerald/30 bg-emerald/5">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-emerald/10">
              <UserCheck className="w-6 h-6 text-emerald" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Custo por visita no perfil</p>
              <p className="text-3xl font-bold text-emerald">{campaign.metrics.costPerVisit}</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20">
            <span className="text-sm font-medium text-emerald">{campaign.performanceLabel}</span>
          </div>
        </div>
      </div>

      {/* Analysis */}
      <div className="glass rounded-xl p-6 border-l-4 border-l-emerald">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-emerald/10">
            <TrendingUp className="w-6 h-6 text-emerald" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Análise de Desempenho</h3>
            <p className="text-muted-foreground leading-relaxed">{campaign.analysis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignReport;
