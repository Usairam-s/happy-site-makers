import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, company, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-primary/10 bg-gradient-to-br from-card to-muted/20">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-warning text-warning" />
          ))}
        </div>
        <p className="text-foreground/90 mb-6 leading-relaxed italic">"{content}"</p>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role} at {company}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
