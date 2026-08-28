import JaaliPattern from "./JaaliPattern";

export default function JaaliDivider({
  id,
  tone = "light",
}: {
  id: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "#F6F1E7" : "#1B1815";
  return (
    <div
      className={`h-8 md:h-10 w-full overflow-hidden ${
        tone === "dark" ? "bg-ink" : "bg-cream"
      }`}
    >
      <JaaliPattern id={id} color={color} opacity={0.14} size={40} />
    </div>
  );
}
