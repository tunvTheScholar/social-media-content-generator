"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "../../../../../components/ui/card";

interface IdeaItemProps {
  idea: string;
}
export default function IdeaItem({ idea }: IdeaItemProps) {
  return (
    <Card>
      <CardHeader />
      <CardContent>{idea}</CardContent>
    </Card>
  );
}
