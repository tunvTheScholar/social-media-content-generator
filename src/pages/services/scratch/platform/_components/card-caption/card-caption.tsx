"use client";

import { useState } from "react";
import { Button } from "../../../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../../../components/ui/dropdown-menu";
import { saveGeneratedContent } from "../../../../../../services/generate/save-generated-content";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "../../../../../../constants/local-storage-keys";

interface CardCaptionProps {
  caption: string;
  topic: string;
}
export default function CardCaption({ caption, topic }: CardCaptionProps) {
  const [captionId, setCaptionId] = useState("");
  const [phoneNumber] = useLocalStorage(LOCAL_STORAGE_KEYS.PHONE_NUMBER, "");

  const { caption: c, title } = JSON.parse(caption) as {
    title: string;
    caption: string;
  };
  const handleShareToEmail = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(c);
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleShareToFacebook = () => {
    // TODO regist Facebook AppId
  };

  const handleSaveGeneratedCaption = () => {
    saveGeneratedContent({
      caption: c,
      title,
      phoneNumber,
      topic,
    }).then((res) => {
      res?.data.captionId && setCaptionId(res?.data.captionId);
    });
  };

  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent>{c}</CardContent>
      <CardFooter className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">Share</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleShareToEmail}>
              to Email
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleShareToFacebook}>
              to Facebook
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={handleSaveGeneratedCaption}>
          {captionId ? "Saved" : "Save"}
        </Button>
      </CardFooter>
    </Card>
  );
}
