interface MatchProps {
  when?: boolean | string | number | null;
  children: React.ReactNode;
}

export default function Match({ children, when = false }: MatchProps) {
  if (when) {
    return <>{children}</>;
  }
  return null;
}
