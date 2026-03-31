type HeaderProps = {
  type?: number;
  children: React.ReactNode;
};

export default function Header({ type = 1, children }: HeaderProps) {
  if (type === 1) {
    return (
      <h1>
        <span className="header-prefix">/</span>
        {children}
      </h1>
    );
  } else if (type === 2) {
    return (
      <h2>
        <span className="header-prefix">~</span>
        {children}
      </h2>
    );
  } else if (type === 3) {
    return <h3>{children}</h3>;
  } else {
    return <h1>{children}</h1>;
  }
}
