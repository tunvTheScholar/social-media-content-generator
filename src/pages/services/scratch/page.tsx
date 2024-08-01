import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { PLATFORMS } from "../../../constants/platform";

interface ServiceScratchProps {}
export default function ServiceScratch(props: ServiceScratchProps) {
  return (
    <div>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Generate unique captions from scratch
      </h3>
      <div className="flex flex-col gap-4 ">
        <Link to={`/services/scratch/${PLATFORMS.FB}`}>
          <Button variant="link">Facebook post</Button>
        </Link>
        <Link to={`/services/scratch/${PLATFORMS.IG}`}>
          <Button variant="link">Instagram post</Button>
        </Link>
        <Link to={`/services/scratch/${PLATFORMS.TW}`}>
          <Button variant="link">Twitter post</Button>
        </Link>
      </div>
    </div>
  );
}
