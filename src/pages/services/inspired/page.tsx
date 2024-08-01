import { useState } from "react";
import InspiredTopicForm from "./_components/inspired-topic-form";
import Each from "../../../components/each";
import IdeaItem from "./_components/idea-item/idea-item";

interface ServiceInspiredPageProps {}
export default function ServiceInspiredPage(props: ServiceInspiredPageProps) {
  const [ideas, setIdeas] = useState<string[]>([]);
  const [topic, setTopic] = useState("");

  return (
    <div className="p-4">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Get Inspried
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Stick staring at a blank page? Tell us what topic you have in mind and
        Skipli AI will generate a list of post ides and captions for you.
      </p>

      <InspiredTopicForm
        onSuccess={(t, i) => {
          setIdeas(i);
          setTopic(t);
        }}
      />
      <div className="flex flex-col gap-4 mt-4">
        <Each
          of={ideas}
          renderer={(i) => <IdeaItem topic={topic} idea={i} />}
        />
      </div>
    </div>
  );
}
