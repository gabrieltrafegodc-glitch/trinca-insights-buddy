import { TrendingUp, AlertCircle, Wallet } from "lucide-react";

const AnalysisSection = () => {
  return (
    <div className="space-y-6 animate-fade-up-delay-4">
      {/* Analysis Card */}
      <div className="glass rounded-xl p-6 border-l-4 border-l-emerald">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-emerald/10">
            <TrendingUp className="w-6 h-6 text-emerald" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Análise de Desempenho</h3>
            <p className="text-muted-foreground leading-relaxed">
              Campanha com <span className="text-emerald font-medium">ótimo desempenho</span> em engajamento, 
              gerando alto volume de visitas ao perfil com custo extremamente baixo, 
              fortalecendo a divulgação do evento e a presença digital do Trinca.
            </p>
          </div>
        </div>
      </div>

      {/* Observation Card */}
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

      {/* Balance Card */}
      <div className="glass rounded-xl p-6 glow-coral border-coral/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-coral/10">
              <Wallet className="w-6 h-6 text-coral" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Saldo remanescente em conta</p>
              <p className="text-2xl font-bold gradient-text">R$ 86,37</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisSection;
