import { Music, Calendar, Target } from "lucide-react";
import logoTrincaImg from "@/assets/logo-trinca.jpg";
import adhubAsterisk from "@/assets/adhub-asterisk.jpeg";

const ReportHeader = () => {
  return (
    <div className="animate-fade-up">
      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      {/* Floating asterisk decoration */}
      <div className="absolute top-10 right-10 w-20 h-20 opacity-20 animate-spin-slow hidden lg:block">
        <img src={adhubAsterisk} alt="" className="w-full h-full object-cover rounded-full" />
      </div>

      <div className="relative space-y-6">
        {/* Logos */}
        <div className="flex items-center gap-6 flex-wrap">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#f5f0e8] p-2 flex items-center justify-center">
            <img 
              src={logoTrincaImg} 
              alt="Trinca Bar" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-primary">ad</span>
              <span className="text-foreground">*</span>
              <span className="text-foreground">hub</span>
            </span>
            <span className="text-xs text-muted-foreground">Marketing Inteligente</span>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
          <span className="text-sm font-medium text-primary">Relatório de Campanha</span>
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
            <Music className="w-4 h-4 text-primary" />
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
