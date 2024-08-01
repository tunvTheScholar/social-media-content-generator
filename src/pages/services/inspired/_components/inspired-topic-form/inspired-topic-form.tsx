import { useForm } from "react-hook-form";
import { InspiredTopic, inspiredTopicSchema } from "./inspired-topic.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/button";
import { getPostIdeas } from "../../../../../services/generate/get-post-ideas";

interface InspiredTopicFormProps {
  onSuccess: (ideas: string[]) => void;
}
export default function InspiredTopicForm({
  onSuccess,
}: InspiredTopicFormProps) {
  const form = useForm<InspiredTopic>({
    defaultValues: {
      topic: "",
    },
    resolver: zodResolver(inspiredTopicSchema),
  });

  const handleGetIdeasFrom = (data: InspiredTopic) => {
    getPostIdeas(data).then((res) => {
      onSuccess(res.data);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleGetIdeasFrom)}>
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What topic do you want ideas for?</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter a Topic" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end mt-4">
          <Button>Generate ideas</Button>
        </div>
      </form>
    </Form>
  );
}
