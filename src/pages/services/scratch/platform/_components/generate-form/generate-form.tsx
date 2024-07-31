import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Each from "../../../../../../components/each";
import { Button } from "../../../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../../components/ui/form";
import { Input } from "../../../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../components/ui/select";
import { serviceScratchPlatformCaptionSoundOptions } from "../../configs";
import { FormValues, generateFormSchema } from "./generate-form.schema";
import { generatePostCaptions } from "../../../../../../services/generate/generate-post-captions";

interface GenerateFormProps {
  socialNetwork: string;
  onSuccess: (captions: string[]) => void;
}
export default function GenerateForm({
  socialNetwork,
  onSuccess,
}: GenerateFormProps) {
  const form = useForm<FormValues>({
    defaultValues: {
      caption: "",
      captionSound: "",
    },
    resolver: zodResolver(generateFormSchema),
  });

  const handleGeneratePostCaptions = (data: FormValues) => {
    generatePostCaptions({
      socialNetwork,
      subject: data.caption,
      tone: data.captionSound,
    }).then((res) => {
      res?.data && onSuccess(res?.data);
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleGeneratePostCaptions)}>
          <div className="">
            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What topic do you want a caption for?</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Skipli is launching SkipliAI"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="captionSound"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What should your caption sound like?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a tone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <Each
                          of={serviceScratchPlatformCaptionSoundOptions}
                          renderer={(i) => (
                            <SelectItem value={i}>{i}</SelectItem>
                          )}
                        />
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>Generate caption</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
