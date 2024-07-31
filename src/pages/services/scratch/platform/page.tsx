import { useLoaderData } from "react-router-dom";
import { serviceScratchPlatformMap } from "./configs";
import GenerateForm from "./_components/generate-form";

interface ScratchPlatformProps {}
export default function ScratchPlatform(props: ScratchPlatformProps) {
  const platformId = useLoaderData() as string;

  const platform = serviceScratchPlatformMap.get(platformId);

  if (!platform) {
    window.location.href = "/services/scratch/fb";
    return null;
  }

  return (
    <div>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {platform.label} post
      </h3>
      <p>What topic do you want a caption for?</p>
      <GenerateForm />
    </div>
  );
}
