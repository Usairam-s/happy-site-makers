import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: "primary" | "accent" | "success" | "warning";
}

const StatCard = ({ icon: Icon, value, label, color = "primary" }: StatCardProps) => {
  const colorClasses = {
    primary: "from-primary to-secondary",
    accent: "from-accent to-primary",
    success: "from-success to-accent",
    warning: "from-warning to-success",
  };

  return (
    <div className="text-center group">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${colorClasses[color]} bg-clip-text text-transparent`}>
        {value}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

export default StatCard;
