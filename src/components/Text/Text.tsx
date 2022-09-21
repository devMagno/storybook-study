interface TextProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "p";
  children: React.ReactNode;
}
export default function Text({ tag = "h1", children }: TextProps) {
  const Tag = tag || "h1";

  return <Tag>{children}</Tag>;
}
