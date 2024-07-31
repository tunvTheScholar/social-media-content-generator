"use client";

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

interface CardCaptionProps {
  caption: string;
}
export default function CardCaption({ caption }: CardCaptionProps) {
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

  const handleShareToFacebook = () => {};

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
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}
