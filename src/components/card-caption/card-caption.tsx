"use client";

import { useState } from "react";
import { LOCAL_STORAGE_KEYS } from "../../constants/local-storage-keys";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { saveGeneratedContent } from "../../services/generate/save-generated-content";
import { unsavedGeneratedContent } from "../../services/generate/unsave-generated-content";
import Match from "../match";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface CardCaptionProps {
  caption: string;
  topic: string;
  captionId?: string;
}
export default function CardCaption({
  caption,
  topic,
  captionId: _captionId = "",
}: CardCaptionProps) {
  const [captionId, setCaptionId] = useState(_captionId);
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

  const handleUnSaveGeneratedCaption = () => {
    const data = {
      captionId,
      phoneNumber,
    };

    unsavedGeneratedContent(data).then(() => setCaptionId(""));
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
        <Match when={captionId}>
          <Button variant="destructive" onClick={handleUnSaveGeneratedCaption}>
            Unsaved
          </Button>
        </Match>
        <Match when={!captionId}>
          <Button onClick={handleSaveGeneratedCaption}>Save</Button>
        </Match>
      </CardFooter>
    </Card>
  );
}
