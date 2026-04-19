export default function Note({
  children,
  title = "note",
  danger = false,
}: {
  children: React.ReactNode;
  title?: string;
  danger?: boolean;
}) {
  return (
    <div className={`note ${danger && "note--danger"}`}>
      <p className="note__text">
        <span className="note__prefix">{title.toUpperCase()}:</span>
        {children}
      </p>
    </div>
  );
}
