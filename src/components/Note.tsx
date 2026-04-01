export default function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="note">
      <p className="note__text">NOTE:&nbsp;{children}</p>
    </div>
  );
}
