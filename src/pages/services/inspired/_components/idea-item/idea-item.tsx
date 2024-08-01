"use client";

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../../../components/ui/card";

interface IdeaItemProps {
  idea: string;
  topic: string;
}
export default function IdeaItem({ topic, idea }: IdeaItemProps) {
  return (
    <Link
      to={{
        pathname: "/services/inspired/generate-caption-from-idea",
        search: new URLSearchParams({ idea, topic }).toString(),
      }}
    >
      <Card>
        <CardHeader />
        <CardContent>{idea}</CardContent>
      </Card>
    </Link>
  );
}
