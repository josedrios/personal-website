type QuoteType = {
  author?: string;
  children: React.ReactNode;
};
export default function Quote({
  author = "Some Dude",
  children: text,
}: QuoteType) {
  return (
    <figure className="quote">
      <blockquote className="quote__blockquote">
        <p className="quote__text">
          <i>{text}</i>
        </p>
      </blockquote>
      <figcaption className="quote__author">-&nbsp;{author}</figcaption>
    </figure>
  );
}
