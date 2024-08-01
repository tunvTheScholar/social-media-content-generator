import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Scroll, Sparkle } from "lucide-react";

interface ServicesProps {}
export default function Services(props: ServicesProps) {
  return (
    <div className="p-4">
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Generate post ideas and captions in seconds
      </h2>

      <div className="flex flex-col gap-4">
        <Link to="/services/scratch">
          <Button variant="ghost">
            Start from scratch
            <Scroll />
          </Button>
        </Link>
        <Link to="/services/inspired">
          <Button variant="outline">
            Get inspired
            <Sparkle />
          </Button>
        </Link>
      </div>
    </div>
  );
}
