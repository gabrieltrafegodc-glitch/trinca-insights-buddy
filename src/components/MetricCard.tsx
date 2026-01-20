import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subValue?: string;
  variant?: "default" | "highlight" | "accent";
  delay?: number;
}

const MetricCard = ({ 
  icon: Icon, 
  label, 
  value, 
  subValue, 
  variant = "default",
  delay = 0 
}: MetricCardProps) => {
  const delayClass = delay === 1 ? "animate-fade-up-delay-1" 
    : delay === 2 ? "animate-fade-up-delay-2"
    : delay === 3 ? "animate-fade-up-delay-3"
    : delay === 4 ? "animate-fade-up-delay-4"
    : "animate-fade-up";

  const variantStyles = {
    default: "glass",
    highlight: "glass glow-pink border-primary/30",
    accent: "glass border-emerald/30",
  };

  const iconStyles = {
    default: "text-muted-foreground",
    highlight: "text-primary",
    accent: "text-emerald",
  };

  return (
    <div className={`${variantStyles[variant]} rounded-xl p-5 ${delayClass}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg bg-secondary ${iconStyles[variant]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-sm text-muted-foreground font-medium">{label}</span>
      </div>
      <div className="space-y-1">
        <p className={`text-2xl font-bold ${variant === "highlight" ? "gradient-text" : "text-foreground"}`}>
          {value}
        </p>
        {subValue && (
          <p className="text-sm text-muted-foreground">{subValue}</p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
