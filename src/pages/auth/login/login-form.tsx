import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  AccessCodeData,
  accessCodeSchema,
  PhoneNumberData,
  phoneNumberSchema,
} from "./login.schema";
import { createNewAccessCode } from "../../../services/access-code/create-new-access-code";
import { useState } from "react";
import Match from "../../../components/match";
import { validateAccessCode } from "../../../services/access-code/validate-access-code";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "../../../constants/local-storage-keys";

interface LoginFormProps {}
export default function LoginForm(props: LoginFormProps) {
  const [accessCode, setAccessCode] = useState("");
  const [_, setPhoneNumber] = useLocalStorage(
    LOCAL_STORAGE_KEYS.PHONE_NUMBER,
    ""
  );

  const form = useForm<PhoneNumberData>({
    defaultValues: {
      phoneNumber: "",
    },
    resolver: zodResolver(phoneNumberSchema),
  });

  const handleCreateNewAccessCode = (phoneNumberData: PhoneNumberData) => {
    createNewAccessCode(phoneNumberData)
      .then((res) => {
        setAccessCode(res.data.accessCode);
      })
      .catch((error) => {});
  };

  const accessCodeForm = useForm<AccessCodeData>({
    defaultValues: {
      accessCode: "",
    },
    resolver: zodResolver(accessCodeSchema),
  });

  const handleValidateAccessCode = (accessCodeData: AccessCodeData) => {
    const phoneNumber = form.getValues().phoneNumber;
    validateAccessCode({ ...accessCodeData, phoneNumber }).then((res) => {
      setPhoneNumber(phoneNumber);
      window.location.href = "/";
    });
  };

  return (
    <>
      <Match when={!accessCode}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateNewAccessCode)}>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+1 123 456 789" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Send Verification Code</Button>
          </form>
        </Form>
      </Match>
      <Match when={!!accessCode}>
        <Form {...accessCodeForm}>
          <form
            onSubmit={accessCodeForm.handleSubmit(handleValidateAccessCode)}
          >
            <FormField
              control={accessCodeForm.control}
              name="accessCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Access Code</FormLabel>
                  <FormDescription>
                    Enter the 6-digit access code sent to your phone number.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} placeholder="123456" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Match>
    </>
  );
}
