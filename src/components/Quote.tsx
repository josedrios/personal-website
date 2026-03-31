export default function Quote({ children }: { children: React.ReactNode }) {
  let dividerIndex;
  if (typeof children === "string") {
    dividerIndex = children.lastIndexOf("-");
  } else {
    return;
  }
  const text = children.slice(0, dividerIndex);
  const author = children.slice(dividerIndex);
  return (
    <figure className="quote">
      <blockquote className="quote__blockquote">
        <p className="quote__text">
          <i>{text}</i>
        </p>
      </blockquote>
      <figcaption className="quote__author">{author}</figcaption>
    </figure>
  );
}
