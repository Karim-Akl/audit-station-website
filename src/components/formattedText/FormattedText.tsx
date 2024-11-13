export default function FormattedText({ htmlText }: { htmlText: string }) {
    const formattedText = htmlText.replace(/(\d+)/g, (match, p1, offset) => {
      const lineNumber = offset > 0 ? `\n${match}.` : `${match}.`;
      return `<br/>${lineNumber}`;
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
  