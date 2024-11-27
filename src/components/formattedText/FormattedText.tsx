export default function FormattedText({ htmlText }: { htmlText: string }) {
  const formattedText = htmlText.replace(/(\d+)/g, (match, p1, offset) => {
    return `${match}.`;
  });

  const htmlContent = { __html: formattedText };

  return (
    <div className="leading-8 text-start flex justify-start">
      <style>{`
        .parsed-html p {
          margin-bottom: 1em; 
        }
      `}</style>
      <div className="parsed-html" dangerouslySetInnerHTML={htmlContent} />
    </div>
  );
}
