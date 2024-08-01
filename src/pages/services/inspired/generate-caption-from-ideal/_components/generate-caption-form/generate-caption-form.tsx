import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../../../../components/ui/form";
import { Input } from "../../../../../../components/ui/input";
import {
  GenerateCaption,
  generateCaptionSchema,
} from "./generate-caption.schema";
import { createCaptionsFromIdeas } from "../../../../../../services/generate/create-captions-from-idea";

interface GenerateCaptionFormProps {
  onSuccess?: (captions: string[]) => void;
  defaultValues?: GenerateCaption;
}
export default function GenerateCaptionForm({
  onSuccess,
  defaultValues = {
    idea: "",
    topic: "",
  },
}: GenerateCaptionFormProps) {
  const form = useForm<GenerateCaption>({
    defaultValues,
    resolver: zodResolver(generateCaptionSchema),
  });

  const handleGenerateCaptionFromIdea = async (data: GenerateCaption) => {
    createCaptionsFromIdeas(data).then((res) => {
      onSuccess && onSuccess(res.data);
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleGenerateCaptionFromIdea)}>
          <FormField
            control={form.control}
            name="idea"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Enter a Topic" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end mt-4">
            <Button>Create caption</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
