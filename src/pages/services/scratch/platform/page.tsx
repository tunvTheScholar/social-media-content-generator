import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Each from "../../../../components/each";
import Match from "../../../../components/match";
import GenerateForm from "./_components/generate-form";
import { serviceScratchPlatformMap } from "./configs";
import CardCaption from "./_components/card-caption";

interface ScratchPlatformProps {}
export default function ScratchPlatform(props: ScratchPlatformProps) {
  const platformId = useLoaderData() as string;

  const platform = serviceScratchPlatformMap.get(platformId);
  const [captions, setCaptions] = useState<string[]>([]);
  const [topic, setTopic] = useState<string>("");

  if (!platform) {
    window.location.href = "/services/scratch/fb";
    return null;
  }

  return (
    <div className="overflow-scroll max-h-screen w-full">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {platform.label} post
      </h3>
      <p>What topic do you want a caption for?</p>
      <GenerateForm
        socialNetwork={platform.label}
        onSuccess={(t, c) => {
          setCaptions(c);
          setTopic(t);
        }}
      />

      <Match when={captions.length}>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Captions generated for you
        </h3>

        <div className="flex flex-col gap-4">
          <Each
            of={captions}
            renderer={(c) => <CardCaption caption={c} topic={topic} />}
          />
        </div>
      </Match>
    </div>
  );
}
