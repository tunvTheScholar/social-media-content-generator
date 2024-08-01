import { PLATFORMS } from "../../../../constants/platform";

type TOption<T> = {
  label: string;
  value: T;
};

export const serviceScratchPlatformOptions: TOption<string>[] = [
  {
    label: "Facebook",
    value: PLATFORMS.FB,
  },
  {
    label: "Instagram",
    value: PLATFORMS.IG,
  },
  {
    label: "Twitter",
    value: PLATFORMS.TW,
  },
];

export const serviceScratchPlatformCaptionSoundOptions = [
  "Friendly",
  "Luxury",
  "Relaxed",
  "Professional",
  "Bold",
  "Adventurous",
  "Witty",
  "Persuasive",
  "Empathetic",
];

export const serviceScratchPlatformMap = new Map(
  serviceScratchPlatformOptions.map((s) => [s.value, s])
);
