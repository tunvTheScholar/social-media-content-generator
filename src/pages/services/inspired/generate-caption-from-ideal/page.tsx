import { useSearchParams } from "react-router-dom";
import GenerateCaptionForm from "./_components/generate-caption-form/generate-caption-form";
import { useState } from "react";
import Each from "../../../../components/each";
import CardCaption from "../../../../components/card-caption";

interface GenerateCaptionFromIdeaProps {}
export default function GenerateCaptionFromIdea(
  props: GenerateCaptionFromIdeaProps
) {
  const [searchParams] = useSearchParams();
  const idea = searchParams.get("idea");
  const topic = searchParams.get("topic");

  const [captions, setCaptions] = useState<string[]>([]);

  if (!idea) {
    window.location.href = "/services/inspired";
    return null;
  }

  return (
    <div className="p-4">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Your idea
      </h2>
      <GenerateCaptionForm
        defaultValues={{ idea, topic: topic || "" }}
        onSuccess={(_captions) => setCaptions(_captions)}
      />
      <div className="flex flex-col mt-4 gap-4">
        <Each
          of={captions}
          renderer={(_caption) => (
            <CardCaption caption={_caption} topic={topic || ""} />
          )}
        />
      </div>
    </div>
  );
}
