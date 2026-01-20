import { Music, Calendar, Target } from "lucide-react";

const ReportHeader = () => {
  return (
    <div className="animate-fade-up">
      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-coral/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 border border-coral/20">
          <span className="w-2 h-2 rounded-full bg-coral animate-pulse-slow" />
          <span className="text-sm font-medium text-coral">Relatório de Campanha</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">TRINCA BAR</span>
          </h1>
          <p className="text-xl text-muted-foreground">Análise de Performance Digital</p>
        </div>

        {/* Event Info */}
        <div className="flex flex-wrap gap-4 pt-2">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass">
            <Music className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium">Lucy Borges & Tico Gardin</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">16 de Janeiro</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass">
            <Target className="w-4 h-4 text-emerald" />
            <span className="text-sm text-emerald font-medium">Campanha de Alcance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;
